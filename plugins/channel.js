let handler = async (m, { conn }) => {

m.reply(`*قناتي على الواتساب:*\n
*تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
