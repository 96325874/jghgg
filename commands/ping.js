module.exports = {
  name: "ping",
  cooldown: 10,
  description: "يظهر لك بنج البوت",
  execute(message) {
    console.log("All Copyrights Go's To @ニロ#3892",
    `   
╭━╮╱╭┳━━━┳━━┳━━━╮
┃┃╰╮┃┃╭━╮┣┫┣┫╭━╮┃
┃╭╮╰╯┃╰━╯┃┃┃┃┃╱┃┃
┃┃╰╮┃┃╭╮╭╯┃┃┃┃╱┃┃
┃┃╱┃┃┃┃┃╰┳┫┣┫╰━╯┃
╰╯╱╰━┻╯╰━┻━━┻━━━╯
    `)
    message.reply(`📈 Average ping to API: ${Math.round(message.client.ws.ping)} ms`).catch(console.error);
  }
};
