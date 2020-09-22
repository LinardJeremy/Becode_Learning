
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
 let text = texte1 + texte2;
 return text;
}
let afficherCar5 =  (texte) => {
let a = texte[4];
return a;
}
let afficher9Car =  (texte) => {
let a = texte.substr(0,9);
return a;
}
let majusculeString =  (texte) => {
  let a = texte.toUpperCase();
  return a;
}
let minusculeString =  (texte) => {
 let a = texte.toLowerCase();
 return a;
}
let SupprEspaceString =  (texte) => {
let a = texte.trim();
return a;
}
let IsString =  (texte) => {
 return texte.includes("");
}

let AfficherExtensionString =  (texte) => {
return texte.split('.').pop();

}
let NombreEspaceString =  (texte) => {
return texte.split(' ').length -1;
}
let InverseString =  (texte) => {
    return texte.split('').reverse().join('');

}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x,y);

}
let valeurAbsolue =  (nombre) => {
  return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
 let array2 = array.map(Math.abs, array);
 return array2;
}
let sufaceCercle =  (rayon) => {
   return Math.round(Math.PI*(rayon*rayon));
}
let hypothenuse =  (ab, ac) => {
  return Math.hypot(ab,ac);
}
let calculIMC =  (poids, taille) => {
    return Math.round((poids /(taille*taille))*100)/100;

}
