const { Discord, MessageEmbed } = require("discord.js");
const { run } = require("./ban");

module.exports = {
  name: "rules",
  description: "sends rules embeds on channel",
  firstRule: "Nie krzycz i nie rób przesterów.",
  secondRule: "Nie ujawniaj danych czlonków serwera.",
  thirdRule: "Nie trolluj, nagrywanie rozmów na vc jest zakazane.",
  fourthRule: "Nie wyzywaj innych członków serwera.",
  fifthRule: "Zakazuje sie propagowania rzeczy, które mogą zaszkodzić innym.",
  sixthRule: "Nie gróź innym, ani ich nie szantażuj.",
  seventhRule:
    'Wszelkie złamanie zasad wskazanych powyżej zgłaszaj na kanał "skargi".',

  async run(bot, msg, args) {
    const titleFirst = "Zasada 1";
    const ruleFirst = this.firstRule;
    const embedFirst = new MessageEmbed()
      .setTitle(titleFirst)
      .setColor(0x008080)
      .setDescription(ruleFirst);
    ///////////////////////////////////////
    const titleSecond = "Zasada 2";
    const ruleSecond = this.secondRule;
    const embedSecond = new MessageEmbed()
      .setTitle(titleSecond)
      .setColor(0x008080)
      .setDescription(ruleSecond);
    ///////////////////////////////////////
    const titleThird = "Zasada 3";
    const ruleThird = this.thirdRule;
    const embedThird = new MessageEmbed()
      .setTitle(titleThird)
      .setColor(0x008080)
      .setDescription(ruleThird);
    ///////////////////////////////////////
    const titleFourth = "Zasada 4";
    const ruleFourth = this.fourthRule;
    const embedFourth = new MessageEmbed()
      .setTitle(titleFourth)
      .setColor(0x008080)
      .setDescription(ruleFourth);
    ///////////////////////////////////////
    const titleFifth = "Zasada 5";
    const ruleFifth = this.fifthRule;
    const embedFifth = new MessageEmbed()
      .setTitle(titleFifth)
      .setColor(0x008080)
      .setDescription(ruleFifth);
    ////////////////////////////////////////
    const titleSixth = "Zasada 6";
    const ruleSixth = this.sixthRule;
    const embedSixth = new MessageEmbed()
      .setTitle(titleSixth)
      .setColor(0x008080)
      .setDescription(ruleSixth);
    ////////////////////////////////////////
    const titleSeventh = "Zasada 7";
    const ruleSeventh = this.seventhRule;
    const embedSeventh = new MessageEmbed()
      .setTitle(titleSeventh)
      .setColor(0x008080)
      .setDescription(ruleSeventh);
    ////////////////////////////////////////
    msg.channel.send({ embeds: [embedFirst] });
    msg.channel.send({ embeds: [embedSecond] });
    msg.channel.send({ embeds: [embedThird] });
    msg.channel.send({ embeds: [embedFourth] });
    msg.channel.send({ embeds: [embedFifth] });
    msg.channel.send({ embeds: [embedSixth] });
    msg.channel.send({ embeds: [embedSeventh] });
    msg.delete();
  },
};
