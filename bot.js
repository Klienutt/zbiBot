var Discord = require('discord.io-gateway6');
var logger = require('winston');
var auth = require('./auth.json');
var id="";
var state=0;
var vise=0;
var nik=0;
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
function rnd(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

bot.on('message', function (user, userID, channelID, message, evt) {
    if(user != "zbiBot"){
	    if( message == "hafni aji" )
	    {	
		id=user;
		bot.sendMessage({
			   to: channelID,
			   message: 'oue jbilo'
		});
		nik=0;
	    }
	    else if( message.includes("hafni atak ") )
	    {    
		    id=message.split(' ')[2];
		    bot.sendMessage({
			   to: channelID,
			   message: id + ' 79rb ita tzid hdra joj ntalla3 ydddi m3a khroztk'
			 });
		    nik=1;
		    
	    }
	    else if( message == "hafni mod ramdan" )
	    {	
		state=1;
		bot.sendMessage({
			   to: channelID,
			   message: 'mchat alfsr'
		});
		bot.sendMessage({
			   to: channelID,
			   message: 'Mn daba may3awd ykhsr chi 7dd fikom lhdra la7fdkom'
		});

	    }
	    else{
	    if (user == id)
	    {
		
		if(nik ==1 )
		{
		if( message == "hafni t7awa")
		{	
			id = "";
			bot.sendMessage({
				   to: channelID,
				   message: 'zid o matdorch'
			 });
		}
		else{
		var k=rnd(0,5);
		switch(k) {
		    case 0:
			bot.sendMessage({
			    to: channelID,
			    message: 'ser aazaml la nleggilk rkbti ft9obtk'
			});
		    break;
		    case 1:
			bot.sendMessage({
			    to: channelID,
			    message: '79rb ita nfarrag tabon mok o n7chi yddi o 2 toes'
			});
		    break;
		    case 2:
			bot.sendMessage({
			    to: channelID,
			    message: 'atskot t9owd 9bl manrfa3 l9a7ba ymmak fog zbbi'
			});
		    break;
		    case 3:
			bot.sendMessage({
			    to: channelID,
			    message: 'aji ha mssli 9liwati alwasa3 blast matdi'
			});
		    break;
		    case 4:
			bot.sendMessage({
			    to: channelID,
			    message: 'ahah zid'
			});
		    break;
		    case 5:
			bot.sendMessage({
			    to: channelID,
			    message: 'ansaynk ta tsali mnhdra o nkhowr dinmmok bzabba ta3i '
			});
		    break;
			}
		}
		}   
		if(nik !=1 )
		{
		if( message == "hafni 9owd")
		{	
			id = "";
			bot.sendMessage({
				   to: channelID,
				   message: 'roule a3chiri'
			 });
		}
		else{
		var k=rnd(0,5);
		switch(k) {
		    case 0:
			bot.sendMessage({
			    to: channelID,
			    message: 'hhhhhhhhhhhhh tfo 3la 7amd'
			});
		    break;
		    case 1:
			bot.sendMessage({
			    to: channelID,
			    message: 'sat plsss skot broojola'
			});
		    break;
		    case 2:
			bot.sendMessage({
			    to: channelID,
			    message: 'wa naari sdd krk al9lawi'
			});
		    break;
		    case 3:
			bot.sendMessage({
			    to: channelID,
			    message: 'khkhkhkhkh wa dor t7awa'
			});
		    break;
		    case 4:
			bot.sendMessage({
			    to: channelID,
			    message: 'khritina bdahk akhoya'
			});
		    break;
		    case 5:
			bot.sendMessage({
			    to: channelID,
			    message: 'ahah o fo9ach atwli modhik?'
			});
		    break;
			}
		}
		}
	    }
	    else if(state ==1 ){
		if(message == "hafni rye7")
		{
			state=0;
			bot.sendMessage({
			   to: channelID,
			   message: 'lli 7bb lghzal'
		});
		}
		else{
		var cmd=message;
		if( cmd.includes("zab") || cmd.includes("zb") || cmd.includes("zob") || cmd.includes("zeb"))
			bot.sendMessage({
			    to: channelID,
			    message: user + ' ft9obtk azzamal'
			});
		if( cmd.includes("97b") || cmd.includes("9e7b") || cmd.includes("9a7b") || cmd.includes("qahb") || cmd.includes("qhb") )
			bot.sendMessage({
			    to: channelID,
			    message: user + ' l9a7ba hia mok'
			});
		if( cmd.includes("9lawi") || cmd.includes("qlawi") || cmd.includes("qlwa") || cmd.includes("9alwa") || cmd.includes("9liwat") )
			bot.sendMessage({
			    to: channelID,
			    message: 'ahya ' + user + ' jma3 krk'
			});
		}
		} 
	   }
    }	
});

