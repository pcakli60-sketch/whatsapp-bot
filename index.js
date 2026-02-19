const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const TOKEN = process.env.WHATSAPP_TOKEN;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;

// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.send("Bot is running 🚀");
});

// =============================
// إرسال رسالة
// =============================
app.post("/send", async (req, res) => {
  const { to, message } = req.body;

  try {
    await axios.post(
      https://graph.facebook.com/v18.0/${PHONE_NUMBER_ID}/messages,
      {
        messaging_product: "whatsapp",
        to: to,
        type: "text",
        text: { body: message }
      },
      {
        headers: {
          Authorization: Bearer ${TOKEN},
          "Content-Type": "application/json"
        }
      }
    );

    res.send("Message sent ✅");
  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(500).send("Error sending message");
  }
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
