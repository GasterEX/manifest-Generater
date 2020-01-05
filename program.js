function Generate() {
    var Name=document.getElementById("name").value;
    var Description=document.getElementById("description").value;

    var Descriptionv = '\"description\":' + " " +"\""+ Description + "\"";
    var Namev = "\"name\":" + " " +"\""+ Name + "\"";
    var random1 = Math.floor( Math.random() * 9 );
    var random2 = Math.floor( Math.random() * 9 );
    var random3 = Math.floor( Math.random() * 9 );
    var uuidv1 = "\"uuid\":" + " " + "\"" + random1 + random2 + random3 + "f6949-53be-44b6-b326-398005028819\",";
    random1 = Math.floor( Math.random() * 9 );
    random2 = Math.floor( Math.random() * 9 );
    random3 = Math.floor( Math.random() * 9 );
    var uuidv2 = "\"uuid\":" + " " + "\"" + random1 + random2 + random3 + "f6949-53be-44b6-b326-398005028819\",";
    var typev = document.getElementById("type").value;
    var typev
    switch (typev) {
        case "r":
        typeva = "\"type\": \"resources\",\n" ;
        break;

        case "b" : 
        typeva = "\"type\": \"data\",\n" ;
        break;

        default:
            alert("エラーが発生しました");
    }
    var manifest;
    manifest = "{\n" + "\"format_version\": 1,\n" + "\"header\": {\n" + Descriptionv +","+ "\n" + Namev + "," + "\n" + uuidv1 + "\n" + "\"version\": [0, 0, 0]\n" + "},\n" + "\"modules\": [\n" + "{\n" + Descriptionv +","+ "\n" + typeva + uuidv2 + "\n" + "\"version\": [0, 0, 0]\n" + "}\n" + "]\n" + "}\n" ;
    var manifestv = document.getElementById("mv");
    manifestv.innerHTML = "<pre>" + manifest + "</pre>";
}
