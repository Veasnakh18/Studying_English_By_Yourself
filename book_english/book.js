const show_book = document.getElementById("show_book");

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