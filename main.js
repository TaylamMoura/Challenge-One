
function cliptografar(){
    let textarea = document.getElementById("txt_usuario");
    let txtDigitado = textarea.value;

    let txtCriptografado = txtDigitado
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    let resultado__txt = document.querySelector(".resultado__txt");
    let imagem = document.querySelector(".imagem-tela");

    if (imagem) {
        imagem.style.display = "none";
    }

    if (resultado__txt) {
        resultado__txt.style.display = "block";
        resultado__txt.innerHTML = txtCriptografado;
        document.getElementById('botao__copiar').style.display = 'block';
    } else {
        console.error("Erro ao copiar.");
    }
}

function descliptografar(){
    let textarea = document.getElementById("txt_usuario");
    let txtDigitado = textarea.value;

    let txtDescliptografado = txtDigitado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

    let resultado__txt = document.querySelector(".resultado__txt");
    let imagem = document.querySelector(".imagem-tela");


    if (imagem) {
        imagem.style.display = "none";
    }

    if (resultado__txt) {
        resultado__txt.style.display = "block";
        resultado__txt.innerHTML = txtDescliptografado;
        document.getElementById('botao__copiar').style.display = 'block';
    } else {
        console.error("Erro ao copiar.");
    }

}
function copiar(){
    let txtCopiado = document.querySelector('.resultado__txt').innerText;
    navigator.clipboard.writeText(txtCopiado).then(() => {
        alert('Texto copiado!');
    });
}

function modoNoturno(){
    document.getElementById("modoNoturno").addEventListener('click', function(){
        document.body.classList.toggle('modoNoturno');
      
        let modoIcone = document.getElementById("modoIcone");
        if (document.body.classList.contains("modoNoturno")) {
            modoIcone.src = './assets/Button Day.png';
            modoIcone.alt = 'Modo Noturno';
        } else {
            modoIcone.src = './assets/Button Night.png';
            modoIcone.alt = 'Modo Claro';
        }
});
}
