
const images = [
  {id: 1,
  name: "box",
  url: './PortfolioImages/bryły/box.png',
  category: "bryla"
  },
  {id: 2,
  name: "serce",
  url: require('./PortfolioImages/bryły/serce.png').default,
  category: "bryla"
  },
  {id: 3,
  name: "SS",
  url: require('./PortfolioImages/bryły/SS.png').default,
  category: "bryla"
  },
  {id: 4,
  name: "T",
  url: require('./PortfolioImages/bryły/T.png').default,
  category: "bryla"
  },
  {id: 5,
  name: "U",  
  url: require('./PortfolioImages/bryły/U.png').default,
  category: "bryla"  
  },
  {id: 6,
  name: "Kalus",
  url: require('./PortfolioImages/grafika-rastrowa/Kalus.png').default,
  category: "rastr" 
  },
  {id: 7,
  name: "Phoebe1",
  url: require('./PortfolioImages/grafika-rastrowa/Phoebe1.png').default,
  category: "rastr" 
  },
  {id: 8,
  name: "Phoebe2",
  url: require('./PortfolioImages/grafika-rastrowa/Phoebe2.png').default,
  category: "rastr" 
  },
  {id: 9,
  name: "Phoebe3",
  url: require('./PortfolioImages/grafika-rastrowa/Phoebe3.jpg').default,
  category: "rastr" 
  },
  {id: 10,
  name: "Jordan",
  url: require('./PortfolioImages/grafika-wektorowa/jordan.png').default,
  category: "wektor" 
  },
  {id: 11,
  name: "Neon-flaming",
  url: require('./PortfolioImages/grafika-wektorowa/neon-flaming.png').default,
  category: "wektor" 
  },
  {id: 12,
  name: "Neon-Magda",
  url: require('./PortfolioImages/grafika-wektorowa/neon-Magda.png').default,
  category: "wektor" 
  },
  {id: 13,
  name: "Seba1",
  url: require('./PortfolioImages/grafika-wektorowa/Seba(3).png').default,
  category: "wektor" 
  },
  {id: 14,
  name: "Seba",
  url: require('./PortfolioImages/grafika-wektorowa/Sebek.png').default,
  category: "wektor" 
  },
  {id: 15,
  name: "Ikony",
  url: require('./PortfolioImages/ikony/ikony.png').default,
  category: "ikony" 
  },
  {id: 16,
  name: "Owoce",
  url: require('./PortfolioImages/ikony/owoce.png').default,
  category: "ikony" 
  },
  {id: 17,
  name: "Cow-Ula",
  url: require('./PortfolioImages/ilustracje/Cow-Ula.png').default,
  category: "ilustracje" 
  },
  {id: 18,
  name: "Golden-chicken",
  url: require('./PortfolioImages/ilustracje/Golden-chicken.jpg').default,
  category: "ilustracje" 
  },
  {id: 19,
  name: "Kosmos",
  url: require('./PortfolioImages/kolaz/kosmos.jpg').default,
  category: "kolaz" 
  },
  {id: 20,
  name: "Okladka",
  url: require('./PortfolioImages/kolaz/okladka.jpg').default,
  category: "kolaz" 
  },
  {id: 21,
  name: "Winyl",
  url: require('./PortfolioImages/kolaz/winyl.png').default,
  category: "kolaz" 
  },
  {id: 22,
  name: "Linoryt1",
  url: require('./PortfolioImages/linoryt/1.jpg').default,
  category: "linoryt" 
  },
  {id: 23,
  name: "Linoryt2",
  url: require('./PortfolioImages/linoryt/2.jpg').default,
  category: "linoryt" 
  },
  {id: 24,
  name: "Linoryt3",
  url: require('./PortfolioImages/linoryt/3.jpg').default,
  category: "linoryt" 
  },
  {id: 25,
  name: "Linoryt4",
  url: require('./PortfolioImages/linoryt/4.jpg').default,
  category: "linoryt" 
  },
  {id: 26,
  name: "Guliwer",
  url: require('./PortfolioImages/logo/guliwer.png').default,
  category: "logo" 
  },
  {id: 27,
  name: "Logo",
  url: require('./PortfolioImages/logo/logo.png').default,
  category: "logo" 
  },
  {id: 28,
  name: "LogoMama",
  url: require('./PortfolioImages/logo/logoMama.jpg').default,
  category: "logo" 
  },
  {id: 29,
  name: "Mypage",
  url: require('./PortfolioImages/logo/mypage.png').default,
  category: "logo" 
  },
  {id: 30,
  name: "Panda",
  url: require('./PortfolioImages/logo/panda.png').default,
  category: "logo" 
  },
  {id: 31,
  name: "Sowa",
  url: require('./PortfolioImages/logo/sowa.png').default,
  category: "logo" 
  },
  {id: 32,
  name: "Speed",
  url: require('./PortfolioImages/logo/SPEED.png').default,
  category: "logo" 
  },
  {id: 33,
  name: "Tool",
  url: require('./PortfolioImages/logo/TOOLSai.png').default,
  category: "logo" 
  },
  {id: 34,
  name: "Tr",
  url: require('./PortfolioImages/logo/tr.png').default,
  category: "logo" 
  },
  {id: 35,
  name: "Zyrafa",
  url: require('./PortfolioImages/logo/zyrafa.png').default,
  category: "logo" 
  },
  {id: 36,
  name: "Dlugopis",
  url: require('./PortfolioImages/mock-up/dlugopis.jpg').default,
  category: "mock-up" 
  },
  {id: 37,
  name: "Koszulka Mama",
  url: require('./PortfolioImages/mock-up/koszulka-mama.jpg').default,
  category: "mock-up" 
  },
  {id: 38,
  name: "Koszulka Phoebe",
  url: require('./PortfolioImages/mock-up/koszulka-phobe.jpg').default,
  category: "mock-up" 
  },
  {id: 39,
  name: "Koszalka Phoebe1",
  url: require('./PortfolioImages/mock-up/koszulka-phobe1.jpg').default,
  category: "mock-up" 
  },
  {id: 40,
  name: "Koszulka Phoebe2",
  url: require('./PortfolioImages/mock-up/koszulka-phoebe2.jpg').default,
  category: "mock-up" 
  },
  {id: 41,
  name: "Mama biuro",
  url: require('./PortfolioImages/mock-up/mama-biuro.jpg').default,
  category: "mock-up" 
  },
  {id: 42,
  name: "Notes",
  url: require('./PortfolioImages/mock-up/notes.jpg').default,
  category: "mock-up" 
  },
  {id: 43,
  name: "Plakat",
  url: require('./PortfolioImages/mock-up/plakat.jpg').default,
  category: "mock-up" 
  },
  {id: 44,
  name: "Wizytowki",
  url: require('./PortfolioImages/mock-up/wizytowki.jpg').default,
  category: "mock-up" 
  },
  {id: 45,
  name: "Zyrafa1",
  url: require('./PortfolioImages/mock-up/zyrafa1.png').default,
  category: "mock-up" 
  },
  {id: 46,
  name: "Zyrafa2",
  url: require('./PortfolioImages/mock-up/zyrafa2.png').default,
  category: "mock-up" 
  },
] 

export default images;