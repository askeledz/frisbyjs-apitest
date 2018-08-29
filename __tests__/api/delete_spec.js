const frisby = require('frisby');
const Joi = frisby.Joi;
// URL - http://api.randomuser.me/0.6?gender=female


it ('DELETE should return a status of 204 No Content', function () {
    return frisby
        .del('https://reqres.in/api/users/2')
        .expect('status', 204);
});