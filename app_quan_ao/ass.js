var btnListSP = document.querySelector("#btn-listSP")
var btnDki = document.querySelector("#btn-dki")
var txtName = document.querySelector("#txt-name")
var txtPass = document.querySelector("#txt-pass")




btnDki.addEventListener("click",function(e){
    e.preventDefault();
    
        location.assign("http://127.0.0.1:5500/dangki.html");
   
    
})

btnListSP.addEventListener("click",function(e){
    e.preventDefault();
    if(txtName.value.trim()=="admin@gmail.com" && txtPass.value.trim()=="123"){
       
        location.assign("http://127.0.0.1:5500/listSp.html");
        }
        else{
            alert("Vui lòng kiểm tra tài khoản hoặc mật khẩu!");
            return false;
        }
        
        if(txtName.value.trim()=="" || txtPass.value.trim()==""){
       
          
                alert("Vui lòng kiểm tra tài khoản hoặc mật khẩu!");
                return false;
            }
})







