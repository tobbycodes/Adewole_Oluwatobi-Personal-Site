function handleDarkMode(){
    const body = document.body
    body.classList.toggle("dark-mode")

    document.querySelector("header").style.backgroundColor = "white"
    document.querySelector("header").style.color = "#112533"

    document.querySelector("#skills").style.backgroundColor = "white"
    document.querySelector("#skills").style.color = "#112533"

    // document.querySelector("#contact").style.backgroundColor = "white"
    // document.querySelector("contact").style.color = "#112533"
   
    const projectLinks= document.querySelectorAll(".project-links")
    console.log(projectLinks)
    const contactLinks = document.querySelectorAll(".contact-links")

    projectLinks.forEach(plink =>{
        plink.style.color="white"
        console.log(link)
    })
   
    contactLinks.forEach(clink =>{
        clink.style.color="black"
    })

}

document.getElementById("button-dark").addEventListener("click",handleDarkMode)

const imageContainer = document.querySelectorAll("img")



// imageContainer.forEach(image =>{
//     console.log(image)
//     image.addEventListener("click",function(baby){
        
//     })
// })

function myFunction(imgs){
  let expandedImg = document.getElementById("expanded-img")
  let imgText = document.getElementById("img-text")
  console.log(imgs)
  expandedImg.src = imgs.src
  console.log(expandedImg.src)
  imgText.innerHTML = imgs.alt

  expandedImg.parentElement.style.display="block"

  
}