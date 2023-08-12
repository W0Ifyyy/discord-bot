const { Discord, RichEmbed } = require("discord.js");

module.exports = {
  name: "rul",
  description: "Odniesienie do regulaminu",

  async run(bot, msg, args) {
    msg.reply("Regulamin znajdziesz na kanale #regulamin");
  },
};
