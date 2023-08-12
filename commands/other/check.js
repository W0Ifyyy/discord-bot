const Discord = require("discord.js");

    module.exports = {
        name: "check",

        async run(bot, msg, args) {
            msg.channel.send(args.slice(0))
        }
    }