const path = require('path');
const { promisify } = require('util');
const frontMatter = require('front-matter');
const fs = require('fs');
const moment = require('moment');

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const postsDir = path.join(__dirname, 'posts');

const deserialize = parsed => ({
    title: parsed.attributes.title,
    date: parsed.attributes.date,
    slug: parsed.attributes.slug,
    body: parsed.body,
});

const sortByDate = (post1, post2) => moment(post2.date).isBefore(post1.date);

const getParsedMarkdownFile = async (filename) => {
    const markdown = await readFile(path.join(postsDir, filename), 'utf-8')
    const parsed = frontMatter(markdown);
    return deserialize(parsed);
};

const fetchBySlug = async (slug) => getParsedMarkdownFile(`${slug}.md`);

const fetch = async () => {
    const filenames = await readdir(postsDir)
    return Promise.all(filenames.map(getParsedMarkdownFile)).then((posts) => {
    return posts
        .filter((post) => post.title && post.date && post.slug)
        .sort((a, b) => {
            const format = 'DD/MM/YYYY';
            return moment(b.date, format) - moment(a.date, format);
        });
    });
};

module.exports = {
    fetch,
    fetchBySlug
};
