
module.exports = app => {
  app.get('/1', app.controller.edition.edition1);
  app.get('/demo', app.controller.home.index);
  app.get('/client', app.controller.home.client);
  app.get('/pager', app.controller.home.pager);
};
