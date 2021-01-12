const { HELP_STRING } = require('../utils/constants');

// only called when user says 'help' before starting the game dialog
exports.HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_STRING)
      .reprompt(HELP_STRING)
      .addElicitSlotDirective('answer')
      .getResponse();
  }
};