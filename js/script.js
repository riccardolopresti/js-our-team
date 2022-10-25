//DATABASE MEMBRI TEAM
const members = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    pic: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role:"Chief Editor",
    pic:"angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role:"Office Manager",
    pic:"walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role:"Social Media Manager",
    pic:"angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role:"Developer",
    pic:"scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role:"Graphic Designer",
    pic:"barbara-ramos-graphic-designer.jpg",
  }
]

for(let member of members){
  const output = `<li>${member.name} ${member.role} ${member.pic}</li>`;
  const lista = document.querySelector('#lista');
  lista.innerHTML += output;
  console.log(output);
}