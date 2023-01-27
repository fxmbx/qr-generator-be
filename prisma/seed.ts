import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const movie1 = await prisma.movie.upsert({
    where: { title: 'Avatar' },
    update: {},
    create: {
      title: 'Avatar',
      year: '2009',
      rated: 'PG-13',
      released: '18 Dec 2009',
      runtime: '162 min',
      genre: 'Action, Adventure, Fantasy',
      director: 'James Cameron',
      writer: 'James Cameron',
      actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
      plot: 'A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
      language: 'English, Spanish',
      country: 'USA, UK',
      awards: 'Won 3 Oscars. Another 80 wins & 121 nominations.',
      poster:
        'http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg',
      metascore: '83',
      imdbRating: '7.9',
      imdbVotes: '890,617',
      imdbID: 'tt0499549',
      type: 'movie',
      response: 'True',
    },
  });

  const movie1_image1 = await prisma.image.upsert({
    where: { id: 1 },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',

      movieId: 1,
    },
  });
  const movie1_image2 = await prisma.image.upsert({
    where: { id: 2 },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzM2MDk3MTcyMV5BMl5BanBnXkFtZTcwNjg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',

      movieId: 1,
    },
  });
  const movie1_image3 = await prisma.image.upsert({
    where: { id: 3 },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',

      movieId: 1,
    },
  });
  const movie1_image4 = await prisma.image.upsert({
    where: { id: 4 },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxOTEwNDcxN15BMl5BanBnXkFtZTcwOTg0MTUzNA@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',

      movieId: 1,
    },
  });
  const movie1_image5 = await prisma.image.upsert({
    where: { id: 5 },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMDg1Nzk1MV5BMl5BanBnXkFtZTcwMDk0MTUzNA@@._V1_SX1500_CR0,0,1500,999_AL_.jpg',

      movieId: 1,
    },
  });

  await movie2();
  await movie3();
  await movie4();
  await movie5();
  await movie6();
  await movie7();
  await movie8();
  await movie9();
  await movie10();
  await movie11();
}

async function movie2() {
  const movie = await prisma.movie.upsert({
    where: { title: 'I Am Legend' },
    update: {},
    create: {
      title: 'I Am Legend',
      year: '2007',
      rated: 'PG-13',
      released: '14 Dec 2007',
      runtime: '101 min',
      genre: 'Drama, Horror, Sci-Fi',
      director: 'Francis Lawrence',
      writer:
        'Mark Protosevich (screenplay), Akiva Goldsman (screenplay), Richard Matheson (novel), John William Corrington, Joyce Hooper Corrington',
      actors:
        'Will Smith, Alice Braga, Charlie Tahan, Salli Richardson-Whitfield',
      plot: 'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles valiantly to find a cure.',
      language: 'English',
      country: 'USA',
      awards: '9 wins & 21 nominations.',
      poster:
        'http://ia.media-imdb.com/images/M/MV5BMTU4NzMyNDk1OV5BMl5BanBnXkFtZTcwOTEwMzU1MQ@@._V1_SX300.jpg',
      metascore: '65',
      imdbRating: '7.2',
      imdbVotes: '533,874',
      imdbID: 'tt0480249',
      type: 'movie',
      response: 'True',
    },
  });

  const movie2_image1 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTI0NTI4NjE3NV5BMl5BanBnXkFtZTYwMDA0Nzc4._V1_.jpg',
      movieId: 2,
    },
  });
  const movie2_image2 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIwMDg2MDU4M15BMl5BanBnXkFtZTYwMTA0Nzc4._V1_.jpg',

      movieId: 2,
    },
  });
  const movie2_image3 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5MDM1OTU5OV5BMl5BanBnXkFtZTYwMjA0Nzc4._V1_.jpg',

      movieId: 2,
    },
  });
  const movie2_image4 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0MTI2NjMzMzFeQTJeQWpwZ15BbWU2MDMwNDc3OA@@._V1_.jpg',
      movieId: 2,
    },
  });
}
async function movie4() {
  const movie = await prisma.movie.upsert({
    where: { title: 'The Avengers' },
    update: {},
    create: {
      title: 'The Avengers',
      year: '2012',
      rated: 'PG-13',
      released: '04 May 2012',
      runtime: '143 min',
      genre: 'Action, Sci-Fi, Thriller',
      director: 'Joss Whedon',
      writer: 'Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)',
      actors: 'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth',
      plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
      language: 'English, Russian',
      country: 'USA',
      awards: 'Nominated for 1 Oscar. Another 34 wins & 75 nominations.',
      poster:
        'http://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg',
      metascore: '69',
      imdbRating: '8.1',
      imdbVotes: '1,003,301',
      imdbID: 'tt0848228',
      type: 'movie',
      response: 'True',
    },
  });

  const movie4_image1 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA0NjY0NzE4OTReQTJeQWpwZ15BbWU3MDczODg2Nzc@._V1_SX1777_CR0,0,1777,999_AL_.jpg',

      movieId: 4,
    },
  });
  const movie4_image2 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE1MzEzMjcyM15BMl5BanBnXkFtZTcwNDM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      movieId: 4,
    },
  });
  const movie4_image3 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4NzM2Mjc5MV5BMl5BanBnXkFtZTcwMTkwOTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',

      movieId: 4,
    },
  });
  const movie4_image4 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwMzM2MTg1M15BMl5BanBnXkFtZTcwNjM4ODY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',

      movieId: 4,
    },
  });
  const movie4_image5 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MzQ3NjA5N15BMl5BanBnXkFtZTcwMzY5OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      movieId: 4,
    },
  });
}
async function movie3() {
  const movie = await prisma.movie.upsert({
    where: { title: '300' },
    update: {},
    create: {
      title: '300',
      year: '2006',
      rated: 'R',
      released: '09 Mar 2007',
      runtime: '117 min',
      genre: 'Action, Drama, Fantasy',
      director: 'Zack Snyder',
      writer:
        'Zack Snyder (screenplay), Kurt Johnstad (screenplay), Michael Gordon (screenplay), Frank Miller (graphic novel), Lynn Varley (graphic novel)',
      actors: 'Gerard Butler, Lena Headey, Dominic West, David Wenham',
      plot: 'King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.',
      language: 'English',
      country: 'USA',
      awards: '16 wins & 42 nominations.',
      poster:
        'http://ia.media-imdb.com/images/M/MV5BMjAzNTkzNjcxNl5BMl5BanBnXkFtZTYwNDA4NjE3._V1_SX300.jpg',
      metascore: '52',
      imdbRating: '7.7',
      imdbVotes: '611,046',
      imdbID: 'tt0416449',
      type: 'movie',
      response: 'True',
    },
  });

  const movie3_image1 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg',

      movieId: 3,
    },
  });
  const movie3_image2 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwNTgyNTMzNF5BMl5BanBnXkFtZTcwNDA2NTIyMw@@._V1_SX1777_CR0,0,1777,935_AL_.jpg',

      movieId: 3,
    },
  });
  const movie3_image3 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0MjQzOTEwMV5BMl5BanBnXkFtZTcwMzE2NTIyMw@@._V1_SX1777_CR0,0,1777,947_AL_.jpg',

      movieId: 3,
    },
  });
}

async function movie5() {
  const movie = await prisma.movie.upsert({
    where: { title: 'The WOlf of Wall Street' },
    update: {},
    create: {
      title: 'The WOlf of Wall Street',
      year: '2013',
      rated: 'R',
      released: '25 Dec 2013',
      runtime: '180 min',
      genre: 'Biography, Comedy, Crime',
      director: 'Martin Scorsese',
      writer: 'Terence Winter (screenplay), Jordan Belfort (book)',
      actors:
        'Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey',
      plot: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.',
      language: 'English, French',
      country: 'USA',
      awards: 'Nominated for 5 Oscars. Another 35 wins & 154 nominations.',
      poster:
        'http://ia.media-imdb.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg',
      metascore: '75',
      imdbRating: '8.2',
      imdbVotes: '786,985',
      imdbID: 'tt0993846',
      type: 'movie',
      response: 'True',
    },
  });

  const movie5_image1 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDIwMDIxNzk3Ml5BMl5BanBnXkFtZTgwMTg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',

      movieId: 5,
    },
  });
  const movie5_image2 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc0NzAxODAyMl5BMl5BanBnXkFtZTgwMDg0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      movieId: 5,
    },
  });
  const movie5_image3 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTExMDk1MDE4NzVeQTJeQWpwZ15BbWU4MDM4NDM0ODAx._V1_SX1500_CR0,0,1500,999_AL_.jpg',

      movieId: 5,
    },
  });
  const movie5_image4 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg3MTY4NDk4Nl5BMl5BanBnXkFtZTgwNjc0MzQ4MDE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',

      movieId: 5,
    },
  });
  const movie5_image5 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTg4MDI0Ml5BMl5BanBnXkFtZTgwOTY0MzQ4MDE@._V1_SY1000_CR0,0,1553,1000_AL_.jpg',
      movieId: 5,
    },
  });
}
async function movie6() {
  const movie = await prisma.movie.upsert({
    where: { title: 'Interstellar' },
    update: {},
    create: {
      title: 'Interstellar',
      year: '2014',
      rated: 'PG-13',
      released: '07 Nov 2014',
      runtime: '169 min',
      genre: 'Adventure, Drama, Sci-Fi',
      director: 'Christopher Nolan',
      writer: 'Jonathan Nolan, Christopher Nolan',
      actors: 'Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow',
      plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      language: 'English',
      country: 'USA, UK',
      awards: 'Won 1 Oscar. Another 39 wins & 134 nominations.',
      poster:
        'http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg',
      metascore: '74',
      imdbRating: '8.6',
      imdbVotes: '937,412',
      imdbID: 'tt0816692',
      type: 'movie',
      response: 'True',
    },
  });

  const movie6_image1 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA3NTEwOTMxMV5BMl5BanBnXkFtZTgwMjMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',

      movieId: 6,
    },
  });
  const movie6_image2 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzQ5ODE2MzEwM15BMl5BanBnXkFtZTgwMTMyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',

      movieId: 6,
    },
  });
  const movie6_image3 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTg4Njk4MzY0Nl5BMl5BanBnXkFtZTgwMzIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',

      movieId: 6,
    },
  });
  const movie6_image4 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3MTM0MTc3Ml5BMl5BanBnXkFtZTgwMDIyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',

      movieId: 6,
    },
  });
  const movie6_image5 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjYzNjE2NDk3N15BMl5BanBnXkFtZTgwNzEyODgxMzE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      movieId: 6,
    },
  });
}
async function movie7() {
  const movie = await prisma.movie.upsert({
    where: { title: 'Game of Thrones' },
    update: {},
    create: {
      title: 'Game of Thrones',
      year: '2011–2022',
      rated: 'TV-MA',
      released: '17 Apr 2011',
      runtime: '56 min',
      genre: 'Adventure, Drama, Fantasy',
      director: 'N/A',
      writer: 'David Benioff, D.B. Weiss',
      actors: 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
      plot: 'While a civil war brews between several noble families in Westeros, the children of the former rulers of the land attempt to rise up to power. Meanwhile a forgotten race, bent on destruction, plans to return after thousands of years in the North.',
      language: 'English',
      country: 'USA, UK',
      awards: 'Won 1 Golden Globe. Another 185 wins & 334 nominations.',
      poster:
        'http://ia.media-imdb.com/images/M/MV5BMjM5OTQ1MTY5Nl5BMl5BanBnXkFtZTgwMjM3NzMxODE@._V1_SX300.jpg',
      metascore: 'N/A',
      imdbRating: '9.5',
      imdbVotes: '1,046,830',
      imdbID: 'tt0944947',
      type: 'series',
      totalSeasons: '8',
      response: 'True',
    },
  });

  const movie7_image1 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg',

      movieId: 7,
    },
  });
  const movie7_image2 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZjZkN2M5ODgtMjQ2OC00ZjAxLWE1MjMtZDE0OTNmNGM0NWEwXkEyXkFqcGdeQXVyNjUxNzgwNTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg',

      movieId: 7,
    },
  });
  const movie7_image3 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjZjNWIzMzQtZWZjYy00ZTkwLWJiMTYtOWRkZDBhNWJhY2JmXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg',

      movieId: 7,
    },
  });
  const movie7_image4 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTMyMTRjZWEtM2UxMS00ZjU5LWIxMTYtZDA5YmJhZmRjYTc4XkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
      movieId: 7,
    },
  });
}

async function movie8() {
  const movie = await prisma.movie.upsert({
    where: { title: 'Vikings' },
    update: {},
    create: {
      title: 'Vikings',
      year: '2013–',
      rated: 'TV-14',
      released: '03 Mar 2013',
      runtime: '44 min',
      genre: 'Action, Drama, History',
      director: 'N/A',
      writer: 'Michael Hirst',
      actors:
        'Travis Fimmel, Clive Standen, Gustaf Skarsgård, Katheryn Winnick',
      plot: 'The world of the Vikings is brought to life through the journey of Ragnar Lothbrok, the first Viking to emerge from Norse legend and onto the pages of history - a man on the edge of myth.',
      language: 'English, Old English, Norse, Old, Latin',
      country: 'Ireland, Canada',
      awards:
        'Nominated for 7 Primetime Emmys. Another 17 wins & 49 nominations.',
      poster:
        'http://ia.media-imdb.com/images/M/MV5BOTEzNzI3MDc0N15BMl5BanBnXkFtZTgwMzk1MzA5NzE@._V1_SX300.jpg',
      metascore: 'N/A',
      imdbRating: '8.6',
      imdbVotes: '198,041',
      imdbID: 'tt2306299',
      type: 'series',
      totalSeasons: '5',
      response: 'True',
    },
  });

  const movie8_image1 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM5MTM1ODUxNV5BMl5BanBnXkFtZTgwNTAzOTI2ODE@._V1_.jpg',

      movieId: 8,
    },
  });
  const movie8_image2 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNzU2NDcxODMyOF5BMl5BanBnXkFtZTgwNDAzOTI2ODE@._V1_.jpg',

      movieId: 8,
    },
  });
  const movie8_image3 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMzMzIzOTU2M15BMl5BanBnXkFtZTgwODMzMTkyODE@._V1_SY1000_SX1500_AL_.jpg',

      movieId: 8,
    },
  });
  const movie8_image4 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NTQ2MDA3NF5BMl5BanBnXkFtZTgwODkxMDUxODE@._V1_SY1000_SX1500_AL_.jpg',
      movieId: 8,
    },
  });

  const movie8_image5 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTQ3NTA5N15BMl5BanBnXkFtZTgwMzExMDUxODE@._V1_SY1000_SX1500_AL_.jpg',
      movieId: 8,
    },
  });
}

async function movie9() {
  const movie = await prisma.movie.upsert({
    where: { title: 'Gotham' },
    update: {},
    create: {
      title: 'Gotham',
      year: '2014–',
      rated: 'TV-14',
      released: '01 Aug 2014',
      runtime: '42 min',
      genre: 'Action, Crime, Drama',
      director: 'N/A',
      writer: 'Bruno Heller',
      actors: 'Ben McKenzie, Donal Logue, David Mazouz, Sean Pertwee',
      plot: "The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
      language: 'English',
      country: 'USA',
      awards:
        'Nominated for 4 Primetime Emmys. Another 3 wins & 22 nominations.',
      poster:
        'http://ia.media-imdb.com/images/M/MV5BMTY2MjMwNDE4OV5BMl5BanBnXkFtZTgwNjI1NjU0OTE@._V1_SX300.jpg',
      metascore: 'N/A',
      imdbRating: '8.0',
      imdbVotes: '133,375',
      imdbID: 'tt3749900',
      type: 'series',
      totalSeasons: '3',
      response: 'True',
    },
  });

  const movie9_image1 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDI3ODYyODY4OV5BMl5BanBnXkFtZTgwNjE5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg',

      movieId: 9,
    },
  });
  const movie9_image2 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5OTExMTIwNF5BMl5BanBnXkFtZTgwMjI5NDMwMDI@._V1_SY1000_SX1500_AL_.jpg',

      movieId: 9,
    },
  });
  const movie9_image3 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MDY2NjA3MzBeQTJeQWpwZ15BbWU4MDU0MDkzODgx._V1_SX1499_CR0,0,1499,999_AL_.jpg',

      movieId: 9,
    },
  });
  const movie9_image4 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM3MzYzNDgzOV5BMl5BanBnXkFtZTgwMjQwOTM4ODE@._V1_SY1000_CR0,0,1498,1000_AL_.jpg',
      movieId: 9,
    },
  });

  const movie9_image5 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwODAyNjk0NF5BMl5BanBnXkFtZTgwODU4MzMyODE@._V1_SY1000_CR0,0,1500,1000_AL_.jpg',
      movieId: 9,
    },
  });
}
async function movie10() {
  const movie = await prisma.movie.upsert({
    where: { title: 'Power' },
    update: {},
    create: {
      title: 'Power',
      year: '2014–',
      rated: 'TV-MA',
      released: 'N/A',
      runtime: '50 min',
      genre: 'Crime, Drama',
      director: 'N/A',
      writer: 'Courtney Kemp Agboh',
      actors: 'Omari Hardwick, Joseph Sikora, Andy Bean, Lela Loren',
      plot: 'James "Ghost" St. Patrick, a wealthy New York night club owner who has it all, catering for the city\'s elite and dreaming big, lives a double life as a drug kingpin.',
      language: 'English',
      country: 'USA',
      awards: '1 win & 6 nominations.',
      poster:
        'http://ia.media-imdb.com/images/M/MV5BOTA4NTkzMjUzOF5BMl5BanBnXkFtZTgwNzg5ODkxOTE@._V1_SX300.jpg',
      metascore: 'N/A',
      imdbRating: '8.0',
      imdbVotes: '14,770',
      imdbID: 'tt3281796',
      type: 'series',
      totalSeasons: '3',
      response: 'True',
    },
  });

  const movie10_image1 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2ODg0MzMzM15BMl5BanBnXkFtZTgwODYxODA5NTE@._V1_SY1000_SX1500_AL_.jpg',

      movieId: 10,
    },
  });
  const movie10_image2 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjA0MzczNV5BMl5BanBnXkFtZTgwNTIyODA5NTE@._V1_SY1000_SX1500_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTcyMjA0MzczNV5BMl5BanBnXkFtZTgwNTIyODA5NTE@._V1_SY1000_SX1500_AL_.jpg',

      movieId: 10,
    },
  });
  const movie10_image3 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTI0NzQ2NV5BMl5BanBnXkFtZTgwMDkxODA5NTE@._V1_SY1000_SX1500_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk0MTI0NzQ2NV5BMl5BanBnXkFtZTgwMDkxODA5NTE@._V1_SY1000_SX1500_AL_.jpg',

      movieId: 10,
    },
  });
  const movie10_image4 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Mzk1ODcxM15BMl5BanBnXkFtZTgwNDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4Mzk1ODcxM15BMl5BanBnXkFtZTgwNDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg',
      movieId: 10,
    },
  });

  const movie10_image5 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTE0NDI1M15BMl5BanBnXkFtZTgwMDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNTE0NDI1M15BMl5BanBnXkFtZTgwMDQyODA5NTE@._V1_SY1000_SX1500_AL_.jpg',
      movieId: 10,
    },
  });
}
async function movie11() {
  const movie = await prisma.movie.upsert({
    where: { title: 'Narcos' },
    update: {},
    create: {
      title: 'Narcos',
      year: '2015–',
      rated: 'TV-MA',
      released: '28 Aug 2015',
      runtime: '49 min',
      genre: 'Biography, Crime, Drama',
      director: 'N/A',
      writer: 'Carlo Bernard, Chris Brancato, Doug Miro, Paul Eckstein',
      actors: 'Wagner Moura, Boyd Holbrook, Pedro Pascal, Joanna Christie',
      plot: 'A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.',
      language: 'English, Spanish',
      country: 'USA',
      awards: 'Nominated for 2 Golden Globes. Another 4 nominations.',
      poster:
        'http://ia.media-imdb.com/images/M/MV5BMTU0ODQ4NDg2OF5BMl5BanBnXkFtZTgwNzczNTE4OTE@._V1_SX300.jpg',
      metascore: 'N/A',
      imdbRating: '8.9',
      imdbVotes: '118,680',
      imdbID: 'tt2707408',
      type: 'series',
      totalSeasons: '2',
      response: 'True',
    },
  });

  const movie11_image1 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2MDMzMTc0MF5BMl5BanBnXkFtZTgwMTAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      movieId: 11,
    },
  });
  const movie11_image2 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMDkyOTEyNV5BMl5BanBnXkFtZTgwNjY3Mjc3OTE@._V1_SY1000_SX1500_AL_.jpg',

      movieId: 11,
    },
  });
  const movie11_image3 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NDUwMTU2NV5BMl5BanBnXkFtZTgwNTI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg',

      movieId: 11,
    },
  });
  const movie11_image4 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODA1NjAyMTQ3Ml5BMl5BanBnXkFtZTgwNjI1Mzc3OTE@._V1_SY1000_CR0,0,1499,1000_AL_.jpg',

      movieId: 11,
    },
  });

  const movie11_image5 = await prisma.image.upsert({
    where: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
    },
    update: {},
    create: {
      url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0NzQ0OTAwNl5BMl5BanBnXkFtZTgwMDAyMzA1OTE@._V1_SX1500_CR0,0,1500,999_AL_.jpg',
      movieId: 11,
    },
  });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
