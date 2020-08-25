import mongoose from 'mongoose'
import { Password } from '../services/password'

// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
  email: string
  password: string
}

// An interface that describes the properties
// that a User model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
  email: string
  password: string
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.password // javascript delete, deletes property from object
        delete ret.__v // delete version manually or use verisionKey: false as below
      }
    }
    // versionKey: false,
  }
)

userSchema.pre('save', async function (done) {
  // using function keyword instead of arrow function to be able to use `this` which is the user document to be saved
  if (this.isModified('password')) {
    // hash password only when only creating password for 1st time or changing password (only when password is modified)
    const hashed = await Password.toHash(this.get('password'))
    this.set('password', hashed)
  }
  done()
})

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export { User }
