'use strict';
module.exports = function(app) {
  var list = require('../controllers/ListController');


  // List Routes
  app.route('/tasks')
    .get(list.list_all_tasks)
    .post(list.create_a_task);


  app.route('/tasks/:taskId')
    .get(list.read_a_task)
    .put(list.update_a_task)
    .delete(list.delete_a_task);
};
