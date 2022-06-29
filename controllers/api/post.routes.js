const router = require('express').Router();
const {Post, User} = require('../../models/');

router.get('/postings', async (req, res) => {
    const postData = await Post.findAll({
        include: [    
        {   
            model: User,
            attributes: ['username'], 
        },

    ]
    }).catch((err) => { 
        
        res.json(err);
    });
    const posts = postData.map((post) => post.get({ plain: true }));
        res.render('postings', { 
            posts, 
            loggedIn: req.session.loggedIn
        });
    });

    module.exports = router;