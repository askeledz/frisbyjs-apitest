const frisby = require('frisby');

it ('POST should return a status of 201 Created', function () {
    return frisby
        .post('https://reqres.in/api/users', {
            "name": "morpheus",
            "job": "leader"
        })
        .expect('status', 201)
        .then(function (res) {
            var data  = JSON.parse(res['_body']);
            //console.log(data);
            expect(data['name']).toBe('morpheus');
            expect(data['job']).toBe('leader');
        });
});
