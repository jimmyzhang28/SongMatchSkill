const Alexa = require('ask-sdk-core');
const artists = {
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
  }  
};
const NUM_QUESTIONS = 3;

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to Song Match. I can help you understand which song by your favorite artist best matches your life. Please tell me the name of your favorite artist.';
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes(); 
    sessionAttributes.questionIndex = 0;
    sessionAttributes.artist = '';
    sessionAttributes.matchId = '';
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  }
};

const SongMatchIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'SongMatchIntent'
      && handlerInput.requestEnvelope.request.dialogState !== 'COMPLETED';
  },
  handle(handlerInput) {
    let userResponse = handlerInput.requestEnvelope.request.intent.slots.answer.value;

    if(userResponse === 'help') return HelpIntentHandler.handle(handlerInput);
    if(userResponse === 'stop' || userResponse === 'cancel') return CancelAndStopIntentHandler.handle(handlerInput);
    if(userResponse === 'repeat') return RepeatIntentHandler.handle(handlerInput);
    
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes(); 
    let speechText = '';
    
    // verify last user answer, then reveal user song match
    if (sessionAttributes.questionIndex === NUM_QUESTIONS) {
      if(!artists[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].includes(userResponse.toUpperCase())) {
        speechText = 'Please say a valid answer. ';
        sessionAttributes.questionIndex -= 1; // do not move on to next step
      }
      else sessionAttributes.matchId += artists[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].indexOf(userResponse.toUpperCase()).toString();
      speechText = 'Based on your response, you got match ' + artists[sessionAttributes.artist].matches[sessionAttributes.matchId] + '. Do you want to play Song Match again?';
    }
    
    // processing user response to play again
    else if (sessionAttributes.questionIndex === NUM_QUESTIONS + 1) {
      if(userResponse === 'no') {
        return CancelAndStopIntentHandler.handle(handlerInput);
      }
      else if (userResponse === 'yes') {
        sessionAttributes.questionIndex = -1;
        sessionAttributes.matchId = '';
        sessionAttributes.artist = '';
        speechText = 'Please tell me another artist!';
      }
      else {
        speechText = 'I need a yes or no.';
        sessionAttributes.questionIndex -= 1; // do not move on to next step
      }
    }
    
    // asking question 1, 2 and 3
    else {
        
      // ensure artist is correct, then ask first question
      if(sessionAttributes.questionIndex === 0) {
        let userArtist = (!userResponse ? handlerInput.requestEnvelope.request.intent.slots.musician.value : userResponse).toUpperCase();
        if(!artists[userArtist]) {
          speechText = 'Please say a valid artist.';
          sessionAttributes.questionIndex -= 1; // do not move on to next step
        }
        else sessionAttributes.artist = userArtist;
      }
      
      // ensure answer to previous question is valid and store it
      else {
        if(!artists[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].includes(userResponse.toUpperCase())) {
          speechText = 'Please say a valid answer. ';
          sessionAttributes.questionIndex -= 1; // do not move on to next step
        }
        else sessionAttributes.matchId += artists[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].indexOf(userResponse.toUpperCase()).toString();
      }
      
      // ask appropiate question
      speechText += sessionAttributes.questionIndex >= 0 ? artists[sessionAttributes.artist].questions[sessionAttributes.questionIndex] : '';
    }
    
    sessionAttributes.questionIndex += 1;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .addElicitSlotDirective('answer')
      .getResponse();
    
  }
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'This is Song Match. I can help you understand which song by your favorite artist best matches your life. Please tell me the name of your favorite artist and answer the following questions.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .addElicitSlotDirective('answer')
      .getResponse();
  }
};

const RepeatIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'RepeatIntent';
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const questionIndex = sessionAttributes.questionIndex;
    let speechText = '';
    
    if(questionIndex === 0) speechText = 'Please say an artist to start Song Match!';
    else if(questionIndex === NUM_QUESTIONS + 1) speechText = 'Based on your response, you got match ' + artists[sessionAttributes.artist].matches[sessionAttributes.matchId] + '. Do you want to play Song Match again?';
    else speechText = artists[sessionAttributes.artist].questions[questionIndex - 1];

    return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .addElicitSlotDirective('answer')
        .getResponse();
  }
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Thanks for playing Song Match!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withShouldEndSession(true)
      .getResponse();
  }
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    //any cleanup logic goes here
    return handlerInput.responseBuilder.getResponse();
  }
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    SongMatchIntentHandler,
    HelpIntentHandler,
    RepeatIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler)
  .addErrorHandlers(ErrorHandler)
  .lambda();