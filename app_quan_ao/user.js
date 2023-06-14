var products = [
    {
        id: 1,
        name: "Nguyễn văn a",
        image: "https://i.pinimg.com/originals/2e/21/8b/2e218b22ba15dffd19e9c0f7b265b84e.png",
        email: "nguyenvana@gamil.com",
      
       
    },
    {
        id: 2,
        name: "Nguyễn thị b",
        image: "https://tse1.mm.bing.net/th?id=OIP.CJXm4htXLCBXtCk62pHOigHaFy&pid=Api&P=0",
        email: "nguyenthib@gamil.com",
      

       
    },
    {
        id: 3,
        name: "Nguyễn văn c",
        image: "https://i.pinimg.com/originals/95/49/ff/9549ff7f5600476511721eade4f4b91f.png",
        email: "nguyenvanc@gamil.com",
      

       
    }


]

var productList = document.getElementById("product-list");

products.forEach(function(product) {
var productDiv = document.createElement("div");

var productImage = document.createElement("img");
productImage.src = product.image;
productImage.style.height='236px'
productImage.style.width='304px'

productDiv.appendChild(productImage);

var productName = document.createElement("h3");
productName.innerText ="Name: "+ product.name;
productDiv.appendChild(productName);

var productEmail = document.createElement("h4");
productEmail.innerText = "Email:" + product.email;
productDiv.appendChild(productEmail);

var productBtndelete = document.createElement("button");
productBtndelete.innerText ="Delete";
productDiv.appendChild(productBtndelete);



var productbtnUpdate = document.createElement("button");
productbtnUpdate.innerText ="Update";
productDiv.appendChild(productbtnUpdate);


productList.appendChild(productDiv);
});
