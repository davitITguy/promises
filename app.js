// comment[0].addEventListener('click' , showComment , false ) ; 

// const btn = document.getElementsByClassName('btn');
const button = document.getElementById('btn-counter');
const text = document.getElementById('magic');
const div = document.getElementById('magic-div');

const payload = [
    'div-magic',
    'div-no-magic',
    'magic',
    'no-magic',
    'div-default',
    'default'
]

const addClass = (arg_1, arg_2) => {
    div.classList.remove(...payload);
    div.classList.add(arg_1)
    text.classList.add(arg_2);
}

function samzeIyofa() {
    addClass('div-magic', 'magic');
}
const samzeArIyofa = () => {
    addClass('div-no-magic','no-magic')
}
const starterFunc = () => {
    addClass('div-default','default')
}

let counter=0;
const counterFunc = () => {
    counter++;
    console.log(counter);
    return new Promise( (resolve, reject) =>{   
        return  setTimeout(() => {
            if(counter === 0){
                starterFunc();
            } 
            if(counter%3 === 0){
                resolve(samzeIyofa())
            }else 
                reject(samzeArIyofa())
            
        }, 3000);
    });
}



// const abrundebsPromise = (el) => {
  
// /**
//  * promise is a CLASS   RESOLVE / REJECT are PARAMS
//  */
    
//     return new Promise( (resolve, reject) =>{   
//         return  setTimeout(() => {
//             if(el%2 === 0){
//                  resolve('Im deleyed click') 
//             }else {
//                 resolve("ვითომ დაფეილდა")
//             }
        
//         }, 3000);
//     })
// }

/** კლიკ ებმება არის ცვლადი რომელიც წარმოიადგენს აროუ ფუნქციას 
 * ტანში ცვლად მესიჯში ინიციალიზაცია ხდება 'აბრუნებსპრომის' ის შედეგის და დაბრუნებულს კონსოლ ლოგში წერს
 * 
 * ასინქი ენიჭება პარამეტრის წინ მიმნიშნებლად 
 */

// const clickEbmeba = async () =>{ 
//     const messige = await abrundebsPromise(4);
//     if(messige !== ""){
//         alert(messige)
//     }else{
//         alert("მესიჯი არ მოიძებნა")
//     }
// }

// btn[0].addEventListener('click',() => clickEbmeba() ) // ბტნ ზე ვადებ ივენთლისენერს რომელიც ქლიქზე იძახებს 'კლიკებმება' ფუნქციას

// create a div 1 button 1 div inside 1 h1 {text} +
// ღილაკზე დაჭერისას სადღაც უნდა დააფდეითდეს count ++  და ყოველ ჯერზე თუ ბოლო დაჭერა COUNT ის ჯერადია მაშინ h1 > კლიკების ოდენობა 3 ის ჯერადია თუ სამის ჯერადია
// ტექსტის ფერია მწვანე და დივის ბგ იყოს შავი   თუ 3 ის ჯერადი არ არის მაგრამ 1 ხელ მაინც არის დაჭერილი h1 > არ არის 3 ჯერადი x%3 != 0 || count >0

// 3 ის ჯერადი მწვანე ტექსტი და შავი ბგ
// თუ 3 ის ჯერად იარ არის ტექსტი ფერი თეთრი ბგ წითელი
// თუ საერთოდ არ არის ბგ იყოს #fbfbfb ტექსტის #333333   3 wamis mere sheicvalos feri promise ebit