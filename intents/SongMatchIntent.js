const { MATCH_STRING, NUM_QUESTIONS, ARTISTS } = require('../utils/constants');
const { HelpIntentHandler } = require('./HelpIntent');
const { CancelAndStopIntentHandler } = require('./CancelAndStopIntent');

exports.SongMatchIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'SongMatchIntent'
      && handlerInput.requestEnvelope.request.dialogState !== 'COMPLETED';
  },
  handle(handlerInput) {

    let userResponse = handlerInput.requestEnvelope.request.intent.slots.answer.value;

    // initialMusician is the trigger for SongMatchIntent, only used for the first musician the user says
    // every other response will go to the 'answer' slot (userResponse)
    let initialMusician = handlerInput.requestEnvelope.request.intent.slots.musician.value;

    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes(); 

    let speechText = '';

    // basic and likely interruptions
    if(userResponse === 'help') return HelpIntentHandler.handle(handlerInput);
    if(userResponse === 'stop' || userResponse === 'cancel') return CancelAndStopIntentHandler.handle(handlerInput);
    if(userResponse === 'repeat') {
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
    
    // verify last user answer, then reveal user song match
    if (sessionAttributes.questionIndex === NUM_QUESTIONS) {
      if(!ARTISTS[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].includes(userResponse.toUpperCase())) {
        speechText = 'Please say a valid answer. ' + ARTISTS[sessionAttributes.artist].questions[sessionAttributes.questionIndex - 1];
        sessionAttributes.questionIndex -= 1; // do not move on to next step
      }
      else {
        sessionAttributes.matchId += ARTISTS[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].indexOf(userResponse.toUpperCase()).toString();
        speechText = MATCH_STRING(ARTISTS[sessionAttributes.artist].matches[sessionAttributes.matchId]);
      }
    }
    
    // processing user response to play again
    else if (sessionAttributes.questionIndex === NUM_QUESTIONS + 1) {
      if(userResponse === 'no') {
        return CancelAndStopIntentHandler.handle(handlerInput);
      }
      else if (userResponse === 'yes') {
        // reset data to play again
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

      let includeQuestionNumber = true; // just for smoothness when prompting the user
        
      // ensure artist is correct, then ask first question
      if(sessionAttributes.questionIndex === 0) {
        let userArtist = (!userResponse ? initialMusician : userResponse).toUpperCase();
        if(!ARTISTS[userArtist]) {
          speechText = 'Please say a valid artist.';
          sessionAttributes.questionIndex -= 1; // do not move on to next step
          includeQuestionNumber = false;
        }
        else {
          // successfully start game
          sessionAttributes.artist = userArtist;
          let artistName = ARTISTS[userArtist].name;
          speechText = artistName + ', nice choice! Now answer these ' + NUM_QUESTIONS.toString() + ' questions, and we will get your ' + artistName + ' song! '; 
        }
      }
      
      // ensure answer to previous question is valid and store it
      else {
        if(!ARTISTS[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].includes(userResponse.toUpperCase())) {
          speechText = 'Please say a valid answer. ';
          sessionAttributes.questionIndex -= 1; // do not move on to next step
          includeQuestionNumber = false;
        }
        else {
          // add answer to match id, which consists of indices of the user answers
          sessionAttributes.matchId += ARTISTS[sessionAttributes.artist].answers[sessionAttributes.questionIndex - 1].indexOf(userResponse.toUpperCase()).toString();
        }
      }
      
      // ask appropiate question
      speechText += includeQuestionNumber ? (sessionAttributes.questionIndex >= 1 ? 'Got it! ' : '') + 'Question ' + (sessionAttributes.questionIndex + 1) + '. ' : '';
      speechText += sessionAttributes.questionIndex >= 0 ? ARTISTS[sessionAttributes.artist].questions[sessionAttributes.questionIndex] : '';

    }
    
    // progress the game
    sessionAttributes.questionIndex += 1;
    handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .addElicitSlotDirective('answer')
      .getResponse();
    
  }
};