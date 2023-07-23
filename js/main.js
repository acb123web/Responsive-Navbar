const x = () => {
    const menu = document.querySelector('.bar');
    const nav = document.querySelector('.menu');

    menu.addEventListener("click", () =>{
        menu.classList.toggle('bar-active');
        nav.classList.toggle('nav-active');
        
    });
}
x();