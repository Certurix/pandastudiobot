const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
const prefix = "/"
let token = process.env.TOKEN
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
      console.log("Aucune commande dans le dossier.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} chargé !`);
      bot.commands.set(props.help.name, props);
    });
  });
  

  bot.on('error', err => {
    console.log("Erreur : \n" +err)
  })

  bot.on("message", async message => {
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
  });

bot.on('ready', () => {
    let cm = "PANDA STUDIO\n Bot démarré avec succès !\n"
    console.log(cm);
  });

bot.login(token)