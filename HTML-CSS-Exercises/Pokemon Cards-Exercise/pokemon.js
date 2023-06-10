// aşağıdaki Apiden 20 pokemona ulaşabilirsiniz.

// pokemon api : https://pokeapi.co/api/v2/pokemon/




// pokemonun adı : name

// Types : type ( birden çok olabilir)

// pokemon görseli için : sprites - other - official-artwork - front_default




// pokemonlara aşğıdaki şekilde ulaşabilirsiniz 2 si de pikachuya gider

// https://pokeapi.co/api/v2/pokemon/pikachu/

// https://pokeapi.co/api/v2/pokemon/25/

//Aratma falan da olacak.



const asyncGet= async ()=>{

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`); 
    const veri = await response.json();
    const results=veri.results;

    for(let i=0;i<results.length;i++){
        let url=results[i].url;
        const response2=await fetch(url);
        const veri2=await response2.json();
        let pName=document.getElementsByClassName("pokemonName")[i]; 
        let pImage=document.getElementsByClassName("pokemonImage")[i]; 
        let pType=document.getElementsByClassName("pokemonType")[i];
        let pokeName=veri2.forms[0].name;
        pName.innerHTML=pokeName[0].toUpperCase()+pokeName.substring(1).toLowerCase();
        pImage.setAttribute("src",veri2.sprites.other["official-artwork"].front_default);
        pType.textContent=veri2.types[0].type.name[0].toUpperCase()+veri2.types[0].type.name.substring(1).toLowerCase();
    }
};
asyncGet();



let searchInput=document.getElementById("search");

searchInput.addEventListener("keyup",search);

function search(){
    let input,filter,cardsContainer,card,txtValue;
    input=document.getElementById("search");
    filter=input.value.toLowerCase();
    cardsContainer=document.getElementsByClassName("cards-container")[0];
    

    for(let i=0;i<cardsContainer.children.length;i++){
        card=cardsContainer.children[i];
        txtValue=card.getElementsByClassName("pokemanName")[0].textContent;
        if(txtValue.toLowerCase().indexOf(filter)>-1){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }
    }
}

let node=document.getElementsByClassName("pokemonName")[0];
console.log(node.textContent);