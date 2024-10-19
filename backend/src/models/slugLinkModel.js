import mongoose from "mongoose";
const { Schema } = mongoose;

const slugLinkSchema = new Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    originalLink: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)?([a-zA-Z0-9.-]+(?:_[a-zA-Z0-9.-]*)?)(:[0-9]{1,5})?(\/[^\s]*)?$/i.test(
            v
          );
        },
        message: (props) => `${props.value} is not a valid URL!`,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("SlugLink", slugLinkSchema);
