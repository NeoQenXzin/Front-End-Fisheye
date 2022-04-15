class MediaFactory{
    constructor(data, type){
        if(type === 'mediaApi'){
            return new Media(data)
        }
    }
    
    // Je construit mon template main page index
    mediaFactory(data) {
        const { title, image, video, likes, date, price, photographerId} = data
        const picture = `assets/photographers/${photographerId}/${image}`
        const videoMp4 =  `assets/photographers/${photographerId}/${video}`
        
        
        
        function getMediaUserDOM(){
            const gallery = document.querySelector(".gallery")
            //Template Video 
            if(picture.slice(-('undefined').length).match('undefined') ){
                if(data.video){
                    // console.log('mp4');
                    gallery.innerHTML +=
                `
                <a class="zoom-Lighting-box" alt="ouvre video dans lighting-box" tabindex="7">
                <div class="photo-card">
                <video controls src="${videoMp4}">Ici la description alternative</video>
                <h2> <span class="title-card">${title}</span> <span class="like-card"> ${likes} <i class="fas fa-heart"></i> </span> </h2>
                </div>
                </a>
                `
                } 
            }
            //Template photo
            else {
                gallery.innerHTML +=
                `
                <a class="zoom-Lighting-box" alt="ouvre photo dans lighting-box" tabindex="7">
                <div class="photo-card">
                <img src="${picture}"    onclick="displayLightbox()"  name="${image}" alt="image du photographe ${image}" class="img-gallery"></img>
                <h2> <span class="title-card">${title}</span> <span class="like-card"> ${likes} <i class="fas fa-heart"></i> </span> </h2>
                </div>
                </a>
                `
                
            }
            
            
            
        }
        
        function getLightboxDOM(){
            
            // Test Affiche image selectionné :/
            // template lightbox
            const lightbox = document.querySelector('.lightbox')
            lightbox.innerHTML = 
            `
            <header>
            <img src="assets/icons/close.svg" onclick="closeLightbox()"   class="cross"alt="Croix ferme modal" tabindex="1"/>
            <img src="assets/icons/chevron-left.svg" onclick="previousPhoto()" class="chevron-left" alt="chevron photo précédente" tabindex="2"/>
            <img src="assets/icons/chevron-right.svg" onclick="nextPhoto()" class="chevron-right" alt="Chevron photo suivante" tabindex="3"/>
            </header>
            <div class="image-contain">
            <img src="${picture}"  alt="image du photographe ${image}" class="img-lightbox"></img>
            <span>${data.title}</span>
            </div>
            `
            
            }

    return { title,picture, video, date, price, likes,photographerId, getMediaUserDOM, getLightboxDOM }
}
}