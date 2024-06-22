// DATA GRID VIEWER 


const configDataGridView = {
     endpoint : "produtos.json"
}

const dataGridView = (configDataGridView)=>{
    fetch(configDataGridView.endpoint)
    .then(res => res.json())
    .then(res=>{
        console.log(res);
    });
}

dataGridView(configDataGridView);

