const request = require('request');

const breeds = function(breedId) {
  request(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId.slice(0,4).toLowerCase()}`, (err, res, body) => {
    const data = JSON.parse(body);
    console.log(data[0].description);
  });
};

breeds('Chartreux');