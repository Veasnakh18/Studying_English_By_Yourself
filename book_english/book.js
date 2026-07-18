const show_book = document.getElementById("show_book");
const body = document.getElementById("body");
const settig = document.getElementById("settig");
const show_setting = document.getElementById("show_setting");
const btn_close_setting = document.getElementById("btn_close_setting");

// color
const settings_show = document.getElementById("settings-panel");

const data_book = [
  {
    id : 1,
    photo_book: "../book_english/img/image.png",
    link: "../book_english/link_book/Time_for_Kids_Nonfiction_Comprehension_Test_Practice_Second_Edition.pdf",
    title_book: "Nonfiction Comprehension",
    description:
      "Looking for some test prep help? That's the Nonfiction Comprehension Test Practice: Level 2 book from the TIME For Kids series by Jennifer Overend Prior.",
  },
  {
    id : 2,
    photo_book: "../book_english/img/image copy.png",
    link: "../book_english/link_book/The_Good_Grammar_Book_with_Answers.pdf",
    title_book: "Grammar",
    description:
      "This is The Good Grammar Book by Michael Swan and Catherine Walter, published by Oxford University Press.",
  },
  {
    id : 3,
    photo_book: "../book_english/img/book_DK.jpg",
    link: "../book_english/link_book/DK-_100_Scientists_Who_Made_History_DK.pdf",
    title_book: "100 scientists history ",
    description:
      "This image shows the book 100 Scientists Who Made History published by DK, featuring a vibrant yellow cover with caricatures of famous scientific figures.",
  },
  {
    id : 4,
    photo_book: "../book_english/img/book_what_on_Earth.jpg",
    link: "../book_english/link_book/What on Earth! 09.2025.pdf",
    title_book: "Into the Deep",
    description:
      "Dive into an ocean adventure from vibrant coral reefs to the mysterious depths of the Mariana Trench. All eight cover feature pages flow together to create a single 11,000-metre infographic!",
  },
  {
    id : 5,
    photo_book: "../book_english/img/book_time.jpg",
    link: "../book_english/link_book/Time_for_Kids_Nonfiction_Comprehension_Test_Practice_Second_Edition.pdf",
    title_book: "",
    description:
      "The magazine also examines the show's influence on subsequent adult animation, such as Family Guy and South Park, and discusses how it has maintained a passionate global fan base for over three decades.",
  },
  {
    id : 6,
    photo_book: "../book_english/img/sience copy.jpg",
    link: "../book_english/link_book/science_dictionary_for_teachers_students_parents.pdf",
    title_book: "Science Dictionary",
    description: `The book shown is the "Science Dictionary: For Teachers, Students & Parents" written by Fareeda Abbasi. It is part of a series published by Youth Together for Human Rights Education aimed at building a strong academic foundation for learners.`,
  },
  {
    id:7,
    photo_book: "../book_english/img/photo_2026-06-26_02-53-14.jpg",
    link: "../book_english/link_book/011-DYLAN-THE-DRAGON-Free-Childrens-Book-By-Monkey-Pen.pdf",
    title_book: "Dylan the Dragon & The Playground Ride.",
    description:
      "Dylan the Dragon & the Playground Ride, written by Zani Mathoo, is a children's storybook that follows a compassionate young blue dragon who lives in the Rockstone Mountains of Scotland.",
  },
  {
    id : 8,
    photo_book: "../book_english/img/photo_2026-06-26_02-56-47.jpg",
    link: "../book_english/link_book/14_A_Child_Becomes_a_Reader_author_Bonnie_B_Armbruster_Fran_Lehr.pdf",
    title_book: "A Child Becomes a Reader",
    description:
      "A Child Becomes a Reader: Birth Through Preschool is a practical guide designed for parents and caregivers to support children's literacy development from birth up to age five.",
  },
  {
    id : 9,
    photo_book: "../book_english/img/photo_2026-06-26_03-00-23.jpg",
    link: "../book_english/link_book/07_Learning_The_Alphabet_ABC_Workbook_2_author_Kathryn_J_Davis.pdf",
    title_book: "Learning the Alphabet",
    description:
      "Learning the Alphabet Revised Workbook 2 is part of a foundational literacy series from Sound City Reading designed to teach letter recognition, sounds, and handwriting",
  },
  {
    id : 10,
    photo_book: "",
    link: "",
    title_book: "",
    description: "",
  },
];

data_book.forEach((book_file) => {
  const Book = document.createElement("div");

  Book.innerHTML = `
    <div class="card" style="width: 18rem; height:600px">
  <img style="height:250px" src="${book_file.photo_book}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title w-100">${book_file.title_book}</h5>
    <p class="card-text">${book_file.description}</p>
    <a download href="${book_file.link}" style = "position: absolute;
    bottom: 10px;
    left: 30%;
    right: 30%;"  id="btn1" class="btn btn-primary">Download</a>
    </div>
    </div>
    `;
    show_book.appendChild(Book);

    // so now it  erorr
    function alert_messeage1(){
        let btn = document.querySelector("#btn1");
            btn.addEventListener("click" , function(){
                alert(`You have been downlad ${book_file.title_book}`);
                return;
            })
    }
    alert_messeage1();
    
});


// color background

function setTheme(mode) {
  const root = document.documentElement;
  const buttons = document.querySelectorAll(".theme-btn");

  buttons.forEach((btn) => btn.classList.remove("active"));
  event.currentTarget.classList.add("active");

  if (mode === "light") {
    root.style.setProperty("--bg-panel", "rgba(0, 0, 0, 0.04)");
    root.style.setProperty("--text-main", "#1e293b");
    root.style.setProperty("--text-muted", "#64748b");
  } else {
    root.style.setProperty("--bg-panel", "rgba(255, 255, 255, 0.06)");
    root.style.setProperty("--text-main", "#ffffff");
    root.style.setProperty("--text-muted", "#94a3b8");
  }
}

function setAccent(color) {
  document.documentElement.style.setProperty("--accent-color", color);

  document
    .querySelectorAll(".color-dot")
    .forEach((dot) => dot.classList.remove("active"));
  event.currentTarget.classList.add("active");
}

function changeFontSize(size) {
  document.getElementById("fontValue").innerText = size + "px";
  document.documentElement.style.setProperty("--base-font-size", size + "px");
  // អ្នកអាចយក variable --base-font-size ទៅប្រើក្នុង body { font-size: var(--base-font-size); }
}

settig.addEventListener("click", () => {
  if (settings_show.style.display == "none") {
    settings_show.style.display = "block"; // បិទវិញបើវាំពុងបើក
  } else {
    settings_show.style.display = "none"; // បើកបង្ហាញ
  }
});
// download href="${book_file.link}"    

// search book

function find(){
    const search = document.getElementById("search").value;
    const find_B = search.toLowerCase();
    const newItem = data_book.filter((S) => S.title_book.toLowerCase().includes(find_B));
    if(search) return;
    console.log(newItem);
  }
  find();
  
  const btn_search = document.getElementById("btn_search");
  const form = document.getElementById("form");
  btn_search.addEventListener("click", find);