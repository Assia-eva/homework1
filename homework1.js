//solution 01

function equivalent(a,b){
    for(key in a){
        if(a[key]!=b[key]){
            return false;
        }
    }
    return true;
}

var justme={
    nom:"assia",
    prenom:"khouas",
    age:"19"
}
var justmyself={
    nom:"assia",
    prenom:"khouas",
    age:"19"}

var justyou={
    nom:"no one",
    prenom:"any one",
    age:"17"
}

console.log(equivalent(justme,justyou));
console.log(equivalent(justme,justmyself));

//solution 02
function difference(x,y){
    var z=[],k=0;
 for (i=0;i<x.length;i++){
    for (j=0;j<y.length;j++){
        if(x[i]==y[j])
         {z[k]=x[i];
            k++;}
    }
 }   return z;
}
var a=[1,1,2,3,4,5],b=[2,4,6,8,9];
console.log(difference(a,b));
