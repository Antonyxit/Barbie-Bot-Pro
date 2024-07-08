let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let str = `🧸METODOS DE PAGO🎀
Kary Crom

CLABE TRANSFERENCIAS: 

Stp
722969010624936781

Nu
638180010187356629

Afirme
062580008440887796

Bbva
012180015283673131

🎀DEPÓSITOS🧸

Bbva
4152313976120126

🎀CONCEPTO🧸
Únicamente coloca tu nombre o el nombre de quien queda el perfil.

Manda comprobante de pago con texto de lo que solicitas📝 y tu pedido se entregara lo antes posible🫶🏽

✨GRACIAS POR TU COMPRA✨*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `𝑴𝑶𝑵𝑲𝑬𝒀 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼`, 
body: ig, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}}}, { quoted: fkontak })}
/*conn.sendHydrated(m.chat, str, `𝑴𝑶𝑵𝑲𝑬𝒀 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://chat.whatsapp.com/FXhHi3CURVdAhqXFKp64vT', '🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝙂𝙧𝙤𝙪𝙥𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖 | 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/
handler.command = /^dona(te|si)|donar|pagar|pago|pagarbarbie|pagarbot|pagobarbie|pagokary|pagarkary|karipago|metododepago|donating$/i
handler.exp = 80
export default handler
