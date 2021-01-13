const { EXIT_STRING, EXIT_SOUND } = require('../utils/constants');

exports.CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(EXIT_SOUND + EXIT_STRING)
      .withShouldEndSession(true)
      .getResponse();
  }
};