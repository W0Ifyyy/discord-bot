const Discord = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

module.exports = {
  name: "gpt",

  async run(bot, msg, args) {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: msg.content.substring(4),
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const answer = response.data.choices[0].text;
    msg.channel.send(answer);
  },
};
