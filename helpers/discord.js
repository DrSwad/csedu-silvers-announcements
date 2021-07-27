export default async function announceInDiscord(message) {
  try {
    const Discord = require('discord.js')
    const webhook = new Discord.WebhookClient('869593915722989588','X9I5x3yM_1P9-K_QRMIt7D9vPSjhigCrWwdKsGv5bAp5gKGyUKveEGHHkaYQi1SJWFj1')
    const messageEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    // .setTitle('CSEDU_Silvers')
    // .setURL('https://www.facebook.com/groups/2524530824240025')
    .setAuthor('CSEDU_Silvers', 'https://i.ibb.co/yk1CLxT/download.png','https://www.facebook.com/groups/2524530824240025')
    .addField('**Notice**', message, true)
    .setTimestamp()
    .setFooter('Message sent timing: ', 'https://i.ibb.co/yk1CLxT/download.png');
    webhook.send(messageEmbed)
  } catch(err) { console.error(err) }
}