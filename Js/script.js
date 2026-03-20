const botaoAbrir = document.getElementById('abrir-card');
const card = document.getElementById('card-candidatura');
const form = document.querySelector('.formulario-candidatura');
const campoEmail = document.getElementById('email-campo');

botaoAbrir.addEventListener('click', () => {
    if (card.style.display === "none") {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
});

form.addEventListener('submit', function(event) {
    const emailValor = campoEmail.value;

    if (!emailValor.includes("@")) {
        alert("Digite um e-mail válido! ❌");
        event.preventDefault();
    } else {
        alert("Candidatura enviada com sucesso! 🚀");
    }
});