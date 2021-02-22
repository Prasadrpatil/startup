import mongoose from 'mongoose'

const startupSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    platform: { type: String, required: true },
    specification: { type: String, required: true },
    type: { type: String, required: true },
    team: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
)

const Startup = mongoose.model('Startup', startupSchema)

export default Startup
