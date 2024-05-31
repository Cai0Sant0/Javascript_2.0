// MÓDULO DE TELA DE LOGIN

class Login{

    static logado = false;
    static matlogado = false;
    static nomelogado = false;
    static acessologado = false;
    static estilocss = null;
    static endpoint = "https://73b47783-2e51-461e-a139-b5f0b78558db-00-1gkgmuq5u8zqx.kirk.replit.dev/";
    //  ?matricula=123&senha=321

    static login =(mat,pass)=>{
        this.endpoint +=  `?matricula=${mat}&senha=${pass}`;
        this.estilocss = ".fundoLogin{display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top:0px; left: 0px ;background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box;}"+
                         ".baseLogin{display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit;}"+
                         ".elementosLogin{display: flex; justify-content: center; align-items: center; flex-direction: column; width: 65%; background-color: #eee; padding: 10px; border-radius: 70px 0px 0px 70px; box-sizing: inherit;}"+
                         ".campoLogin{ display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 10px;}"+
                         ".campoLogin label{font-size: 18px;}"+
                         ".campoLogin input{padding: 5px; background-color: #fff; border-radius: 5px; border: 1px solid #0000008f;}"+
                         ".botoesLogin{display: flex; justify-content: space-around; align-items: center; width: 80%; box-sizing: inherit;}"+
                         ".botoesLogin > button {cursor: pointer; background-color: rgb(214, 65, 65); color: white; border-radius: 5px; padding: 10px 15px; box-sizing: inherit;}"+
                         ".logoLogin{display: flex; justify-content: center; align-items: center; width: 50%; background-color: #eebc59b5; border-radius: 0px 70px 70px 0px; box-sizing: inherit;}"+
                         ".logoLogin > img{width: 10em; height: 10em;}"
        
        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("id","id_estiloLogin");
        styleEstilo.setAttribute("rel", "stylesheet");
        styleEstilo.setAttribute("type", "text/css");
        styleEstilo.innerHTML = this.estilocss;
        document.head.appendChild(styleEstilo);
        

        
        // fetch(this.endpoint)
        // .then(res => res.json())
        // .then(res=>{
        //     if(res){
        //         this.logado = true;
        //         this.matlogado = mat;
        //         this.nomelogado = res.nome;
        //         this.acessologado = res.acesso;
        //         console.log(res);
        //     }
        //     else{
        //         console.log("Usuário não encontrado");
        //     }
        // });
    }
}

export {Login}