module.exports = {
  name: 'info',
  permission: 1,
  main: function (bot, msg) {
      msg.channel.send({
        embed: 
        { color: 3447003,
          footer: {
            icon_url: msg.guild.iconURL,
            text: "Version: 1.3.1"
          },
          author: {
            name: "Bot Information",
            url: "https://discord.gg/q2fCsNr",
            icon_url: msg.guild.iconURL
          },
          fields: [
            {
              name: "General:",
              value: "MahUwU is a general utility bot made by Jared Lyon (Jared ζ #0254) that primarily uses text triggers to perform rudimentary tasks.\nYou can join his server here: https://discord.gg/q2fCsNr"
            },
            {
              name: "Last Update:",
              value: "**1.3.1**\n-Added JSON based points system\n-Added score leaderboard\n-Fixed all embed footer\n-Published the first commit to GitHub"
            },
            {
              name: "GitHub:",
              value: "https://github.com/KingWaffleshnoz/MahUwU\nNote that this page is still a WIP."
            }
          ]
        }
      });
  }
}