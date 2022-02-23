const express = require("express");
const router = express.Router();
const fs = require("fs");
const urlMetadata = require("url-metadata");
const fse = require("fs-extra");
router.use(express.json());

const { launchChromeAndRunLighthouse } = require("../lighthouse.js");

const opts = {
  chromeFlags: ["--headless", "--no-sandbox"],
  onlyCategories: ["performance", "seo", "accessibility", "best-practices"],
  output: "html",
  port: "6524",
};

router.post("/lighthouse", async (req, res, next) => {
  const { url, project, id } = req.body;

  try {
    launchChromeAndRunLighthouse(url, opts).then((result) => {
      if (result == undefined) {
        console.log("Lighthouse test failed to run");
        reject();
      }
      try {
        fse.outputFile(
          `../Frontend/Reports/${project}/${id}.html`,
          result.report
        );

        let perf = result.lhr.categories.performance.score;
        let acc = result.lhr.categories.accessibility.score;
        let bestp = result.lhr.categories["best-practices"].score;
        let seo = result.lhr.categories.seo.score;
        urlMetadata(url).then(
          function (metadata) {
            let title = metadata.title;
            let description = metadata.description;
            let favicon = metadata.image;
            res.json({
              perf,
              acc,
              bestp,
              seo,
              title,
              description,
              favicon,
            });
          },
          function (error) {
            console.log(error);
          }
        );
      } catch (err) {
        console.log("Error writing file");
        console.log(err);
        reject();
      }
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
