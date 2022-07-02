const router = require('express').Router();
const {Post, TechTag} = require('../../models/');
const withAuth = require('../../utils/auth')

//NEW POST
router.post('/', withAuth, async (req, res) => {
    try {
        const newPostData = await Post.create({
            name: req.body.name,
            job: req.body.job,
            price: req.body.price,
            description: req.body.description,
            profile: req.body.profile,
            skillsChosen: req.body.skillsChosen,//This is array of chosen skills  Javascript/NodeJS etc
            user_id: req.session.userId,
        }).then((skills) => {
        if (req.body.skillsChosen && req.body.skillsChosen.length) {
            const techTagIdArr = req.body.skillsChosen.map((chosen) => {
                return {
                    tag_id: chosen,
                    tech_id: skills.id,
                };
            });
            return TechTag.bulkCreate(techTagIdArr);
        }
        })
        .then((skillTagIds) => 

        res.render('dashboard', { 
            loggedIn: req.session.loggedIn
        }))
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});


// DELETE POST
router.delete('/:id', async (req, res) => {
    try {
        const deletePost = await Post.destroy({where: 
            { 
                id: req.params.id 
            }})
        res.status(200).json(deletePost)

    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});



    module.exports = router;