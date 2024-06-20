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

let contpost = document.getElementById("container");


posts.forEach((element, index) => {
    if (index == 0) {
        
        let imgIcon = `<img class="profile-pic" src="${posts[0].author.image}">`;
        
        let metaIcon = `<div class="post-meta__icon">${imgIcon}</div>`;
        
        let metaAuthor = `<div class="post-meta__author">${posts[0].author.name}</div>`;
        
        let metaTime = `<div class="post-meta__time">${posts[0].created}</div>`;
        
        let metaData = `<div class="post-meta__data">${metaAuthor} ${metaTime}</div>`
        
        let postMeta = `<div class="post__meta">${metaIcon} ${metaData}</div>`;
        
        let postHeader = `<div class="post__header">${postMeta}</div>`;

        let postText = `<div class="post__text">${posts[0].content}</div>`;

        let bigImg = `<img src="${posts[0].media}" alt=""></img>`;

        let postImage = `<div class="post__image">${bigImg}</div>`;

        let likeButton = `<a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>`;

        let cta = `<div class="likes__cta">${likeButton}</div>`;

        let likeCounter = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[0].likes}</b> persone`;

        let counter = `<div class="likes__counter">${likeCounter}</div>`;

        let jsLikes = `<div class="likes js-likes">${cta} ${counter}</div>`;

        let postFolder = `<div class="post__footer">${jsLikes}</div>`
        
        let post = `<div class="post">${postHeader} ${postText} ${postImage} ${postFolder}</div>`;
        contpost.innerHTML += post;
    }

    if (index == 1) {
        
        let imgIcon = `<img class="profile-pic" src="${posts[1].author.image}">`;
        
        let metaIcon = `<div class="post-meta__icon">${imgIcon}</div>`;
        
        let metaAuthor = `<div class="post-meta__author">${posts[1].author.name}</div>`;
        
        let metaTime = `<div class="post-meta__time">${posts[1].created}</div>`;
        
        let metaData = `<div class="post-meta__data">${metaAuthor} ${metaTime}</div>`
        
        let postMeta = `<div class="post__meta">${metaIcon} ${metaData}</div>`;
        
        let postHeader = `<div class="post__header">${postMeta}</div>`;

        let postText = `<div class="post__text">${posts[1].content}</div>`;

        let bigImg = `<img src="${posts[1].media}" alt=""></img>`;

        let postImage = `<div class="post__image">${bigImg}</div>`;

        let likeButton = `<a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>`;

        let cta = `<div class="likes__cta">${likeButton}</div>`;

        let likeCounter = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[1].likes}</b> persone`;

        let counter = `<div class="likes__counter">${likeCounter}</div>`;

        let jsLikes = `<div class="likes js-likes">${cta} ${counter}</div>`;

        let postFolder = `<div class="post__footer">${jsLikes}</div>`
        
        let post = `<div class="post">${postHeader} ${postText} ${postImage} ${postFolder}</div>`;
        contpost.innerHTML += post;
    }

    if (index == 2) {
        
        let imgIcon = `<img class="profile-pic" src="${posts[2].author.image}">`;
        
        let metaIcon = `<div class="post-meta__icon">${imgIcon}</div>`;
        
        let metaAuthor = `<div class="post-meta__author">${posts[2].author.name}</div>`;
        
        let metaTime = `<div class="post-meta__time">${posts[2].created}</div>`;
        
        let metaData = `<div class="post-meta__data">${metaAuthor} ${metaTime}</div>`
        
        let postMeta = `<div class="post__meta">${metaIcon} ${metaData}</div>`;
        
        let postHeader = `<div class="post__header">${postMeta}</div>`;

        let postText = `<div class="post__text">${posts[2].content}</div>`;

        let bigImg = `<img src="${posts[2].media}" alt=""></img>`;

        let postImage = `<div class="post__image">${bigImg}</div>`;

        let likeButton = `<a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>`;

        let cta = `<div class="likes__cta">${likeButton}</div>`;

        let likeCounter = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[2].likes}</b> persone`;

        let counter = `<div class="likes__counter">${likeCounter}</div>`;

        let jsLikes = `<div class="likes js-likes">${cta} ${counter}</div>`;

        let postFolder = `<div class="post__footer">${jsLikes}</div>`
        
        let post = `<div class="post">${postHeader} ${postText} ${postImage} ${postFolder}</div>`;
        contpost.innerHTML += post;
    }

    if (index == 3) {
        
        let imgIcon = `<img class="profile-pic" src="${posts[3].author.image}">`;
        
        let metaIcon = `<div class="post-meta__icon">${imgIcon}</div>`;
        
        let metaAuthor = `<div class="post-meta__author">${posts[3].author.name}</div>`;
        
        let metaTime = `<div class="post-meta__time">${posts[3].created}</div>`;
        
        let metaData = `<div class="post-meta__data">${metaAuthor} ${metaTime}</div>`
        
        let postMeta = `<div class="post__meta">${metaIcon} ${metaData}</div>`;
        
        let postHeader = `<div class="post__header">${postMeta}</div>`;

        let postText = `<div class="post__text">${posts[2].content}</div>`;

        let bigImg = `<img src="${posts[3].media}" alt=""></img>`;

        let postImage = `<div class="post__image">${bigImg}</div>`;

        let likeButton = `<a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>`;

        let cta = `<div class="likes__cta">${likeButton}</div>`;

        let likeCounter = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[3].likes}</b> persone`;

        let counter = `<div class="likes__counter">${likeCounter}</div>`;

        let jsLikes = `<div class="likes js-likes">${cta} ${counter}</div>`;

        let postFolder = `<div class="post__footer">${jsLikes}</div>`
        
        let post = `<div class="post">${postHeader} ${postText} ${postImage} ${postFolder}</div>`;
        contpost.innerHTML += post;
    }

    if (index == 4) {
        
        let imgIcon = `<img class="profile-pic" src="${posts[4].author.image}">`;
        
        let metaIcon = `<div class="post-meta__icon">${imgIcon}</div>`;
        
        let metaAuthor = `<div class="post-meta__author">${posts[4].author.name}</div>`;
        
        let metaTime = `<div class="post-meta__time">${posts[4].created}</div>`;
        
        let metaData = `<div class="post-meta__data">${metaAuthor} ${metaTime}</div>`
        
        let postMeta = `<div class="post__meta">${metaIcon} ${metaData}</div>`;
        
        let postHeader = `<div class="post__header">${postMeta}</div>`;

        let postText = `<div class="post__text">${posts[4].content}</div>`;

        let bigImg = `<img src="${posts[4].media}" alt=""></img>`;

        let postImage = `<div class="post__image">${bigImg}</div>`;

        let likeButton = document.createElement("a");
        likeButton.classList.add("like-button", "js-like-button");
        

        let cta = `<div class="likes__cta">${likeButton}</div>`;

        let likeCounter = `Piace a <b id="like-counter-1" class="js-likes-counter">${posts[4].likes}</b> persone`;

        let counter = `<div class="likes__counter">${likeCounter}</div>`;

        let jsLikes = `<div class="likes js-likes">${cta} ${counter}</div>`;

        let postFolder = `<div class="post__footer">${jsLikes}</div>`
        
        let post = `<div class="post">${postHeader} ${postText} ${postImage} ${postFolder}</div>`;
        contpost.innerHTML += post;

        

        likeButton.addEventListener("click",
            function () {
                likebutton.classList.toggle("like-button--liked");
                
                for (let i = 0; i < posts.length; i++) {
                    const nuovolike = posts[i];
                    console.log(nuovolike);

                    let likeagg;
                    nuovolike.likes = likeagg++;
                    console.log(likeagg);
                }
            
            
            }
        );
    }
}
);



