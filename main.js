const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

posts.forEach(element => {
    const container = document.getElementById("container");
    container.innerHTML += 
        `<div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${element.author.image}" alt="Phil Mangione">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author"> ${element.author.name} </div>
                            <div class="post-meta__time"> ${element.created} </div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text"> ${element.content} </div>
                <div class="post__image">
                    <img src="${element.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" href="#" data-postid="1">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter"> ${element.likes} </b> persone
                        </div>
                    </div> 
                </div>            
            </div>`
});

// Conteggio likes tramite bottone dedicato
const likeButton = document.querySelectorAll(".js-like-button");

likeButton.forEach((button, index) => {
    button.addEventListener("click",
        function () {
            button.classList.toggle("like-button--liked");
            if (button.classList.contains("like-button--liked")) {
                posts[index].likes++;
            } else {
                posts[index].likes--;
            }

            let likesCounter = document.getElementById("like-counter-" + posts[index].id);
            likesCounter.innerText = posts[index].likes;
        }
    )
});

// funzione per verificare presenza immagine
function checkImage(currentElement) {

    if (currentElement.image === null) {
        return `<p><strong>` + getInitials(currentElement.name) + `</strong></p>`;
    } else {
        return `<img src="` + currentElement.image + `" alt=""></img>`;
    }
}

// Funziona per prendere iniziali parole
function getInitials(stringName) {
    let initials = "";
    // controllo che la stringa abbia spazi
    if(stringName.includes(" ")) {
        // salvo le parole in un array
        const halfName = stringName.split(" ");
        halfName.forEach((currentWord) => {
            initials += currentWord.charAt(0) + ".";
        });
        return initials;
    } else {
        return stringName.charAt(0);
    }
 
};







// const likesCounter = document.createElement("div");
// likesCounter.classList.add("likes__counter");
// likes.append(likesCounter);
// const bLikes = document.createElement("b");
// bLikes.setAttribute('id','likes-counter-1');
// const bLikesText = document.createTextNode("80");
// bLikes.append(bLikesText);
// likesCounter.append("Piace a" + bLikes + "persone");

// console.log(bLikes);

// bLikes.classList.add("js-likes-counter");

// likesCounter.append("Piace a" + bLikes + "persone");
// console.log(likesCounter);
// console.log(bLikes);



// const likesCounterText = document.createTextNode("Piace a" + bLikes + "persone");
// likesCounter.append(likesCounterText);
// postFooter.append(likesCounter);
// console.log(bLikes);