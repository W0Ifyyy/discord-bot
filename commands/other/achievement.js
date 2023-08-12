const Discord = require("discord.js");

module.exports = {
  name: "achievement",

  async run(bot, msg, args) {
    let achiev = args.slice(0).join(" ");
    const embed = new Discord.MessageEmbed()
      .setTitle("Odblokowano osiągnięcie! 🥇")
      .setDescription(`${achiev}`);
    msg.channel.send({ embeds: [embed] });
  },
};
