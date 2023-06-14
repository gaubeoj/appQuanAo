var products = [
    {
        id: 1,
        name: "Áo khoác",
        image: "https://topcomshop.com/uploads/images/a-athudong3/a2/21446130980-1688968010.jpg",
        price: 4000,
        mau: "Đen",
       
    },
    {
        id: 2,
        name: "Quần sooc",
        image: "https://linhvnxk.com/wp-content/uploads/2019/04/quan-sooc-nam-montbell-3.jpg",
        price: 3000,
        mau: "Đen",

       
    },
    {
        id: 3,
        name: "Áo sơ mi",
        image: "https://tse1.mm.bing.net/th?id=OIP._5myeg66NnEIF4oGbDWu7AHaJy&pid=Api&P=0",
        price: 300,
        mau: "Trắng",

       
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

var productPrice = document.createElement("h4");
productPrice.innerText = "Giá:" + product.price;
productDiv.appendChild(productPrice);

var productMau = document.createElement("h4");
productMau.innerText = "Màu: " + product.mau;
productDiv.appendChild(productMau);

var productBtndelete = document.createElement("button");
productBtndelete.innerText ="Delete";
productDiv.appendChild(productBtndelete);

var productbtnUpdate = document.createElement("button");
productbtnUpdate.innerText ="Update";
productDiv.appendChild(productbtnUpdate);

productList.appendChild(productDiv);
});