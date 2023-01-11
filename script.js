//popular list
const popularItems = [
  {
    title: "Reviving Retro PCs",
    summary: "What happens when old PCs are given modern upgrades?",
    img: "assets/images/image-retro-pcs.jpg",
  },
  {
    title: "Top 10 Laptops of 2022",
    summary: "Our best picks for various needs and budgets.",
    img: "assets/images/image-top-laptops.jpg",
  },
  {
    title: "The Growth of Gaming",
    summary: "How the pandemic has sparked fresh opportunities.",
    img: "assets/images/image-gaming-growth.jpg",
  },
];
const listOfPopularItems = document.querySelector(".popular__items");

popularItems.forEach((e, i) => {
  let newElement = document.createElement("li");
  newElement.classList.add("popular__items_card");
  newElement.innerHTML = `
        <figure>
            <img src=${e.img} alt=${e.title}>
        </figure>
        <div class="popular__items_card-preview">
            <p>0${i + 1}</p>
            <p>${e.title}</p>
            <p>${e.summary}</p>
        </div>
        `;
  listOfPopularItems.appendChild(newElement);
});
//popular list

//recent news
const recentNews = [
  {
    header: "Hydrogen VS Electric Cars",
    summary: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    header: "The Downsides of AI Artistry",
    summary:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    header: "Is VC Funding Drying Up?",
    summary:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const listOfRecentNews = document.querySelector(".news__recent");

recentNews.forEach((e, i) => {
  let newElement = document.createElement("li");
  newElement.classList.add("news__recent_item");

  newElement.innerHTML = `
        <p>${e.header}</p>
        <p>${e.summary}</p>
        `;

  listOfRecentNews.appendChild(newElement);
});

//recent news

// mobile menu

const menu = document.getElementById("mMobile")
const sideMenu = document.getElementById("mMenu")
menu.addEventListener("click", () => {
  menu.classList.toggle("open")
  sideMenu.classList.toggle("open")
})

// mobile menu
