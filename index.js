const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const TOKEN = process.env.WHATSAPP_TOKEN;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;

app.get("/", (req, res) => {
  res.send("Bot is running 🚀");
});

app.get("/test", async (req, res) => {
  try {
    await axios.post(
      "https://graph.facebook.com/v18.0/" + PHONE_NUMBER_ID + "/messages",
      {
        messaging_product: "whatsapp",
        to: "213556382694",
        type: "text",
        text: {
          body: "Test message 🚀 from Yazid STORE"
        }
      },
      {
        headers: {
          Authorization: "Bearer " + TOKEN,
          "Content-Type": "application/json"
        }
      }
    );

    res.send("Test message sent ✅");
  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(500).send("Error sending test");
  }
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
