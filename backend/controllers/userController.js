import User from '../models/userModel.js'
import asycHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

// @des     Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asycHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      isLeader: user.isLeader,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid Email or Password')
  }
})

// @des    Register a New User
// @route   POST /api/users
// @access  Public
const registerUser = asycHandler(async (req, res) => {
  const { name, email, password, confirmPassword, role } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User Already Exists')
  }

  // eslint-disable-next-line
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/

  if (password.length < 6) {
    res.status(400)
    throw new Error('Password Should AtLeast of 6 characters...')
  } else if (!format.test(password)) {
    res.status(400)
    throw new Error('Please Use AtLeast 1 Special Character in password...')
  } else if (password !== confirmPassword) {
    res.status(400)
    throw new Error('Passwords do not Match...')
  }

  var image = '/assets/profile.png'
  const user = await User.create({
    name,
    email,
    password,
    role,
    image,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      image: user.image,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid User Data')
  }
})

// @des     Get User Profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asycHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      image: user.image,
      description: user.description,
      expertise: user.expertise,
      experience: user.experience,
      toolKit1: user.toolKit1,
      toolKit2: user.toolKit2,
      toolKit3: user.toolKit3,
      startupId: user.startupId,
    })
  } else {
    res.status(401)
    throw new Error('User not found')
  }
})

// @des     Update User Profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asycHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.description = req.body.description || user.description
    user.expertise = req.body.expertise || user.expertise
    user.experience = req.body.experience || user.experience
    user.toolKit1 = req.body.toolKit1 || user.toolKit1
    user.toolKit2 = req.body.toolKit2 || user.toolKit2
    user.toolKit3 = req.body.toolKit3 || user.toolKit3
    user.startupId = req.body.startupId || user.startupId
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      description: updatedUser.description,
      expertise: updatedUser.expertise,
      experience: updatedUser.experience,
      toolKit1: updatedUser.toolKit1,
      toolKit2: updatedUser.toolKit2,
      toolKit3: updatedUser.toolKit3,
      startupId: updatedUser.startupId,

      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(401)
    throw new Error('User Not Found')
  }
})

// @des     Get all Users
// @route   GET /api/users
// @access  Private/Admin
const getUsers = asycHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// @des     Delete a User
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUser = asycHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User Removed Successfully' })
  } else {
    res.status(404)
    throw new Error('User Not Found')
  }
})

// @des     Get User By id
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asycHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')
  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error('User Not Found')
  }
})

// @des     Update User
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUser = asycHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.startupId = req.body.startupId || user.startupId

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      startupId: updatedUser.startupId,
    })
  } else {
    res.status(401)
    throw new Error('User Not Found')
  }
})

export {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
}
