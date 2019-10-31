/*router.get('/',function(req,res){
    res.send(list)
})
router.post('/',function (req, res){
    list.push(req.body.data)
    res.send(list)
})

module.exports = router*/
var listModels = require('../model/listModels')

module.exports.getData = function(req, res){
    const {key} = req.params
    
    var value = listModels.get(key)
    if(value){
        res.status(200).send(value)
    } else{
        res.status(404).send(key+'is not found')
    }
}

module.exports.addData = function(req, res){
    const{key,value}=req.params

    listModels.set(req.params.key, req.params.value)
    res.status(200).send('Success')
}

module.exports.updateData = function(req, res){
    const {key, value} = req.params

    if(listModels.has(key)){
        listModels.set(key, value)
        res.status(200).send('Success')
    }else{
        res.status(404).send('Key is not found')
    }
}

module.exports.removeData = function(req, res){
    const {key} = req.params

    if(listModels.has(key)){
        listModels.delete(key)
        res.status(200).send('Success')
    }else{
        res.status(404).send('Key is not found')
    }
}
var request = require("request");
module.exports.postDeta = request({
    uri: 'https://reqres.in/api/users',
    method: 'POST',
    body: {
    name: 'morpheus',
    job: 'leader'
    },
    json:true
    }, (error, res, body) => {
        console.log(body)
    })
    