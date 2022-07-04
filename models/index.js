const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');
const TechTag = require('./TechTag');
const Tag = require('./Tag');
const Project = require('./project');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

User.hasMany(Project, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Post.hasMany(Project);

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Comment.hasMany(Project);

Post.belongsToMany(Tag, {
    through: TechTag,
    foreignKey: 'tech_id'
});

Tag.belongsToMany(Post, {
    through: TechTag,
    foreignKey: 'tag_id'
});

// Project.belongsToMany(Tag, {
//     through: TechTag,
//     foreignKey: 'tech_id'
// });

// Tag.belongsToMany(Project, {
//     through: TechTag,
//     foreignKey: 'tag_id'
// });

Project.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = {User, Post, Comment, Tag, TechTag, Project};