const searchLocations = [
  {
    id: 1,
    name: 'Amsterdam',
    description: 'City in Noord-Holland, Netherlands',
    image: require('./assets/images/search/253044.jpg')
  },
  {
    id: 2,
    name: 'Amsterdam City Centre',
    description: 'Amsterdam, Noord-Holland, Netherlands',
    image: require('./assets/images/search/37913.jpg')
  },
  {
    id: 3,
    name: 'Schiphol Airport',
    description: 'Amsterdam, Noord-Holland, Netherlands',
    image: require('./assets/images/search/619944.jpg')
  },
  {
    id: 4,
    name: 'Amsterdam Central Station',
    description: 'Amsterdam, Noord-Holland, Netherlands',
    image: require('./assets/images/search/967718.jpg')
  },
];

const recentSearch = [
  {
    id: 1,
    name: 'Brussels',
    date: 'Aug 17 - 21',
    guest: '2 adults',
    image: require('./assets/images/recent/brussels.jpg')
  },
  {
    id: 2,
    name: 'Paris',
    date: 'Aug 17 - Sep 03',
    guest: '2 adults, 2 children',
    image: require('./assets/images/recent/paris.jpg')
  },
  {
    id: 3,
    name: 'Rome',
    date: 'Aug 17 - 21',
    guest: '2 adults',
    image: require('./assets/images/recent/rome.jpg')
  },
];

const appMore = [
  {
    id: 1,
    name: 'My Coupon Codes',
    icon: 'tag'
  },
  {
    id: 2,
    name: 'Gift cards',
    icon: 'credit-card'
  },
  {
    id: 3,
    name: 'Deals',
    icon: 'check'
  },
  {
    id: 4,
    name: 'Car Rentals',
    icon: 'car'
  },
  {
    id: 5,
    name: 'Travel Articles',
    icon: 'map'
  },
  {
    id: 6,
    name: 'Travel communities',
    icon: 'users'
  },
  {
    id: 7,
    name: 'Rate your stay',
    icon: 'comments'
  },
  {
    id: 8,
    name: 'Lists',
    icon: 'heart'
  },
  {
    id: 9,
    name: 'List your property',
    icon: 'plus-circle'
  },
  {
    id: 10,
    name: 'Settings',
    icon: 'cog'
  },
  {
    id: 11,
    name: 'Get cutomer service help',
    icon: 'user'
  },
  {
    id: 12,
    name: 'Give app feedback',
    icon: 'mobile'
  },
]

const propertyList = [
  {
    id: 1,
    coverImage: require('./assets/images/recent/Hotel1.jpg'),
    name: "Nuvo Suites Hotel - Miami / Doral",
    stars: 4,
    thumbUp: true,
    rating: {
      point: 8.1,
      remark: "Very Good"
    },
    room: {
      bedroom: 1,
      livingroom: 1,
      bed: 1
    },
    location: "18km from center",
    breakfast: true,
    deal: {
      todayDeal: true
    },
    propertyType: "Two-bedroom Apartment",
    stays: 2,
    currency: "USD$",
    price: 98,
    tax: 10,
    roomLefts: 2,
    noPrepayment: true,
    images: [
      require('./assets/images/property/1.jpg'),
      require('./assets/images/property/2.jpg'),
      require('./assets/images/property/3.jpg'),
      require('./assets/images/property/4.jpg'),
      require('./assets/images/property/5.jpg'),
      require('./assets/images/property/6.jpg'),
      require('./assets/images/property/7.jpg'),
      require('./assets/images/property/8.jpg'),
      require('./assets/images/property/9.jpg'),
      require('./assets/images/property/10.jpg'),
    ],
    address: "9291 Burton Way, Beverly Hills, Los Angeles, CA 90210, United States of America",
    train: "2km from Train Station (Wilshire/La Cienega)",
    reviews: [
      {
        id: 1,
        comment: "Hol erzem fyaal thez uilaga wylag walasth, syrolmom fyodumtul ullyetuk en ygoz en fuhazatum, werud kunuel symeonnok thekunched wyzeul turuentelen.",
        user: "Jessica",
        code: "US",
        country: "United States of America"
      },
      {
        id: 2,
        comment: "I into from surely balm before, merely again ungainly than soul rapping. All ever land bust disaster the the name.",
        user: "Maryam",
        code: "AE",
        name: "M",
        country: "United Arab Emirates"
      },
      {
        id: 3,
        comment: "Pleure visage surprise et elle et m'appelle demain, mal «la soeurs etre somptueux morceau ce. Mais le promettant dans qu'elle.",
        user: "Lee",
        code: "GB",
        name: "L",
        country: "United Kingdom"
      },
    ],
    description: "The cheer to carnal night in superstition to and. And with the wins to. Misery save start would old, unto. Li knabon vi gxi posedajxoj da pri estis ne, levis nun du ekiris mi dek. Da kelke kiom velveturis marbordo,. Luna apariencia de dando se larga recodos transparente los de. Y quedo de que el perfil. La brooklyn de de."
  },
  {
    id: 2,
    coverImage: require('./assets/images/recent/Hotel2.jpg'),
    name: "Concorde Hotel New York",
    stars: 4,
    rating: {
      point: 8.6,
      remark: "Excellent"
    },
    location: "2.4 km from center",
    soldOut: true,
    dateOptions: [
      {
        id: 1,
        date: "May 28 - 30",
        currency: "US$",
        price: "248"
      },
      {
        id: 2,
        date: "Sep 12 - 15",
        currency: "US$",
        price: "699"
      },
      {
        id: 3,
        date: "Sep 13 - 16",
        currency: "US$",
        price: "699"
      },
      {
        id: 4,
        date: "Sep 17 - 19",
        currency: "US$",
        price: "680"
      },
      {
        id: 5,
        date: "Sep 18 - 20",
        currency: "US$",
        price: "670"
      }
    ],
    images: [
      require('./assets/images/property/11.jpg'),
      require('./assets/images/property/12.jpg'),
      require('./assets/images/property/13.jpg'),
      require('./assets/images/property/14.jpg'),
      require('./assets/images/property/15.jpg'),
      require('./assets/images/property/16.jpg'),
      require('./assets/images/property/17.jpg'),
      require('./assets/images/property/18.jpg'),
      require('./assets/images/property/19.jpg'),
      require('./assets/images/property/20.jpg'),
    ],
    address: "9750 Airport Boulevard, Los Angeles, CA 90045, United States of America",
    subway: "1.8km from Subway/Metro station (Hollywood/Vine)",
    reviews: [
      {
        id: 1,
        comment: "Hol erzem fyaal thez uilaga wylag walasth, syrolmom fyodumtul ullyetuk en ygoz en fuhazatum, werud kunuel symeonnok thekunched wyzeul turuentelen.",
        user: "Jessica",
        code: "US",
        country: "United States of America"
      },
      {
        id: 2,
        comment: "I into from surely balm before, merely again ungainly than soul rapping. All ever land bust disaster the the name.",
        user: "Maryam",
        code: "AE",
        name: "M",
        country: "United Arab Emirates"
      },
      {
        id: 3,
        comment: "Pleure visage surprise et elle et m'appelle demain, mal «la soeurs etre somptueux morceau ce. Mais le promettant dans qu'elle.",
        user: "Lee",
        code: "GB",
        name: "L",
        country: "United Kingdom"
      },
    ],
    description: "Nor though love harold adversity which and long, go go now within of ee. None for had love he this. Est sit takimata accusam labore kasd, at sed sed diam dolore. Consetetur sit gubergren dolores consetetur sea dolor ea dolor aliquyam. Labore amet takimata dolores ipsum. Vero sanctus takimata et et gubergren no. Dolore est invidunt amet stet labore, clita dolores dolores amet dolore ea ipsum. No elitr et labore."
  },
  {
    id: 3,
    coverImage: require('./assets/images/recent/Hotel3.jpg'),
    name: "Row NYC at Times Square",
    stars: 4,
    rating: {
      point: 7.2,
      remark: "Good"
    },
    location: "1.2 km from center",
    stays: 2,
    currency: "USD$",
    price: 153,
    tax: 139.68,
    images: [
      require('./assets/images/property/1.jpg'),
      require('./assets/images/property/2.jpg'),
      require('./assets/images/property/3.jpg'),
      require('./assets/images/property/4.jpg'),
      require('./assets/images/property/5.jpg'),
      require('./assets/images/property/6.jpg'),
      require('./assets/images/property/7.jpg'),
      require('./assets/images/property/8.jpg'),
      require('./assets/images/property/9.jpg'),
      require('./assets/images/property/10.jpg'),
    ],
    address: "5985 West Century Boulevard, Los Angeles, CA 90045, United States of America",
    train: "1.6km from Train Station (Aviation/Century)",
    reviews: [
      {
        id: 1,
        comment: "Hol erzem fyaal thez uilaga wylag walasth, syrolmom fyodumtul ullyetuk en ygoz en fuhazatum, werud kunuel symeonnok thekunched wyzeul turuentelen.",
        user: "Jessica",
        code: "US",
        country: "United States of America"
      },
      {
        id: 2,
        comment: "I into from surely balm before, merely again ungainly than soul rapping. All ever land bust disaster the the name.",
        user: "Maryam",
        code: "AE",
        name: "M",
        country: "United Arab Emirates"
      },
      {
        id: 3,
        comment: "Pleure visage surprise et elle et m'appelle demain, mal «la soeurs etre somptueux morceau ce. Mais le promettant dans qu'elle.",
        user: "Lee",
        code: "GB",
        name: "L",
        country: "United Kingdom"
      },
    ],
    description: "Der wort ja stürmten du verwundert ist, ein gehn doch wo um mit, hab gefärbt die in ja wo ich. Tutte a non essaudisce quella cominciamento essilio giudicio cosa. Mortali non mente dalla che se tal, non e tanto maravigliose nel lui ripararci sé cosa lui, sí che quali forse come sé dinanzi liberalita che noi. Senza se l'uomo nel.",
    facilities: [
      {
        id: 1,
        type: "Pets",
        icon: "ios-paw",
        description: "Lorem sadipscing ut elitr accusam justo invidunt ut. Et clita.",
        display: "Pets Friendly"
      },
      {
        id: 2,
        type: "Internet",
        icon: "ios-wifi",
        description: "Lorem sadipscing ut elitr accusam justo invidunt ut. Et clita.",
        display: "Free Wifi"
      },
      {
        id: 3,
        type: "Parking",
        icon: "ios-car",
        description: "Lorem sadipscing ut elitr accusam justo invidunt ut. Et clita.",
        display: "Parking"
      },
      {
        id: 4,
        type: "Activities",
        description: "Lorem sadipscing ut elitr accusam justo invidunt ut. Et clita.",
      },
      {
        id: 5,
        type: "Garden",
        icon: "ios-flower",
        description: "Lorem sadipscing ut elitr accusam justo invidunt ut. Et clita.",
        display: "Garden"
      },
    ]
  },
  {
    id: 4,
    coverImage: require('./assets/images/recent/Hotel4.jpg'),
    name: "Huson New York Central Park",
    stars: 4,
    thumbUp: true,
    deal: {
      secretDeal: true
    },
    rating: {
      point: 7.1,
      remark: "Great location!"
    },
    location: "300 m from center",
    stays: 2,
    currency: "USD$",
    price: 150,
    tax: 119.68,
    images: [
      require('./assets/images/property/11.jpg'),
      require('./assets/images/property/12.jpg'),
      require('./assets/images/property/13.jpg'),
      require('./assets/images/property/14.jpg'),
      require('./assets/images/property/15.jpg'),
      require('./assets/images/property/16.jpg'),
      require('./assets/images/property/17.jpg'),
      require('./assets/images/property/18.jpg'),
      require('./assets/images/property/19.jpg'),
      require('./assets/images/property/20.jpg'),
    ],
    address: "9250 Airport Boulevard, Los Angeles, CA 90045, United States of America",
    subway: "50m from Subway/Metro station (Wilshire/Normandie)",
    reviews: [
      {
        id: 1,
        comment: "Hol erzem fyaal thez uilaga wylag walasth, syrolmom fyodumtul ullyetuk en ygoz en fuhazatum, werud kunuel symeonnok thekunched wyzeul turuentelen.",
        user: "Jessica",
        code: "US",
        country: "United States of America"
      },
      {
        id: 2,
        comment: "I into from surely balm before, merely again ungainly than soul rapping. All ever land bust disaster the the name.",
        user: "Maryam",
        code: "AE",
        name: "M",
        country: "United Arab Emirates"
      },
      {
        id: 3,
        comment: "Pleure visage surprise et elle et m'appelle demain, mal «la soeurs etre somptueux morceau ce. Mais le promettant dans qu'elle.",
        user: "Lee",
        code: "GB",
        name: "L",
        country: "United Kingdom"
      },
    ],
    description: "Alatt ezért hegyét nagyon fejem egymást kerüljetek ártatlanok s laktok ha. De óvjon nagyon teher szeret, legutolsó gyalázat és az. Is fluttered it murmured madam nepenthe what had door soul rapping. I long this sorrow he, to for his that decorum this on quaff. Nearly beguiling soul a velvet an,."
  },
  {
    id: 5,
    coverImage: require('./assets/images/recent/Hotel5.jpg'),
    name: "Cachet Boutique Hotel NYC",
    rating: {
      point: 7.8,
      remark: "Good"
    },
    location: "1.6 km from center",
    breakfast: true,
    stays: 2,
    currency: "USD$",
    price: 251,
    tax: 119.68,
    freeCancellation: true,
    images: [
      require('./assets/images/property/1.jpg'),
      require('./assets/images/property/2.jpg'),
      require('./assets/images/property/3.jpg'),
      require('./assets/images/property/4.jpg'),
      require('./assets/images/property/5.jpg'),
      require('./assets/images/property/6.jpg'),
      require('./assets/images/property/7.jpg'),
      require('./assets/images/property/8.jpg'),
      require('./assets/images/property/9.jpg'),
      require('./assets/images/property/10.jpg'),
    ],
    address: " 777 North Vine Street, Hollywood, Los Angeles, CA 90038, United States of America",
    subway: "1.1km from Subway/Metro station (Wilshire/Normandie)",
    reviews: [
      {
        id: 1,
        comment: "Hol erzem fyaal thez uilaga wylag walasth, syrolmom fyodumtul ullyetuk en ygoz en fuhazatum, werud kunuel symeonnok thekunched wyzeul turuentelen.",
        user: "Jessica",
        code: "US",
        country: "United States of America"
      },
      {
        id: 2,
        comment: "I into from surely balm before, merely again ungainly than soul rapping. All ever land bust disaster the the name.",
        user: "Maryam",
        code: "AE",
        name: "M",
        country: "United Arab Emirates"
      },
      {
        id: 3,
        comment: "Pleure visage surprise et elle et m'appelle demain, mal «la soeurs etre somptueux morceau ce. Mais le promettant dans qu'elle.",
        user: "Lee",
        code: "GB",
        name: "L",
        country: "United Kingdom"
      },
    ],
    description: "The the dreary a you angels of have, from sad ungainly weak kind door and the. Ah and separate shadow. Maries bercé bords je flamands sanglot fermenter mais mers voulais . Noirs mystiques béni enlever ivre des cinquante puis. Drames de les m'ont lames éternels. Qu'un de les tout descendaient descendre grappin des baigné léger. Poetes des immobilités mer pensif."
  },
]

export {
  searchLocations,
  recentSearch,
  appMore,
  propertyList
}