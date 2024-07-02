// Query the DOM elements
let bars = document.querySelector(".bars");
let responsive = document.querySelector(".responsive-nav");
let latestCards = document.querySelector(".latestCards");
let a = document.querySelector("#myh1");

// Add event listener to the bars for toggling the responsive navigation menu
bars.addEventListener("click", () => {
  responsive.classList.toggle("active");
  // Toggle active class for each child of the bars element
  // Convert NodeList to an array use Array.From()
  Array.from(bars.children).forEach((child) =>
    child.classList.toggle("active")
  );
});

// Data for latest
let lCardsData = {
  head: "Latest News",
  cards: [
    {
      img: "https://preview.colorlib.com/theme/aroma/img/blog/blog1.png",
      heading: "The Richland Center Shopping News and Weekly shooper",
      desc: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
    },
    {
      img: "https://preview.colorlib.com/theme/aroma/img/blog/blog2.png",
      heading: "The Shopping News also offers top-quality printing services",
      desc: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
    },
    {
      img: "https://preview.colorlib.com/theme/aroma/img/blog/blog3.png",
      heading:
        "Proffessional design staff and efficient equiment you'll find we offer",
      desc: "Let one fifth i bring fly to divided face for bearing divide unto seed. Winged divided light Forth.",
    },
  ],
};

// Function to render cards based on the provided data
const renderCards = (cardData, container, cardRenderer) => {
  let cardHeadings = cardData.head.split(" ");
  container.innerHTML = `
    <div>
      <p>Popular Item in the market</p>
      <h1> ${cardHeadings[0]} 
      <span class="border-line">${cardHeadings[1]}</span>
      </h1>
    </div>
    <div class="hStack gap3 jCenter">
      ${cardData.cards.map((item) => cardRenderer(item)).join("")}
    </div>
  `;
};

// Function to generate the HTML for a single card
const latestCard = (item) => {
  return `
    <div class="latest-card vStack cursor-pointer">
      <img src="${item.img}" alt="">
      <div class="hStack">
        <p class="gray">By Admin</p>
        <p class="gray">
          <i class="fa-solid fa-comment-dots"></i>
          2 Comments
        </p>
      </div>
      <a href="">${item.heading}</a>
      <p class="gray">${item.desc}</p>
      <a href="" class="arrow-btn">
        Read More
        <i class="fa-solid fa-arrow-right transition"></i>
      </a>
    </div>`;
};

// Render the latest cards using the data
renderCards(lCardsData, latestCards, latestCard);


