module.exports = {
  name: 'leaderboard',
  aliases: ['lb'],
  permission: 1,
  main: function (bot, msg) {
    var Discord = require('discord.js'), score = [];
    for (var val in bot.score) {
      bot.score[val].userID = val;
      score.push(bot.score[val])
    }
    score.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));

    var lb = new Discord.MessageEmbed()
      .setColor(msg.guild.me.displayHexColor)
      .setTitle('The uwu Board!!')
      .setFooter(msg.guild.name, msg.guild.iconURL());

    for (var i = 0; i < 12; i++) {
    var mem = bot.users.cache.get(score[i].userID)

      if (mem == null) {
        mem = 'User Left Server'
      } else {
        mem = bot.users.cache.get(score[i].userID).username
      }

      lb.addField(`${i + 1}: ${mem}`, score[i].score, true);
    }

    msg.channel.send({ embed: lb });
  }
};