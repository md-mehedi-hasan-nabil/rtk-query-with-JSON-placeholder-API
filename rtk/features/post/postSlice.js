const { createSlice } = require('@reduxjs/toolkit');

const { fetchRelatedPosts } = require('./thunk');
const fetchPost = require('./thunk');

// initial state
const initialState = {
  singlePost: {},
  relatedPosts: [],
  loading: false,
  error: '',
};

const postSlice = createSlice({
  name: 'post',
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });

    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.singlePost = action.payload;
    });

    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.singlePost = {};
    });

    builder.addCase(fetchRelatedPosts.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });

    builder.addCase(fetchRelatedPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.relatedPosts = action.payload;
    });

    builder.addCase(fetchRelatedPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.relatedPosts = [];
    });
  },
});

module.exports = postSlice.reducer;
module.exports.fetchPost = fetchPost;
module.exports.postActions = postSlice.actions;
