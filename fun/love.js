module.exports = {
    name: "love",
    permission: 1,
    main: function(bot, msg) {
        var lovee = msg.mentions.users.array()[0];
        var arr1 = [lovee + `, you're so special. to me, and to everyone in this server! I hope you know that I adore you!! Life is such a wonderful gift and it's even more wonderful with you in it. I'm so excited to grow with you and see you flourish in your life; it's really a blessing to be able to watch someone like you grow into the beautiful person we know you are. I love you!`, lovee + `, I really think the little things matter so much more than you'd think, ya know? There are so many things that make you, you and they're all loveable as heck. I promise you'd be surprised by how many times your laugh has made someone smile, how one of your hugs has made a friend's day, or how much your trust means to someone you love! Smile bright, you look beautiful!`]
        var arr2 = [`you're so special. to me, and to everyone in this server! I hope you know that I adore you!! Life is such a wonderful gift and it's even more wonderful with you in it. I'm so excited to grow with you and see you flourish in your life; it's really a blessing to be able to watch someone like you grow into the beautiful person we know you are. I love you!`, `I really think the little things matter so much more than you'd think, ya know? There are so many things that make you, you and they're all loveable as heck. I promise you'd be surprised by how many times your laugh has made someone smile, how one of your hugs has made a friend's day, or how much your trust means to someone you love! Smile bright, you look beautiful!`]

        if (lovee != null) {
            msg.channel.send(arr1[Math.floor(Math.random() * arr1.length)])
        
        } else {
            msg.reply(arr2[Math.floor(Math.random() * arr2.length)])
        }
    }
}