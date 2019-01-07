module.exports = {
    name: 'help',
    permission: 1,
    main: function (bot, msg) {
        msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "Here's some help with me, your friendly neighborhood MahUwU!",
              icon_url: bot.user.avatarURL
            },
            description: "*Put some pretty dolphins in my boba, please, Jared?*",
            fields: [
                {
                    name: "m!info",
                    value: "Embeds general bot information into the chat."
                },
                {
                    name: "m!help",
                    value: "Self-explainable - but here it is!"
                },
                {
                    name: "j!leaderboard/j!lb",
                    value: "Lists the top ten message senders!"
                  },
                {
                    name: "m!hug",
                    value: "Hug yourself or someone else!"
                },
                {
                    name: "m!love",
                    value: "Endearingly remind yourself or someone else how much love there is to go around!"
                },
                {
                    name: "m!ping",
                    value: "Ping me and measure my response time! Don't worry, I don't bite uwu~"
                },
                {
                    name: "m!uptime",
                    value: "Check my uptime and measure how long it's been since Jared either updated me or I restarted on my own!"
                },
                {
                    name: "m!attention [request]",
                    value: "Send a DM to Jared that notifies him on all possible platforms that you require attention! You can also add a specialized request, e.i. `m!attention Bring me boba`. **Note: this command only works for Mahal.**"
                },
            ],
            footer: {
              icon_url: msg.guild.iconURL,
              text: msg.guild.name
            }
          }
        });
    }
}