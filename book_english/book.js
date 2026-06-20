const show_book = document.getElementById("show_book");
const body = document.getElementById("body");
const settig = document.getElementById("settig");
const show_setting = document.getElementById("show_setting");
const btn_close_setting = document.getElementById("btn_close_setting");

// color 
const black = document.getElementById("black");
const blue = document.getElementById("blue");
const white = document.getElementById("white");
// set up font 

const setUp = document.getElementById("setUp");
const textsection = document.getElementById("textsection");
const box_2 = document.getElementById("box_2");
const box_2_2 = document.getElementById("box_2_2");



const data_book = [
    {photo_book : "../book_english/img/image.png" , link : "../book_english/link_book/Time_for_Kids_Nonfiction_Comprehension_Test_Practice_Second_Edition.pdf"},
    {photo_book : "../book_english/img/image copy.png" , link : "../book_english/link_book/The_Good_Grammar_Book_with_Answers.pdf"},
    {photo_book : "../book_english/img/book_DK.jpg" , link : "../book_english/link_book/DK-_100_Scientists_Who_Made_History_DK.pdf"},
    {photo_book : "../book_english/img/book_what_on_Earth.jpg" , link : "../book_english/link_book/What on Earth! 09.2025.pdf"},
    {photo_book : "../book_english/img/book_time.jpg" , link : "../book_english/link_book/Time_for_Kids_Nonfiction_Comprehension_Test_Practice_Second_Edition.pdf"},
    {photo_book : "../book_english/img/sience copy.jpg" , link : "../book_english/link_book/science_dictionary_for_teachers_students_parents.pdf"},
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

function background_black(){
    box_2.style.background = 'black';
    box_2_2.style.background = 'black';
    body.style.color = 'white';
    box_2.style.color = 'black';
    box_2_2.style.color = 'white';
}

function background_(){
    body.style.backgroundImage = 'linear-gradient(123deg , black 30% , rgb(2, 2, 77) 100%)';
}

function background_blue(){
    body.style.backgroundColor = 'darkblue';
    body.style.color = 'white';
    box_2.style.color = 'black';
}

function background_white(){
    body.style.backgroundColor = '';
    body.style.color = 'black';
}

// action
// const list = document.getElementById("list");
// list.innerHTML =`
//     <div>

//     </div>
// `
// code show

// click color 
black.addEventListener("click" , function(){
    background_black();
    black.style.background = 'red';
    blue.style.background = 'none';
    white.style.background = 'none';
})

blue.addEventListener("click" , function(){
    background_blue();
    black.style.background = 'none';
    blue.style.background = 'red';
    white.style.background = 'none';
})
white.addEventListener("click" , function(){
    background_white();
    black.style.background = 'none';
    blue.style.background = 'none';
    white.style.background = 'red';
})

settig.addEventListener("click" , ()=>{
    show_setting.style.display = 'block';
})
btn_close_setting.addEventListener("click" , ()=>{
    show_setting.style.display = 'none';
})

function set_font_size(){
    const put_size = document.getElementById("put_size").value;
    textsection.style.fontSize = `${put_size}px`;
    if(put_size == "default"){
        textsection.style.fontSize = `large`;
        alert("Successfuly");
    }else{
        alert("You write the <<default>> word, it will go back to normal.")
    }
}

setUp.addEventListener("click" , function(){
    set_font_size();
})
