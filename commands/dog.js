const discord = require("discord.js");
const superAgent = require("superagent");
 
module.exports.run = async (bot, message, args) => {
    var dog;
 
    dog = await superAgent
        .get("https://random.dog/woof.json");
 
    console.log(dog.body);
 
    while (dog.body.url.endsWith(".webm") || dog.body.url.endsWith(".mp4")) {
        dog = await superAgent
            .get("https://random.dog/woof.json");
        console.log(dog.body)
    }
 
    var embed = new discord.RichEmbed()
        .setColor("#880000")
        .setTitle("Dog :dog:")
        .setImage(dog.body.url);
 
    message.channel.send(embed);
 
}
 
module.exports.help = {
    name: "dog",
    description: "toont een hond"
}