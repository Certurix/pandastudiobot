const Discord = require("discord.js");  
module.exports.run = async (bot, message) => {

    let start = Date.now(); message.channel.send("Chargement...").then(message => { 
    let diff = (Date.now() - start); 
    let API = (bot.ping).toFixed(2)
	let curlat = {}
	let curapi = {}
	
	if(diff < 30) curlat = "Very Good"
	if(diff > 100) curlat = "Good"
	if(diff > 300) curlat = "Mediocre"
	if(diff > 500) curlat = "Laggy"
	if(diff > 1000) curlat = "Bad"
	if(diff > 1500) curlat = "Very Bad"
	
	
	if(API < 30) curapi = "Very Good"
	if(API > 100) curapi = "Good"
	if(API > 300) curapi = "Mediocre"
	if(API > 500) curapi = "Laggy"
	if(API > 1000) curapi = "Bad"
	if(API > 1500) curapi = "Very Bad"
	
        let embed = new Discord.RichEmbed()
		.setTitle("<a:loading:474146780779511818> Pong!")
        .setColor('RANDOM')
        .addField("📶 Host ("+curlat+") ", `${diff}ms`, true)
        .addField("💻 Discord API ("+curapi+")", `${API}ms`, true)
        message.edit(embed);
      
    });

} 


module.exports.help = {

name: "ping"

}

