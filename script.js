const email = document.querySelector('.email');
const password = document.querySelector('.password');
const bth = document.querySelector('.bth');
const bthBack = document.querySelector('.bth-back')
const spinner = document.querySelector('.spinner')

bth.addEventListener("click",function(){
    const emailValue = email.value;
    const passwordValue = password.value;
    if(emailValue === ""){
        alert("Введите почту")
    } else if (passwordValue === ""){
        alert("Введите пароль")
    }else{
        console.log(`Почта ${emailValue}, Пароль ${passwordValue}.`)
        spinner.style.display = 'block'
        setTimeout(function(){
            location.href ='about.html'
        }, 2000)
    }
    } );


    bthBack.addEventListener("click", function(){
        history.back()
    })

    window.onload = function(){
        console.log(screen.height)
        console.log(screen.width);
    }