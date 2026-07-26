//===============================
// Scroll Animation
//===============================

const animatedSections = document.querySelectorAll(".animate");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

animatedSections.forEach((section)=>{

    observer.observe(section);

});

const timelineItems = document.querySelectorAll(".timeline-item");

timelineItems.forEach((item)=>{

    observer.observe(item);

});



const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {

    const button = faq.querySelector(".faq-question");

    button.addEventListener("click", () => {

        faqs.forEach(item => {

            if(item !== faq){

                item.classList.remove("active");

            }

        });

        faq.classList.toggle("active");

    });

});

 //==============================
// BOOK SEARCH
//==============================

const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".book-card");

searchInput.addEventListener("keyup", function () {

    let searchValue = searchInput.value.toLowerCase();

    cards.forEach(function(card){

        let title = card.querySelector("h3").textContent.toLowerCase();

        if(title.includes(searchValue)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

});



const searchInput = document.getElementById("stationerySearch");

const products = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", function(){

    let searchText = searchInput.value.toLowerCase();

    products.forEach(function(product){

        let productName = product.innerText.toLowerCase();

        if(productName.includes(searchText)){

            product.style.display = "";

        }
        else{

            product.style.display = "none";

        }

    });

});