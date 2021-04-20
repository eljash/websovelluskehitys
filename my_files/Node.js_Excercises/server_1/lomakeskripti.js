
function getEvents(){
    var startD = document.getElementById('start').value;
    var endD = document.getElementById('end').value;
    if(!startD || !endD){
        alert('Invalid date');
    } else {
        if(endD < startD){
            var tempD = startD;
            startD = endD;
            endD = tempD;
            document.getElementById('start').value = startD;
            document.getElementById('end').value = endD;
        }
        console.log(startD+" - "+endD);

        var xhr = new XMLHttpRequest();

        let http = "http://localhost:8081/api/events?start="+startD+"&end="+endD;

        xhr.open("GET", http, true);
        xhr.onload = function(e){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    console.log(xhr.responseText);
                    updateEvents(xhr.responseText);
                } else {
                    console.error(xhr.statusText);
                }
            }
        };
        xhr.onerror = function(e){
            console.error(xhr.statusText);
        }
        xhr.send(null);


        console.log(http);
    }
}

function updateEvents(data){

    var eventDiv = document.getElementById('events');
    var events = JSON.parse(data);

    var eventTable = document.createElement('table');
    var tableHeaders = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    var th3 = document.createElement('th');
    th1.innerHTML = 'Nimi';
    th2.innerHTML = 'Tyyppi';
    th3.innerHTML = 'Päivämäärä';
    tableHeaders.appendChild(th1); tableHeaders.appendChild(th2); tableHeaders.appendChild(th3);
    eventTable.appendChild(tableHeaders);


    for(var i = 0; i < events.length; i++){
        var table = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        td1.innerHTML = events[i].Name;
        td2.innerHTML = events[i].Type;
        var date = events[i].Date.split('T')[0];
        td3.innerHTML = date;
        table.appendChild(td1); table.appendChild(td2); table.appendChild(td3);
        eventTable.appendChild(table);
    }
    eventDiv.innerHTML="";
    eventDiv.appendChild(eventTable);
}