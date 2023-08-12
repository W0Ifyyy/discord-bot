const Discord = require("discord.js");

module.exports = {
  name: "kick",
  description: "kick command",

  async run(bot, msg, args) {
    if (!msg.member.permissions.has("KICK_MEMBERS"))
      return msg.channel.send("Potrzebujesz uprawnień!");

    const mentionMember = msg.mentions.members.first();

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Brak powodu";

    const kickEmbed = new Discord.MessageEmbed()
      .setTitle(`Wyrzucono @${mentionMember.user.tag}`)
      .setDescription(`Reason: ${reason}`)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(bot.user.tag, bot.user.displayAvatarURL())
      .setTimestamp();

    if (!args[0])
      return msg.channel.send("Brak nazwy użytkownika oraz powodu kicka!");
    if (!mentionMember) return msg.channel.send("Nie znaleziono użytkownika!");
    if (!mentionMember.kickable)
      return msg.channel.send("Potrzebuję uprawnień!");

    await msg.channel.send({ embeds: [kickEmbed] });
    mentionMember
      .kick({
        reason: reason,
      })
      .then(() => {
        msg.channel.send(`Wyrzucono pomyślnie ${mentionMember.user.tag}`);
      });
  },
};
