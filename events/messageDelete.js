var Discord = require('discord.js');

exports.run = (bot, messageDelete) => {
    if (messageDelete.guild.id == '461738525768024075') {
        if (messageDelete.channel.id == '466882599596326922') {
            return;
        } else if (messageDelete.channel.id != '466882599596326922') {
            messageDelete.guild.channels.cache.get("465742371670327296").send(`The message: "${messageDelete.content || "(no content)"}" by **${messageDelete.author.tag}** was deleted.`)
        }
    } else if (messageDelete.guild.id == '479856759184424990' && !messageDelete.author.bot) {
        messageDelete.guild.channels.cache.get("479916795671609345").send(`The message: "${messageDelete.content || "(no content)"}" by **${messageDelete.author.tag}** was deleted.`)
    } else {
        return;
    }
}