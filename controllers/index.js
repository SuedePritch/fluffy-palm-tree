const router = require('express').Router();
const {Post, User, Tag, Project} = require('../models/');
const withAuth = require('../utils/auth')

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

router.get('/', async (req, res) => {res.render('landing',{loggedIn: req.session.loggedIn})});
router.get('/signup', async (req, res) => {res.render('signup',{loggedIn: req.session.loggedIn});});
router.get('/login', async (req, res) => {res.render('login',{loggedIn: req.session.loggedIn});});
router.get('/projectform', async (req, res) => {res.render('projectform',{loggedIn: req.session.loggedIn});});

//DEVELOPER DASHBOARD
router.get('/dashboard', withAuth, async (req, res) => {
    try {
    const allUserPostsData = await Post.findAll({
        where:{
            user_id: req.session.userId
        },
        include: [    
            {   
                model: User,
                attributes: ['username'], 
            },
            {   
                model: Tag,
                attributes: ['tech_name', 'tech_icon']
            }
        ]
    })
    
    const allUsersPosts = allUserPostsData.map((post) => post.get({ plain: true }));
    // res.status(200).json(allUsersPosts);
    res.render('dashboard', {
        allUsersPosts,
        loggedIn: req.session.loggedIn
    })
    } catch (err) {
    res.status(500).json(err);
    }
});

//CLIENT DASHBOARD
router.get('/clientdashboard', async (req, res) => {
    try {
    const allUserProjectData = await Project.findAll({
        where:{
            user_id: req.session.userId
        }
    })
    
    const allUsersProjects = allUserProjectData.map((project) => project.get({ plain: true }));
    // res.status(200).json(allUsersProjects);
    res.render('clientdashboard', {
        allUsersProjects,
        loggedIn: req.session.loggedIn
    })
    } catch (err) {
    res.status(500).json(err);
    }
});


router.get('/postings', async (req, res) => {
    const postData = await Post.findAll({include: [   {   model: User,attributes: ['isDev'], },{  model: Tag,attributes: ['tech_name', 'tech_icon'] },],})
    .catch((err) => { 
        
        res.json(err);
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    // res.status(200).json(postData);
        res.render('postings', { 
            posts, 
            loggedIn: req.session.loggedIn
        });
    });

    router.get('/project', async (req, res) => {
        const projectData = await Project.findAll({include: [   {   model: User,attributes: ['isDev'], },],})
        .catch((err) => { 
            
            res.json(err);
        });
        const projects = projectData.map((project) => project.get({ plain: true }));
        // res.status(200).json(postData);
            res.render('project', { 
                projects,
                loggedIn: req.session.loggedIn
            });
        });


    router.get('/postform', withAuth, async (req, res) => {
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