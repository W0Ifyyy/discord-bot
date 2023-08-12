const Discord = require("discord.js");

module.exports = {
  name: "info",
  description: "Shows all bot commands!",

  async run(bot, msg, args) {
    const infoEmbed = new Discord.MessageEmbed()
      .setAuthor("W0Ifyy", "https://i.imgur.com/s8l601Z.png")
      .setColor(0x1e81b0)
      .setTitle("Commands")
      .addFields(
        { name: "Ban", value: "Bans user," },
        { name: "Kick", value: "Kicks user," },
        { name: "Regulamin", value: "Redirects to channel," },
        { name: "Report", value: "Reports user," },
        { name: "Rules", value: "Displays rules," },
        { name: "Ping", value: "Pong!," },
        { name: "Meme", value: "Sends random meme," },
        { name: "Achievement", value: "Display value as a achievement," },
        { name: "Przywitanie", value: ".siema / replies siema" },
        { name: "time", value: "Displays date and time" },
        { name: "info", value: "Displays commands panel" }
      )
      .setDescription("Prefix = '.'")
      .setImage("https://i.imgur.com/cMT2lzb.jpg")
      .setTimestamp();
    msg.channel.send({ embeds: [infoEmbed] });
  },
};
