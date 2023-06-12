const { createAsyncThunk } = require('@reduxjs/toolkit');
const { default: fetch } = require('node-fetch');

// create async thunk
const fetchRelatedPosts = createAsyncThunk(
  'post/fetchRelatedPosts',
  async (post, thunkAPI) => {
    const keywordsArray = post.title.split(' ');
    let generateQueryString = '';
    keywordsArray.forEach((element) => {
      generateQueryString += 'title_like=' + element + '&';
    });

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?${generateQueryString}}`
    );

    const posts = await response.json();

    return posts;
  }
);

const fetchPost = createAsyncThunk('post/fetchPost', async (_, thunkAPI) => {
  const randomId = Math.floor(Math.random() * 100 + 1);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${randomId}`
  );

  const post = await response.json();

  thunkAPI.dispatch(fetchRelatedPosts(post));

  return post;
});

module.exports = fetchPost;
module.exports.fetchRelatedPosts = fetchRelatedPosts;
