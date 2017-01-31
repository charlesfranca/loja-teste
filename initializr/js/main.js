// Função que será executada após o documento ser carregado
$(document).ready(function() {
    // Função do Javascript que efetua uma requisição assincrona(não recarrega a página depois de executada e não trava a página)
    $.ajax({
        url: "http://localhost:3000/produtos", // Url do endpoint a ser executado
        type: "delete", // Methodo da requisição (post, put, delete)
        data: {}, // Parâmetros enviados na requisição
        success: function(produtos) { // Função que será executada se a requisição acontecer com sucesso.
            console.log(produtos);

            // Função que executa o loop
            // A variavel index é o indice do loop e a variavel value tem o valor do item nessa posição
            $.each(produtos, function(index, value) {
                // Vai fazer o print do item na posição
                console.log(index);
                // Vai fazer o print do valor do item
                console.log(value);
                // A função split var dividir a string nos lugares onde aparece o caracter 
                // indicado nos parenteses eliminando-o e colocando todos os pedaços dentro do array/vetor
                // valor do "precode" = 90,00
                var precoarray = value.precode.split(",");
                // Resultado do split
                //  [
                //     90,
                //     00
                //  ]
                var template = `<div class="produto-item col-md-3">
                            <div class="produto-titulo">
                                <h3>` + value.titulo + `</h3>
                            </div>
                            <div class="produto-imagem">
                                <img src="` + value.imagem + `" alt="">
                            </div>
                            <div class="produto-rating">
                                ` + value.rating + `
                            </div>
                            <div class="produto-info">
                                <p class="preco-de"> <span class="preco-de-reais">R$ ` + precoarray[0] + `</span><span class="preco-de-centavos">,` + precoarray[1] + `</span></p>
                                <p class="preco-por">R$ ` + value.precopor + `</p>
                                <p class="forma-pagamento">á visata</p>
                                <p><button type="button" class="btn btn-primary">comprar</button></p>
                            </div>
                        </div>`;

                $("#row-produtos").append(template).css({
                    background: ""
                });

                console.log(template);
            });
        },
        error: function(error) { // Função que será executada caso a ocorra um erro na requisição

        }
    })
});