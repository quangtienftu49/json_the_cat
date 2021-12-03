const fetchBreedDescription = require('./breedFetcher');

const breedName = 'Siberian';

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});