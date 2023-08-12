const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
  name: "ban",
  description: "ban command",

  async run(bot, msg, args) {
    // Create connection
    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "bany",
    });

    if (!msg.member.permissions.has("BAN_MEMBERS"))
      return msg.channel.send("Potrzebujesz uprawnien");

    const mentionMember = msg.mentions.members.first();

    let reason = args.slice(1).join(" ");
    if (!reason) (reason = "Brak powodu"), console.log(msg.channel.id);

    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`Zbanowano @${mentionMember.user.tag}`)
      .setDescription(`Powód: ${reason}`)
      .setColor("RANDOM")
      .setTimestamp()
      .setFooter(bot.user.tag, bot.user.displayAvatarURL())
      .setTimestamp();

    if (!args[0])
      return msg.channel.send("Brak nazwy użytkownika oraz powodu blokady!");
    if (!mentionMember) return msg.channel.send("Nie znaleziono użytkownika!");
    if (!mentionMember.bannable)
      return msg.channel.send("Potrzebuję uprawnień!");

    await msg.channel.send({ embeds: [banEmbed] });
    mentionMember
      .ban({
        reason: reason,
      })
      .then(() => {
        let sql = `INSERT INTO bany(nazwa, powod) VALUES("${mentionMember.user.tag}", "${reason}")`;
        db.query(sql, (err, result) => {
          if (err) throw err;
          console.log("dodano pomyslnie");
        });
        msg.channel.send(`Zbanowano pomyślnie ${mentionMember.user.tag}`);
      });
  },
};
