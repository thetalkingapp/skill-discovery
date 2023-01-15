const Alexa = require('ask-sdk-core');

module.exports.IntentHandler = {
    order: -1,
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Howdy World!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
