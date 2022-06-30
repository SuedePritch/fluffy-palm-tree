const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const TechTag = require('./TechTag');
const Tag = require('./Tag');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

Post.belongsToMany(Tag, {
    through: TechTag,
    foreignKey: 'tech_id'
});

Tag.belongsToMany(Post, {
    through: TechTag,
    foreignKey: 'tag_id'
});

module.exports = {User, Post, Comment, Tag, TechTag};