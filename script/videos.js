// fetching categories button
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayButton(data.categories))
    .catch((error) => console.log(error));
};

const displayButton = (items) => {
  items.forEach((item) => {
    const videoContainer = document.getElementById("button");
    const div = document.createElement("div");
    div.innerHTML = `
                <button class="btn">${item.category}</button>
        `;
    videoContainer.append(div);
  });
};

// fetching videos content
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data));
};

const displayVideos = (videos) => {
  const items = videos.videos;
  const div = document.getElementById("videos");
  div.innerHTML = "";
  if (videos.status == false) {
    alert("No content");
  }

  items.forEach((item) => {
    const card = document.createElement("div");
    card.innerHTML = `
                    <div class="card bg-base-100 shadow-sm">
                <figure class="h-40">
                    <img class="w-full h-full object-cover"
                    src=${item.thumbnail}
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                    <div class="flex gap-4">
                    <img class="w-8 h-8 rounded-full" src=${item.authors[0].profile_picture}/>
                    <div class="space-y-2">
                        <h2 class="font-bold text-base">${item.title}</h1>
                        <div class="flex items-center gap-2">
                        <p>${item.authors[0].profile_name}</p>
                        <span>${item.authors[0].verified === true 
                        ?
                         `<img class="w-5 h-5 rounded-full" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000"/>`
                         : ""}
                         </span>
                        </div>
                        <p class="font-light">${item.others.views} views</p>
                    </div>
                        </div>
                            <button onclick="my_modal_1.showModal()" class="btn bg-red-400">Descripton</button>
                </div>
                </div>
        `;
        div.append(card);

  });
    const modal = document.querySelector(".modal-box");
        modal.innerHTML = `
                    <p>${videos.description}</p>
        `;
};



loadVideos();
loadCategories();


// "videos": [
//     {
//       "category_id": "1001",
//       "video_id": "aaaa",
//       "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//       "title": "Shape of You",
//       "authors": [
//         {
//           "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//           "profile_name": "Olivia Mitchell",
//           "verified": ""
//         }
//       ],
//       "others": {
//         "views": "100K",
//         "posted_date": "16278"
//       },