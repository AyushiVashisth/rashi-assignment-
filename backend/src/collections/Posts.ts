// src/collections/Posts.ts
import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true
    },
    {
      name: "type",
      label: "Type",
      type: "select",
      options: [
        { label: "Image", value: "image" },
        { label: "Video", value: "video" },
        { label: "Short Video", value: "short" }
      ],
      required: true
    },
    {
      name: "media",
      label: "Media",
      type: "relationship",
      relationTo: "media",
      hasMany: true
    }
  ]
};

export default Posts;
