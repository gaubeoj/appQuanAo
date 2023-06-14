var txtName = document.querySelector("#name")
var txtPass = document.querySelector("#pass")

var txtEmail = document.querySelector("#email")
var btnDki = document.querySelector("#btn_dki")





btnDki.addEventListener("click",function(e){
    e.preventDefault();
   
        
        if(txtName.value.trim()=="" || txtPass.value.trim()==""|| txtEmail.value.trim()==""){
       
          
                alert("Vui lòng kiểm tra tài khoản hoặc mật khẩu!");
                return false;
            }
})