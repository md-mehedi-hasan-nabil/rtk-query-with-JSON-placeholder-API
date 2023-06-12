const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const post = require('../features/post/postSlice');

const logger = createLogger();

const store = configureStore({
  reducer: {
    post,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});

module.exports = store;
