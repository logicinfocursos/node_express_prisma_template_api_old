// src\routes\category.route.js
import CategoryController from '../controllers/category.controller.js'
import BaseRoute from './base.route.js'



class CategoryRoute extends BaseRoute {

    constructor() {

        super(CategoryController)
        
    }
}

export default new CategoryRoute().router