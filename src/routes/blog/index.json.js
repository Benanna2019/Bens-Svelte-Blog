import fs from "fs";
import path from "path";
import marked from "marked";
import grayMatter from "gray-matter";

function getAllPosts(filesPath) {
	const data = fs.readdirSync(filesPath).map((filename) => {
		const post = fs.readFileSync(path.resolve(filesPath, filename), "utf-8");

		//parse front matter from string
		const { data, content } = grayMatter(post);
		console.log("post is", post);

		//turns markdown into html
		const renderer = new marked.Renderer();
		const html = marked(content, { renderer });

		//builds data
		return {
			html,
			slug: filename.substring(0, filename.length - 2),
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
	const sortedPosts = sortPosts(posts);

	res.writeHead(200, {
		"Content-Type": "application/json",
	});

	res.end(JSON.stringify(sortedPosts));
}
