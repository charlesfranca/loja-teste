var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())

var livros = [{
    "imagem": "file:///Users/charlesfranca/Documents/Free_Book_Store_Ecommerce_Template/home.html",
    "titulo": "Livro 1",
    "author": "Charles",
    "descricao": "Meu primeiro livro de testes",
    "valor": "22,90"
}, {
    "imagem": "file:///Users/charlesfranca/Documents/Free_Book_Store_Ecommerce_Template/home.html#",
    "titulo": "Livro 2",
    "author": "Charles",
    "descricao": "Meu primeiro livro de testes",
    "valor": "22,90"
}, {
    "imagem": "file:///Users/charlesfranca/Documents/Free_Book_Store_Ecommerce_Template/css/images/image03.jpg",
    "titulo": "Livro 3",
    "author": "Charles",
    "descricao": "Meu primeiro livro de testes",
    "valor": "22,90"
}, {
    "imagem": "file:///Users/charlesfranca/Documents/Free_Book_Store_Ecommerce_Template/css/images/image04.jpg",
    "titulo": "Livro 4",
    "author": "Charles",
    "descricao": "Meu primeiro livro de testes",
    "valor": "22,90"
}, {
    "imagem": "file:///Users/charlesfranca/Documents/Free_Book_Store_Ecommerce_Template/css/images/image05.jpg",
    "titulo": "Livro 5",
    "author": "Charles",
    "descricao": "Meu primeiro livro de testes",
    "valor": "22,90"
}]

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

app.get('/livros', function(req, res) {
    res.send(
        livros
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