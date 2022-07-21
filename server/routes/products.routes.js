const ProductController = require('../controllers/products.controller')

module.exports = (app) => {
    app.get("/api/test", ProductController.testApi)
    app.get("/api/products", ProductController.allProducts)
    app.get("/api/product/:id", ProductController.oneProduct)
    app.post("/api/products", ProductController.addProduct)
    app.put("/api/products/:id", ProductController.updateProduct)
    app.delete("/api/products/:id", ProductController.deleteProduct)
}