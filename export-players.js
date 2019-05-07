const ResultSave = require('./save-to-csv');

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
    name: 'Antoine Griezmann',
    clubs: ['Real Sociedad', 'Atletico de Madrid'],
    clue: 'Je célébre mes buts comme sur Fortnite',
    nickname: ['griezmann', 'grizman', 'grizi']
  },
  {
    name: 'Paul Pogba',
    clubs: ['Manchester United', 'Juventus'],
    clue: 'Je suis champion du monde 2018.',
    nickname: ['pogba', 'la pioche']
  },
	{
		name: 'Thiago Silva',
		clubs: ['E C Juventude', 'Fluminense', 'A C Milan', 'Paris'],
		clue: 'Je suis le capitaine du PSG.',
		nickname: ['silva', 'monstro']
	},
	{
		name: 'Edinson Cavani',
		clubs: ['Dunabio', 'Palerme', 'Naples', 'Paris'],
		clue: 'Je suis le meilleur buteur du PSG.',
		nickname: ['cavani', 'matador']
	},
	{
		name: 'Angel Di Maria',
		clubs: ['Rosario', 'Benfica', 'Réal Madrid', 'Manchester United', 'Paris'],
		clue: 'J\'ai gagné la décima du réal de madrid',
		nickname: ['di maria']
	},
	{
		name: 'Leandro Paredes',
		clubs: ['Boca Junior', 'A S Rome', 'Empoli', 'Zénith Saint Petersbourg',
			'Paris'],
		clue: 'Je suis argentin.',
		nickname: ['paredes', 'paredesse']
	},
	{
		name: 'Juan Bernat',
		clubs: ['Valence', 'Bayern Munich', 'Paris'],
		clue: 'Je suis espagnol.',
		nickname: ['bernat', 'bernatte']
	},
	{
		name: 'Alphone Aréola',
		clubs: ['Lens', 'Bastia', 'Villareal', 'Paris'],
		clue: 'Je suis champion du monde 2018',
		nickname: ['aréola']
	},
	{
		name: 'José Fonte',
		clubs: ['Crystal Palace', 'Southampton', 'West Ham', 'Lille'],
		clue: 'J\'ai gagné l\'euro 2016.',
		nickname: ['fonte', 'fonté']
	},
	{
		name: 'Loïc Rémy',
		clubs: ['Lyon', 'Lens', 'Nice', 'Marseille', 'Newcastle', 'Chelsea',
			'Lille'],
		clue: 'Je suis français.',
		nickname: ['Rémy']
	},
	{
		name: 'Menphis Depay',
		clubs: ['P S V Heindoven', 'Manchester United', 'Lyon'],
		clue: 'Je suis hollandais.',
		nickname: ['depay', 'depaille']
	},
	{
		name: 'Marcelo',
		clubs: ['Santos', 'Cracovie', 'P S V Heindoven', 'Hanovre', 'Besiktas',
			'Lyon'],
		clue: 'Je suis brésilien.',
		nickname: ['marcelo']
	},
	{
		name: 'Jason Denayer',
		clubs: ['Celtic', 'Galatasaray', 'Sunderland', 'Lyon'],
		clue: 'Je suis belge.',
		nickname: ['denayer', 'denéyer', 'denalleure', 'jason denalleure',
			'jason denéyer']
	},
	{
		name: 'Mapou Yanga MBiwa',
		clubs: ['Montpellier', 'Newcastle', 'A S Rome', 'Lyon'],
		clue: 'Je suis le français.',
		nickname: ['Yanga MBiwa', 'Mbiwa', 'Mapou Mbiwa']
	},
	{
		name: 'Bertrand Traoré',
		clubs: ['Chelsea', 'Vitesse', 'Ajax Amsterdam', 'Lyon'],
		clue: 'Je suis hollandais.',
		nickname: ['traoré']
	},
	{
		name: 'Aymen Abdennour',
		clubs: ['Étoile du Sahel', 'Toulouse', 'Monaco', 'Valence', 'Marseille'],
		clue: 'Je suis tunisien.',
		nickname: ['abdennour']
	},
	{
		name: 'Adil Rami',
		clubs: ['Lille', 'Valence', 'A C Milan', 'Séville', 'Marseille'],
		clue: 'Je suis champion du monde 2018.',
		nickname: ['Rami']
	},
	{
		name: 'Diego Benaglio',
		clubs: ['Stuttgart', 'C D National', 'Wolfsbourg', 'Monaco'],
		clue: 'Je suis suisse.',
		nickname: ['benaglio']
	},
	{
		name: 'Naldo',
		clubs: ['R S Futebol', 'Werder Breme', 'Wolfsbourg', 'Schalke', 'Monaco'],
		clue: 'Je suis brésilien.',
		nickname: ['naldo']
	},
	{
		name: 'Cesc Fabregas',
		clubs: ['Arsenal', 'Barcelone', 'Chelsea', 'Monaco'],
		clue: 'Je suis champion du monde 2010.',
		nickname: ['Fabregas', 'Fabregasse']
	},
	{
		name: 'Rony Lopes',
		clubs: ['Manchester City', 'Lille', 'Monaco'],
		clue: 'Je suis portugais.',
		nickname: ['Lopes', 'Lopesse']
	},
	{
		name: 'George Kevin Nkoudou',
		clubs: ['Nantes', 'Marseille', 'Tottenham', 'Burnley', 'Monaco'],
		clue: 'Je suis français.',
		nickname: ['george nkoudou', 'nkoudou', 'kevin nkoudou']
	},
	{
		name: 'Dante',
		clubs: ['Lille', 'Bayern Munich', 'Standard de Liège', 'Borussia Munchen' +
		' gladbach', 'Wolfsburg', 'Nice'],
		clue: 'J\'ai gagné le coupe des confédérations 2013 avec le Brésil.',
		nickname: ['Dante', 'Danté']
	},
	{
		name: 'Luiz Gustavo',
		clubs: ['Hoffenheim', 'Bayern Munich', 'Wolfsbourg', 'Marseille'],
		clue: 'J\'étais titulaire lors de la demi final 7 1 au Brésil.',
		nickname: ['Gustavo']
	},
	{
		name: 'Christophe Jallet',
		clubs: ['Niort', 'Lorient', 'Paris', 'Lyon', 'Nice'],
		clue: 'J\'étais dans les 23 pour la france en 2016.',
		nickname: ['Jallet']
	},
	{
		name: 'Jimmy Briand',
		clubs: ['Rennes', 'Lyon', 'Hanovre', 'Guingamp', 'Bordeaux'],
		clue: 'Mon homonyme est chanteur et s\'apelle Dany.',
		nickname: ['Briand', 'brillant']
	},
	{
		name: 'Jaroslav Plasil',
		clubs: ['Monaco', 'Osasuna', 'Bordeaux', 'Calcio Catane'],
		clue: 'Je suis tchéque.',
		nickname: ['Plasil']
	},
	{
		name: 'Hatem Ben Arfa',
		clubs: ['Lyon', 'Marseille', 'Newcastle', 'Nice', 'Paris', 'Rennes'],
		clue: 'Je suis français.',
		nickname: ['Ben arfa']
	},
	{
		name: 'Mathieu Debuchy',
		clubs: ['Lille', 'Newcastle', 'Arsenal', 'Bordeaux', 'Saint-Étienne'],
		clue: 'Je suis titulaire pour la france à la coupe du monde 2014.',
		nickname: ['debuchy']
	},
	{
		name: 'Wahbi Khazri',
		clubs: ['Bastia', 'Bordeaux', 'Sunderland', 'Rennes', 'Saint-Étienne'],
		clue: 'Je suis tunisien.',
		nickname: ['khazri', 'kazri']
	},
	{
		name: 'Yann M\'Villa',
		clubs: ['Rennes', 'Rubin Kazan', 'Inter Milan', 'Sunderland',
			'Saint-Étienne'],
		clue: 'Je suis français.',
		nickname: ['m\'villa', 'aimevilla']
	},
	{
		name: 'Rémy Cabella',
		clubs: ['Montpellier', 'Newcastle', 'Marseille', 'Saint-Étienne'],
		clue: 'Je suis français.',
		nickname: ['cabella', 'cabéla', 'rémy cabéla']
	},
	{
		name: 'Kevin Monnet Paquet',
		clubs: ['Lens', 'Lorient', 'Saint-Étienne'],
		clue: 'Je suis franco-rwandais.',
		nickname: ['monnet paquet']
	},
	{
		name: 'Loïs Diony',
		clubs: ['Nantes', 'Dijon', 'Saint-Étienne'],
		clue: 'Je joue actuellement à Saint-Étienne.',
		nickname: ['diony']
	},
	{
		name: 'Dejan Lovren',
		clubs: ['Ninamo Zagreb', 'Inter Zapresic', 'Lyon', 'Southampton',
			'Liverpool'],
		clue: 'Je suis Croate.',
		nickname: ['lovren', 'lovrenne']
	},
	{
		name: 'Virgil Van Dijk',
		clubs: ['Groningue', 'Celtic', 'Southampton', 'Liverpool'],
		clue: 'J\'ai était élu meilleur joueur de la saison 2018-2019 en' +
			' Premiere League.',
		nickname: ['van dijk', 'van dailleque', 'virgil wan dailleque', 'van dyk',
			'virgil van dyk']
	},
	{
		name: 'Fabinho',
		clubs: ['Real Madrid', 'Monaco', 'Liverpool'],
		clue: 'Je suis Brésilien.',
		nickname: ['fabinio']
	},
	{
		name: 'Jordan Henderson',
		clubs: ['Sunderland', 'Coventry', 'Liverpool'],
		clue: 'Je suis Anglais.',
		nickname: ['henderson']
	},
	{
		name: 'James Milner',
		clubs: ['Leeds', 'Aston Villa', 'Newcastle', 'Manchester City',
			'Liverpool'],
		clue: 'Je suis champion d\'angleterre en 2012 et 2014.',
		nickname: ['Milner', 'milneure', 'james milneure']
	},
	{
		name: 'Sadio Mané',
		clubs: ['Metz', 'Salzbourg', 'Southampton',
			'Liverpool'],
		clue: 'Je suis Sénégalais.',
		nickname: ['mané']
	},
	{
		name: 'Mohamed Salah',
		clubs: ['Bâle', 'Chelsea', 'Fiorentina', 'A S Rome',
			'Liverpool'],
		clue: 'Je suis Égyptien.',
		nickname: ['salah']
	},
	{
		name: 'Xherdan Shaqiri',
		clubs: ['Bâle', 'Bayern Munich', 'Inter Milan', 'Stoke City',
			'Liverpool'],
		clue: 'Je suis Suisse.',
		nickname: ['shaqiri']
	},
	{
		name: 'Georginio Wijnaldum',
		clubs: ['Feynoord Rotterdam', 'P S V Eindhoven', 'Newcastle',
			'Liverpool'],
		clue: 'Je suis finaliste de la C1 en 2018.',
		nickname: ['wijnaldum', 'wijnaldoume', 'georginio wijdaldoume']
	},
	{
		name: 'Daniel Sturridge',
		clubs: ['Manchester City', 'Chelsea', 'Bolton', 'West Bromwich',
			'Liverpool'],
		clue: 'Je suis vainqueur de la C1 en 2012.',
		nickname: ['sturridge']
	},
	{
		name: 'Claudio Bravo',
		clubs: ['Colo-colo', 'Réal Sociedad', 'Barcelone',
			'Manchester City'],
		clue: 'Je suis Chilien.',
		nickname: ['bravo']
	},
	{
		name: 'Danilo',
		clubs: ['Santos', 'Porto', 'Réal Madrid',
			'Manchester City'],
		clue: 'Je suis Brésilien.',
		nickname: ['danilo']
	},
	{
		name: 'Eliaquim Mangala',
		clubs: ['Standard de Liège', 'Porto', 'Valence', 'Everton',
			'Manchester City'],
		clue: 'Je suis Français.',
		nickname: ['mangala']
	},
	{
		name: 'Ilkay Gundogan',
		clubs: ['Nuremberg', 'Dortmund', 'Manchester City'],
		clue: 'Je suis champion d\'Angletter 2018.',
		nickname: ['gundogan']
	},
	{
		name: 'David Silva',
		clubs: ['Eibar', 'Celta Vigo', 'Valence',
			'Manchester City'],
		clue: 'Je suis champion du monde 2010.',
		nickname: ['silva']
	},
	{
		name: 'Riyad Mahrez',
		clubs: ['Le Havre', 'Leicester', 'Manchester City'],
		clue: 'Je suis champion d\'Angleterre 2016.',
		nickname: ['mahrez']
	},
	{
		name: 'Wilfredo Caballero',
		clubs: ['Boca Junior', 'Elche', 'Malaga', 'Manchester City',
			'Chelsea'],
		clue: 'Je suis Argentin.',
		nickname: ['caballero']
	},
	{
		name: 'Cesar Azpilicueta',
		clubs: ['Osasuna', 'Marseille', 'Chelsea'],
		clue: 'Je suis champion d\'angleterre 2015 et 2017.',
		nickname: ['azpilicueta']
	},
	{
		name: 'David Luiz',
		clubs: ['Benfica', 'Paris', 'Chelsea'],
		clue: 'J\'étais titulaire en demi final de coupe du monde 2014 Brésil' +
			' Allemagne.',
		nickname: ['david luiz']
	},
	{
		name: 'Jorginho',
		clubs: ['Hellas Vérone', 'Naples', 'Chelsea'],
		clue: 'Je suis Italien.',
		nickname: ['jorginho']
	},
	{
		name: 'Olivier Giroud',
		clubs: ['Grenoble', 'Istres', 'Tours', 'Montpellier', 'Arsenal',
			'Chelsea'],
		clue: 'Je suis champion du monde 2018.',
		nickname: ['giroud']
	},
	{
		name: 'Gonzalo Higuain',
		clubs: ['River Plate', 'Réal Madrid', 'Naples', 'Juventus', 'A C Milan',
			'Chelsea'],
		clue: 'Je suis champion d\'Espagne 2007, 2008 et 2012.',
		nickname: ['higuain', 'Igouénne', 'Gonzalo Igouénne']
	},
	{
		name: 'Dany Rose',
		clubs: ['Watford', 'Bristol City', 'Sunderland', 'Tottenham'],
		clue: 'Je suis Anglais.',
		nickname: ['rose']
	},
	{
		name: 'Moussa Sissoko',
		clubs: ['Toulouse', 'Newcastle', 'Tottenham'],
		clue: 'Je suis finaliste de l\'Euro 2016.',
		nickname: ['sissoko']
	},
	{
		name: 'Fernando Llorente',
		clubs: ['Athletic Bilbao', 'Juventus', 'Séville', 'Swansea', 'Tottenham'],
		clue: 'Je suis champion du monde 2010.',
		nickname: ['llorente', 'liorenté']
	},
	{
		name: 'Toby Alderweireld',
		clubs: ['Ajax Amsterdam', 'Atlético Madrid', 'Southampton', 'Tottenham'],
		clue: 'Je suis champion d\'Espagne 2014.',
		nickname: ['alderweireld']
	},
	{
		name: 'Stephan Lichtsteiner',
		clubs: ['Grasshopper Zurich', 'Lille', 'Lazio Rome', 'Juventus', 'Arsenal'],
		clue: 'J\'ai étais champion d\'Italie entre 2012 et 2018.',
		nickname: ['lichteiner']
	},
	{
		name: 'Nacho Monreal',
		clubs: ['Osasuna', 'Malaga', 'Arsenal'],
		clue: 'Je suis espagnol.',
		nickname: ['monréal']
	},
	{
		name: 'Laurent Koscielny',
		clubs: ['Guingamp', 'Tours', 'Lorient', 'Arsenal'],
		clue: 'J\'étais en final de l\'euro 2016.',
		nickname: ['koscielny', 'kossielni', 'laurent kossielny']
	},
	{
		name: 'Shkodran Mustafi',
		clubs: ['Everton', 'Sampdoria', 'Valence', 'Arsenal'],
		clue: 'Je suis champion du monde 2014.',
		nickname: ['mustafi']
	},
	{
		name: 'Henrikh Mkhitaryan',
		clubs: ['Pyunik Erevan', 'Chaktior Donetsk', 'Dortmund', 'Manchester' +
		' United', 'Arsenal'],
		clue: 'J\'ai gagné la C3 en 2017.',
		nickname: ['aimekitarian','henrikh aimekitarian']
	},
	{
		name: 'Granit Xhaka',
		clubs: ['Bâle', 'Borussia Munchen Galdbach', 'Arsenal'],
		clue: 'Je suis suisse.',
		nickname: ['chaca', 'xhaka', 'granit chaca']
	},
	{
		name: 'Mezut Özil',
		clubs: ['Schalke', 'Werder Brême', 'Réal Madrid', 'Arsenal'],
		clue: 'Je suis champion du monde 2014.',
		nickname: ['ozil', 'euzil', 'mezut euzil']
	},
	{
		name: 'Dany Welbeck',
		clubs: ['Manchester United', 'Preston', 'Sunderland', 'Arsenal'],
		clue: 'Mon homonyme est un écrivain français.',
		nickname: ['welbeck']
	},
	{
		name: 'Sergio Romero',
		clubs: ['A Z Alkmaar', 'Sampdoria', 'Monaco', 'Manchester United'],
		clue: 'Je suis argentin.',
		nickname: ['romero']
	},
	{
		name: 'Matteo Darmian',
		clubs: ['A C Milan', 'Palerme', 'Padoue', 'Torino', 'Manchester United'],
		clue: 'Je suis italien.',
		nickname: ['darmian', 'darmianne', 'matteo darmianne']
	},
	{
		name: 'Ander Herrera',
		clubs: ['Saragosse', 'Athletic Bilbao', 'Manchester United'],
		clue: 'Je suis vainqueur de la C3 2017.',
		nickname: ['herrera']
	},
	{
		name: 'Nemanja Matic',
		clubs: ['Kosice', 'Chelsea', 'Vitesse', 'Benfica', 'Manchester United'],
		clue: 'Je suis champion d\'Angleterre 2010, 2015 et 2017.',
		nickname: ['matic', 'matiche', 'matitche', 'nemanja matiche',
			'nemanja matitche']
	},
	{
		name: 'Ashley Young',
		clubs: ['Watford', 'Aston Villa', 'Manchester United'],
		clue: 'Je suis anglais.',
		nickname: ['young']
	},
	{
		name: 'Juan Mata',
		clubs: ['Valence', 'Chelsea', 'Manchester United'],
		clue: 'Je suis champion du monde 2010.',
		nickname: ['ruan mata', 'mata']
	},
	{
		name: 'Alexis Sanchez',
		clubs: ['Colo colo', 'River Plate', 'Uninese', 'Barcelone', 'Arsenal',
			'Manchester United'],
		clue: 'Je suis vainqueur de la Copa America 2015 et 2016.',
		nickname: ['sanchez']
	},
	{
		name: 'Joao Moutinho',
		clubs: ['Sporting', 'Porto', 'Monaco', 'Wolverhampton'],
		clue: 'Je suis champion de france 2017',
		nickname: ['moutinho']
	},
	{
		name: 'Maarten Stekelenburg',
		clubs: ['Ajax Amsterdam', 'A S Rome', 'Fulham', 'Monaco', 'Southampton',
			'Everton'],
		clue: 'Je suis hollandais.',
		nickname: ['stekelenburg']
	},
	{
		name: 'Lucas Digne',
		clubs: ['Lille', 'Paris', 'A S Rome', 'Barcelone', 'Everton'],
		clue: 'Je suis champion d\'Espagne 2018.',
		nickname: ['digne']
	},
	{
		name: 'Kurt Zouma',
		clubs: ['Saint-Étienne', 'Chelsea', 'Stoke', 'Everton'],
		clue: 'Je suis français.',
		nickname: ['zouma']
	},
	{
		name: 'Idrissa Gueye',
		clubs: ['Lille', 'Aston Villa', 'Everton'],
		clue: 'Je suis champion de France 2011.',
		nickname: ['gueye']
	},
	{
		name: 'Morgan Schneiderlin',
		clubs: ['Strasbourg', 'Southampton', 'Manchester United',
			'Everton'],
		clue: 'Je suis finaliste de l\'Euro 2016.',
		nickname: ['schneiderlin', 'chnéderlin', 'morgan chnéderlin']
	},
	{
		name: 'Théo Walcott',
		clubs: ['Southampton', 'Arsenal', 'Everton'],
		clue: 'Je suis anglais.',
		nickname: ['walcotte', 'théo walcotte']
	},
	{
		name: 'Rachid Ghezzal',
		clubs: ['Monaco', 'Lyon', 'Leicester'],
		clue: 'Je suis Algérien.',
		nickname: ['guezal', 'rachid guezal']
	},
	{
		name: 'Youri Tielemans',
		clubs: ['Anderlecht', 'Monaco', 'Leicester'],
		clue: 'Je suis belge.',
		nickname: ['tilemans', 'youri tilemans']
	},
	{
		name: 'José Holebas',
		clubs: ['Munich 1860', 'Olympiakos', 'A S Rome', 'Watford'],
		clue: 'Je suis grecque.',
		nickname: ['holebas', 'holebasse', 'josé holebasse']
	},
	{
		name: 'Pablo Zabaleta',
		clubs: ['San Lorenzo', 'Espanyol Barcelone', 'Manchester City', 'West Ham'],
		clue: 'Je suis champion d\'Angleterre 2012 et 2014.',
		nickname: ['zabaleta']
	},
	{
		name: 'Felipe Anderson',
		clubs: ['Santos', 'Lazio Rome', 'West Ham'],
		clue: 'Je suis brésilien.',
		nickname: ['andersonne', 'felipe andersonne']
	},
	{
		name: 'Samir Nasri',
		clubs: ['Marseille', 'Arsenal', 'Manchester City', 'Séville', 'West Ham'],
		clue: 'Je suis champion d\'Angleterre 2012 et 2014.',
		nickname: ['nasri']
	},
	{
		name: 'Jack Wilshere',
		clubs: ['Arsenal', 'Bolton', 'Bournemouth', 'West Ham'],
		clue: 'Je suis anglais.',
		nickname: ['whilchere', 'jack wilchere']
	},
	{
		name: 'Javier Hernandez',
		clubs: ['Chivas', 'Manchester United', 'Réal Madrid', 'Bayer Leverkusen',
			'West Ham'],
		clue: 'Je suis champion d\'Angleterre 2011 et 2013.',
		nickname: ['hernandez', 'chicharito']
	},
	{
		name: 'Marko Arnautovic',
		clubs: ['Twente', 'Inter Milan', 'Werder Brême', 'Stoke', 'West Ham'],
		clue: 'Je suis autrichien.',
		nickname: ['arnautovic', 'arnautoviche', 'marko arnautoviche']
	},
	{
		name: 'Mamadou Sakho',
		clubs: ['Paris', 'Liverpool', 'Crystal Palace'],
		clue: 'Je suis champion de France 2013.',
		nickname: ['sakho']
	},
	{
		name: 'Michy Batshuayi',
		clubs: ['Standard Liège', 'Marseille', 'Chelsea', 'Dortmund', 'Valence',
			'Crystal Palace'],
		clue: 'Je suis belge.',
		nickname: ['betshuayi', 'batchualli', 'michy batchualli']
	},
	{
		name: 'Christian Benteke',
		clubs: ['Genk', 'Standard Liège', 'Courtrai', 'Malines', 'Aston Villa',
			'Liverpool', 'Crystal Palace'],
		clue: 'Je suis belge.',
		nickname: ['benteké', 'christian benteké']
	},
	{
		name: 'Nathaniel Clyne',
		clubs: ['Crystal Palace', 'Southampton', 'Liverpool', 'Bournemouth'],
		clue: 'Je suis anglais.',
		nickname: ['clyne']
	},
	{
		name: 'Mario Lemina',
		clubs: ['Lorient', 'Marseille', 'Juventus', 'Southampton'],
		clue: 'Je suis champion d\'Italie 2016 et 2017.',
		nickname: ['lémina', 'mario lémina']
	},
	{
		name: 'André Schürrle',
		clubs: ['Mayence', 'Bayer Leverkusen', 'Chelsea', 'Wolfsburg', 'Dortmund',
			'Fulham'],
		clue: 'Je suis champion du monde 2014.',
		nickname: ['churleu', 'andré churleu']
	},
	{
		name: 'Clément Lenglet',
		clubs: ['Nancy', 'Séville', 'Barcelone'],
		clue: 'Je suis champion de ligue 2 2016.',
		nickname: ['lenglet']
	},
	{
		name: 'Thomas Vermaelen',
		clubs: ['Ajax Amsterdam', 'Arsenal', 'A S Rome', 'Barcelone'],
		clue: 'Je suis champion d\'Espagne 2015, 2016 et 2018.',
		nickname: ['vermahelenne', 'vermaelen']
	},
	{
		name: 'Kevin Prince Boateng',
		clubs: ['Hertha Berlin', 'Dortmund', 'Portsmouth', 'A C Milan', 'Schalke',
			'Las Palmas', 'Eintracht Francfort', 'Sassuolo','Barcelone'],
		clue: 'Je suis Ghanéen.',
		nickname: ['boateng']
	},
	{
		name: 'Philippe Coutinho',
		clubs: ['Inter Milan', 'Espanyol Barcelone', 'Liverpool', 'Barcelone'],
		clue: 'Je suis champion d\'Espagne 2018.',
		nickname: ['coutinho']
	},
	{
		name: 'Arturo Vidal',
		clubs: ['Colo colo', 'Bayer Leverkusen', 'Juventus', 'Bayern Munich',
			'Barcelone'],
		clue: 'J\'ai gagné la Copa America 2015 et 2016.',
		nickname: ['vidal']
	},
	{
		name: 'Luis Suarez',
		clubs: ['Montevideo', 'Groningue', 'Ajax Amsterdam', 'Liverpool',
			'Barcelone'],
		clue: 'J\'ai gagné la Copa America 2011.',
		nickname: ['suarez']
	},
	{
		name: 'Juanfran',
		clubs: ['Réal Madrid', 'Espanyol Barcelone', 'Osasuna', 'Atlético Madrid'],
		clue: 'J\'ai gagné l\'Euro 2012.',
		nickname: ['juanfran', 'ruanefrane']
	},
	{
		name: 'Filipe Luis',
		clubs: ['La Corogne', 'Chelsea', 'Atlético Madrid'],
		clue: 'Je suis champion d\'Angleterre 2015.',
		nickname: ['filipe luis']
	},
	{
		name: 'Diego Costa',
		clubs: ['Valladolid', 'Rayo Vallecano', 'Chelsea', 'Atlético Madrid'],
		clue: 'Je suis champion d\'Angleterre 2015 et 2017.',
		nickname: ['costa']
	},
	{
		name: 'Alvaro Morata',
		clubs: ['Réal Madrid', 'Juventus', 'Chelsea', 'Atlético Madrid'],
		clue: 'J\'ai gagné la C1 en 2014 et 2017.',
		nickname: ['morata']
	},
	{
		name: 'Thibaut Courtois',
		clubs: ['Genk', 'Réal Madrid', 'Chelsea', 'Atlético Madrid'],
		clue: 'J\'ai le seum.',
		nickname: ['courtois']
	},
	{
		name: 'Tony Kroos',
		clubs: ['Bayern Munich', 'Bayer Leverkusen', 'Réal Madrid'],
		clue: 'Je suis champion du monde 2014.',
		nickname: ['krosse', 'tony krosse']
	},
	{
		name: 'Isco',
		clubs: ['Valence', 'Malaga', 'Réal Madrid'],
		clue: 'Je suis champion d\'Espagne 2017.',
		nickname: ['isseco']
	},
	{
		name: 'Luka Modric',
		clubs: ['Dinamo Zagreb', 'Tottenham', 'Réal Madrid'],
		clue: 'Je suis ballon d\'or 2018.',
		nickname: ['modric', 'modriche', 'luka modriche']
	},
	{
		name: 'Gareth Bale',
		clubs: ['Southampton', 'Tottenham', 'Réal Madrid'],
		clue: 'J\'ai gagné la C1 en 2014, 2016, 2017 et 2018.',
		nickname: ['bale', 'béyle', 'gareth béyle']
	},
	{
		name: 'Geoffrey Kondogbia',
		clubs: ['Lens', 'Séville', 'Monaco', 'Inter Milan', 'Valence'],
		clue: 'Je suis français.',
		nickname: ['kondogbia']
	},
	{
		name: 'Kevin Gameiro',
		clubs: ['Strasbourg', 'Lorient', 'Paris', 'Séville', 'Atlético Madrid',
			'Valence'],
		clue: 'Je suis champion de France 2013.',
		nickname: ['gaméro']
	},
	{
		name: 'Maxime Gonalons',
		clubs: ['Lyon', 'Séville', 'Rome'],
		clue: 'Je suis français.',
		nickname: ['gonalon']
	},
	{
		name: 'Quincy Promes',
		clubs: ['Twente', 'Go Ahead Eagles', 'Spartak Moscou', 'Séville'],
		clue: 'Je suis hollandais.',
		nickname: ['promes', 'promesse', 'quincy promesse']
	},
	{
		name: 'Manuel Nolito',
		clubs: ['Barcelone', 'Benfica', 'Grenade', 'Celta Vigo', 'Manchester' +
		' City', 'Séville'],
		clue: 'Je suis espagnol.',
		nickname: ['nolito']
	},
	{
		name: 'Sofiane Boufal',
		clubs: ['Angers', 'Lille', 'Southampton', 'Celta Vigo'],
		clue: 'Je suis Marocain.',
		nickname: ['boufal']
	},
	{
		name: 'Ryad Boudebouz',
		clubs: ['Sochaux', 'Bastia', 'Montpellier', 'Bétis Séville', 'Celta Vigo'],
		clue: 'Je suis Algérien.',
		nickname: ['boudebouz']
	},
	{
		name: 'Martin Caceres',
		clubs: ['Barcelone', 'Séville', 'Juventus', 'Southampton', 'Hellas' +
		' Vérone', 'Lazio Rome'],
		clue: 'Je suis champion d\'Italie de 2012 à 2016.',
		nickname: ['casseresse', 'martin casseresse']
	},
	{
		name: 'Emre Can',
		clubs: ['Bayern Munich', 'Bayer Leverkusen', 'Liverpool', 'Juventus'],
		clue: 'Je suis champion d\'allemagne 2013.',
		nickname: ['emré channe', 'channe']
	},
	{
		name: 'Juan Guillermo Cuadrado',
		clubs: ['Udinese', 'Lecce', 'Fiorentina', 'Chelsea', 'Juventus'],
		clue: 'Je suis champion d\'italie de 2016 à 2018.',
		nickname: ['cuadrado']
	},
	{
		name: 'Sami Khedira',
		clubs: ['Stuttgart', 'Réal Madrid', 'Juventus'],
		clue: 'Je suis champion du monde 2014.',
		nickname: ['khedira']
	},
	{
		name: 'Blaise Matuidi',
		clubs: ['Troyes', 'Saint-Étienne', 'Paris', 'Juventus'],
		clue: 'Je suis champion du monde 2018.',
		nickname: ['matuidi']
	},
	{
		name: 'Mario Mandzukic',
		clubs: ['Dinamo Zagreb', 'Wolfsburg', 'Bayern Munich', 'Atlético Madrid',
			'Juventus'],
		clue: 'Je suis finaliste de la coupe du monde 2018.',
		nickname: ['mandzukic', 'mandzukitch', 'mario mandzukitch']
	},
	{
		name: 'David Ospina',
		clubs: ['Medellin', 'Nice', 'Arsenal', 'Naples'],
		clue: 'Je suis colombien.',
		nickname: ['ospina']
	},
	{
		name: 'Kalidou Koulibaly',
		clubs: ['Metz', 'Genk', 'Naples'],
		clue: 'Je suis sénégalais et pas français.',
		nickname: ['koulibaly']
	},
	{
		name: 'Kévin Malcuit',
		clubs: ['Monaco', 'Fréjus', 'Niort', 'Saint-Étienne', 'Lille', 'Naples'],
		clue: 'Je suis français.',
		nickname: ['malcuit']
	},
	{
		name: 'Dries Mertens',
		clubs: ['Apeldoorn', 'Ultrecht', 'P S V Eindhoven', 'Naples'],
		clue: 'Je suis belge.',
		nickname: ['mertensse', 'dries mertensse']
	},
	{
		name: 'Joao Miranda',
		clubs: ['Sochaux', 'Sao Paulo', 'Atlético Madrid', 'Inter Milan'],
		clue: 'Je suis brésilien.',
		nickname: ['miranda']
	},
	{
		name: 'Ivan Perisic',
		clubs: ['Sochaux', 'Bruges', 'Dortmund', 'Wolfsburg', 'Inter Milan'],
		clue: 'Je suis finaliste de la coupe du monde 2018.',
		nickname: ['ivan perisitche', 'perisic', 'perisitche']
	},
	{
		name: 'Jose Reina',
		clubs: ['Barcelone', 'Villarreal', 'Liverpool', 'Naples', 'Bayern Munich',
			'A C Milan'],
		clue: 'Je suis champion du monde 2010.',
		nickname: ['reina']
	},
	{
		name: 'Edin Dzeko',
		clubs: ['Sarajevo', 'Teplice', 'Wolfsburg', 'Manchester City', 'A S Rome'],
		clue: 'Je suis bosnien.',
		nickname: ['dzeko']
	},
	{
		name: 'Jerome Boateng',
		clubs: ['Hertha Berlin', 'Hambourg', 'Manchester City', 'Bayern Munich'],
		clue: 'Je suis champion du monde 2014.',
		nickname: ['boateng']
	},
	{
		name: 'James Rodriguez',
		clubs: ['Barfield', 'Porto', 'Monaco', 'Réal Madrid', 'Bayern Munich'],
		clue: 'Je suis champion d\'Allemagne 2018.',
		nickname: ['rames rodriguez', 'rodriguez']
	},
	{
		name: 'Arjen Robben',
		clubs: ['Groningue', 'P S V Eindhoven', 'Chelsea', 'Réal Madrid', 'Bayern' +
		' Munich'],
		clue: 'Je suis hollandais.',
		nickname: ['aryen robben', 'robben']
	},
	{
		name: 'Axel Witsel',
		clubs: ['Standard Liège', 'Benfica', 'Zénith', 'Tianjin', 'Dortmund'],
		clue: 'Je suis belge.',
		nickname: ['witsel', 'vittesel', 'axel vittesel']
	},
	{
		name: 'Kevin Trapp',
		clubs: ['Kaiserslautern', 'Eintracht Francfort', 'Paris'],
		clue: 'Je suis champion de france 2016 et 2018.',
		nickname: ['trape', 'kevin trape']
	},
	{
		name: 'Yann Sommer',
		clubs: ['Vaduz', 'Bâle', 'Zurich', 'Borussia Munchen Gladbach'],
		clue: 'Je suis suisse.',
		nickname: ['sommer', 'sommaire', 'yann sommaire']
	},
	{
		name: 'Alassane Plea',
		clubs: ['Lyon', 'Auxerre', 'Nice', 'Borussia Munchen Gladbach'],
		clue: 'Je suis français.',
		nickname: ['plea', 'pléa', 'alassane pléa']
	},
	{
		name: 'Josuha Guilavogui',
		clubs: ['Saint-Étienne', 'Atlético Madrid', 'Wolfsburg'],
		clue: 'Je suis français.',
		nickname: ['guilavogui']
	},
	{
		name: 'Paul George Ntep',
		clubs: ['Auxerre', 'Rennes', 'Wolfsburg', 'Saint-Étienne'],
		clue: 'Je suis français.',
		nickname: ['ntep']
	},
	{
		name: 'Benjamin Stambouli',
		clubs: ['Montpellier', 'Tottenham', 'Paris', 'Schalke'],
		clue: 'Je suis champion de france 2012 et 2016.',
		nickname: ['stambouli']
	},
	{
		name: 'Mario Gomez',
		clubs: ['Stuttgart', 'Bayern Munich', 'Fiorentina', 'Besiktas',
			'Wolfsburg'],
		clue: 'Je suis vainqueur de la C1 en 2013.',
		nickname: ['gomez']
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
