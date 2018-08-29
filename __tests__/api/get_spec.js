const frisby = require('frisby');
const Joi = frisby.Joi;
// URL - http://api.randomuser.me/0.6?gender=female


it('Verify a Random User',function () {
    return frisby.get('http://api.randomuser.me/0.6?gender=female')
        .expect('status',200)
        .then(function (res) {
            var data  = JSON.parse(res['_body']);
            //console.log(data.results[0]['user']['gender']);
            expect(data.results[0]['user']['gender']).toBe('female');
            //console.log(data.results[0]);
        });
});


it('Verify Users',function () {
    return frisby.get('https://reqres.in/api/users?page=2')
        .expect('status',200)
        .then(function (res) {
            var data  = JSON.parse(res['_body']);
            //console.log(data.data[0]);
            expect(data.data[0]['first_name']).toBe('Eve');
            
        });
});