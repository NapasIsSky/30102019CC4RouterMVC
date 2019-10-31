var request = require("request");
request({
    uri: 'https://reqres.in/api/users',
    method: 'DELETE',
    body: {
    name: 'morpheus',
    job: 'leader'
    },
    json:true
    }, (error, res, body) => {
        console.log(body)
    })
    
