// 1.

let nom = "nasila";

let tabExo = ["bonjour", nom , 7, 8, true];


console.log(tabExo);

// 2.

console.log(tabExo.length);



// 3. retirer dernier element

tabExo.pop();
console.log(tabExo);

// 4. retirer premier element 

tabExo.shift();
console.log(tabExo);

// 5. ajouter des éléments à la fin

tabExo.push("Wesh", "Ca va?");
console.log(tabExo);

// 6. ajouter éléments au début

tabExo.unshift("J'aime", "les", "topinambours");
console.log(tabExo);

// 7.

console.log(tabExo.reverse());

// 8.

let boite = [" "];

boite.push("crabe");

console.log(boite);

// repeter l'action une seconde fois

boite.push("aquarium");

// alert(boite);

// mettre avant les autres un objet

boite.unshift("confiture");
// alert(boite);
// Il attrape 3 objets et décidera de les mettre tout au fond de la boite

boite.push("crevette", "feuille", "baguette");
// alert(boite);
// N'étant pas satisfait de son rangement il décide de retirer les trois premiers objets

boite.splice(0,3);
console.log(boite);


// ou
// boite.shift() 
// boite.shift() 
// boite.shift() 


// alert(boite);


// D'en rajouter un

boite.unshift("pantalon");
console.log(boite.length);


// alert(boite);
// afficher le nombre d'objet contenu par sa boite dans une alert...
alert(boite.length);

// retirer deux derniers

boite.splice(2,4);
console.log(boite);

// ou 
// boite.splice(boite.length-2);


// ou
// boite.pop();
// boite.pop();

// Et pourquoi pas retirer les 2 premier...

boite.splice(0);

// ou
// boite.shift();
// boite.shift();

// alert(boite);




