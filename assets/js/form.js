const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p style='align-self: center; font-size: 1rem; padding: 5rem 0 0 0; text-align: center;'><span style='color: var(--s1); text-decoration: underline;'>Recebemos</span> a sua mensagem. Um de nossos advogados entrará em contato!</p>";
  } else {
    formulario.innerHTML =
      "<p style='align-self: center; font-size: 1rem; padding: 5rem 0 0 0; text-align: center;' >Ocorreu um <span style='color: var(--s1);'>ERRO</span> no envio. Entre em contato pelo Whatsapp. É mais rápido!</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  const data = new FormData(formulario);
  console.log(data);

  fetch("/assets/php/contato.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
