const Product = require('../models/product.model');

const get_products = async (request, reply) => {
    const products = await Product.find();
    return products;
};

const get_product = async (request, reply) => {
    const product = await Product.findById(request.params._id);
    return reply.code(200).send(product);
}

const create_product = async(request, reply) => {
    const new_product = new Product(request.body);
    console.log("🚀 ~ file: products.routes.js:23 ~ new_product", new_product)
    await new_product.save();
    reply.code(201).send(new_product);
}

const update_product = async (request, reply) => {
    try {
        const product = await Product.findByIdAndUpdate(
            request.params._id,
            request.body,
            {new: true}
        )
        reply.code(200).send(product);
    } catch (error) {
        reply.code(500).send(error);
    }
}

const delete_product = async(request, reply) => {
    await Product.findByIdAndDelete(request.params._id);
    reply.code(204).send();
}

module.exports = {
    get_products,
    get_product,
    create_product,
    update_product,
    delete_product
}