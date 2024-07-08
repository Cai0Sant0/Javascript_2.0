// DATA GRID VIEWER 


const configDataGridView = {
     endpoint : "http://127.0.0.1:1880/produtos",
     idDestino: "dgvDados"
}

const dataGridView = (configDataGridView)=>{

    const dgvDados = document.getElementById(configDataGridView.idDestino);
    dgvDados.innerHTML = "";

    fetch(configDataGridView.endpoint)
    .then(res => res.json())
    .then(res=>{
       res.forEach(element => {
        const dgvLinha = document.createElement("div");
        dgvLinha.setAttribute("class","dvgLinha");

        const c1 = document.createElement("div")
        c1.setAttribute("class","c1 coluna");
        c1.innerHTML = element.idprodutos;
        dgvLinha.appendChild(c1);

        const c2 = document.createElement("div")
        c2.setAttribute("class","c2 coluna");
        c2.innerHTML = element.produtos_prod;
        dgvLinha.appendChild(c2);

        const c3 = document.createElement("div")
        c3.setAttribute("class","c3 coluna");
        c3.innerHTML = element.marca_prod;
        dgvLinha.appendChild(c3);

        const c4 = document.createElement("div")
        c4.setAttribute("class","c4 coluna");
        c4.innerHTML = element.modelo_prod;
        dgvLinha.appendChild(c4);

        const c5 = document.createElement("div")
        c5.setAttribute("class","c5 coluna");
        dgvLinha.appendChild(c5);

        const imgDel = document.createElement("img");
        imgDel.setAttribute("class", "dgvOperacao");
        imgDel.setAttribute("src", "imgs_DataGridView/deletar.svg");
        imgDel.addEventListener("click",(evento)=>{
            const id = evento.target.parentNode.parentNode.firstChild.innerHTML;
            const linha = evento.target.parentNode.parentNode
            const endpoint = `http://127.0.0.1:1880/removeproduto/${id}`;
            fetch(endpoint)
            .then(res=>{
                if(res.status==200){
                    linha.remove();
                }
            });
        })
        c5.appendChild(imgDel);

        const imgedit = document.createElement("img");
        imgedit.setAttribute("class", "dgvOperacao");
        imgedit.setAttribute("src", "imgs_DataGridView/editar.svg");
        imgedit.addEventListener("click",(evento)=>{
            document.querySelector("#janelaEditar").classList.remove("ocultar");
            document.querySelector("#btnCancelar").addEventListener("click",()=>{document.querySelector("#janelaEditar").classList.add("ocultar")});
            document.querySelector("#btnGravar").addEventListener("click",()=>{

                const id = document.getElementById("f_idEditar").value;
                const produto  = document.getElementById("f_prodEditar").value;
                const marca = document.getElementById("f_marcaEditar").value;
                const modelo = document.getElementById("f_modEditar").value;

                const endpoint = `http://127.0.0.1:1880/updateproduto/${id}/${produto}/${marca}/${modelo}`;

                fetch(endpoint)
                .then(res=>{
                    if(res.status == 200){
                        document.querySelector("#janelaEditar").classList.add("ocultar");
                    }
                    else{
                        alert("ERRO AO ATUALIZAR!");
                    }
                })
                document.querySelector("#janelaEditar").classList.add("ocultar");
            });

            const id = evento.target.parentNode.parentNode.firstChild.innerHTML;
            const endpoint = `http://127.0.0.1:1880/produto/${id}`;

            fetch(endpoint)
            .then(res=>res.json())
            .then(res=>{
                document.getElementById("f_idEditar").value = res[0].idprodutos;
                document.getElementById("f_prodEditar").value = res[0].produtos_prod;
                document.getElementById("f_marcaEditar").value = res[0].marca_prod;
                document.getElementById("f_modEditar").value = res[0].modelo_prod;
            })
        });
        c5.appendChild(imgedit);

        const imgexibi = document.createElement("img");
        imgexibi.setAttribute("class", "dgvOperacao");
        imgexibi.setAttribute("src", "imgs_DataGridView/exibir.svg");
        imgexibi.addEventListener("click",(evento)=>{
            document.querySelector(".janelaView").classList.remove("ocultar");
            document.querySelector(".btn").addEventListener("click",()=>{document.querySelector(".janelaView").classList.add("ocultar")});
            const id = evento.target.parentNode.parentNode.firstChild.innerHTML;
            const endpoint = `http://127.0.0.1:1880/produto/${id}`;
            fetch(endpoint)
            .then(res=>res.json())
            .then(res=>{
                document.getElementById("f_id").value = res[0].idprodutos;
                document.getElementById("f_prod").value = res[0].produtos_prod;
                document.getElementById("f_marca").value = res[0].marca_prod;
                document.getElementById("f_mod").value = res[0].modelo_prod;
            })
        });
        c5.appendChild(imgexibi);
        
        dgvDados.appendChild(dgvLinha);

       });


    });
}

dataGridView(configDataGridView);

