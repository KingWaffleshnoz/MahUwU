module.exports = {
    name: 'score',
    permission: 1,
    main: async function (bot, msg) {
        if (msg.mentions.users.first()) {
            var target = msg.mentions.users.first();

            msg.channel.send(target.username + ` has a score of **` + bot.score[target.id].score + `**!`);
        } else if (msg.mentions.users.first() == null) {
            msg.reply(`you have a score of **` + bot.score[msg.author.id].score + `**!`);
        }
    }
};