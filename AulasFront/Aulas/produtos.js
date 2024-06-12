// alert('Olá mundo!')

// window.onload = () => {
//     document.querySelector('#produtos').innerHTML = ('Olá mundo!')
// }

function mostrarOpcoes() {
    var x = document.getElementById("menu-mobile");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//Tratamento do slideshow (carroussel)
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}

document.addEventListener('DOMContentLoaded', function () {

});


const carregaDados = () => {
    fetch('http://localhost:3000/produtos')
        .then(response => response.json())
        .then(data => {
            const produtosContainer = document.getElementById('produtos-container');
            produtosContainer.innerHTML = '';

            data.forEach(produto => {
                const produtoCard = `
                    <div class="w3-col l4 m6 s12 w3-container w3-padding-16">
                        <div class="w3-card">
                            <div class="w3-container w3-center">
                                <img src="${produto.imagem}" style="width: 70%">
                                <h5>${produto.nome}</h5>
                                <h3 class="w3-blue">R$ ${produto.preço.toFixed(2)}</h3>
                            </div>
                        </div>
                    </div>
                `;
                produtosContainer.innerHTML += produtoCard;
            });
        })
        .catch(error => console.error('Erro ao carregar os produtos:', error));
}
carregaDados();

const atualizaDados = () => {
    console.log('Atualizou');
    showAlert('Atualizando dados...');
    carregaDados();
}

const showAlert = (message) => {
    const alertBox = document.getElementById('custom-alert');
    alertBox.textContent = message;
    alertBox.style.display = 'block';

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}


setInterval(atualizaDados, 30000);