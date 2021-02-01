const owner = (prefix, botName, ownerName) => {
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
┷┯ *〈 OWNER 〉*
   ╽
   ┠≽ *${prefix}setprefix* <text/optional>
   ┃ *Desc* : Replace Prefix
   ┠──────────────╼
   ┠≽ *${prefix}block* <@tag>
   ┃ *Desc* : Block User
   ┠──────────────╼
   ┠≽ *${prefix}unblock* <@tag>
   ┃ *Desc* : Unblock User
   ┠──────────────╼
   ┠≽ *${prefix}bc* <text>
   ┃ *Desc* : Broadcast to All Contact & Group
   ┠──────────────╼
   ┠≽ *${prefix}clone* <@tag>
   ┃ *Desc* : Clone Profile From Other Members
   ┠──────────────╼
   ┠≽ *${prefix}clearall
   ┃ *Desc* : Clear All Chat
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.owner = owner
