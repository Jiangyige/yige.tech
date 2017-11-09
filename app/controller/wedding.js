'use strict';

module.exports = app => {
  class WeddingController extends app.Controller {
    * index() {
      const ctx = this.ctx;
      const photos = this.config.photos;
      yield ctx.render('wedding/index.njk', { photos });
    }
  }
  return WeddingController;
};
