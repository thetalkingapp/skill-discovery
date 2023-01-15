const Alexa = require('ask-sdk-core');

const originalSkillBuilderCustom = Alexa.SkillBuilders.custom;

Alexa.SkillBuilders.custom = function() {
    const skillBuilder = originalSkillBuilderCustom();
    discoverRequestHandlers(skillBuilder);
    return skillBuilder;
};

const discoverRequestHandlers = (skillBuilder) => {
    var normalizedPath = require("path").join(__dirname, "request-handlers");
    const handlers = [];
    require("fs").readdirSync(normalizedPath).forEach(function(file) {
        const intentHandler = require("./request-handlers/" + file).IntentHandler;

        // only add if it is duck-wise an intent handler
        if (intentHandler && intentHandler.canHandle && intentHandler.handle) {
            handlers.push(intentHandler);
        }
    });

    handlers.sort((a, b) => {
        const aOrder = a.order || 0;
        const bOrder = b.order || 0;
        return aOrder - bOrder;
    });

    handlers.forEach(handler => {
        skillBuilder.addRequestHandlers(handler);
    });
};
