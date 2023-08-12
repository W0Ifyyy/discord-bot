const Discord = require("discord.js");
const prefix = ".";

module.exports = {
  name: "note",
  description:
    "sends a note described in an argument to a channel that you set it to go",

  async run(bot, msg, args) {
    const adminRole = "Administrator";
    const { guild } = msg;

    const role = guild.roles.cache.find((role) => {
      return role.name === adminRole;
    });

    if (!role) {
      msg.reply("Nie mozesz korzystac z tej komendy!");
    } else {
      const channel01 = bot.channels.cache.get(`1038555953332748378`);

      let noteArg = msg.content.slice(prefix.length + 4);

      let note = noteArg;

      const noteEmbed = new Discord.MessageEmbed()
        .setTitle(`Notatka Autor: ${msg.author.tag}`)
        .setDescription(`${note}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())
        .setTimestamp();

      channel01.send({ embeds: [noteEmbed] });
    }
  },
};
//1038555953332748378
