'use strict';

module.exports = app => {
  app.redirect('/', '/photo');
  app.get('/photo', app.controller.photo.index);
  app.get('/news', app.controller.news.list);
  app.get('/news/item/:id', app.controller.news.detail);
  app.get('/news/user/:id', app.controller.news.user);
};
