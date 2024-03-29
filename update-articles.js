const fs = require("fs");
const path = require("path");
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

  const parsedUrl = new URL(url);
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
    const config = {
      headers: {
        "X-API-KEY": MICRO_CMS_API_KEY,
      },
    };

    const response = await axios.get(`${MICRO_CMS_API_BASE_URL}`, config);
    const data = response.data;

    // レスポンスヘッダからCache-Controlを取得し、次回のリクエストのヘッダに設定する
    const cacheControl = response.headers["cache-control"];
    if (cacheControl) {
      config.headers["Cache-Control"] = cacheControl;
    }

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


const getNextFileName = (dirPath) => {
  const fileNames = fs.readdirSync(dirPath).map(fileName => parseInt(fileName.slice(0, 5)));
  const maxFileName = Math.max(...fileNames);
  return `${String(maxFileName + 1).padStart(5, '0')}`;
};

const htmlToMarkdown = (htmlContent) => {
  const headingReplacements = [
    { regex: /<h1[^>]*>(.*?)<\/h1>/gi, replace: '# $1\n' },
    { regex: /<h2[^>]*>(.*?)<\/h2>/gi, replace: '## $1\n' },
    { regex: /<h3[^>]*>(.*?)<\/h3>/gi, replace: '### $1\n' },
    { regex: /<h4[^>]*>(.*?)<\/h4>/gi, replace: '#### $1\n' },
    { regex: /<h5[^>]*>(.*?)<\/h5>/gi, replace: '##### $1\n' },
    { regex: /<h6[^>]*>(.*?)<\/h6>/gi, replace: '###### $1\n' },
  ];

  let markdownContent = htmlContent;

  headingReplacements.forEach((replacement) => {
    markdownContent = markdownContent.replace(replacement.regex, replacement.replace);
  });

  // <p>タグ内の<br>タグを単一の改行に変換と文末にMarkdown用の2半角スペース追記
  markdownContent = markdownContent.replace(/<p[^>]*>(.*?)<\/p>/gi, (match, p1) => {
    p1 = p1.replace(/<br\s*\/?>/gi, '  '+'\n');
    return `${p1}\n\n`;
  });

  // 連続した改行を削除
  markdownContent = markdownContent.replace(/\n{3,}/g, '\n\n');

  return markdownContent;
};

const generateMarkdown = async (articles) => {
  const postDirPath = path.join(__dirname, '_posts');

  for (const article of articles) {
    // 既存のファイルを検索して、タイトルが一致するファイルがあるかどうかを確認する
    const existingFile = fs.readdirSync(postDirPath).find((fileName) => fileName.endsWith(`${article.title.replace(/ /g, '-')}.md`));
    const fileName = existingFile || `${getNextFileName(postDirPath)}-${article.title.replace(/ /g, '-')}.md`;
    const filePath = path.join(postDirPath, fileName);

    // 記事の日時情報をUTCとして取得する
    const dateObject = new Date(article.date);
    const jstDate = new Date(dateObject.getTime() + (9 * 60 * 60 * 1000)); // JSTに変換する（UTC+9時間）
    const formattedDate = jstDate.toISOString().slice(0, 16).replace('T', ' '); // YYYY-MM-DDTHH:mm を YYYY-MM-DD HH:mm に変換

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

    const markdownContentFromHtml = htmlToMarkdown(article.content);

    const frontMatterString = yaml.dump(frontMatter, { lineWidth: 1000, forceQuotes: true });
    const markdownContent = `---\n${frontMatterString}---\n\n${markdownContentFromHtml}\n`;

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

(async () => {
  try {
    const articles = await fetchData();
    await generateMarkdown(articles);
    console.log("Articles updated successfully");
  } catch (error) {
    console.error(error);
  }
})();
