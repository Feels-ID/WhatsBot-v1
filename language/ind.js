exports.noregis = () => {
        return `*「 BELOM TERDAFTAR 」*\n\n*Hai omm, kamu belom terdaftar jadi partner kami\nyuk daftarkan diri anda dengan cara berikut.\nCommand ${prefix}daftar nama|umur* \n*Contoh: ${prefix}daftar AGUSZ|20*`
}

exports.rediregis = () => {
        return `*「 SUDAH REGISTER 」*\n\n*kamu sudah TERDAFTAR jadi partner APBOT*`
}

exports.wrongf = () => {
        return`*format salah/text kosong*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 ♻ ️DATA PENDAFTARAN ♻️ 」*\n╭━─━─━─━─≪✠≫─━─━╮\n⚕ NAMA :  ${namaUser}\n⚕️NOMOR : wa.me/${sender.split("@")[0]}\n⚕️UMUR : ${umurUser}\n⚕️joined : ${time}\n⚕ *NS* : ${serialUser}\n⚕️desc : ketik #menu untuk mendapatkan fitur dari APBOT\n╰━─━─━─━─≪✠≫─━─━╯\n▌│█║▌│ █║▌│█│║▌║\n*DEVELOPER APBOT*`
}
exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*maaf tapi ${pushname} bukan owner script*`
}

exports.limitend = (pushname) => {
        return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
        return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`🔰🔰 *ATM* 🔰🔰\n  ⚕️ *Nama* : ${pushname}\n  ⚕️ *Nomer* : ${sender.split("@")[0]}\n  ⚕️ *Uang* : ${uangkau}`
}
