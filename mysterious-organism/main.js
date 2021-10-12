// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)] ;
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  };
  return newStrand;
};

function pAequorFactory(num, arr) {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      let randomBase = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randomBase] === newBase) {
        newBase = returnRandBase();
      };
      this.dna[randomBase] = newBase;
      return this.dna;
    },

    compareDNA(pAequor) {
      this.dna === pAequor.dna;
      let sum = 0;
      for (let i=0; i<this.dna.length; i++) {
        if(this.dna[i] === pAequor.dna[i]) {
          sum++;
        }
      }
      let percentage = (sum/this.dna.length*100).toFixed('0');
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentage}% DNA in common`);
    },

    willLikelySurvive() {
      let surviveRate = 0;
      let sum = 0;
      for (let i=0; i<this.dna.length; i++) {
        if(this.dna[i] === 'C' || this.dna[i] === 'G') sum++;
      };
      surviveRate = sum/this.dna.length*100;
      if(surviveRate >= 60) return true;
      return false;
    }
  }
}

let newDna = pAequorFactory(34, mockUpStrand());
let anotherDNA = pAequorFactory(35, mockUpStrand());
newDna.compareDNA(anotherDNA);
console.log(newDna.willLikelySurvive());

let viableOrganisms = [];
while(viableOrganisms.length<30) {
  let newOrg = pAequorFactory(viableOrganisms.length, mockUpStrand());
  if(newOrg.willLikelySurvive()) {
    viableOrganisms.push(newOrg);
  };
};

console.log(viableOrganisms[29]);
