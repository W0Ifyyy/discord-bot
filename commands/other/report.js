const Discord = require("discord.js");

module.exports = {
  name: "report",
  description: "report user",

  async run(bot, msg, args) {
    const mentionMember = msg.mentions.members.first();

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Brak powodu";

    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`Zgłoszono @${mentionMember.user.tag}`)
      .setDescription(`Powód: ${reason}`)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(bot.user.tag, bot.user.displayAvatarURL());

    if (!args[0])
      return msg.channel.send("Brak nazwy użytkownika oraz powodu blokady!");
    if (!mentionMember) return msg.channel.send("Nie znaleziono użytkownika!");
    await msg.channel.id;

    const channel01 = bot.channels.cache.get(`889628903595966525`);
    channel01.send({ embeds: [banEmbed] });
    msg.channel.send(`Zgłoszono pomyślnie ${mentionMember.user.tag}`);
  },
};
// 889628903595966525;
