window.onload = function(){
changeLorem()

}

function changeLorem(){
    const forms = document.forms;

const addForm = forms['usernameinput']
addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
    const element = document.getElementsByTagName("p");
     document.getElementById("Lorem").innerHTML = value
     document.getElementById("Hello").innerHTML = "こにちは"
     document.getElementById("san").innerHTML = "さん！"
});
}
// window.onload = function(){
    
//     document.getElementById("usernameinput")
//     .addEventListener("submit", (e) => {
//         e.preventDefault();
//         console.log(e);
        
//     });
// };
/*
addForm.addEventListener('submit', function(e){
    e.preventDefault();

    
});
*/