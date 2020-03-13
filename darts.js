//Event get table cell Id  
document.getElementById("table").onclick = getTable();

function getTable() {

    var tbl = document.getElementById("table");

    for (var i = 0; i < tbl.rows.length; i++) {
        for (var j = 0; j < tbl.rows[i].cells.length; j++)
            tbl.rows[i].cells[j].onclick = function () {
                getval(this);
                getTotalCount();


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
                getCelCount(cel);
                break;


            case '111':
                getNeighbours(cel);
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
var x1 = 1;
var x2 = 1;
var x3 = 1;
var x4 = 1;

function getCelCount(colcell) {
    var collindex = colcell.cellIndex;
        switch (collindex) {

        case 1:
            var y = x1++;
            var count1 = document.getElementById('1');
            count1.innerHTML = y + '/12';
            break;


        case 2:
            var y = x2++;
            var count1 = document.getElementById('2');
            count1.innerHTML = y + '/12';
            break;


        case 3:
            var y = x3++;
            var count1 = document.getElementById('3');
            count1.innerHTML = y + '/12';
            break;


        case 4:
            var y = x4++;
            var count1 = document.getElementById('4');
            count1.innerHTML = y + '/12';
            break;

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
        //cell.createTextNode('Naam');
        row.appendChild(cell)

        cell.onclick = getTable(cell);


    });
}


//-------------------------------Functions hide and show image ----------------------------------------------//

//Hide image default
document.getElementById("myImg").style.display = "none";

function openFullImage() {
    console.log('test');
    document.getElementById("myImg").style.display = "block";
    var elem = document.getElementById("myImg");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }



}


//-------------------------- Fullscreen mode function -----------------//
/* Get the element you want displayed in fullscreen mode (a video in this example): */
document.getElementById("fullscreen").onclick = openFullscreen;

/* When the openFullscreen() function is executed, open the table in fullscreen. 
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {

    var elem = document.getElementById("table");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
}


document.getElementById("NUM").onclick = closeFullscreen;
document.getElementById("myImg").onclick = closeFullscreen;

/* Close fullscreen */
function closeFullscreen() {
    document.getElementById("myImg").style.display = "none";

    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}



//-------------------------- Table value count function -----------------------//

function getTotalCount() {

    var table = document.getElementById('table'),
        sumVal1 = 0;
    sumVal2 = 0;
    sumVal3 = 0;
    sumVal4 = 0;
    endValue = 011111111111111111111111111111111111112; 
    for (var i = 1; i < table.rows.length; i++) {
        sumVal1 = sumVal1 + table.rows[i].cells[1].innerHTML;
        sumVal2 = sumVal2 + table.rows[i].cells[2].innerHTML;
        sumVal3 = sumVal3 + table.rows[i].cells[3].innerHTML;
        sumVal4 = sumVal4 + table.rows[i].cells[4].innerHTML;

    }

    console.log(sumVal1);
    if (sumVal1 == '011111111111111111111111111111111111112' ) {
        console.log(sumVal1);
        openFullImage();
    }


    if (sumVal2 == endValue) {
        openFullImage();

    }
    if (sumVal3 == endValue) {
        openFullImage();

    }

    if (sumVal4 == endValue) {
        openFullImage();

    }

}