
/*-------------------CONSEGNA-------------------------
Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
id del post, numero progressivo da 1 a n
nome autore,
foto autore,
data in formato americano (mm-gg-yyyy),
testo del post,
immagine (non tutti i post devono avere una immagine),
numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
[e qui è già fatto perchè ve lo passo nello zip :innocente:]
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
Milestone 3 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/


// ----------------------ARRAY OBJ---------------------------

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
            "image":"https://unsplash.it/300/300?image=12"
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


// -------------------------------------CREAZIONE POSTS-------------------------------------

for (let index = 0; index < posts.length; index++) {
    const myPostList = document.querySelector('.posts-list');

    const newPost = `<div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${posts[index].author.image}" alt="${posts[index].author.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${posts[index].author.name}</div>
                            <div class="post-meta__time">${posts[index].created}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${posts[index].content}</div>
                <div class="post__image">
                    <img src="${posts[index].media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <div class="like-button  js-like-button" data-postid="${posts[index].id}">
                                <i class="fa-regular fas fa-thumbs-up"></i>
                                <i class=" fa-solid  fas fa-thumbs-up hidden"></i>                                
                                <span class="like-button__label">Mi piace!</span>
                            </div>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${posts[index].id}" class="js-likes-counter">${posts[index].likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>`;
    myPostList.innerHTML += newPost;

};

const myLikeButton = document.querySelectorAll('.like-button');

const myLikeCounter = document.querySelectorAll('.js-likes-counter');

// -------------COSTANTE PER SALVARE I POST A CUI HO MESSO LIKE--------------------

let myLikedPosts = [];

// ------------------------FUNZIONI LIKE POST----------------------------

for (let index = 0; index < posts.length; index++) {
    
    myLikeButton[index].addEventListener('click',
    
    function () {
        console.log('click like su post n° ' + posts[index].id);
        
        const notLiked = document.querySelectorAll('i.fa-solid');
        const liked = document.querySelectorAll('i.fa-regular');
        const likedText = document.querySelectorAll('.like-button__label');
        if (notLiked[index].className.includes('hidden') == false) {            
            notLiked[index].classList.add('hidden');
            liked[index].classList.remove('hidden');     
            myLikeCounter[index].innerHTML = posts[index].likes + 1;
            myLikedPosts.push(posts[index].id);
            console.log('Id post a cui ho messo like ' + myLikedPosts);
        }
        else{
            notLiked[index].classList.remove('hidden');
            liked[index].classList.add('hidden');
            likedText[index].innerHTML = 'Mi piace!';
            myLikeCounter[index].innerHTML = posts[index].likes;
        }
        console.log(myLikedPosts);

    }
    );
};




