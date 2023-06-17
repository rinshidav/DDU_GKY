$(document).ready(function(){
    $("#form").validate({

        rules:{
            uname:{
                required:true,
                minlength:5
            
            },
            mail:{
                required:true,
                minlength:5
            
            },
            pass:{
                required:true,
                minlength:8
            
            },
            cpass:{
                required:true,
                minlength:8
            
            }
        },
        

        
    })
    var password=$("#pass").val();
    var cpassword=$("#cpass").val();

    if (cpassword != password) {

        alert('enter valid password');
        document.form.cpass.focus();
        document.form.cpass.value =""
        return false;

    }
})