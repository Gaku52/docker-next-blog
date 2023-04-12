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
  });

  const writer = fs.createWriteStream(outputPath);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
};

const fetchData = async () => {
  try {
    const { data } = await axios.get(`${MICRO_CMS_API_BASE_URL}/posts`, {
      headers: {
        "X-API-KEY": MICRO_CMS_API_KEY,
      },
    });

    // Fetch category data
    const { data: categoryData } = await axios.get(`${MICRO_CMS_API_BASE_URL}/categories`, {
      headers: {
        "X-API-KEY": MICRO_CMS_API_KEY,
      },
    });

    const categories = categoryData.contents;

    // Add category names to article tags
    const articles = data.contents.map(article => {
      const tags = article.tags.map(tag => {
        const category = categories.find(category => category.id === tag);
        return category.name;
      });

      return { ...article, tags };
    });

    return articles;
  } catch (error) {
    console.error(error);
  }
};


const generateMarkdown = async (articles) => {
  for (const article of articles) {
    const filePath = path.join(__dirname, "_posts", `${article.id}.md`);

    // Convert the date to a JavaScript Date object
    const dateObject = new Date(article.date);

    // Extract the year, month, and day
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");

    // Create the new date format
    const formattedDate = `${year}-${month}-${day}`;

    // Update article tags to use category names
    const tags = article.tags.map(tag => `#${tag}`);

    const frontMatter = {
      title: article.title,
      excerpt: article.excerpt,
      coverImage: `/img/uploads/${article.coverImage.filename}`,
      date: formattedDate,
      tags, // Updated tags
    };

    const frontMatterString = yaml.dump(frontMatter);
    const markdownContent = `---\n${frontMatterString}---\n\n${article.content}`;

    fs.writeFileSync(filePath, markdownContent, "utf-8");

    const imageOutputPath = path.join(
      __dirname,
      "public",
      "img",
      "uploads",
      article.coverImage.filename
    );

    await downloadImage(article.coverImage.url, imageOutputPath);
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
