var express = require('express');
var cors = require('cors')
var app = express();

require('express-swagger-ui')({
    app: app,
    swaggerUrl: '/swagger.json', // this is the default value
    localPath: '/explorer' // this is the default value
});

app.use(cors())

var produtos = [{
        titulo: "Camera digital",
        precode: "90,00",
        precopor: "50,00",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/9266/0/9266029SZ.jpg",
        rating: 4
    },
    {
        titulo: "Camera digital 2",
        precode: "90,00",
        precopor: "50,00",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/9266/0/9266029SZ.jpg",
        rating: 4
    },
    {
        titulo: "Camera digital 3",
        precode: "90,00",
        precopor: "50,00",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/9266/0/9266029SZ.jpg",
        rating: 4
    },
    {
        titulo: "Camera digital 4",
        precode: "90,00",
        precopor: "50,00",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/9266/0/9266029SZ.jpg",
        rating: 4
    },
    {
        titulo: "Camera digital 4",
        precode: "90,00",
        precopor: "50,00",
        imagem: "https://images-americanas.b2w.io/produtos/01/00/sku/9266/0/9266029SZ.jpg",
        rating: 4
    }
]

app.get('/produtos', function(req, res) {
    res.send(
        produtos
    );
});

app.get('/usuario/:id', function(req, res) {
    res.send({
        id: req.params.id,
        nome: "Charles",
        "idade": 27,
        "email": "charles-franca@live.com"
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});