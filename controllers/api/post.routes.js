const router = require('express').Router();
const {Post, TechTag} = require('../../models/');

//NEW POST
router.post('/', async (req, res) => {
    try {
        const newPostData = await Post.create({
            name: req.body.name,
            job: req.body.job,
            price: req.body.price,
            description: req.body.description,
            skillsChosen: req.body.skillsChosen,//This is array of chosen skills  Javascript/NodeJS etc
            user_id: req.session.userId,
        }).then((skills) => {
        // if there's product tags, we need to create pairings to bulk create in the ProductTag model
        if (req.body.skillsChosen && req.body.skillsChosen.length) {
            const techTagIdArr = req.body.skillsChosen.map((chosen) => {
                return {
                    tag_id: chosen,
                    tech_id: skills.id,
                };
            });
            return TechTag.bulkCreate(techTagIdArr);
        }
        // if no product tags, just respond
        })
        .then((skillTagIds) => 
        res.render('postings', { 
            skills,
            
            loggedIn: req.session.loggedIn
        }))
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

    module.exports = router;