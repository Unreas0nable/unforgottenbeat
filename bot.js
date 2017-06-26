const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("uv!" + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }
}

client.on('ready', () => {
    client.user.setGame("Unreas is asleep")
 //   setTimeout(10000);
 //   client.user.setGame("Unreas is asleep")

    console.log("You're sleeping, good night!")
})

client.on('ready', () => {
    client.channels.get('327614673799217152').sendMessage('**Unreas is sleeping!**');
    client.channels.get('327629820630663168').sendMessage('**Unreas is sleeping!**');
    console.log(client.user.username);

});
//Commands
    client.on('message', message => {
    var args = message.content.split(/[ ]+/);
    if(commandIs("hello", message)){
//        console.log(message.author.username + args);
        message.channel.sendMessage('Hello there, ' + message.author.username);
    }
        if(commandIs("delete", message)){
        if(hasRole(message.member, "Moderator") || hasRole(message.member, "Co-owner") || hasRole(message.member, "Owner")){
            if(args.length >= 3){
//                console.log(message.author.username + args);
                message.channel.sendMessage('You did not define a argument. Usage: `uj!delete (number of messages to delete)`');
            } else {
                var msg;
                if(args.length === 1){
                    msg=2;
                } else {
//                console.log(message.author.username + args);
                    msg=parseInt(args[1]) + 1;
                }
                message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
//                client.channels.get('328225959117455362').sendMessage(`${msg.author.username} - #${msg.channel.name} - ${msg}`);
            }
        } else {
            message.channel.sendMessage('You are not an `Admin`.');
        }
    }
    if(commandIs("end", message)){
        if(hasRole(message.member, "Owner")){
//            console.log(message.author.username + args);
            process.exit();
        }
    }

});    
//SetGameStatus


client.login('MzI4ODAzOTU3OTk4NjE2NTc2.DDJOGA.d6ewHKrkC5nTaYhNUSXwFmE-XPw');