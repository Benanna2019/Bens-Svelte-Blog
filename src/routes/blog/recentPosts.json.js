import fs from "fs";
import path from "path";
import marked from "marked";
import grayMatter from "gray-matter";

function getAllPosts(filesPath) {
  const data = fs.readdirSync(filesPath).map((filename) => {
    const post = fs.readFileSync(path.resolve(filesPath, filename), "utf-8");

    //parse front matter from string
    const { data, content } = grayMatter(post);

    //turns markdown into html
    const renderer = new marked.Renderer();
    const html = marked(content, { renderer });

    //builds data
    return {
      html,
      ...data,
    };
  });
  return data;
}

function sortPosts(posts) {
  return posts.sort((post1, post2) => {
    const date1 = new Date(post1.date);
    const date2 = new Date(post2.date);
    return date2 - date1;
  });
}

export function get(req, res) {
  const posts = getAllPosts("src/posts");
  const [one, two, three] = sortPosts(posts);
  // add a way to only return the first three posts

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify([one, two, three]));
}
