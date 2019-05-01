const Discord = require('discord.js');

module.exports.run = async (bot, message) => {

    if (!message.author.roles.has("538044774889029633")) { 
        message.channel.send("Vous ne faites pas parti du Staff !");
        return;
    }
    
    if (!args[0]) {return message.channel.send('Utilisation : /poll <question>');}
    
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff")
        .setFooter('Réagissez pour voter')
        .setDescription(`Vote créé par ${message.author.username}`)
        .setTitle(args.join(' '));
message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); 
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
}

module.exports.help = {
    name: "poll",
}