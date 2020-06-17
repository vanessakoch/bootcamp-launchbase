// Usuários e tecnologias

const usuarios = [
  { nome: "Vanessa", tecnologias: ["HTML", "CSS", "JavaScript"] },
  { nome: "Felipe", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Larissa", tecnologias: ["Node.js"] }
];

for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}

// Busca por tecnologia

function checarCss(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia === 'CSS') 
      return true
  }
  
  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const trabalhaComCss = checarCss(usuarios[i])

  if(trabalhaComCss) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS.`)
  }
}