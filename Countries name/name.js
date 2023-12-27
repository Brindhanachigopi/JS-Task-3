const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();

xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
   const xhr1=JSON.parse(xhr.response);
    for(let i = 0 ; i< xhr1.length ; i++){
        console.log(xhr1[i].name);
        console.log(xhr1[i].region);
        console.log(xhr1[i].subregion); 
        console.log(xhr1[i].population);    

}
};