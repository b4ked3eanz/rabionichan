const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('Max is online!');
});

client.on('message', message =>{
  
if(message.content === prefix + 'youtube'){
        message.channel.send('https://www.youtube.com/');
    }

    if(message.content === prefix + 'twitch'){
        message.channel.send('https://twitch.tv/');
    }  

})

client.login(process.env.token);