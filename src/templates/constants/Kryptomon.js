export const typeByName = {
  Ground: { color: 'brown' },
  Dragon: { color: 'orange' },
  Rock: { color: 'grey' },
  Fire: { color: 'red' },
  Psychic: { color: 'violet' },
  Grass: { color: 'green' },
  Water: { color: 'blue' },
  Ice: { color: 'teal' },
  Flying: { color: 'orange' },
  Dark: { color: 'purple' },
  Metal: { color: 'grey' },
  Electric: { color: 'yellow' },
  Normal: { color: 'black' },
  Ghost: { color: 'black' },
  Fairy: { color: 'pink' },
  Poison: { color: 'olive' },
  Bug: { color: 'green' },
  Steel: { color: 'grey' },
  Fighting: { color: 'orange' },
};

export const rarityById = {
  1: { color: 'grey', name: 'Common', icon: 'asterisk' },
  2: { color: 'green', name: 'Uncommon', icon: 'asterisk' },
  3: { color: 'teal', name: 'Rare', icon: 'diamond' },
  4: { color: 'blue', name: 'Super Rare', icon: 'diamond' },
  5: { color: 'purple', name: 'Ultra Rare', icon: 'fire' },
  6: { color: 'red', name: 'Mega Rare', icon: 'fire' },
  7: { color: 'orange', name: 'Legendary', icon: 'star' },
};

export const Species = [
  {
    id: 0,
    name: 'Krypto God',
    types: ['Fire', 'Ice'],
    isNew: false,
    isExinct: true,
  },
  { id: 1, name: 'Foxie', types: ['Grass'], isNew: false, isExinct: false },
  { id: 2, name: 'Yoshibud', types: ['Grass'], isNew: false, isExinct: false },
  { id: 3, name: 'Dholeaf', types: ['Grass'], isNew: false, isExinct: false },
  { id: 4, name: 'Bacon', types: ['Fire'], isNew: false, isExinct: false },
  { id: 5, name: 'Blazehog', types: ['Fire'], isNew: false, isExinct: false },
  { id: 6, name: 'Infernor', types: ['Fire'], isNew: false, isExinct: false },
  { id: 7, name: 'Tingadot', types: ['Water'], isNew: false, isExinct: false },
  { id: 8, name: 'Aquoge', types: ['Water'], isNew: false, isExinct: false },
  { id: 9, name: 'Seamonte', types: ['Water'], isNew: false, isExinct: false },
  { id: 10, name: 'Hammy', types: ['Normal'], isNew: false, isExinct: false },
  { id: 11, name: 'Hamstow', types: ['Normal'], isNew: false, isExinct: false },
  { id: 12, name: 'Hampop', types: ['Normal'], isNew: false, isExinct: false },
  {
    id: 13,
    name: 'Caternut',
    types: ['Normal', 'Bug'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 14,
    name: 'Papoon',
    types: ['Normal', 'Bug'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 15,
    name: 'Smetterling',
    types: ['Normal', 'Bug'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 16,
    name: 'Caterpeaf',
    types: ['Grass'],
    isNew: false,
    isExinct: false,
  },
  { id: 17, name: 'Spirilla', types: ['Grass'], isNew: false, isExinct: false },
  {
    id: 18,
    name: 'Fledgy',
    types: ['Flying', 'Psychic'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 19,
    name: 'Hypnobill',
    types: ['Flying', 'Psychic'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 20,
    name: 'Grasschopper',
    types: ['Bug', 'Fighting'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 21,
    name: 'Buzzfly',
    types: ['Electric', 'Flying', 'Bug'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 22,
    name: 'Flaxenbolt',
    types: ['Electric', 'Flying', 'Bug'],
    isNew: false,
    isExinct: false,
  },
  { id: 23, name: 'Nugget', types: ['Normal'], isNew: false, isExinct: false },
  {
    id: 24,
    name: 'Pumpchick',
    types: ['Normal'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 25,
    name: 'Cheagle',
    types: ['Normal', 'Flying'],
    isNew: false,
    isExinct: false,
  },
  { id: 26, name: 'Pillama', types: ['Normal'], isNew: false, isExinct: false },
  {
    id: 27,
    name: 'Papillamb',
    types: ['Normal', 'Flying'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 28,
    name: 'Makaha',
    types: ['Grass', 'Fairy'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 29,
    name: 'Waiqiqi',
    types: ['Grass', 'Fairy'],
    isNew: false,
    isExinct: true,
  },
  { id: 30, name: 'Boohuahua', types: ['Dark'], isNew: false, isExinct: false },
  { id: 31, name: 'Ghyena', types: ['Dark'], isNew: false, isExinct: false },
  { id: 32, name: 'Pluffer', types: ['Normal'], isNew: false, isExinct: true },
  {
    id: 33,
    name: '<Species>',
    types: ['Normal'],
    isNew: false,
    isExinct: true,
  },
  { id: 34, name: 'Lobolf', types: ['Normal'], isNew: false, isExinct: true },
  {
    id: 35,
    name: 'Ocekat',
    types: ['Water', 'Grass'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 36,
    name: 'Otakon',
    types: ['Water', 'Grass'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 37,
    name: 'Darva',
    types: ['Bug', 'Dark'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 38,
    name: 'Assassant',
    types: ['Bug', 'Dark'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 39,
    name: 'Tippytap',
    types: ['Bug', 'Poison'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 40,
    name: 'Taranturat',
    types: ['Bug', 'Poison'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 41,
    name: 'Grumby',
    types: ['Normal', 'Fighting'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 42,
    name: 'Wallaby',
    types: ['Normal', 'Fighting'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 43,
    name: 'Platypoop',
    types: ['Water', 'Psychic'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 44,
    name: 'Duckula',
    types: ['Water', 'Psychic'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 45,
    name: 'Amphibiman',
    types: ['Water'],
    isNew: false,
    isExinct: false,
  },
  { id: 46, name: '<Species>', types: ['Dark'], isNew: false, isExinct: true },
  { id: 47, name: 'Boba', types: ['Fairy'], isNew: false, isExinct: true },
  { id: 48, name: 'Kalinda', types: ['Fairy'], isNew: false, isExinct: true },
  {
    id: 49,
    name: 'Flameling',
    types: ['Fire', 'Flying'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 50,
    name: 'Screech',
    types: ['Fire', 'Flying'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 51,
    name: 'Cinereus',
    types: ['Fire', 'Flying'],
    isNew: false,
    isExinct: false,
  },
  { id: 52, name: 'Kookoo', types: ['Normal'], isNew: false, isExinct: false },
  {
    id: 53,
    name: 'Koabear',
    types: ['Normal', 'Dark'],
    isNew: false,
    isExinct: false,
  },
  { id: 54, name: 'Rhinome', types: ['Rock'], isNew: false, isExinct: false },
  { id: 55, name: 'Rhinomite', types: ['Rock'], isNew: false, isExinct: false },
  { id: 56, name: 'Merdonk', types: ['Water'], isNew: false, isExinct: false },
  { id: 57, name: 'Pegafin', types: ['Water'], isNew: false, isExinct: false },
  { id: 58, name: 'Mustela', types: ['Ghost'], isNew: false, isExinct: false },
  { id: 59, name: 'Matilda', types: ['Ghost'], isNew: false, isExinct: false },
  {
    id: 60,
    name: 'Nincoon',
    types: ['Normal', 'Fighting'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 61,
    name: 'Rabbite',
    types: ['Electric'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 62,
    name: 'Vulteon',
    types: ['Electric'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 63,
    name: 'Chickapee',
    types: ['Normal'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 64,
    name: 'Sandrunner',
    types: ['Normal'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 65,
    name: '<Species>',
    types: ['Normal'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 66,
    name: '<Species>',
    types: ['Normal'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 67,
    name: '<Species>',
    types: ['Normal'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 68,
    name: 'Rodentice',
    types: ['Normal', 'Fighting'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 69,
    name: 'Ratafu',
    types: ['Normal', 'Fighting'],
    isNew: false,
    isExinct: false,
  },
  { id: 70, name: 'Scorpine', types: ['Bug'], isNew: false, isExinct: false },
  {
    id: 71,
    name: 'Scorpiton',
    types: ['Bug', 'Poison'],
    isNew: false,
    isExinct: false,
  },
  { id: 72, name: 'Blobble', types: ['Water'], isNew: false, isExinct: false },
  { id: 73, name: 'Dolphath', types: ['Water'], isNew: false, isExinct: false },
  {
    id: 74,
    name: '<Species>',
    types: ['Water'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 75,
    name: '<Species>',
    types: ['Water'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 76,
    name: '<Species>',
    types: ['Water'],
    isNew: false,
    isExinct: true,
  },
  { id: 77, name: '<Species>', types: ['Fire'], isNew: false, isExinct: true },
  { id: 78, name: '<Species>', types: ['Fire'], isNew: false, isExinct: true },
  { id: 79, name: '<Species>', types: ['Fire'], isNew: false, isExinct: true },
  {
    id: 80,
    name: 'Zaphog',
    types: ['Electric'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 81,
    name: 'Blutore',
    types: ['Fighting'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 82,
    name: '<Species>',
    types: ['Dark', 'Fighting'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 83,
    name: '<Species>',
    types: ['Dark', 'Fighting'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 84,
    name: 'Yiddle',
    types: ['Ice', 'Fighting'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 85,
    name: 'Yeddi',
    types: ['Ice', 'Fighting'],
    isNew: false,
    isExinct: true,
  },
  { id: 86, name: 'Harpeon', types: ['Flying'], isNew: false, isExinct: false },
  { id: 87, name: 'Panzoom', types: ['Ghost'], isNew: false, isExinct: false },
  { id: 88, name: 'Panloom', types: ['Ghost'], isNew: false, isExinct: false },
  {
    id: 89,
    name: 'Pandoom',
    types: ['Ghost', 'Dark'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 90,
    name: 'Tilla',
    types: ['Grass', 'Poison'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 91,
    name: 'Lacertilla',
    types: ['Grass', 'Poison'],
    isNew: false,
    isExinct: false,
  },
  { id: 92, name: 'Foge', types: ['Fire'], isNew: false, isExinct: false },
  { id: 93, name: 'Exploge', types: ['Fire'], isNew: false, isExinct: false },
  { id: 94, name: 'Uniphin', types: ['Water'], isNew: false, isExinct: false },
  { id: 95, name: 'Unihorn', types: ['Water'], isNew: false, isExinct: false },
  {
    id: 96,
    name: 'Pritty',
    types: ['Grass', 'Fairy'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 97,
    name: 'Kateline',
    types: ['Grass', 'Fairy'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 98,
    name: 'Skullex',
    types: ['Ghost', 'Psychic'],
    isNew: false,
    isExinct: false,
  },
  { id: 99, name: 'Goatee', types: ['Fire'], isNew: false, isExinct: false },
  {
    id: 100,
    name: 'Ramfire',
    types: ['Fire', 'Dark'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 101,
    name: '<Species>',
    types: ['Ground'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 102,
    name: 'Scaleton',
    types: ['Ground'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 103,
    name: '<Species>',
    types: ['Psychic'],
    isNew: false,
    isExinct: true,
  },
  { id: 104, name: 'Abu', types: ['Grass'], isNew: false, isExinct: false },
  {
    id: 105,
    name: 'Geurilla',
    types: ['Grass'],
    isNew: false,
    isExinct: false,
  },
  { id: 106, name: 'Alphape', types: ['Grass'], isNew: false, isExinct: false },
  {
    id: 107,
    name: 'Stingy',
    types: ['Water', 'Electric'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 108,
    name: 'Thundray',
    types: ['Water', 'Electric'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 109,
    name: 'Gupzee',
    types: ['Water', 'Electric'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 110,
    name: 'Ampacuda',
    types: ['Water', 'Electric'],
    isNew: false,
    isExinct: true,
  },
  { id: 111, name: 'Staloon', types: ['Steel'], isNew: false, isExinct: false },
  {
    id: 112,
    name: 'Stoldier',
    types: ['Steel'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 113,
    name: 'Supatank',
    types: ['Steel'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 114,
    name: 'Helaloon',
    types: ['Steel', 'Flying'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 115,
    name: 'Metablimp',
    types: ['Steel', 'Flying'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 116,
    name: 'Quadrone',
    types: ['Steel', 'Flying'],
    isNew: false,
    isExinct: false,
  },
  { id: 117, name: 'Teteo', types: ['Psychic'], isNew: false, isExinct: false },
  {
    id: 118,
    name: 'Tialoc',
    types: ['Psychic'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 119,
    name: '<Species>',
    types: ['Fire', 'Psychic'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 120,
    name: '<Species>',
    types: ['Fire', 'Psychic'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 121,
    name: '<Species>',
    types: ['Fire', 'Psychic'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 122,
    name: '<Species>',
    types: ['Water'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 123,
    name: '<Species>',
    types: ['Water'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 124,
    name: 'Vooboo',
    types: ['Ghost', 'Psychic'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 125,
    name: 'Pinskull',
    types: ['Ghost', 'Psychic'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 126,
    name: 'Skulla',
    types: ['Ghost', 'Psychic'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 127,
    name: 'Skullola',
    types: ['Ghost', 'Psychic'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 128,
    name: '<Species>',
    types: ['Normal'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 129,
    name: '<Species>',
    types: ['Normal'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 130,
    name: '<Species>',
    types: ['Normal'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 131,
    name: 'Metarunt',
    types: ['Rock', 'Metal'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 132,
    name: 'Metastone',
    types: ['Rock', 'Metal'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 133,
    name: 'Metacrush',
    types: ['Rock', 'Metal'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 134,
    name: '<Species>',
    types: ['Dark', 'Psychic'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 135,
    name: '<Species>',
    types: ['Dark', 'Psychic'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 136,
    name: '<Species>',
    types: ['Dark'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 137,
    name: '<Species>',
    types: ['Dark'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 138,
    name: 'Tyranaplode',
    types: ['Fire', 'Rock'],
    isNew: false,
    isExinct: false,
  },
  { id: 139, name: 'Sleopard', types: ['Ice'], isNew: false, isExinct: false },
  {
    id: 140,
    name: 'Psion',
    types: ['Fighting', 'Psychic'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 141,
    name: 'Volcanor',
    types: ['Rock', 'Fire'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 142,
    name: '<Species>',
    types: ['Ground', 'Dragon'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 143,
    name: 'Siberion',
    types: ['Ice', 'Dragon'],
    isNew: false,
    isExinct: false,
  },
  {
    id: 144,
    name: '<Species>',
    types: ['Electric', 'Dragon'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 145,
    name: '<Species>',
    types: ['Fire', 'Dragon'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 146,
    name: '<Species>',
    types: ['Grass', 'Dragon'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 147,
    name: '<Species>',
    types: ['Fire', 'Flying'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 148,
    name: '<Species>',
    types: ['Dragon'],
    isNew: false,
    isExinct: true,
  },
  {
    id: 149,
    name: 'Luciferium',
    types: ['Dark'],
    isNew: false,
    isExinct: false,
  },
];
