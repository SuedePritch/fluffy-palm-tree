const router = require('express').Router();
const {Post, User, Tag} = require('../models/');
const withAuth = require('../utils/auth')

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

router.get('/', async (req, res) => {res.render('landing',{loggedIn: req.session.loggedIn})});
router.get('/signup', async (req, res) => {res.render('signup',{loggedIn: req.session.loggedIn});});
router.get('/login', async (req, res) => {res.render('login',{loggedIn: req.session.loggedIn});});


router.get('/postings', async (req, res) => {
    const postData = await Post.findAll({
        include: [    
        {   
            model: User,
            attributes: ['username'], 
        },
        {   
            model: Tag,
            attributes: ['tech_name', 'tech_icon']
        },

    ]
    }).catch((err) => { 
        
        res.json(err);
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    // res.status(200).json(postData);
        res.render('postings', { 
            posts, 
            loggedIn: req.session.loggedIn
        });
    });



    router.get('/postform', async (req, res) => {
        const tagData = await Tag.findAll({
        }).catch((err) => { 
            
            res.json(err);
        });
        const tags = tagData.map((tag) => tag.get({ plain: true }));
        // res.status(200).json(tagData);
            res.render('postform', { 
                tags, 
                loggedIn: req.session.loggedIn
            });
    });
module.exports = router;