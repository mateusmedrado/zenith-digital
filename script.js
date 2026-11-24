// ==========================================
// ZENITH DIGITAL — SISTEMA PRINCIPAL
// TCA 2026
// ==========================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function on(element, event, handler, options) {
  if (element) {
    element.addEventListener(event, handler, options);
  }
}

// ==========================================
// 1. BANCO DE PROFISSÕES
// ==========================================

const professions = [
  {
    name: "Especialista em Inteligência Artificial",
    area: "tecnologia",
    icon: "🤖",
    salary: "R$ 8.000–18.000",
    education: "Computação, IA ou áreas relacionadas",
    skills: "Programação, matemática e análise de dados",
    demand: "Área em expansão",
    description: "Desenvolve, avalia e implementa sistemas de inteligência artificial para resolver problemas e automatizar tarefas.",
    future: "Pode atuar em empresas, pesquisas, saúde, educação e indústria.",
    externalTitle: "Google AI — Fundamentos de Inteligência Artificial (PT / EN)",
    externalUrl: "https://grow.google/intl/pt-BR/ai/"
  },
  {
    name: "Engenheiro de Robótica",
    area: "tecnologia",
    icon: "⚙️",
    salary: "R$ 6.000–14.000",
    education: "Engenharia, automação ou robótica",
    skills: "Eletrônica, programação e mecânica",
    demand: "Área em expansão",
    description: "Projeta e desenvolve robôs e sistemas automatizados para diferentes atividades.",
    future: "Pode trabalhar na indústria, saúde, agricultura e pesquisa.",
    externalTitle: "Microsoft MakeCode — Robótica e Programação (PT / EN)",
    externalUrl: "https://www.microsoft.com/pt-br/makecode"
  },
  {
    name: "Especialista em Cibersegurança",
    area: "tecnologia",
    icon: "🔐",
    salary: "R$ 6.000–15.000",
    education: "Segurança da informação ou computação",
    skills: "Redes, programação e segurança digital",
    demand: "Área em expansão",
    description: "Ajuda a proteger sistemas, redes e informações contra ameaças digitais.",
    future: "Pode atuar em bancos, empresas, órgãos públicos e tecnologia.",
    externalTitle: "Cisco Networking Academy — Introdução à Cibersegurança (PT / EN)",
    externalUrl: "https://www.netacad.com/pt/courses/introduction-to-cybersecurity"
  },
  {
    name: "Desenvolvedor de Realidade Virtual",
    area: "tecnologia",
    icon: "🥽",
    salary: "R$ 5.000–12.000",
    education: "Computação, jogos digitais ou áreas relacionadas",
    skills: "Programação, modelagem 3D e criatividade",
    demand: "Área em desenvolvimento",
    description: "Cria ambientes digitais imersivos para educação, entretenimento e treinamento.",
    future: "Pode desenvolver simuladores, experiências educativas e jogos.",
    externalTitle: "Unity Learn — Realidade Virtual e Desenvolvimento 3D (PT / EN)",
    externalUrl: "https://learn.unity.com/"
  },
  {
    name: "Cientista de Dados",
    area: "ciencia",
    icon: "📊",
    salary: "R$ 7.000–16.000",
    education: "Estatística, matemática ou computação",
    skills: "Estatística, programação e interpretação",
    demand: "Área em expansão",
    description: "Analisa grandes conjuntos de informações para encontrar padrões e apoiar decisões.",
    future: "Pode trabalhar em pesquisa, empresas, saúde e serviços públicos.",
    externalTitle: "IBM SkillsBuild — Fundamentos de Ciência de Dados (PT / EN)",
    externalUrl: "https://skillsbuild.org/"
  },
  {
    name: "Bioengenheiro",
    area: "ciencia",
    icon: "🧬",
    salary: "R$ 5.000–12.000",
    education: "Bioengenharia ou engenharia biomédica",
    skills: "Biologia, engenharia e pesquisa",
    demand: "Área em desenvolvimento",
    description: "Combina conhecimentos de engenharia e biologia para desenvolver soluções para a saúde e a ciência.",
    future: "Pode atuar em laboratórios, hospitais e centros de pesquisa.",
    externalTitle: "Khan Academy — Biologia e Engenharia da Vida (PT / EN)",
    externalUrl: "https://pt.khanacademy.org/science/biology"
  },
  {
    name: "Geneticista",
    area: "ciencia",
    icon: "🧫",
    salary: "R$ 5.000–13.000",
    education: "Biologia, genética ou biomedicina",
    skills: "Pesquisa, biologia molecular e análise",
    demand: "Área em desenvolvimento",
    description: "Estuda os genes e a hereditariedade para ampliar o conhecimento sobre os seres vivos.",
    future: "Pode atuar em laboratórios, universidades e pesquisas.",
    externalTitle: "Coursera / Duke University — Introdução à Genética e Evolução (PT / EN)",
    externalUrl: "https://www.coursera.org/learn/genetics-evolution"
  },
  {
    name: "Especialista em Medicina Personalizada",
    area: "ciencia",
    icon: "🩺",
    salary: "R$ 8.000–20.000",
    education: "Medicina e especialização relacionada",
    skills: "Pesquisa, análise clínica e tecnologia",
    demand: "Área em desenvolvimento",
    description: "Trabalha com abordagens de saúde que consideram características individuais de cada paciente.",
    future: "Pode contribuir para pesquisas e tratamentos mais individualizados.",
    externalTitle: "UNASUS / Ministério da Saúde — Saúde Digital e Inovação (PT)",
    externalUrl: "https://www.unasus.gov.br/"
  },
  {
    name: "Engenheiro de Energias Renováveis",
    area: "ambiente",
    icon: "☀️",
    salary: "R$ 6.000–13.000",
    education: "Engenharia elétrica, ambiental ou energética",
    skills: "Física, sustentabilidade e engenharia",
    demand: "Área em expansão",
    description: "Desenvolve e acompanha projetos relacionados à geração de energia limpa.",
    future: "Pode atuar em projetos solares, eólicos e outras fontes renováveis.",
    externalTitle: "SENAI — Energias Renováveis e Eficiência Energética (PT)",
    externalUrl: "https://www.mundosenai.com.br/"
  },
  {
    name: "Cientista Ambiental",
    area: "ambiente",
    icon: "🌱",
    salary: "R$ 4.500–10.000",
    education: "Ciências ambientais ou biologia",
    skills: "Pesquisa, análise ambiental e ecologia",
    demand: "Área em desenvolvimento",
    description: "Investiga problemas ambientais e desenvolve estratégias de conservação.",
    future: "Pode trabalhar em empresas, pesquisas e projetos ambientais.",
    externalTitle: "ONU / UN CC:Learn — Mudanças Climáticas e Meio Ambiente (PT / EN)",
    externalUrl: "https://www.unccelearn.org/"
  },
  {
    name: "Especialista em Restauração de Ecossistemas",
    area: "ambiente",
    icon: "🌳",
    salary: "R$ 4.000–9.000",
    education: "Biologia, engenharia florestal ou ecologia",
    skills: "Ecologia, planejamento e pesquisa",
    demand: "Área em desenvolvimento",
    description: "Participa de projetos de recuperação de áreas degradadas e conservação da biodiversidade.",
    future: "Pode atuar em organizações ambientais, empresas e projetos públicos.",
    externalTitle: "PNUMA / ONU — Restauração de Ecossistemas (PT / EN)",
    externalUrl: "https://www.decadeonrestoration.org/pt-br"
  },
  {
    name: "Engenheiro Aeroespacial",
    area: "espaco",
    icon: "🚀",
    salary: "R$ 7.000–18.000",
    education: "Engenharia aeroespacial",
    skills: "Física, matemática e engenharia",
    demand: "Área especializada",
    description: "Desenvolve tecnologias relacionadas a aeronaves, satélites e sistemas espaciais.",
    future: "Pode atuar na indústria aeroespacial e em centros de pesquisa.",
    externalTitle: "NASA STEM — Engenharia Aeroespacial e Exploração (EN / PT)",
    externalUrl: "https://www.nasa.gov/learning-resources/"
  },
  {
    name: "Especialista em Habitats Espaciais",
    area: "espaco",
    icon: "🪐",
    salary: "Não há média consolidada",
    education: "Engenharia, arquitetura ou áreas espaciais",
    skills: "Projeto, engenharia e pesquisa",
    demand: "Área emergente",
    description: "Pesquisa estruturas e ambientes capazes de apoiar a presença humana fora da Terra.",
    future: "É uma área ligada à pesquisa e aos possíveis projetos de exploração espacial.",
    externalTitle: "ESA (Agência Espacial Europeia) — Ciência e Exploração Espacial (EN / PT)",
    externalUrl: "https://www.esa.int/Education"
  },
  {
    name: "Pesquisador Espacial",
    area: "espaco",
    icon: "🔭",
    salary: "R$ 5.000–14.000",
    education: "Física, astronomia ou engenharia",
    skills: "Matemática, pesquisa e análise",
    demand: "Área especializada",
    description: "Estuda fenômenos espaciais, planetas, estrelas e tecnologias de exploração.",
    future: "Pode atuar em universidades e centros de pesquisa.",
    externalTitle: "USP — Astronomia: Uma Visão Geral (PT)",
    externalUrl: "https://www.iag.usp.br/cultext/materiais/visao-geral-astronomia?language_content_entity=pt-br"
  },
  {
    name: "Designer de Experiências Digitais",
    area: "criatividade",
    icon: "🎨",
    salary: "R$ 4.000–11.000",
    education: "Design, comunicação ou áreas digitais",
    skills: "Criatividade, experiência do usuário e tecnologia",
    demand: "Área em expansão",
    description: "Planeja experiências digitais intuitivas e acessíveis para diferentes públicos.",
    future: "Pode trabalhar em aplicativos, sites, jogos e produtos digitais.",
    externalTitle: "Google / Coursera — Fundamentos de UX Design (PT / EN)",
    externalUrl: "https://www.coursera.org/learn/fundamentos-do-design-da-experiencia-do-usuario-ux"
  }
];

// Os valores salariais são estimativas ilustrativas para o projeto,
// não estatísticas oficiais. Variam por região, experiência e empresa.

// ==========================================
// 2. BANCO DE TRILHAS DE APRENDIZAGEM
// ==========================================

const courses = [
  {
    title: "Introdução à Programação",
    icon: "💻",
    level: "iniciante",
    category: "Tecnologia",
    duration: "Primeiros conceitos",
    description: "Conheça lógica de programação, algoritmos e os fundamentos da criação de programas.",
    topics: ["Lógica", "Algoritmos", "HTML e CSS"],
    externalTitle: "Harvard CS50 / Fundação Estudar — Ciência da Computação (PT / EN)",
    externalUrl: "https://www.edx.org/learn/computer-science/harvard-university-cs50-s-introduction-to-computer-science"
  },
  {
    title: "Inteligência Artificial",
    icon: "🤖",
    level: "iniciante",
    category: "Tecnologia",
    duration: "Fundamentos",
    description: "Entenda o que é inteligência artificial e como ela aparece no cotidiano.",
    topics: ["Conceitos de IA", "Aplicações", "Ética"],
    externalTitle: "Google & MinnaLearn — Elements of AI (PT / EN)",
    externalUrl: "https://www.elementsofai.com/"
  },
  {
    title: "Educação Ambiental",
    icon: "🌿",
    level: "iniciante",
    category: "Sustentabilidade",
    duration: "Fundamentos",
    description: "Aprenda sobre conservação, consumo consciente e sustentabilidade.",
    topics: ["Ecologia", "Reciclagem", "Consumo"],
    externalTitle: "SEST SENAT / ONU — Educação Ambiental e Sustentabilidade (PT / EN)",
    externalUrl: "https://digital.sestsenat.org.br/cursos/educacao-ambiental-e-desenvolvimento-sustentavel"
  },
  {
    title: "Comunicação Digital",
    icon: "📱",
    level: "iniciante",
    category: "Comunicação",
    duration: "Fundamentos",
    description: "Desenvolva habilidades de comunicação e produção de conteúdo digital.",
    topics: ["Comunicação", "Conteúdo", "Mídias"],
    externalTitle: "Google Ateliê Digital — Fundamentos de Comunicação e Marketing Digital (PT / EN)",
    externalUrl: "https://skillshop.exceedlms.com/student/catalog/list?category_ids=7879-google-digital-garage"
  },
  {
    title: "Desenvolvimento Web",
    icon: "🌐",
    level: "intermediario",
    category: "Tecnologia",
    duration: "Prática intermediária",
    description: "Aprofunde seus conhecimentos em sites e aplicações para a internet.",
    topics: ["HTML", "CSS", "JavaScript"],
    externalTitle: "freeCodeCamp — Design Responsivo e JavaScript (PT / EN)",
    externalUrl: "https://www.freecodecamp.org/portuguese/"
  },
  {
    title: "Análise de Dados",
    icon: "📊",
    level: "intermediario",
    category: "Ciência",
    duration: "Prática intermediária",
    description: "Aprenda a interpretar informações e encontrar padrões em conjuntos de dados.",
    topics: ["Planilhas", "Estatística", "Visualização"],
    externalTitle: "Microsoft Learn — Fundamentos de Análise de Dados e Power BI (PT / EN)",
    externalUrl: "https://learn.microsoft.com/pt-br/training/paths/data-analytics-microsoft/"
  },
  {
    title: "Robótica Educacional",
    icon: "⚙️",
    level: "intermediario",
    category: "Tecnologia",
    duration: "Prática intermediária",
    description: "Explore a relação entre programação, eletrônica e sistemas automatizados.",
    topics: ["Sensores", "Lógica", "Automação"],
    externalTitle: "Cisco Networking Academy — Introdução à IoT e Automação (PT / EN)",
    externalUrl: "https://www.netacad.com/pt/courses/introduction-to-iot"
  },
  {
    title: "Segurança Digital",
    icon: "🔐",
    level: "intermediario",
    category: "Tecnologia",
    duration: "Prática intermediária",
    description: "Conheça princípios de proteção de dados e segurança na internet.",
    topics: ["Senhas", "Privacidade", "Proteção"],
    externalTitle: "Cisco Networking Academy — Cibersegurança (PT / EN)",
    externalUrl: "https://www.netacad.com/pt/courses/introduction-to-cybersecurity"
  },
  {
    title: "Ciência de Dados",
    icon: "🧮",
    level: "avancado",
    category: "Ciência",
    duration: "Aprofundamento",
    description: "Explore conceitos de estatística, análise de dados e modelos computacionais.",
    topics: ["Estatística", "Python", "Dados"],
    externalTitle: "IBM SkillsBuild — Ciência de Dados e Python (PT / EN)",
    externalUrl: "https://skillsbuild.org/"
  },
  {
    title: "Desenvolvimento Sustentável",
    icon: "🌎",
    level: "avancado",
    category: "Sustentabilidade",
    duration: "Aprofundamento",
    description: "Estude estratégias para conciliar desenvolvimento, sociedade e meio ambiente.",
    topics: ["Sustentabilidade", "Planejamento", "Inovação"],
    externalTitle: "FGV Educação Executiva — Sustentabilidade e ESG (PT)",
    externalUrl: "https://educacao-executiva.fgv.br/cursos/gratuitos"
  },
  {
    title: "Fundamentos de Engenharia",
    icon: "📐",
    level: "avancado",
    category: "Engenharia",
    duration: "Aprofundamento",
    description: "Explore matemática aplicada, resolução de problemas e pensamento científico.",
    topics: ["Matemática", "Física", "Projetos"],
    externalTitle: "Khan Academy — Engenharia, Física e Matemática Aplicada (PT / EN)",
    externalUrl: "https://pt.khanacademy.org/science/electrical-engineering"
  },
  {
    title: "Biologia e Saúde",
    icon: "🧬",
    level: "iniciante",
    category: "Ciência e Saúde",
    duration: "Introdução",
    description: "Conheça conceitos de biologia, células, genética, corpo humano e saúde.",
    topics: ["Células", "Genética", "Corpo humano"],
    externalTitle: "Khan Academy — Biologia e Saúde (PT / EN)",
    externalUrl: "https://pt.khanacademy.org/science/biology"
  },
  {
    title: "Astronomia: Uma Visão Geral",
    icon: "🔭",
    level: "iniciante",
    category: "Espaço",
    duration: "Curso em vídeo",
    description: "Explore o sistema solar, estrelas, galáxias e os principais conceitos da astronomia.",
    topics: ["Sistema solar", "Estrelas", "Universo"],
    externalTitle: "USP — Astronomia: Uma Visão Geral (PT / EN)",
    externalUrl: "https://www.iag.usp.br/cultext/materiais/visao-geral-astronomia?language_content_entity=pt-br"
  },
  {
    title: "Comunicação Visual",
    icon: "🎨",
    level: "iniciante",
    category: "Criatividade e Sociedade",
    duration: "Curso online",
    description: "Aprenda fundamentos de design, tipografia, cores, imagens e composição visual.",
    topics: ["Design", "Teoria das cores", "Composição visual"],
    externalTitle: "Fundação Bradesco / UFPR — Design e Comunicação Visual (PT)",
    externalUrl: "https://www.ev.org.br/"
  }
];

let selectedArea = "todas";
let selectedLevel = "todos";

// ==========================================
// 3. RENDERIZAR PROFISSÕES
// ==========================================

function areaName(area) {
  const names = {
    tecnologia: "Tecnologia",
    ciencia: "Ciência",
    ambiente: "Meio ambiente",
    espaco: "Espaço",
    criatividade: "Criatividade"
  };
  return names[area] || area;
}

function renderProfessions() {
  const searchInput = $("#profession-search");
  const grid = $("#profession-grid");
  const countEl = $("#results-count");

  if (!grid) return;

  const search = searchInput ? searchInput.value.trim().toLowerCase() : "";

  const filtered = professions.filter((profession) => {
    const matchesArea =
      selectedArea === "todas" || profession.area === selectedArea;

    const matchesSearch =
      !search ||
      profession.name.toLowerCase().includes(search) ||
      profession.description.toLowerCase().includes(search) ||
      profession.skills.toLowerCase().includes(search);

    return matchesArea && matchesSearch;
  });

  grid.innerHTML = filtered.map((p) => {
    const realIndex = professions.indexOf(p);
    return `
      <article class="profession-card">
        <div class="profession-top">
          <span class="profession-icon">${p.icon}</span>
          <span class="tag">${areaName(p.area)}</span>
        </div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="profession-info">
          <div><span>Salário estimado</span><strong>${p.salary}</strong></div>
          <div><span>Formação</span><strong>${p.education}</strong></div>
          <div><span>Perspectiva</span><strong>${p.demand}</strong></div>
        </div>
        <button type="button" class="text-button profession-details" data-index="${realIndex}">
          Explorar profissão →
        </button>
      </article>
    `;
  }).join("");

  if (countEl) {
    countEl.textContent = `${filtered.length} profissão(ões) encontrada(s).`;
  }

  $$(".profession-details").forEach((button) => {
    on(button, "click", () => {
      showProfession(Number(button.dataset.index));
    });
  });
}

on($("#profession-search"), "input", renderProfessions);

on($("#profession-filters"), "click", (event) => {
  const button = event.target.closest("[data-area]");
  if (!button) return;

  selectedArea = button.dataset.area;

  $$("#profession-filters .filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn === button);
  });

  renderProfessions();
});

// ==========================================
// 4. DETALHES DA PROFISSÃO E MODAL
// ==========================================

function openModal() {
  const modal = $("#profession-modal");
  if (modal) {
    modal.classList.remove("hidden");
  }
}

function closeModal() {
  const modal = $("#profession-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

function showProfession(index) {
  const p = professions[index];
  const modalBody = $("#modal-body");
  if (!p || !modalBody) return;

  const linkHTML = p.externalUrl ? `
    <h3>Curso gratuito recomendado</h3>
    <p>${p.externalTitle || "Curso gratuito na área"}</p>
    <a class="btn btn-primary course-external-link"
       href="${p.externalUrl}"
       target="_blank"
       rel="noopener noreferrer">
       Acessar curso gratuito ↗
    </a>
  ` : "";

  modalBody.innerHTML = `
    <span class="eyebrow">${areaName(p.area).toUpperCase()}</span>
    <h2>${p.icon} ${p.name}</h2>
    <p>${p.description}</p>
    <div class="modal-detail"><strong>Salário estimado:</strong> ${p.salary}</div>
    <div class="modal-detail"><strong>Formação:</strong> ${p.education}</div>
    <div class="modal-detail"><strong>Habilidades:</strong> ${p.skills}</div>
    <div class="modal-detail"><strong>Perspectiva:</strong> ${p.demand}</div>
    <h3>Possibilidades profissionais</h3>
    <p>${p.future}</p>
    <h3>Como começar a aprender?</h3>
    <p>Estude os fundamentos da área, desenvolva projetos, procure oportunidades de formação e pratique continuamente.</p>
    ${linkHTML}
  `;

  openModal();
}

on($("#modal-close"), "click", closeModal);

on($("#profession-modal"), "click", (event) => {
  if (event.target && event.target.id === "profession-modal") {
    closeModal();
  }
});

on(document, "keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

// ==========================================
// 5. RENDERIZAR CURSOS
// ==========================================

function renderCourses() {
  const grid = $("#course-grid");
  if (!grid) return;

  const filtered = courses.filter((course) =>
    selectedLevel === "todos" || course.level === selectedLevel
  );

  grid.innerHTML = filtered.map((course) => {
    const realIndex = courses.indexOf(course);
    return `
      <article class="course-card">
        <span class="course-symbol">${course.icon}</span>
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-meta">
          <span>${course.level}</span>
          <span>${course.category}</span>
        </div>
        <p><strong>Conteúdos:</strong> ${course.topics.join(" • ")}</p>
        <button type="button" class="text-button course-details" data-index="${realIndex}">
          Conhecer trilha →
        </button>
      </article>
    `;
  }).join("");

  $$(".course-details").forEach((button) => {
    on(button, "click", () => {
      showCourse(Number(button.dataset.index));
    });
  });
}

function showCourse(index) {
  const course = courses[index];
  const modalBody = $("#modal-body");
  if (!course || !modalBody) return;

  const paths = {
    "Inteligência Artificial": [
      ["Conhecer a IA", "Entender o que é inteligência artificial e reconhecer exemplos no cotidiano.", "Listar cinco situações em que sistemas inteligentes podem ajudar as pessoas."],
      ["Dados e padrões", "Compreender que sistemas de IA aprendem a identificar padrões em dados.", "Organizar informações simples em uma tabela e observar padrões."],
      ["Aplicações e limites", "Conhecer aplicações em educação, saúde, meio ambiente e transporte, além de seus limites.", "Debater um benefício e um cuidado necessário no uso da IA."],
      ["Ética e responsabilidade", "Refletir sobre privacidade, vieses, transparência e uso responsável.", "Criar uma lista de boas práticas para usar IA com responsabilidade."],
      ["Projeto final", "Planejar uma ideia de solução que utilize IA de forma responsável.", "Apresentar o problema, a ideia, quem seria beneficiado e os cuidados necessários."]
    ],

    "Biologia e Saúde": [
      ["Fundamentos da vida", "Conhecer células, tecidos e organização dos seres vivos.", "Criar um esquema simples de uma célula."],
      ["Corpo humano", "Explorar sistemas do corpo e suas funções.", "Montar um mapa conceitual de um sistema do corpo humano."],
      ["Genética", "Conhecer DNA, genes e hereditariedade.", "Pesquisar exemplos de características hereditárias."],
      ["Ciência e saúde", "Entender como pesquisas científicas contribuem para a saúde.", "Resumir uma descoberta científica em linguagem simples."],
      ["Projeto final", "Relacionar biologia a um desafio de saúde ou qualidade de vida.", "Criar um cartaz educativo com informações confiáveis."]
    ],

    "Educação Ambiental": [
      ["Ecossistemas", "Compreender relações entre seres vivos e ambiente.", "Identificar um ecossistema da sua região."],
      ["Resíduos e consumo", "Conhecer descarte correto, reciclagem e consumo consciente.", "Elaborar um plano simples para reduzir desperdícios na escola."],
      ["Água e energia", "Investigar a importância do uso responsável dos recursos naturais.", "Registrar formas de economizar água e energia."],
      ["Mudanças climáticas", "Conhecer causas, impactos e formas de adaptação.", "Criar um resumo com atitudes individuais e coletivas."],
      ["Projeto final", "Planejar uma ação de sustentabilidade para a comunidade.", "Apresentar uma proposta de melhoria ambiental."]
    ],

    "Astronomia: Uma Visão Geral": [
      ["Olhar para o céu", "Conhecer objetos celestes e a observação astronômica.", "Montar um pequeno glossário de astronomia."],
      ["Sistema solar", "Explorar planetas, luas e outros corpos do sistema solar.", "Criar uma representação do sistema solar, sem escala."],
      ["Estrelas e galáxias", "Entender como estrelas nascem, evoluem e se organizam em galáxias.", "Pesquisar uma estrela ou galáxia e apresentar curiosidades."],
      ["Exploração espacial", "Conhecer satélites, sondas e missões científicas.", "Escolher uma missão espacial e explicar seu objetivo."],
      ["Projeto final", "Compartilhar um tema astronômico com outras pessoas.", "Criar um infográfico sobre um assunto do espaço."]
    ],

    "Comunicação Visual": [
      ["Elementos visuais", "Reconhecer formas, linhas, imagens e composição.", "Observar cartazes e identificar seus elementos."],
      ["Cores e tipografia", "Entender como cores e letras influenciam a comunicação.", "Criar uma paleta de cores e escolher fontes para um projeto."],
      ["Composição", "Organizar textos e imagens para facilitar a leitura.", "Esboçar um cartaz com título, imagem e informações."],
      ["Design inclusivo", "Pensar em contraste, legibilidade e acessibilidade.", "Revisar o cartaz para melhorar sua leitura por diferentes pessoas."],
      ["Projeto final", "Produzir uma peça de comunicação visual com objetivo definido.", "Criar um cartaz ou publicação digital para uma campanha positiva."]
    ]
  };

  const defaultPath = [
    ["Conhecer os fundamentos", `Aprender os conceitos iniciais de ${course.title.toLowerCase()}.`, "Pesquisar o significado dos principais conceitos."],
    ["Explorar exemplos", "Observar como o conhecimento aparece no cotidiano.", "Encontrar dois exemplos reais relacionados ao tema."],
    ["Praticar", "Aplicar o que foi aprendido em uma atividade simples.", "Resolver um exercício ou criar um pequeno exemplo."],
    ["Aprofundar", "Conhecer novas aplicações e desafios da área.", "Pesquisar uma aplicação atual e resumir como funciona."],
    ["Projeto final", "Usar o conhecimento para criar uma proposta.", "Apresentar uma ideia ou atividade relacionada ao curso."]
  ];

  const pathway = paths[course.title] || defaultPath;

  const pathwayHTML = pathway.map((stage, i) => `
    <article class="pathway-stage">
      <span class="pathway-number">${String(i + 1).padStart(2, "0")}</span>
      <div>
        <h4>${stage[0]}</h4>
        <p><strong>Objetivo:</strong> ${stage[1]}</p>
        <p><strong>Atividade:</strong> ${stage[2]}</p>
      </div>
    </article>
  `).join("");

  const linkHTML = course.externalUrl ? `
    <h3>Curso gratuito recomendado</h3>
    <p>${course.externalTitle || "Curso gratuito"}</p>
    <a class="btn btn-primary course-external-link"
       href="${course.externalUrl}"
       target="_blank"
       rel="noopener noreferrer">
       Acessar curso gratuito ↗
    </a>
    <p class="pathway-note">
      O conteúdo, o idioma, a inscrição e eventuais requisitos são definidos pela plataforma responsável.
      Confira as informações no site do curso.
    </p>
  ` : "";

  modalBody.innerHTML = `
    <span class="eyebrow">TRILHA DE APRENDIZAGEM</span>
    <h2>${course.icon} ${course.title}</h2>
    <p>${course.description}</p>

    <div class="modal-detail">
      <strong>Nível:</strong> ${course.level}
    </div>

    <div class="modal-detail">
      <strong>Área:</strong> ${course.category}
    </div>

    <div class="modal-detail">
      <strong>Conteúdos principais:</strong> ${course.topics.join(" • ")}
    </div>

    <h3>Etapas da sua jornada</h3>
    <div class="pathway-list">${pathwayHTML}</div>

    ${linkHTML}

    <p class="pathway-note">
      Esta trilha é uma proposta educacional da Zenith Digital.
      Você pode seguir as etapas no seu ritmo e adaptar as atividades
      aos conhecimentos que já possui.
    </p>

    <button type="button" class="btn btn-outline" id="close-course">
      Concluir leitura ✓
    </button>
  `;

  openModal();
  on($("#close-course"), "click", closeModal);
}

on($(".course-filters"), "click", (event) => {
  const button = event.target.closest("[data-level]");
  if (!button) return;

  selectedLevel = button.dataset.level;

  $$(".course-filters .filter-btn").forEach((btn) => {
    btn.classList.toggle("active", btn === button);
  });

  renderCourses();
});

// ==========================================
// 6. COMPARADOR DE PROFISSÕES
// ==========================================

function setupComparator() {
  const careerOne = $("#career-one");
  const careerTwo = $("#career-two");

  if (!careerOne || !careerTwo) return;

  const options = professions.map((p, index) =>
    `<option value="${index}">${p.name}</option>`
  ).join("");

  careerOne.innerHTML = options;
  careerTwo.innerHTML = options;

  careerOne.value = "0";
  careerTwo.value = professions.length > 1 ? "1" : "0";

  on(careerOne, "change", renderComparison);
  on(careerTwo, "change", renderComparison);

  renderComparison();
}

function renderComparison() {
  const careerOne = $("#career-one");
  const careerTwo = $("#career-two");
  const result = $("#comparison-result");

  if (!careerOne || !careerTwo || !result) return;

  const one = professions[Number(careerOne.value)];
  const two = professions[Number(careerTwo.value)];

  if (!one || !two) return;

  result.innerHTML = `
    <div class="comparison-row">
      <strong>${one.icon} ${one.name}</strong>
      <span>CARACTERÍSTICA</span>
      <strong>${two.icon} ${two.name}</strong>
    </div>

    <div class="comparison-row">
      <strong>${one.salary}</strong>
      <span>Salário estimado</span>
      <strong>${two.salary}</strong>
    </div>

    <div class="comparison-row">
      <strong>${areaName(one.area)}</strong>
      <span>Área</span>
      <strong>${areaName(two.area)}</strong>
    </div>

    <div class="comparison-row">
      <strong>${one.demand}</strong>
      <span>Perspectiva</span>
      <strong>${two.demand}</strong>
    </div>

    <div class="comparison-row">
      <strong>${one.education}</strong>
      <span>Formação</span>
      <strong>${two.education}</strong>
    </div>

    <div class="comparison-row">
      <strong>${one.skills}</strong>
      <span>Habilidades</span>
      <strong>${two.skills}</strong>
    </div>

    <div class="comparison-row">
      <strong>${one.description}</strong>
      <span>Atuação</span>
      <strong>${two.description}</strong>
    </div>
  `;
}

// ==========================================
// 7. QUIZ PROFISSIONAL
// ==========================================

const quizQuestions = [
  {
    question: "Quando algo trava ou dá errado, qual costuma ser seu primeiro impulso?",
    options: [
      ["Entender a regra por trás da falha para não acontecer de novo", "tecnologia"],
      ["Buscar provas e testes antes de tirar qualquer conclusão", "ciencia"],
      ["Observar como isso afeta o entorno e o equilíbrio geral", "ambiente"],
      ["Pensar em condições extremas e no que acontece longe do comum", "espaco"],
      ["Testar um caminho diferente e ver como outras pessoas reagem", "criatividade"]
    ]
  },
  {
    question: "Em um trabalho em grupo, qual papel você assume com mais naturalidade?",
    options: [
      ["Estruturar o fluxo, organizar a lógica e automatizar o repetitivo", "tecnologia"],
      ["Cruzar dados, levantar hipóteses e checar o que faz sentido", "ciencia"],
      ["Garantir que a solução seja sustentável a longo prazo", "ambiente"],
      ["Enxergar o quadro amplo e planejar cenários complexos", "espaco"],
      ["Dar forma visual, clareza e conexão com quem vai usar", "criatividade"]
    ]
  },
  {
    question: "Qual tipo de leitura ou vídeo prende sua atenção por mais tempo?",
    options: [
      ["Bastidores de como sistemas complexos funcionam por dentro", "tecnologia"],
      ["Descobertas recentes e explicações detalhadas de fenômenos", "ciencia"],
      ["Histórias de transformação de territórios, clima e recursos", "ambiente"],
      ["Viagens, fronteiras desconhecidas e desafios de engenharia", "espaco"],
      ["Tendências culturais, estética, narrativa e comportamento", "criatividade"]
    ]
  },
  {
    question: "O que mais incomoda você ao ver uma solução mal feita?",
    options: [
      ["Processos lentos, confusos ou cheios de etapas desnecessárias", "tecnologia"],
      ["Afirmações sem base concreta ou feitas no achismo", "ciencia"],
      ["Soluções de curto prazo que geram prejuízos depois", "ambiente"],
      ["Falta de margem de segurança para situações inesperadas", "espaco"],
      ["Algo frio, difícil de entender ou que exclui pessoas", "criatividade"]
    ]
  },
  {
    question: "Se tivesse uma tarde livre para explorar um assunto novo, o que escolheria?",
    options: [
      ["Montar uma regra, fluxo ou protótipo funcional", "tecnologia"],
      ["Acompanhar um experimento ou investigar uma dúvida específica", "ciencia"],
      ["Mapear impactos e formas de reaproveitar melhor o que existe", "ambiente"],
      ["Explorar mapas, trajetórias, física aplicada ou sistemas orbitais", "espaco"],
      ["Criar um conceito, rascunho visual ou apresentação envolvente", "criatividade"]
    ]
  },
  {
    question: "Qual frase combina mais com o seu jeito de trabalhar?",
    options: [
      ["Se dá para padronizar e melhorar a eficiência, vale a pena", "tecnologia"],
      ["Cada detalhe importa quando queremos descobrir a verdade", "ciencia"],
      ["Progresso de verdade precisa respeitar seus limites", "ambiente"],
      ["Ir além do óbvio exige precisão e visão de longo alcance", "espaco"],
      ["Uma boa ideia só funciona bem se tocar e fizer sentido para as pessoas", "criatividade"]
    ]
  },
  {
    question: "O que dá mais sensação de conquista ao terminar um projeto?",
    options: [
      ["Ver tudo rodando de forma rápida, estável e inteligente", "tecnologia"],
      ["Encontrar um padrão claro ou responder uma pergunta difícil", "ciencia"],
      ["Saber que o resultado deixa um impacto positivo e duradouro", "ambiente"],
      ["Superar um desafio técnico difícil que parecia distante", "espaco"],
      ["Ver alguém usando e entendendo aquilo sem esforço", "criatividade"]
    ]
  }
];

const quizDescriptions = {
  tecnologia: "Você demonstrou interesse por inovação, programação, sistemas e soluções tecnológicas.",
  ciencia: "Você demonstrou interesse por pesquisa, descobertas, investigação e conhecimento científico.",
  ambiente: "Você demonstrou interesse por sustentabilidade, natureza e proteção dos recursos naturais.",
  espaco: "Você demonstrou interesse por astronomia, exploração espacial e engenharia.",
  criatividade: "Você demonstrou interesse por criação, design, comunicação e experiências digitais."
};

const quizCareerMap = {
  tecnologia: [0, 1, 2, 3],
  ciencia: [4, 5, 6, 7],
  ambiente: [8, 9, 10],
  espaco: [11, 12, 13],
  criatividade: [14, 3]
};

let quizIndex = 0;
let quizSelection = null;
let quizScores = {
  tecnologia: 0,
  ciencia: 0,
  ambiente: 0,
  espaco: 0,
  criatividade: 0
};

let quizAnswers = [];

function startQuiz() {
  quizIndex = 0;
  quizSelection = null;
  quizAnswers = [];
  Object.keys(quizScores).forEach((key) => {
    quizScores[key] = 0;
  });

  if ($("#quiz-intro")) $("#quiz-intro").classList.add("hidden");
  if ($("#quiz-result")) $("#quiz-result").classList.add("hidden");
  if ($("#quiz-game")) $("#quiz-game").classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  const question = quizQuestions[quizIndex];
  if (!question) return;

  const percentage = Math.round(((quizIndex + 1) / quizQuestions.length) * 100);
  quizSelection = null;

  if ($("#quiz-count")) {
    $("#quiz-count").textContent = `Pergunta ${quizIndex + 1} de ${quizQuestions.length}`;
  }
  if ($("#quiz-percent")) {
    $("#quiz-percent").textContent = `${percentage}%`;
  }
  if ($("#quiz-progress-fill")) {
    $("#quiz-progress-fill").style.width = `${percentage}%`;
  }
  if ($("#quiz-question")) {
    $("#quiz-question").textContent = question.question;
  }

  const nextBtn = $("#next-question");
  if (nextBtn) {
    nextBtn.disabled = true;
    nextBtn.textContent =
      quizIndex === quizQuestions.length - 1
        ? "Ver meu resultado →"
        : "Próxima pergunta →";
  }

  const optionsContainer = $("#quiz-options");
  if (!optionsContainer) return;

  optionsContainer.innerHTML = question.options.map((option, index) => `
    <button type="button" class="quiz-option" data-index="${index}">
      ${option[0]}
    </button>
  `).join("");

  $$(".quiz-option").forEach((button) => {
    on(button, "click", () => {
      $$(".quiz-option").forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      quizSelection = Number(button.dataset.index);
      if (nextBtn) nextBtn.disabled = false;
    });
  });
}

function nextQuestion() {
  if (quizSelection === null) return;

  const currentQuestion = quizQuestions[quizIndex];
  const selected = currentQuestion && currentQuestion.options[quizSelection]
    ? currentQuestion.options[quizSelection][1]
    : null;

  if (selected && Object.prototype.hasOwnProperty.call(quizScores, selected)) {
    quizAnswers.push(selected);
    quizScores[selected]++;
  }

  quizIndex++;

  if (quizIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    showQuizResult();
  }
}

function showQuizResult() {
  const sorted = Object.entries(quizScores).sort((a, b) => b[1] - a[1]);
  const mainArea = sorted[0] ? sorted[0][0] : "tecnologia";
  const careers = quizCareerMap[mainArea] || [0];

  if ($("#quiz-game")) $("#quiz-game").classList.add("hidden");
  if ($("#quiz-result")) $("#quiz-result").classList.remove("hidden");

  if ($("#quiz-area")) {
    $("#quiz-area").textContent = areaName(mainArea);
  }
  if ($("#quiz-description")) {
    $("#quiz-description").textContent = quizDescriptions[mainArea] || "";
  }
  if ($("#quiz-careers")) {
    $("#quiz-careers").innerHTML = careers
      .map((index) => professions[index])
      .filter(Boolean)
      .map((prof) => `<span>${prof.icon} ${prof.name}</span>`)
      .join("");
  }
}

on($("#start-quiz"), "click", startQuiz);
on($("#next-question"), "click", nextQuestion);

on($("#restart-quiz"), "click", () => {
  if ($("#quiz-result")) $("#quiz-result").classList.add("hidden");
  if ($("#quiz-intro")) $("#quiz-intro").classList.remove("hidden");
});

// ==========================================
// 8. DILEMAS TECNOLÓGICOS
// ==========================================

$$(".dilemma-btn").forEach((button) => {
  on(button, "click", () => {
    const answer = button.nextElementSibling;
    if (!answer) return;

    const isOpen = answer.textContent !== "";
    answer.textContent = isOpen ? "" : (button.dataset.answer || "");
    button.textContent = isOpen ? "Ver reflexão →" : "Ocultar reflexão ↑";
  });
});

// ==========================================
// 9. MENU PARA CELULARES
// ==========================================

on($("#menu-toggle"), "click", () => {
  const nav = $("#nav");
  const toggle = $("#menu-toggle");
  if (!nav) return;

  nav.classList.toggle("open");
  if (toggle) {
    toggle.textContent = nav.classList.contains("open") ? "✕" : "☰";
  }
});

$$(".nav a").forEach((link) => {
  on(link, "click", () => {
    const nav = $("#nav");
    const toggle = $("#menu-toggle");
    if (nav) nav.classList.remove("open");
    if (toggle) toggle.textContent = "☰";
  });
});

// ==========================================
// 10. TEMA CLARO E ESCURO
// ==========================================

const themeButton = $("#tema-toggle");

function setTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light", isLight);

  if (themeButton) {
    themeButton.textContent = isLight ? "☾ Tema escuro" : "☀ Tema claro";
  }

  try {
    localStorage.setItem("zenith-theme", isLight ? "light" : "dark");
  } catch (_error) {
    // Preferência de tema não salva em modo restrito
  }
}

let savedTheme = "dark";

try {
  savedTheme = localStorage.getItem("zenith-theme") || "dark";
} catch (_error) {
  savedTheme = "dark";
}

setTheme(savedTheme);

on(themeButton, "click", () => {
  setTheme(document.body.classList.contains("light") ? "dark" : "light");
});

// ==========================================
// 11. INDICADOR DE ROLAGEM
// ==========================================

function updateScroll() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

  const progressLine = $("#progress-line");
  if (progressLine) {
    progressLine.style.width = `${percentage}%`;
  }

  const backTop = $("#back-top");
  if (backTop) {
    backTop.classList.toggle("visible", scrollTop > 400);
  }
}

on(window, "scroll", updateScroll, { passive: true });

on($("#back-top"), "click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ==========================================
// 12. DESTAQUE DO MENU CONFORME A SEÇÃO
// ==========================================

const sections = $$("main section[id]");

if ("IntersectionObserver" in window && sections.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        $$(".nav a").forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

// ==========================================
// 13. ANIMAÇÕES DE ENTRADA
// ==========================================

const revealTargets = $$(
  ".mission-card, .course-card, .profession-card, .impact-card, .dilemma-card, .timeline-item"
);

if ("IntersectionObserver" in window && revealTargets.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  revealTargets.forEach((element) => revealObserver.observe(element));
}

// ==========================================
// 14. INICIALIZAÇÃO
// ==========================================

function initializeSite() {
  renderProfessions();
  renderCourses();
  setupComparator();
  updateScroll();

  console.log("ZENITH DIGITAL iniciada com sucesso!");
}

on(document, "DOMContentLoaded", initializeSite);
