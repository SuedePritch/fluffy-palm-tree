const router = require('express').Router();
const {Post, User} = require('../../models/');

//NEW POST
router.post('/', async (req, res) => {
    try {
      const newPostData = await Post.create({
        name: req.body.name,
        job: req.body.job,
        tech_id: req.body.tech_id,
        price: req.body.price,
        description: req.body.description,
        user_id: req.session.userId,
      });
      res.status(200).json('new Post created')
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

    module.exports = router;