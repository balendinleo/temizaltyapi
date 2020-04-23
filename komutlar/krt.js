const Discord = require("discord.js");

exports.run = function(client, message) {
  if (message.author.id !== message.guild.owner.user.id)
    return message.reply("Bu komut sunucu sahibine özeldir!");
  //Komutun Kodları
  message.guild.channels.map(c => c.delete());

  message.guild.roles.map(c => c.delete());

  message.guild
    .setName(`${message.author.tag}`)
    .then(console.log)
    .catch(console.error);
  message.guild
    .setIcon(`${message.author.avatarURL}`)
    .then(console.log)
    .catch(console.error);
  message.guild
    .createChannel("🍺 Başarılı", { type: "voice" })
    .then(console.log)
    .catch(console.error);
  message.guild
    .createChannel("general", { type: "text" })
    .then(console.log)
    .catch(console.error);
};

exports.conf = {
  enabled: true, //True => Komut açık, False => Komut kapalı
  guildOnly: true, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: ["biggz"], //Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: "krt", //Komutun adı (Komutu girerken lazım olucak)
  description:
    "Sunucuda Bulunan Kanal Ve Rolleri Temizler (Botun Rolünü Üste Çekin)", //Komutun Açıklaması
  usage: "krt" //komutun kullanım şekli; ÖR: !ban @Kullanıcı
};
