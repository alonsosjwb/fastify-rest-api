const fastify = require('fastify')({
    logger: true
})

const swagger = require('./utils/swagger')

fastify.register(require('fastify-swagger'), swagger.options);

require('./utils/mongoose');

const product_routes = require('./routes/products.routes');

fastify.get("/", (request, reply)=>{
    reply.send({ hello: "world"});
})

product_routes.forEach(route => {
    fastify.route(route);
})

const start = async () =>{
    await fastify.listen({ port: 3000 }, (err) => { if (err) throw err })
    fastify.log.info(`Server listening on ${fastify.server.address().port}`)
}

start();