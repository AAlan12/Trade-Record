/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}


api.data = function(req, res) {

    res.json([
        { total: 200.5, vezes: 2 },
        { total: 100.2, vezes: 5 },
        { total: 50.5, vezes: 1 },
        { total: 70.5, vezes: 2 }
    ]);
    
};


module.exports = api;