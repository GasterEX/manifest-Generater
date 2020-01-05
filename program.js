function Generate() {
    var Name=document.getElementById("name").value;
    var Description=document.getElementById("description").value;

    var Descriptionv = '\"description\":' + " " +"\""+ Description + "\"";
    var Namev = "\"name\":" + " " +"\""+ Name + "\"";
    var uuidv1 = "\"uuid\":" + " " + "\"" +uuid(); 
    var uuidv2 = "\"uuid\":" + " " + "\"" +uuid(); 
    var typev = document.getElementById("type").value;
    var typev
    switch (typev) {
        case "r":
        typeva = "\"type\": \"resources\",\n" ;
        break;

        case "b" : 
        typeva = "\"type\": \"data\",\n" ;
        break;

        case "s" :
        typeva= "\"type\": \"skin_pack\",\n";
        break;

        default:
            alert("エラーが発生しました");
    }
    var manifest;
    manifest = "{\n" + "\"format_version\": 1,\n" + "\"header\": {\n" + Descriptionv +","+ "\n" + Namev + "," + "\n" + uuidv1 +"\","+ "\n" + "\"version\": [0, 0, 0]\n" + "},\n" + "\"modules\": [\n" + "{\n" + Descriptionv +","+ "\n" + typeva + uuidv2 +"\","+ "\n" + "\"version\": [0, 0, 0]\n" + "}\n" + "]\n" + "}\n" ;
    var manifestv = document.getElementById("mv");
    manifestv.innerHTML = "<pre>" + manifest + "</pre>";
}
function uuid(){
    var uuid = "", i, random;
    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i == 8 || i == 12 || i == 16 || i == 20) {
        uuid += "-"
      }
      uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return uuid;
  }
