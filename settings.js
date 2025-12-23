//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEd2T3JNTm1iMVZVMnJLWXRhd01OT3lSOVNVM2I5UGFkZkRoalhSRlRWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnVZS2lCN21NZysrVTVkMnNKVERFdWY3OTlZS2dGdmNMWXRMaGdDQ0xDYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTkpQZ0N5eFBsOEFOQndPRllVc2s3dkU3TVdJL3JVLzc4KzFYckt5Nm04PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4S3RSL3Jxb2dEaVRicjFRNEhneHNPV3lEUGtKdkx0d2RLMGZ5K3dzakJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1LVEhWZW9HRDFLWHZSNkp5YVNCbzFBQ2hxNWg1aTNOQ3M5MjltbHNsVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZDRVNXYXZVQTVMZEdqOCtmU3JQZkprcWE2SHRISTRhbHdWdHJsMDhkSHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU5rZ080K21nQ2puSnAyMkRObjJUSTZGS2tnaEo2YXE1NnVTY2JLdHhtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkFmcHBsOE1YMWoyNDRsREh1MTZodlNpR0FLbVhXaFFPMUY1Vm8rRUFsRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik05Mk9rN0IvbjM2SXRmM2tLeC96cDNYbitWQ1V0VHhhOGFOMWN3Q3FwUEUwQ3JFTXppT2l2TjRIVWlreW1DNDkzaDRHeU1YWkZrZW9EZVNSWGRkN2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiI3TUJzSWJlREViNGhsNzExYXlpS1RKQXRKSDlKVG5pRWR0TEIzUGEzZ0M0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODE0LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODE0LCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijk3SE42Mk42IiwibWUiOnsiaWQiOiIyMjk2NzUzNTI5NDoyOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDWUJFUlNIQVJLIiwibGlkIjoiMTYwODY0MjI1MjQzMjg1OjI4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTG1ScDU4SEVNajRxOG9HR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL2l4TEtmZ2Fpc094OGVuNnIyT3N5aTV2VCtodnQ2QUw2TDVwQmduaVlDQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNFRCWWtoMXQ5R21QZU1RcTZGMTdDTjRsVncwdld0WFBsV2pxdmlRSjlZcnlOTlRnTDQ3QVZnR0xkQ3JtZWd6U1V6Umw5em1DTGNtNHRQUlVZS3lRRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjV6clArL2NxYmZPM2lmcjcrRVBJNW9uNmxZY2F1VTFaUTFrTnFicGlwaDJKRThIemJDYnprczhRb1FWSEdkZGpyVG9XMEYzdHp0NjFKMWxZcCtMWGhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTYwODY0MjI1MjQzMjg1OjI4QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmNHNTeW40R29yRHNmSHArcTlqck1vdWIwL29iN2VnQytpK2FRWUo0bUFnIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWdnTiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjY1MjE5NDMsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIa2QifQ==' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '29967535294' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
