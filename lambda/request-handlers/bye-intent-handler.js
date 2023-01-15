const Alexa = require('ask-sdk-core');

module.exports.IntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'ByeIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Bye World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
