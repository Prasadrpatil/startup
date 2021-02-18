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

  const user = await User.create({
    name,
    email,
    password,
    role,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
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
      isLeader: user.isLeader,
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
    user.isLeader = req.body.isLeader || user.isLeader
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isLeader: updatedUser.isLeader,
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
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.role || req.body.role === false) {
      user.role = req.body.role
    }
    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
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
