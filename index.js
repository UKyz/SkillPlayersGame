const Alexa = require('ask-sdk');
const ddbAdapter = require('ask-sdk-dynamodb-persistence-adapter');
// Included in ask-sdk

const SKILL_NAME = 'Quiz joueur football';
const ddbTableName = 'Quiz-joueur-football';
const FALLBACK_MESSAGE_DURING_GAME = `Le jeu ${SKILL_NAME} ne peut pas 
vous aidez. Essayez de deviner le joueur.`;
const FALLBACK_REPROMPT_DURING_GAME = 'Essayez de deviner le joueur.';
const FALLBACK_MESSAGE_OUTSIDE_GAME = `Le jeu ${SKILL_NAME} ne peut pas 
vous aidez. Essayez de deviner le joueur ?`;
const FALLBACK_REPROMPT_OUTSIDE_GAME = 'Dîtes oui pour continuer ou non ' +
	'pour quitter.';

const LaunchRequest = {
  canHandle(handlerInput) {
    // Launch requests as well as any new session, as games are not saved in
    // progress, which makes
    // no one shots a reasonable idea except for help, and the welcome message
    // provides some help.
    return handlerInput.requestEnvelope.session.new ||
			handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  async handle(handlerInput) {
    const {attributesManager} = handlerInput;
    const {responseBuilder} = handlerInput;

    const attributes = await attributesManager.getPersistentAttributes() || {};
    console.log(attributes);
    console.log(Object.keys(attributes));
    if (Object.keys(attributes).length === 0) {
      attributes.endedSessionCount = 0;
      attributes.gamesPlayed = 0;
      attributes.gameState = 'ENDED';
    }

    attributesManager.setSessionAttributes(attributes);

    const speechOutput = `Bienvenue au quiz joueur. Vous avez joué
    ${attributes.gamesPlayed.toString()} fois. Voulez vous faire une partie?`;
    const reprompt = 'Dites oui pour commencer une partie.';
    return responseBuilder
      .speak(speechOutput)
      .reprompt(reprompt)
      .getResponse();
  }
};

const ExitHandler = {
  canHandle(handlerInput) {
    const {request} = handlerInput.requestEnvelope;

    return request.type === 'IntentRequest' &&
			(request.intent.name === 'AMAZON.CancelIntent' ||
				request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('Merci d\'avoir jouer!')
      .getResponse();
  }
};

const SessionEndedRequest = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason:
    ${handlerInput.requestEnvelope.request.reason}`);
    return handlerInput.responseBuilder.getResponse();
  }
};

const HelpIntent = {
  canHandle(handlerInput) {
    const {request} = handlerInput.requestEnvelope;

    return request.type === 'IntentRequest' &&
			request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechOutput = 'Je pense à un joueur de football, je vais vous ' +
			'donner des indices, à vous de trouver le joueur. Vous pouvez me faire' +
			' répéter ou me demander un autre indice.';
    const reprompt = 'Essaie de deviner le joueur.';

    return handlerInput.responseBuilder
      .speak(speechOutput)
      .reprompt(reprompt)
      .getResponse();
  }
};

const YesIntent = {
  canHandle(handlerInput) {
    // Only start a new game if yes is said when not playing a game.
    let isCurrentlyPlaying = false;
    const {request} = handlerInput.requestEnvelope;
    const {attributesManager} = handlerInput;
    const sessionAttributes = attributesManager.getSessionAttributes();
    console.log('attributes : ');
    console.log(attributesManager);
    console.log('session : ');
    console.log(sessionAttributes);

    if (sessionAttributes.gameState &&
			sessionAttributes.gameState === 'STARTED') {
      isCurrentlyPlaying = true;
    }

    return !isCurrentlyPlaying && request.type === 'IntentRequest' &&
			request.intent.name === 'AMAZON.YesIntent';
  },
  handle(handlerInput) {
    const {attributesManager} = handlerInput;
    const {responseBuilder} = handlerInput;
    const sessionAttributes = attributesManager.getSessionAttributes();

    sessionAttributes.gameState = 'STARTED';
    const numberP = Math.floor(Math.random() * (dataPlayers.length + 1));
    sessionAttributes.guessPlayer = dataPlayers[numberP];
	
		const numberS = Math.floor(Math.random() * (dataBegin.length + 1));

    let speechOut = dataBegin[numberS][0];
		if (sessionAttributes.guessPlayer.clubs.length === 1) {
			speechOut += `${sessionAttributes.guessPlayer.clubs[0]}. `;
		} else {
			let cpt = 1;
			shuffle(sessionAttributes.guessPlayer.clubs).forEach(club => {
				if (cpt++ === sessionAttributes.guessPlayer.clubs.length) {
					speechOut += `et ${club}. `;
				} else {
					speechOut += `${club}, `;
				}
			});
		}
    speechOut += dataBegin[numberS][1];

    return responseBuilder
      .speak(speechOut)
      .reprompt('Essaie de deviner le joueur')
      .getResponse();
  }
};

const NoIntent = {
  canHandle(handlerInput) {
    // Only treat no as an exit when outside a game
    let isCurrentlyPlaying = false;
    const {request} = handlerInput.requestEnvelope;
    const {attributesManager} = handlerInput;
    const sessionAttributes = attributesManager.getSessionAttributes();
    console.log('attributes : ');
    console.log(attributesManager);
    console.log('session : ');
    console.log(sessionAttributes);

    if (sessionAttributes.gameState &&
			sessionAttributes.gameState === 'STARTED') {
      isCurrentlyPlaying = true;
    }

    return !isCurrentlyPlaying && request.type === 'IntentRequest' &&
			request.intent.name === 'AMAZON.NoIntent';
  },
  async handle(handlerInput) {
    const {attributesManager} = handlerInput;
    const {responseBuilder} = handlerInput;
    const sessionAttributes = attributesManager.getSessionAttributes();

    sessionAttributes.endedSessionCount += 1;
    sessionAttributes.gameState = 'ENDED';
    attributesManager.setPersistentAttributes(sessionAttributes);

    await attributesManager.savePersistentAttributes();

    return responseBuilder.
			speak('D\'accord, à bientôt!').getResponse();
  }
};

const UnhandledIntent = {
  canHandle() {
    return true;
  },
  handle(handlerInput) {
    const outputSpeech = 'Je n\'ai pas compris. Réésayez';
    return handlerInput.responseBuilder
      .speak(outputSpeech)
      .reprompt(outputSpeech)
      .getResponse();
  }
};

const PlayerGuessIntent = {
  canHandle(handlerInput) {
    // Handle numbers only during a game
    let isCurrentlyPlaying = false;
    const {request} = handlerInput.requestEnvelope;
    const {attributesManager} = handlerInput;
    const sessionAttributes = attributesManager.getSessionAttributes();
    console.log('attributes : ');
    console.log(attributesManager);
    console.log('session : ');
    console.log(sessionAttributes);

    if (sessionAttributes.gameState &&
			sessionAttributes.gameState === 'STARTED') {
      isCurrentlyPlaying = true;
    }

    return isCurrentlyPlaying && request.type === 'IntentRequest' &&
			request.intent.name === 'PlayerGuessIntent';
  },
  async handle(handlerInput) {
    const {requestEnvelope, attributesManager, responseBuilder} = handlerInput;

    const guessPlayer = requestEnvelope.request.intent.slots.Player
      .resolutions.resolutionsPerAuthority[0].values[0].value.name;
    const sessionAttributes = attributesManager.getSessionAttributes();
    const targetPlayer = sessionAttributes.guessPlayer.name;
		const number = Math.floor(Math.random() * (dataPlayerFound.length + 1));

    if (targetPlayer.toLowerCase() === guessPlayer.toLowerCase()) {
      sessionAttributes.gamesPlayed += 1;
      sessionAttributes.gameState = 'ENDED';
      attributesManager.setPersistentAttributes(sessionAttributes);
      await attributesManager.savePersistentAttributes();
      return responseBuilder
        .speak(dataPlayerFound[number][0] + guessPlayer.toString() +
				dataPlayerFound[number][1])
        .reprompt('Dîtes oui pour redémarrer, ou non pour quitter.')
        .getResponse();
    }

    return responseBuilder
			.speak(dataPlayerNotFound[number][0] + guessPlayer.toString() +
				dataPlayerNotFound[number][1])
      .reprompt('Essaies quelqu\'un d\'autre')
      .getResponse();
  }
};

const AskClueIntent = {
	canHandle(handlerInput) {
		// Handle numbers only during a game
		let isCurrentlyPlaying = false;
		const {request} = handlerInput.requestEnvelope;
		const {attributesManager} = handlerInput;
		const sessionAttributes = attributesManager.getSessionAttributes();
		console.log('attributes : ');
		console.log(attributesManager);
		console.log('session : ');
		console.log(sessionAttributes);
		
		if (sessionAttributes.gameState &&
			sessionAttributes.gameState === 'STARTED') {
			isCurrentlyPlaying = true;
		}
		
		return isCurrentlyPlaying && request.type === 'IntentRequest' &&
			request.intent.name === 'AskClueIntent';
	},
	async handle(handlerInput) {
		const {requestEnvelope, attributesManager, responseBuilder} = handlerInput;
		
		const sessionAttributes = attributesManager.getSessionAttributes();
		const targetPlayerClue = sessionAttributes.guessPlayer.clue;
		const number = Math.floor(Math.random() * (dataAskClue.length + 1));
		
		return responseBuilder
			.speak(dataAskClue[number] + targetPlayerClue)
			.reprompt(`Indice: ${targetPlayerClue}`)
			.getResponse();
	}
};

const RepeatIntent = {
	canHandle(handlerInput) {
		// Handle numbers only during a game
		let isCurrentlyPlaying = false;
		const {request} = handlerInput.requestEnvelope;
		const {attributesManager} = handlerInput;
		const sessionAttributes = attributesManager.getSessionAttributes();
		console.log('attributes : ');
		console.log(attributesManager);
		console.log('session : ');
		console.log(sessionAttributes);
		
		if (sessionAttributes.gameState &&
			sessionAttributes.gameState === 'STARTED') {
			isCurrentlyPlaying = true;
		}
		
		return isCurrentlyPlaying && request.type === 'IntentRequest' &&
			request.intent.name === 'RepeatIntent';
	},
	async handle(handlerInput) {
		const {requestEnvelope, attributesManager, responseBuilder} = handlerInput;
		const sessionAttributes = attributesManager.getSessionAttributes();
		const number = Math.floor(Math.random() * (dataRepeat.length + 1));
		
		let speechOut = dataRepeat[number][0];
		if (sessionAttributes.guessPlayer.clubs.length === 1) {
			speechOut += `${sessionAttributes.guessPlayer.clubs[0]}. `;
		} else {
			let cpt = 1;
			sessionAttributes.guessPlayer.clubs.forEach(club => {
				if (cpt++ === sessionAttributes.guessPlayer.clubs.length) {
					speechOut += `et ${club}. `;
				} else {
					speechOut += `${club}, `;
				}
			});
		}
		speechOut += dataRepeat[number][1];
		
		return responseBuilder
			.speak(speechOut)
			.reprompt('Essaie de deviner le joueur')
			.getResponse();
	}
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
	
		const number = Math.floor(Math.random() * (dataErrors.length + 1));

    return handlerInput.responseBuilder
      .speak(dataErrors[number])
      .reprompt(dataErrors[number])
      .getResponse();
  }
};

const FallbackHandler = {
  canHandle(handlerInput) {
    // Handle fallback intent, yes and no when playing a game
    // for yes and no, will only get here if and not caught by the normal
    // intent handler
    const {request} = handlerInput.requestEnvelope;
    return request.type === 'IntentRequest' &&
			(request.intent.name === 'AMAZON.FallbackIntent' ||
				request.intent.name === 'AMAZON.YesIntent' ||
				request.intent.name === 'AMAZON.NoIntent');
  },
  handle(handlerInput) {
    const {attributesManager} = handlerInput;
    const sessionAttributes = attributesManager.getSessionAttributes();

    if (sessionAttributes.gameState &&
			sessionAttributes.gameState === 'STARTED') {
      // Currently playing
      return handlerInput.responseBuilder
        .speak(FALLBACK_MESSAGE_DURING_GAME)
        .reprompt(FALLBACK_REPROMPT_DURING_GAME)
        .getResponse();
    }

    // Not playing
    return handlerInput.responseBuilder
      .speak(FALLBACK_MESSAGE_OUTSIDE_GAME)
      .reprompt(FALLBACK_REPROMPT_OUTSIDE_GAME)
      .getResponse();
  }
};

function getPersistenceAdapter(tableName) {
  // Determines persistence adapter to be used based on environment
  // Note: tableName is only used for DynamoDB Persistence Adapter
  if (process.env.S3_PERSISTENCE_BUCKET) {
    // In Alexa Hosted Environment
    const s3Adapter = require('ask-sdk-s3-persistence-adapter');
    return new s3Adapter.S3PersistenceAdapter({
      bucketName: process.env.S3_PERSISTENCE_BUCKET
    });
  }

  // Not in Alexa Hosted Environment
  return new ddbAdapter.DynamoDbPersistenceAdapter({
    tableName,
    createTable: true
  });
}

const dataBegin = [
	['J\'ai en tête un joueur de football. Il a joué, pas forcément dans' +
	' l\'ordre, dans les clubs suivant : ', 'Essayez de deviner le joueur !'],
	['Je pense à un joueur actuellement. Il est passé par ces clubs là : ',
		'C\'est à vous de trouver le joueur.'],
	['J\'ai en tête un joueur de football, voici les clubs dans lesquels il a' +
	' évolué au cours de sa carrière : ', 'Essayez de deviner le joueur !'],
	['Je pense à un joueur. Il a joué, pas forcément dans l\'ordre, dans les' +
	' clubs suivant : ', 'À vous de joueur, essayez de trouver le joueur !']
];

const dataErrors = [
	'Désolé, je n\'ai pas compris, veuillez répéter s\'il vous plait.',
	'Mince, je ne comprend pas, pouvez vous répéter.',
	'Euh, je n\'ai pas compris, pouvez vous répéter.',
	'Désolé, je ne comprend pas, pouvez vous répéter.',
	'Mince, je n\'ai pas compris, veuillez répéter s\'il vous plait.'
];

const dataPlayerFound = [
	['', ' est le bon joueur ! Voulez vous rejouer ?'],
	['Vous avez trouvé, ', ' est le bon joueur ! Encore une partie ?'],
	['Mais vous lisez dans mes pensées ! Je pensais à ', '. Voulez vous' +
	' rejouer ?'],
	['Bien joué, ', ' est le bon joueur ! On refait une partie ?']
];

const dataPlayerNotFound = [
	['', ' n\'est pas le bon joueur ! Rééssayez.'],
	['Dommage, ', ' n\'est pas le bon joueur ! Essayez encore.'],
	['Ce n\'est pas bon, ce n\'est pas ', '. Rééssayez.'],
	['Mince ce n\'est pas ', '. Essayez encore !']
];

const dataAskClue = [
	'Voici l\'indice : ',
	'J\'ai un indice pour vous : ',
	'Pas de souci, le voici : ',
	'Je peux vous donner un indice, le voilà : ',
	'J\'espère que cela vous aidera : ',
	'Voici une petite aide pour vous : '
];

const dataRepeat = [
	['Pas de soucis, je peux répéter, voici ses clubs : ', '. Essayez de' +
	' deviner le joueur.'],
	['Voici ses clubs : ', 'À vous de jouer.'],
	['Vous avez déjà oublié ? Pas de soucis, je vais vous redire ses clubs : ',
		'. À vous de deviner'],
	['Je vais vous répéter, voici ses clubs : ', '. Vous l\'avez maintenant ?']
];

const dataPlayers = [
	{
		name: 'Cristiano Ronaldo',
		clubs: ['Sporting', 'Manchester United', 'Réal Madrid', 'Juventus'],
		clue: 'J\'ai gagné 5 ballons d\'or',
		nickname: ['ronaldo', 'cr7']
	},
	{
		name: 'Lionel Messi',
		clubs: ['Barcelone'],
		clue: 'J\'ai gagné 5 ballons d\'or',
		nickname: ['léo messi', 'messi', 'la pulga']
	},
	{
		name: 'Kylian Mbappé',
		clubs: ['Monaco', 'Paris'],
		clue: 'J\'ai gagné la coupe du monde 2018',
		nickname: ['mbappé']
	},
	{
		name: 'Neymar Junior',
		clubs: ['Santos', 'Barcelone', 'Paris'],
		clue: 'Je me blesse souvent au métatarsse',
		nickname: ['le ney', 'neymar']
	},
	{
		name: 'Eden Hazard',
		clubs: ['Lille', 'Chelsea'],
		clue: 'Je suis Belge.',
		nickname: ['hazard']
	},
	{
		name: 'Paul Pogba',
		clubs: ['Manchester United', 'Juventus'],
		clue: 'Je suis champion du monde 2018.',
		nickname: ['pogba', 'la pioche']
	},
	{
		name: 'Antoine Griezmann',
		clubs: ['Real Sociedad', 'Atletico de Madrid'],
		clue: 'Je célébre mes buts comme sur Fortnite',
		nickname: ['griezmann', 'grizman', 'grizi']
	},
	{
		name: 'Edinson Cavani',
		clubs: ['Dunabio', 'Palerme', 'Naples', 'Paris'],
		clue: 'Je suis le meilleur buteur du PSG.',
		nickname: ['cavani', 'matador']
	},
	{
		name: 'Paul Pogba',
		clubs: ['Manchester United', 'Juventus'],
		clue: 'Je suis champion du monde 2018.',
		nickname: ['pogba', 'la pioche']
	},
];

const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .withPersistenceAdapter(getPersistenceAdapter(ddbTableName))
  .addRequestHandlers(
    LaunchRequest,
    ExitHandler,
    SessionEndedRequest,
    HelpIntent,
    YesIntent,
    NoIntent,
    PlayerGuessIntent,
		AskClueIntent,
    RepeatIntent,
    FallbackHandler,
    UnhandledIntent,
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
