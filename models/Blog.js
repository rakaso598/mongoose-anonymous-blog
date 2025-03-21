import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      immutable: true, // 수정 불가능한 필드
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = mongoose.model("Blog", BlogSchema);
