create table games (
  id INT PRIMARY KEY auto_increment NOT NULL,
  title VARCHAR(255) NOT NULL,
  image VARCHAR(511) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  platforms VARCHAR(255) NULL,
  release_date DATE NOT NULL,
  developer VARCHAR(255) NOT NULL,
  publisher VARCHAR(255) NULL,
  rating VARCHAR(255) NULL,
  description TEXT NOT NULL,
  price DECIMAL(5, 2) NOT NULL
);


INSERT INTO games (title, image, genre, platforms, release_date, developer, publisher, rating, description, price) 
VALUE ("The Witcher 3: Wild Hunt", "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png", "Action RPG", "PlayStation 4", "2015-05-19", "CD Projekt Red", "CD Projekt", "Mature", "An open-world action RPG set in a dark fantasy universe, featuring rich storytelling, dynamic combat, and vast exploration.", 59.99)