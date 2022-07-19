const { BlogPost } = require('../database/models');

const postFunction = async (title, content, userId) => {
  const post = await BlogPost.create({
    title,
    content,
    userId,
    updated: new Date(),
    published: new Date(),
  });
  return post;
};

module.exports = { postFunction };
