// MÓDULO DE TELA DE LOGIN

class Login{

    static logado = false;
    static matlogado = false;
    static nomelogado = false;
    static acessologado = false;
    static estilocss = null;
    static config = {
        cor: "rgb(214, 65, 65)",
        img: "img/calculadora.png"
    }
    static endpoint = "https://73b47783-2e51-461e-a139-b5f0b78558db-00-1gkgmuq5u8zqx.kirk.replit.dev/";
    //  ?matricula=123&senha=321

    static login =(mat,pass,config = null)=>{
        if(config!=null){
            this.config = config;
        }
        this.endpoint +=  `?matricula=${mat}&senha=${pass}`;
        this.estilocss = ".fundoLogin{display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top:0px; left: 0px ;background-color: rgba(0, 0, 0, 0.75); box-sizing: border-box;}"+
                         ".baseLogin{display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit;}"+
                         ".elementosLogin{display: flex; justify-content: center; align-items: center; flex-direction: column; width: 65%; background-color: #eee; padding: 10px; border-radius: 70px 0px 0px 70px; box-sizing: inherit;}"+
                         ".campoLogin{ display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 10px;}"+
                         ".campoLogin label{font-size: 18px;}"+
                         ".campoLogin input{padding: 5px; background-color: #fff; border-radius: 5px; border: 1px solid #0000008f;}"+
                         ".botoesLogin{display: flex; justify-content: space-around; align-items: center; width: 80%; box-sizing: inherit;}"+
                         `.botoesLogin > button {cursor: pointer; background-color:${this.config.cor}; color: white; border-radius: 5px; padding: 10px 15px; box-sizing: inherit;}`+
                         ".logoLogin{display: flex; justify-content: center; align-items: center; width: 50%; background-color: #eebc59b5; border-radius: 0px 70px 70px 0px; box-sizing: inherit;}"+
                         ".logoLogin > img{width: 10em; height: 10em;}"
        
        const styleEstilo = document.createElement("style");
        styleEstilo.setAttribute("id","id_estiloLogin");
        styleEstilo.setAttribute("rel", "stylesheet");
        styleEstilo.setAttribute("type", "text/css");
        styleEstilo.innerHTML = this.estilocss;
        document.head.appendChild(styleEstilo);

        const corpo = document.body;

        const fundoLogin = document.createElement("div");
        fundoLogin.setAttribute("id","fundoLogin");
        fundoLogin.setAttribute("class", "fundoLogin");
        document.body.prepend(fundoLogin);

        const baseLogin = document.createElement("div");
        baseLogin.setAttribute("id","baseLogin");
        baseLogin.setAttribute("class", "baseLogin");
        fundoLogin.appendChild(baseLogin);

        const elementosLogin = document.createElement("div");
        elementosLogin.setAttribute("id","elementosLogin");
        elementosLogin.setAttribute("class", "elementosLogin");
        baseLogin.appendChild(elementosLogin);

        const campoLoginUsername = document.createElement("div");
        campoLoginUsername.setAttribute("id","campoLoginUsername");
        campoLoginUsername.setAttribute("class", "campoLogin");
        elementosLogin.appendChild(campoLoginUsername);

        const labelUsername = document.createElement("label");
        labelUsername.setAttribute("for","f_username");
        labelUsername.innerHTML = "Username: ";
        campoLoginUsername.appendChild(labelUsername);

        const inputUsername = document.createElement("input");
        inputUsername.setAttribute("name","f_username");
        inputUsername.setAttribute("class","f_username")
        inputUsername.setAttribute("placeholder"," Matrícula");
        inputUsername.setAttribute("type","text");
        campoLoginUsername.appendChild(inputUsername);

        const campoLoginPassword = document.createElement("div");
        campoLoginPassword.setAttribute("id","campoLoginPassword");
        campoLoginPassword.setAttribute("class", "campoLogin");
        elementosLogin.appendChild(campoLoginPassword);

        const labelPassword = document.createElement("label");
        labelPassword.setAttribute("for","p_username");
        labelPassword.innerHTML = "Password: ";
        campoLoginPassword.appendChild(labelPassword);

        const inputPassword = document.createElement("input");
        inputPassword.setAttribute("name","p_username");
        inputPassword.setAttribute("class","p_username");
        inputPassword.setAttribute("placeholder","Senha");
        inputPassword.setAttribute("type","text");
        campoLoginPassword.appendChild(inputPassword);

        const botoesLogin = document.createElement("div");
        botoesLogin.setAttribute("class","botoesLogin");
        elementosLogin.appendChild(botoesLogin);

        const btnLogin = document.createElement("button");
        btnLogin.setAttribute("id","btn_login");
        btnLogin.innerHTML = "LOGIN";
        botoesLogin.appendChild(btnLogin);

        const btnCancel = document.createElement("button");
        btnCancel.setAttribute("id","btn_cancelar");
        btnCancel.innerHTML = "CANCELAR";
        botoesLogin.appendChild(btnCancel);

        const logoLogin = document.createElement("div");
        logoLogin.setAttribute("id","logoLogin");
        logoLogin.setAttribute ("class", "logoLogin");
        baseLogin.appendChild(logoLogin);

        const img = document.createElement("img");
        img.setAttribute("src",this.config.img);
        img.setAttribute("alt", "Calculadora");
        logoLogin.appendChild(img);

    

        
        

        
        

        
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