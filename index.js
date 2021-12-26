const express = require('express'),
  morgan = require('morgan');
const res = require('express/lib/response');

const app = express();

app.use(morgan('common'));

//define movie variable
let movies = [
  {
    title: 'Star Wars Episode IV - A New Hope',
    year: '1977'
  },
  {
    title: 'Star Wars Episode V - The Empire Strikes Back',
    year: '1980'
  },
  {
    title: 'Star Wars Episode VI – Return of the Jedi',
    year: '1983'
  },
  {
    title: 'Star Wars Episode I – The Phantom Menace',
    year: '1999'
  },
  {
    title: 'Star Wars Episode II – Attack of the Clones',
    year: '2002'
  },
  {
    title: 'Star Wars Episode III – Revenge of the Sith',
    year: '2005'
  },
  {
    title: 'Star Wars Episode VII – The Force Awakens',
    year: '2015'
  },
  {
    title: 'Star Wars Episode VIII – The Last Jedi',
    year: '2017'
  },
  {
    title: 'Star Wars Episode IX – The Rise of Skywalker',
    year: '2019'
  },
];

//Home page
app.get('/', (req, res) => {
  res.send('Welcome to MovieFlix!');
});

//Get list of all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

//Get data about a single movie
app.get('/movies/:title', (req, res) => {
  res.send('Movie by title');
});

//Get data about a genre
app.get('/genres/:title', (req, res) => {
  res.send('Genre by name/title');
});

//Get data about a director by name
app.get('/directors/:name', (req, res) => {
  res.send('Data about director by name');
});

//allow new users to register
app.post('/users', (req, res) => {
  res.send('Registration completed');
});

//Allow users to update their user info
app.put('/users/:username', (req, res) => {
  res.send('Information updated');
});

//Allow users to add a movie to their list of favorites
app.post('/users/:username/movies/:movieID', (req, res) => {
  res.send('Movie was added to favorites');
});

//Allow users to remove a movie from their list of favorites 
app.delete('/users/:username/movies/:movieID', (req, res) => {
  res.send('Movie was deleted');
});

//Allow existing users to deregister
app.delete('/users/:username', (req, res) => {
  res.send('Your account was successfully deleted');
});

//automatically route all requests to public folder
app.use(express.static('public', {
  extensions: ['html'],
}));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
}); 