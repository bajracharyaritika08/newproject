const searchFun = () => {
    let filter = document.getElementById('myInput').value.toUpperCase();
    //this means to get the data from the input field and the value will be in uppercase.
    //This is the process to get access to the table.
    let mytable = document.getElementById('myTable');
    //This is the process to get access to the data inside our table.
    let tr = myTable.getElementByTagName('tr');
    // We use loop here so that we dont need to search anything time and again.
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementByTagName('td')[0];
        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            //Here, to find the value we firstly store in textvalue. To search it we search it from 
            //textContent or from whole HTML.
            if (textvalue.toUpperCase().indexof(filter) > -1) {
                tr[1].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}