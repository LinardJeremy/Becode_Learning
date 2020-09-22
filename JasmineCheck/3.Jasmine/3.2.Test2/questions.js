let CreationTableauLangages =  () => {
return array = ["Html","CSS","Java","PHP"];
}

let CreationTableauNombres =  () => {
return array= [0,1,2,3,4,5];
}

let RemplacementElement =  (langages) => {
langages.splice(2,1,'Javascript');
return langages;
}

let AjoutElementLangages =  (langages) => {
langages.splice(4,0,'Ruby','Python');
return langages;
}

let AjoutElementNombres =  (nombres) => {
 nombres.unshift(-1);
 nombres.unshift(-2);
 return nombres;
}

let SuppressionPremierElement =  (langages) => {
langages.shift(0);
return langages;
}

let SuppressionDernierElement =  (langages) => {
langages.pop();
return langages;
}

let ConversionChaineTableau =  (reseaux_sociaux_chaine) => {
 reseaux_sociaux= reseaux_sociaux_chaine.split(',');
 return reseaux_sociaux;
}

let ConversionTableauChaine =  (langages) => {
   return langages.join(',');
}

let TriTableau =  (reseaux_sociaux) => {
  return reseaux_sociaux.sort();
}

let InversionTableau =  (reseaux_sociaux) =>{
 return reseaux_sociaux.reverse();
}
