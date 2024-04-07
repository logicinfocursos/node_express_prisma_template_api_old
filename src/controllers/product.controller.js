// src\controllers\product.controller.js - (created by: logicinfo.com.br/ael)
import { BaseController } from './base.controller.js'
import { ProductRepository } from '../models/repositories/product.repository.js'



class ProductController extends BaseController {

  constructor(prismaModel = 'product') {

    super(prismaModel)

    this.prismaModel = prismaModel
    this.repository = new ProductRepository()
  }



  async getProducts(request, response) {

    try {

      const result = await this.getProducts()

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async getProductById(request, response) {

    try {
      const { id } = request.params

      const result = await this.getProductById(Number(id))

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }



  async getProductByKey(request, response) {

    try {
      const { key, field } = request.params

      const result = await this.getProductByKey(key, field)

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }



  async getProductsByKey(request, response) {

    try {
      const { key, field } = request.params

      const result = await this.getProductsByKey(key, field)

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }

}

export default new ProductController()