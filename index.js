const {
    Collection,
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    EmbedBuilder,
    Events,
    Client,
    GatewayIntentBits
} = require('discord.js')

const config = require('./src/config/config')
const commands = require('./src/commands.js')
const welcomeChannelName = 'welcome'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
})

client.on(Events.ClientReady, () => {
    console.log('Logged in as ' + client.user.tag)
    console.log('Bot id: ' + client.user.id)
    console.table(commands)

    const slash = client.application.commands
    slash.create({
        name: 'button',
        description: 'button command'
    })
})

client.on(Events.MessageUpdate, (msg) => {
    console.log(`message update: ${msg.content}`)
})

client.on(Events.InteractionCreate, async (interaction) => {
    if (interaction.isButton) {
        console.log('button click!')
        interaction.reply('okay')
        return
    }

    if (!interaction.isCommand()) return

    const { commandName, options } = interaction

    if (commandName === 'button') {
        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setCustomId('primary')
                .setLabel('Click me!')
                .setStyle(ButtonStyle.Primary)
        )

        interaction.reply({
            content: 'button will create',
            components: [row]
        })
    }
})

const prefix = '!'

client.on(Events.MessageCreate, async (msg) => {
    if (msg.author.bot || !msg.content.startsWith(prefix)) return

    const userCmd = msg.content.slice(prefix.length)
    const action = commands[userCmd]

    if (action) {
        action(msg)
    } else {
        msg.channel.send(`Unknow command: ${userCmd}`)
    }
})

client.on(Events.GuildBanAdd, async (guild, user) => {
    console.log('hello world')
    console.log(`events ban: ${Events.GuildBanAdd}`)
    console.log(`user banned${user.username}`)
})

client.on('error', (error) => {
    console.error(error)
})

client.on('guildMemberAdd', (member) => {
    console.log(
        `New User "${member.user.username}" has joined "${member.guild.name}"`
    )
    const welcome = member.guild.channels.cache.find(
        (c) => c.name === welcomeChannelName
    )

    if (welcome) {
        welcome.send(`"${member.user.username}" has joined this server`)
    }
})

client.on(Events.Debug, console.log)

module.exports = () => {
    client.login(config.DISCORD_TOKEN)
}
