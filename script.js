"use strict";

/* ==========================================================
   1. DADOS
   Cada categoria tem 9 perguntas. A dificuldade vem da posição:
   0-2 = Fácil, 3-5 = Médio, 6-8 = Difícil.
   "correta" é o índice (a partir de 0) da alternativa certa.
   A cor de cada fatia fica no CSS (--cat-0 … --cat-4), na mesma
   ordem desta lista.
   ========================================================== */
const CATEGORIAS = [
  {
    nome: "Computadores",
    rotulo: ["Computadores"],
    icone: " ",
    perguntas: [
      // Fácil
      { pergunta: "Qual das opções é um exemplo de hardware?", opcoes: ["Windows", "Teclado", "Google Chrome", "Word"], correta: 1 },
      { pergunta: "O que é software?", opcoes: ["Parte física do computador", "Um tipo de cabo", "Conjunto de programas e sistemas", "Uma peça do computador"], correta: 2 },
      { pergunta: "Qual é a principal função do mouse?", opcoes: ["Imprimir documentos", "Controlar o cursor na tela", "Armazenar arquivos", "Aumentar a velocidade da internet"], correta: 1 },
      // Médio
      { pergunta: "Qual componente é conhecido como o cérebro do computador?", opcoes: ["Monitor", "Teclado", "Processador", "Placa de vídeo"], correta: 2 },
      { pergunta: "Qual é a principal função da memória RAM (Random Access Memory)?", opcoes: ["Armazenar arquivos permanentemente", "Guardar temporariamente dados utilizados pelo computador", "Proteger contra vírus", "Conectar o computador à internet"], correta: 1 },
      { pergunta: "Qual das opções apresenta apenas softwares?", opcoes: ["Teclado e mouse", "Water cooler e CPU fan", "Windows e Google Chrome", "Processador e memória RAM"], correta: 2 },
      // Difícil
      { pergunta: "Qual é a principal diferença entre HD e SSD?", opcoes: ["O SSD utiliza memória flash e geralmente é mais rápido que o HD.", "O HD é um programa e o SSD é uma peça.", "O SSD só funciona conectado à internet.", "Não existe diferença entre eles."], correta: 0 },
      { pergunta: "O que acontece quando um computador possui pouca memória RAM (Random Access Memory)?", opcoes: ["A internet fica automaticamente mais rápida.", "Lentidão, travamento ou erro.", "A tela fica maior.", "Os arquivos são apagados automaticamente."], correta: 1 },
      { pergunta: "Qual é a função do sistema operacional?", opcoes: ["Apenas acessar sites.", "Controlar os recursos do computador e permitir a execução de programas.", "Aumentar a velocidade do Wi-Fi.", "Substituir o processador."], correta: 1 },
    ],
  },
  {
    nome: "Redes",
    rotulo: ["Redes"],
    icone: " ",
    perguntas: [
      // Fácil
      { pergunta: "Para que serve o Wi-Fi?", opcoes: ["Para imprimir sem tinta.", "Para conectar dispositivos a uma rede sem fio.", "Para carregar o celular.", "Para aumentar o armazenamento."], correta: 1 },
      { pergunta: "Qual tecnologia permite conectar fones de ouvido sem fio ao celular?", opcoes: ["HDMI", "Bluetooth", "USB", "VGA"], correta: 1 },
      { pergunta: "O que significa estar conectado à internet?", opcoes: ["Ter acesso a uma rede que permite trocar informações e acessar serviços online.", "Estar com o celular carregado.", "Ter um computador ligado.", "Utilizar apenas aplicativos instalados."], correta: 0 },
      // Médio
      { pergunta: "Qual é a vantagem da conexão via cabo em relação ao Wi-Fi?", opcoes: ["Não precisa de energia.", "Geralmente oferece mais estabilidade e menor interferência.", "Funciona sem roteador em qualquer situação.", "Não utiliza equipamentos."], correta: 1 },
      { pergunta: "Qual é a principal função do Bluetooth?", opcoes: ["Transmitir energia elétrica.", "Conectar dispositivos próximos sem utilizar fios.", "Substituir a internet de uma cidade inteira.", "Proteger o computador contra vírus."], correta: 1 },
      { pergunta: "O que representa a tecnologia 5G?", opcoes: ["Uma geração de tecnologia de redes.", "Um modelo de computador.", "Um tipo de antivírus.", "Uma conexão exclusiva para televisores."], correta: 0 },
      // Difícil
      { pergunta: "Por que uma conexão por cabo pode ser melhor para jogos online?", opcoes: ["Porque aumenta o tamanho da tela.", "Porque geralmente oferece menor latência e maior estabilidade.", "Porque dispensa a internet.", "Porque impede todos os ataques virtuais."], correta: 1 },
      { pergunta: "Qual é a principal diferença entre Wi-Fi e Bluetooth?", opcoes: ["São exatamente a mesma tecnologia.", "O Wi-Fi é utilizado para redes e acesso à internet, enquanto o Bluetooth é muito usado para conectar dispositivos próximos.", "O Bluetooth funciona apenas em computadores.", "O Wi-Fi só funciona em celulares."], correta: 1 },
      { pergunta: "O que significa latência em uma conexão de rede?", opcoes: ["A quantidade de arquivos armazenados.", "O tempo que uma informação leva para ir de um dispositivo a um servidor/dispositivo.", "A capacidade da bateria.", "A quantidade de programas instalados."], correta: 1 },
    ],
  },
  {
    nome: "Segurança Digital",
    rotulo: ["Segurança", "Digital"],
    icone: "",
    perguntas: [
      // Fácil
      { pergunta: "Qual é a melhor atitude para proteger uma conta?", opcoes: ["Compartilhar a senha com amigos.", "Utilizar uma senha forte e difícil de descobrir.", "Usar a mesma senha em todos os sites.", "Deixar a senha anotada em redes sociais."], correta: 1 },
      { pergunta: "O que é um vírus de computador?", opcoes: ["Um programa malicioso que pode prejudicar o dispositivo.", "Uma peça do computador.", "Um tipo de internet.", "Um aplicativo de mensagens."], correta: 0 },
      { pergunta: "É seguro clicar em links enviados por desconhecidos?", opcoes: ["Sim, sempre.", "Apenas quando possuem imagens.", "Não, pois podem levar a golpes ou páginas maliciosas.", "Sim, se forem enviados pelo WhatsApp."], correta: 2 },
      // Médio
      { pergunta: "O que é phishing?", opcoes: ["Um programa para editar fotos.", "Uma tentativa de golpe para roubar informações pessoais.", "Um tipo de conexão sem fio.", "Um sistema operacional."], correta: 1 },
      { pergunta: "Para que serve um antivírus?", opcoes: ["Aumentar o brilho da tela.", "Detectar, bloquear e ajudar a remover ameaças digitais.", "Melhorar a velocidade do Wi-Fi.", "Criar contas nas redes sociais."], correta: 1 },
      { pergunta: "Por que é importante manter os aplicativos atualizados?", opcoes: ["Para ocupar mais espaço no celular.", "Para corrigir falhas, melhorar o funcionamento e aumentar a segurança.", "Para apagar todas as fotos.", "Para impedir o uso da internet."], correta: 1 },
      // Difícil
      { pergunta: "O que é autenticação de dois fatores?", opcoes: ["Utilizar duas contas de e-mail.", "Utilizar duas etapas de verificação para confirmar a identidade do usuário.", "Ter duas senhas iguais.", "Compartilhar a senha com duas pessoas."], correta: 1 },
      { pergunta: "Você recebe uma mensagem dizendo que ganhou um prêmio, mas precisa informar seus dados bancários para receber. Qual é a atitude mais segura?", opcoes: ["Enviar os dados imediatamente.", "Compartilhar a mensagem com todos os contatos.", "Desconfiar, não fornecer os dados e verificar a veracidade da promoção.", "Clicar em todos os links enviados."], correta: 2 },
      { pergunta: "O que é engenharia social na segurança digital?", opcoes: ["A criação de computadores mais modernos.", "Uma técnica que manipula pessoas para conseguir informações ou acesso indevido.", "Um programa para melhorar a internet.", "Um sistema de armazenamento de arquivos."], correta: 1 },
    ],
  },
  {
    nome: "Inteligência Artificial",
    rotulo: ["IA"],
    icone: "",
    perguntas: [
      // Fácil
      { pergunta: "O que significa a sigla IA?", opcoes: ["Internet Avançada.", "Inteligência Artificial.", "Informação Automática.", "Instalação de Aplicativos."], correta: 1 },
      { pergunta: "Qual destas ferramentas utiliza inteligência artificial?", opcoes: ["ChatGPT.", "Calculadora simples.", "Cabo USB.", "Teclado."], correta: 0 },
      { pergunta: "Onde podemos encontrar inteligência artificial no dia a dia?", opcoes: ["Apenas em laboratórios.", "Em assistentes virtuais, recomendações de vídeos e aplicativos.", "Somente em computadores antigos.", "Apenas em videogames."], correta: 1 },
      // Médio
      { pergunta: "Como a inteligência artificial consegue responder perguntas?", opcoes: ["Ela consulta exclusivamente pessoas em tempo real.", "Utiliza modelos treinados com grandes quantidades de dados para identificar padrões e gerar respostas.", "Lê os pensamentos das pessoas.", "Funciona sem qualquer tipo de informação."], correta: 1 },
      { pergunta: "Qual é um exemplo de utilização da IA na educação?", opcoes: ["Substituir todas as escolas.", "Ajudar estudantes a entender conteúdos e tirar dúvidas.", "Impedir os alunos de estudar.", "Desligar os computadores da escola."], correta: 1 },
      { pergunta: "Por que devemos conferir as informações fornecidas por uma IA?", opcoes: ["Porque a IA nunca consegue responder.", "Porque ela pode apresentar informações incorretas ou inventadas.", "Porque todas as respostas são falsas.", "Porque ela não utiliza dados."], correta: 1 },
      // Difícil
      { pergunta: "O que é aprendizado de máquina (Machine Learning)?", opcoes: ["Um computador que aprende apenas quando uma pessoa digita.", "Uma área da IA em que sistemas identificam padrões nos dados e melhoram seu desempenho em determinadas tarefas.", "Um programa exclusivo para jogos.", "Uma forma de conectar computadores por cabos."], correta: 1 },
      { pergunta: "Qual é um dos principais riscos do uso inadequado da inteligência artificial?", opcoes: ["Aumentar o tamanho do monitor.", "Produzir informações falsas, reproduzir preconceitos e facilitar a criação de golpes.", "Desligar automaticamente a internet.", "Impedir o funcionamento de todos os aplicativos."], correta: 1 },
      { pergunta: "A inteligência artificial pode substituir completamente a capacidade de decisão humana?", opcoes: ["Sim, em todas as situações.", "Sim, porque não comete erros.", "Não, pois possui limitações e precisa de supervisão humana em muitas situações.", "Sim, porque possui sentimentos e consciência humana."], correta: 2 },
    ],
  },
  {
    nome: "Curiosidades",
    rotulo: ["Curiosidades"],
    icone: "",
    perguntas: [
      // Fácil
      { pergunta: "Qual foi um dos primeiros meios de comunicação utilizados pela internet?", opcoes: ["E-mail.", "Instagram.", "TikTok.", "WhatsApp."], correta: 0 },
      { pergunta: "Qual empresa desenvolveu o sistema operacional Windows?", opcoes: ["Apple.", "Microsoft.", "Google.", "Samsung."], correta: 1 },
      { pergunta: "Qual destes dispositivos foi criado para permitir a comunicação telefônica móvel?", opcoes: ["Impressora.", "Celular.", "Scanner.", "Teclado."], correta: 1 },
      // Médio
      { pergunta: "Em que ano foi lançado o primeiro iPhone?", opcoes: ["1999.", "2003.", "2007.", "2015."], correta: 2 },
      { pergunta: "O que significa a sigla WWW?", opcoes: ["World Wide Web.", "Wireless World Window.", "Web Without Wire.", "World Wireless Work."], correta: 0 },
      { pergunta: "Qual foi a primeira rede social a alcançar grande popularidade no Brasil nos anos 2000?", opcoes: ["TikTok.", "Orkut.", "Instagram.", "Snapchat."], correta: 1 },
      // Difícil
      { pergunta: "Quem é considerado o criador da World Wide Web (WWW)?", opcoes: ["Bill Gates.", "Steve Jobs.", "Tim Berners-Lee.", "Mark Zuckerberg."], correta: 2 },
      { pergunta: "Qual foi o nome do primeiro satélite artificial colocado em órbita da Terra?", opcoes: ["Apollo 11.", "Sputnik 1.", "Voyager 1.", "Hubble."], correta: 1 },
      { pergunta: "O que é computação em nuvem?", opcoes: ["Armazenar e acessar dados e serviços por meio de servidores conectados à internet.", "Guardar arquivos exclusivamente em pen drives.", "Utilizar computadores sem sistema operacional.", "Armazenar informações apenas na memória RAM."], correta: 0 },
    ],
  },
];

/* ==========================================================
   2. CONFIGURAÇÃO
   ========================================================== */
const NIVEIS = ["Fácil", "Médio", "Difícil"];
const PERGUNTAS_POR_NIVEL = 3;
const PERGUNTAS_POR_CATEGORIA = NIVEIS.length * PERGUNTAS_POR_NIVEL;
const LETRAS = "ABCD";
const VOLTAS_EXTRAS = 5;

const NUM_CATEGORIAS = CATEGORIAS.length;
const ANGULO_FATIA = 360 / NUM_CATEGORIAS;

/* ==========================================================
   3. ELEMENTOS DA PÁGINA
   ========================================================== */
const el = {
  disco: document.getElementById("disc"),
  botaoGirar: document.getElementById("spin-button"),
  banner: document.getElementById("banner"),
  pergunta: document.getElementById("question"),
  opcoes: document.getElementById("options"),
  dificuldade: document.getElementById("difficulty"),
  nomeDificuldade: document.getElementById("difficulty-name"),
  mensagem: document.getElementById("message"),
  botaoProximo: document.getElementById("next-button"),
};

/* ==========================================================
   4. ESTADO DO JOGO
   ========================================================== */
let rotacao = 0;          // ângulo acumulado do disco, em graus
let girando = false;      // impede girar de novo durante o giro e a resposta
let perguntaAtual = null; // { correta, opcoes } da pergunta na tela

// Perguntas já sorteadas em cada categoria (evita repetir até esgotar as 9)
const perguntasUsadas = CATEGORIAS.map(() => new Set());

/* ==========================================================
   5. FUNÇÕES AUXILIARES
   ========================================================== */
const normalizarAngulo = (graus) => ((graus % 360) + 360) % 360;

// Ponto no círculo: 0° aponta para cima, o ângulo cresce no sentido horário
function pontoNoCirculo(raio, graus) {
  const rad = (graus * Math.PI) / 180;
  return [(raio * Math.sin(rad)).toFixed(2), (-raio * Math.cos(rad)).toFixed(2)];
}

function sortear(maximo) {
  return Math.floor(Math.random() * maximo);
}

/* ==========================================================
   6. DESENHO DA ROLETA
   ========================================================== */
function desenharRoleta() {
  const fatias = CATEGORIAS.map((categoria, i) => {
    const inicio = pontoNoCirculo(100, -ANGULO_FATIA / 2).join(" ");
    const fim = pontoNoCirculo(100, ANGULO_FATIA / 2).join(" ");
    // Palavras "em pé": giradas -90° para correr ao longo do raio (do centro para a borda)
    const n = categoria.rotulo.length;
    const maiorPalavra = Math.max(...categoria.rotulo.map((t) => t.length));
    const tamanhoFonte = maiorPalavra > 9 ? 8 : n > 1 ? 10 : 12;
    const espacoEntreLinhas = tamanhoFonte + 3;

    const linhasDoRotulo = categoria.rotulo
      .map((texto, k) => {
        const x = (k - (n - 1) / 2) * espacoEntreLinhas;
        return `<text class="segment__label" transform="translate(${x} -57) rotate(-90)" dy="0.35em" font-size="${tamanhoFonte}" text-anchor="middle">${texto}</text>`;
      })
      .join("");

    return `
      <g class="segment" transform="rotate(${i * ANGULO_FATIA})"
         style="--cat: var(--cat-${i}); --cat-text: var(--cat-${i}-text)">
        <path d="M0 0 L${inicio} A100 100 0 0 1 ${fim} Z"/>
        ${linhasDoRotulo}
      </g>`;
  });

  el.disco.innerHTML = fatias.join("");
}

/* ==========================================================
   7. TELA: TÍTULO E LIMPEZA
   ========================================================== */

// Sem índice de categoria, o título volta à cor padrão (dourado)
function definirBanner(texto, indiceCategoria) {
  el.banner.textContent = texto;

  if (indiceCategoria === undefined) {
    el.banner.style.removeProperty("--cat");
    el.banner.style.removeProperty("--cat-text");
  } else {
    el.banner.style.setProperty("--cat", `var(--cat-${indiceCategoria})`);
    el.banner.style.setProperty("--cat-text", `var(--cat-${indiceCategoria}-text)`);
  }
}

function limparResultado() {
  el.botaoProximo.hidden = true;
  el.opcoes.hidden = true;
  el.dificuldade.hidden = true;
  el.mensagem.textContent = "";
  el.mensagem.className = "message";
}

/* ==========================================================
   8. FLUXO DO JOGO: GIRAR → PERGUNTAR → RESPONDER → REINICIAR
   ========================================================== */
function girarRoleta() {
  if (girando) return;
  girando = true;

  el.botaoGirar.disabled = true;
  limparResultado();
  definirBanner("Sorteando...");
  el.pergunta.textContent = "...";

  // Sorteia a categoria e um ponto aleatório dentro da fatia
  const indice = sortear(NUM_CATEGORIAS);
  const deslocamento = (Math.random() - 0.5) * ANGULO_FATIA * 0.7;
  const anguloAlvo = normalizarAngulo(360 - indice * ANGULO_FATIA + deslocamento);
  const anguloAtual = normalizarAngulo(rotacao);

  rotacao += normalizarAngulo(anguloAlvo - anguloAtual) + 360 * VOLTAS_EXTRAS;
  el.disco.style.transform = `rotate(${rotacao}deg)`;

  // Mostra a pergunta quando a animação de giro termina
  el.disco.addEventListener("transitionend", () => mostrarPergunta(indice), { once: true });
}

function mostrarPergunta(indiceCategoria) {
  const categoria = CATEGORIAS[indiceCategoria];
  const usadas = perguntasUsadas[indiceCategoria];

  if (usadas.size >= PERGUNTAS_POR_CATEGORIA) usadas.clear();

  let indicePergunta;
  do {
    indicePergunta = sortear(PERGUNTAS_POR_CATEGORIA);
  } while (usadas.has(indicePergunta));
  usadas.add(indicePergunta);

  const { pergunta, opcoes, correta } = categoria.perguntas[indicePergunta];
  const nivel = Math.floor(indicePergunta / PERGUNTAS_POR_NIVEL);

  perguntaAtual = { correta, opcoes };

  definirBanner(`${categoria.nome}`, indiceCategoria);
  el.pergunta.textContent = pergunta;

  el.nomeDificuldade.textContent = NIVEIS[nivel];
  el.dificuldade.dataset.level = nivel + 1;
  el.dificuldade.hidden = false;

  el.opcoes.innerHTML = "";
  opcoes.forEach((texto, k) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "option";
    botao.textContent = `${LETRAS[k]}) ${texto}`;
    botao.addEventListener("click", () => responder(k));
    el.opcoes.appendChild(botao);
  });
  el.opcoes.hidden = false;
}

function responder(escolhida) {
  const botoes = [...el.opcoes.querySelectorAll(".option")];
  botoes.forEach((botao) => (botao.disabled = true));

  const { correta, opcoes } = perguntaAtual;
  const acertou = escolhida === correta;

  botoes[correta].classList.add("option--correct");
  if (!acertou) botoes[escolhida].classList.add("option--wrong");

  el.mensagem.className = `message ${acertou ? "message--ok" : "message--no"}`;
  el.mensagem.textContent = acertou
    ? "Resposta correta! Parabéns!"
    : `Resposta incorreta. A correta é ${LETRAS[correta]}`;

  el.botaoProximo.hidden = false;
}

function proximoJogador() {
  girando = false;
  el.botaoGirar.disabled = false;

  limparResultado();
  definirBanner("Gire a roleta!");
  el.pergunta.textContent = "Clique no botão central para girar";
}

/* ==========================================================
   9. INICIALIZAÇÃO
   ========================================================== */
desenharRoleta();

el.botaoGirar.addEventListener("click", girarRoleta);
el.botaoProximo.addEventListener("click", proximoJogador);
