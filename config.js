//GIFTED-MD//
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "phidzau@gmail.com";
global.location = "Bumgoma,zimbabwe";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://giftedtech:ZMIkfrL3rHsvmfyGboVXKkeyoM0FPl6z@dpg-cpp83jlds78s73e39m10-a.oregon-postgres.render.com/giftedtech";
global.BUTTONS = process.env.BUTTON_MODE || "1";
global.timezone = process.env.TIME_ZONE || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/ibrahimaitech/BLACK-PANTHER-XMD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";
global.website = process.env.GURL || "https://youtube.com/@ibrahimaitech";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c5b2b527a08a0b21392e0.jpg";
global.devs = "254739937062,254710772666";
global.sudo = process.env.SUDO_NUMBERS || "254739937062,254710772666";
global.sudo = process.env.SUDO || "254739937062,254710772666";
global.owner = process.env.OWNER_NUMBER || "263719561871,254710772666";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.MENU_VIDEOS || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/9e038e5890def3cc7aca7.jpg";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "254739937062,254710772666";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "254739937062,254710772666";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y";

global.SESSION_ID eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0VsUHJ0RHUzb3AvWFB5ek9BZjNWcy9icmZTanRMZkU3UWZQeXVtdG9FUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYW9TVVVmTWZKYVV1NTBuYi9sU3N0T09SME03K2ZBZThjWTlYY3hUR1B6OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlRW1RV2ZTUEgveldpNlVqb000WkJYWjQ3YjcwRWsxRlZaZjVwZ0xyS0UwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4ckVad2UydmNaZ28yYnVTakNZS1JpcE5SUFZlVmdBalhyTmNLaFZ4c2tvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNKSHpzbVY3NWpXSzhtSUIxam9ISFovNmpjYmtNVzJuOUxyNFQzemJ6R2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilc1bEN3UnU2S3VYWGlVdFRwajdwSWwrU0psenBGb1JGUjVrOEVGTXBObkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU1GT2FrMFN4TUN3dDVyNDhneHFWY2tMWk9NZDJKTkxyajc0SkdvN2JYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnJCbm1SdGdudHArSzBvSmlGZGlzNmtodWtkUkVnb01OWnVXbWpSYUxFYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhDVXVrZ3NVK2ZlU1ozQWhhQmJ2ZHIzQytVK3JOUFU3bU5VV1dXYk5pYnpQMzZJM0FiaUlremFrRnBhVmZvK0lNVFhVVHRuSXBMamxnVWhDd3U0cGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg2LCJhZHZTZWNyZXRLZXkiOiIzM0NzaDVSNE9rQWFSYjJIVHJTUk4vRk52eUFwVjRMNkY0ckZKWE1RN09ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnSjBUNVlMVlNjT0pDamJfd0lDRkpBIiwicGhvbmVJZCI6ImMzZWVmZjA0LTZhODUtNDcyZi04ZTUwLTBlOTljNzY1NTYyMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpc3ZraTFydGQ4QkN3RkZLdktkcXNVREZ4MzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK211dVgxQnpwRlppY1FJM1Iyb1VhZWtzTURnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhLN0NGRFYxIiwibWUiOnsiaWQiOiIyNjM3MTk1NjE4NzE6MjhAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05UbCszQVEwSU96dFFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik5UVG5NbXhFY3o1OEs2T1p5MVY5SjFWSVZvak1CZEVadnlFT3c3M1U3QkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikw5R2swREw2d2l5SUN3R2h3MTNGanZ5Mmc3SHpkVStUa3lOUWNsU0ljaVZEUWpEa3l3YXBpa0xoa0dOUkpaOVI3NkplQm9nUGRKRjRYUkE4eVk4d0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0VEYvVWtuUnJuNFYxL3BmbTZBT2xVVmFIakd4bXNITldHd2pNOEFTTDdUWjFQYXkvTHdsTE1KY2NYZkZnSHpiQ0lXc0JRc2F5QzF1Z0JtS00xNGJoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxOTU2MTg3MToyOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUVTA1ekpzUkhNK2ZDdWptY3RWZlNkVlNGYUl6QVhSR2I4aERzTzkxT3dRIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTk3ODUzfQ==
  menu: process.env.MENU_STYLE || "G1", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "4.0.0",
  caption: process.env.CAPTION ||" 𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  author: process.env.STICKER_AUTHOR || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  packname: process.env.STICKER_NAME || "🐯",
  botname: process.env.BOT_NAME || "𝘽𝙇𝘼𝘾𝙆-𝙋𝘼𝙉𝙏𝙃𝙀𝙍-𝙈𝘿",
  ownername: process.env.OWNER_NAME || "𝑰𝒃𝒓𝒂𝒉𝒊𝒎 𝑨𝒅𝒂𝒎𝒔",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ADAM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});


