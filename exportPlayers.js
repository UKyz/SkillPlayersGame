const ResultSave = require('./saveToCSV');

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

const exportPlayers = () => {
	dataPlayers.forEach(player => {
		player.clubs = '';
		delete player.clue;
	});
	const players = new ResultSave('', 'players', ['', '', '']);
	players.data = dataPlayers;
	players.saveAsCsv();
};

exportPlayers();