// src\controllers\category.controller.js - (created by: logicinfo.com.br/ael)
import { BaseController } from './base.controller.js'



class CategoryController extends BaseController {

  constructor() {

    super('category')

  }
  
  async getCategories(_, response) {

    try {
 
      const result = await this.repository.getCategories()

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }
}

export default new CategoryController()