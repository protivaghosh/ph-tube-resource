// create loadCategories
const loadCategories =()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(response =>response.json())
    .then(data => displayCategories(data.categories))
    .catch(error => console.log(error))
}

loadCategories();
// create loadVideo
const loadVideo =()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response =>response.json())
    .then(data => displayVideos(data.videos))
    .catch(error => console.log(error))
}
loadVideo()
// create displayVideos
const displayVideos =(videos)=>{
    const videoContainer=document.getElementById('videos');
videos.forEach((video) =>{
console.log(video);
const card =document.createElement('div')
card.classList="card card-compact"
card.innerHTML=`
 <figure class="h-[200px]">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
`;
videoContainer.append(card);
})
}

// {
//     "category_id": "1001",
//     "category": "Music"
// }

// create displayCategories
const displayCategories =(categories)=>{
    const categoryContainer=document.getElementById('categories');
    categories.forEach((item) => {
        console.log(item);
        // create a button
        const button =document.createElement('button')
        button.classList="btn";
        button.innerText=item.category;
// add button to categories container
categoryContainer.append(button);
});
    
}

console.log(displayCategories);