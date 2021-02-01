fetch("../data/data.json").then(response=>{
    return response.json()
}).then(data=>{
    displayData(data)
})


function displayData(info){
    var bodyElement=document.querySelector("body");
    var row=document.createElement("section")
    row.classList.add("row","justify-content-center")
    bodyElement.append(row)
    info.bikes.map(value=>{
        var column=document.createElement("article")
        column.classList.add("col-sm-10","col-md-6","col-lg-3")
        row.append(column)
        var card=document.createElement("div");
        card.classList.add("card")
        var cardBody=document.createElement("div")
        cardBody.classList.add("card-Body")
        var imageElement=document.createElement("img");
        imageElement.src=value.image;
        imageElement.classList.add("img-responsive")
        imageElement.alt=value.name;
        var name=document.createElement("h2");
        name.textContent=value.name;
        name.classList.add("text-center","text-danger")
        var price=document.createElement("s");
        price.classList.add("text-secondary","text-block","text-center")
        price.textContent="₹"+value.price;
        var oPrice=document.createElement("p");
        oPrice.textContent=value.originalprice;
        oPrice.classList.add("text-center","text-danger")
        var button=document.createElement("button");
        button.classList.add("btn","btn-primary","btn-block","d-grid","gap-2");
        button.textContent="Add to cart"
        var button2=document.createElement("button");
        button2.classList.add("btn","btn-primary","btn-block");
        button2.textContent="Buy now"
        cardBody.append(imageElement)
        cardBody.append(name)
        cardBody.append(price)
        cardBody.append(oPrice)
        
        cardBody.append(button)
        cardBody.append(button2)
        card.append(cardBody);
        column.append(card);

    })
}