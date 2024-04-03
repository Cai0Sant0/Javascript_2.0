// VALIDAÇÃO NATIVA PT.02

const f_nome = document.querySelector("#f_nome");
const f_nota = document.querySelector("#f_nota");
const f_msg = document.querySelector("#f_msg");

document.querySelector("#btn_validar").addEventListener("click",(evt)=>{

    let msg = null;

    if(f_nota.validity.valueMissing){
        msg = "Poxa, este campo é obrigatório";
    }
    else if (f_nota.validity.rangeOverflow){
        msg = "Mds, que nota alta a sua";
    }
    else if (f_nota.validity.rangeUnderflow){
        msg = "Mds, que nota baixa a sua";
    }
        //f_nota.reportValidity();  ISSO SERVE PARA MOSTRAR A VALIDAÇÃO
       
        f_msg.innerHTML = msg;

    
    
    // if(estadoValidacao.valueMissing){
    //     f_nota.setCustomValidity("Poxa, este campo é obrigatório");
    // }
    // else if (estadoValidacao.rangeOverflow){
    //     f_nota.setCustomValidity("Mds, que nota alta a sua");
    // }
    // else if (estadoValidacao.rangeUnderflow){
    //     f_nota.setCustomValidity("Mds, que nota baixa a sua");
    // }
    // f_nota.reportValidity(); // ISSO SERVE PARA MOSTRAR A VALIDAÇÃO
   
    // f_msg.innerHTML = f_nota.validationMessage;
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
    rangeOverflow: true, se o valor de uma elemento for maior que seu atributo max.
    rangeUnderflow: true, se o valor de um elemento for menor que seu atributo min.
    stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
    tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
    typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
    valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
    valid: true, se o valor de um elemento for válido.
*/ 
