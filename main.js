const URL = "https://aws.random.cat/meow";
const catDiv = document.getElementById("cat-here");

function printObjekt(obj){
    console.log(obj.file);

    const catImg = document.createElement("img");
    catImg.src = obj.file;
    catDiv.appendChild(catImg);
}
function whenRequestFinished(reponse){
    reponse.json().then(printObjekt);
}
fetch(URL).then(whenRequestFinished);