let Project = require("../models/project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.json({ message: err });
  }
};

const addProject = async (req, res) => {
  const newProject = new Project({
    name: req.body.name,
    avgPerf: req.body.avgPerf,
    avgAccess: req.body.avgAccess,
    avgBestP: req.body.avgBestP,
    avgSeo: req.body.avgSeo,
  });

  try {
    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (err) {
    res.json({ message: err });
  }
};

const deleteProject = async (req, res) => {
  try {
    const removedProject = await Project.deleteOne({ _id: req.params.id });
    res.json(removedProject);
  } catch (err) {
    res.json({ message: err });
  }
};

const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.updateOne(
      { _id: req.params.id },
      {
        $set: {
          avgPerf: req.body.avgPerf,
          avgAccess: req.body.avgAccess,
          avgSeo: req.body.avgSeo,
          avgBestP: req.body.avgBestP,
        },
      }
    );

    res.json(updatedProject);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getProjects,
  addProject,
  deleteProject,
  updateProject,
};
