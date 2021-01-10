const Alexa = require('ask-sdk-core');
const { LaunchRequestHandler } = require('./intents/LaunchRequest');
const { SongMatchIntentHandler } = require('./intents/SongMatchIntent');
const { HelpIntentHandler } = require('./intents/HelpIntent');
const { RepeatIntentHandler } = require('./intents/RepeatIntent');
const { CancelAndStopIntentHandler } = require('./intents/CancelAndStopIntent');
const { SessionEndedRequestHandler } = require('./intents/SessionEndedRequest');
const { ErrorHandler } = require('./intents/ErrorHandler');

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