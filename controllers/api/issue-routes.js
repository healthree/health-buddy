const router = require("express").Router();
const { Issues } = require ("../../models");

router.get("/", (req,res) => {
    Issues.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get("/:id", (req, res) => {
    Issues.findOne({
        where: {
            id: req.params.id,
        },
    })
    .then((dbPostData) => {
        if (!dbPostData) {
            res.status(400).json({ message: "No issues found with this id"});
            return;
        }
        res.json(dbPostData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});


  module.exports = router;
  