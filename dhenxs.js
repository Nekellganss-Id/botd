/*
 𝐖𝐄𝐋𝐂𝐎𝐌𝐄
 BASE DHENXS CODE  

Jangan Hapus Creator
BOLEH RECODE TAPI JANGAN HAPUS CREATOR NYA
Creator By Dhenxs Code
Base ini Di Buat Oleh DhenxsCode Buat Kalian Semua Jangan di Ubah
Mau Recode Izin Saya Ya
Kalo Eror Chat Saya 085697662826
BABYGRL BOT 
OBOYBOTZ

MEDIA SOSIAL SAYA PAKAI
TERMUXX
zarchiver
QuiEdit

PENYEDIA APIKEY
LOLHUMAN KEY
ZEKSKKEY
ZERKEY
DAN LAIN SEBAGAINYA
*/
const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const brainly = require('brainly-scraper')
const { spawn, exec, execSync } = require("child_process")
const fs = require('fs')
const crypto = require('crypto')
const request = require('request')
const os = require('os')
const axios = require("axios")
const moment = require('moment-timezone')
const Math_js = require('mathjs')
const fetch = require('node-fetch')
const speed = require('performance-now')
const ffmpeg = require('fluent-ffmpeg')
const yts = require( 'yt-search')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const imgbb = require('imgbb-uploader')
const { webp2mp4File } = require('./lib/webp2mp4')
const { wikiSearch } = require('./lib/wiki.js')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { color, bgcolor } = require('./lib/color')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { jadibot, stopjadibot, dhenxsjadibot } = require('./lib/jadibot.js')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { fetchJson, fetchText, getBase64, kyun, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { mediafireDl } = require('./lib/mediafire.js')
//══════════[ PEMBATAS]════════════════════════════//

//══════════[ DATABASE JSON]════════════════════════════//
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
//══════════[ PEMBATAS]════════════════════════════//

//Subscribe Channel DhenxsCode Bang //

//BANTU 1K SUBSCRIBE YA BANG GRATIS SUBSCRIBE//

//══════════[ APIKEY SETTING]════════════════════════════//
zerkey = 'ZeroYT7'
lolkey = 'KurrXd' 
zekskey = 'Gunturst' 
//══════════[ PEMBATAS]════════════════════════════//

//══════════[ THUMBNAIL BOT]════════════════════════════//
const tamnel = fs.readFileSync("./media/gambar/Menu.jpg"); 
const gambar = fs.readFileSync("./media/gambar/Donasi.jpg"); 
const timnel = fs.readFileSync("./media/gambar/iklan.jpg"); 
const tumnel = fs.readFileSync("./media/gambar/Sewa.jpg"); 
const tomnel = fs.readFileSync("./media/gambar/Allmenu.jpg"); 
const temnel = fs.readFileSync("./media/gambar/Scrip.jpg"); 
const thumb = fs.readFileSync("./media/gambar/thumb.jpg"); 
const tembu = fs.readFileSync("./media/gambar/Rules.jpg"); 
//══════════[ PEMBATAS]════════════════════════════//

//══════════[ GANTI DI SINI]════════════════════════════//
namabot = 'BABYGRL BOT'
namaowner = 'Dhenxs Code'
nomorowner = '6285697662826','6288210637739'
nomorpremium: '62nomor'
Creator = 'Creator Dhenxs Code' //Jangan Hapus Ya Bro
autorespon = true
autoread = true
autocomposing = true
autorecording = true
AutoRespon: true
//══════════[ PEMBATASAN]════════════════════════════//

//══════════[ STICKER WM]════════════════════════════//
// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()
//══════════[ PEMBATASAN]════════════════════════════//
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
if (position !== null) {
        return _scommand[position].chats
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  
//══════════[ STICKER]════════════════════════════//
//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			dhenxs.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			dhenxs.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			dhenxs.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			dhenxs.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			dhenxs.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
/*================================HEAL/ENERGY==============================*/
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
dhenxs.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
dhenxs.sendMessage(from, hasil, type, options).catch(e => {
dhenxs.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}
const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					dhenxs.sendMessage(to, media, sticker, {quoted: froxx})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
module.exports = dhenxs = async (dhenxs, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			//if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
            const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
           const tescuk = ["0@s.whatsapp.net"]
         const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-' 
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
//══════════[ PEMBATAS]════════════════════════════//
			mess = {
				daftar: `Maaf kak, kakak belum daftar menjadi user ${namabot}.\n Silahkan daftar dengan mengetik *.daftar*`,
				wait: 'MOHON TUNGGU SEBENTAR',
				banned: 'Anda sudah terbanned, mohon hubungi owner untuk membuka banned',
				success: 'SELESAI✓',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ PENGGUNAAN DALAM GROUP!!! ❌',
					ownerG: '❌ LU BUKAN OWNER GROUP!!! ❌',
					premium: '*Perintah Ini Hanya Bisa Digunakan Oleh Member Premium, Silahkan Buy Premium Ke Owner*',
                    ownerB: '❌ LU BUKAN OWNERKU!!! ❌',
					admin: '❌ LU BUKAN ADMIN GROUP!! ❌',
					Badmin: '❌ BOT BUKAN ADMIN!!! ❌'
				}
			}
//══════════[ PEMBATAS]════════════════════════════//
			const botNumber = dhenxs.user.jid
			const ownerNumber = [`${nomorowner}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
            pushname = dhenxs.contacts[sender] != undefined ? dhenxs.contacts[sender].vname || dhenxs.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await dhenxs.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBanned = ban.includes(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isPremium= prem.includes(sender)
            const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
//══════════[ PEMBATAS]════════════════════════════//
		var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
        const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
//══════════[ PEMBATAS]════════════════════════════//
        const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			function monospace(string) {
            return '```' + string + '```'
        }   
        dhenxs.updatePresence(from, Presence.recording)
			const reply = (teks) => {
				dhenxs.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				dhenxs.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? dhenxs.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : dhenxs.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
			dhenxs.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntilink) return
				if (isGroupAdmins) return
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nKamu terdeteksi mengimkan link group, maaf saya harus ngeluarin anda :(`)
				setTimeout(() => {
				dhenxs.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 0)
			    }
			            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 1: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 2: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 3: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 4: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 5: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 6: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 7: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 8: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 9: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 10: waktoonyabro = `Selamat Pagi ${pushname}`; break;
                case 11: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 12: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 13: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 14: waktoonyabro = `Selamat Siang ${pushname}`; break;
                case 15: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 16: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 17: waktoonyabro = `Selamat Sore ${pushname}`; break;
                case 18: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 19: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 20: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 21: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 22: waktoonyabro = `Selamat Malam ${pushname}`; break;
                case 23: waktoonyabro = `Selamat Malam ${pushname}`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;
//══════════[ FAKE FAKEAN ]══════════//
            const fakedoc = {key: {fromMe: false, participant: `${nomorowner}@s.whatsapp.net`, ...(from ? {remoteJid: "status@broadcast" } : {}) }, message: {documentMessage: {mimetype: 'application/octet-stream', title: `${ucapanFakereply}`, pageCount: 0, fileName: `DhenxsCode`, jpegThumbnail: fs.readFileSync(`./media/gambar/thumb.jpg`)}}}
			const ftoko = { key: { fromMe: false, 
			             participant: `0@s.whatsapp.net`, ...(from ? { 
			             remoteJid: 'status@broadcast' } : {}) }, 
			             message: { 'productMessage': { 'product': { 'productImage':{ 'mimetype': 'image/jpeg', 'jpegThumbnail': fs.readFileSync('./media/gambar/thumb.jpg') }, 'title': `${namabot}\nRp. 10.000`, 'productImageCount': 9999 }, 'businessOwnerJid': `0@s.whatsapp.net`}}}
    const ftrol = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `${namabot} \nRp. 999.999.999`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const fhidetag = {key : {fromMe:false, 
	participant : '0@s.whatsapp.net'},
       message: {
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `Pesan Dari\n${pushname}`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
const ftrolMENU = {key : {fromMe:false,
	participant : '0@s.whatsapp.net'},
       message: { 
              orderMessage: {
                            itemCount : 100,
                            status: 1,
                            surface : 1,
                            message: `By DhenxsCode`, 
                            orderTitle: `${namaowner}`,
                            thumbnail: thumb, 
                            sellerJid: '0@s.whatsapp.net',
                            contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true}}}
			const fakeitem = (teks) => {
           dhenxs.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                 	       fromMe:false, 
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"0-1604595598@g.us" }: {})
                           },message:{"orderMessage":{
                                  "orderId":"4302154426574187",
                                  "thumbnail":fs.readFileSync("./media/gambar/thumb.jpg"),
                                  "itemCount":100,
                                  "status":"INQUIRY",
                                  "surface":"CATALOG",
                                  "message": `${namabot}\nRp. 999.999.999.999`,
                                  "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
//══════════[ PEMBATAS AKHIR  ]════════════════════════════//
        dhenxs.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	dhenxs.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})                                              
//══════════[ KATALOGNYA ]════════════════════════════//
const fakethumb = (teks, yes) => {
            dhenxs.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./media/gambar/Fake.jpg'),quoted:ftoko,caption:yes})
            }
 const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await dhenxs.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    dhenxs.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: mek})
  }
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    dhenxs.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
      const sendButVideo = async (id, text1, desc1, gam1, but = [], options = {} ) => {
      kma = gam1;
      mhan = await dhenxs.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      dhenxs.sendMessage(id, buttonMessages, MessageType.buttonsMessage, {quoted: mek})
    };
        const sendButloc = async(id, text1, desc1, gam1, but = [], options = {}) => {
               let kma = gam1
               dhenxs.sendMessage(id, {"contentText": text1,
               "footerText": desc1, 
               "buttons": but,
               "headerType": "LOCATION",
                       "locationMessage": {
                   "text": "BOT",
                   "name": "South Brisbane",
                   "address": "Cloudflare, Inc",
                   "jpegThumbnail": kma
                }}, MessageType.buttonsMessage, {quoted: mek, contextInfo:{mentionedJid: parseMention(text1, desc1)}}, options)  
              }  
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      dhenxs.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
    };
    const sendKontak = (from, nomor, nama, org, Ponsel, descBiz = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
        let nano = `Berikut Adalah Nomor Developer Saya, Silahkan Chat/Simpan Nomor Developer Saya.\n\n*NB: Dilarang Chat Yang Tidak Berkepentingan.*`
      dhenxs.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek, caption: nano}
      );
    }; 
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
    function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = dhenxs.contacts[from] != undefined ? dhenxs.contacts[from].vname || dhenxs.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'BOT'; if (!author) author = 'By DhenxsCode';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./media/stickers/${name}.exif`)) return `./media/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	
				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
				fs.writeFile(`./media/stickers/${name}.exif`, buffer, (err) => {	
					return `./media/stickers/${name}.exif`	
				})	
			}
const sendText = (from, text) => {
           dhenxs.sendMessage(from, text, MessageType.text)
        }
const textImg = (teks) => {
           return dhenxs.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./lib/Wahyuu.jpg')})
        }
//══════════[ CMD MENU MENUAN  ]════════════════════════════//
// CMD
        if (isCmd && !isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
//================================================================================//

//══════════[ FAKE TROLI  ]════════════════════════════//
const flexx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐚𝐡𝐚𝐠𝐢𝐚 𝐘𝐚`,
                 "title": `𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐮𝐩𝐚 𝐁𝐚𝐡𝐚𝐠𝐢𝐚 𝐘𝐚`,
                 'jpegThumbnail': fs.readFileSync("./lib/Wahyuu.jpg"),
                        }
	                  } 
                     }
const froxx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `Creator DhenxsCode`,
                 "title": `Creator DhenxsCode`,
                 'jpegThumbnail': fs.readFileSync("./lib/Wahyuu.jpg"),
                        }
	                  } 
                     }
//=================================================//	
switch(command) {
            case 'help':
            case 'menu':
            gam = tamnel
            var groups = dhenxs.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = dhenxs.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await dhenxs.chats.all()
					const latensi = speed() - timestampu
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = dhenxs.user.phone
            menu = `${namabot}\n${Tanggal}` 
            help = `Hai kak👋🏻 ${ucapanFakereply}
❏𝘝𝘦𝘳𝘴𝘪𝘰𝘯 𝘣𝘰𝘵 : 3.3
❏𝘖𝘸𝘯𝘦𝘳 : ${namaowner}
❏Nomor : ${sender.split('@')[0]}
❏Nama : ${pushname}
❏Version : Node Js
❏𝘗𝘳𝘦𝘧𝘪𝘹 : 𝘮𝘶𝘭𝘵𝘪-𝘱𝘳𝘦𝘧𝘪𝘹
❏Platform : ${os.platform()}
❏Wib : ${timeWib}
❏Wita : ${timeWita}
❏Wit : ${timeWit}
❏MNC : ${mnc}
❏MCC : ${mcc}
❏Uptime : ${kyun(os.uptime())}
❏Platform : ${os.platform()}
❏Hostname : ${os.hostname()}
❏Total Chat : ${totalChat.length} 

╭──❒𝘐𝘯𝘧𝘰𝘳𝘮𝘢𝘵𝘪𝘰𝘯❒──
║Speed : ${latensi.toFixed(4)} second
║Device Model: ${dhenxs.user.phone.device_model}
║Device Manufactur : ${device_manufacturer}
║Wa Version: ${dhenxs.user.phone.wa_version}
║Os Version: ${dhenxs.user.phone.os_version}
║Penggunaan Ram : ${ram2}
╰────────────❒`
buttons = [
{buttonId:`${prefix}allmenu`, buttonText: {displayText: 'ALL MENU'}, type:1},
{buttonId:`${prefix}owner`, buttonText: {displayText: 'OWNER'}, type:1},
{buttonId:`${prefix}donasi`, buttonText: {displayText: 'donett'}, type:1}
]
const penali = await dhenxs.prepareMessage("0@s.whatsapp.net", gam, MessageType.location,{ thumbnail: gam})
const ponali = penali.message["ephemeralMessage"] ? penali.message.ephemeralMessage : penali
lokasimenu = { 
contentText: `${help} `, 
footerText: `${menu}`, 
buttons: buttons, 
headerType: 6, 
locationMessage: ponali.message.locationMessage
}
await dhenxs.sendMessage(from, lokasimenu, MessageType.buttonsMessage, {quoted: ftrol, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true, "externalAdReply": {
                "title": `${namabot}`,
                "body": "DhenxsCode",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/X8X7pW7/Guntur-P.jpg",
                "thumbnail": tamnel,
                "sourceUrl": "https://youtube.com/channel/UCaXLeoUNSP1CJEkJhQKLHWw"
}})
sound = fs.readFileSync('./lib/Geleng.mp3')
dhenxs.sendMessage(from, sound, MessageType.audio, {quoted: froxx, mimetype: 'audio/mp4', ptt:true})
            break
case 'allmenu':
const allmenu = `Hai kak👋🏻${Tanggal},
╭──❒ALL MENU❒──
┃⬡${prefix}menu/help
┃⬡${prefix}allmenu
┃⬡${prefix}iklan
┃⬡${prefix}jadibot
┃⬡${prefix}premium
┃⬡${prefix}unpremium
┃⬡${prefix}premiumlist
┃⬡${prefix}chat
┃⬡${prefix}getpp
┃⬡${prefix}tovideo
┃⬡${prefix}suit
┃⬡${prefix}tourl
┃⬡${prefix}caripesan hai|12
┃⬡${prefix}owner
┃⬡${prefix}donasi
┃⬡${prefix}request
┃⬡${prefix}report
╰────────────❒

╭──❒OWNER❒──
┃⬡${prefix}join
┃⬡${prefix}bc
┃⬡${prefix}bc2
┃⬡${prefix}restart
┃⬡${prefix}shutdown
┃⬡${prefix}tagme
┃⬡${prefix}ban
┃⬡${prefix}tag 62xxx
┃⬡${prefix}unban
┃⬡${prefix}buggc
┃⬡${prefix}clearall
┃⬡${prefix}clone
┃⬡${prefix}addcmd
┃⬡${prefix}delcmd
┃⬡${prefix}listcmd
╰────────────❒


╭──❒ 𝗚𝗥𝗨𝗣 𝗠𝗘𝗡𝗨 ❒──
┃⬡${prefix}setgrupname
┃⬡${prefix}setdesc
┃⬡${prefix}setppgrup
┃⬡${prefix}listonline
┃⬡${prefix}group
┃⬡${prefix}closegc
┃⬡${prefix}opengc
┃⬡${prefix}hidetag
┃⬡${prefix}notif
┃⬡${prefix}tagall
┃⬡${prefix}tagall2
┃⬡${prefix}tagall3
┃⬡${prefix}promote
┃⬡${prefix}demote
┃⬡${prefix}promoteall
┃⬡${prefix}demoteall
┃⬡${prefix}add
┃⬡${prefix}kick
┃⬡${prefix}listadmin
┃⬡${prefix}linkgroup
┃⬡${prefix}leave
┃⬡${prefix}antilink
╰────────────❒


╭──❒DOWNLOAD❒──
┃⬡${prefix}tiktok
┃⬡${prefix}play
┃⬡${prefix}wiki
┃⬡${prefix}kalkulator
┃⬡${prefix}lirik
┃⬡${prefix}herolist
┃⬡${prefix}herodetail
┃⬡${prefix}mediafire
╰────────────❒


╭──❒HEWAN MENU❒──
┃⬡${prefix}fox
┃⬡${prefix}panda1
┃⬡${prefix}dog
┃⬡${prefix}cat
┃⬡${prefix}panda
┃⬡${prefix}bird
┃⬡${prefix}koala
╰────────────❒

╭──❒STICKER❒──
┃⬡${prefix}ttp
┃⬡${prefix}ttp2
┃⬡${prefix}toimg
┃⬡${prefix}sticker
┃⬡${prefix}stickerwm
┃⬡${prefix}stickernowm
╰────────────❒

╭──❒GAME❒──
┃⬡${prefix}family100
┃⬡${prefix}caklontong
┃⬡${prefix}tod
╰────────────❒

╭──❒TOLS MENU❒──
┃⬡${prefix}ocr
┃⬡${prefix}shortlink
┃⬡${prefix}nulis
┃⬡${prefix}ppcouple
┃⬡${prefix}attp
┃⬡${prefix}tts {Kode bahasa}
╰────────────❒


╭──❒PREMIUM❒──
┃⬡${prefix}bokep
┃⬡${prefix}cecanrandom
┃⬡${prefix}asupanbocil
┃⬡${prefix}asupanhijaber
┃⬡${prefix}asupanukhti
┃⬡${prefix}asupansantuy
┃⬡${prefix}asupanrika
┃⬡${prefix}asupanghea
┃⬡${prefix}vietnam
┃⬡${prefix}korea
┃⬡${prefix}japan
┃⬡${prefix}china
┃⬡${prefix}malaysia
┃⬡${prefix}thailand
┃⬡${prefix}Indonesia
╰────────────❒


╭──❒PHOTO SHOP❒──
┃⬡${prefix}nulis「 text 」
┃⬡${prefix}multicolor3d「 text 」
┃⬡${prefix}watercolor「 text 」
┃⬡${prefix}luxurygold「 text 」
┃⬡${prefix}galaxywallpaper「 text 」
┃⬡${prefix}lighttext「 text 」
┃⬡${prefix}beautifulflower「 text 」
┃⬡${prefix}puppycute「 text 」
┃⬡${prefix}royaltext「 text 」
┃⬡${prefix}heartshaped「 text 」
┃⬡${prefix}birthdaycake「 text 」
┃⬡${prefix}galaxystyle「 text 」
┃⬡${prefix}hologram3d
┃⬡${prefix}snow 「 text 」
┃⬡${prefix}cans 「 text 」
┃⬡${prefix}ganz 「 text 」
┃⬡${prefix}glossychrome
┃⬡${prefix}greenbush 「 text 」
┃⬡${prefix}metallogo「 text 」
┃⬡${prefix}noeltext「 text 」
┃⬡${prefix}glittergold「 text 」
┃⬡${prefix}textcake「 text 」
┃⬡${prefix}starsnight「 text 」
┃⬡${prefix}wooden3d「 text 」
┃⬡${prefix}textbyname「 text 」
┃⬡${prefix}galaxybat「 text 」
┃⬡${prefix}writegalacy「 text 」
┃⬡${prefix}snow3d「 text 」
┃⬡${prefix}birthdayday「 text 」
┃⬡${prefix}wetglass「 text 」
┃⬡${prefix}goldplaybutton「 text 」
┃⬡${prefix}silverplaybutton「 text 」
┃⬡${prefix}freefire「 text 」
┃⬡${prefix}pornhub「 text 」
┃⬡${prefix}glitch「 text 」
┃⬡${prefix}space「 text 」
┃⬡${prefix}avenger「 text 」
┃⬡${prefix}ninjalogo「 text 」
┃⬡${prefix}lionlogo「 text 」
┃⬡${prefix}marvelstudio「 text 」
┃⬡${prefix}wolflogo「 text 」
┃⬡${prefix}steel3d「 text 」
┃⬡${prefix}wallgravity「 text 」
╰────────────❒
    
╭──❒ IMAGE MAKER❒──
┃⬡${prefix}qrcode
┃⬡${prefix}barcode
┃⬡${prefix}flame
┃⬡${prefix}silktext
┃⬡${prefix}glow
┃⬡${prefix}smoke
┃⬡${prefix}crosslogo
┃⬡${prefix}flower
┃⬡${prefix}harta
┃⬡${prefix}naruto
┃⬡${prefix}dropwater
┃⬡${prefix}breakwall
┃⬡${prefix}matrix
┃⬡${prefix}neon
┃⬡${prefix}crismes
┃⬡${prefix}pantai
┃⬡${prefix}fire
┃⬡${prefix}write
┃⬡${prefix}cslogo
┃⬡${prefix}lithgext
┃⬡${prefix}skytext
┃⬡${prefix}epep
┃⬡${prefix}gplaybutton
┃⬡${prefix}splaybutton
┃⬡${prefix}text3d
┃⬡${prefix}text3d2
┃⬡${prefix}blackpink
┃⬡${prefix}leavest
┃⬡${prefix}thunder
┃⬡${prefix}light
╰────────────❒

╭──❒RANDOM IMAGE❒──
┃⬡${prefix}art
┃⬡${prefix}bts
┃⬡${prefix}exo
┃⬡${prefix}elf
┃⬡${prefix}neko
┃⬡${prefix}loli
┃⬡${prefix}waifu
┃⬡${prefix}shota
┃⬡${prefix}sagiri
┃⬡${prefix}shinobu
┃⬡${prefix}megumin
┃⬡${prefix}trap
┃⬡${prefix}yaoi
┃⬡${prefix}blowjob
┃⬡${prefix}chiisaihentai
┃⬡${prefix}ecchi
┃⬡${prefix}hentai
┃⬡${prefix}ahegao
┃⬡${prefix}hololewd
┃⬡${prefix}sideoppai
┃⬡${prefix}animefeets
┃⬡${prefix}animebooty
┃⬡${prefix}animethighss
┃⬡${prefix}animearmpits
┃⬡${prefix}hentaiparadise
┃⬡${prefix}hentaifemdom
┃⬡${prefix}hentai4everyone
┃⬡${prefix}biganimetiddies
┃⬡${prefix}lewdanimegirls
┃⬡${prefix}animebellybutton
╰────────────❒


╭──❒PRIMBON❒──
┃⬡${prefix}artinama
┃⬡${prefix}artimimpi
┃⬡${prefix}puki「 ngatain 」
┃⬡${prefix}bego「 ngatain 」
┃⬡${prefix}tolol「 ngatain 」
┃⬡${prefix}pinter「 ngatain 」
┃⬡${prefix}pintar「 ngatain 」
┃⬡${prefix}bodoh「 ngatain 」
┃⬡${prefix}asu「 ngatain 」
┃⬡${prefix}gay「 ngatain 」
┃⬡${prefix}lesby「 ngatain 」
┃⬡${prefix}bajingan「 ngatain 」
┃⬡${prefix}jancok「 ngatain 」
┃⬡${prefix}anjing「 ngatain 」
┃⬡${prefix}ngentod「 ngatain 」
┃⬡${prefix}ngentot「 ngatain 」
┃⬡${prefix}monyet「 ngatain 」
┃⬡${prefix}mastah「 ngatain 」
┃⬡${prefix}newbie「 ngatain 」
┃⬡${prefix}bangsat「 ngatain 」
┃⬡${prefix}bangke「 ngatain 」
┃⬡${prefix}sange「 ngatain 」
┃⬡${prefix}sangean「 ngatain 」
┃⬡${prefix}dakjal「 ngatain 」
┃⬡${prefix}horny「 ngatain 」
┃⬡${prefix}wibu「 ngatain 」
┃⬡${prefix}puki「 ngatain 」
┃⬡${prefix}pantek「 ngatain 」
┃⬡${prefix}terganteng
┃⬡${prefix}jadian
┃⬡ ${prefix}tercantik
┃⬡ ${prefix}sangecek
┃⬡ ${prefix}gaycek
┃⬡ ${prefix}lesbicek
┃⬡ ${prefix}cantikcek
┃⬡ ${prefix}gantengcek
┃⬡ ${prefix}seberapagay
┃⬡ ${prefix}watak「 gw tau lu baik 」
┃⬡ ${prefix}hobby「 pasti masak  」
┃⬡ ${prefix}ewe「 Tobat gobloc」
┃⬡ ${prefix}bagaimanaka「 Yntks 」
╰────────────❒`
sendButImage(from, allmenu,`${namabot}\n${Tanggal}`, tomnel, [
            {buttonId: `${prefix}owner`, buttonText: {displayText: `OWNER`, }, type: 1, },
            {buttonId: `${prefix}iklan`, buttonText: { displayText: `Nikmati Iklan Nya`, }, type: 1, },
           {buttonId: `${prefix}donasi`, buttonText: { displayText: `DONASI BOT`, }, type: 1, },
            ]); 
            break
case 'intro':
var intro = ` *𝐒𝐄𝐋𝐀𝐌𝐀𝐓 𝐃𝐀𝐓𝐀𝐍𝐆 𝐌𝐄𝐌𝐁𝐄𝐑 𝐁𝐀𝐑𝐔︎︎*

┌ 𝐍𝐚𝐦𝐚:
├ 𝐔𝐦𝐮𝐫:
├ 𝐀𝐬𝐚𝐥:
├ 𝐆𝐞𝐧𝐝𝐞𝐫:
└ 𝐉𝐞𝐧𝐢𝐬 𝐤𝐞𝐥𝐚𝐦𝐢𝐧:
`
dhenxs.sendMessage(from, intro, text, {quoted: froxxMENU, contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true })
break
             case 'owner':
            case 'developer':   
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaowner}\n`  
            + `ORG:${namabot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${nomorowner}:+${nomorowner}\n`  
            + 'END:VCARD'  
  dhenxs.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
titid = 'Butuh info tentang apa ya?'
           sendButMessage(from, titid, `${namabot}\n${Tanggal}`, [
          {buttonId: `${prefix}menu`, buttonText: { displayText: `TO BACK MENU`, }, type: 1, },
{buttonId: `${prefix}youtube`, buttonText: { displayText: `YouTube`, }, type: 1, },
{buttonId: `${prefix}tiktod`, buttonText: { displayText: `TikTtok`, }, type: 1, }
]); 
                 break
                 case 'request':
					const rq = body.slice(8)
					if (args.length > 300) return dhenxs.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const ress = `*[REQUEST FITUR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${rq}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					dhenxs.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Request anda sudah mendarat ke owner, Requests palsu atau main² tidak akan ditanggapi.')
					break
		case 'tts':
				if (args.length < 1) return dhenxs.sendMessage(from, 'Diperlukan kode bahasa kak!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return dhenxs.sendMessage(from, 'Mana teks yang mau di jadiin suara? suara setan kah?', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 500
					? reply('Textnya kebanyakan setan!! 😤')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							dhenxs.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
case 'nulis': 

if (args.length < 1) return reply('*Teks nya mana?*') 
catat = args.join(" ")
catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
dhenxs.sendMessage(from, catat, image, { quoted:froxx,caption:'ᵈⁱˢᵘᵏᵃⁱ ᵒˡᵉʰ ᵏʳᵉᵃᵗᵒʳ' })
break
case 'ganz': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")
ganz = await getBuffer(`https://api.zeks.me/api/gtext?text1=${matrix}&text2=GANZ&apikey=apivinz`)
dhenxs.sendMessage(from, ganz, image, { quoted:froxx,caption:'ᵈⁱˢᵘᵏᵃⁱ ᵒˡᵉʰ ᵏʳᵉᵃᵗᵒʳ' })
break
//══════════[ PHOTO SHOOT MENU ]════════════════════════════//

case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
if (args.length == 0) return reply(`Example: ${prefix + command} RazoR`)
                    txt1 = args[0]
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=BayuPerkasa&text=${txt1}`).then((gambar) => {
                   dhenxs.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `dhenxs Bot Wa`, quoted : mek})
                    })
                    break
case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
               sticWait(from)
                    if (args.length == 0) return reply(`Example: ${prefix + command} RazoR`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=BayuPerkasa&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        dhenxs.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `MEZ razor`, quoted : fvoc})
                    })
                    break
case 'ppcouple':
anu = await fetchJson(`https://ziy.herokuapp.com/api/ppcouple?apikey=xZiyy`)
cewe = await getBuffer(anu.result.female)
cowo = await getBuffer(anu.result.male)
dhenxs.sendMessage(from, cowo, image, {quoted: froxx, caption: 'Nih Versi Cowo Nya ^_^' })
dhenxs.sendMessage(from, cewe, image, {quoted: froxx, caption: 'Nih Versi Cewe Nya ^_^' })
break
//══════════[ PEMBATAS AKHIR  ]════════════════════════════//

//══════════[ ANIMASI HEWAN ]════════════════════════════//
case 'fox':  
                   
			       	
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anu.link)
                   dhenxs.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'dog':  
                   
			       	
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anu.link)
                   dhenxs.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'cat':  
                   
			       	
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anu.link)
                   dhenxs.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda':  
                   
			       	
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anu.link)
                   dhenxs.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'panda1':  
                   
			       	
                   anu = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anu.link)
                   dhenxs.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'bird':  
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anu.link)
                   dhenxs.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
                   case 'koala':  
                   
			       	
                   
                   anu = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anu.link)
                   dhenxs.sendMessage(from, anu1, image, {caption: `nih kak mirip kamu`, quoted: froxx})
                   break
//══════════[ PEMBATAS AKHIR  ]════════════════════════════//
case 'report':
case 'lapor': 
					const laporan = body.slice(7)
					if (args.length > 300) return dhenxs.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					stod = `${sender}`
					const lapor = `*[LAPORAN EROR]*\nNomor : @${stod.split('@')[0]}\nPesan : ${laporan}`
							var options = {
							text: lapor,
                         				contextInfo: {mentionedJid: [stod]},
                     			}
					dhenxs.sendMessage(`${nomorowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('Laporan anda sudah mendarat ke owner, Laporan palsu atau main² tidak akan ditanggapi.')
					break
//══════════[ PREEMIUM ]════════════════════════════//
case 'premium':
if (!isOwner) return reply(mess.only.ownerB)
				premm = body.slice(10)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Berhasil menjadi premium wa.me/${premm} `)
				break
		case 'unpremium':
if (!isOwner) return reply(mess.only.ownerB)
				premm = body.slice(12)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				break
                case 'premiumlist':
				dhenxs.updatePresence(from, Presence.composing) 
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				dhenxs.sendMessage(from, teks.trim(), extendedText, {quoted: froxx, contextInfo: {"mentionedJid": prem}})
				break
//══════════[ PEMBATAS AKHIR  ]════════════════════════════//

//JANGAN PERNAH MENYERAH YA KAWAN KALIAN SEMUA ORANG YANG TIDAK KENAL LELAH//

//━━━━━━━━━━━━━━━[ BAHAN ASUPAN ]━━━━━━━━━━━━━━━━━//
case 'cecanrandom':
if (!isPremium) return reply(mess.only.premium)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
buffer = await getBuffer(ini.result.url)
dhenxs.sendMessage(from, buffer, image, {quoted: froxx, caption: 'Nih Ngab Cecan Random🗿'})
break
case 'asupanhijaber':
if (!isPremium) return reply(mess.only.premium)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
buffer = await getBuffer(ini.result.url)
dhenxs.sendMessage(from, buffer, image, {quoted: froxx, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'asupansantuy':
if (!isPremium) return reply(mess.only.premium)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
buffer = await getBuffer(ini.result.url)
dhenxs.sendMessage(from, buffer, video, {quoted: froxx, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'asupanukhti':
if (!isPremium) return reply(mess.only.premium)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
buffer = await getBuffer(ini.result.url)
dhenxs.sendMessage(from, buffer, video, {quoted: froxx, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'asupanbocil':
if (!isPremium) return reply(mess.only.premium)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
buffer = await getBuffer(ini.result.url)
dhenxs.sendMessage(from, buffer, video, {quoted: froxx, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'vietnam':
case 'korea':
case 'china':
case 'indonesia':
case 'malaysia':
case 'japan':
case 'thailand':
ini_result = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=${zerkey}`)
get_result = ini_result.result
ini_img = await getBuffer(get_result.url)
dhenxs.sendMessage(from, ini_img, image, {quoted:froxx})
break
case 'asupanghea':
if (!isPremium) return reply(mess.only.premium)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
buffer = await getBuffer(ini.result.url)
dhenxs.sendMessage(from, buffer, video, {quoted: froxx, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'asupanrika':
if (!isPremium) return reply(mess.only.premium)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
buffer = await getBuffer(ini.result.url)
dhenxs.sendMessage(from, buffer, video, {quoted: froxx, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
//━━━━━━━━━━━━━━━[ VN BOT WA]━━━━━━━━━━━━━━━━━//
case 'balik':
if (!isQuotedAudio) return reply('Reply audio!')
	let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media4 = await dhenxs.downloadAndSaveMediaMessage(encmedia4)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media4} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media4)
if (err) return reply('emror')
hihi = fs.readFileSync(ran)
dhenxs.sendMessage(from, hihi, audio, {mimetype: 'audio/mp4', ptt: true, quoted: froxx})
fs.unlinkSync(ran)
	})
break
case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await dhenxs.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
dhenxs.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: froxx})
fs.unlinkSync(rname)
}
)
		case 'tupai':
encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media6 = await dhenxs.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
dhenxs.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: froxx})
fs.unlinkSync(ran)
})
break
case 'gemuk':
                  encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  mediaz = await dhenxs.downloadAndSaveMediaMessage(encmediaz)
                  ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(mediaz)
                     if (err) return ephe('Error!')
                     hah = fs.readFileSync(ran)
                  dhenxs.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 234, quoted:mek})
                     fs.unlinkSync(ran)
                  })
                  break
   case 'bass':                 
                  encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  mediao = await dhenxs.downloadAndSaveMediaMessage(encmediao)
                  ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(mediao)
                     if (err) return reply('Error!')
                     hah = fs.readFileSync(ran)
                     dhenxs.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 234, quoted:mek})
                     fs.unlinkSync(ran)
                  })
               break
            case 'reverse':
            
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await dhenxs.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            dhenxs.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: froxx })
            fs.unlinkSync(ran)
            })
            break
case 'gemes':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await dhenxs.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
riu = fs.readFileSync(ran)
dhenxs.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'toptt':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await dhenxs.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal mengkonversi audio ke ptt')
topt = fs.readFileSync(ran)
dhenxs.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: froxx, ptt:true})
})
break
//══════════[ PEMBATAS AKHIR  ]════════════════════════════//

//══════════[ PERKATAAN TEAM ]════════════════════════════//
case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'pantek':
      if (!isGroup) return reply(mess.only.group)
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*Siapa Yang ${command}?*\n*Yaitu* @${goo.jid.split('@')[0]}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break
case 'jadian':
if (!isGroup) return reply(mess.only.group)
jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
case 'terganteng':
if (!isGroup) return reply(mess.only.group)
jds = []
					const jdiidc = groupMembers
					const kosstc = groupMembers
					const akuutc = jdiidc[Math.floor(Math.random() * jdiidc.length)]
					teks = `yang terganteng di grub ini adalah @${akuutc.jid.split('@')[0]}`
					jds.push(akuutc.jid)
					mentions(teks, jds, true)
					break	
case 'tercantik':
if (!isGroup) return reply(mess.only.group)
jds = []
					const jdiidr = groupMembers
					const kosstr = groupMembers
					const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
					teks = `yang tercantik di grub ini adalah @${akuutr.jid.split('@')[0]}`
					jds.push(akuutr.jid)
					mentions(teks, jds, true)
					break 
case 'randompatrick':
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/patrick?apikey=BayuPerkasa`)
                    dhenxs.sendMessage(from, anu, sticker, {quoted:froxx})
                    break
case 'bagaimanaka':
if (!isGroup) return reply(mess.only.group)
bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					dhenxs.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
					break
                case 'sangecek':
				if (!isGroup) return reply(mess.only.group)
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					dhenxs.sendMessage(from, 'Pertanyaan : *'+sange+'*\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					break
                case 'gaycek':
					if (!isGroup) return reply(mess.only.group)
					gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					dhenxs.sendMessage(from, 'Pertanyaan : *'+gayy+'*\n\nJawaban : '+ yag+'%', text, { quoted: mek })
					break
                case 'lesbicek':
					if (!isGroup) return reply(mess.only.group)
                    lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					dhenxs.sendMessage(from, 'Pertanyaan : *'+lesbii+'*\n\nJawaban : '+ bi+'%', text, { quoted: mek })
					break
                case 'gantengcek':
					if (!isGroup) return reply(mess.only.group)
                   ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					dhenxs.sendMessage(from, 'Pertanyaan : *'+ganteng+'*\n\nJawaban : '+ teng+'%', text, { quoted: mek })
					break
case 'ewe':
          if (!isGroup) return reply(mess.only.group)
           ganteng = body.slice(5)
					const ew =['TOBAT KAWAN, INGAT, JANGAN MERUSAK GENERASI GENERASI BANGSA YANG BUKAN JODOH ANDA, KASIHAN YANG JODOH DIA, EHH DAH DI REVIEW AMA ORANG LAIN']
					const we = ew[Math.floor(Math.random() * ew.length)]
					dhenxs.sendMessage(from, ''+ganteng+''+ we +'', text, { quoted: mek })
					break
case 'seberapagay':
  if (!isGroup) return reply(mess.only.group)
 teks = body.slice(1)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Nih Liat Data Gay Si ${teks}\n\n\nPersentase Gay : ${anu.persen}%\nAlert!!! : ${anu.desc}`
		   reply(hasil)
		   break
case 'cantikcek':
if (!isGroup) return reply(mess.only.group)
cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					dhenxs.sendMessage(from, 'Pertanyaan : *'+cantik+'*\n\nJawaban : '+ tik+'%', text, { quoted: mek })
					break
		case 'watak':
if (!isGroup) return reply(mess.only.group)
watak = body.slice(1)
					const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					dhenxs.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
				        break
case 'hobby':
					if (!isGroup) return reply(mess.only.group)
					hobby = body.slice(1)
					const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					dhenxs.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: froxx })
					break
case 'bahasa':
dhenxs.sendMessage(from, ind.bahasa(), text, { quoted:fdoc })
break 
//══════════[ PEMBATAS AKHIR  ]════════════════════════════//
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `「 𝙻𝚒𝚜𝚝 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*➪𝙸𝙳:* ${i.id}\n*➪𝙲𝚖??:* ${i.chats}`
}
reply(teksnyee)
break
      case 'notif':					
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
            teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
            group = await dhenxs.groupMetadata(from);
            member = group['participants']
            jids = [];
            member.map(async adm => {
            jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
            })
            options = {
            text: teks,
            contextInfo: {
            mentionedJid: jids
            },
            quoted: froxx
            }
            await dhenxs.sendMessage(from, options, text)
            break
case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node start.js`)
             reply('_Restarting Bot Success_')
             break
      case 'leaveall':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = dhenxs.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Byee', null)
             await sleep(3000)
             dhenxs.groupLeave(id)
}
             break
        case 'join':
            if (!isOwner) return reply(mess.only.ownerB)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return reply('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakeitem('pastikan link sudah benar!')
            var response = await dhenxs.acceptInvite(codeInvite)
            fakeitem('SUKSES')
            } catch {
            fakeitem('LINK ERROR!')
            }
        break
        case 'join2': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = dhenxs.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
        case 'bc': 
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await dhenxs.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dhenxs.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dhenxs.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             dhenxs.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`,
			"footerText": 'by DhenxsCode',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU BOT"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Suksess broadcast')}
        break
        case 'bc2':
             if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
             buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
             if (args.length < 1) return reply('teks?')
             anu = await dhenxs.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await dhenxs.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	dhenxs.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             dhenxs.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*${namabot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
             reply('Suksess broadcast')}
             break
        case 'ban':
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
	    break
        case 'unban':
					if (!isOwner) return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
		break
        case 'buggc':
                    if (!isOwner) return reply(mess.only.ownerB)
                  //  if (!isOwner) return reply(mess.only.ownerB)
                    await dhenxs.toggleDisappearingMessages(from)
                    reply("mampus")
        break
	    case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await dhenxs.chats.all()
					dhenxs.setMaxListeners(25)
					for (let _ of anu) {
						dhenxs.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
		break
                case 'clearall2':
                    if (!isOwner) return reply("Command only for owner bot")
                    list_chat = await dhenxs.chats.all()
                    for (let chat of list_chat) {
                        dhenxs.modifyChat(chat.jid, "delete")
                    }
                    reply("success clear all chat")
                    break
		case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await dhenxs.getProfilePicture(id)
						buffer = await getBuffer(pp)
						dhenxs.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
		break
        case "virtek":
                     if (!isOwner) return reply('Hah gimana?lu mau virtek?sorry broo gabisa')
                     reply(`Fitur dinonaktifkan`)
        break

//GROUP MENU
       case 'online':
       case 'listonline':
       case 'here':                
 if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(dhenxs.chats.get(ido).presences), dhenxs.user.jid]
             dhenxs.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
       case 'setgrupname':
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              dhenxs.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
  if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              dhenxs.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
           if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await dhenxs.downloadMediaMessage(encmedia)
              dhenxs.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'demoteall':

		if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)

		if (!isGroup) return reply(mess.only.group)

		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
               
		 members_id = [ ]
		
		 for (let mem of groupMembers) {
	   
		 	members_id.push(mem.jid)
	  
		 		}
              
		 		  dhenxs.groupDemoteAdmin(from, members_id)
              
		 		    break
                
		 		    case 'promoteall':
	
		 		    	if (!isOwner && !rn.key.fromMe) return reply(mess.only.ownerB)
	
		 		    	if (!isGroup) return reply(mess.only.group)
	
		 		    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                
		 		    	members_id = [ ]
		
		 		    	for (let mem of groupMembers) {
	  
		 		    	 	members_id.push(mem.jid)
	
		 		    	 	 	}
             
		 		    	 	 	   dhenxs.groupMakeAdmin(from, members_id)
             
		 		    	 	 	      break
case 'group':
				apri = 'PILIH MANA MIN?'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc":
      if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        dhenxs.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
  if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        dhenxs.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
                case 'hidetag':        
   if (isBanned) return reply(mess.banned)                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await dhenxs.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					//var options = {text: value, contextInfo: { mentionedJid: mem }, quoted: fhidetag}
					dhenxs.sendMessage(from, value, text, {quoted: fhidetag, contextInfo: { mentionedJid: mem }})
					break
									case 'tagall':
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*╠➥* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					case 'tagall3':
if (!isGroup) return reply(mess.only.group)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*${prefix}* https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'promote':
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						dhenxs.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						dhenxs.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						dhenxs.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						dhenxs.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						dhenxs.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'kick':
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						dhenxs.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						dhenxs.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
			if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                 if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await dhenxs.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
            if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	dhenxs.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'welcome':
			if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
					} else {
						sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}welcome 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}welcome 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
   
                case 'antilink':
                                  	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						dhenxs.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antilink 1`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink 0`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break
        case 'd':
        case 'del':
        case 'delete': 
     if (!isGroup) return reply(mess.only.group)
					dhenxs.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await dhenxs.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              dhenxs.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              dhenxs.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await dhenxs.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              dhenxs.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              dhenxs.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
              break
case 'sticker':
					case 'stiker':
					case 's':
              
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await dhenxs.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											dhenxs.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await dhenxs.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											dhenxs.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: froxx})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await dhenxs.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
case 'stikernowm': 
				case 'stickernowm':
				case 'snowm':
				if (isBanned) return reply(mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dhenxs.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dhenxs.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dhenxs.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dhenxs.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break

//══════════[ PEMBATAS AKHIR  ]════════════════════════════//
				case 'ocr':
				if (isBanned) return reply (mess.banned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dhenxs.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await dhenxs.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
dhenxs.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					dhenxs.sendMessage(from, tagu, text, { quoted: froxx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
case 'suit':
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
case 'exif':
                    if (!isOwner) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
case 'tag':
              if (!isOwner) return reply(mess.only.ownerB)
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					dhenxs.sendMessage(from, tagq, text, { quoted: froxx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
case 'tomp4':
					if (!isQuotedSticker) return reply('Reply stiker nya')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await dhenxs.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
					dhenxs.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await dhenxs.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						dhenxs.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: froxx })
						fs.unlinkSync(ran)
					})
					break			
				case 'setprofile':
				case 'setpp':
				dhenxs.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await dhenxs.downloadAndSaveMediaMessage(enmediau)
					await dhenxs.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
          json = ['action', 'inviteReset', from]
         dhenxs.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
case 'ytmp3':
        if (args.length < 1) return reply('Link Nya Mana?')
        if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link gk valir')
        reply("Sedang Mendownload Audio")
        teks = args.join(' ')
        res = await y2mateA(teks)
        sendFileFromUrl(res[0].link, document, {quoted: froxx, mimetype: 'audio/mp3', filename: res[0].output})
        break
case 'ytmp4':
        if (args.length < 1) return reply('Link Nya Mana?')
        if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('link gk valir')
        reply("Sedang Mendownload Video")
        teks = args.join(' ')
        res = await y2mateV(teks)
        sendFileFromUrl(res[0].link, document, {quoted: froxx, mimetype: 'video/mp4', filename: res[0].output})
        break
//══════════[ DOWNLOAD BUTTON ]════════════════════════════//
case 'kalkulator':
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: froxx, caption: result}).catch(e => {
  reply(result)
})
break
case 'tiktok':
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=BayuPerkasa&url=${q}`)
              result = `DhenxCode¸ *Nickname*: ${data.result.author.nickname}\n*Like*: ${data.result.statistic.diggCount}\n *Komentar*: ${data.result.statistic.commentCount}\n*Share*: ${data.result.statistic.shareCount}\n*Views*: ${data.result.statistic.playCount}\n*Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}buttons3 ${q}`,buttonText:{displayText: `NO WATERMARK`},type:1},{buttonId:`${prefix}buttons4 ${q}`,buttonText:{displayText:'Audio ( 4.5 MB )'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await dhenxs.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await dhenxs.prepareMessageFromContent(from,{buttonsMessage},{quoted: froxx})
              dhenxs.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'buttons3': 
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=BayuPerkasa&url=${q}`)
              ini_video = await getBuffer(data.result.link)
              dhenxs.sendMessage(from, ini_video, video, { quoted: froxx })
              break
          case 'buttons4': 
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              data = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=BayuPerkasa&url=${args[0]}`)
              dhenxs.sendMessage(from, data, audio, { quoted: froxx })
              break
case 'slot':
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            dhenxs.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : ?? : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
dhenxs.sendMessage(from, buffer, sticker, { quoted: mek })
break
case 'tovideo':
              if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
              encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              mediaaa = await dhenxs.downloadAndSaveMediaMessage(encmediaaa)
              a = await webp2gifFile(mediaaa)
              mp4 = await getBuffer(a.result)
              dhenxs.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: froxx, caption: mess.success})
              fs.unlinkSync(mediaaa)
              } else {
              reply(mess.wrongFormat)
}
              break
case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Pilih Di Atas'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await dhenxs.prepareMessageFromContent(from,{buttonsMessage},{})
              dhenxs.relayWAMessage(prep)
           break
          case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Pilih Di Atas'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await dhenxs.prepareMessageFromContent(from,{buttonsMessage},{})
              dhenxs.relayWAMessage(prep)
              break
case 'tod':
              result =`*Truth Or Dare*\nPemain diberi pilihan antara menjawab pertanyaan dengan jujur, atau melakukan tantangan yang diberikan`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'Truth'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'Dare'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'Pilih Dare & Truth'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Kebenaran atau tantangan?', buttons: buttons, headerType: 1 }
              prep = await dhenxs.prepareMessageFromContent(from,{buttonsMessage},{})
              dhenxs.relayWAMessage(prep)
              break
case 'mediafire':
              if (args.length < 1) return reply('Link Nya Mana? ')
              if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
              teks = args.join(' ')
              res = await mediafireDl(teks)
              result = `*MediaFire Downloader*
               
Nama : ${res[0].nama}
Ukuran : ${res[0].size}
Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
              reply(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: froxx})
              break
case 'play':
        if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
        reply(mess.wait)
        let yut = await yts(q)
        yta(yut.videos[0].url)             
        .then(async(res) => {
        const { thumb, title, filesizeF, filesize } = res
        const capti = `⚜️YouTube Downloader⚜️

✴️Judul : ${yut.all[0].title}
✴️ID Video : ${yut.all[0].videoId}
✴️Diupload Pada : ${yut.all[0].ago}
✴️Views : ${yut.all[0].views}
✴️Durasi : ${yut.all[0].timestamp}
✴️Channel : ${yut.all[0].author.name}
✴️Link Channel : ${yut.all[0].author.url}`      
        ya = await getBuffer(thumb)
        py =await dhenxs.prepareMessage(from, ya, image)
        gbutsan = [{buttonId: `${prefix}buttonmusic ${yut.all[0].url}`, buttonText: {displayText: '🎶 Audio ( 4.5 MB )'}, type: 1},{buttonId: `${prefix}buttonvideo ${yut.all[0].url}`, buttonText: {displayText: '📽 Video ( 9.8 MB )'}, type: 1}]
        gbuttonan = {
        imageMessage: py.message.imageMessage,
        contentText: capti,
        footerText: '```®Creator DhenxsCode```\n\n```®SILAHKAN PILIH MEDIA DIBAWAH INI```',
        buttons: gbutsan,
        headerType: 4
}
        await dhenxs.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
        break                
        case 'buttonmusic':
        if(!q) return reply('linknya?')        
        res = await yta(`${q}`).catch(e => {
        reply('```[ ! ] Terjadi Kesalahan Link Tidak Valid```')})
        sendMediaURL(from, `${res.dl_link}`,{quoted: froxx})
        break         
        case 'buttonvideo':
        if(!q) return reply('linknya?')            
        res = await ytv(`${q}`).catch(e => {
        reply('```[ ! ] Error Saat Mengirim Video```')})
        sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
        break
case 'ttp':  
                    if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp dhenxs Botz Whatsapp`)
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${c}`)
                    dhenxs.sendMessage(from, anu1, image, {quoted: mek, caption : `${prefix}sticker`})
                    break
case 'fb':
          case 'facebook':
              if (!q) return reply('Link Nya?')
              reply(mess.wait)
              data = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_video = await getBuffer(data.result)
              dhenxs.sendMessage(from, ini_video, video, { quoted: mek })
              break
case 'plaay':
              await axios.get(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=Nyarlathotep&q=${q}`)
		     .then(res => {
    		  dhenxs.sendMessage(from, '_Silahkan tunggu, file media sedang dikirim_\n_mungkin butuh waktu beberapa menit_', text, { contextInfo: { externalAdReply: { title: res.data.result.title, body: 'Duration ' + res.data.result.duration + ', Size ' + res.data.result.size, thumbnailUrl: res.data.result.thumb, sourceUrl: res.data.result.link }}})
			  dhenxs.sendMessage(from, { url: res.data.result.link }, 'audioMessage', { mimetype: 'audio/mp4', quoted: froxx, contextInfo: { externalAdReply: { title: res.data.result.title, mediaType: 2, thumbnailUrl: res.data.result.thumb, mediaUrl: res.data.result.source }}})
})
              break
case 'ytmp4':
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=BayuPerkasa&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await dhenxs.sendMessage(from, ini_buffer, image, { quoted: froxx, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await dhenxs.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: froxx })
break
//══════════[ PEMBATAS AKHIR  ]════════════════════════════//
case 'tourl':
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
              reply(mess.wait)
              boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              owgi = await dhenxs.downloadMediaMessage(boij)
              res = await uploadImages(owgi)
              reply(res)
              } else {
              reply('kirim/reply gambar/video')
}
              break
case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await dhenxs.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await dhenxs.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				dhenxs.sendMessage(from, buffer, image, {quoted: froxx})
		} else {
		}
			  break
case 'chat':
              if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            dhenxs.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
//══════════[ JADI BOT ]════════════════════════════//
case 'jadibot':
    if (!isOwner) return reply(mess.only.ownerB) 
    jadibot(reply,dhenxs,from)
    break
    case 'listbot':
    
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'sewa':
anu =
`╔══❒SEWA BOT BABYGRL❒══⎉
║冬Seminggu : 3.000
║冬Sebulan : 18.000
║冬Permanen : 10.000
║冬Gratis: Subscribe Dhenxs Code
║冬Jangan Spam Bot Ya Brader
╚═══════════════════❍ 
╔═════❒FITUR BOT❒═════⎉
║冬STICKER
║冬WELCOME GG
║冬Auto Vn Bot
║冬ANTILINK
║冬MAKERMENU
║冬PREMIUM MENU
║冬FULL BUTTON
║冬DLL
╚═══════════════════❍ 
╔══❒JAM BOT AKTIF❒══⎉
║冬Bot Selalu Di Update
║冬PAGI  : 7:00 : 17:40
║冬MALEM  : 17:40 : 23:00
╚═══════════════════❍ 
Jika Ingin Mengunakan Bot Harap Teratur
Jangan Ada Spam Bikin Bot Delay
Patuhi Rules Yang Ada Oke Bang Enjoy`
sendButImage(from, anu,`Creator : DhenxsCode\n${Tanggal}`, tumnel, [
            {buttonId: `${prefix}iklan`, buttonText: {displayText: `Nikmati iklan Nya`, }, type: 1, },
            {buttonId: `${prefix}sc`, buttonText: { displayText: `SC BOT WA`, }, type: 1, },
           {buttonId: `${prefix}donasi`, buttonText: { displayText: `donett`, }, type: 1, },
            ]); 
          break
case 'donasi':
anu =`اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
“jauhilah api neraka, walau hanya dengan bersedekah sebiji kurma (sedikit). Jika kamu tidak punya, maka bisa dengan kalimah thayyibah” [HR. Bukhari 6539, Muslim 1016
╔═════════════════⎉
║冬GOPAY : 085697662826
║冬DANA : 085697662826
║冬OVO : 088210637739
║冬PULSA : 085777064675
║冬SAWERIA : Belom Tersedia
╚═════════════════❍ `
sendButImage(from, anu,`Creator : DhenxsCode\n${Tanggal}`, gambar, [
            {buttonId: `${prefix}dana`, buttonText: {displayText: `Buy Dana`, }, type: 1, },
            {buttonId: `${prefix}pulsa`, buttonText: { displayText: `Buy Pulsa`, }, type: 1, },
           {buttonId: `${prefix}menu`, buttonText: { displayText: `TO BACK MENU`, }, type: 1, },
            ]); 
          break
case 'iklan':
anu = `BOT OFFICIAL BABYGRL !!!✨
( MAU LIHAT PENGEMBANGAN)

💥BABYGRL LAGI UPDATE💥

📌 Fitur Banyak Sung Ae 
📌 Mau Nyumbang Fitur Boleh
📌 Mari Kita Kembangkan Bot Saya

BOT BABYGRL ( WORK ) 💯

🕐 JAM:  02.00 WIB ( TIDUR )

🕐 JAM:  07.15 WIB ( SIBUK )

🕐 JAM:  16.00 WIB ( UPDATE )

🕐 JAM:  23:00  WIB ( TUTUP )

📍SC FEE  CEK ( YouTube )📍

⚡ Subscribe channel 
⚡Dhenxs Code

🥇Mau Nyumbang Fitur Boleh
🥈Jangan Membandingkan Bot
🥉Jaga Turur Kata Bahasa Nya

📝SISTEM BOT :  VERSI termux Function

MINAT?PC!!
OWNER:  wa.me/+6285697662826  ( Code)`
sendButImage(from, anu,`Creator : DhenxsCode\n${Tanggal}`, timnel, [
            {buttonId: `${prefix}menu`, buttonText: {displayText: `TO BACK MENU`, }, type: 1, },
            {buttonId: `${prefix}rules`, buttonText: { displayText: `PERATURAN BABYGRL`, }, type: 1, },
           {buttonId: `${prefix}sc`, buttonText: { displayText: `SCRIP BOT WA`, }, type: 1, },
            ]); 
          break
case 'sc':
case 'script':
case 'sourcecode':
anu =`
❏SC BOT DHENXS CODE❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
Hai kak👋🏻 ${Tanggal}

冬YouTube DhenxsCode
冬Like and Subscribe

冬SC BOT WA TERBARU
冬link YouTube
https://youtu.be/GMRDvk9oCoc
     
       PENCET LINK DI ATAS
SC Gratis Ada Di
Chenel DhenxsCode 
SUBSCRIBE AND LIKE
▬▭▬▭▬▭▬▭▬▬▭▬▭`
sendButImage(from, anu,`Creator : DhenxsCode\n${Tanggal}`, tembu, [
            {buttonId: `${prefix}youtube`, buttonText: {displayText: `YouTube`, }, type: 1, },
            {buttonId: `${prefix}tiktod`, buttonText: { displayText: `TikTok`, }, type: 1, },
           {buttonId: `${prefix}donasi`, buttonText: { displayText: `Donatte`, }, type: 1, },
            ]); 
          break
case 'rules':
anu =`
*「 PERATURAN BOT 」*

1. DILARANG TELFON BOT!!
2. DILARANG SPAM BOT
3. DILARANG BERKATA KASAR
4. DILARANG SPAM VIRTEX
5. DILARANG TELEFON OWNER
6. DILARANG SPAM GROUP
7. DILARANG SPAM ADMIN
8. DILARANG BERKATA KASAR DI GC

⚠️JIKA KALIAN MELANGGAR.. AKAN DI BLOCK + BANNED!!`
sendButImage(from, anu,`Creator : DhenxsCode\n${Tanggal}`, temnel, [
            {buttonId: `${prefix}menu`, buttonText: {displayText: `TO BACK MENU`, }, type: 1, },
            {buttonId: `${prefix}sc`, buttonText: { displayText: `SCRIP BOT`, }, type: 1, },
           {buttonId: `${prefix}donasi`, buttonText: { displayText: `Donatte`, }, type: 1, },
            ]); 
          break
//══════════[ PEMBATASAN]════════════════════════════//
case 'shortlink': 
case 'shorturl':
if (args.length < 1) return reply(`Url yang mau di shortlink?\nContoh: ${prefix + command} http://wa.me/6285607078963`)
query = args.join (" ")
s1 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=${lolkey}&url=${query}`)
s2 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink2?apikey=${lolkey}&url=${query}`)
s3 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink3?apikey=${lolkey}&url=${query}`)
s4 = await fetchJson(`https://api.lolhuman.xyz/api/shortlink3?apikey=${lolkey}&url=${query}`)
r1 = s1.result
r2 = s2.result
r3 = s3.result
r4 = s4.result
var teks = `Short Link/URL:
Before: ${query}
After: -${r1}
  -${r2}
  -${r3}
  -${r4}`
dhenxs.sendMessage(from, teks, text, {quoted: mek})
break
case 'herolist':

await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*
*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
//══════════[ MAKER MENU ]════════════════════════════//
case 'nulis':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/nulis?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break

case 'flame':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/flametext?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'silktext':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/silktext?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'glow':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/glowtext?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'smoke':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/smoketext?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'crosslogo':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/crosslogo?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'flower':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/flowertext?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'harta':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/hartatahta?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'qrcode':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/qrencode?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'barcode':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/barcode?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'naruto':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/naruto?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'neon': 
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/bneon?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'matrix':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/matrix?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'breakwall':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'dropwater':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'crismes':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/crismes?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'pantai':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/tpantai?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'fire':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/tfire?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'write':    
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/sandw?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'cslogo':
if (!isPremium) return reply(mess.only.premium)
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/cslogo?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'lithgtext':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/lithgtext?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'skytext':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/skytext?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'light':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/tlight?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'thunder':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/thundertext?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'leavest':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/leavest?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'blackpink':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/logobp?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'text3d':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/text3d?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'text3d2':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
anu = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'splaybutton':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/splaybutton?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'gplaybutton':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/gplaybutton?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
case 'epep':
if (args.length < 1) return reply(`Nama yang mau di tulis?\nContoh: ${prefix + command} DhenxsCode`)
query = args.join (" ")
reply(mess.wait)
anu = await getBuffer(`https://api.zeks.me/api/epep?apikey=${zekskey}&text=${query}`)
dhenxs.sendMessage(from, anu, image, {quoted: mek, caption: 'Jadi gini'})
break
//══════════[ PEMBATASAN]════════════════════════════//

//══════════[ HENTAI MENU]════════════════════════════//
case 'art':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/art?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'bts':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/bts?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'exo':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/exo?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'elf':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/elf?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'loli':
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/loli?apikey=${lolkey}`)
reply(mess.wait)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'neko':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/neko?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'waifu':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'shota':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/shota?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'husbu':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'sagiri':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/sagiri?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'shinobu':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/shinobu?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'megumin':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/megumin?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'loli':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/loli?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'chiisaihentai':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/chiisaihentai?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'trap':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'blowjob':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'yaoi':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'ecchi':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'hentai':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'ahegao':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'hololewd':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'sideoppai':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'animefeets':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'animebooty':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'animethighss':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animethighss?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'hentaiparadise':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentaiparadise?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'animearmpits':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animearmpits?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'hentaifemdom':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentaifemdom?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'lewdanimegirls':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/lewdanimegirls?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'biganimetiddies':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'animebellybutton':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animebellybutton?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
case 'hentai4everyone':
reply(mess.wait)
anu = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=${lolkey}`)
dhenxs.sendMessage(from, anu, image, {quoted: froxx, caption: mess.success })
break
//══════════[ PEMBATASAN]════════════════════════════//
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://youtu.be/GMRDvk9oCoc`
dhenxs.sendMessage(from, teks, text, {quoted: froxx})
break
case 'dana':
teks =
`*Nomor Dana* : 6285698662826`
dhenxs.sendMessage(from, teks, text, {quoted: froxx})
break
case 'pulsa':
teks =
`*Nomor Pulsa* : 6285698662826`
dhenxs.sendMessage(from, teks, text, {quoted: froxx})
break
case 'tiktod':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://vt.tiktok.com/MEZRazoR`
dhenxs.sendMessage(from, teks, text, {quoted: froxx})
break
//══════════[ GEME MENU]════════════════════════════//
case 'family100':
				data = fs.readFileSync('./lib/family100.js');
                fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					dhenxs.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'', text, {quoted: froxx}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					dhenxs.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					dhenxs.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					dhenxs.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					dhenxs.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: froxx }) // ur cods
					}, 0) // 1000 = 1s,
					break
case 'caklontong':
				data = fs.readFileSync('./lib/caklontong.js');
				cak = JSON.parse(data);
				lontong = Math.floor(Math.random() * cak.length);
				randKey = cak[lontong];
				Pertanyaan = randKey.result.soal
				Jawaban = '\n*'+randKey.result.desc +'*'
					setTimeout( () => {
					dhenxs.sendMessage(from, Jawaban, text, {quoted: froxx})
					}, 30000)
					setTimeout( () => {
					dhenxs.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					dhenxs.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					dhenxs.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
					}, 2500) // 1000 = 1s
					dhenxs.sendMessage(from, Pertanyaan, text, {quoted: mek})
				   break
//══════════[ PEMBATASAN]════════════════════════════//

//══════════[ DOSA TANGGUNG SENDIRI]════════════════════════════//
case 'bokep8':	
qute = fs.readFileSync('./media/gambar/Benke.jpg') 
dhenxs.sendMessage(from, qute, image, { quoted: ftoko, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
break
case 'dosa1':				 
qute = fs.readFileSync('./media/gambar/Bon.jpg') 
dhenxs.sendMessage(from, qute, image, { quoted: froxx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
break
case 'dosa2':
qute = fs.readFileSync('./media/gambar/Bhon.jpg') 
dhenxs.sendMessage(from, qute, image, { quoted: froxx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
break
case 'dosa3':	
qute = fs.readFileSync('./media/gambar/Bhen.jpg') 
dhenxs.sendMessage(from, qute, image, { quoted: froxx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
break
case 'dosa4':	
qute = fs.readFileSync('./media/gambar/Bhan.jpg') 
dhenxs.sendMessage(from, qute, image, { quoted: froxx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
break
case 'dosa5':
qute = fs.readFileSync('./media/gambar/Bhum.jpg') 
dhenxs.sendMessage(from, qute, image, { quoted: froxx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
break
case 'dosa6':	
qute = fs.readFileSync('./media/gambar/Bhim.jpg') 
dhenxs.sendMessage(from, qute, image, { quoted: froxx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
break
case 'dosa7':
qute = fs.readFileSync('./media/gambar/Bonke.jpg') 
dhenxs.sendMessage(from, qute, image, { quoted: froxx, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
break
case 'bokep':
if (!isPremium) return reply(mess.only.premium)
               bokep = await getBuffer (`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
               dhenxs.sendMessage(from, bokep, video, {mimetype: 'video/mp4', quoted: froxx})
               break
//══════════[ PEMBATASAN]════════════════════════════//

//══════════[ SOUND MENU]════════════════════════════//
case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'pripun':
      case 'pasi':
      case 'jancok':
      reply(mess.wait)
         Audio = fs.readFileSync(`./media/mp3/${command}.mp3`)
         dhenxs.sendMessage(from, Audio, MessageType.audio, {quoted: froxx, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
      break
//══════════[ PEMBATASAN]════════════════════════════//

//══════════[ANIME SOUND MENU]════════════════════════════//
case 'animesound1':
case 'animesound2':
case 'animesound3':
case 'animesound4':
case 'animesound5':
case 'animesound6':
case 'animesound7':
case 'animesound8':
case 'animesound9':
case 'animesound10':
case 'animesound11':
case 'animesound12':
case 'animesound13':
case 'animesound14':
case 'animesound15':
case 'animesound16':
case 'animesound17':
case 'animesound18':
case 'animesound19':
case 'animesound20':
case 'animesound21':
case 'animesound22':
case 'animesound23':
case 'animesound24':
case 'animesound25':
case 'animesound26':
case 'animesound27':
case 'animesound28':
case 'animesound29':
case 'animesound30':
case 'animesound31':
case 'animesound32':
case 'animesound33':
case 'animesound34':
case 'animesound35':
case 'animesound36':
case 'animesound37':
case 'animesound38':
case 'animesound39':
case 'animesound40':
case 'animesound41':
case 'animesound42':
case 'animesound43':
case 'animesound44':
case 'animesound45':
case 'animesound46':
case 'animesound47':
case 'animesound48':
case 'animesound49':
case 'animesound50':
reply(mess.wait)
Audio = fs.readFileSync(`./media/mp3Anime/${command}.mp3`)
dhenxs.sendMessage(from, Audio, MessageType.audio, {quoted: froxx, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
 break
//══════════[ PEMBATASAN AKHIR NYA]════════════════════════════//
default:
if (budy.includes(`Assalamualaikum`)) {
dhenxs.sendMessage(from, 'Waalaikumsalam, tuben dahh salam', text, {quoted: mek})
                  }
if (budy.includes(`Bot`)) {
dhenxs.sendMessage(from, 'Ada apa?, bot aktif kok', text, {quoted: mek})
                  }
if (budy.includes(`Tes`)) {
dhenxs.sendMessage(from, 'Hmmm', text, {quoted: mek})
                  }
}
if (budy.startsWith('x')){
try {
return dhenxs.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'WhatsApp', color(sender.split('@')[0]))
	}	
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
		