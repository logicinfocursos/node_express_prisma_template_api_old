// src\routes\router.js
import { Router } from 'express'
import productRoute from './product.route.js'
import categoryRoute from './category.route.js'



const router = Router()

router.use('/product', productRoute)
router.use('/category', categoryRoute)

export default router