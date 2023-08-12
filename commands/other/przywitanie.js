const Discord = require("discord.js");

module.exports = {
  name: "siema",
  description: "przywitanie",

  async run(bot, msg, args) {
    msg.reply("Siema!");
  },
};
