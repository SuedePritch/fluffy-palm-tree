const router = require('express').Router();
const Post = require('../../models/User');

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
    // res.status(200).json(posts)
        res.render('postings', { 
            posts, 
            loggedIn: req.session.loggedIn
        });
    });