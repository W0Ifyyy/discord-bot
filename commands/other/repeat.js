const Discord = require("discord.js");

    module.exports = {
        name: "repeat",

        async run(bot, msg, args) {
            let repeat = args.slice(0).join(" ");
            const embed = new Discord.MessageEmbed()
                .setTitle("Powtórz!")
                .setDescription(`${repeat}`);
            msg.channel.send({ embeds: [embed] });
        }
    }