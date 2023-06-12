const store = require('./rtk/app/store');
const {
  fetchPost,
} = require('./rtk/features/post/postSlice');


store.dispatch(fetchPost());
