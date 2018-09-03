const Discord = require('discord.js');
const os = require('os');
//const cpuStat = require('cpu-stat');
const client = new Discord.Client();
client.login('YOUR_TOKEN_HERE');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
});
client.on('ready', async () => {
  client.user.setActivity("with your blankets | !help"); 
});
function B2GB(n) {
	return n/1073741824;
}
function catfood(str) {
	if (str.startsWith("!asktrev")) {console.log(':fastrevert:'); str = str.substr(9,str.length); console.log(str);}
	if (str.startsWith("what's") | str.startsWith("what is")) {
		console.log("CHK-1")
		if(~str.indexOf("favorite")) {
			console.log("CHK-2")
			if(~str.indexOf("food?") | ~str.indexOf("cat food?")) {
				console.log("CHK-3")
				return true;
			}
		}
	}
	return false;
}
function error_embed(error_details){
	var rembed = new Discord.RichEmbed()
	.setTitle("Uhh, I don't think this is supposed to happen.")
	.setAuthor("Trevor", client.user.avatarURL)
	.setColor(3447003)
	.setDescription("An error has occurred while running the command.")
	.addBlankField(true)
	.addField("Details", error_details)
	.addField("Who to contact", "Please contact Epicness#8422 on Discord.")
	
	return rembed;
}
/*function remb(e,p,s){
	if (e) {
		error_embed(e);
	}
	resource_embed(p);
}*/
function resource_embed(){
	/*var cpu = p;
	cpu = cpu.toFixed(2); 
	console.log(cpu);*/
	var fmem = B2GB(os.freemem);
	fmem = fmem.toFixed(2);
	var tmem = B2GB(os.totalmem);
	tmem = tmem.toFixed(2);
	//var umem = B2GB(os.totalmem - os.freemem);
	//umem = umem.toFixed(2);
	var rembed = new Discord.RichEmbed()
	.setTitle("Info")
	.setDescription("Trevor by ZmeyKolbasnik and Epicness")
	.setColor(3447003)
	.setAuthor("Trevor", client.user.avatarURL)
	.addField("Free Memory", fmem + " GB/" + tmem + " GB", true);
	//.addField("CPU Usage", cpu + "%", true);
	return rembed;
};
function pyramid(max_pyramid=3) {
	var str = "<:trev:429029722001899520>";
	console.log(str)
	var t_01 = "";
	for (i=0; i<=max_pyramid; i++) {
		t_01 += str.repeat(i+"\n");
		console.log(t_01);
	}
	for (i=max_pyramid-1; i!=0&&i<=max_pyramid; i--) {
		t_01 += str.repeat(i+"\n");
		console.log(t_01);
	}
	console.log("'"+t_01+"'");
	return t_01;
}
function roast(r) {
	if (r === 0) {
		return 'You suck <:trev:429029722001899520>';
	}
	if (r === 1) {
		return 'You are dumb <:trev:429029722001899520>';
	}
	if (r === 2) {
		return 'You are as smart as a rock <:trev:429029722001899520>';
	}
	if (r === 3) {
		return 'You are worse than Gino, worst bad user ever ​<:baduser:457442638229012489>​ <:trev:429029722001899520>'
	}
	if (r === 4) {
		return "Your mother was so poor, she couldn't even buy a condom <:trev:429029722001899520>";
	}
	if (r === 5) {
		return 'You are a little shit <:trev:429029722001899520>';
	}
	if (r === 6) {
		return 'Get rekt, bitch! <:trev:429029722001899520> ​<:rekt:415443582518951936>​';
	}
        if (r === 7) {
		return 'You should kill yourself. <:trev:429029722001899520>​';
	}
        if (r === 8) {
		return 'You motherfucker! <:trev:429029722001899520>​';
	}
        if (r === 9) {
		return 'Go fuck yourself, scrub. <:trev:429029722001899520>​';
	}

	if (r === 10) {
		return 'Eat shit and die! <:trev:429029722001899520>​'
	}
}
client.on('message', msg => {
  if (msg.content.toLowerCase() === '!asktrev when was trevor born?') {
    msg.channel.send('Trevor was born on March 3rd, 2016.');}
  if (msg.content.toLowerCase() === '!asktrev should gena die?' | msg.content.toLowerCase() === '!asktrev should gena di?') {
    msg.channel.send('~~YOU BAD USER~~ Yes <:trev:429029722001899520>');}
  if (msg.content.toLowerCase() === '!asktrev am I a good goi?' | msg.content.toLowerCase() === '!asktrev am I a good guy?' ) {
    msg.channel.send('Only if you pet me.');}
  if (msg.content.toLowerCase() === '!asktrev how much does trevor weight?' | msg.content.toLowerCase() === '!asktrev how much does trevor weigh?') {
    msg.channel.send('Trevor weighs 22lbs / 9.97kg.');
  }
  if (msg.content.toLowerCase() === '!asktrev are you a noob?') {
    msg.channel.send('If I am a noob, then you are a scrub. <:trev:429029722001899520>');}
 if (msg.content.toLowerCase() === '!asktrev is zmey smart?') {
    msg.channel.send('Yes! <:trev:429029722001899520>');}
if (msg.content.toLowerCase() === '!asktrev should i die?') {
    msg.channel.send('!mindbleach');}
if (msg.content.toLowerCase() === '!asktrev will zmey calm down?') {
    msg.channel.send('Probably.');}
if (msg.content.toLowerCase() === '!asktrev when will zmey calm down?') {
    msg.channel.send('Probably soon.');}
if (msg.content.toLowerCase() === '!asktrev what are your relationship interests?') {
    msg.channel.send('Blankets!');}
if (msg.content.toLowerCase() === '!asktrev are you the best bot?') {
    msg.channel.send('Mee6 and Tatsumaki can succ me, I am the best bot!');}
if (msg.content.toLowerCase() === '!asktrev is the pool clean?') {
    msg.channel.send('You tell me! **throws camera at pool**');}
if (msg.content.toLowerCase() === '!asktrev what cat type is trev?' | msg.content.toLowerCase() === '!asktrev what cat is trev?' | msg.content.toLowerCase() === '!asktrev what cat type is trevor?' | msg.content.toLowerCase() === '!asktrev what cat is trevor?') {
    msg.channel.send('Manx, he has tabby markings.');}
if (msg.content.toLowerCase() === '!asktrev will you start a youtube channel?' | msg.content.toLowerCase() === '!asktrev will you start a youtube channel?') {
    msg.channel.send('Probably not, but my master has made a YouTube channel. youtube.com/sullyrox');}
if (msg.content.toLowerCase() === '!asktrev are you the best cat?' | msg.content.toLowerCase() === '!asktrev are you the best tomcat?' | msg.content.toLowerCase() === '!asktrev are you the best feline?') {
    msg.channel.send('Yes, all other cats can succ me!');}
  if (catfood(msg.content.toLowerCase())) { 
	console.log(':trevert:');
	msg.channel.send('My favorite cat food is Fancy Feast <:trev:429029722001899520>');
  }
  else if(msg.content.startsWith('!asktrev')) {
	  msg.channel.send("Hmm... I don't know that quite yet.");
  }
if (msg.content.toLowerCase() === '!piggy') {
	var piggy = new Discord.RichEmbed()
	.setAuthor("Trevor", client.user.avatarURL)
	.setTitle("Okay..")
	.setImage("https://cdn.discordapp.com/attachments/220651459237249024/460332881567285248/Apple-iPhoneX-Silver-1-3x.jpg");
	msg.channel.send(piggy);
}
if (msg.content.toLowerCase() === '!ew1' | msg.content.toLowerCase() === '!idku') {
	var ew1 = new Discord.RichEmbed()
	.setAuthor("Trevor", client.user.avatarURL)
	.setTitle("NO, THE IDKU WAS WINDOWS 10 RTM!")
	.setImage("https://cdn.discordapp.com/attachments/459260749479411713/477026060488278036/10240.png");
	msg.channel.send(ew1);
}
if (msg.content.toLowerCase() === '!credits') {
	var rembed = new Discord.RichEmbed()
	.setTitle("Bot Credits:")
	.setAuthor("Trevor", client.user.avatarURL)
	.setColor(3447003)
	.addBlankField(true)
	.setDescription("")
	.addField("Idea Creators", "ZmeyKolbasnik#2717\nsullyrox#0001")
	.addField("Coders", "ZmeyKolbasnik#2717\nEpicness#8422\nsullyrox#0001\nDéžo#7209")
	msg.channel.send(rembed);
}
if (msg.content.toLowerCase() === 't!credits <@281959072142458881> 250') {
    msg.channel.send('Thanks for your purchase! If a discount applies to you, you will be paid back!');}
  if (msg.content.toLowerCase() === '!help') {
    msg.channel.send('Commands: \n!roast: Best roasts from Trevor! \n!asktrev <question>: Trevor will respond to your question (E.G: "How much does Trevor weigh?", "When was Trevor born?") \n!pyramid <number>: COMING SOON: Makes an emoji pyramid, the maximum amount of emojis will be the number you specified. Max number allowed: 27 \n!say <phrase>: Says what you typed! \n!rr/!russianroulette: Plays a game of Russian roulette. 1 in 6 chambers.\n!catpicoftheday: BETA: Triggers a random Trevor pic\n!mindbleach/!eyebleach: Shows you a calming/cute photo (of Trevor).\n!howtrueis: How true is the info you requested?\n!tehurn/!nottehurn: tehurn.com and tehurn.com/not\n!trevporn: Gives you a (SFW) video of Trevor and his blankets \n!rolemarket: EXCLUSIVE TO THIS SRSS: Buy some colors! \n!info: Detailed information about the bot\'s hosting PC');}
 if (msg.content.toLowerCase() === '!info') {
	//msg.channel.send(cpuStat.usagePercent(remb));
	msg.channel.send(resource_embed());
  }
  if (msg.content.toLowerCase() === '!tehurn') {
	  msg.channel.send('TEH URN!!1!', 
	  {
		  files: [
			"./video/tehurn.webm"
		  ]
	  });
  }
  if (msg.content.toLowerCase() === '​<@467610653050404880>​') {
     var s = new Discord.RichEmbed()
    .setTitle("Pong!")
    .setAuthor("Trevor", client.user.avatarURL)
    .setColor(3447003)
    .setImage("https://cdn.discordapp.com/attachments/429019393557659654/473787066044383234/trevmeme.png");
    msg.channel.send(s);
  }
  if (msg.content.toLowerCase() === '!nottehurn') {
	  msg.channel.send('Not teh urn... :(', 
	  {
		  files: [
			"./video/nottehurn.webm"
		  ]
	  });
  }	  
  if (msg.content.toLowerCase() === '!mindbleach') {
	 var s = new Discord.RichEmbed()
	.setTitle("Enjoy your mind bleach!")
	.setAuthor("Trevor", client.user.avatarURL)
	.setColor(3447003)
	.setImage("https://cdn.discordapp.com/attachments/429018214274564128/466096541325852672/image.jpg");
	msg.channel.send(s);
  }
  if (msg.content.toLowerCase() === '!eyebleach') {
	var s = new Discord.RichEmbed()
	.setTitle("Enjoy your eye bleach!")
	.setAuthor("Trevor", client.user.avatarURL)
	.setColor(3447003)
	.setImage("https://cdn.discordapp.com/attachments/429018214274564128/466096541325852672/image.jpg");
	msg.channel.send(s);
	}
if (msg.content.toLowerCase().startsWith('!pyramid')) {
	console.log(msg.content.toLowerCase());
	var tmp = msg.content.substr(9,9);
	console.log(tmp);
	var tmp1 = pyramid(parseInt(tmp));
	console.log("'"+tmp1+"'");
	console.log(tmp1.indexOf("trev"))
	if (tmp1.indexOf("trev") == -1) {
		msg.channel.send(error_embed("The pyramid() function returned an empty response."));
	}
	else {
		msg.channel.send(tmp1);
	}
}
if (msg.content === '!roast') {
	r = Math.floor(Math.random()*10);
	console.log(r);
	roaststr = roast(r);
	msg.channel.send(roaststr)
}
if (msg.content.startsWith("!eval")) {
	var code = msg.content.substring(6, msg.content.length);
	console.log(code);
	if (msg.author.id === '135817108750729216' | msg.author.id === '353776617941762058') {
		try {
			var x = eval(code);
			console.log('EVAL EXECUTED: OUTPUT ' + x);
			msg.channel.send('Code evaluated.\nOutput:```' + x + '```');
		} catch(e) {
			msg.channel.send(error_embed(e));
			console.log("ERROR: "+e);
		}
	}
	else {
		msg.channel.send(error_embed("A user not in the list of allowed users attempted to run the !eval command."));
	}
}
if (msg.content.startsWith ("!say")) {
	console.log(msg.content);
	var speak = msg.content.substring(5,msg.content.length);
	console.log(speak);
	msg.channel.send(speak);
}
if (msg.content.toLowerCase().startsWith ('!howtrueis')) {
	rn = Math.floor(Math.random()*110);
	if (rn > 100)
        {var rn = 100;}
        console.log(rn);
	var speak = msg.content.substring(11,msg.content.length);
	console.log(speak);
	msg.channel.send(speak + ' is' + ' ' + rn + ' % likely to be true.');}
if (msg.content.toLowerCase() === '!rr' | msg.content.toLowerCase() === '!russianroulette') {
    var rr = Math.floor(Math.random()*7); 
    console.log(rr);
    if (rr === 2)
    {msg.channel.send('**Died! Oof.** :x:');}
    else
    {msg.channel.send('**Survived!** :white_check_mark:');}}
if (msg.content.toLowerCase() === '!rolemarket') {
     if (msg.guild.id === '429018214274564126')
{msg.channel.send('Want to buy some colors? You are in the right place! \nVeterans discounts: \n50% if you were there during SRRH. Add 10% if you were there during when it was just made. \n40% if you joined when SRSS was just made \nIf you apply to multiple of these, the highest one will be applied. You will be paid back the number of your discount if it applies to you. \nEach color costs 250 tatsumaki credits! \nColors: \nInvisible \nTurquoise \nLight Green \nBlue \nPink \nRed \nYellow \nDark Turquoise \nGreen \nNavy Blue \nUltra Blue \n Once you have chosen your color, react with an emoji that corresponds with the color, if not available, just specify the color. Once you have done this, do t!credits @sullyrox 250.');}
  else
{msg.channel.send(error_embed("A server not in the list of servers with the role market attempted to run this bot command."));}}
	if (msg.content.toLowerCase() === '!trevporn') {var pron_b = Math.floor(Math.random()*2);
      if (pron_b === 0 | pron_b === 2)
	  {rn_video = "blankies_2.webm";}
      if (pron_b === 1)
	  {rn_video = "blankets.webm";}
      msg.channel.send('Enjoy your blanket porn...', 
      {
          files: [
            "./video/" + rn_video
          ]
      });
  }
  if (msg.content.toLowerCase() === '!emotes') {
     if (msg.guild.id === '429018214274564126')
  var s = new Discord.RichEmbed()
    .setTitle("These are all of the SRSS emotes!")
    .setAuthor("Trevor", client.user.avatarURL)
    .setColor(3447003)
    .setImage("https://cdn.discordapp.com/attachments/480348198200803338/485696655857942539/emotes.gif");
    msg.channel.send(s);
	  }
  if (msg.content.toLowerCase() === '!doterra') {
    var s = new Discord.RichEmbed()
    .setTitle("Vegetables can taste a little boring, so I decided to spruce them up with a few drops of doterra oregano oil! 😋 \nLater, I'll be ready for some violent diarrhea and maybe even a hospital visit! All thanks to the raw power of essential oils!")
    .setAuthor("Trevor", client.user.avatarURL)
    .setColor(3447003)
    .setImage("https://cdn.discordapp.com/attachments/480348198200803338/485094651511046144/unknown.png");
    msg.channel.send(s);
	  }
  if (msg.content.toLowerCase() === '!mlm') {
    var s = new Discord.RichEmbed()
    .setTitle("After selling $50,000,000 of makeup and losing all my friends, I'm SO happy to have bought the car of my dreams!")
    .setAuthor("Trevor", client.user.avatarURL)
    .setColor(3447003)
    .setImage("https://cdn.discordapp.com/attachments/429018214274564128/484627656957100049/oL5oEG3u4eOYxxGjALF7fo7o0pxQ2thHn3GdUzaaaYM.png");
    msg.channel.send(s);
    }

if (msg.content.toLowerCase() === '!catpicoftheday') {
	function randomURL() {
    var t = Math.floor(Math.random()*15); 
    console.log(t);
    var urls = "https://zmeykolbasnik.github.io/";
    var urle = ["party%20trev.jpg","Trevor%20on%20desk.jpg","snuggly%20trev.jpg","trevwut.JPG","TrevSleep.jpg","Full%20Resolution%20Trevor%20Yawn.jpg", "crazy%20trev.jpg","baguette%20trev.png","snuggly%20trev.jpg","%5B8K%5D%20Trevor.JPG", "sup%20ladies.png", "mindbleach%5Fsticker.jpg", "TwebbieRage.JPG", "trev%5Fsucc.jpg", "trev%5Fstatue.JPG"]
    return urls + urle[t];
}
function imageEmbed(title, url) {
    var t = new Discord.RichEmbed()
    .setTitle(title)
    .setAuthor("Trevor", client.user.avatarURL)
    .setColor(3447003)
    .setImage(url)
    return t;
}var t = randomURL();
	msg.channel.send(imageEmbed("Here is your cat picture of the day!", t));
}
});