const Discord = require("discord.js");
const webhook = new Discord.WebhookClient(
  process.env["DISCORD_CLIENT_ID"],
  process.env["DISCORD_CLIENT_TOKEN"]
);

export default async function announceInDiscord(message, author) {
  try {
    const messageEmbed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setAuthor(
        "CSEDU_Silvers",
        process.env["CSEDU_ICON_URL"],
        process.env["FACEBOOK_GROUP_URL"]
      )
      .addField("**Notice**", message, true)
      .setTimestamp()
      .setFooter("Message sent timing: ", process.env["CSEDU_ICON_URL"]);
    webhook.send(messageEmbed);
  } catch (err) {
    console.error(err);
  }
}
