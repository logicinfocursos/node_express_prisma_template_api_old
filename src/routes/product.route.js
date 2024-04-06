// src\routes\product.route.js
import ProductController from '../controllers/product.controller.js'
import BaseRoute from './base.route.js'



class ProductRoute extends BaseRoute {

  constructor() {

    super(ProductController)
    
  }
}

export default new ProductRoute().router
