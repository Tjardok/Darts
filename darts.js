//Event get table cell Id  
document.getElementById("table").onclick = getTable();

function getTable() {

    var tbl = document.getElementById("table");
    console.log('start');
    for (var i = 0; i < tbl.rows.length; i++) {
        for (var j = 0; j < tbl.rows[i].cells.length; j++)
            tbl.rows[i].cells[j].onclick = function () {
                getval(this);
               

            }
     }
}


function getval(cel) {
    var check = document.getElementById("myCheck").checked;
    if (check == true) {


        switch (cel.innerHTML) {
            // +1 situation
            case '':
                cel.innerHTML = 1;
                cel.style.backgroundColor = 'red';
                break;

            case '1':
                cel.innerHTML = 11;
                cel.style.backgroundColor = 'orange';
                break;

            case '11':
                cel.innerHTML = 111;
                cel.style.backgroundColor = 'green';
                alert('LEKKER PENIS');
                break;


            case '111':
                getNeighbours(cel);
                console.log(this);
                break;
        }

    } else {
        switch (cel.innerHTML) {
            //-1 situation    
            case '1':
                cel.innerHTML = "";
                cel.style.backgroundColor = 'unset';
                break;

            case '11':
                cel.innerHTML = 1;
                cel.style.backgroundColor = 'red';
                break;

            case '111':
                cel.innerHTML = 11;
                cel.style.backgroundColor = 'orange';
                break;

        }
    }

}

function getNeighbours(cell) {
    var tbl = document.getElementById("table");
    var row = cell.parentNode.rowIndex;

    for (var i = 0; i < tbl.rows[row].cells.length; i++) {
        var cellValue = tbl.rows[row].cells[i].innerHTML;
        var cellId = tbl.rows[row].cells[i].id;


        if (cellValue != '' && cellId == "") {
            switch (cellValue) {

                case '1':
                    tbl.rows[row].cells[i].innerHTML -= 1;
                    tbl.rows[row].cells[i].innerHTML = "";
                    tbl.rows[row].cells[i].style.backgroundColor = 'unset';
                    break;

                case '11':
                    tbl.rows[row].cells[i].innerHTML -= 10;
                    tbl.rows[row].cells[i].style.backgroundColor = 'red';
                    break;

            }

        }

    }

}



//-------------------------------Functions to CLEAR score ---------------------------------------------//
document.getElementById("clear").onclick = clearScore;

function clearScore() {

    var tbl = document.getElementById("table");
    for (var i = 0; i < tbl.rows.length; i++) {

        for (var j = 0; j < tbl.rows[i].cells.length; j++)

            if (tbl.rows[i].cells[j].id == "") {
                var x = tbl.rows[i].cells[j];
                x.innerHTML = "";
                x.style.backgroundColor = 'unset';

            }
    }
}



//-------------------------------Functios to add and remove Player---------------------------------------------------//

document.getElementById("remove").onclick = removePlayer;

function removePlayer() {
    var allRows = document.getElementById('table').rows;
    for (var i = 0; i < allRows.length; i++) {
        if (allRows[i].cells.length > 1) {
            allRows[i].deleteCell(-1);
        }
    }
}



//-------------------------------Functions to add and remove Player---------------------------------------------------//

document.getElementById("remove").onclick = removePlayer;

function removePlayer() {
    var allRows = document.getElementById('table').rows;
    for (var i = 0; i < allRows.length; i++) {
        if (allRows[i].cells.length > 1) {
            allRows[i].deleteCell(-1);
        }
    }
}



document.getElementById("add").onclick = addPlayer;

function addPlayer() {
    [...document.querySelectorAll('#table tr')].forEach((row, i) => {
      

       let cell = document.createElement(i ? "td" : "th")
        cell.setAttribute('contenteditable', 'true')
       row.appendChild(cell)
     
       cell.onclick = getTable(cell);





    });
}


//-------------------------------Functions hide and show image ----------------------------------------------//