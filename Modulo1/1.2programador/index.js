const programador = {
  nome: 'Vanessa',
  idade: 27,
  tecnologias: [
    { nome: 'JavaScript', especialidade: 'Web/Mobile' },
    { nome: 'Java', especialidade: 'Desktop' }
  ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`);
