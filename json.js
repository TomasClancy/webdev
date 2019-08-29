$(function () {
    console.log("... JQ DOM ready :) ...");
    loadExternalJSON('https://raw.githubusercontent.com/TomasClancy/webdev/master/site.json');
});


function loadExternalJSON(URL) {
    $.getJSON(URL, function (data) {                            //attempt to download JSON from external site
        loadFromJSON(data);                                     //pass the downloaded JSON to be loaded into our document
        localStorage.setItem('myJSON', JSON.stringify(data));   //save the downloaded JSON to local storage
    }) 
        .fail(function () {                                     //if the download from external site fails...
            loadJSONFromStorage();                              //attempt to load from local storage
        });
}

function loadJSONFromStorage() {
    var retrievedString = localStorage.getItem('myJSON');           //retrieve saved JSON from local storage
    if (retrievedString !== null) {                                 //if the saved JSON exists...
        var savedJSON = JSON.parse(retrievedString);                //parse the data as JSON
        loadFromJSON(savedJSON);                                    //hand the JSON object to be loaded into our document
    }
}

function loadFromJSON(data) {
    console.log(data);
    Object.keys(data).forEach(function (id) {                                                   //loops through every key in the JSON object
        addRecordToDocument(data[id].cpu, data[id].clock, data[id].rDate,data[id].price, id);
    });
}

function addCPUToDocument(cpu, clock, rDate, price, id) {
    var cpu = '<div id="editDiv' + id + '">' +          //formats the information using HTML to be inserted into the document
        '<label for= "editcpu">CPU: </label>' +
        '<input id="editcpu' + id + '" value="' + CPU + '" />' +
        '<label for="editclock"> Clock: </label>' +
        '<input id="editclock' + id + '"value="' + Clock + '" />' +
        '<label for="editrDate"> Release Date: </label>' +
        '<input id="editrDate' + id + '" value="' + Release Date + '" />' +
         '<label for="editrprice"> Price: </label>' +
        '<input id="editrprice' + id + '" value="' + Price + '" />' +
        '</div >';
    $(cpu).appendTo('#editContainer');                  //appends to our container
}
