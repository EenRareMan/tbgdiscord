const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn gebruiker uqdsqusduqgufgus fggqysfgyq

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Jij kan dit niet doen");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!user) return message.channel.send("Geef een gebruiker op of de gebruiker is niet op deze server");

     if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze persoon kan je niet warnen");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("Geef een redenen op.");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var warnEmbed = new discord.RichEmbed()
        .setDescription("warn")
        .setColor("ee0000")
        .addField("warned gebruiker", user)
        .addField("Gewarned door", message.author)
        .addField("Aantal warns", warns[user.id].warns)
        .addField("Reden", reason);

    var warnChannel = message.guild.channels.find(`name`, "straffen");
    if (!warnChannel) return message.guild.send("Kan het kanaal niet vinden");

    warnChannel.send(warnEmbed);

    if (warns[user.id].warns == 3) {

        var warnbericht = new discord.RichEmbed()
            .setDescription("PAS OP " + user)
            .setColor("ee0000")
            .addField("Bericht ", "Nog 2 waarschuwingen en je krijgt een kick!!!!!");

        message.channel.send(warnbericht);

    } else if (warns[user.id].warns == 4) {

        var warnbericht = new discord.RichEmbed()
            .setDescription("PAS OP " + user)
            .setColor("ee0000")
            .addField("Bericht ", "Nog 1 waarschuwing en je krijgt een kick!!!!!");

        message.channel.send(warnbericht);

    } else if (warns[user.id].warns == 5) {

        message.guild.member(user).kick(reason);
        message.channel.send(`${user} is gekickd!!`);



    }

}

module.exports.help = {
    name: "warn",
    description: "Geef iemand een warn"
}