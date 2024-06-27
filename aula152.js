// DATA GRID VIEWER 


const configDataGridView = {
     endpoint : "produtos.json",
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
        c1.innerHTML = element.id;
        dgvLinha.appendChild(c1);

        const c2 = document.createElement("div")
        c2.setAttribute("class","c2 coluna");
        c2.innerHTML = element.produto;
        dgvLinha.appendChild(c2);

        const c3 = document.createElement("div")
        c3.setAttribute("class","c3 coluna");
        c3.innerHTML = element.marca;
        dgvLinha.appendChild(c3);

        const c4 = document.createElement("div")
        c4.setAttribute("class","c4 coluna");
        c4.innerHTML = element.modelo;
        dgvLinha.appendChild(c4);

        const c5 = document.createElement("div")
        c5.setAttribute("class","c5 coluna");
        dgvLinha.appendChild(c5);

        const imgDel = document.createElement("img");
        imgDel.setAttribute("class", "dgvOperacao");
        imgDel.setAttribute("src", "imgs_DataGridView/deletar.svg");
        c5.appendChild(imgDel);

        const imgedit = document.createElement("img");
        imgedit.setAttribute("class", "dgvOperacao");
        imgedit.setAttribute("src", "imgs_DataGridView/editar.svg");
        c5.appendChild(imgedit);

        const imgexibi = document.createElement("img");
        imgexibi.setAttribute("class", "dgvOperacao");
        imgexibi.setAttribute("src", "imgs_DataGridView/exibir.svg");
        c5.appendChild(imgexibi);
        
        dgvDados.appendChild(dgvLinha);

       });


    });
}

dataGridView(configDataGridView);

