// console.dir(document);

// -----STEP 1------
// Get the value of words
const wordNum = document.querySelector('input[name="words"]');
// console.dir(wordNum);

// Get the value of paragraphs
const paraNum = document.querySelector('input[name="paras"]');

const output = document.querySelector('.output'); /* STEP 3 */

const regex = /([^A-Za-z ])/g; /* STEP 4 */
const data = myData.replace(regex, '').toLowerCase(); /* STEP 4 - cleaning myData using REGEX */
const myArr = data.split(' '); /* STEP 4 - creating array from data */
// console.log(myArr);

// Get the value of Button - using class from the index file
const btn = document.querySelector('.btn'); /* Step 2 */

// -----STEP 2 -------
// Adding Interactions

// option 1
// btn.addEventListener('click', (e)=>{
//     console.log(e.target);
//     e.target.style.background = 'blue';
// })

// option 2
btn.addEventListener('click', buttonClicked);

function buttonClicked(e) {
    // console.log(e.target);
    myArr.sort((a, b) => .5 - Math.random()); /* STEP 5 - Randomizing elements in an Array */
    const numParas = Number(paraNum.value); /* STEP 6 - Values for paragraphs */
    const numWords = Number(wordNum.value); /* STEP 6 - Values for words */
    for(i=0; i<numParas; i++ ) {
        genParagraphs(numWords); /* STEP 6 - For loop for generating Paragraphs | Passing number of words per paragraph */

        
    }
}

// STEP 7 - Generating or constructing  Sentences from words for the output to add in the paragraphs
function genParagraphs(num) {
    const p = document.createElement('p');
    p.textContent = genSentences('', num);
    output.append(p);
}

// STE8 - Capitilizing the first character of a sentence
function capWord(str) {
    let first = str.charAt(0).toUpperCase();
    let readySentence = first + str.slice(1) + '. ';
    return readySentence;
}

// STEP 9 - User input word count and fine tuning the output
function genSentences(temp,num) {
    let total = num > 10 ? 10 : num;
    // let temp = ' ';
    let ranWords = Math.floor(Math.random() * total)+2; /*Generating Random Words, max 12 words per line*/ 
    let holder = ''; /*temporary holder value*/
    for(let i=0; i<ranWords; i++) {
        // num --;
        if(num>0) {
        let w = myArr[Math.floor(Math.random()*myArr.length)]; /*Random array of words*/
        holder += ` ${w}`;
        }
        num --;
    }
    if(holder.length > 0) {
        temp += capWord(holder.trim().toLocaleLowerCase()); /*Continously adding in next sentence */
    }
    // temp += capWord(holder.trim().toLocaleLowerCase()); 
    if(num < 0) {
        return temp;
    }else {
        return genSentences(temp,num); /* recursive finction*/
    }
}
