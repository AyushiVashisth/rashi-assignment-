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
      options: ["Image", "Video", "Short V"],
      required: true
    }
  ],
  upload: {
    staticDir: path.resolve(
      __dirname,
      "../../uploads"
    )
  }
};

export default Media;
