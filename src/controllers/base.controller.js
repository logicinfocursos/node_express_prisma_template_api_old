// src\controllers\base.controller.js
import { getAll, create, getById, update, erase, } from '../repositories/repository.methods.js'



class BaseController {

  constructor(modelName) {

    this.modelName = modelName
    
  }



  async createItem(request, response) {

    try {
      const result = await create(this.modelName, request.body)

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async getAllItems(request, response) {

    try {

      const result = await getAll(this.modelName)

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async getItemById(request, response) {

    try {

      const result = await getById(this.modelName, Number(request.params.id))

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async updateItem(request, response) {

    try {
      const result = await update(
        this.modelName,
        Number(request.params.id),
        request.body
      )

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async eraseItem(request, response) {

    try {
      const result = await erase(this.modelName, Number(request.params.id))

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }
}

export default BaseController
