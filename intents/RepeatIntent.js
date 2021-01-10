const { MATCH_STRING, ARTISTS, NUM_QUESTIONS } = require('../utils/constants');

exports.RepeatIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'RepeatIntent';
  },
  handle(handlerInput) {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    let speechText = '';
    let curArtist = sessionAttributes.artist;
    let questionIdx = sessionAttributes.questionIndex;
    let matchId = sessionAttributes.matchId;
    
    if(questionIdx === 0) 
      speechText = 'Please say an artist to start Song Match!';
    else if(questionIdx === NUM_QUESTIONS + 1) 
      speechText = MATCH_STRING(ARTISTS[curArtist].matches[matchId]);
    else 
      speechText = ARTISTS[curArtist].questions[questionIdx - 1];

    return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .addElicitSlotDirective('answer')
        .getResponse();
  }
};