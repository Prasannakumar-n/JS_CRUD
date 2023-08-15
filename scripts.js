var selectedRow = null;

function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow === null){
        insertNewRecord(formData);
    }
    else{
    }
    resetForm();
}

function readFormData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["price"] = document.getElementById("price").value;
    return formData
}

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button>Edit</button> <button onclick = "onDelete(this)">Delete</button>`
}

function onDelete(td){
    row = td.parentElement.parentElement;
    document.getElementById('storeList').deleteRow(row.rowIndex);
}

function resetForm(){
    document.getElementById('productCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('qty').value = '';
    document.getElementById('price').value = '';
}