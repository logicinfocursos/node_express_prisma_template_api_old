// src\routes\base.route.js
import { Router } from 'express'



class BaseRoute {

  constructor(controller) {

    this.router = Router()
    this.controller = controller
    this.setupRoutes()

  }



  create = (request, response) => {

    this.controller.createItem(request, response)

  }



  getAll = (request, response) => {

    this.controller.getAllItems(request, response)

  }



  getById = (request, response) => {

    this.controller.getItemById(request, response)

  }



  update = (request, response) => {

    this.controller.updateItem(request, response)

  }



  erase = (request, response) => {

    this.controller.eraseItem(request, response)

  }



  setupRoutes() {

    this.router.get('/', this.getAll)
    this.router.get('/:id?', this.getById)
    this.router.post('/', this.create)
    this.router.put('/:id?', this.update)
    this.router.patch('/:id?', this.update)
    this.router.delete('/:id?', this.erase)

  }
  
}

export default BaseRoute
