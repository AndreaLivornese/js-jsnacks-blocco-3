// Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


const array1=["a","b","c"];
const array2=[1,2,3];



console.log(fusionArray(array1, array2))









// funzione unione alternato dei due array


function fusionArray(arr1, arr2){
    let i=0;
    
    let arrOut=[];

    while(i < arr1.length && i < arr2.length){
    
        if(i < arr1.length){
            arrOut.push(arr1[i].toString());
        }
    
        if(i < array2.length){
            arrOut.push(arr2[i].toString());
        }

        i++;
    }

    return arrOut;

}