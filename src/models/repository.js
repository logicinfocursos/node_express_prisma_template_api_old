// src\models\repository.js - (created by: logicinfo.com.br/ael)
import { prisma } from '../services/prisma.js'
import { getcode } from '../functions/index.js'



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



/*   async getItemByKey(key, field) {

    let whereClause = {}
    whereClause[field] = {
      contains: key,
    }

    const result = await prisma[this.modelName].findUnique({
      where: whereClause,
    })

    return result
  } */



  async getListByKey(key, field) {

    let whereClause = {}
    whereClause[field] = {
      contains: key,
    }

    const result = await prisma[this.modelName].findMany({
      where: whereClause,
    })

    return result
  }



  async create(data) {


    if (data && (!data.code || data.code === '')) data.code = getcode(6, this.modelName.substring(0, 3))

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


  
  async getProducts() {

    const result = await prisma.product.findMany({
      include: {
        category: true,
      }
    })

    return result
  }



  async getProductById(id) {

    const result = await prisma[this.modelName].findUnique({
      include: {
        category: true,
      },
      where: {
        id
      }

    })

    return result
  }



  async getProductByKey(key, field) {

    let whereClause = {}

    whereClause[field] = {
      contains: key,
    }

    const result = await prisma[this.modelName].findFirst({

      where: whereClause,
    })

    return result
  }


  async getProductsByKey(key, field) {

    let whereClause = {}

    whereClause[field] = {
      contains: key,
    }

    const result = await prisma[this.modelName].findMany({
      
      include: {
        category: true,
      },

      where: whereClause,
    })

    return result
  }



  async getCategories() {

    const result = await prisma.category.findMany({
      include: {
        products: true,
      },
    })

    return result
  }
}