const Discord = require("discord.js");
const fs = require("fs");
let config = require("../botconfig.json");

module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("You don't have the right permission")
        .setColor(config.red)
        .addField("Permission required : ", perm);

    message.channel.send(embed).then(m => m.delete(10000));
}

module.exports.equalPerms = (message, perms) => {

var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Error")
        .addField(`${user.username} have permissions : `, perms);

    message.channel.send(embed).then(m => m.delete(10000));

}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You can't ban me :(")
        .setColor(config.red);

    message.channel.send(embed).then(m => m.delete(10000));
}

module.exports.cantfindUser = (channel, message) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription(`${message.author.username}, can't find the user, please retry with mentionning the user.`)
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(10000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("You must provide a reason.")
        .setColor(config.red);

    channel.send(embed).then(m => m.delete(10000));
}
