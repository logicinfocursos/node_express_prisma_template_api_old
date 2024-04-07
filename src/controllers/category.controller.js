// src\controllers\category.controller.js - (created by: logicinfo.com.br/ael)
import { BaseController } from './base.controller.js'
import { CategoryRepository } from '../models/repositories/category.repository.js'



class CategoryController extends BaseController {

  constructor(prismaModel = 'category') {

    super(prismaModel)

    this.prismaModel = prismaModel
    this.repository = new CategoryRepository()   
  }
  


  async getCategories(_, response) {

    try {
 
      const result = await this.getCategories()

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }
}

export default new CategoryController()