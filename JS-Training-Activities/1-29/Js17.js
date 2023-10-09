//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
//Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
//DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
  
    var dnaArr = dna.split("");
    
    for(let i=0; i<dnaArr.length; i++) {
      if(dnaArr[i] === "A") {
        dnaArr[i] = "T";
      } else if(dnaArr[i] === "T") {
          dnaArr[i] = "A";
        }
        else if(dnaArr[i] === "C") {
          dnaArr[i] = "G";
        }
        else if(dnaArr[i] === "G") {
          dnaArr[i] = "C";
        }
    }
    let s = dnaArr.join("");
    return s;     
  }

