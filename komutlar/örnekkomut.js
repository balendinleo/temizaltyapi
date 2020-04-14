const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle("")
    .setDescription("")
    .setColor("RANDOM")
    .addField(
      "**» Eğlence Komutları**",
      ` **-eğlence , -eğlence2 , -eğlence3** = Botun Eğlence Komutlarını Gösterir.  `
    )
    .addField(
      "**» Kullanıcı Komutları**",
      `**-kullanıcı** = Botun Kullanıcı Komutlarını Gösterir. `
    )
    .addField(
      "**» Sunucu Komutları**",
      ` **-sunucu** = Botun Sunucu Komutlarını Gösterir.  `
    )
    .addField(
      "**» Ana Komutları**",
      ` **-anakomutlar** = Botun Ana Komutlarını Gösterir.  `
    )
    .addField(
      "**» Müzik Komutları**",
      ` **-müzik** = Botun Müzik Komutlarını Gösterir.  `
    )
    .setFooter("Yardım Komutu", client.user.avatarURL);
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce(
      (long, str) => Math.max(long, str.length),
      0
    );
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "help",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["h", "komutlar", "help", "y"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yardım [komut]"
};
