window.onload = function(){
    var memeForm = document.getElementById("addMemeForm");
    var memeList = document.getElementById("memeList");
    
    memeList.style.textAlign = "center";
    memeList.style.overflow = "hidden";



    memeForm.addEventListener("submit", function(event){
        event.preventDefault();

        var removeBtn = document.createElement("button");
        removeBtn.innerText = "X";
        removeBtn.classList.add("remove");
        removeBtn.style.position = "absolute";
        removeBtn.style.top = "2px";
        removeBtn.style.right = "5%";


        var newMeme = document.createElement("li");
        var imgDiv = document.createElement("div");
        imgDiv.style.position = "relative";

        var newMemeLink = document.createElement("img");

        newMeme.style.marginBottom = "3%";
        newMeme.style.marginTop = "3%";

        newMeme.appendChild(imgDiv);
        imgDiv.appendChild(newMemeLink);
        newMemeLink.src = document.getElementById("imageLink").value;
        newMemeLink.style.maxWidth = "450px";
        newMemeLink.style.maxHeight = "500px";


        var topTextDiv = document.createElement("div");
        topTextDiv.innerText = document.getElementById("topText").value;
        topTextDiv.style.position = "absolute";
        topTextDiv.style.top = "2%";
        topTextDiv.style.left = "0";
        topTextDiv.style.right ="0";
        topTextDiv.style.fontFamily = "Impact";
        topTextDiv.style.color = "white";
        topTextDiv.style.fontSize = "24pt"

        imgDiv.appendChild(topTextDiv);

        var bottomTextDiv = document.createElement("div");
        bottomTextDiv.innerText = document.getElementById("bottomText").value;
        bottomTextDiv.style.position = "absolute";
        bottomTextDiv.style.bottom = "2%";
        bottomTextDiv.style.left = "0";
        bottomTextDiv.style.right = "0";
        bottomTextDiv.style.fontFamily = "Impact";
        bottomTextDiv.style.color = "white";
        bottomTextDiv.style.fontSize = "24pt"


        imgDiv.appendChild(bottomTextDiv);
        imgDiv.appendChild(removeBtn);

        memeList.appendChild(newMeme);

        memeForm.reset();
    })

    memeList.addEventListener("click", function(event){
        if (event.target.tagName.toLowerCase() === 'button'){
            event.target.parentNode.remove();
        }
    })
}