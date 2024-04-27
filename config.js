const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
}

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  PORT: toBool(process.env.PORT) || 8000,
  AUDIO_DATA: process.env.AUDIO_DATA || '*ੈ✩₊˚𝗢𝗯𝗶𝘁𝗼 𝗨𝗰𝗵𝗶𝗵𝗮ྀ࿐;*ੈ✩₊˚𝗢𝗯𝗶𝘁𝗼 𝗨𝗰𝗵𝗶𝗵𝗮ྀ࿐;https://i.imgur.com/RzxdGxB.jpeg',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  ALIVE_DATA : process.env.ALIVE_DATA || "_*Hy &sender i am alive now*_\n\n_PLATFORM: &platform_\n_RUNTIME : &runtime_\n\n_. type alive to update your alive message_",
  SESSION_ID: process.env.SESSION_ID || 'Jarvis_dc0d_6c73_8723_f460_6731_bc18_55c3_d33b',
  LANG: process.env.LANG || 'EN',
  ELEVENLABS: process.env.ELEVENLABS,
  HANDLERS: process.env.HANDLER  || '/',
  ALLWAYS_ONLINE: toBool(process.env.ALLWAYS_ONLINE || "false"),
  READ_MSG: toBool(process.env.READ_MSG || "false"),
  BRANCH: "main",
  KOYEB_API: process.env.KOYEB_API,
  BRAINSHOP: process.env.BRAINSHOP || '172372,nbjE0YAlyw3cpoMl',
  TGTOKEN: "bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4",
  API: 'https://api.lokiser.xyz/',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆;*ੈ✩₊˚𝗢𝗯𝗶𝘁𝗼 𝗨𝗰𝗵𝗶𝗵𝗮ྀ࿐',
  CALL_BLOCK: toBool(process.env.CALL_BLOCK) || false,
  SAVE_STATUS: toBool(process.env.SAVE_STATUS) || false,
  STATUS_VIEW: process.env.STATUS_VIEW || "true",
  REJECT_CALL: toBool(process.env.REJECT_CALL || "true"),
  ERROR_MSG: toBool(process.env.ERROR_MSG) || true,
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi &mention Welcome to &gname",
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi $mention It was Nice Seeing you",
  MEDIA_DATA: process.env.MEDIA_DATA|| 'ʟɪꜱᴛ ᴍᴇɴᴜ;*ੈ✩₊˚𝗢𝗯𝗶𝘁𝗼 𝗨𝗰𝗵𝗶𝗵𝗮ྀ࿐;https://i.imgur.com/lROEr5r.mp4',
  SUDO: process.env.SUDO || '918101821810',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || '*ੈ✩₊˚𝗢𝗯𝗶𝘁𝗼 𝗨𝗰𝗵𝗶𝗵𝗮ྀ࿐;*ੈ✩₊˚𝗢𝗯𝗶𝘁𝗼 𝗨𝗰𝗵𝗶𝗵𝗮ྀ࿐;https://i.imgur.com/lROEr5r.mp4',
  WORK_TYPE: process.env.WORK_TYPE || 'private',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
