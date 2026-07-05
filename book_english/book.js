const show_book = document.getElementById("show_book");
const body = document.getElementById("body");
const settig = document.getElementById("settig");
const show_setting = document.getElementById("show_setting");
const btn_close_setting = document.getElementById("btn_close_setting");

// color 
const settings_show = document.getElementById("settings-panel");



const data_book = [
    {photo_book : "../book_english/img/image.png" , link : "../book_english/link_book/Time_for_Kids_Nonfiction_Comprehension_Test_Practice_Second_Edition.pdf"},
    {photo_book : "../book_english/img/image copy.png" , link : "../book_english/link_book/The_Good_Grammar_Book_with_Answers.pdf"},
    {photo_book : "../book_english/img/book_DK.jpg" , link : "../book_english/link_book/DK-_100_Scientists_Who_Made_History_DK.pdf"},
    {photo_book : "../book_english/img/book_what_on_Earth.jpg" , link : "../book_english/link_book/What on Earth! 09.2025.pdf"},
    {photo_book : "../book_english/img/book_time.jpg" , link : "../book_english/link_book/Time_for_Kids_Nonfiction_Comprehension_Test_Practice_Second_Edition.pdf"},
    {photo_book : "../book_english/img/sience copy.jpg" , link : "../book_english/link_book/science_dictionary_for_teachers_students_parents.pdf"},
    {photo_book : "../book_english/img/photo_2026-06-26_02-53-14.jpg" , link : "../book_english/link_book/011-DYLAN-THE-DRAGON-Free-Childrens-Book-By-Monkey-Pen.pdf"},
    {photo_book : "../book_english/img/photo_2026-06-26_02-56-47.jpg" , link : "../book_english/link_book/14_A_Child_Becomes_a_Reader_author_Bonnie_B_Armbruster_Fran_Lehr.pdf"},
    {photo_book : "../book_english/img/photo_2026-06-26_03-00-23.jpg" , link : "../book_english/link_book/07_Learning_The_Alphabet_ABC_Workbook_2_author_Kathryn_J_Davis.pdf"},
]

data_book.forEach(book_file =>{
    const Book = document.createElement("div");

    Book.innerHTML =`
    <div class="">
        <div class="border rounded-3 border-primary bg-light" style=" display: flex;justify-content: center;align-items: center;padding:5px">
        <div style="width:90%; heigth:85%">
        <img class="w-100 h-100 border rounded-2" src="${book_file.photo_book}" alt="">

        <a href="${book_file.link}" download class="btn btn-danger w-100 d-flex justify-content-center align-items-center m-auto mt-4">Download</a>
        </div>
            </div>
                        </div>
    `
    show_book.appendChild(Book);
})

// color background

function setTheme(mode) {
    const root = document.documentElement;
    const buttons = document.querySelectorAll('.theme-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (mode === 'light') {
        root.style.setProperty('--bg-panel', 'rgba(0, 0, 0, 0.04)');
        root.style.setProperty('--text-main', '#1e293b');
        root.style.setProperty('--text-muted', '#64748b');
    } else {
        root.style.setProperty('--bg-panel', 'rgba(255, 255, 255, 0.06)');
        root.style.setProperty('--text-main', '#ffffff');
        root.style.setProperty('--text-muted', '#94a3b8');
    }
}

function setAccent(color) {
    document.documentElement.style.setProperty('--accent-color', color);
    
    document.querySelectorAll('.color-dot').forEach(dot => dot.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function changeFontSize(size) {
    document.getElementById('fontValue').innerText = size + 'px';
    document.documentElement.style.setProperty('--base-font-size', size + 'px');
    // អ្នកអាចយក variable --base-font-size ទៅប្រើក្នុង body { font-size: var(--base-font-size); }
}

    settig.addEventListener("click", () => {
    if (settings_show.style.display == 'none') {    
        settings_show.style.display = 'block';  // បិទវិញបើវាំពុងបើក
    } else {
        settings_show.style.display = 'none'; // បើកបង្ហាញ
    }
});
