var Discord = require('discord.js');

exports.run = (bot, member) => {
    if (member.guild.id == '461738525768024075') {
        var channel = member.guild.channels.cache.get("465742371670327296");
        var join = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL())
            .setFooter(member.guild.name)
            .setTimestamp()
            .setTitle('Member joined!')
            .setColor(3447003);

        channel.send({
            embed: join
        })
    } else if (member.guild.id == '479856759184424990') {
        var channel = member.guild.channels.cache.get("479916795671609345");
        var join = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL())
            .setFooter(member.guild.name)
            .setTimestamp()
            .setTitle('Member joined!')
            .setColor(3447003);

        channel.send({
            embed: join
        })
    } else {
        return;
    }
}