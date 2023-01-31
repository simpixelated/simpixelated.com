// const fs = require('fs')
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

  // console.log(directories)
  // fs.readdir('./src/posts', function (err, files) {
  //   if (err) {
  //     console.error("Could not list the directory.", err);
  //     process.exit(1);
  //   }

  //   files.filter(file => !file.endsWith('.'))

  //   files.forEach((file, index) => {
  //     // Make one pass and make the file complete
  //     // var fromPath = path.join(moveFrom, file);
  //     // var toPath = path.join(moveTo, file);
  //     console.log(file)
  //     // fs.rename('/path/to/Afghanistan.png', '/path/to/AF.png', function(err) {
  //     //   if ( err ) console.log('ERROR: ' + err);
  //     // })
  //   })
  // })
}

main()
