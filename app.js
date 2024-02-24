const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const btn=document.getElementById('btn');
const result =document.getElementById('result');
const not =document.getElementById('not');
var sound=document.getElementById('sound')
btn.addEventListener('click',()=>{
   let inWord=document.getElementById('input').value;
   fetch(`${url}${inWord}`)
   .then((response)=>response.json())
   .then((data)=>{
    console.log(data);
    result.innerHTML=`
    <div class="word" style="display:flex;justify-content:space-between">
  <h3>${inWord}</h3>
  <button onclick="playSound()" style="background-color:white; color:blueviolet; border:none;"><i class="fa-solid fa-volume-high" ></i></button> 
</div>

<div class="meaning">
${data[0].phonetics[1].text}
<br>
  <span><b>${data[0].meanings[0].partOfSpeech}</b>:
  ${data[0].meanings[0].definitions[0].definition}</span>
<br>
<span><b>${data[0].meanings[1].partOfSpeech}</b>:
  ${data[0].meanings[1].definitions[0].definition}</span>
  <br>
<span><b>${data[0].meanings[2].partOfSpeech}</b>:
  ${data[0].meanings[2].definitions[0].definition}</span>
  <br>
<span><b> ${data[0].meanings[1].definitions[0].example || ""}</b>:
 </span>


</div>
    `
    sound.setAttribute('src',`https:${data[0].phonetics[0].audio}`);
    console.log(sound)
   })
   .catch((error)=>{
    result.innerHTML=" 404 Not Found";
    console.log(error)
   })
        });
function playSound(){
    try{
        if(sound) {
            // Play the audio
            sound.play();
          } else {
            console.error("Audio element not found or not loaded properly");
          }
    }
catch(err){
    console.log(err)
}
}