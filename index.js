function shout(string){
 return string;   
}
"Hello!".toUpperCase();

function shout(string) {
    return string.toUpperCase();
}


function whisper(string){
    return string;
}
"hello".toLowerCase();

function whisper(string){
    return string.toLowerCase()
}
function logShout(string){
    console.log(string)
}
string.toUpperCase()

function logShout(string){
    console.log(string.toUpperCase())
}

function logWhisper(string){
    console.log(string)
}
string.toLowerCase()

function logWhisper(string){
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string){
   // if string_is_lowercase = "I can\t hear you"
   console.log("Hello im here",string)
   if (string === string.toLowerCase()){
return "I can\'t hear you!"
 }
// if string is all uppercase = "YES INDEED!"
 else if (string === string.toUpperCase()){
return "YES INDEED!"
 }
//if string is equal to "Let's have dinner together!", the function should return "i would love to!"
 else if (string ==="Let\'s have dinner together!"){
    return "I would love to!"
}
}
