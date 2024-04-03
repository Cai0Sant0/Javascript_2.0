// VALIDAÇÃO NATIVA PT.01

const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
    let msg = null;
    if(!f_nota.checkValidity()){ // SE NÃO ESTIVER VÁLIDO
        msg = `${f_nota.validationMessage}` //PEGA OQUE ESTÁ INVÁLIDO
    }


    f_msg.innerHTML = msg;
    evt.preventDefault(); // USA ISSO PARA NÃO EXECUTAR UM SUBMIT
});

// MÉTODOS DE VALIDAÇÃO DO DOM

// checkValidity()
// setCustomValidity()

// PROPRIEDADES DE VALIDAÇÃO DO DOM

// validity
// validationMessage

//PROPRIEDADES DE VALIDAÇÃO
/*
    customError: true, se uma mensagem de validação personalizada for definida.
    patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
    rangeOverFlow: true, se o valor de uma elemento for maior que seu atributo max.
    rangeUnderFlow: true, se o valor de um elemento for menor que seu atributo min.
    stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
    tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
    typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
    valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
    valid: true, se o valor de um elemento for válido.
*/ 
