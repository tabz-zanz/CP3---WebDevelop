// =============================================
//  GAMELIST — script.js
//  Tecnologias: HTML + CSS + JS puro
//  Aluno: 6 meses de experiência
// =============================================

// ---------- CREDENCIAIS ----------
const USUARIO_CORRETO = "aluno";
const SENHA_CORRETA   = "fiap2025";

// ---------- LISTA DE JOGOS ----------
let jogos = [
  "The Legend of Zelda: Breath of the Wild",
  "God of War Ragnarök",
  "Red Dead Redemption 2"
];

// ---------- ELEMENTOS DO DOM ----------
const telaLogin  = document.getElementById("tela-login");
const telaLista  = document.getElementById("tela-lista");

const inputUsuario = document.getElementById("usuario");
const inputSenha   = document.getElementById("senha");
const btnLogin     = document.getElementById("btn-login");
const erroLogin    = document.getElementById("erro-login");

const btnLogout      = document.getElementById("btn-logout");
const inputNovoJogo  = document.getElementById("novo-jogo");
const btnAddFim      = document.getElementById("btn-add-fim");
const btnAddInicio   = document.getElementById("btn-add-inicio");
const erroAdicionar  = document.getElementById("erro-adicionar");
const listaJogos     = document.getElementById("lista-jogos");
const contadorBadge  = document.getElementById("contador-badge");

// =============================================
//  FUNÇÕES DE LOGIN
// =============================================

function mostrarErroLogin(mensagem) {
  erroLogin.textContent = mensagem;
  erroLogin.classList.remove("oculto");
}

function ocultarErroLogin() {
  erroLogin.textContent = "";
  erroLogin.classList.add("oculto");
}

function realizarLogin() {
  const usuario = inputUsuario.value.trim();
  const senha   = inputSenha.value.trim();

  ocultarErroLogin();

  if (usuario === "" && senha === "") {
    mostrarErroLogin("Preencha o usuário e a senha para continuar.");
    return;
  }

  if (usuario === "") {
    mostrarErroLogin("O campo usuário não pode estar vazio.");
    return;
  }

  if (senha === "") {
    mostrarErroLogin("O campo senha não pode estar vazio.");
    return;
  }

  if (usuario !== USUARIO_CORRETO || senha !== SENHA_CORRETA) {
    mostrarErroLogin("Usuário ou senha incorretos. Tente novamente.");
    inputSenha.value = "";
    return;
  }

  // Credenciais corretas: muda de tela
  telaLogin.classList.add("oculto");
  telaLista.classList.remove("oculto");
  renderizarLista();
}

function realizarLogout() {
  telaLista.classList.add("oculto");
  telaLogin.classList.remove("oculto");
  inputUsuario.value = "";
  inputSenha.value   = "";
  ocultarErroLogin();
}

// =============================================
//  FUNÇÕES DE LISTA
// =============================================

function mostrarErroAdicionar(mensagem) {
  erroAdicionar.textContent = mensagem;
  erroAdicionar.classList.remove("oculto");
}

function ocultarErroAdicionar() {
  erroAdicionar.textContent = "";
  erroAdicionar.classList.add("oculto");
}

function adicionarJogoAoFinal() {
  const nome = inputNovoJogo.value.trim();
  ocultarErroAdicionar();

  if (nome === "") {
    mostrarErroAdicionar("Digite o nome do jogo antes de adicionar.");
    return;
  }

  jogos.push(nome);
  inputNovoJogo.value = "";
  renderizarLista();
}

function adicionarJogoAoInicio() {
  const nome = inputNovoJogo.value.trim();
  ocultarErroAdicionar();

  if (nome === "") {
    mostrarErroAdicionar("Digite o nome do jogo antes de adicionar.");
    return;
  }

  jogos.unshift(nome);
  inputNovoJogo.value = "";
  renderizarLista();
}

function removerJogo(indice) {
  jogos.splice(indice, 1);
  renderizarLista();
}

function ativarModoEdicao(indice, itemEl) {
  const inputEdicao = itemEl.querySelector(".item-input-edicao");
  inputEdicao.value = jogos[indice];
  itemEl.classList.add("editando");
  inputEdicao.focus();
}

function confirmarEdicao(indice, itemEl) {
  const inputEdicao = itemEl.querySelector(".item-input-edicao");
  const novoNome    = inputEdicao.value.trim();

  // Campo vazio: mantém o original e sai do modo edição
  if (novoNome === "") {
    itemEl.classList.remove("editando");
    return;
  }

  jogos[indice] = novoNome;
  renderizarLista();
}

function cancelarEdicao(itemEl) {
  itemEl.classList.remove("editando");
}

// =============================================
//  RENDERIZAÇÃO
// =============================================

function renderizarLista() {
  listaJogos.innerHTML = "";
  contadorBadge.textContent = jogos.length;

  if (jogos.length === 0) {
    const vazio = document.createElement("li");
    vazio.className = "lista-vazia";
    vazio.innerHTML = `
      <span class="icon-vazio">👾</span>
      <p>Sua lista está vazia.<br>Adicione seu primeiro jogo!</p>
    `;
    listaJogos.appendChild(vazio);
    return;
  }

  for (let i = 0; i < jogos.length; i++) {
    const item = criarItemJogo(i);
    listaJogos.appendChild(item);
  }
}

function criarItemJogo(indice) {
  const li = document.createElement("li");
  li.className = "item-jogo";

  // Número de posição
  const rank = document.createElement("span");
  rank.className = "item-rank";
  rank.textContent = "#" + (indice + 1);

  // Nome do jogo
  const nome = document.createElement("span");
  nome.className = "item-nome";
  nome.textContent = jogos[indice];

  // Input de edição (oculto até ativar modo edição)
  const inputEdicao = document.createElement("input");
  inputEdicao.type = "text";
  inputEdicao.className = "item-input-edicao";

  // Ações
  const acoes = document.createElement("div");
  acoes.className = "item-acoes";

  const btnEditar    = criarBotaoItem("✏️", "btn-editar",    "Editar");
  const btnRemover   = criarBotaoItem("🗑️", "btn-remover",   "Remover");
  const btnConfirmar = criarBotaoItem("✔️", "btn-confirmar", "Confirmar edição");
  const btnCancelar  = criarBotaoItem("✕",  "btn-cancelar",  "Cancelar edição");

  // Eventos
  btnEditar.addEventListener("click", function () {
    ativarModoEdicao(indice, li);
  });

  btnRemover.addEventListener("click", function () {
    removerJogo(indice);
  });

  btnConfirmar.addEventListener("click", function () {
    confirmarEdicao(indice, li);
  });

  btnCancelar.addEventListener("click", function () {
    cancelarEdicao(li);
  });

  // Confirmar edição com Enter, cancelar com Escape
  inputEdicao.addEventListener("keydown", function (evento) {
    if (evento.key === "Enter") {
      confirmarEdicao(indice, li);
    }
    if (evento.key === "Escape") {
      cancelarEdicao(li);
    }
  });

  acoes.appendChild(btnEditar);
  acoes.appendChild(btnConfirmar);
  acoes.appendChild(btnCancelar);
  acoes.appendChild(btnRemover);

  li.appendChild(rank);
  li.appendChild(nome);
  li.appendChild(inputEdicao);
  li.appendChild(acoes);

  return li;
}

function criarBotaoItem(texto, classe, titulo) {
  const btn = document.createElement("button");
  btn.className = "btn-item " + classe;
  btn.textContent = texto;
  btn.title = titulo;
  return btn;
}

// =============================================
//  EVENTOS GLOBAIS
// =============================================

btnLogin.addEventListener("click", realizarLogin);

inputSenha.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    realizarLogin();
  }
});

btnLogout.addEventListener("click", realizarLogout);

btnAddFim.addEventListener("click", adicionarJogoAoFinal);

btnAddInicio.addEventListener("click", adicionarJogoAoInicio);

inputNovoJogo.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    adicionarJogoAoFinal();
  }
});

// =============================================
//  INICIALIZAÇÃO
// =============================================

renderizarLista();