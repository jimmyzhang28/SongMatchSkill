exports.LAUNCH_STRING = 'Welcome to Song Match. I can help you understand which song by your favorite artist best matches your life. Please tell me the name of your favorite artist.';

exports.HELP_STRING = 'This is Song Match. I can help you understand which song by your favorite artist best matches your life. Please tell me the name of your favorite artist and answer the following questions.';

exports.EXIT_STRING = 'Thanks for playing Song Match!';

exports.MATCH_STRING = function (match) {
  return 'Based on your response, you got match ' + match + '. Do you want to play Song Match again?';
}

exports.NUM_QUESTIONS = 3;

exports.ARTISTS = {
  'ARIANA GRANDE' : {
      questions : ['Ariana 1', 'Ariana 2', 'Ariana 3'],
      answers : [['ARIANA 1','ARIANA 2','ARIANA 3'], ['ARIANA 1', 'ARIANA 2', 'ARIANA 3'], ['ARIANA 1', 'ARIANA 2', 'ARIANA 3']],
      matches : {
          "000": "1",
          "001": "2",
          "002": "3",
          "010": "4",
          "011": "5",
          "012": "6",
          "020": "7",
          "021": "8",
          "022": "9",
          "100": "10",
          "101": "11",
          "102": "12",
          "110": "13",
          "111": "14",
          "112": "15",
          "120": "16",
          "121": "17",
          "122": "18",
          "200": "19",
          "201": "20",
          "202": "21",
          "210": "22",
          "211": "23",
          "212": "24",
          "220": "25",
          "221": "26",
          "222": "27"
      }
  },
  'SAINT MOTEL' : {
    questions : ['Motel 1', 'Motel 2', 'Motel 3'],
    answers : [['MOTEL 1','MOTEL 2','MOTEL 3'], ['MOTEL 1', 'MOTEL 2', 'MOTEL 3'], ['MOTEL 1', 'MOTEL 2', 'MOTEL 3']],
    matches : {
        "000": "1",
        "001": "2",
        "002": "3",
        "010": "4",
        "011": "5",
        "012": "6",
        "020": "7",
        "021": "8",
        "022": "9",
        "100": "10",
        "101": "11",
        "102": "12",
        "110": "13",
        "111": "14",
        "112": "15",
        "120": "16",
        "121": "17",
        "122": "18",
        "200": "19",
        "201": "20",
        "202": "21",
        "210": "22",
        "211": "23",
        "212": "24",
        "220": "25",
        "221": "26",
        "222": "27"
    }
  },
  'DRAKE' : {
    questions : ['Drake 1', 'Drake 2', 'Drake 3'],
    answers : [['DRAKE 1','DRAKE 2','DRAKE 3'], ['DRAKE 1', 'DRAKE 2', 'DRAKE 3'], ['DRAKE 1', 'DRAKE 2', 'DRAKE 3']],
    matches : {
        "000": "1",
        "001": "2",
        "002": "3",
        "010": "4",
        "011": "5",
        "012": "6",
        "020": "7",
        "021": "8",
        "022": "9",
        "100": "10",
        "101": "11",
        "102": "12",
        "110": "13",
        "111": "14",
        "112": "15",
        "120": "16",
        "121": "17",
        "122": "18",
        "200": "19",
        "201": "20",
        "202": "21",
        "210": "22",
        "211": "23",
        "212": "24",
        "220": "25",
        "221": "26",
        "222": "27"
    }
  },
  'BILLIE EILISH' : {
    questions : ['Eilish 1', 'Eilish 2', 'Eilish 3'],
    answers : [['EILISH 1','EILISH 2','EILISH 3'], ['EILISH 1', 'EILISH 2', 'EILISH 3'], ['EILISH 1', 'EILISH 2', 'EILISH 3']],
    matches : {
        "000": "1",
        "001": "2",
        "002": "3",
        "010": "4",
        "011": "5",
        "012": "6",
        "020": "7",
        "021": "8",
        "022": "9",
        "100": "10",
        "101": "11",
        "102": "12",
        "110": "13",
        "111": "14",
        "112": "15",
        "120": "16",
        "121": "17",
        "122": "18",
        "200": "19",
        "201": "20",
        "202": "21",
        "210": "22",
        "211": "23",
        "212": "24",
        "220": "25",
        "221": "26",
        "222": "27"
    }
  }
};
