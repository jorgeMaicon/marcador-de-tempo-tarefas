/* function fillUrl() {

    //get the server address
    var x = document.getElementById("server_address").value;

    //get the endpoint selected (the value is used to filter what property of the object "urls" we want)
    var property = document.getElementById("endpoint").value;

    //receives the address of the endpoint selected
    var urls = getUrls(x, property)

    //set the address with the selected server
    if (urls != undefined) {
        //document.getElementById("result").value = urls;
        document.getElementById("result").setAttribute('href', document.getElementById("result").value = urls);
        document.getElementById("result").innerHTML = document.getElementById("result").value = urls;
    } else {
        document.getElementById("result").value = "";


    }

}

function changeEndPoint() {

    document.getElementById("result").value = "";
    var server_address = document.getElementById("server_address").value

    if (server_address != "" && server_address != null && server_address != undefined) {
        fillUrl()
    }

}

function getUrls(server, property) {
    var urls = {
        "datasetSearch": server + "/api/public/ecm/dataset/search?datasetId=",
        "loginWcmAdmin": server + "/portal/home?wcmadmin=true"
    }

    var result = urls[property];
    return result
} */