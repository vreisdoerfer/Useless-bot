const Discord = require('discord.js');
const config = require('./config.json');
const flipCoin = require('./modules/flipCoin.js');
const drawCard = require('./modules/drawCard.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', function(message) {
    if (!message.author.bot) {
        if(message.content.startsWith(config.prefix)) {
            if(message.content === "!190") {
                message.channel.send("https://media1.tenor.co/images/c0a2b1922ef4d3b4935de07a1367ef99/tenor.gif?itemid=13195594&fbclid=IwAR2mDK8tTLTACQa3tCgxznsSO1tjYZYmU76pT8urZj5mBYaEOpTdFa-VTYo");
            } else if(message.content === "!flipcoin") {
                message.channel.send(flipCoin.flipCoin(message));
            } else if (message.content === "!drawacard") {
                message.channel.send(drawCard.drawACard(message));
            }
        }
    }
})

client.login(config.token);