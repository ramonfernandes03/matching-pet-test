var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
})

function validarCampo(){ 
    const email = document.getElementById("email").value;
    if (!email){
        document.getElementById("recuperar-senha-botao").disable = true;
    } else if(validarEmail(email)){
        document.getElementById("recuperar-senha-botao").disable = false;
    } else{
        document.getElementById("recuperar-senha-botao").disable = true;
    }
    // pegar o valor do campo de email
    // verificar se o email nao é vazio e se o email é válido
    // se verdadeiro, então habilitar o botão de recuperar   
}

function validarEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}