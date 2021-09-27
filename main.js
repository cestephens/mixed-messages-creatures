/* The final sentence structure will be:
 *  "The [adjective][creatureType1][creatureType2][livesVerb] in [habitat]. 
 *   It [eatsVerb] [foodItem] [frequency]."
 */
const adjectives = [
    'mysterious', 
    'creeping', 
    'sparkling', 
    'singing', 
    'blue', 
    'blushing', 
    'ancient',
    'bumpy',
    'buttery',
    'clouded',
    'common',
    'dim',
    'drab',
    'droopy',
    'electric',
    'evergreen',
    'downy',
    'forked',
    'fragrant',
    'frosty',
    'gaseous',
    'giant',
    'lesser',
    'greater',
    'golden',
    'silver',
    'gleaming',
    'glossy',
    'grey',
    'greedy',
    'hairy',
    'hardy',
    'hideous',
    'humming',
    'ironclad',
    'jaunty',
    'jolly',
    'jagged',
    'knobbly',
    'knotty',
    'leafy',
    'limp',
    'wimpy',
    'marvelous',
    'meager',
    'melodic',
    'minty',
    'metallic',
    'milky',
    'minor',
    'musty',
    'nimble',
    'nocturnal',
    'diurnal',
    'crepuscular',
    'noxious',
    'oily',
    'opulent',
    'pale',
    'perfumed',
    'plump',
    'pungent',
    'putrid',
    'radiant',
    'fringed',
    'rosy',
    'rubber',
    'rusty',
    'scaley',
    'scented',
    'serpentine',
    'shimmering',
    'shrill',
    'slimy',
    'smooth',
    'spotted',
    'starry',
    'stormy',
    'striped',
    'subtle',
    'thorny',
    'velvet',
    'vibrant',
    'viscious',
    'webbed',
    'winged',
    'wide-eyed',
    'wobbly',
    'crested'
];

const creatureType1s = [
    'reed',
    'willow',
    'stone',
    'tree',
    'greeb',
    'leaf',
    'sky',
    'mud',
    'cloud',
    'corn',
    'fire',
    'berry',
    'bark',
    'acorn',
    'rainbow'
];

const creatureType2s = [
    'warbler',
    'crab',
    'minnow',
    'frog',
    'gull',
    'cat',
    'amoeba',
    'bear',
    'whale',
    'shark',
    'beetle',
    'trout',
    'spider',
    'monkey',
    'snail'
];

const livesVerbs = [
    'lives',
    'lurks',
    'stalks',
    'hides',
    'roams',
    'nestles',
    'rests',
    'nests',
    'roosts',
    'hunts',
    'is found',
    'dwells'
];

const habitats = [
    'the beams of churches',
    'dreary swamps',
    'stagnant rivers',
    'clear rivers',
    'under rocks',
    'burrows',
    'open seas',
    'mountain tops',
    'sandy desserts',
    'back alleys',
    'shadowy corners',
    'your neighbour\'s basement',
    'the attics of miserly men',
    'deep dark forests',
    'castle moats'
];

const eatsVerbs = [
    'eats',
    'devours',
    'hunts for',
    'grazes on',
    'nibbles at',
    'makes stashes of',
    'ingests',
    'gulps down',
    'breaks its fast on',
    'dines on',
    'licks up',
    'sups on'
];

const foodItems = [
    'rocks',
    'custard',
    'fruit',
    'grass',
    'sheep',
    'small children',
    'acorns',
    'berrys',
    'crayfish',
    'turbot',
    'seaweed',
    'clouds',
    'nightmares',
    'good intentions',
    'toenails',
    'fish scales',
    'blood',
    'wheat',
    'unattended crops',
    'bacteria',
    'bark',
    'fungi',
    'lichen',
    'clams'
];

const frequencies = [
    'daily',
    'weekly',
    'every minute',
    'as often as possible',
    'when the opportunity arises',
    'once a year',
    'in the spring',
    'in the winter',
    'every summer',
    'on leap years',
    'twice a day',
    'after sleeping',
    'before defecating',
    'in its dreams',
    'constantly',
    'when hungry',
    'when you least expect',
    'nightly'
];
