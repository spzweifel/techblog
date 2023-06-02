const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: '',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: '',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };