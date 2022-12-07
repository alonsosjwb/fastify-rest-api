const product_controller = require('../controllers/product.controller');

const routes = [
    {
        url: '/products',
        method: 'GET',
        handler: product_controller.get_products
    },
    {
        url: '/products/:_id',
        method: 'GET',
        handler: product_controller.get_product
    },
    {
        url: '/products',
        method: 'POST',
        handler: product_controller.create_product
    },
    {
        url: '/products/:_id',
        method: 'PATCH',
        handler: product_controller.update_product
    },
    , {
        url: '/products/:_id',
        method: 'DELETE',
        handler: product_controller.delete_product
    }
]

module.exports = routes