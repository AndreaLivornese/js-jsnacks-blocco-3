// Scrivi una funzione  che accetti una stringa come parametro e restituisca la stringa con i caratteri ordinati alfabeticamente
// Es: riordina("webmaster") :freccia_destra: "abeemrstw"




const array = ['c','i,','c','o','g','n','a'];


document.querySelector("#btn-sort").addEventListener("click", function(){

    let str = document.querySelector("#word").value;


    str  = stringSort(str.split(""));


    document.querySelector("#result").innerText= str;

})




// funzione che ordina i caratteri all'interno di una stringaù

function stringSort(str){


    // Bubble sort

    // for più "lento" e scorre la stringa
    for(let i=0; i < str.length; i++){

        // for più "veloce" e scorre la striga
        for(let j=0; j< str.length; j++){

            if(str[j] > str[i]){
                // variabile di lavoro per compiere lo scambio
                let swap = str[i];
                str[i] = str[j];
                str[j] = swap;
                console.log(str);
            }

        }
    }



    return str.join('');

}
