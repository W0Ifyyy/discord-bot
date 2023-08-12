const Discord = require("discord.js");

    module.exports = {
        name: "rps",
        async run(bot, msg, args) {
            let move = args[0];
            let rps = ["kamien", "papier", "nozyce"];
            let botMove = rps[Math.floor(Math.random() * rps.length)];
            if(move == "kamien" && botMove == "papier") {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Kamień vs. Papier")
                    .setDescription("Papier pokonał kamień. Przegrałeś/aś!");
                msg.channel.send({ embeds: [embed] });
            } else if(move == "kamien" && botMove == "nozyce") {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Kamień vs. Nożyce")
                    .setDescription("Kamień pokonuje nożyce. Wygrałeś/aś!");
                msg.channel.send({ embeds: [embed] });
            } else if(move == "papier" && botMove == "kamien") {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Papier vs. Kamień")
                    .setDescription("Papier pokonał kamień. Wygrałeś/aś!");
                msg.channel.send({ embeds: [embed] });
            } else if(move == "papier" && botMove == "nozyce") {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Papier vs. Nożyce")
                    .setDescription("Nożyce pokonują papier. Przegrałeś/aś!");
                msg.channel.send({ embeds: [embed] });
            } else if(move == "nozyce" && botMove == "kamien") {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Nożyce vs. Kamień")
                    .setDescription("Kamień pokonał nożyce. Przegrałeś/aś!");
                msg.channel.send({ embeds: [embed] });
            } else if(move == "nozyce" && botMove == "papier") {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Nożyce vs. Papier")
                    .setDescription("Nożyce pokonały papier. Wygrałeś/aś!");
                msg.channel.send({ embeds: [embed] });
            } else if(move == "kamien" && botMove == "kamien") {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Kamień vs. Kamień")
                    .setDescription("Remis!");
                msg.channel.send({ embeds: [embed] });
            } else if(move == "papier" && botMove == "papier") {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Papier vs. Papier")
                    .setDescription("Remis!");
                msg.channel.send({ embeds: [embed] });
            } else if(move == "nozyce" && botMove == "nozyce") {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Nożyce vs. Nożyce")
                    .setDescription("Remis!");
                msg.channel.send({ embeds: [embed] });
            } else {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Niepoprawny ruch!")
                    .setDescription("Poprawne ruchy to: kamien, papier, nozyce");
                msg.channel.send({ embeds: [embed] });
            }
        }
    }