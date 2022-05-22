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
    // comandi per header post
    const container = document.getElementById("container");

    const postDiv = document.createElement("div")
    postDiv.classList.add("post");
    container.append(postDiv);

    const postHeader = document.createElement("div");
    postHeader.classList.add("post__header");
    postDiv.append(postHeader);

    const postMeta = document.createElement("div");
    postMeta.classList.add("post-meta");
    postHeader.append(postMeta);
    const postMetaIcon = document.createElement("div");
    postMetaIcon.classList.add("post-meta__icon");
    postMeta.append(postMetaIcon);
    const authorImg = document.createElement("img");
    authorImg.src = element.author.image;
    authorImg.classList.add("profile-pic");
    postMetaIcon.append(authorImg);

    const postMetaData = document.createElement("div");
    postMetaData.classList.add("post-meta__data");
    postMeta.append(postMetaData);
    const postMetaAuthor = document.createElement("div");
    postMetaAuthor.classList.add("post-meta__author");
    const authorText = document.createTextNode(element.author.name);
    postMetaAuthor.append(authorText);

    postMetaData.append(postMetaAuthor);
    const postMetaTime = document.createElement("div");
    postMetaTime.classList.add("post-meta__time");
    const postMetaTimeText = document.createTextNode(element.created);
    postMetaData.append(postMetaTime);
    postMetaTime.append(postMetaTimeText);

    // comandi corpo post
    const postText = document.createElement("div");
    postText.classList.add("post__text");
    const postText1 = document.createTextNode(element.content);
    postText.append(postText1);
    postDiv.append(postText);

    const postImg = document.createElement("div");
    postImg.classList.add("post__image");
    postDiv.append(postImg);
    const postImgImg = document.createElement("img");
    postImgImg.src = element.media;
    postImg.append(postImgImg);

    // comandi footer post
    const postFooter = document.createElement("div");
    postFooter.classList.add("post__footer");
    postDiv.append(postFooter);

    const likes = document.createElement("div");
    likes.classList.add("likes", "js-likes");
    postFooter.append(likes);
    const likesCta = document.createElement("div");
    likesCta.classList.add("likes__cta");
    likes.append(likesCta);

    const likeButton = document.createElement("a");
    likeButton.classList.add("like-button", "js-like-button");
    likeButton.href = "#";
    likesCta.append(likeButton);
    const likeButtonIcon = document.createElement("i");
    likeButtonIcon.classList.add("like-button__icon", "fas", "fa-thumbs-up");
    likeButtonIcon.ariaHidden = "true";
    likeButton.append(likeButtonIcon);
    const likeButtonLabel = document.createElement("span");
    likeButtonLabel.classList.add("like-button__label");
    const likeButtonSpan = document.createTextNode(" Mi Piace");
    likeButtonLabel.append(likeButtonSpan);
    likeButton.append(likeButtonLabel);

    const likesCounter = document.createElement("div");
    likesCounter.classList.add("likes__counter");
    const bLikes = document.createElement("b");
    bLikes.setAttribute('id','likes-counter-1');
    const bLikesText = document.createTextNode("80");
    bLikes.append(bLikesText);
    const likesCounterText = document.createTextNode("Piace a" + bLikes + "persone");
    likesCounter.append(likesCounterText);
    likes.append(likesCounter);
});






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