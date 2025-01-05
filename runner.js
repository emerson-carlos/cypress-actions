const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijk5ODhiNGRhLTE0YTQtNGQ2MS1hZDJkLWI4NjA0YjBlZjhlMy0xNzM2MTAxNDM0OTE0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMWY3OGU3ZDEtMmJkMy00YjI2LWFkODktNjQ4OWNlYzExYjA3IiwidHlwZSI6InQifQ.RCa65xZbdBvrznV3aydl7Ws4lw91IHD8lW5tCSzhi5g'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
