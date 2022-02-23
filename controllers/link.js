let Link = require("../models/link");

const getLinks = async (req, res) => {
  try {
    const links = await Link.find();
    res.json(links);
  } catch (err) {
    res.json({ message: err });
  }
};

const addLink = async (req, res) => {
  const newLink = new Link({
    name: req.body.name,
    title: "",
    desc: "",
    image: "",
    perf: 0,
    access: 0,
    seo: 0,
    bestP: 0,
    projectId: req.body.projectId,
  });

  try {
    const savedLink = await newLink.save();
    res.json(savedLink);
  } catch (err) {
    res.json({ message: err });
  }
};

const deleteLink = async (req, res) => {
  try {
    const removedLink = await Link.deleteOne({ _id: req.params.id });
    res.json(removedLink);
  } catch (err) {
    res.json({ message: err });
  }
};

const updateLink = async (req, res) => {
  try {
    const updatedLink = await Link.updateOne(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          desc: req.body.desc,
          image: req.body.image,
          perf: req.body.perf,
          access: req.body.access,
          seo: req.body.seo,
          bestP: req.body.bestP,
        },
      }
    );

    res.json(updatedLink);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getLinks,
  addLink,
  deleteLink,
  updateLink,
};
