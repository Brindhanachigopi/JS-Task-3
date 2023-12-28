
const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  let xhr1=JSON.parse(xhr.response);
  for(let i = 0 ; i< xhr1.length ; i++){
 console.log(xhr1[i].flags.png);   

}
};


