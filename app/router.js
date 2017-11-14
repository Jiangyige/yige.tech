'use strict';

module.exports = app => {
  app.redirect('/', '/wedding');
  app.get('/photo', app.controller.photo.index);
  app.get('/wedding', app.controller.wedding.index);
  // app.get('/news', app.controller.news.list);
  // app.get('/news/item/:id', app.controller.news.detail);
  // app.get('/news/user/:id', app.controller.news.user);
};
