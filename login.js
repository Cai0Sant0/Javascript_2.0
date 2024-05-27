// MÓDULO DE TELA DE LOGIN

class Login{

    static logado = false;
    static matlogado = false;
    static nomelogado = false;
    static acessologado = false;
    static endpoint = "https://73b47783-2e51-461e-a139-b5f0b78558db-00-1gkgmuq5u8zqx.kirk.replit.dev/";
    //  ?matricula=123&senha=321

    static login =(mat,pass)=>{
    this.endpoint +=  `?matricula=${mat}&senha=${pass}`;
        fetch(this.endpoint)
        .then(res => res.json())
        .then(res=>{
            if(res){
                this.logado = true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
                console.log(res);
            }
            else{
                console.log("Usuário não encontrado");
            }
        });
    }
}

export {Login}