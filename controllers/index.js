const router = require('express').Router();
const {Post} = require('../models')
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
router.get('/', async (req, res) => {res.render('landing');});
router.get('/signup', async (req, res) => {res.render('signup');});
router.get('/login', async (req, res) => {res.render('login');});
// router.get('/', async (req, res) => 
    // const postData = await Post.findAll({
    //     include: [    
    //     {   
    //         model: User,
    //         attributes: ['username'], 
    //     },

    // ]
    // }).catch((err) => { 
        
    //     res.json(err);
    // });
    // const posts = postData.map((post) => post.get({ plain: true }));
    // // res.status(200).json(posts)
    //     res.render('homepage', { 
    //         posts, 
    //         loggedIn: req.session.loggedIn
    //     });
    // });

    module.exports = router;