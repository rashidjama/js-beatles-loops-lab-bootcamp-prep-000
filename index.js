// add solution here

let briefIntro = [];
function theBeatlesPlay(musicians, instruments) {
  for(let i=0; i<musicians.length; i++) {
    for(let j=0; j<instruments.length; j++) {
    }
    briefIntro.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return briefIntro;
}
const johnFacts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  for(let i=0; i<facts.length; i++) {
    facts[i] += "!!!";
  }
  return facts;
} 