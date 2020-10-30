const Discord = require('discord.js');
const Search = require('./models/Search');
require("dotenv").config();

const { getArticles, getTitles, getMain } = require('./views/searchView');

const client = new Discord.Client();

const log = console.log;

client.on('ready', () => {
    log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content.indexOf('/') === 0){
        if (msg.content.includes('s ')) {

            const srsearch = msg.content.slice(3);
            var search = Search(srsearch);

            search.find().then(data => {
                    if (typeof data.query != "undefined"){

                        const articles = getArticles(data.query.pages);

                            if (articles[srsearch]){
                                msg.reply(`First article: \n${articles[srsearch]}`);
                            } else {
                                msg.reply(`First article: \n${articles[[Object.keys(articles)[0]]]}`);
                            }

                        msg.reply(getTitles(articles));
                        
                    }else{
                        msg.reply('Check you spelling pls uwu!!!')
                }
            });
        }
    }
});

client.login(process.env.DC_TOKEN);