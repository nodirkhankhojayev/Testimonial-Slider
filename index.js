const testimonials = [
    {
        name: "CHrise G",
        photoUrl: "https://media.istockphoto.com/id/2000672702/photo/happy-smiling-mature-indian-or-latin-business-man-ceo-trader-using-computer-typing-working-in.jpg?s=2048x2048&w=is&k=20&c=yprkCAdCVZxr6ltygmZtn0GSJ9wOEFOpKdrFNkfuY8w=",
        text: "apple has been a lifesaver for keeping track of all my online accounts and passwords. It's user-friendly and has made my digital life so much more organized and secure." 
    },
    
    {
        name: "Tom F",
        photoUrl:"https://media.istockphoto.com/id/1418580542/photo/confident-positive-handsome-indian-or-arabian-young-man-holding-smartphone-in-hand-chatting.webp?b=1&s=170667a&w=0&k=20&c=LNEWRn7om2HaX-oFiKY7THUNLrP0R2RmFUpoK1n8SHU=",
        text: "I have been using apple for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great." 
    },
    {
        name: "Constantine V",
        photoUrl: "https://images.unsplash.com/photo-1599110364762-eba33ec21988?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "apple is a game-changer. Instead of drowning in an endless chain of emails, there is clear and easy accountability meaning tasks actually get done!" 
    }
]

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;
updateTestimonial();
function updateTestimonial(){
    const {name, photoUrl, text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
    }, 10000);
}

