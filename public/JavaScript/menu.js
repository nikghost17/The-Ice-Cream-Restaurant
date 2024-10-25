let b=document.getElementById("btn");
b.addEventListener("click", (event) =>{
        event.preventDefault();
        // alert("Please Enter a 10 digit phone number!!");
})
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        localStorage.setItem('scrollPosition', window.scrollY);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        setTimeout(() => {
        document.body.style.overflow = 'auto'; 
        window.scrollTo(0, scrollPosition); 
        localStorage.removeItem('scrollPosition'); 
    },0 )
    }
    
});

