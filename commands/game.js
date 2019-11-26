const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        var text = "Dit is de game link: https://www.roblox.com/games/4446706339/noord-nolland-Beta?refPageId=437a2469-9a49-44b0-ae83-06d6835196e5";

        message.author.send(text)

    } catch (error) {
        message.channel.send("Er is iets fout gegaan");
    }

}

module.exports.help = {
    name: "game",
    description: "Geef de gamelink."
}