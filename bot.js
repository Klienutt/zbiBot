var Discord = require('discord.io-gateway6');
var logger = require('winston');
var auth = require('./auth.json');
var id="";
var state=0;
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
    if( message == "zbiBot aji" )
    {	
	id=userID;
	bot.sendMessage({
                   to: channelID,
                   message: 'oue jbilo'
        });
	
    }
    else if( message == "zbiBot mod ramdan" )
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
    if (userID == id)
    {
    	if( message == "zbiBot 9owd")
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
    else if(state ==1 ){
	if(message == "zbiBot rye7")
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
                    message: 'Ft9obtk azzamal'
                });
	if( cmd.includes("97b") || cmd.includes("9e7b") || cmd.includes("9a7b") || cmd.includes("qahb") || cmd.includes("qhb") )
		bot.sendMessage({
                    to: channelID,
                    message: 'l9a7ba hia mok'
                });
	if( cmd.includes("9lawi") || cmd.includes("qlawi") || cmd.includes("qlwa") || cmd.includes("9alwa") || cmd.includes("9liwat") )
		bot.sendMessage({
                    to: channelID,
                    message: 'ahya ' + user + ' jma3 krk'
                });
	if( user != "Klienutt")
		bot.sendMessage({
                    to: channelID,
                    message: 'ahya ' + userID + ' jma3 krk'
                });
	} 
   }
    }	
});

