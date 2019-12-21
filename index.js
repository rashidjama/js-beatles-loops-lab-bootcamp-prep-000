// add solution here

let briefIntro = [];
function theBeatlesPlay(musicians, instruments) {
  for(let i=0; i<musicians.length; i++) {
    for(let j=0; j<instruments.length; j++) {
    }
    briefIntro.push(`${musicians[i]} plays ${instruments[i]}.`)
  }
  return briefIntro;
}