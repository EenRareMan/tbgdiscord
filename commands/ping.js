module.exports.run = async (bot, message, arguments) => {

    message.channel.send("pong: " + (message.createdTimestamp - Date.now()) + "ms");

}

module.exports.help = {
    name: "ping",
    description: "Krijg pong terug met het aantal ms"
}