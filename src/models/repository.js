// src\models\repository.js
import { prisma } from '../services/prisma.js'



export class Repository {

  constructor(modelName) {

    this.modelName = modelName

  }


  
  async getAll() {

    const result = await prisma[this.modelName].findMany({})

    return result
  }



  async getById(id) {

    const result = await prisma[this.modelName].findUnique({

      where: {
        id
      }

    })

    return result
  }



  async create(data) {

    const result = await prisma[this.modelName].create({

      data

    })

    return result
  }



  async update(id, data) {

    const result = await prisma[this.modelName].update({

      where: {
        id
      },

      data
    })

    return result
  }



  async erase(id) {

    const result = await prisma[this.modelName].delete({
      where: {
        id
      },
    })

    return result
  }
}