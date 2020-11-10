const input = document.getElementById("input");
const enter = document.getElementById("btn");
const list = document.getElementById("list");
// const remove = document.getElementsByClassName("remove")

// let even = true


input.addEventListener("keyup",function(e){
    if(e.keyCode === 13){ 
        doIt();
    }
})


function doIt(){
    if(input.value.length > 0){ 
        let li = document.createElement("li");
        li.textContent = input.value
            let remove = document.createElement("button");
                remove.textContent = "remove";
                remove.classList.add("remove")
                li.append(remove);
                remove.addEventListener("click",function(){
                    li.style.display = "none";
                })
                let done = document.createElement("button");
                done.textContent = "done";
                done.classList.add("done")
                li.append(done);
                done.addEventListener("click",function(){
                    li.classList.toggle("line")
                })
            
            

        list.append(li);
        input.value = ""
        }
}

enter.addEventListener("click",doIt)