// src\repositories\repository.methods.js
import { prisma } from '../services/prisma.js'



export const create = async (modelName, data) => {

  const result = await prisma[modelName].create({

    data

  })

  return result

}



export const getAll = async (modelName) => {

  const result = await prisma[modelName].findMany({ })
   
  return result
}



export const getById = async (modelName, id) => {

  const result = await prisma[modelName].findUnique({

    where: {
        id 
    }

  })

  return result
}



export const update = async (modelName, id, data) => {

  const result = await prisma[modelName].update({

    where: {
        id 
    },

    data
  })

  return result
}



export const erase = async (modelName, id) => {

  const result = await prisma[modelName].delete({
    where: {
        id 
    },
  })

  return result
}
