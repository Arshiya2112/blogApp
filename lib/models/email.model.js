import mongoose from "mongoose";

const emailSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Email = mongoose.models.emails || mongoose.model("emails", emailSchema);
export default Email;
