const imagemPersonagem = document.querySelector("#imagemPersonagem");
const nomePersonagem = document.querySelector("#nomePersonagem");
const poderPersonagem = document.querySelector("#poderPersonagem");
const vilaPersonagem = document.querySelector("#vilaPersonagem");
const resumoPersonagem = document.querySelector("#resumoPersonagem");
// const jutsusPersonagem = document.querySelector('#jutsusPersonagem');
const resultDiv = document.querySelector("#resultDiv");
const caixaFoto = document.querySelector(".caixa-foto");

async function buscarPersonagem() {
  let buscarPersonagem = document
    .querySelector("#entradaPesquisa")
    .value.trim();

  const response = await fetch(
    `https://naruto-br-api.site/characters/${buscarPersonagem}`
  );
  const data = await response.json();
  console.log(data);

  //   if (data.erro) {
  //     resultDiv.innerHTML =
  //       "<p>❌ Personagem não encontrado. Tente novamente.</p>";
  //     return;
  //   }

  caixaFoto.innerHTML = `<img id="imagemPersonagem" src="${data.profile_image}" alt="Foto ninja">`;
  nomePersonagem.textContent = data.name || "Desconhecido";
  poderPersonagem.textContent = data.power || "Não informado";
  vilaPersonagem.textContent = data.village.name || "Não informado";
  resumoPersonagem.textContent = data.summary || "Sem resumo disponível";

  // Atualiza lista de jutsus
  // jutsusPersonagem.innerHTML = "";
  // if (data.jutsus && data.jutsus.length > 0) {
  //     data.jutsus.forEach(j => {
  //         let li = document.createElement("li");
  //         li.textContent = j;
  //         jutsusPersonagem.appendChild(li);
  //     });
  // } else {
  //     jutsusPersonagem.innerHTML = "<li>Nenhum jutsu encontrado</li>";
  // }

  // Mostra o cartão ninja (remove classe oculto)
  document.querySelector("#cartao").classList.remove("oculto");
}

// Ativa busca no clique do botão
document
  .querySelector("#botaoPesquisa")
  .addEventListener("click", buscarPersonagem);
