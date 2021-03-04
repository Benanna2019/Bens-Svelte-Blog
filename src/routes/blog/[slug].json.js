import fs from "fs";
import path from "path";
import marked from "marked";
import grayMatter from "gray-matter";

// const lookup = new Map();
// posts.forEach((post) => {
// 	lookup.set(post.slug, JSON.stringify(post));
// });

export function get(req, res, next) {
  const { slug } = req.params;

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  // Reading correct file

  const post = fs.readFileSync(
    path.resolve("src/posts", `${slug}.md`),
    "utf-8"
  );

  //parse frontmatter

  const { data, content } = grayMatter(post);

  // Render html from string
  const renderer = new marked.Renderer();
  const html = marked(content, { renderer });
  const blogPost = {
    html,
    ...data,
  };

  res.end(JSON.stringify(blogPost));
}
