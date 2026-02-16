
const express = require("express");
const axios = require("axios");
const cron = require("node-cron");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bot is running 🚀");
});

/* 🔥 Send WhatsApp Function */
async function sendWhatsApp(phone, message) {
  try {
    await axios.post(
      https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages,
      {
        messaging_product: "whatsapp",
        to: phone,
        type: "text",
        text: { body: message },
      },
      {
        headers: {
          Authorization: Bearer ${process.env.WHATSAPP_TOKEN},
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Message sent to:", phone);
  } catch (error) {
    console.log("Error sending:", error.response?.data || error.message);
  }
}

/* 🔥 Automatic Test Every 1 Minute */
cron.schedule("* * * * *", () => {
  console.log("Cron running...");

  const message = مرحباً 👋
🎖️Yazid STORE 🎖️

هذه رسالة تجريبية من البوت 🚀;

  sendWhatsApp("213541233575", message);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
