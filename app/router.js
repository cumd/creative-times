
module.exports = app => {
  app.get('/demo', app.controller.home.index);
  app.get('/client', app.controller.home.client);
  app.get('/pager', app.controller.home.pager);
};
