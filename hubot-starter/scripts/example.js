'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (bot) => {
  // bot.hear(/Hello!/, function(res) {
  //   return res.send("Hi Bashayer!");
  // });
  bot.hear(/list/i, function(res) {
    res.send('Badger \n hello \n ! misk')
  })
 
  bot.hear(/lunch/i, function(res) {
    var lunch = ['Pizza', 'Burger','Pasta'];
    var random1 = Math.floor(Math.random() * lunch.length);
    console.log(random1);
    res.send(lunch[random1]);
  })
 
  bot.hear(/convert (.*)/i, function(res) {

  var  x = document.converter.dollar.value = document.converter.rial.value * 3.75
  

  var y = document.converter.rial.value = document.converter.dollar.value * 3.75

res.send(x);


  })


  bot.respond(/Reverse word (.*)/i, function(msg) {
    var word;
    word = msg.match[1];

    function reverse(str){
      let reversed = "";    
      for (var i = str.length - 1; i >= 0; i--){        
        reversed += str[i];
      }    
      return reversed;
    } 

    var rev = reverse(word);
    return  msg.send(rev);
  });
  
  // bot.hear(/convert/i, function(res) {

  // var sr, usd, ;
  // function init()
  // {
  //     sr = document.getElementById("SR");
  //     usd = document.getElementById("USD");
     
  // }
  
  // function sr()
  // {
  //     usd.value = parseFloat(gbp.value) / 3.75;
     
  // }
  
  // function usd()
  // {
  //     sr.value = parseFloat(sr.value) * 3.75;
     
  // }
  // res.send(sr);

//
  
  bot.respond(/What's your favorite food?/, function(res) {
    return res.send("I'm a robot--I don't eat food!");
  });
  bot.hear(/badger/i, function(res) {
    res.send('Badgers? BADGERS? WE DON’T NEED NO STINKIN BADGERS')
  })

  bot.hear(/friends/i, function(res)  {
    res.send('Friends Bashayer is the best!')
  })

  bot.hear(/Hello!/, function(res) {
    return res.send("Hi there!");
  });

  bot.respond(/What's your favorite food?/, function(res) {
    return res.send("I'm a robot--I don't eat food!");
  });

  bot.hear(/diesel/i, function(res) {
    res.send('Bark!')
  })
  
  bot.respond(/open the (.*) doors/i, function(res) {
    const doorType = res.match[1]
    console.log(doorType)
  
    if (doorType === 'pod bay') {
      res.reply('I’m afraid I can’t let you do that.')
      return
    }
  
    res.reply(`Opening ${doorType} doors`)
  })

  bot.respond(/Hi Hubot! My name is (.*)/i, function(msg) {
    var name;
    name = msg.match[1];
    if (name == "Hubot"){
      return msg.send("You're not Hubot--I'm Hubot!");
    } else {
      return msg.reply("Nice to meet you, " + name + "!");
    }
  
  });

  //i did it 
  bot.respond(/todo (.*)/i, function(msg) {
    var name;
    name = msg.match[1];
    if (name == "buy food"){
      return msg.reply("TODOS: \n todo buy food");
    } else if (name == "wash dog" ){
      return msg.reply( "TODOS: \n buy food, wash dog ");
    }
    else if  (name == "take out trash" ){
      return msg.reply( "TODOS: \n buy food, wash dog, take out trash ");
    }
    else {
      return msg.reply("!");
    }
   
  });
  

  var squirrels = [
    "http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg",
    "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png",
    "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png",
    "http://shipitsquirrel.github.com/images/squirrel.png"
  ];

  bot.hear(/ship it/i, function(res) {
    res.send(res.random(squirrels))
  })
  

  // bot.hear /ship it/i, (msg) ->
  //   msg.send msg.random squirrels

  bot.respond(/what is your favorite (.*)/, function(msg) {
    var fav;
    fav = msg.match[1];
    console.log(fav);
    switch (fav) {
      case "food":
        return msg.reply("I'm a robot--I don't eat food!");
        break;
      case "band":
        return msg.reply("It's gotta be Daft Punk!");
        break;
      case "programming language":
        return msg.reply("Javascript, of course!");
        break;
      default:
        return msg.reply("I don't have a favorite " + fav + ". What's yours?");
    }
  });


  //
  // bot.hear(/I like pie/i, function(res) {
  //   res.emote('makes a freshly baked pie')
  // })
  //
  // const lulz = ['lol', 'rofl', 'lmao']
  //
  // bot.respond(`/${lulz.join('|')}/i`, function(res) {
  //   res.send(res.random(lulz))
  // })
  //
  // bot.topic(function(res) {
  //   res.send(`${res.message.text}? That’s a Paddlin`)
  // })
  //
  // const enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you']
  // const leaveReplies = ['Are you still there?', 'Target lost', 'Searching']
  //
  // bot.enter(function(res) {
  //   res.send(res.random(enterReplies))
  // })
  // bot.leave(function(res) {
  //   res.send(res.random(leaveReplies))
  // })
  //
  // const answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING
  //
  // bot.respond(/what is the answer to the ultimate question of life/, function(res) {
  //   if (answer) {
  //     res.send(`${answer}, but what is the question?`)
  //     return
  //   }
  //
  //   res.send('Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again')
  // })
  //
  // bot.respond(/you are a little slow/, function(res) {
  //   setTimeout(() => res.send('Who you calling "slow"?'), 60 * 1000)
  // })
  //
  // let annoyIntervalId = null
  //
  // bot.respond(/annoy me/, function(res) {
  //   if (annoyIntervalId) {
  //     res.send('AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH')
  //     return
  //   }
  //
  //   res.send('Hey, want to hear the most annoying sound in the world?')
  //   annoyIntervalId = setInterval(() => res.send('AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH'), 1000)
  // })
  //
  // bot.respond(/unannoy me/, function(res) {
  //   if (!annoyIntervalId) {
  //     res.send('Not annoying you right now, am I?')
  //     return
  //   }
  //
  //   res.send('OKAY, OKAY, OKAY!')
  //   clearInterval(annoyIntervalId)
  //   annoyIntervalId = null
  // })
  //
  //
  // bot.router.post('/hubot/chatsecrets/:room', function(req, res) {
  //   const room = req.params.room
  //   const data = JSON.parse(req.body.payload)
  //   const secret = data.secret
  //
  //   bot.messageRoom(room, `I have a secret: ${secret}`)
  //
  //   res.send('OK')
  // })
  //
  // bot.error((error, response) => {
  //   const message = `DOES NOT COMPUTE: ${error.toString()}`
  //   bot.logger.error(message)
  //
  //   if (response) {
  //     response.reply(message)
  //   }
  // })
  //
  bot.respond(/have a soda/i, function(response) {
    // Get number of sodas had (coerced to a number).
    const sodasHad = +bot.brain.get('totalSodas') || 0
  
    if (sodasHad > 4) {
      response.reply('I’m too fizzy…')
      return
    }
  
    response.reply('Sure!')
    bot.brain.set('totalSodas', sodasHad + 1)
  })
  
  bot.respond(/sleep it off/i, function(res) {
    bot.brain.set('totalSodas', 0)
    res.reply('zzzzz')
  })
}
