// src\routes\base.route.js
import { Router } from 'express'



class BaseRoute {

  constructor(controller) {

    this.router = Router()
    this.controller = controller
    this.setupRoutes()

  }



  getAll = (request, response) => {

    this.controller.getAll(request, response)

  }



  getById = (request, response) => {

    this.controller.getById(request, response)

  }



  create = (request, response) => {

    this.controller.create(request, response)

  }



  update = (request, response) => {

    this.controller.update(request, response)

  }



  erase = (request, response) => {

    this.controller.erase(request, response)

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
