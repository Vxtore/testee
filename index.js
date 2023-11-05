const { Discord, Client } = require('discord.js-selfbot');
const client = new Client();
console.log('DM')

client.on('ready', () => {
  console.log(`Successfully logged in as ${client.user.tag}`);
});


client.on('message', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('-post')) {
    const args = message.content.split(' ');
    const channelID = args[1];
    const delay = args[2];

    const channel = client.channels.cache.get(channelID);

    if (channel) {
      message.channel.send(`Starting automatic messages in ${channel} with a delay of ${delay} seconds.`);

      startAutomaticMessages(channel, delay);
    } else {
      message.channel.send('Invalid channel ID.');
    }
  }
});

async function startAutomaticMessages(channel, delay) {
  while (true) {
    const content = '# 🆓🐆';

    let msg = await channel.send(content);
    await sleep(delay * 1000); 

  }
}


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

client.login(process.env.token);
