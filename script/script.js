/**
 * App Name : SIMPLE TO DO APP
 * Author : Rohul Amin
 * Date : August 6, 2022
 * Version : 1;
 */


const inputField = document.querySelector("#firstname")
const submitBtn = document.querySelector("input[type='submit']")
submitBtn.addEventListener("click", function (e) {

    e.preventDefault();

    const liElement = createLiElement(inputField.value);

    liElement.li.appendChild(liElement.span)

    document.querySelector("ul").appendChild(liElement.li)


    // if complete then add complet class 
    liElement.li.addEventListener("click", function () {
        this.classList.toggle("complete");
        
    })
    // remove item 
    liElement.span.addEventListener("click", function (e) {
        e.target.parentNode.remove();
    })


});



// create li element funtion 


function createLiElement(value) {

if(value){
    let li = document.createElement("li");

    let span = document.createElement("span")

    span.innerHTML = "X";

    span.classList.add("crossicon");

    li.innerHTML = `${value}`;

    return {
        li,
        span
    };
}else{
    let li = document.createElement("li");
    li.innerHTML = "Empty";
    let span = document.createElement("span")

    span.innerHTML = "X";

    span.classList.add("crossicon");
    
    return{
        li,
        span
    }
}

}

