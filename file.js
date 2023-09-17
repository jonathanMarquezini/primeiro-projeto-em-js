var lista = [
    {
        'nome': "Audi Supra TT",
        'img': "img/car-card.png",
        'descricao': "O audi acelera de 0 a 100 km/h em míseros 3,8 segundos e atinge a velocidade maxima de 280 km/h"
    },
    {
        'nome': "BMW 5 2015",
        'img': "img/R(3).png",
        'descricao': "A bmw 5 2015 representa um veiculo sedã de negocios, tambem esportivo e confortavel"
    },
    {
        'nome': "ONIX",
        'img': "img/R(2).png",
        'descricao': "Um carro economico, espaçoso para o tamanho dele, além de muito estilo."
    },
    {
        'nome': "BMW i8",
        'img' : "img/l.png",
        'descricao': "O BMW i8 é um cupê superesportivo híbrido plug-in12que foi lançado na Europa em 2014 e no Brasil em 2015. O modelo é comercializado em 2 versões: cupê e conversível."
    },
    {
        'nome': "Aston Martin",
        'img': "img/Aston-Martin-Free-Download-PNG.png",
        'descricao': "Um carro que possui um v8 4,0 litro biturbo de origem mercedes-amg. Com 510 cv e 685 nm de binário.",
    },
    {
        'nome': "BMW M5",
        'img': "img/download.png",
        'descricao': "Carro 4.4 v8 turbo, que consegue entregar até 600 cavalos de potencia, entre 5.600 e 6.700 rpm."
    }
]

lista.map((carro, posicao)=> {
    var cardCarro = document.getElementById('cards')
    cardCarro.innerHTML += `
    <div class="col-md-4">
    <div class="card m-3">
            <img src="${carro.img}" class="card.img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${carro.nome}</h5>
                    <a href="#" class="btn btn-secondary" onClick = "zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                </div>
            </div>
        </div>
    </div>
    `
})

function zoomImg(posicao){
    var carroSelecionado = lista[posicao]
    document.getElementById('nomeCarro').innerHTML = carroSelecionado.nome
    document.getElementById('descricaoCarro').innerHTML = carroSelecionado.descricao
    document.getElementById('imgModal').src = carroSelecionado.img

    new bootstrap.Modal('#zoomImg').show()
}

function alterarTemaSite(){
    var tema = document.querySelector('html').getAttribute('data-bs-theme');
    if(tema === "dark"){
        document.querySelector("html").setAttribute('data-bs-theme', 'light');
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`
    } else {
        document.querySelector("html").setAttribute('data-bs-theme', 'dark');
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high">`
    }
}