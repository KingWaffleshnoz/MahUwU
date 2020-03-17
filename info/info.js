module.exports = {
  name: 'info',
  permission: 1,
  main: function (bot, msg) {
      msg.channel.send({
        embed: 
        { color: 3447003,
          footer: {
            icon_url: msg.guild.iconURL,
            text: msg.guild.name
          },
          author: {
            name: "Bot Information",
            url: "https://discord.gg/q2fCsNr",
            icon_url: msg.guild.iconURL
          },
          fields: [
            {
              name: "General:",
              value: "MahUwU is a general utility bot made by Jared Lyon (jareb #1338) that primarily uses text triggers to perform rudimentary tasks.\nYou can join his server here: https://discord.gg/q2fCsNr"
            },
            {
              name: "Last Update: v1.4.0",
              value: "-Cleaned up code\n-Fixed minor bugs\n-Added several chat functions"
            },
            {
              name: "GitHub: v1.4.0",
              value: "https://github.com/KingWaffleshnoz/MahUwU\nNote that this page is still a WIP."
            }
          ]
        }
      });
  }
}