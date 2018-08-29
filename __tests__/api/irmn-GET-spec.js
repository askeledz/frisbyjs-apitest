const frisby = require('frisby');

frisby.globalSetup({
    request: {
        headers: {
            'Irm-AccessKey': '4000000010000000cf7998f5b835c14f85b7e8c89c8415ed080000005876b701a812d6080500000061646d696e13000000313233363935303538313235337c41646d696e2800000048845deb10780aa4ff381c12b6f93c16e7c586c2584525819813415f3b47da7d97a2742d55521fe1',
            'Content-Type' : 'application/json'
        }
    }
});

it ('GET should return All Users and status 200', function () {
    return frisby
        .get('https://site01.sprint32all46.planetassociates.net:8080/irm/rest/v1.14/users')
        .expect('status', 200)
        .then(function (res) {
            var data  = JSON.parse(res['_body']);
            console.log(data);
        });
});