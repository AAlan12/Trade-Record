/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.data = function(req, res) {

    res.json([
        { total: 200.5, times: 2 },
        { total: 100.2, times: 5 },
        { total: 50.5, times: 1 },
        { total: 70.5, times: 2 }
    ]);
    
};


module.exports = api;