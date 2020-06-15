const nome = 'Maria';
const sexo = 'F';
const idade = 61;
const contribuicao = 23;

const soma = idade + contribuicao;

const homemAposenta = sexo == 'M' && contribuicao >= 35 && soma >= 95
const mulherAposenta = sexo == 'F' && contribuicao >= 30 && soma >= 85

if (homemAposenta || mulherAposenta) {
  console.log(`${nome}, você pode se aposentar!`)
} else {
  console.log(`${nome}, você não pode se aposentar!`)
}