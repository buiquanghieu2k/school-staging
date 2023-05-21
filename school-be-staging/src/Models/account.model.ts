import { InferSchemaType, Mongoose, Schema } from 'mongoose'

const accountSchema = new Schema(
  {
    username: { type: String, required: true, min: 4, max: 16 },
    password: { type: String, required: true, min: 6 },
    role: {
      type: String,
      enum: ['admin', 'teacher', 'student'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const accountModel = (mongoose: Mongoose) => {
  accountSchema.method('toJSON', function () {
    const { _id, ...object } = this.toObject()
    object.id = _id
    delete object.__v
    return object
  })

  const Account = mongoose.model('account', accountSchema)
  return Account
}

export type IAccount = InferSchemaType<typeof accountSchema>

export default accountModel
