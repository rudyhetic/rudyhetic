var pages = [
  {
    pictureUrl: "node.png",
    answers: [
      { name: "Node sert améliorer ton utilisation Tiktok", weight: 0 },
      { name: "Augmenter tes flammes sur snap", weight: 0 },
      { name: "Permet de créer des applications côté serveur ", weight: 1 },
      { name: "Node.js sert pour le python", weight: 0 }
    ]
  },
 
  {
    pictureUrl: "Dev.gif",
    answers: [
      {
        name: "Le devops sert à automatiser les parties league of Legends",
        weight: 0
      },
      {
        name: "Le devops permet de jouer a Pokemon",
        weight: 0
      },
      {
        name: "Permet d'intégrer les processus entre les équipes de développement et informatiques.",
        weight: 1
      },
      {
        name: "Le devops permet d'avoir d'avoir une place VIP au Z-event",
        weight: 0
      }
    ]
  },
  

  {
    pictureUrl: "python.gif",
    answers: [
      {
        name: "Le Python est un mode sur Roblox",
        weight: 0
      },
      {
        name: "Python est utilisé pour développement web, l'analyse de données, l'intelligence artificielle et bien d'autres applications.",
        weight: 1
      },
      {
        name: "Permet de rajouter de l'argent sur son compte.",
        weight: 0
      },
      {
        name: "Le Python permet d'avoir un abonnement Bein Sport",
        weight: 0
      }
    ]
  },
 
  {
    pictureUrl: "vscode.gif",
    answers: [
      {
        name: "VSCode me permet de faire des tiktok de 30secs",
        weight: 0
      },
      {
        name: "VSCode est une IA qui developpe des application",
        weight: 0
      },
      {
        name: "VSCode me permet de pirater ChatGPT",
        weight: 0
      },
      {
        name: "VSCode est un éditeur qui me  permet le développement d'applications avec prise en charge de multiples langages",
        weight: 1
      }
    ]
  },


  {
    pictureUrl: "html.gif",
    answers: [
      {
        name: "HTML est un logiciel qui va rendre le manga One Piece mieux que Oda la écrit",
        weight: 0
      },
      {
        name: "HTML est un langage de balisage",
        weight: 1
      },
      {
        name: "Un langage de programmation",
        weight: 0
      },
      {
        name: "Permet de gagner le prochain Loto",
        weight: 0
      }
    ]
  },
  //----------/
];

var pageIndex = 0;
var givenAnswers = [];

function generatePage(index) {
  var currentObject = pages[index];

  document.getElementById("pictureId").src = currentObject.pictureUrl;

  document.getElementById("pollOptions").innerHTML = generatePoll(currentObject.answers);
}

function generatePoll(answers) {
  var html = '<form id="myForm">';

  for (var i = 0; i < answers.length; i++) {
    html += '<input type="radio" onclick="submitAnswer(this)" name="' + answers[i].name + '" value=' + answers[i].weight + ' /> ' + answers[i].name + ' <br />';
  }

  html += '</form>';
  return html;
}

function submitAnswer(answer) {
  givenAnswers.push(parseInt(answer.value));

  if (pageIndex == pages.length - 1) {
    document.getElementById("resultShow").textContent = "Vous avez trouvé " + calculateResult(givenAnswers) + " réponses sur 5 questions!";
    document.getElementById("main").style.display = "none";
    document.querySelector("h3").style.display = "none";
    document.getElementById("reload").style.display = "block";
  } else {
    generatePage(++pageIndex);
  }
}

function calculateResult(givenAnswers) {
  var result = 0;
  for (var i = 0; i < givenAnswers.length; i++) {
    result += givenAnswers[i];
  }
  return result;
}

function handleWindowResize() {
  alert("Triche détectée ! Vous avez réduit la taille de la fenêtre.");
}

function handleRightClick(event) {
  event.preventDefault();
  alert("Triche détectée ! Clic droit bloqué.");
}

document.addEventListener("DOMContentLoaded", function () {
  generatePage(pageIndex);
});

window.addEventListener('resize', handleWindowResize);
document.addEventListener('contextmenu', handleRightClick);