let text = "";
let butn=document.querySelectorAll("button");
Array.from(butn).forEach((button) => {
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){
            text=eval(text);
            document.querySelector("textarea").innerText=text;
        }

        else if(e.target.innerHTML == "AC"){
            text = "";
            document.querySelector("textarea").innerText=text;
        }
        else if(e.target.innerHTML == "←"){
            text =text.slice(0,-1)
            document.querySelector("textarea").innerText=text;
        }
        else{
            text = text + e.target.innerText;
            document.querySelector("textarea").innerText=text;
        }
    });
});