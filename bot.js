const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'اهلا') {
    msg.reply('اهلا بك في السيرفر');
  }
});

client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.find(ch => ch.name === 'we̪̖͙l̷̨͞c̙o̙me̝̜͔-❤');

  if (!channel) return;

  channel.send(`اهلا بك في السيرفر, ${member}`);
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'كسمك') {
    msg.reply('ربنا يسمحك المرسل @👑╲⎝ ★ м͠ɑ͠Zeи͠™★ ⎠╱👑#1745');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content ==='يا ابن المتناكة') {
    msg.reply('ربنا سمحك المرسل @👑╲⎝ ★ м͠ɑ͠Zeи͠™★ ⎠╱👑#1745');
  }
});

client.login('NTM0ODgwNTcyNDU2MTczNTc5.DyDRmw.8qx638-58rLCuDw_1D98at0bW1c');
