import express from 'express'
import {
  deleteStartup,
  getStartupById,
  createStartup,
  updateStartup,
} from '../controllers/startupController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(protect, createStartup)

router
  .route('/:id')
  .get(getStartupById)
  .delete(protect, deleteStartup)
  .put(protect, updateStartup)

export default router
