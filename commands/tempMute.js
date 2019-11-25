const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, arguments) => {

    // !tempmute gebruiker 1h

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Jij kan dit niet doen");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if (!user) return message.channel.send("Geef een gebruiker op of de gebruiker is niet op deze server");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze persoon kan je niet muten");

    var muteRole = message.guild.roles.find("name", "muted");

    if (!muteRole) return message.channel.send("De rol muted bestaat niet");

    var muteTime = arguments[1];

    if (!muteTime) return message.channel.send("Geef een tijd op");

    await (user.addRole(muteRole.id));

    message.channel.send(`${user} is gemuted voor ${muteTime}`);

    setTimeout(function () {

        user.removeRole(muteRole.id)

        message.channel.send(`${user} is geunmuted.`);

    }, ms(muteTime));

}

module.exports.help = {
    name: "tempmute",
    description: "Tempmute een gebruiker"
}