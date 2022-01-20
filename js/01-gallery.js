import { galleryItems } from  './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const createGallaryItem=({preview,original,description})=>{
    const wrapper = document.createElement('div');
    wrapper.innerHTML=`
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
    console.log(wrapper.firstElementChild)
    return wrapper.firstElementChild;

}
const clearGallary = (ref) => {
ref.innerHTML = '';
};
const renderGallaryItems=(items, ref)=>{
clearGallary(ref);
const gallaryCard = items.map((item) => createGallaryItem(item));
ref.append(...gallaryCard);
}

renderGallaryItems(galleryItems, galleryRef);


console.log(galleryItems);

