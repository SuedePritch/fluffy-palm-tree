const router = require('express').Router();
const {Post, User} = require('../models')
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
router.get('/', async (req, res) => {res.render('landing');});
router.get('/signup', async (req, res) => {res.render('signup');});
router.get('/login', async (req, res) => {res.render('login');});


    module.exports = router;