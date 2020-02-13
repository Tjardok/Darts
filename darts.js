//Event for get table cell Id
//document.getElementById("table").onclick = getCells;

//

  //  var tbl =
   document.getElementById("table");
    for (var i = 0; i < tbl.rows.length; i++) {
        for (var j = 0; j < tbl.rows[i].cells.length; j++)

            tbl.rows[i].cells[j].onclick = function () {
                getval(this);

            };

    }



//}

function getval(cel) {

    
    switch (cel.innerHTML) {

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
            break;

    }

}

function getNeighbours(cell) {

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

//------------------------ functions to undo wrong score ------------------------------------///
var checked = document.getElementById("myCheck").checked;
document.getElementById("myCheck").onchange = getCheck;
console.log(checked);
 //checked == false 

function getCheck() {
    console.log('getCheck');
   var check = document.getElementById("myCheck").checked;
   // console.log(check);
   if (check == false) {
        var tbl = document.getElementById("table");
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++)
                tbl.rows[i].cells[j].onclick = function () {
                    Minus(this)

                }

          }


    }

//}


function Minus(minCel) {
   // console.log(check);
   // var check = document.getElementById("myCheck").checked;

    switch (minCel.innerHTML) {

        case '1':
            minCel.innerHTML = "";
            minCel.style.backgroundColor = 'unset';
            break;
           

        case '11':
            minCel.innerHTML = 1;
            minCel.style.backgroundColor = 'red';   
            break;

        case '111':
            minCel.innerHTML = 11;
            minCel.style.backgroundColor = 'orange';
            break;
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