const container = document.getElementById("box_container");
const speaking = document.getElementById("conversation");
const btn = document.getElementById("btn_M");
const chat = document.getElementById("chat");
const btn_M = document.getElementById("btn_M");
const open_chat = document.getElementById("open_chat");
const click_open = document.getElementById("click_open");
const close = document.getElementById("close");



// Box Sentent1
const sentent1_english = [
    {
        title : "និយាយអំពីសកម្មភាពប្រចាំថ្ងៃ",
        line1 : "What are you doing? — កំពុងធ្វើអី?",
        line2 : "I'm going to school/work. — ខ្ញុំកំពុងទៅសាលា/ធ្វើការ។",
        line3 : "I'm just relaxing at home. — ខ្ញុំកំពុងសម្រាកនៅផ្ទះ។"
    },
    {
        title : "សួរមិត្តភក្តិ",
        line1 : "Where are you going? — អ្នកទៅណា?",
        line2 : "Do you want to hang out? — ចង់ទៅដើរលេងអត់?",
        line3 : "What did you do today? — ថ្ងៃនេះបានធ្វើអីខ្លះ?"
    },
    {
        title : "សួរសុខទុក្ខ (Greetings)",
        line1 : "Hi! How are you? — សួស្តី! សុខសប្បាយទេ?",
        line2 : "How's your day going? — ថ្ងៃនេះយ៉ាងម៉េចដែរ?",
        line3 : "What's up? — មានអីថ្មីទេ? , សុខសប្បាយទេ? , កំពុងធ្វើអីហ្នឹង?"
    },
    

]
const sentent2_english = [
    {
        title : "បង្ហាញមតិ",
        line1 : "That's great! — ល្អណាស់!",
        line2 : "Really? — មែនឬ?",
        line3 : "I agree. — ខ្ញុំយល់ស្រប។",
        line4 : "I don't think so. — ខ្ញុំមិនគិតអ៊ីចឹងទេ។",
    },
]
sentent1_english.forEach(english=>{
    const text_english = document.createElement("div");
    // text_english.classList.add("box_show_container");
    text_english.innerHTML =`
    <div>
    <div class="border rounded p-3 w-100">
        <h1 class="Greetings">${english.title}</h1>
             <div class="text_in_box">
                        <ul class="ul1">
                    <li>${english.line1}</li>
                    <li>${english.line2}</li>
                    <li>${english.line3}</li>
                </ul>
            </div>
        </div></div>
    `
    container.appendChild(text_english);
})
sentent2_english.forEach(english=>{
    const text_english = document.createElement("div");
    // text_english.classList.add("box_show_container");
    text_english.innerHTML =`
    <div>
    <div class="border rounded  w-100">
        <h1 class="Greetings">${english.title}</h1>
             <div class="text_in_box">
                        <ul class="ul1">
                    <li>${english.line1}</li>
                    <li>${english.line2}</li>
                    <li>${english.line3}</li>
                    <li>${english.line4}</li>
                </ul>
            </div>
        </div></div>
    `
    container.appendChild(text_english);
})




const sentace_conver = [
    {
        p1 : "Hello or Hi. : សួស្តី ",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "Good morning. : អរុណសួស្តី។" ,
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "Good afternoon. : ទិវាសួស្តី។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "How are you? — សុខសប្បាយទេ?",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "How's it going? — យ៉ាងម៉េចដែរ?",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "What's up? — មានអីថ្មីទេ?",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "Nice to meet you. — រីករាយដែលបានស្គាល់។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "Long time no see. — យូរហើយមិនបានជួប។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "How have you been? — ប៉ុន្មានថ្ងៃនេះសុខសប្បាយទេ?",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "How have you been? — ប៉ុន្មានថ្ងៃនេះសុខសប្បាយទេ?",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "Welcome. — សូមស្វាគមន៍។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "Have a nice day. — សូមឱ្យមានថ្ងៃល្អ។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "See you later. — ជួបគ្នាពេលក្រោយ។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        p1 : "See you tomorrow. — ជួបគ្នាថ្ងៃស្អែក។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {
        
        p1 : "Take care. — ថែរក្សាសុខភាពផង។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {    
        p1 : "Goodbye. — លាហើយ។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {    
        p1 : "Good night. — រាត្រីសួស្តី។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {    
        p1 : "Have a good weekend. — សូមឱ្យមានចុងសប្តាហ៍ល្អ។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
    {    
        p1 : "Safe trip. — សូមធ្វើដំណើរដោយសុវត្ថិភាព។",
        photo : "https://cdn-icons-png.flaticon.com/512/3532/3532779.png",
    },
]
sentace_conver.forEach(conversation =>{
    const conver = document.createElement("div");
    conver.classList.add("conversation_place");
    conver.innerHTML =`
    <div class="for_person1">
        <img class="for_person1_" src="${conversation.photo}" alt="">
            <p>${conversation.p1}</p>
        </div>
    `
    speaking.appendChild(conver);
})
const chat_ai = [
    {
        ai : "Yes Hello , hi",
        you : "hello"
    }
]
chat_ai.forEach(chatAI =>{
    const bot_chat = document.createElement("div");

    bot_chat.innerHTML = `
        <div>
            <p>${chatAI.you}</p>
            <p>${chatAI.ai}</p>
        </div>
    `
    //
})


btn_M.addEventListener("click", (e) => {
    e.preventDefault(); 

    const userInputField = document.getElementById("userInput");
    const userInput = userInputField.value.trim();

    if (userInput === "") return;

    if (userInput.toLowerCase().includes("hello")) {
        chat.innerHTML += `
        <div class="message user-msg">
            <p><strong>You:</strong> ${userInput}</p>
        </div>
        <div class="message ai-msg">
            <p><strong>AI:</strong> Yes hello brother</p>
        </div>
        `;
    } else {
        chat.innerHTML += `
        <div class="message user-msg">
            <p><strong>You:</strong> ${userInput}</p>
        </div>
        <div class="message ai-msg">
            <p><strong>AI:</strong> What are you talking about?</p>
        </div>
        `;
    }


    userInputField.value = ""; 


    chat.scrollTop = chat.scrollHeight;
});

function open_bot(){
    if(open_chat.style.display == "none"){
        open_chat.style.display = "block";
    }else{
        open_chat.style.display = "none";
    }
}

click_open.addEventListener("click" , open_bot)
click_open.addEventListener("click" , ()=>{

        open_chat.style.display = "block";

})
close.addEventListener("click" , ()=>{

        open_chat.style.display = "none";

})