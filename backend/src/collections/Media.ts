// src/collections/Media.ts
import { CollectionConfig } from "payload/types";
import path from "path";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true
  },
  fields: [
    {
      name: "posts",
      label: "Posts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true
    },
    {
      name: "type",
      label: "Type",
      type: "select",
      options: ["Image", "Video", "vedioShort"],
      required: true
    }
  ],
  upload: {
    staticDir: path.resolve(
      __dirname,
      "../../../frontend/uploads"
    )
  }
};

export default Media;
