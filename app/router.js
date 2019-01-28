
module.exports = app => {
  app.get('/', app.controller.edition.list);
  app.get('/1', app.controller.edition.edition1);
  app.get('/2', app.controller.edition.edition2);
  app.get('/demo', app.controller.home.index);
  app.get('/client', app.controller.home.client);
  app.get('/pager', app.controller.home.pager);
};
