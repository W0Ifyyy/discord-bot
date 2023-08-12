const { Discord, MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  description: "ping command",

  async run(bot, msg, args) {
    const ping = new MessageEmbed().setDescription(
      `🏓 Pong\`${Date.now() - msg.createdTimestamp}\``
    );

    msg.channel.send({ embeds: [ping] });
  },
};
