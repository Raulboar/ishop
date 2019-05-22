const router = require('express-promise-router')();
const ordersController = require('../../controllers/orders');

const PATH = 'orders';

router.route('/')
  .post(ordersController.addOrder)
  .get(ordersController.getAllOrders);

router.route('/:id')
  .get(ordersController.getOrderById)
  .delete(ordersController.deleteOrderById)

router.route('/details/:id')
  .get(ordersController.getOrderDetailsById)
 .put(ordersController.editOrderById)
    .put((req, res) => {
        res.send({
            text: 'Will need to edit a specific ordern'   
        });
    });

 router.route('/clientname/:clientname')
 .get(ordersController.getOrderByClientName)

 router.route('/orderstotalover/:total')
 .get(ordersController.getOrdersWhereTotalIsOver)

 router.route('/orderswhereisthisitem/:id')
.get(ordersController.getOrdersWhereIsThisItem)

module.exports = {
  router,
  PATH,
}