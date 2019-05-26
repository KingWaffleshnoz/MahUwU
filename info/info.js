module.exports = {
  name: 'info',
  permission: 1,
  main: function (bot, msg) {
      msg.channel.send({
        embed: 
        { color: 3447003,
          footer: {
            icon_url: msg.guild.iconURL,
            text: "© Jared Lyon 2019"
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
              name: "Last Update: v1.3.3",
              value: "-Updated info embed\n-Split main library into constituent folders"
            },
            {
              name: "GitHub: v1.3.3",
              value: "https://github.com/KingWaffleshnoz/MahUwU\nNote that this page is still a WIP."
            }
          ]
        }
      });
  }
}