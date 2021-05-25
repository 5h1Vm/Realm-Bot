const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require('./config.json')

bot.on("ready", () => {
  console.log(`Realm Bot logged in as: ${bot.user.tag}!`);
});


/////////////////////////////
//// Avatar Script Starts////
/////////////////////////////

bot.on("ready", () => {
  console.log(`Avatar script running!`);
});

bot.on("message", (message) => {
  if (message.author.bot) return;
if (message.content.startsWith('av' || 'avatar')) {
  if (message.mentions.users.size) {
    let member = message.mentions.users.first()
    if (member) {
      const emb = new Discord.MessageEmbed()
        .setImage(member.displayAvatarURL())
        .setTitle(member.username)
      message.channel.send(emb)

    }
    else {
      message.channel.send("Sorry none found with that name")

    }
  } else {
    const emb = new Discord.MessageEmbed()
      .setImage(message.author.displayAvatarURL())
      .setTitle(message.author.username)
    message.channel.send(emb)
  }
}
})
/////////////////////////////
///// Avatar Script Ends/////
/////////////////////////////


////////////////////////////
//// Bello Script Starts////
////////////////////////////


const Bellouser = [
  "Hi Realm Bot!",
  "hi Realm bot!",
  "Hi Realm Bot",
  "hi Realm bot",
  "Hello Realm bot",
  "Hello Realm Bot!",
  "hello Realm bot!",
  "Hello Realm Bot",
  "hello Realm bot",
  "Hi the Realm Bot!",
  "hi the Realm bot!",
  "Hi the Realm Bot",
  "hi the Realm bot",
  "Hello the Realm Bot!",
  "hello the Realm bot!",
  "Hello the Realm Bot",
  "hello the Realm bot",
  "Hi The Realm Bot!",
  "hi The Realm bot!",
  "Hi The Realm Bot",
  "hi The Realm bot",
  "Hello The Realm Bot!",
  "hello The Realm bot!",
  "Hello The Realm Bot",
  "hello The Realm bot", ,
  "hey Realm Bot!",
  "hey Realm bot!",
  "hey Realm Bot",
  "hey Realm bot",
  "hey The Realm Bot!",
  "hey The Realm bot!",
  "hey The Realm Bot",
  "hey The Realm bot",
  "hey the Realm Bot!",
  "hey the Realm bot!",
  "hey the Realm Bot",
  "hey the Realm bot",
];

const Belloreply = [
  "Bello!",
  "Bello :hugging_face: !",
  "https://tenor.com/view/minion-hello-bello-kiss-gif-12923282",
  "Bello Bud!",
  "Bello :blush:!",
  "Hello!",
  "Bello",
  "Hello",
  "Bello!",
  "Hello!",
  "hi!",
  "Hi!",
  "Hi",
  "https://tenor.com/view/hello-there-private-from-penguins-of-madagascar-hi-wave-hey-there-gif-16043627",
  "https://tenor.com/view/cute-animals-mochi-mochi-peach-cat-goma-cat-wave-gif-17543358",
  "https://tenor.com/view/hello-wave-cute-anime-cartoon-gif-7537923",
  "https://tenor.com/view/hello-hi-duck-cute-kawaii-gif-11820295",
];

bot.on("ready", () => {
  console.log(`Bello script running!`);
});

bot.on("message", (message) => {
  if (message.author.bot) return;
  if (Bellouser.some((word) => message.content.includes(word))) {
    const reply = Belloreply[Math.floor(Math.random() * Belloreply.length)];
    message.reply(reply)
  }
});

/*Join*/

bot.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.find(
    (channel) => channel.name === "welcome"
  );
  if (!channel) return;
  let userjoin = new Discord.MessageEmbed()
    .setDescription(
      ":tada: **" + member.user.tag + "** joined " + member.guild.name
    )
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setColor(0x47FF47)
    .setFooter("We are now " + member.guild.memberCount + " members in " + member.guild.name)
    .setTimestamp();
  channel.send(userjoin);
});

/*Quit*/

bot.on("guildMemberRemove", (member) => {
  const channel = member.guild.channels.cache.find(
    (channel) => channel.name === "left"
  );
  if (!channel) return;

  let userleft = new Discord.MessageEmbed()
    .setDescription(
      ":bouquet: **" + member.user.tag  + "** left " + member.guild.name
    )
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setColor(0xFF4A47)
    .setFooter("We are left with " + member.guild.memberCount + " members in " + member.guild.name)
    .setTimestamp();
  channel.send(userleft);
});


////////////////////////////
///// Bello Script Ends/////
////////////////////////////


bot.login(config.token);
