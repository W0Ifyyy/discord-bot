const Discord = require("discord.js");

module.exports = {
  name: "date",
  description: "Shows date(includes time)",

  async run(bot, msg, args) {
    let date = new Date();
    msg.channel.send(
      `Data ${date.toLocaleDateString()} Godzina: ${date.toLocaleTimeString()}`
    );
  },
};
