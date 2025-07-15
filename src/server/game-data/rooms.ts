type Room = {
  id: number;
  name: string;
  preCpipName: string| null;
};

export type RoomName = 'town' |
  'coffee' |
  'book' |
  'cave' |
  'cavemine' |
  'cove' |
  'classroom' |
  'dance' |
  'lounge' |
  'light' |
  'forest' |
  'lake' |
  'shop' |
  'skatepark' |
  'dock' |
  'village' |
  'rink' |
  'dojo' |
  'boiler' |
  'dojoext' |
  'dojofire' |
  'dojowater' |
  'dojohide' |
  'dojosnow' |
  'forts' |
  'hotellobby' |
  'hotelroof' |
  'hotelspa' |	
  'agent' |
  'agentcom' |
  'agentlobbysolo' |
  'agentlobbymulti' |
  'sport' |
  'mtn' |
  'shack' |
  'lodge' |
  'attic' |
  'pizza' |
  'plaza' |
  'pet' |
  'berg' |
  'mine' |
  'beach' |
  'beacon' |
  'stage' |
  'boxdimension' |
  'shipquarters' |
  'shipnest' |
  'ship' |
  'shiphold' |
  'park' |
  'pufflewild' |
  'cloudforest' |
  'mall' |
  'school'|
  'party' |
  'party1' |
  'party2' |
  'party3' |
  'party4' |
  'party5' |
  'party6' |
  'party7' |
  'party8' |
  'party9' |
  'party10' |
  'party11' |
  'party12' |
  'party13' |
  'party14' |
  'party15' |
  'party16' |
  'party17' |
  'party18' |
  'party19' |
  'party20' |
  'party21' |
  'party22' |
  'party23' |
  'party24' |
  'party25' |
  'party26' |
  'party27' |

  'party99';


export type RoomMap<T> = Partial<Record<RoomName, T>>;

export const ROOMS: Record<RoomName, Room> = {
  'town': {
    id: 100,
    name: 'Town',
    preCpipName: 'Town'
  },
  'coffee': {
    id: 110,
    name: 'Coffee Shop',
    preCpipName: 'Coffee',
  },
  'book': {
    id: 111,
    name: 'Book Room',
    preCpipName: 'Book',
  },
  'cave': {
    id: 806,
    name: 'Cave',
    preCpipName: 'Cave'
  },
  'cavemine': {
    id: 813,
    name: 'cavemine',
    preCpipName: null
  },
  'cove': {
    id: 810,
    name: 'Cove',
    preCpipName: null
  },
  'classroom': {
    id: 851,
    name: 'Classroom',
    preCpipName: null
  },
  'dance': {
    id: 120,
    name: 'Dance Club',
    preCpipName: 'Dance',
  },
  
  'lounge': {
    id: 121,
    name: 'Dance Lounge',
    preCpipName: 'Lounge'
  },
  'boiler': {
    id: 804,
    name: 'Boiler Room',
    preCpipName: 'Boiler'
  },
  'light': {
    id: 410,
    name: 'Lighthouse',
    preCpipName: null
  },
  'shop': {
    id: 130,
    name: 'Gift Shop',
    preCpipName: 'Shop'
  }, 
  'skatepark': {
    id: 435,
    name: 'Skate Park',
    preCpipName: 'null'
  },
  'dock': {
    id: 800,
    name: 'Dock',
    preCpipName: 'Dock'
  },
  'village': {
    id: 200,
    name: 'Ski Village',
    preCpipName: 'Village'
  },
  'rink': {
    id: 802,
    name: 'Stadium',
    preCpipName: 'Rink'
  },
  'dojo': {
    id: 320,
    name: 'Dojo',
    preCpipName: 'Dojo'
  },
  'dojoext': {
    id: 321,
    name: 'Dojo Courtyard',
    preCpipName: null
  },
  'dojofire': {
    id: 812,
    name: 'Fire Dojo',
    preCpipName: null
  },
  'dojohide': {
    id: 322,
    name: 'Ninja Hideout',
    preCpipName: null
  },
  'dojowater': {
    id: 816,
    name: 'Water Dojo',
    preCpipName: null
  },
  'dojosnow': {
    id: 326,
    name: 'Snow Dojo',
    preCpipName: null
  },
  'agent': {
    id: 803,
    name: 'PSA HQ',
    preCpipName: 'Agent',
  },
  'agentcom': {
    id: 323,
    name: 'EPF Command Room',
    preCpipName: null
  },
  'agentlobbymulti': {
    id: 212,
    name: '',
    preCpipName: null
  },
  'agentlobbysolo': {
    id: 211,
    name: '',
    preCpipName: null
  },
  'forts': {
    id: 801,
    name: 'Snow Forts',
    preCpipName: 'Forts'
  },
  'hotellobby': {
    id: 430,
    name: 'Puffle Hotel Lobby',
    preCpipName: 'null'
  },
  'hotelspa': {
    id: 431,
    name: 'Puffle Hotel Spa',
    preCpipName: 'null'
  },
  'hotelroof': {
    id: 432,
    name: 'Puffle Hotel Roof',
    preCpipName: 'null'
  },

  'forest': {
    id: 809,
    name: 'Forest',
    preCpipName: null
  },
  'lake': {
    id: 814,
    name: 'Hidden Lake',
    preCpipName: null
  },
  'sport': {
    id: 210,
    name: 'Sport Shop',
    preCpipName: 'Sport'
  },
  'mtn': {
    id: 230,
    name: 'Ski Hill',
    preCpipName: 'Mtn'
  },
  'lodge': {
    id: 220,
    name: 'Ski Lodge',
    preCpipName: 'Lodge'
  },
  'attic': {
    id: 221,
    name: 'Lodge Attic',
    preCpipName: 'Attic'
  },
  'pizza': {
    id: 330,
    name: 'Pizza Parlor',
    preCpipName: 'Pizza'
  },
  'plaza': {
    id: 300,
    name: 'Plaza',
    preCpipName: 'Plaza'
  },
  'pet': {
    id: 310,
    name: 'Pet Shop',
    preCpipName: 'Pet'
  },
  'berg': {
    id: 805,
    name: 'Iceberg',
    preCpipName: 'Berg'
  },
  'mine': {
    id: 808,
    name: 'Mine',
    preCpipName: 'Mine'
  },
  'shack': {
    id: 807,
    name: 'Mine Shack',
    preCpipName: 'Shack'
  },
  'beach': {
    id: 400,
    name: 'Beach',
    preCpipName: 'Beach'
  },
  'beacon': {
    id: 411,
    name: 'Beacon',
    preCpipName: null
  },
  'boxdimension': {
    id: 811,
    name: 'Box Dimension',
    preCpipName: null
  },
  'stage': {
    id: 340,
    name: 'Stage',
    preCpipName: null
  },
  'ship': {
    id: 420,
    name: 'Migrator',
    preCpipName: null
  },
  'shipnest': {
    id: 423,
    name: 'Crow\'s Nest',
    preCpipName: null
  },
  'shiphold': {
    id: 421,
    name: 'Ship Hold',
    preCpipName: null
  },
  'shipquarters': {
    id: 422,
    name: 'Captain\s Quaters',
    preCpipName: null
  },
  'park': {
    id: 890,
    name: 'Puffle Park',
    preCpipName: null
  },
  'pufflewild': {
    id: 436,
    name: 'Puffle Wild',
    preCpipName: null
  },
  'cloudforest': {
    id: 433,
    name: 'Cloud Forest',
    preCpipName: null
  },
  'mall': {
    id: 823,
    name: 'Mall',
    preCpipName: null
  },
  'school': {
    id: 825,
    name: 'School',
    preCpipName: null
  },
  'party': {
    id: 850,
    name: 'Party',
    preCpipName: null
  },
  'party1': {
    id: 851,
    name: 'Party 1',
    preCpipName: null
  },
  'party2': {
    id: 852,
    name: 'Party 2',
    preCpipName: null
  },
  'party3': {
    id: 853,
    name: 'Party 3',
    preCpipName: null
  },
  'party4': {
    id: 854,
    name: 'Party 4',
    preCpipName: null
  },
  'party5': {
    id: 855,
    name: 'Party 5',
    preCpipName: null
  },
  'party6': {
    id: 856,
    name: 'Party 6',
    preCpipName: null
  },
  'party7': {
    id: 857,
    name: 'Party 7',
    preCpipName: null
  },
  'party8': {
    id: 858,
    name: 'Party 8',
    preCpipName: null
  },
  'party9': {
    id: 859,
    name: 'Party 9',
    preCpipName: null
  },
  'party10': {
    id: 860,
    name: 'Party 10',
    preCpipName: null
  },
  'party11': {
    id: 861,
    name: 'Party 11',
    preCpipName: null
  },
  'party12': {
    id: 862,
    name: 'Party 12',
    preCpipName: null
  },
  'party13': {
    id: 863,
    name: 'Party 13',
    preCpipName: null
  },
  'party14': {
    id: 864,
    name: 'Party 14',
    preCpipName: null
  },
  'party15': {
    id: 865,
    name: 'Party 15',
    preCpipName: null
  },
  'party16': {
    id: 866,
    name: 'Party 16',
    preCpipName: null
  },
  'party17': {
    id: 867,
    name: 'Party 17',
    preCpipName: null
  },
  'party18': {
    id: 868,
    name: 'Party 18',
    preCpipName: null
  },


  'party19': {
    id: 869,
    name: 'Party 19',
    preCpipName: null
  },
  'party20': {
    id: 870,
    name: 'Party 20',
    preCpipName: null
  },
  'party21': {
    id: 871,
    name: 'Party 21',
    preCpipName: null
  },
  'party22': {
    id: 872,
    name: 'Party 22',
    preCpipName: null
  },
  'party23': {
    id: 873,
    name: 'Party 23',
    preCpipName: null
  },
  'party24': {
    id: 874,
    name: 'Party 24',
    preCpipName: null
  },
  'party25': {
    id: 875,
    name: 'Party 25',
    preCpipName: null
  },
  'party26': {
    id: 876,
    name: 'Party 26',
    preCpipName: null
  },
  'party27': {
    id: 877,
    name: 'Party 27',
    preCpipName: null
  },


  'party99': {
    id: 899,
    name: 'Party 99',
    preCpipName: null
  }
};
