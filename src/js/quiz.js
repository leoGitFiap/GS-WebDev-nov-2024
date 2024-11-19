alert("Vamos conhecer sobre Energia!!!");

//TROCAR A COR DE FUNDO
function trocar(cor){
    document.body.style.background = cor;
}

const quizQuestions = [
    {
        question: "Qual das seguintes fontes de energia é considerada renovável e limpa?",
        options: {
            a: "Petróleo",
            b: "Carvão",
            c: "Energia Solar",
            d: "Energia Nuclear"
        },
        answer: "c"
    },
    {
        question: "Qual é a principal fonte de energia utilizada nas usinas hidrelétricas?",
        options: {
            a: "Vento",
            b: "Água",
            c: "Sol",
            d: "Carvão"
        },
        answer: "b"
    },
    {
        question: "Qual das fontes de energia abaixo não é renovável?",
        options: {
            a: "Energia Eólica",
            b: "Energia Solar",
            c: "Energia Nuclear",
            d: "Energia Hidrelétrica"
        },
        answer: "c"
    },
    {
        question: "O que é uma usina termelétrica?",
        options: {
            a: "Uma usina que gera energia através da energia solar",
            b: "Uma usina que usa combustíveis fósseis ou biomassa para gerar eletricidade",
            c: "Uma usina que utiliza a energia das ondas do mar",
            d: "Uma usina que usa o vento para gerar eletricidade"
        },
        answer: "b"
    },
    {
        question: "Qual é a principal vantagem da energia solar em comparação com outras fontes de energia?",
        options: {
            a: "Não emite gases poluentes",
            b: "É mais barata de instalar",
            c: "Depende da localização geográfica",
            d: "Produz energia continuamente, independentemente do clima"
        },
        answer: "a"
    },
    {
        question: "Qual das alternativas a seguir é uma característica da energia eólica?",
        options: {
            a: "Depende da radiação solar",
            b: "Produz energia a partir do movimento do vento",
            c: "Utiliza a força da água para gerar eletricidade",
            d: "Precisa de uma grande quantidade de carvão"
        },
        answer: "b"
    },
    {
        question: "Quais das alternativas abaixo são desvantagens da energia nuclear?",
        options: {
            a: "Emissão de gases de efeito estufa",
            b: "Risco de acidentes radioativos e resíduos nucleares perigosos",
            c: "É uma fonte inesgotável de energia",
            d: "Depende de clima e tempo"
        },
        answer: "b"
    },
    {
        question: "Como as usinas hidrelétricas geram eletricidade?",
        options: {
            a: "Através da queima de biomassa",
            b: "Através do movimento de turbinas acionadas pela água",
            c: "Através do uso do vento",
            d: "Através da decomposição de resíduos orgânicos"
        },
        answer: "b"
    },
    {
        question: "Qual das alternativas abaixo descreve uma desvantagem das usinas hidrelétricas?",
        options: {
            a: "Emitem grandes quantidades de CO2",
            b: "Derrubam grandes áreas de floresta e podem prejudicar ecossistemas",
            c: "São muito caras para construir",
            d: "Não geram energia de forma contínua"
        },
        answer: "b"
    },
    {
        question: "A energia solar é gerada a partir de qual fenômeno natural?",
        options: {
            a: "Radiação solar",
            b: "Movimento das marés",
            c: "Movimento das correntes de água",
            d: "Geração de calor no núcleo da Terra"
        },
        answer: "a"
    }
];

// Função para iniciar o quiz
function startQuiz() {
    let score = 0;

    quizQuestions.forEach((question, index) => {
        let optionsText = `a) ${question.options.a}\nb) ${question.options.b}\nc) ${question.options.c}\nd) ${question.options.d}`;
        let userAnswer = prompt(`${question.question}\n${optionsText}`);

        if (userAnswer && userAnswer.toLowerCase() === question.answer) {
            score++;
            alert(`Resposta correta!`);
        } else {
            alert(`Resposta incorreta! A resposta correta é: ${question.answer.toUpperCase()}.`);
        }
    });

    alert(`Você acertou ${score} de ${quizQuestions.length} perguntas.`);
}

// Iniciar o quiz
startQuiz();