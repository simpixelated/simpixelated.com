// inspired by https://github.com/emgoto/gatsby-plugin-react-social-cards/blob/main/gatsby-node.js
// usage:
// - npm run serve:social
// - node ./scripts/generate-social-cards.js year-end-review-2022
const { join } = require("path")
const puppeteer = require("puppeteer")

const DEFAULT_BASE_URL = "http://localhost:8080"
const DEFAULT_IMAGE_FOLDER = "./src/static/banners"
const DEFAULT_DIMENSIONS = [
  {
    width: 1200,
    height: 628,
  },
]
const DEFAULT_TIMEOUT = 5000

const timeoutFn = async ms => new Promise(resolve => setTimeout(resolve, ms))

const takeScreenshot = async (url, width, height, destination, timeout) => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  })
  const page = await browser.newPage()
  await page.setViewport({
    width,
    height,
    deviceScaleFactor: 1,
  })
  await page.goto(url)
  await timeoutFn(timeout) // wait for page to finish loading
  await page.screenshot({
    path: destination,
    clip: {
      x: 0,
      y: 0,
      width,
      height,
    },
  })

  await browser.close()
}

const main = async slug => {
  const [{ width, height }] = DEFAULT_DIMENSIONS
  const destinationFile = join(
    process.cwd(),
    DEFAULT_IMAGE_FOLDER,
    `${slug}-social-card.png`
  )
  takeScreenshot(
    `${DEFAULT_BASE_URL}/${slug}`,
    width,
    height,
    destinationFile,
    DEFAULT_TIMEOUT
  )
}

main(process.argv[2])
