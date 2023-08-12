const { Client, Collection, MessageEmbed, Intents } = require("discord.js");
const bot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const { readdirSync } = require("fs");

const { token } = require("./config.json");

bot.commands = new Collection();
const prefix = ".";

const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bany",
});

//Command handler
const commandFolders = readdirSync(`./commands`);

for (const folder of commandFolders) {
  const commandFiles = readdirSync(`./commands/${folder}`).filter((file) =>
    file.endsWith(".js")
  );
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    bot.commands.set(command.name, command);
  }
}

bot.on("error", console.error);

//Bot on ready
bot.on("ready", (msg) => {
  console.log(`Zalogowano jako ${bot.user.tag} !`);
  bot.user.setActivity("Gryze ci prace domową 😎 🤙", { type: "PLAYING" });
  bot.user.setUsername("Twoj Pies");
});

//bot on msg
bot.on("message", (msg) => {
  //payrespect
  if (msg.content == "f") {
    msg.channel.send(`${msg.author.username} has paid respect!`);
  }
  //pope
  if (msg.content == "2137") {
    msg.reply("Ooo Panieee!");
  }
  //przywitania
  if (msg.content == "Good morning") {
    msg.reply("A very wonderful morning to you!");
  }
  //
  if (msg.content == "Good afternoon") {
    msg.reply("And a good afternoon to you too");
  }
  //
  if (msg.content == "Good evening") {
    msg.reply("Good evening, I hope you have a pleasent night");
  }
  //
  if (msg.content == "Good night") {
    msg.reply("Nighty night, get some good rest");
  }
});

//Exec
bot.on("messageCreate", async (msg) => {
  if (
    msg.content.startsWith(".exec") &&
    msg.author.id === "327426823921074176"
  ) {
    let code = msg.content.slice(6);
    if (!code || code.length < 3) return msg.reply("Code not provided.");

    if (code.includes("fs") || code.includes("process"))
      return msg.reply(
        "That code is not allowed due to restrictions with eval."
      );
    try {
      eval("let fn = async function() {" + code + "}");

      await fn();
    } catch (err) {
      msg.reply("Something is wrong with your code: `" + err + "`");
    }
  }
});

//Message as an command
bot.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  if (msg.content.startsWith(prefix)) {
    const args = msg.content.slice(prefix.length).split(/ +/g);

    const command = args.shift().toLowerCase();
    if (!bot.commands.has(command)) return;
    try {
      bot.commands.get(command).run(bot, msg, args);
    } catch (error) {}
  }
});

bot.login(token);

bot.on("debug", () => {});
bot.on("warn", () => {});
bot.on("error", () => {});
