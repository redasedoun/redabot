import axios from "axios";

let handler = async (m, { text }) => {
  if (!text) return m.reply("مثـــــــــال :\n *.ai hello* ");

  let prompt = "Your name is ossama damis ai developed by sedoun reda"; 

  try {
    let { data } = await axios.get("https://mannoffc-x.hf.space/ai/prompt", {
      params: {
        prompt: prompt,
        message: text,
      },
    });
    m.reply(data.result);
  } catch (e) {
    m.reply(e.message);
    console.error(e);
  }
};

handler.help = handler.command = ["ai"];
handler.tags = ["ai"];
export default handler;
