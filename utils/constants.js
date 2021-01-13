exports.LAUNCH_STRING = 'Welcome to Song Match. ' +
                        'I can help you understand which song by your favorite artist best matches your life. ' +
                        'Please tell me the name of your favorite artist.';

exports.HELP_STRING = 'This is Song Match. ' +
                      'I can help you understand which song by your favorite artist best matches your life. ' +
                      'Please tell me the name of your favorite artist and answer the following questions.';

exports.EXIT_STRING = 'Thanks for playing Song Match!';

exports.MATCH_STRING = function (match) {
  return '<speak>Based on your responses, you got ' + match.title + '. <audio src="' + match.url + '" /> Do you want to play Song Match again?</speak>';
}

exports.NUM_QUESTIONS = 3;

const rickRolled = {
  title : 'rolled',
  url : 'https://rickrolled.s3.us-east-2.amazonaws.com/rockrilled.mp3'
};

exports.ARTISTS = {
  'ARIANA GRANDE' : {
      name : 'Ariana Grande',
      questions : ['What is your favorite quality someone can have? Humor, loyalty, or empathy.',
                  'What do you prefer? Instagram or Snapchat.',
                  'What is your favorite pizza topping? Pepperoni, sausage, or pineapple.'],
      answers : [['HUMOR','LOYALTY','EMPATHY'], ['INSTAGRAM', 'SNAPCHAT'], ['PEPPERONI', 'SAUSAGE', 'PINEAPPLE']],
      matches : {
        '000': {
          title: 'Side to Side',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/sidetoside.mp3' 
        },
        '001': {
          title: '7 Rings',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/7rings.mp3' 
        },
        '002': {
          title: '7 Rings',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/7rings.mp3' 
        },
        '010': {
          title: 'Positions',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/7rings.mp3' 
        },
        '011': {
          title: '34+35',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/34plus35.mp3' 
        },
        '012': {
          title: 'Problem',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/problem.mp3' 
        },
        '100': {
          title: 'Obvious',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/obvious.mp3' 
        },
        '101': {
          title: 'Stuck with U',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/stuckwithu.mp3' 
        },
        '102': {
          title: 'No Tears Left to Cry',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/notearslefttocry.mp3' 
        },
        '110': {
          title: 'Break Free',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/breakfree.mp3' 
        },
        '111': {
          title: 'Break Free',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/breakfree.mp3' 
        },
        '112': {
          title: 'Sweetener',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/sweetener.mp3' 
        },
        '200': {
          title: 'Thank U, Next',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/thankunext.mp3' 
        },
        '201': {
          title: 'POV',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/pov.mp3' 
        },
        '202': {
          title: 'God is a Woman',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/godisawoman.mp3' 
        },
        '210': {
          title: 'One Last Time',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/onelasttime.mp3' 
        },
        '211': {
          title: 'Love Me Harder',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/lovemeharder.mp3' 
        },
        '212': {
          title: 'Breathin',
          url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/arianagrande/breathin.mp3' 
        }
      }
  },
  'SAINT MOTEL' : {
    name : 'Saint Motel',
    questions : ['Where would you rather live? Paris, New York, or Hawaii.',
                'What is your favorite season? Winter, spring, summer, or fall.',
                'Do you like Tik Tok? Yes or no.'],
    answers : [['PARIS','NEW YORK','HAWAII'], ['WINTER', 'SPRING', 'SUMMER', 'FALL'], ['YES', 'NO']],
    matches : {
      '000': {
        title: 'Sweet Talk',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/sweettalk.mp3' 
      },
      '001': {
        title: 'Cold Cold Man',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/coldcoldman.mp3' 
      },
      '010': {
        title: 'My Type',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/mytype.mp3' 
      },
      '011': {
        title: 'Cold Cold Man',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/coldcoldman.mp3' 
      },
      '020': {
        title: 'My Type',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/mytype.mp3' 
      },
      '021': {
        title: 'Cold Cold Man',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/coldcoldman.mp3' 
      },
      '030': {
        title: 'My Type',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/mytype.mp3' 
      },
      '031': {
        title: 'Cold Cold Man',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/coldcoldman.mp3' 
      },
      '100': {
        title: 'Sweet Talk',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/sweettalk.mp3' 
      },
      '101': {
        title: 'A Good Song Never Dies',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/agoodsongneverdies.mp3' 
      },
      '110': {
        title: 'Move',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/move.mp3' 
      },
      '111': {
        title: 'A Good Song Never Dies',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/agoodsongneverdies.mp3' 
      },
      '120': {
        title: 'Move',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/move.mp3' 
      },
      '121': {
        title: 'Local Long Distance Relationship',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/locallongdistancerelationship.mp3' 
      },
      '130': {
        title: 'Move',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/move.mp3' 
      },
      '131': {
        title: 'A Good Song Never Dies',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/agoodsongneverdies.mp3' 
      },
      '200': {
        title: 'Sweet Talk',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/sweettalk.mp3' 
      },
      '201': {
        title: 'Preach',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/preach.mp3' 
      },
      '210': {
        title: 'Move',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/move.mp3' 
      },
      '211': {
        title: 'Preach',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/preach.mp3' 
      },
      '220': {
        title: 'Move',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/move.mp3' 
      },
      '221': {
        title: 'Preach',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/preach.mp3' 
      },
      '230': {
        title: 'Move',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/move.mp3' 
      },
      '231': {
        title: 'Preach',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/saintmotel/preach.mp3' 
      }
    }
  },
  'DRAKE' : {
    name : 'Drake',
    questions : ['Where would you rather go for vacation? Tokyo, Venice, or Los Angeles.',
                'Of these powers, which would you want to have? Flight, invisibility, or strength',
                'Is the best shower cold or hot?'],
    answers : [['TOKYO','VENICE','LOS ANGELES'], ['FLIGHT', 'INVISIBILITY', 'STRENGTH'], ['COLD', 'HOT']],
    matches : {
      '000': {
        title: 'Toosie Slide',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/toosieslide.mp3' 
      },
      '001': {
        title: 'One Dance',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/onedance.mp3' 
      },
      '010': {
        title: 'Money in the Grave',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/moneyinthegrave.mp3' 
      },
      '011': {
        title: 'Passionfruit',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/passionfruit.mp3' 
      },
      '020': {
        title: 'Marvins Room',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/marvinsroom.mp3' 
      },
      '021': {
        title: 'Laugh Now Cry Later',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/laughnowcrylater.mp3' 
      },
      '100': {
        title: 'Nonstop',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/nonstop.mp3' 
      },
      '101': {
        title: 'One Dance',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/onedance.mp3' 
      },
      '110': {
        title: 'In My Feelings',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/inmyfeelings.mp3' 
      },
      '111': {
        title: 'Passionfruit',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/passionfruit.mp3' 
      },
      '120': {
        title: 'Marvins Room',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/marvinsroom.mp3' 
      },
      '121': {
        title: 'Laugh Now Cry Later',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/laughnowcrylater.mp3' 
      },
      '200': {
        title: 'Money in the Grave',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/moneyinthegrave.mp3' 
      },
      '201': {
        title: 'God\'s Plan',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/godsplan.mp3' 
      },
      '210': {
        title: 'Nonstop',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/nonstop.mp3' 
      },
      '211': {
        title: 'In My Feelings',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/inmyfeelings.mp3' 
      },
      '220': {
        title: 'Marvins Room',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/marvinsroom.mp3' 
      },
      '221': {
        title: 'God\'s Plan',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/drake/godsplan.mp3' 
      }
    }
  },
  'BILLIE EILISH' : {
    name : 'Billie Eilish',
    questions : ['What is your preferred movie genre? Horror, action, or comedy.',
                'Of these powers, which would you want to have? Flight, invisibility, or strength',
                'How do your friends describe you? Funny, smart, or caring.'],
    answers : [['HORROR','ACTION','COMEDY'], ['FLIGHT', 'INVISIBILITY', 'STRENGTH'], ['FUNNY', 'SMART', 'CARING']],
    matches : {
      '000': {
        title: 'Ilomilo',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/ilomilo.mp3' 
      },
      '001': {
        title: 'Bury a Friend',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/buryafriend.mp3' 
      },
      '002': {
        title: 'Everything I Wanted',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/everythingiwanted.mp3' 
      },
      '010': {
        title: 'You Should See Me in a Crown',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/youshouldseemeinacrown.mp3' 
      },
      '011': {
        title: 'Bury a Friend',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/buryafriend.mp3' 
      },
      '012': {
        title: 'When the Party\'s Over',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/whenthepartysover.mp3' 
      },
      '020': {
        title: 'You Should See Me in a Crown',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/youshouldseemeinacrown.mp3' 
      },
      '021': {
        title: 'Bury a Friend',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/buryafriend.mp3' 
      },
      '022': {
        title: 'When the Party\'s Over',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/whenthepartysover.mp3' 
      },
      '100': {
        title: 'Ocean Eyes',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/oceaneyes.mp3' 
      },
      '101': {
        title: 'Lovely',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/lovely.mp3' 
      },
      '102': {
        title: 'Lovely',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/lovely.mp3' 
      },
      '110': {
        title: 'Come Out and Play',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/comeoutandplay.mp3' 
      },
      '111': {
        title: 'Therefore I Am',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/thereforeiam.mp3' 
      },
      '112': {
        title: 'Lovely',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/lovely.mp3' 
      },
      '120': {
        title: 'Bad Guy',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/badguy.mp3' 
      },
      '121': {
        title: 'Bad Guy',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/badguy.mp3' 
      },
      '122': {
        title: 'No Time to Die',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/notimetodie.mp3' 
      },
      '200': {
        title: 'Ocean Eyes',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/oceaneyes.mp3' 
      },
      '201': {
        title: 'Copycat',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/copycat.mp3' 
      },
      '202': {
        title: 'Come Out and Play',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/comeoutandplay.mp3' 
      },
      '210': {
        title: 'Ocean Eyes',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/oceaneyes.mp3' 
      },
      '211': {
        title: 'Copycat',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/copycat.mp3' 
      },
      '212': {
        title: 'I Love You',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/iloveyou.mp3' 
      },
      '220': {
        title: 'Ocean Eyes',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/oceaneyes.mp3' 
      },
      '221': {
        title: 'Wish You Were Gay',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/wishyouweregay.mp3' 
      },
      '222': {
        title: 'Everything I Wanted',
        url: 'https://songmatchaudio.s3.us-east-2.amazonaws.com/billieeilish/everythingiwanted.mp3' 
      }
    }
  },
  'RICK ASTLEY' : {
    name : 'Rick Astley',
    questions : ['Where would you rather go for vacation? Tokyo, Venice, or Los Angeles.',
                'What do you prefer? Instagram or Snapchat.',
                'How do your friends describe you? Funny, smart, or caring.'],
    answers : [['TOKYO','VENICE','LOS ANGELES'], ['INSTAGRAM', 'SNAPCHAT'], ['FUNNY', 'SMART', 'CARING']],
    matches : {
      '000': rickRolled,
      '001': rickRolled,
      '002': rickRolled,
      '010': rickRolled,
      '011': rickRolled,
      '012': rickRolled,
      '100': rickRolled,
      '101': rickRolled,
      '102': rickRolled,
      '110': rickRolled,
      '111': rickRolled,
      '112': rickRolled,
      '200': rickRolled,
      '201': rickRolled,
      '202': rickRolled,
      '210': rickRolled,
      '211': rickRolled,
      '212': rickRolled
    }
  }
};
