const fs = require("fs");
const path = require("path");
const urlModule = require("url");
const axios = require("axios");
const yaml = require("js-yaml");

const MICRO_CMS_API_KEY = process.env.MICRO_CMS_API_KEY;
const MICRO_CMS_API_BASE_URL = process.env.MICRO_CMS_API_BASE_URL;

const downloadImage = async (url, outputPath) => {
  const response = await axios({
    method: "GET",
    url: url,
    responseType: "stream",
  }).catch((error) => {
    console.error(`Error downloading image from URL: ${url}`);
    console.error(error);
  });

  const parsedUrl = urlModule.parse(url);
  const fileName = path.basename(parsedUrl.pathname);
  const writer = fs.createWriteStream(path.join(outputPath, fileName));

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
};

const fetchData = async () => {
  try {
    const { data } = await axios.get(`${MICRO_CMS_API_BASE_URL}`, {
      headers: {
        "X-API-KEY": MICRO_CMS_API_KEY,
      },
    });

    console.log("Data from API:", data);

    const articles = data.contents.map(article => {
      console.log("Tags data:", article.tags);
      console.log("coverImage object:", article.coverImage);
      console.log("ogImage object:", article.ogImage);

      const tags = article.tags || [];

      return { ...article, tags };
    });

    return articles;
  } catch (error) {
    console.error(error);
  }
};

const generateMarkdown = async (articles) => {
  for (const article of articles) {
    let filePath;
    if (article.new) {
      const postsDir = path.join(__dirname, "_posts");
      const fileNames = fs.readdirSync(postsDir);
      const newArticleFileName = getNewArticleFileName(fileNames);
      filePath = path.join(__dirname, "_posts", newArticleFileName);
      article.id = newArticleFileName.slice(0, -3); // 新しい記事のIDを設定
    } else {
      filePath = path.join(__dirname, "_posts", `${article.id}.md`);
    }

    const dateObject = new Date(article.date);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const hour = String(dateObject.getHours()).padStart(2, "0");
    const minute = String(dateObject.getMinutes()).padStart(2, "0");
    const second = String(dateObject.getSeconds()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}T${hour}:${minute}:${second}`;

    const frontMatter = {
      title: `${article.title}`,
      excerpt: `${article.excerpt}`,
      coverImage: article.coverImage ? `/img/uploads/${path.basename(article.coverImage.url)}` : undefined,
      date: formattedDate,
      ogImage: article.ogImage ? { url: `/img/uploads/${path.basename(article.ogImage.url)}` } : undefined,
    };

    if (article.tags.length > 0) {
      frontMatter.tags = article.tags.map(tag => `${tag}`);
    }

    const frontMatterString = yaml.dump(frontMatter, { lineWidth: 1000, forceQuotes: true });
    const markdownContent = `---\n${frontMatterString}---\n\n${article.content.replace(/<\/?p>/gi, " ")}\n`

    fs.writeFileSync(filePath, markdownContent, "utf-8");

    if (article.coverImage) {
      const coverImageOutputPath = path.join(
        __dirname,
        "public",
        "img",
        "uploads",
      );

      await downloadImage(article.coverImage.url, coverImageOutputPath);
    }

    if (article.ogImage) {
      const ogImageOutputPath = path.join(
        __dirname,
        "public",
        "img",
        "uploads",
      );

      await downloadImage(article.ogImage.url, ogImageOutputPath);
    }
  }
};

const getNewArticleFileName = (fileNames) => {
  const maxId = fileNames.reduce((max, fileName) => {
    const id = parseInt(fileName.split("-")[0], 10);
    return id > max ? id : max;
  }, 0);

  const newId = maxId + 1;
  return `${newId.toString().padStart(4, "0")}-new-article.md`;
};


(async () => {
  try {
    const articles = await fetchData();

    // 新規記事を作成
    const newArticle = {
      id: "",
      title: "",
      excerpt: "",
      content: "",
      date: new Date().toISOString(),
      tags: [],
      new: true, // 新規記事を示すフラグ
    };
    articles.push(newArticle);

    await generateMarkdown(articles);
    console.log(`New article created: ${newArticle.id}.md`);
    console.log("Articles updated successfully");
  } catch (error) {
    console.error(error);
  }
})();