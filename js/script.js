function ajout(){
    var monformulaire=document.forms.formu;
    var col1= document.createElement("td");
    var col2= document.createElement("td");
    var col3= document.createElement("td");
    var col4= document.createElement("td");
    var col5= document.createElement("td");
    var col6= document.createElement("td");
    var col7= document.createElement("td");
    var newline= document.createElement("tr");   
    var etud="";
    var type=document.getElementById("type_").value;
    var num=document.getElementById("num").value;
    var rue=document.getElementById("rue").value;
    var postal=document.getElementById("cp").value;
    var ou=document.getElementById("qui").value;
    var note=document.getElementById("notes").value;

    if (monformulaire.elements["hab"].checked){
        etud="Habitant";
    }
    if (monformulaire.elements["al3"].checked){
        etud="Ancien L3";
    }
    if (monformulaire.elements["jam"].checked){
        etud="Jamais venu";
    }
    if (monformulaire.elements["vac"].checked){
        etud="Vacancier";
    }

    if (etud==""){
        alert("Veuillez indiquer qui vous êtes");
        return false;
    }
    if (type==""){
        alert("Veuillez remplir le type");
        return false;
    }
    if (num==""){
        alert("Mettez un numéro dans votre adresse");
        return false;
    }
    if (rue==""){
        alert("Mettez une rue/avenue dans votre adresse");
        return false;
    }
    if (ou==""){
        alert("Mettez d'où vous tenez ce bon plan");
        return false;
    }
    if (note==""){
        alert("Veuillez attribuer votre note");
        return false;
    }
    if (postal>100000 || postal<0){
        alert("Rentrer un code postal valide");
        return false;
    }
    if (note>10 || note<0){
        alert("Rentrer une note valide");
        return false;
    }

    col1.textContent=etud;
    col2.textContent=type;
    col3.textContent=num;
    col4.textContent=rue;
    col5.textContent=postal;
    col6.textContent=ou;
    col7.textContent=note;

    newline.append(col1,col2,col3,col4,col5,col6,col7);
    var monTableau= document.getElementById("tab");
    monTableau.appendChild(newline);
}