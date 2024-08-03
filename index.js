const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1269170112418545674')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/hutcalm') //Must be a youtube video link 
    .setState('Hamster Kombat')
    .setName('Click Click Click')
    .setDetails(`HeH Life`)
    .setStartTimestamp()
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1016707563594715267/1269169284567928842/f5f27448c036af645c27467c789ad759.gif?ex=66af1581&is=66adc401&hm=47844de545e93b036e0b8daed726fa5f0b5c558a460a6321df4d5adf139fa5d3&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Click Click Click') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1016707563594715267/1269169283804561459/cherry-blossom.gif?ex=66af1581&is=66adc401&hm=a05f85ad7995ea183eb449d7bd55e97d787a553b4b0bcdb86c03e92d4c9241ea&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Ara') //Text when you hover the Small image
    .addButton('Discord', 'https://www.youtube.com/@hutcalm')
    .addButton('Youtube', 'https://www.youtube.com/@hutcalm');

  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `HeH LiFe`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
