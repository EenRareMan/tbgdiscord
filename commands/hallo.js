const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    return message.channel.send("Hallo!");

}

module.exports.help = {
    name: "hallo",
    description: "laat de bot hallo terug zeggen"
}