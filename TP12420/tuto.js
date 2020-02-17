var compteur=0;
var cercle = ["cercle1", "cercle2", "cercle3", "cercle4"];
var check=["check1","check2","check3","check4","check5","check6"];
var nomPartie=["nomPartie0","nomPartie1","nomPartie2","nomPartie3","nomPartie4","nomPartie5"];
var action=[false,false];
var clicked=[false,false,false,false,false,false];
var firstClick=false;

var content="{\n    \"Elections\":\n        [\n            {\"name\" : \"43e élection fédérale\", \"date\" : \"21 octobre 2019\", \"type\": \"Federal\"},\n            {\"name\" : \"Élections générales provinciales\", \"date\" : \"1er octobre 2018\", \"type\": \"Provincial\"},\n            {\"name\" : \"42e élection fédérale\", \"date\" : \"19 octobre 2015\", \"type\": \"Federal\"},\n            {\"name\" : \"Élections générales provinciales\", \"date\" : \"7 avril 2014\", \"type\": \"Provincial\"}\n        ],\n    \"PartisFederaux\":\n        [\n            {\"abreviation\": \"P.L.C\", \"fullname\": \"Parti libéral du Canada\"},\n            {\"abreviation\": \"P.C.C.\", \"fullname\": \"Parti conservateur du Canada\"},\n            {\"abreviation\": \"B.Q.\", \"fullname\": \"Bloc Québécois\"},\n            {\"abreviation\": \"N.P.D.\", \"fullname\": \"Nouveau parti démocratique\"},\n            {\"abreviation\": \"P.V.C.\", \"fullname\": \"Parti vert du Canada\"},\n            {\"abreviation\": \"P.P.C.\", \"fullname\": \"Parti populaire du Canada\"}         \n        ],\n    \"PartisProvinciaux\":\n        [\n            {\n                \"abreviation\": \"C.A.Q\",\n                \"fullname\": \"Coalition avenir Quebec\"\n            },\n            {\n                \"abreviation\": \"P.L.Q\",\n                \"fullname\": \"Parti liberal du Quebec\"\n            },\n            {\n                \"abreviation\": \"P.Q\",\n                \"fullname\": \"Parti quebecois\"\n            },\n            {\n                \"abreviation\": \"P.V.Q\",\n                \"fullname\": \"Parti vert du Quebec\"\n            },\n            {\n                \"abreviation\": \"Q.S\",\n                \"fullname\": \"Quebec solidaire\"\n            },\n            {\n                \"abreviation\": \"P.C.Q\",\n                \"fullname\": \"Parti conservateur du Quebec\"\n            },\n            {\n                \"abreviation\": \"P.I.Q\",\n                \"fullname\": \"Parti pour l'independance du Quebec\"\n            }     \n        ]\n}"
let json=JSON.parse(content);
/*var url='https://log2420-serve.herokuapp.com/JSON/output.json';
jQuery.getJSON(url,fonction(data))
{
    mydata=data;
}*/

var fonction1=function(event){
    for(var i=0;i<cercle.length;i++)
    {
        document.getElementById(cercle[i]).style='white';
        if(this.id==cercle[i])
        {
            index=i;
        }
    }
    this.style.color='black';
    for(var i=0;i<nomPartie.length;++i)
    {
        if(index%2==0)
        {
            document.getElementById(nomPartie[i]).innerHTML=json.PartisFederaux[i].fullname;
        }
        else
        {
            document.getElementById(nomPartie[i]).innerHTML=json.PartisProvinciaux[i].fullname;
        }
    }
    firstClick=true;
}
function changeColorAction(){
    if(compteur==1)
    {
        document.getElementById("button1").style.background='rgba(33, 150, 243, 1)';
        document.getElementById("button2").style.background='lightgray';
        action[0]=true;
        action[1]=false;
    }
    else if(compteur==2)
    {
        document.getElementById("button2").style.background='rgba(33, 150, 243, 1)';
        action[1]=true;
    }
    else
    {
        document.getElementById("button2").style.background='lightgray';
        document.getElementById("button1").style.background='lightgray';
        action[0]=false;
        action[1]=false;
    }
}
var fonction2=function(event){
    if(firstClick)
    {
        for(var i=0;i<check.length;i++)
        {
            if(this.id==check[i])
            {
                if(clicked[i])
                {
                    this.style.color='white';
                    clicked[i]=false;
                    --compteur;
                }
                else
                {
                    this.style.color='black';
                    clicked[i]=true;
                    ++compteur;
                }
            }
        }
        changeColorAction();
    }
}
var fonctionAction1=function(event){
    if(action[0])
    {
        window.location.href='page2.html';
    }
}
/*var fonctionBack=function(event){
    window.location.href='tuto.html';
}
document.getElementById("iconback").addEventListener("click",fonctionBack);*/
document.getElementById("button1").addEventListener("click",fonctionAction1);
for(var i=0;i<check.length;i++)
{
    document.getElementById(check[i]).addEventListener("click",fonction2);
}
for(var i=0;i<cercle.length;i++)
{
    document.getElementById(cercle[i]).addEventListener("click",fonction1);
}



