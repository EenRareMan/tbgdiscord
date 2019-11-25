const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, arguments) => {

    //   try {
    //
    //        var text = "**Breda Bot** \n\n **__Commands__** \n !hallo - Krijg Hallo terug van de bot \n !doei - Krijg Doei terug van de bot \n !info - Krijg de botinfo \n !serverinfo - Krijg de info van de server \n !ping - Krijg pong treug en het aantal ms. \n\n **__Admin Commands__** \n !clear - De bot doet zoveel weg dat jij wilt. \n !warn - Geef een gebruiker een waarschuwing. \n !tempmute - Mute een gebruiker voor zolang jij wilt \n !announce - Laat de bot een bericht plaatsen hoe en wat jij wilt"; 
    //
    //        message.author.send(text);
    //
    //      message.channel.send("**Al de commands kan je vinden in je privé**") 
    //
    //   } catch (error) {
    //     message.channel.send("Er is iets fout gegaan");
    // }

    var commandsList = [];
 
    bot.commands.forEach(command => {
 
        var item = {
 
            name: command.help.name,
            description: command.help.description,
            // category: command.help.category
 
        }
 
        commandsList.push(item);
 
    });
 
    // console.log(commandsList);
 
    var prefix = botConfig.prefix;
    var response = "";
 
    for (var i = 0; i < commandsList.length; i++) {
 
        response += `${prefix}${commandsList[i]["name"]} - ${commandsList[i]["description"]} \r\n`;
 
    }
 
    message.author.send(response).then(() => {
 
        message.channel.send("Al de commando's staan in je privé berichten! :mailbox_with_mail:");
 
    }).catch(() => {
 
        message.channel.send("Je privé berichten staan uit geschakeld, je hebt geen hulp ontvangen");
 
    });
}

module.exports.help = {
    name: "help",
    description: "Krijg het help menu"
}