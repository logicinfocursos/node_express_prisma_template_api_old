// src\controllers\base.controller.js - (created by: logicinfo.com.br/ael)
import { Repository } from '../models/repository.js'
import { Product, Category } from '../models/entities/index.js'


export class BaseController {

  constructor(modelName) {

    this.modelName = modelName
    this.repository = new Repository(modelName)

    this.entityName = modelName.charAt(0).toUpperCase() + modelName.slice(1)
  }



  async getAll(_, response) {

    try {

      const result = await this.repository.getAll()
      //const list = result.map(item => new this.entity(item));

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async getById(request, response) {

    try {
      const result = await this.repository.getById(Number(request.params.id))
      //const entity = this.entity(result);
      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



 /*  async getItemByKey(request, response) {

    try {
      const { key, field } = request.params

      const result = await this.repository.getItemByKey(key, field)

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  } */



  async getListByKey(request, response) {

    try {
      const { key, field } = request.params

      const result = await this.repository.getListByKey(key, field)

      response.status(200).send(result)
    } catch (e) {
      response.status(400).send(e)
    }
  }

  async create(request, response) {

    try {
      const result = await this.repository.create(request.body)

      response.status(201).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async update(request, response) {

    try {
      const result = await this.repository.update(
        Number(request.params.id),
        request.body
      )

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }



  async erase(request, response) {

    try {
      const result = await this.repository.erase(Number(request.params.id))

      response.status(200).send(result)

    } catch (e) {

      response.status(400).send(e)

    }
  }
}
