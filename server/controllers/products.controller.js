const Product = require("../models/products.model")

module.exports.testApi = (req, res) => {
    res.json({Status:"Functioning Properly"})
}

module.exports.allProducts = (req, res) => {
    Product.find()
        .then(products => res.json(products))
        .catch(err => res.json(err))
}

module.exports.oneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
}

module.exports.addProduct = (req, res) => {
    const newProduct = req.body
    Product.create(newProduct)
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    const idParams = req.params.id
    const updateVal = req.body
    Product.findOneAndUpdate({_id : req.params.id}, updateVal, {new:true, runValidators:true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(message => res.json(message))
        .catch(err => res.json(err))
}