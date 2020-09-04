const reviews = [
    {
        id : 1,
        name : "Bishal Guha",
        job : "UX designer",
        img : "https://i.postimg.cc/wMsZtdRX/client-1.jpg",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti unde explicabo non error iste aspernatur nihil ea odit perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, blanditiis."
    },
    {
        id : 2,
        name : "Zara Megenta",
        job : "Web designer",
        img : "https://i.postimg.cc/WpF1mFMn/team-4.jpg",
        text : "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    },
    {
        id : 3,
        name : "Jhon Wick",
        job : "Web Developer",
        img : "https://i.postimg.cc/XJPt7vqN/client-2.jpg",
        text : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
    },
    {
        id : 4,
        name : "Baba Yadav",
        job : "Film Maker",
        img : "https://i.postimg.cc/23RJhXnP/team-5.jpg",
        text : "The key to your success on Fiverr is the brand you build for yourself through your Fiverr reputation. We gathered some tips and resources to help you become a leading seller on Fiverr."
    },

];

// Get ID from HTML
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// Get Button
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// when window load
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
})

// Umiversal Function :)
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next review when next btn will fire :)
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev review when previous btn will fire :)
prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});