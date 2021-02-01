const search = (prefix, botName, ownerName) => {
	return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.4
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 SEARCH 〉*
   ╽
   ┠≽ *${prefix}wait
   ┃ *Desc* : Send Name Anime & Short Scene
   ┠──────────────╼
   ┠≽ *${prefix}ytsearch <query>
   ┃ *Desc* : Search YouTube Video
   ┠──────────────╼
   ┠≽ *${prefix}trendtwit
   ┃ *Desc* : Search Trending Twitter Video
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.search = search
