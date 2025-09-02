let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;ㅤㅤㅤㅤㅤ…⁠ᘛDaniel;;\nFN:ㅤㅤㅤㅤㅤ…⁠ᘛDaniel⁩\nORG:ㅤㅤㅤㅤㅤ…⁠ᘛDaniel⁩a\nTITLE:\nitem1.TEL;waid=593990089935:593990089935\nitem1.X-ABLabel:ㅤㅤㅤㅤㅤ…⁠ᘛDaniela\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:ㅤㅤㅤㅤㅤ…⁠ᘛDaniel⁩a\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ㅤㅤㅤㅤㅤ…⁠ᘛDaniel⁩a', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
