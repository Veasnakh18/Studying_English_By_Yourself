const show_book = document.getElementById("show_book");

const data_book = [
    {photo_book : "../book_english/img/image.png" , link : ""},
    {photo_book : "../book_english/img/image.png" , link : ""},
    {photo_book : "../book_english/img/image.png" , link : ""},
]

data_book.forEach(book_file =>{
    const Book = document.createElement("div");

    Book.innerHTML =`
    <div class="col-lg-3">
                            <img src="${book_file.photo_book}" alt="">
                        </div>
    `
    show_book.appendChild(Book);
})