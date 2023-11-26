import express from "express";
import payload from "payload";
import Posts from "./collections/Posts";
import Media from "./collections/Media";
import cors from "cors";

require("dotenv").config();
const app = express();
app.use(cors());

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    }
  });

  app.get("/posts/videos/stream", async (req, res) => {
    try {
      const shortVideoPosts = await payload.find({
        collection: Posts.slug,
        depth: 2,
        where: {
          type: { equals: "image" }
        }
      });

      res.json(shortVideoPosts);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  app.get("/media", async (req, res) => {
    try {
      const media = await payload.find({
        collection: Media.slug
      });

      res.json(media);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  app.listen(8080);
};

start();
