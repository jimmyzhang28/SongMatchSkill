const { MATCH_STRING, NUM_QUESTIONS, ARTISTS } = require('../utils/constants');
const { HelpIntentHandler } = require('./HelpIntent');
const { CancelAndStopIntentHandler } = require('./CancelAndStopIntent');
const { RepeatIntentHandler } = require('./RepeatIntent');

exports.SongMatchIntentHandler = {
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
      if(!ARTISTS[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].includes(userResponse.toUpperCase())) {
        speechText = 'Please say a valid answer. ';
        sessionAttributes.questionIndex -= 1; // do not move on to next step
      }
      else sessionAttributes.matchId += ARTISTS[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].indexOf(userResponse.toUpperCase()).toString();
      speechText = MATCH_STRING(ARTISTS[sessionAttributes.artist].matches[sessionAttributes.matchId]);
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
    
    // asking questions
    else {
        
      // ensure artist is correct, then ask first question
      if(sessionAttributes.questionIndex === 0) {
        let userArtist = (!userResponse ? handlerInput.requestEnvelope.request.intent.slots.musician.value : userResponse).toUpperCase();
        if(!ARTISTS[userArtist]) {
          speechText = 'Please say a valid artist.';
          sessionAttributes.questionIndex -= 1; // do not move on to next step
        }
        else sessionAttributes.artist = userArtist;
      }
      
      // ensure answer to previous question is valid and store it
      else {
        if(!ARTISTS[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].includes(userResponse.toUpperCase())) {
          speechText = 'Please say a valid answer. ';
          sessionAttributes.questionIndex -= 1; // do not move on to next step
        }
        else sessionAttributes.matchId += ARTISTS[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].indexOf(userResponse.toUpperCase()).toString();
      }
      
      // ask appropiate question
      speechText += sessionAttributes.questionIndex >= 0 ? ARTISTS[sessionAttributes.artist].questions[sessionAttributes.questionIndex] : '';

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