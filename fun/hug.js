module.exports = {
    name: "hug",
    permission: 1,
    main: function (bot, msg) {
        var lovee = msg.mentions.users.array()[0];
        var arr1 = ["https://i.imgur.com/qmO66BW.gif",
                    "https://imgur.com/wVdjO4C.gif",
                    "https://imgur.com/r6cIm8G.gif",
                    "https://i.imgur.com/Ltmb8aa.gif",
                    "https://i.imgur.com/c3WzMZu.gif",
                    "https://i.imgur.com/Kaqi3Yf.gif",
                    "https://i.imgur.com/7h5JzOQ.gif",
                    "https://i.imgur.com/AFZn41g.gif",
                    "https://i.imgur.com/GqefnoO.mp4"]

        if (lovee != null) {
            msg.channel.send("**" + msg.author.toString() + " hugs " + lovee.toString() + "!**\n" + arr1[Math.floor(Math.random() * arr1.length)]);
        } else {
            msg.reply(`Awww, I see you're in need of a hug~\n` + arr1[Math.floor(Math.random() * arr1.length)]);
        }
    }
}