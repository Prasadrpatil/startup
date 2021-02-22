import Startup from '../models/startupModel.js'
import asycHandler from 'express-async-handler'

const getStartupById = asycHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})

const deleteStartup = asycHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({ message: 'Product Removed' })
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})

const createStartup = asycHandler(async (req, res) => {
  const { name, description, platform, specification, type } = req.body

  const startup = new Startup({
    name: name,
    description: description,
    platform: platform,
    specification: specification,
    type: type,
  })

  const createdStartup = await startup.save()
  res.status(201).json(createdStartup)
})

const updateStartup = asycHandler(async (req, res) => {
  const { name, description, platform, specification, type } = req.body

  const startup = await Startup.findById(req.params.id)

  if (startup) {
    startup.name = name
    startup.description = description
    startup.platform = platform
    startup.specification = specification
    startup.type = type

    const updatedStartup = await startup.save()
    res.status(201).json(updatedStartup)
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})

export { getStartupById, deleteStartup, createStartup, updateStartup }
