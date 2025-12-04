let lang = document.querySelector(".lang"),
  link = document.querySelectorAll(".link"),
  about = document.querySelector(".about"),
  code = document.querySelector(".code"),
  contact = document.querySelector(".contact"),
  secAbout = document.querySelector(".about2"),
  secCode = document.querySelector(".code2"),
  secContact = document.querySelector(".contact2"),
  animate = document.querySelector(".hero-text"),
  hireMe = document.querySelector(".hire-me"),
  download = document.querySelector(".download"),
  descr = document.querySelector(".description"),
  onePiece = document.querySelector(".one-piece"),
  relationShip = document.querySelector(".relation-ship"),
  marioBros = document.querySelector(".mario-bros");

console.log(
  about,
  code,
  contact,
  hireMe,
  download,
  animate,
  descr,
  onePiece,
  relationShip,
  marioBros
);

link.forEach((el) => {
  el.addEventListener("click", () => {
    lang.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    let attr = el.getAttribute("language");

    about.textContent = data[attr].bntAbout;
    code.textContent = data[attr].bntCode;
    contact.textContent = data[attr].bntContact;
    secAbout.textContent = data[attr].bntAbout;
    secCode.textContent = data[attr].bntCode;
    secContact.textContent = data[attr].bntContact;
    animate.textContent = data[attr].animated;
    hireMe.textContent = data[attr].hireMe;
    download.textContent = data[attr].download;
    descr.textContent = data[attr].description;
    onePiece.textContent = data[attr].descriptionOnePiece;
    relationShip.textContent = data[attr].descriptionRelationship;
    marioBros.textContent = data[attr].descriptionMarioBros;
  });
});

let data = {
  portuguese: {
    bntAbout: "Sobre",
    bntCode: "Código",
    bntContact: "Contato",
    animated: "Eu tabalho com",
    hireMe: "Me contate",
    download: "Baixar CV",
    description: `Meu nome é Matheus Gomes, tenho 18 anos e sou um desenvolvedor full-stack que gosta de criar sites e interfaces de usuário. Tenho praticado e aprimorado minhas habilidades através da criação de projetos pessoais, o que me proporciona diversão e apredizado com as tecnologias mais recentes. Atualmente, estou em busca de oportunidades para expandir meu conhecimento e experiência na área de desenvolvimento full stack. Acredito que minha dedicação, juntamente com minha capacidade de aprender e habilidades, me permitirá contribuir de maneira significativa para o sucesso da equipe e da empresa. Estou entusiasmado para enfrentar novos desafios e aprender com exelentes profissionais.`,
    descriptionOnePiece:
      "Este é um projeto dado pelo meu curso de programação sobre One Piece, um anime japonês muito famoso.",
    descriptionRelationship:
      "Este projeto foi um desafio de um amigo, para que ele pudesse enviar para a garota de quem gosta.",
    descriptionMarioBros:
      "Este é um projeto dado pelo meu curso de programação sobre Mario Bros, um jogo que marcou a infância de muitos.",
  },
  english: {
    bntAbout: "About",
    bntCode: "Code",
    bntContact: "Contact",
    animated: "I work with",
    hireMe: "Contact me",
    download: "Download CV",
    description:
      "My name is Matheus Gomes, I am 18 years old, and I am a full-stack developer who enjoys creating websites and user interfaces. I have been practicing and improving my skills by working on personal projects, which provide me with fun and learning with the latest technologies. Currently, I am looking for opportunities to expand my knowledge and experience in full stack development. I believe that my dedication, along with my ability to learn and my skills, will allow me to contribute significantly to the success of the team and the company. I am excited to take on new challenges and learn from excellent professionals",
    descriptionOnePiece:
      "This is a project given by my programming course about One Piece, a very famous Japanese anime.",
    descriptionRelationship:
      "This project was a challenge from a friend, so he could send it to the girl he likes.",
    descriptionMarioBros:
      "This is a project given by my programming course about Mario Bros, a game that marked the childhood of many.",
  },
};
