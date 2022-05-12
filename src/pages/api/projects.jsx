export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/970386645461389332/970578192228306984/uwnkown.jpg",
      name: "Stoneclane List",
      description:
        "Manage your server and bot with Stoneclane list! (Stoneclane Development project) ",
      link: "https://stoneclane.xyz/",
      language: "Ejs",
      languageIcon: "./static/techs/html.svg",
    },
    {
      id: 2,
      image: "https://api.roxza.me/v1/capture/old/i?link=https://www.stubot.ml",
      name: "Stu bot",
      description:
        "Stu bot is a turkish language bot with entertainment commands. ",
      link: "https://www.stubot.ml",
      language: "Javascript",
      languageIcon: "./static/techs/javascript.svg",
    },
    {
      id: 3,
      image: "https://cdn.discordapp.com/attachments/970386645461389332/970578192001822770/uwnkown.jpg",
      name: "Giveaways Bot",
      description:
        "Your giveaways are always with you with the Giveaways Bot! ( APPROVED BY DISCORD) ",
      link: "https://giveaways-bot.com/",
      language: "Javascript",
      languageIcon: "./static/techs/javascript.svg",
     },
     {
      id: 4,
      image: "https://cdn.discordapp.com/attachments/919174982448320574/919175202015936542/InShot_20211211_131906877.jpg",
      name: "Botcords",
      description:
        "Botcords is a code sharing site that offers Bot infrastructures for Discord.",
      link: "https://botcords.me",
      language: "Javascript",
      languageIcon: "./static/techs/javascript.svg",
     },
     {
      id: 5,
      image: "https://cdn.discordapp.com/attachments/970386645461389332/970578191683035146/uwnkown.jpg",
      name: "Sound Pro Bot",
      description:
        "Your best music source, Sound Pro Always with you. 🎶",
      link: "https://dsc.gg/soundpro",
      language: "Javascript",
      languageIcon: "./static/techs/javascript.svg",
     },
     {
      id: 6,
      image: "https://media.discordapp.net/attachments/971049189377179718/971848852384673843/new_banner.png",
      name: "TrestHost",
      description:
        "Take advantage of hosting with TrestHost!",
      link: "https://tresthost.com",
      language: "Javascript",
      languageIcon: "./static/techs/javascript.svg",
     }
  ];
  res.status(200).json(data);
};
