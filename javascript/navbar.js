const hidden = document.getElementById("hide"); 

let lastScrollTop = 0;
window.addEventListener("scroll", function ()
 { let l = window.scrollY || document.documentElement.scrollTop; l > lastScrollTop ? hidden.classList.add("hidden") : hidden.classList.remove("hidden"), lastScrollTop = l <= 0 ? 0 : l });
