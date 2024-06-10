// Aula sobre tela de login (aula 150 a 151) disponiblizando conteúdo via cdn

import {Cxmsg} from "./aulas 129-139/Cxmsg.js";

const config = {
    cor: "#800",
    tipo: "ok"
}

const callBack_ok = ()=>{
   return true
}

const callback_Nao_ok = ()=>{
   Cxmsg.mostrar(config, "ERRO!!!","Login não efetuado");
}

Login.login(callBack_ok,callback_Nao_ok,null);