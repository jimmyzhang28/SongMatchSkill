exports.LAUNCH_STRING = 'Welcome to Song Match. ' +
                        'I can help you understand which song by your favorite artist best matches your life. ' +
                        'Please tell me the name of your favorite artist.';

exports.HELP_STRING = 'This is Song Match. ' +
                      'I can help you understand which song by your favorite artist best matches your life. ' +
                      'Please tell me the name of your favorite artist and answer the following questions.';

exports.EXIT_STRING = 'Thanks for playing Song Match!';

exports.MATCH_STRING = function (match) {
  return 'Based on your response, you got ' + match + '. Do you want to play Song Match again?';
}

exports.NUM_QUESTIONS = 3;

exports.ARTISTS = {
  'ARIANA GRANDE' : {
      name : 'Ariana Grande',
      questions : ['What is your favorite quality someone can have? Humor, loyalty, or empathy.',
                  'What do you prefer? Instagram or Snapchat.',
                  'What is your favorite pizza topping? Pepperoni, sausage, or pineapple.'],
      answers : [['HUMOR','LOYALTY','EMPATHY'], ['INSTAGRAM', 'SNAPCHAT'], ['PEPPERONI', 'SAUSAGE', 'PINEAPPLE']],
      matches : {
        "000": "Side to Side",
        "001": "7 Rings",
        "002": "7 Rings",
        "010": "Positions",
        "011": "34+35",
        "012": "Problem",
        "100": "Obvious",
        "101": "Stuck with U",
        "102": "No Tears Left to Cry",
        "110": "Break Free",
        "111": "Break Free",
        "112": "Sweetener",
        "200": "Thank U, Next",
        "201": "POV",
        "202": "God is a Woman",
        "210": "One Last Time",
        "211": "Love Me Harder",
        "212": "Breathin"
      }
  },
  'SAINT MOTEL' : {
    name : 'Saint Motel',
    questions : ['Where would you rather live? Paris, New York, or Hawaii.',
                'What is your favorite season? Winter, spring, summer, or fall.',
                'Do you like Tik Tok? Yes or no.'],
    answers : [['PARIS','NEW YORK','HAWAII'], ['WINTER', 'SPRING', 'SUMMER', 'FALL'], ['YES', 'NO']],
    matches : {
      "000": "Sweet Talk",
      "001": "Cold Cold Man",
      "010": "My Type",
      "011": "Cold Cold Man",
      "020": "My Type",
      "021": "Cold Cold Man",
      "030": "My Type",
      "031": "Cold Cold Man",
      "100": "Sweet Talk",
      "101": "A Good Song Never Dies",
      "110": "Move",
      "111": "A Good Song Never Dies",
      "120": "Move",
      "121": "Local long Distance Relationship",
      "130": "Move",
      "131": "A Good Song Never Dies",
      "200": "Sweet Talk",
      "201": "Preach",
      "210": "Move",
      "211": "Preach",
      "220": "Move",
      "221": "Preach",
      "230": "Move",
      "231": "Preach"
    }
  },
  'DRAKE' : {
    name : 'Drake',
    questions : ['Where would you rather go for vacation? Tokyo, Venice, or Los Angeles.',
                'Of these powers, which would you want to have? Flight, invisibility, or strength',
                'Is the best shower cold or hot?'],
    answers : [['TOKYO','VENICE','LOS ANGELES'], ['FLIGHT', 'INVISIBILITY', 'STRENGTH'], ['COLD', 'HOT']],
    matches : {
      "000": "Toosie Slide",
      "001": "One Dance",
      "010": "Money in the Grave",
      "011": "Passionfruit",
      "020": "Marvins Room",
      "021": "Laugh Now Cry Later",
      "100": "Nonstop",
      "101": "One Dance",
      "110": "In My Feelings",
      "111": "Passionfruit",
      "120": "Marvins Room",
      "121": "Laugh Now Cry Later",
      "200": "Money in the Grave",
      "201": "God's Plan",
      "210": "Nonstop",
      "211": "In My Feelings",
      "220": "Marvins Room",
      "221": "God's Plan"
    }
  },
  'BILLIE EILISH' : {
    name : 'Billie Eilish',
    questions : ['What is your preferred movie genre? Horror, action, or comedy.',
                'Of these powers, which would you want to have? Flight, invisibility, or strength',
                'How do your friends describe you? Funny, smart, or caring.'],
    answers : [['HORROR','ACTION','COMEDY'], ['FLIGHT', 'INVISIBILITY', 'STRENGTH'], ['FUNNY', 'SMART', 'CARING']],
    matches : {
      "000": "Ilomilo",
      "001": "Bury a Friend",
      "002": "Everything I Wanted",
      "010": "You Should See Me in a Crown",
      "011": "Bury a Friend",
      "012": "When the Party's Over",
      "020": "You Should See Me in a Crown",
      "021": "Bury a Friend",
      "022": "When the Party's Over",
      "100": "Ocean Eyes",
      "101": "Lovely",
      "102": "Lovely",
      "110": "Come Out and Play",
      "111": "Therefore I Am",
      "112": "Lovely",
      "120": "Bad Guy",
      "121": "Bad Guy",
      "122": "No Time to Die",
      "200": "Ocean Eyes",
      "201": "Copycat",
      "202": "Come Out and Play",
      "210": "Ocean Eyes",
      "211": "Copycat",
      "212": "I Love You",
      "220": "Ocean Eyes",
      "221": "Wish You Were Gay",
      "222": "Everything I Wanted"
    }
  },
  'RICK ASTLEY' : {
    name : 'Rick Astley',
    questions : ['Where would you rather go for vacation? Tokyo, Venice, or Los Angeles.',
                'What do you prefer? Instagram or Snapchat.',
                'How do your friends describe you? Funny, smart, or caring.'],
    answers : [['TOKYO','VENICE','LOS ANGELES'], ['INSTAGRAM', 'SNAPCHAT'], ['FUNNY', 'SMART', 'CARING']],
    matches : {
      "000": "rick rolled",
      "001": "rick rolled",
      "002": "rick rolled",
      "010": "rick rolled",
      "011": "rick rolled",
      "012": "rick rolled",
      "100": "rick rolled",
      "101": "rick rolled",
      "102": "rick rolled",
      "110": "rick rolled",
      "111": "rick rolled",
      "112": "rick rolled",
      "200": "rick rolled",
      "201": "rick rolled",
      "202": "rick rolled",
      "210": "rick rolled",
      "211": "rick rolled",
      "212": "rick rolled"
    }
  }
};
