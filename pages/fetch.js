fetch("http://localhost:3004/products").then(response =>{
  return response.json(); 
}).then(data =>{
  console.log (data);
  data.forEach(element => {
    // cretion des element de la div(img1)
    let div = document.createElement("div");
    div.setAttribute("class", "img1");
    let img =document.createElement("img");
    img.setAttribute("height" , "150px");
    img.setAttribute("width", "150px");
    let h2 = document.createElement("h2");
    let  div2=document.createElement("div") 
    div2.setAttribute("class", "prix")
    let span= document.createElement("span");
    let button= document.createElement("button")
    button.style.marginBottom ="20px";

// relier les elemnts du tableau d'object du fetch aux elements creer
    img.src=element.img;
    h2.innerHTML=element.title;
    span.innerHTML=element.price;
    button.innerHTML= "add to cart";

// ajout d'un enfant sur un element
    div.appendChild(img);
    div.appendChild(h2);
    div2.appendChild(span);
    div2.appendChild(button);
    div.appendChild(div2);
    
  // renvoyer la div(img1) dans la div(container1)
    document.getElementById('container1').appendChild(div);


  });
}).catch(error=>{
  console.error(error);
})
