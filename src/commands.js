const curses = require('./curses.js')

const clearChat = async (msg) => {
    await msg.channel.bulkDelete(100).catch(console.error)
}

const getName = (msg) => {
    msg.channel.send(`name: ${msg.author.username}`)
}

const privateMsg = async (msg) => {
    const dm = await msg.author.createDM()
    dm.send('do you want me? :3')
}

const sadFace = (msg) => {
    msg.channel.send(':(')
}

const helloWorld = (msg) => {
    msg.channel.send('hello dear! I see you message')
}

const randomMeme = (msg) => {
    const memeUrl = 'https://i.pinimg.com/564x/a4/50/46/a450464948121fdbe151be9ddcf965e6.jpg'
    msg.channel.send({
        content: 'I found this:',
        files: [{
            attachment: memeUrl,
            name: 'meme_file.jpg'
        }]
    })
}

const fuck = (msg) => {
    const i = Math.floor(Math.random() * curses.length)
    msg.channel.send(curses[i])
}
/*
 * export all avaible commands
*/

module.exports = {
    clear: clearChat,
    'get-name': getName,
    private: privateMsg,
    sad: sadFace,
    hello: helloWorld,
    meme: randomMeme,
    fuck
}
