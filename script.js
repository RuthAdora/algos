const input =document.getElementById("playground2");
const formData = document.getElementById("playground1");

input.addEventListener("input", function(event){
    console.log(event.target.value);
});

formData.addEventListener("submit",function(event){
    event.preventDefault();
});