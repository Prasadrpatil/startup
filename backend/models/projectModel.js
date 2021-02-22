import mongoose from 'mongoose'

const projectSchema = mongoose.Schema(
  {
    mentor: {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
    teamMates: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
      },
    ],
    project: {
      description: { type: String, required: true },
      image: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
)

const Project = mongoose.model('Project', projectSchema)

export default Project
