// renames blog posts from date-slug/index.md to slug.md
const { readdir, rename } = require("fs/promises")

const getDirectories = async source =>
  (await readdir(source, { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

const renameFile = async dir => {
  const oldPath = `./src/posts/${dir}/index.md`
  const newName = dir.slice(11)
  const newPath = `./src/posts/${newName}.md`
  await rename(oldPath, newPath)
}

const main = async () => {
  const directories = await getDirectories("./src/posts")
  await Promise.allSettled(directories.map(renameFile))
}

main()
