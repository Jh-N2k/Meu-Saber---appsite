document.body.classList.add("auth-lock");


/* ESCOLHER ESTUDANTE */

function selecionarPerfil(perfil) {

    if (perfil !== "estudante") {
        return;
    }

    const welcome =
        document.getElementById("authWelcome");

    const student =
        document.getElementById("authStudent");

    const message =
        document.getElementById("roleMessage");


    if (welcome) {
        welcome.classList.remove("active");
    }


    if (student) {
        student.classList.add("active");
    }


    if (message) {
        message.style.display = "none";
    }

}


/* VOLTAR PARA A TELA DE PERFIS */

function voltarPerfil() {

    const welcome =
        document.getElementById("authWelcome");

    const student =
        document.getElementById("authStudent");

    const error =
        document.getElementById("loginError");


    if (student) {
        student.classList.remove("active");
    }


    if (welcome) {
        welcome.classList.add("active");
    }


    if (error) {
        error.classList.remove("show");
    }

}


/* SERVIDOR / RESPONSÁVEL */

function mostrarPerfilIndisponivel(nome) {

    const message =
        document.getElementById("roleMessage");


    if (!message) {
        return;
    }


    message.textContent =
        `${nome} ainda não possui uma tela de acesso neste protótipo.`;


    message.style.display = "block";

}


/* ESQUECI SENHA */

function esqueciSenha(event) {

    event.preventDefault();

    alert(
        "A recuperação de senha será adicionada em uma próxima etapa."
    );

}


/* LOGIN */

const studentLoginForm =
    document.getElementById("studentLoginForm");


if (studentLoginForm) {

    studentLoginForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const ra =
                document
                    .getElementById("studentRA")
                    .value
                    .trim();


            const senha =
                document
                    .getElementById("studentPassword")
                    .value
                    .trim();


            const erro =
                document.getElementById("loginError");


            /* VERIFICA CAMPOS */

            if (!ra || !senha) {

                erro.classList.add("show");

                return;
            }


            erro.classList.remove("show");


            /* LIBERA O SITE */

            document.body.classList.remove(
                "auth-lock"
            );


            const authScreen =
                document.getElementById(
                    "authScreen"
                );


            if (authScreen) {

                authScreen.style.display =
                    "none";
            }


            /* ABRE O INÍCIO */

            if (
                typeof abrirPagina ===
                "function"
            ) {

                abrirPagina("inicio");

            }

        }
    );

}
// ======================================================
// BANCO DE QUESTÕES
// ======================================================

const quizzes = {

    Matemática: [
        {
            question: "Qual é a área de um retângulo com 8 cm de comprimento e 4 cm de largura?",
            answers: [
                "12 cm²",
                "24 cm²",
                "32 cm²",
                "36 cm²"
            ],
            correct: 2
        },

        {
            question: "Quanto é 15 × 4?",
            answers: [
                "45",
                "50",
                "60",
                "75"
            ],
            correct: 2
        },

        {
            question: "Qual é o resultado de 100 ÷ 5?",
            answers: [
                "10",
                "15",
                "20",
                "25"
            ],
            correct: 2
        },

        {
            question: "Quanto é 25 + 37?",
            answers: [
                "52",
                "62",
                "72",
                "82"
            ],
            correct: 1
        },

        {
            question: "Qual é o perímetro de um quadrado com lado de 6 cm?",
            answers: [
                "12 cm",
                "18 cm",
                "24 cm",
                "36 cm"
            ],
            correct: 2
        }
    ],


    Português: [
        {
            question: "Qual é a finalidade principal de um texto narrativo?",
            answers: [
                "Apresentar uma história",
                "Ensinar uma fórmula",
                "Dar uma receita",
                "Apresentar dados matemáticos"
            ],
            correct: 0
        },

        {
            question: "Qual palavra é um substantivo?",
            answers: [
                "Correr",
                "Bonito",
                "Casa",
                "Rapidamente"
            ],
            correct: 2
        },

        {
            question: "Qual é o plural de 'cidadão'?",
            answers: [
                "Cidadões",
                "Cidadãos",
                "Cidadães",
                "Cidadans"
            ],
            correct: 1
        },

        {
            question: "Na frase 'O menino correu rapidamente', qual é o verbo?",
            answers: [
                "Menino",
                "O",
                "Correu",
                "Rapidamente"
            ],
            correct: 2
        },

        {
            question: "Qual palavra está escrita corretamente?",
            answers: [
                "Excessão",
                "Exceção",
                "Eceção",
                "Exessão"
            ],
            correct: 1
        }
    ],


    Ciências: [
        {
            question: "Qual órgão é responsável por bombear o sangue pelo corpo?",
            answers: [
                "Pulmão",
                "Coração",
                "Estômago",
                "Fígado"
            ],
            correct: 1
        },

        {
            question: "Qual é o planeta conhecido como Planeta Vermelho?",
            answers: [
                "Terra",
                "Vênus",
                "Marte",
                "Júpiter"
            ],
            correct: 2
        },

        {
            question: "Qual gás os seres humanos precisam respirar para sobreviver?",
            answers: [
                "Oxigênio",
                "Gás carbônico",
                "Hidrogênio",
                "Hélio"
            ],
            correct: 0
        },

        {
            question: "Qual destes é um estado físico da água?",
            answers: [
                "Metálico",
                "Sólido",
                "Elétrico",
                "Magnético"
            ],
            correct: 1
        },

        {
            question: "Qual órgão é responsável principalmente pela respiração?",
            answers: [
                "Coração",
                "Pulmão",
                "Rim",
                "Cérebro"
            ],
            correct: 1
        }
    ],


    Geografia: [
        {
            question: "Quantas regiões o Brasil possui?",
            answers: [
                "3",
                "4",
                "5",
                "6"
            ],
            correct: 2
        },

        {
            question: "Qual é a maior região brasileira em extensão territorial?",
            answers: [
                "Sul",
                "Sudeste",
                "Nordeste",
                "Norte"
            ],
            correct: 3
        },

        {
            question: "Qual é a capital do Brasil?",
            answers: [
                "São Paulo",
                "Rio de Janeiro",
                "Brasília",
                "Salvador"
            ],
            correct: 2
        },

        {
            question: "Qual é o maior estado brasileiro em território?",
            answers: [
                "Amazonas",
                "Pará",
                "Mato Grosso",
                "Bahia"
            ],
            correct: 0
        },

        {
            question: "Em qual continente está localizado o Brasil?",
            answers: [
                "África",
                "América do Sul",
                "Europa",
                "Ásia"
            ],
            correct: 1
        }
    ]

};


// ======================================================
// VARIÁVEIS DO QUIZ
// ======================================================

let currentSubject = "";
let currentQuestion = 0;
let userAnswers = [];


// ======================================================
// VARIÁVEIS DA CÂMERA
// ======================================================

let cameraStream = null;
let cameraAtiva = false;


// ======================================================
// TROCAR DE PÁGINA
// ======================================================

function abrirPagina(page) {

    document.querySelectorAll(".page").forEach(section => {
        section.classList.remove("active");
    });

    const selectedPage = document.getElementById(page);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }


    // Menu desktop

    document.querySelectorAll(".nav-btn").forEach(button => {

        button.classList.remove("active");

        if (button.dataset.page === page) {
            button.classList.add("active");
        }

    });


    // Menu mobile

    document.querySelectorAll(".mobile-nav button").forEach(button => {

        button.classList.remove("active");

        if (button.dataset.page === page) {
            button.classList.add("active");
        }

    });


    // ======================================================
    // CÂMERA
    // ======================================================

    // Se saiu do quiz e da redação,
    // desliga a câmera

    if (page !== "quiz" && page !== "redacao") {
        desligarCamera();
    }


    // Se entrou na redação,
    // prepara a câmera

    if (page === "redacao") {
        prepararCameraRedacao();
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ======================================================
// INICIAR QUIZ
// ======================================================

function iniciarQuiz(subject) {

    if (!quizzes[subject]) {

        console.error(
            "Matéria não encontrada:",
            subject
        );

        return;
    }


    currentSubject = subject;

    currentQuestion = 0;

    userAnswers =
        new Array(
            quizzes[subject].length
        ).fill(null);


    document.getElementById("quizSubject").textContent =
        subject.toUpperCase();


    abrirPagina("quiz");

    carregarQuestao();

    prepararCamera();
}


// ======================================================
// CARREGAR QUESTÃO
// ======================================================

function carregarQuestao() {

    const questions =
        quizzes[currentSubject];


    if (!questions) {
        return;
    }


    const question =
        questions[currentQuestion];


    // Número

    document.getElementById(
        "questionNumber"
    ).textContent =
        String(currentQuestion + 1)
        .padStart(2, "0");


    // Contador

    document.getElementById(
        "questionCounter"
    ).textContent =
        `Questão ${currentQuestion + 1} de ${questions.length}`;


    // Pergunta

    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    // Barra de progresso

    const progress =
        ((currentQuestion + 1) /
        questions.length) * 100;


    document.getElementById(
        "quizBar"
    ).style.width =
        `${progress}%`;


    // Respostas

    const answersContainer =
        document.getElementById("answers");


    answersContainer.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer";


            button.textContent =
                answer;


            // Resposta já selecionada

            if (
                userAnswers[currentQuestion]
                === index
            ) {

                button.classList.add(
                    "selected"
                );

            }


            // Selecionar resposta

            button.addEventListener(
                "click",
                () => {

                    userAnswers[
                        currentQuestion
                    ] = index;


                    document
                        .querySelectorAll(
                            ".answer"
                        )
                        .forEach(btn => {

                            btn.classList.remove(
                                "selected"
                            );

                        });


                    button.classList.add(
                        "selected"
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );


    // Botão anterior

    const previous =
        document.getElementById(
            "previous"
        );


    previous.disabled =
        currentQuestion === 0;


    // Botão próxima

    const next =
        document.getElementById(
            "next"
        );


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        next.textContent =
            "Finalizar ✓";

    } else {

        next.textContent =
            "Próxima →";

    }

}


// ======================================================
// BOTÃO ANTERIOR
// ======================================================

document
    .getElementById("previous")
    .addEventListener(
        "click",
        () => {

            if (currentQuestion > 0) {

                currentQuestion--;

                carregarQuestao();

            }

        }
    );


// ======================================================
// BOTÃO PRÓXIMA
// ======================================================

document
    .getElementById("next")
    .addEventListener(
        "click",
        () => {

            const questions =
                quizzes[currentSubject];


            // Não respondeu

            if (
                userAnswers[currentQuestion]
                === null
            ) {

                alert(
                    "Selecione uma resposta antes de continuar."
                );

                return;

            }


            // Próxima questão

            if (
                currentQuestion <
                questions.length - 1
            ) {

                currentQuestion++;

                carregarQuestao();

                return;

            }


            // Última questão

            finalizarQuiz();

        }
    );


// ======================================================
// FINALIZAR QUIZ
// ======================================================

function finalizarQuiz() {

    const questions =
        quizzes[currentSubject];


    let correct = 0;


    questions.forEach(
        (question, index) => {

            if (
                userAnswers[index] ===
                question.correct
            ) {

                correct++;

            }

        }
    );


    const wrong =
        questions.length - correct;


    const percentage =
        Math.round(
            (correct / questions.length) * 100
        );


    // Resultado

    document.getElementById(
        "resultSubject"
    ).textContent =
        currentSubject;


    document.getElementById(
        "score"
    ).textContent =
        `${correct}/${questions.length}`;


    document.getElementById(
        "correct"
    ).textContent =
        correct;


    document.getElementById(
        "wrong"
    ).textContent =
        wrong;


    document.getElementById(
        "percentage"
    ).textContent =
        `${percentage}%`;


    // Desligar câmera

    desligarCamera();


    abrirPagina("resultado");

}


// ======================================================
// PREPARAR CÂMERA DO QUIZ
// ======================================================

function prepararCamera() {

    const quiz =
        document.getElementById("quiz");


    if (!quiz) {
        return;
    }


    // Se já existe câmera,
    // coloca ela dentro do quiz

    const cameraExistente =
        document.getElementById("cameraContainer");


    if (cameraExistente) {

        quiz.appendChild(
            cameraExistente
        );

        return;

    }


    const cameraContainer =
        document.createElement("div");


    cameraContainer.id =
        "cameraContainer";


    cameraContainer.innerHTML = `

        <div class="camera-header">

            <span>
                📷 Câmera
            </span>

            <span id="cameraStatus">
                Desativada
            </span>

        </div>

        <video
            id="camera"
            autoplay
            playsinline
            muted
        ></video>

        <button
            id="cameraButton"
            type="button"
        >
            📷 Ativar câmera
        </button>

    `;


    quiz.appendChild(
        cameraContainer
    );


    document
        .getElementById(
            "cameraButton"
        )
        .addEventListener(
            "click",
            alternarCamera
        );

}


// ======================================================
// PREPARAR CÂMERA DA REDAÇÃO
// ======================================================

function prepararCameraRedacao() {

    const redacao =
        document.getElementById("redacao");


    if (!redacao) {
        return;
    }


    // Se já existe câmera,
    // move ela para a redação

    const cameraExistente =
        document.getElementById("cameraContainer");


    if (cameraExistente) {

        redacao.appendChild(
            cameraExistente
        );

        return;

    }


    const cameraContainer =
        document.createElement("div");


    cameraContainer.id =
        "cameraContainer";


    cameraContainer.innerHTML = `

        <div class="camera-header">

            <span>
                📷 Câmera
            </span>

            <span id="cameraStatus">
                Desativada
            </span>

        </div>

        <video
            id="camera"
            autoplay
            playsinline
            muted
        ></video>

        <button
            id="cameraButton"
            type="button"
        >
            📷 Ativar câmera
        </button>

    `;


    redacao.appendChild(
        cameraContainer
    );


    document
        .getElementById(
            "cameraButton"
        )
        .addEventListener(
            "click",
            alternarCamera
        );

}


// ======================================================
// ATIVAR / DESATIVAR CÂMERA
// ======================================================

async function alternarCamera() {

    if (cameraAtiva) {

        desligarCamera();

        return;

    }


    await ativarCamera();

}


// ======================================================
// ATIVAR CÂMERA
// ======================================================

async function ativarCamera() {

    try {

        if (
            !navigator.mediaDevices ||
            !navigator.mediaDevices.getUserMedia
        ) {

            alert(
                "Seu navegador não suporta acesso à câmera."
            );

            return;

        }


        cameraStream =
            await navigator.mediaDevices
                .getUserMedia({

                    video: {
                        facingMode: "user"
                    },

                    audio: false

                });


        const video =
            document.getElementById(
                "camera"
            );


        if (!video) {
            return;
        }


        video.srcObject =
            cameraStream;


        cameraAtiva = true;


        atualizarStatusCamera();


    } catch (error) {

        console.error(
            "Erro ao acessar câmera:",
            error
        );


        alert(
            "Não foi possível acessar a câmera.\n\n" +
            "Verifique se você permitiu o acesso à câmera no navegador."
        );

    }

}


// ======================================================
// DESLIGAR CÂMERA
// ======================================================

function desligarCamera() {

    if (cameraStream) {

        cameraStream
            .getTracks()
            .forEach(track => {
                track.stop();
            });

        cameraStream = null;

    }


    cameraAtiva = false;


    const video =
        document.getElementById(
            "camera"
        );


    if (video) {

        video.srcObject = null;

    }


    atualizarStatusCamera();

}


// ======================================================
// ATUALIZAR STATUS DA CÂMERA
// ======================================================

function atualizarStatusCamera() {

    const status =
        document.getElementById(
            "cameraStatus"
        );


    const button =
        document.getElementById(
            "cameraButton"
        );


    if (!status || !button) {
        return;
    }


    if (cameraAtiva) {

        status.textContent =
            "● Ativa";

        status.style.color =
            "#16a34a";


        button.textContent =
            "📷 Desativar câmera";

    } else {

        status.textContent =
            "Desativada";

        status.style.color =
            "#777";


        button.textContent =
            "📷 Ativar câmera";

    }

}


// ======================================================
// MENU DESKTOP
// ======================================================

document
    .querySelectorAll(".nav-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                abrirPagina(
                    button.dataset.page
                );

            }
        );

    });


// ======================================================
// MENU MOBILE
// ======================================================

document
    .querySelectorAll(".mobile-nav button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                abrirPagina(
                    button.dataset.page
                );

            }
        );

    });


// ======================================================
// MENU MOBILE LATERAL
// ======================================================

const menuMobile =
    document.getElementById(
        "menuMobile"
    );


if (menuMobile) {

    menuMobile.addEventListener(
        "click",
        () => {

            const sidebar =
                document.querySelector(
                    ".sidebar"
                );


            if (sidebar) {

                sidebar.classList.toggle(
                    "open"
                );

            }

        }
    );

}


// ======================================================
// FILTROS
// ======================================================

document
    .querySelectorAll(".filter")
    .forEach(filter => {

        filter.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".filter"
                    )
                    .forEach(button => {

                        button.classList.remove(
                            "active"
                        );

                    });


                filter.classList.add(
                    "active"
                );

            }
        );

    });


// ======================================================
// REDAÇÃO
// ======================================================

const campoRedacao =
    document.getElementById("redacaoTexto");


const contadorRedacao =
    document.getElementById("contadorRedacao");


const contadorPalavras =
    document.getElementById("contadorPalavras");


// ======================================================
// CONTADOR DA REDAÇÃO
// ======================================================

function atualizarContadorRedacao() {

    if (!campoRedacao) {
        return;
    }


    const texto =
        campoRedacao.value;


    // Quantidade de caracteres

    const caracteres =
        texto.length;


    // Quantidade de palavras

    const palavras =
        texto
            .trim()
            .split(/\s+/)
            .filter(
                palavra => palavra.length > 0
            )
            .length;


    if (contadorRedacao) {

        contadorRedacao.textContent =
            `${caracteres} caracteres`;

    }


    if (contadorPalavras) {

        contadorPalavras.textContent =
            `${palavras} palavras`;

    }

}


// ======================================================
// DIGITAÇÃO
// ======================================================

if (campoRedacao) {

    campoRedacao.addEventListener(
        "input",
        atualizarContadorRedacao
    );

}


// ======================================================
// ENVIAR REDAÇÃO
// ======================================================

function enviarRedacao() {

    const campo =
        document.getElementById(
            "redacaoTexto"
        );


    const mensagem =
        document.getElementById(
            "redacaoSucesso"
        );


    if (!campo) {
        return;
    }


    const texto =
        campo.value.trim();


    // Verifica se o aluno escreveu

    if (texto.length === 0) {

        alert(
            "Digite sua redação antes de enviar."
        );

        campo.focus();

        return;

    }


    // Texto muito pequeno

    if (texto.length < 1700) {

        alert(
            "Sua redação está muito curta. " +
            "Escreva pelo menos 1700 caracteres."
        );

        campo.focus();

        return;

    }


    // Mostra mensagem

    if (mensagem) {

        mensagem.style.display =
            "block";

    }


    console.log(
        "Redação enviada:",
        texto
    );


    // Desabilita o botão

    const botoes =
        document.querySelectorAll(
            ".redacao-botoes button"
        );


    if (botoes.length > 1) {

        botoes[1].disabled =
            true;

        botoes[1].textContent =
            "✓ Redação enviada";

    }

}
/* =====================================================
   SAIR DA CONTA
===================================================== */

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        const confirmar = confirm(
            "Deseja realmente sair da sua conta?"
        );

        if (!confirmar) {
            return;
        }

        const authScreen =
            document.getElementById("authScreen");

        document.body.classList.add("auth-lock");

        if (authScreen) {

            authScreen.style.display = "flex";

        }

        document
            .getElementById("authStudent")
            .classList.remove("active");

        document
            .getElementById("authWelcome")
            .classList.add("active");

        document
            .getElementById("studentRA")
            .value = "";

        document
            .getElementById("studentPassword")
            .value = "";

    });

}
/* =====================================================
   AGENDA ESCOLAR
===================================================== */

const agendaDays = document.getElementById("agendaDays");

const agendaDataSelecionada =
    document.getElementById("agendaDataSelecionada");

const agendaMes =
    document.getElementById("agendaMes");

const agendaHoje =
    document.getElementById("agendaHoje");

const mesAnterior =
    document.getElementById("mesAnterior");

const mesProximo =
    document.getElementById("mesProximo");


if (agendaDays) {

    const dias = agendaDays.querySelectorAll(".agenda-day");

    dias.forEach(function(dia) {

        dia.addEventListener("click", function() {

            dias.forEach(function(item) {

                item.classList.remove("selected");

            });

            dia.classList.add("selected");


            const numero =
                dia.textContent.trim();


            if (agendaDataSelecionada) {

                agendaDataSelecionada.textContent =
                    "Dia " + numero + " de setembro";

            }

        });

    });

}


/* BOTÃO HOJE */

if (agendaHoje) {

    agendaHoje.addEventListener("click", function() {

        if (!agendaDays) return;


        const dias =
            agendaDays.querySelectorAll(".agenda-day");


        dias.forEach(function(dia) {

            dia.classList.remove("selected");

        });


        const hoje =
            agendaDays.querySelector(".today");


        if (hoje) {

            hoje.classList.add("selected");

        }


        if (agendaDataSelecionada) {

            agendaDataSelecionada.textContent =
                "Hoje, 29 de setembro";

        }

    });

}


/* MÊS ANTERIOR */

if (mesAnterior) {

    mesAnterior.addEventListener("click", function() {

        alert(
            "Calendário do mês anterior será carregado."
        );

    });

}


/* PRÓXIMO MÊS */

if (mesProximo) {

    mesProximo.addEventListener("click", function() {

        alert(
            "Calendário do próximo mês será carregado."
        );

    });

}
/* =====================================================
   PROVAS
===================================================== */

function filtrarProvas(filtro, botao) {

    const botoes = document.querySelectorAll(".prova-filtro");

    botoes.forEach(btn => {
        btn.classList.remove("ativo");
    });

    botao.classList.add("ativo");

    const provas = document.querySelectorAll(".prova-card");

    provas.forEach(prova => {

        const status = prova.dataset.status;

        if (filtro === "todas") {
            prova.style.display = "flex";
        }

        else if (filtro === status) {
            prova.style.display = "flex";
        }

        else {
            prova.style.display = "none";
        }

    });
}


function mostrarDetalhesProva(
    materia,
    conteudo,
    data,
    horario,
    local
) {

    alert(
        "📚 PROVA\n\n" +
        "Matéria: " + materia + "\n" +
        "Conteúdo: " + conteudo + "\n\n" +
        "📅 Data: " + data + "\n" +
        "⏰ Horário: " + horario + "\n" +
        "🏫 Local: " + local
    );
}


function mostrarNotaProva(materia, nota) {

    alert(
        "📊 RESULTADO\n\n" +
        "Matéria: " + materia + "\n" +
        "Nota: " + nota
    );
}
/* =====================================================
   PLATAFORMAS
===================================================== */

function acessarPlataforma(nome) {

    alert(
        "🔗 ACESSANDO PLATAFORMA\n\n" +
        "Plataforma: " + nome + "\n\n" +
        "O acesso será aberto em uma nova janela."
    );

}


function mostrarTodasPlataformas() {

    alert(
        "🌐 PLATAFORMAS DISPONÍVEIS\n\n" +
        "• Portal do Aluno\n" +
        "• Google Sala de Aula\n" +
        "• Biblioteca Digital\n" +
        "• Portal de Exercícios\n" +
        "• Videoaulas\n" +
        "• Comunicação Escolar"
    );

}
/* =====================================================
   PERFIL
===================================================== */

function editarPerfil() {

    alert(
        "✏️ Editar perfil\n\n" +
        "A edição dos dados do perfil será disponibilizada " +
        "em uma próxima versão."
    );

}


function editarDados(tipo) {

    alert(
        "✏️ " + tipo + "\n\n" +
        "Os dados poderão ser editados nesta seção."
    );

}


function alterarSenha() {

    alert(
        "🔒 Alterar senha\n\n" +
        "A alteração da senha será disponibilizada " +
        "na área de segurança da conta."
    );

}
/* =====================================================
   CONFIGURAÇÕES
===================================================== */

function selecionarConfig(nome, botao) {

    const secoes = document.querySelectorAll(".config-secao");
    const botoes = document.querySelectorAll(".config-menu-item");

    secoes.forEach(secao => {
        secao.classList.remove("ativa");
    });

    botoes.forEach(item => {
        item.classList.remove("ativo");
    });

    const secaoSelecionada =
        document.getElementById("config-" + nome);

    if (secaoSelecionada) {
        secaoSelecionada.classList.add("ativa");
    }

    if (botao) {
        botao.classList.add("ativo");
    }
}


function alterarConfiguracao(elemento, nome) {

    if (elemento.checked) {

        console.log(nome + " ativado.");

    } else {

        console.log(nome + " desativado.");

    }

}


function alterarTema(tema) {

    if (tema === "escuro") {

        alert(
            "🌙 Tema escuro\n\n" +
            "O tema escuro será aplicado em uma próxima atualização."
        );

    } else if (tema === "automatico") {

        alert(
            "⚙️ Tema automático\n\n" +
            "O tema será definido de acordo com as configurações do dispositivo."
        );

    }

}


function alterarFonte(tamanho) {

    const html = document.documentElement;

    html.classList.remove(
        "fonte-grande",
        "fonte-muito-grande"
    );

    if (tamanho === "grande") {

        html.classList.add("fonte-grande");

    }

    if (tamanho === "muito-grande") {

        html.classList.add("fonte-muito-grande");

    }

}


function alterarSenhaConfig() {

    alert(
        "🔐 Alterar senha\n\n" +
        "A alteração da senha será realizada " +
        "na área de segurança da conta."
    );

}


function verSessoes() {

    alert(
        "📱 Sessões ativas\n\n" +
        "Este dispositivo\n" +
        "Windows • Navegador atual\n\n" +
        "Nenhuma outra sessão ativa."
    );

}


function sairDaConta() {

    const confirmar = confirm(
        "🚪 Sair da conta?\n\n" +
        "Você precisará fazer login novamente para acessar o MeuSaber."
    );

    if (!confirmar) {
        return;
    }

    const loginScreen =
        document.getElementById("loginScreen");

    if (loginScreen) {
        loginScreen.style.display = "flex";
    }

    const loginRA =
        document.getElementById("loginRA");

    const loginSenha =
        document.getElementById("loginSenha");

    if (loginRA) loginRA.value = "";
    if (loginSenha) loginSenha.value = "";

    abrirPagina("inicio");
}