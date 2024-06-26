const games = [
  {
    id: 1,
    title: "The Witcher 3: Wild Hunt",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png",
    genre: "Action RPG",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2015-05-19",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    rating: "Mature",
    description:
      "An open-world action RPG set in a dark fantasy universe, featuring rich storytelling, dynamic combat, and vast exploration.",
    price: 59.99,
  },
  {
    id: 2,
    title: "The Legend of Zelda: Breath of the Wild",
    image:
      "https://static.posters.cz/image/750/affiches-et-posters/the-legend-of-zelda-breath-of-the-wild-sunset-i40519.jpg",
    genre: "Action-Adventure",
    platforms: ["Nintendo Switch", "Wii U"],
    release_date: "2017-03-03",
    developer: "Nintendo EPD",
    publisher: "Nintendo",
    rating: "Everyone 10+",
    description:
      "An expansive open-world adventure game set in the kingdom of Hyrule, offering freedom of exploration, inventive puzzles, and immersive gameplay.",
    price: 59.99,
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    image:
      "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
    genre: "Action-Adventure",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2018-10-26",
    developer: "Rockstar Studios",
    publisher: "Rockstar Games",
    rating: "Mature",
    description:
      "A sprawling Western epic set in the dying days of the American Wild West, offering a deeply immersive open-world experience with stunning visuals and engaging narrative.",
    price: 59.99,
  },
  {
    id: 4,
    title: "Super Mario Odyssey",
    image:
      "https://eq9q4mywfv4.exactdn.com/wp-content/uploads/2022/07/Super-Mario-Odyssey-Featured-Ecran-Partage.jpg?strip=all&lossy=1&ssl=1",
    genre: "Platformer",
    platforms: ["Nintendo Switch"],
    release_date: "2017-10-27",
    developer: "Nintendo EPD",
    publisher: "Nintendo",
    rating: "Everyone 10+",
    description:
      "A vibrant 3D platformer that takes players on a globe-trotting adventure with Mario, featuring inventive level design, charming characters, and joyful gameplay.",
    price: 49.99,
  },
  {
    id: 5,
    title: "Horizon Zero Dawn",
    image:
      "https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg",
    genre: "Action RPG",
    platforms: ["PlayStation 4", "PC"],
    release_date: "2017-02-28",
    developer: "Guerrilla Games",
    publisher: "Sony Interactive Entertainment",
    rating: "Teen",
    description:
      "A post-apocalyptic action RPG set in a lush open world overrun by robotic creatures, featuring thrilling combat and a captivating story.",
    price: 49.99,
  },
  {
    id: 6,
    title: "God of War",
    image:
      "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7",
    genre: "Action-Adventure",
    platforms: ["PlayStation 4"],
    release_date: "2018-04-20",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    rating: "Mature",
    description:
      "A reimagining of the iconic series, following Kratos and his son Atreus on a deeply personal journey through Norse mythology, featuring visceral combat and stunning visuals.",
    price: 59.99,
  },
  {
    id: 7,
    title: "Grand Theft Auto V",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202203/0911/VIB0SeEj9vT6DTv7P4thJLZi.jpg",
    genre: "Action-Adventure",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2013-09-17",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    rating: "Mature",
    description:
      "An open-world crime epic set in the fictional state of San Andreas, offering a vast playground for mayhem and exploration, both solo and in multiplayer.",
    price: 29.99,
  },
  {
    id: 8,
    title: "Dark Souls III",
    image:
      "https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png",
    genre: "Action RPG",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2016-04-12",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    rating: "Mature",
    description:
      "A challenging action RPG set in a dark fantasy world, known for its punishing difficulty, intricate level design, and deep lore.",
    price: 59.99,
  },
  {
    id: 9,
    title: "The Elder Scrolls V: Skyrim",
    image:
      "https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg",
    genre: "Action RPG",
    platforms: ["Multiplatform"],
    release_date: "2011-11-11",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    rating: "Mature",
    description:
      "An epic open-world RPG set in the fantasy realm of Tamriel, offering boundless exploration, rich storytelling, and countless quests.",
    price: 39.99,
  },
  {
    id: 10,
    title: "Overwatch 2",
    image:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Overwatch2_Season6_image1600w.png",
    genre: "Hero Shooter",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2016-05-24",
    developer: "Blizzard Entertainment",
    publisher: "Blizzard Entertainment",
    rating: "Teen",
    description:
      "A team-based multiplayer shooter featuring a diverse cast of heroes, each with unique abilities, offering fast-paced action and strategic gameplay.",
    price: 39.99,
  },
  {
    id: 11,
    title: "Cyberpunk 2077",
    image:
      "https://www.cyberpunk.net/build/images/pre-order/buy-b/keyart-ue-fr@2x-cd66fd0d.jpg",
    genre: "Action RPG",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2020-12-10",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    rating: "Mature",
    description:
      "A futuristic open-world RPG set in the dystopian metropolis of Night City, offering deep customization, branching storylines, and immersive world-building.",
    price: 59.99,
  },
  {
    id: 12,
    title: "Final Fantasy VII Remake",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202308/3005/537b5208a8ee42935286a44b3b981da86d976bf54899bf98.jpg",
    genre: "Action RPG",
    platforms: ["PlayStation 4"],
    release_date: "2020-04-10",
    developer: "Square Enix",
    publisher: "Square Enix",
    rating: "Teen",
    description:
      "A reimagining of the classic RPG, featuring stunning visuals, dynamic combat, and expanded storytelling in the city of Midgar.",
    price: 59.99,
  },
  {
    id: 13,
    title: "Super Smash Bros. Ultimate",
    image:
      "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9",
    genre: "Fighting",
    platforms: ["Nintendo Switch"],
    release_date: "2018-12-07",
    developer: "Bandai Namco Studios / Sora Ltd.",
    publisher: "Nintendo",
    rating: "Everyone 10+",
    description:
      "A crossover fighting game featuring an expansive roster of iconic characters from various video game franchises, offering frantic multiplayer battles and solo challenges.",
    price: 59.99,
  },
  {
    id: 14,
    title: "Bloodborne",
    image:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/NVmnBXze9ElHzU6SmykrJLIV.png",
    genre: "Action RPG",
    platforms: ["PlayStation 4"],
    release_date: "2015-03-24",
    developer: "FromSoftware",
    publisher: "Sony Interactive Entertainment",
    rating: "Mature",
    description:
      "A challenging action RPG set in a gothic horror world, known for its fast-paced combat, intricate level design, and haunting atmosphere.",
    price: 19.99,
  },
  {
    id: 15,
    title: "Fortnite",
    image:
      "https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb",
    genre: "Battle Royale",
    platforms: ["Multiplatform"],
    release_date: "2017-07-25",
    developer: "Epic Games",
    publisher: "Epic Games",
    rating: "Teen",
    description:
      "A free-to-play battle royale game that pits players against each other in a vibrant, ever-changing island environment, offering building mechanics and constant updates.",
    price: 0,
  },
  {
    id: 16,
    title: "Among Us",
    image:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/amoguslandscape_2560x1440-3fac17e8bb45d81ec9b2c24655758075",
    genre: "Social Deduction",
    platforms: ["Multiplatform"],
    release_date: "2018-06-15",
    developer: "InnerSloth",
    publisher: "InnerSloth",
    rating: "Everyone 10+",
    description:
      "A multiplayer social deduction game where players work together to complete tasks on a spaceship while attempting to identify the impostors among them.",
    price: 4.99,
  },
  {
    id: 17,
    title: "Pokémon Sword and Shield",
    image: "https://www.nintendo.com/sg/switch/sword_shield/img/hero_sp.jpg",
    genre: "RPG",
    platforms: ["Nintendo Switch"],
    release_date: "2019-11-15",
    developer: "Game Freak",
    publisher: "Nintendo / The Pokémon Company",
    rating: "Everyone",
    description:
      "An RPG adventure set in the Galar region, where players embark on a journey to become the Champion, capturing and battling Pokémon along the way.",
    price: 59.99,
  },
  {
    id: 18,
    title: "Call of Duty: Warzone",
    image:
      "https://www.laptopspirit.fr/wp-content/uploads/new/2022/02/Call-of-Duty-Warzone-1536x864-1.jpg",
    genre: "Battle Royale",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2020-03-10",
    developer: "Infinity Ward / Raven Software",
    publisher: "Activision",
    rating: "Mature",
    description:
      "A free-to-play battle royale game set in the Call of Duty universe, featuring fast-paced combat, strategic gameplay, and cross-platform support.",
    price: 0,
  },
  {
    id: 19,
    title: "The Last of Us Part II",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/da083fa5e19458dd750aa8a6ea30ba10bac6f87074693df5.jpg",
    genre: "Action-Adventure",
    platforms: ["PlayStation 4"],
    release_date: "2020-06-19",
    developer: "Naughty Dog",
    publisher: "Sony Interactive Entertainment",
    rating: "Mature",
    description:
      "A gripping action-adventure game set in a post-apocalyptic world, featuring intense combat, emotional storytelling, and stunning visuals.",
    price: 59.99,
  },
  {
    id: 20,
    title: "Doom Eternal",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/b4Q1XWYaTdJLUvRuALuqr0wP.png",
    genre: "First-Person Shooter",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2020-03-20",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    rating: "Mature",
    description:
      "A relentless first-person shooter that puts players in the role of the Doom Slayer, battling hordes of demons across dimensions, featuring fast-paced action and visceral combat.",
    price: 59.99,
  },
  {
    id: 21,
    title: "Assassin's Creed Valhalla",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202006/1520/EDtkdijFRwbmGKk1G9lrDoEF.png",
    genre: "Action RPG",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2020-11-10",
    developer: "Ubisoft Montreal",
    publisher: "Ubisoft",
    rating: "Mature",
    description:
      "An epic action RPG set in the Viking age, allowing players to lead their clan to victory in England, featuring exploration, combat, and political intrigue.",
    price: 59.99,
  },
  {
    id: 22,
    title: "Hades",
    image:
      "https://image.jeuxvideo.com/medias/161367/1613665411-7537-jaquette-avant.png",
    genre: "Action RPG",
    platforms: ["Nintendo Switch", "PC"],
    release_date: "2020-09-17",
    developer: "Supergiant Games",
    publisher: "Supergiant Games",
    rating: "Teen",
    description:
      "A rogue-like action RPG where players fight their way out of the underworld as the immortal prince of the Greek gods, featuring fast-paced combat and rich storytelling.",
    price: 24.99,
  },
  {
    id: 23,
    title: "Ghost of Tsushima",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202106/2322/ZSrFeb6XkqKiq2PZKWg20yfe.jpg",
    genre: "Action-Adventure",
    platforms: ["PlayStation 4"],
    release_date: "2020-07-17",
    developer: "Sucker Punch Productions",
    publisher: "Sony Interactive Entertainment",
    rating: "Mature",
    description:
      "An open-world action-adventure game set in feudal Japan, where players take on the role of a samurai fighting to liberate the island of Tsushima from Mongol invaders.",
    price: 59.99,
  },
  {
    id: 24,
    title: "Valorant",
    image:
      "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/6/5/ctsejxmdtw9inp8zqqqd/red-bull-campus-clutch-valorant-agents",
    genre: "Hero Shooter",
    platforms: ["PC"],
    release_date: "2020-06-02",
    developer: "Riot Games",
    publisher: "Riot Games",
    rating: "Teen",
    description:
      "A free-to-play tactical shooter where players compete in 5v5 matches, combining precise gunplay with unique agent abilities in a round-based format.",
    price: 0,
  },
  {
    id: 25,
    title: "The Outer Worlds",
    image:
      "https://image.api.playstation.com/vulcan/img/cfn/11307DWVuREjDv3JnXusQxTjHIJHzhxx2_CUkUzQhzwYe5KUktTVe2_rFsnYYa1hMNlqHrWemXr0Nut__AF2KWPJp84uBZvf.png",
    genre: "Action RPG",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2019-10-25",
    developer: "Obsidian Entertainment",
    publisher: "Private Division",
    rating: "Mature",
    description:
      "A satirical single-player RPG set in a retro-futuristic universe, featuring branching narratives, player choice, and dark humor.",
    price: 59.99,
  },
  {
    id: 26,
    title: "Crash Bandicoot 4: It's About Time",
    image:
      "https://image.api.playstation.com/vulcan/img/rnd/202111/1918/psoOkDbYuMdr1RsJo6TpU6bg.png",
    genre: "Platformer",
    platforms: ["PlayStation 4", "Xbox One"],
    release_date: "2020-10-02",
    developer: "Toys for Bob",
    publisher: "Activision",
    rating: "Everyone 10+",
    description:
      "A colorful platformer featuring the iconic marsupial, Crash Bandicoot, on a new adventure through time and space, with challenging levels and nostalgic gameplay.",
    price: 59.99,
  },
  {
    id: 27,
    title: "Marvel's Spider-Man: Miles Morales",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/PRfYtTZQsuj3ALrBXGL8MjAH.jpg",
    genre: "Action-Adventure",
    platforms: ["PlayStation 4", "PlayStation 5"],
    release_date: "2020-11-12",
    developer: "Insomniac Games",
    publisher: "Sony Interactive Entertainment",
    rating: "Teen",
    description:
      "A thrilling action-adventure game where players step into the shoes of Miles Morales as he becomes the new Spider-Man, swinging through the streets of New York City.",
    price: 49.99,
  },
  {
    id: 28,
    title: "Destiny 2",
    image:
      "https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EN_Bungie_Legacy_Collection_2023_S3_2560x1440_2560x1440-c12dafc5484d838c29532a5e8c87fd74",
    genre: "MMO Shooter",
    platforms: ["Multiplatform"],
    release_date: "2017-09-06",
    developer: "Bungie",
    publisher: "Bungie",
    rating: "Teen",
    description:
      "A sci-fi MMO shooter set in a rich universe filled with action and adventure, featuring cooperative and competitive gameplay, as well as a deep progression system.",
    price: 0,
  },
  {
    id: 29,
    title: "Apex Legends",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202401/1810/63e55900b867e1d9e50bf139f92fe1fe94e9a048503990d3.png",
    genre: "Battle Royale",
    platforms: ["Multiplatform"],
    release_date: "2019-02-04",
    developer: "Respawn Entertainment",
    publisher: "Electronic Arts",
    rating: "Teen",
    description:
      "A free-to-play battle royale game set in the Titanfall universe, featuring diverse characters with unique abilities and fast-paced combat.",
    price: 0,
  },
  {
    id: 30,
    title: "DOOM (2016)",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202009/2814/GGyEnCkIXoyiVlN9sRHkzUPo.png",
    genre: "First-Person Shooter",
    platforms: ["Multiplatform"],
    release_date: "2016-05-13",
    developer: "id Software",
    publisher: "Bethesda Softworks",
    rating: "Mature",
    description:
      "A high-octane first-person shooter where players battle hordes of demons from Hell, featuring fast-paced action, brutal weapons, and relentless combat.",
    price: 19.99,
  },
  {
    id: 31,
    title: "Sekiro: Shadows Die Twice",
    image:
      "https://cdn.cloudflare.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1678991267",
    genre: "Action-Adventure",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2019-03-22",
    developer: "FromSoftware",
    publisher: "Activision",
    rating: "Mature",
    description:
      "A challenging action-adventure game set in feudal Japan, where players assume the role of a shinobi seeking revenge, featuring intense swordplay and stealth mechanics.",
    price: 59.99,
  },
  {
    id: 32,
    title: "The Legend of Zelda: Link's Awakening",
    image:
      "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheLegendOfZeldaLinksAwakening_image1600w.jpg",
    genre: "Action-Adventure",
    platforms: ["Nintendo Switch"],
    release_date: "2019-09-20",
    developer: "Nintendo EPD",
    publisher: "Nintendo",
    rating: "Everyone",
    description:
      "A whimsical action-adventure game set on the mysterious Koholint Island, where players guide Link on a quest to awaken the Wind Fish, encountering charming characters and challenging dungeons.",
    price: 59.99,
  },
  {
    id: 33,
    title: "Sea of Thieves",
    image:
      "https://image.jeuxvideo.com/medias/152240/1522396063-3523-jaquette-avant.jpg",
    genre: "Action-Adventure",
    platforms: ["Xbox One", "PC"],
    release_date: "2018-03-20",
    developer: "Rare",
    publisher: "Xbox Game Studios",
    rating: "Teen",
    description:
      "A cooperative multiplayer game where players embark on pirate adventures, exploring a vast open world, battling rival crews, and seeking treasure in a shared online experience.",
    price: 39.99,
  },
  {
    id: 34,
    title: "Halo Infinite",
    image: "https://pic.clubic.com/v1/images/1811528/raw",
    genre: "First-Person Shooter",
    platforms: ["Xbox Series X/S", "Xbox One", "PC"],
    release_date: "2021-12-08",
    developer: "343 Industries",
    publisher: "Xbox Game Studios",
    rating: "Teen",
    description:
      "An upcoming installment in the iconic Halo series, featuring Master Chief's return in an epic campaign and intense multiplayer battles across a vast sci-fi universe.",
    price: 59.99,
  },
  {
    id: 35,
    title: "Monster Hunter: World",
    image:
      "https://gaming-cdn.com/images/products/3220/orig/monster-hunter-world-xbox-one-xbox-series-x-s-xbox-one-xbox-series-x-s-jeu-microsoft-store-europe-cover.jpg?v=1703157851",
    genre: "Action RPG",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2018-01-26",
    developer: "Capcom",
    publisher: "Capcom",
    rating: "Teen",
    description:
      "An action RPG where players hunt down gigantic monsters in a lush ecosystem, collecting resources, crafting gear, and mastering various weapon types.",
    price: 29.99,
  },
  {
    id: 36,
    title: "Mortal Kombat 11",
    image:
      "https://image.api.playstation.com/vulcan/ap/rnd/202010/0822/4WzxHtmjXV1dQpWqj1B6UAMk.jpg",
    genre: "Fighting",
    platforms: ["Multiplatform"],
    release_date: "2019-04-23",
    developer: "NetherRealm Studios",
    publisher: "Warner Bros. Interactive Entertainment",
    rating: "Mature",
    description:
      "The latest installment in the iconic fighting game franchise, featuring brutal combat, cinematic storytelling, and a diverse roster of fighters.",
    price: 49.99,
  },
  {
    id: 37,
    title: "Fallout 76",
    image:
      "https://images.ctfassets.net/rporu91m20dc/2a3wESrWweWSZkTbNrXo2/2c29f6de40a685e412886db7edfeb096/FO76-Wastelanders-SteelDawn_Screens_01-SteelDawn-THUMB1.jpg",
    genre: "Action RPG",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    release_date: "2018-11-14",
    developer: "Bethesda Game Studios",
    publisher: "Bethesda Softworks",
    rating: "Mature",
    description:
      "An online multiplayer RPG set in the Fallout universe, where players explore a post-apocalyptic world, build settlements, and engage in quests and events.",
    price: 39.99,
  },
];

module.exports = games;
