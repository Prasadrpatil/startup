import mongoose from 'mongoose'

const teamSchema = mongoose.Schema(
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

const Team = mongoose.model('Team', teamSchema)

export default Team
