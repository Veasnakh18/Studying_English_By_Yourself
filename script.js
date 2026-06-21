const container = document.getElementById("box_container");
const speaking = document.getElementById("conversation");
const btn = document.getElementById("btn_M");
const chat = document.getElementById("chat");
const btn_M = document.getElementById("btn_M");
const open_chat = document.getElementById("open_chat");
const click_open = document.getElementById("click_open");
const close = document.getElementById("close");
// show menu for phone
const nav_show = document.getElementById("nav_show");
const btn_open = document.getElementById("btn_open")
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
// quite answer
const submit1 = document.getElementById("submit1");

const result_score = document.getElementById("result_score");




// action manu navbar
btn_open.addEventListener("click" , ()=>{
    if(nav_show.style.display === "none"){
        nav_show.style.display = "block";
    }else{
        nav_show.style.display = "none";
    }
})

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
    { you: "Hello! How are you doing today?", ai: "Hi there! I'm doing great, thank you." },
    { you: "What's the weather like outside?", ai: "It looks quite warm and sunny today. Perfect for going out!" },
    { you: "I'm so tired today. I didn't sleep well last night.", ai: "Oh dear, I'm sorry to hear that. Maybe a warm cup of coffee can help?" },
    { you: "Can you recommend a good place to eat lunch around here?", ai: "Sure! There's a great local cafe nearby that serves amazing noodle soup." },
    { you: "What are your plans for the weekend?", ai: "I don't have plans since I'm an AI, but it's a great time for you to relax!" },
    { you: "I have a lot of work to do and I'm feeling stressed.", ai: "Take a deep breath. Try breaking your tasks into smaller steps." },
    { you: "Do you know what time the supermarket closes?", ai: "Most local supermarkets close around 9:00 PM or 10:00 PM." },
    { you: "I think I'm getting a cold. My throat hurts.", ai: "Oh no! Make sure to drink plenty of warm water and get some rest." },
    { you: "Can you help me remind myself to buy groceries later?", ai: "Consider it noted! Don't forget to grab vegetables and eggs." },
    { you: "Did you catch the football match last night?", ai: "I didn't watch it live, but I heard it was an incredibly intense game!" },
    { you: "I'm thinking of learning a new skill. Any ideas?", ai: "That's exciting! Web development or learning a new language are highly rewarding." },
    { you: "It's starting to rain heavily out of nowhere!", ai: "Make sure to stay indoors and keep dry. Travel safely if you have to drive!" },
    { you: "I just finished a really tough exam/project!", ai: "Congratulations! Hard work pays off. Now it's time to treat yourself." },
    { you: "Do you prefer mornings or nights?", ai: "Mornings are great for energy, but nights are perfect for quiet focus." },
    { you: "Thanks for the chat, I have to go now.", ai: "You're very welcome! Have a wonderful rest of your day!" },
    {you : "Link about conversation" , ai : "https://youtu.be/CQKBaF1_h6M?si=BUWQDbCtFPFOUZec" , ai : "https://youtu.be/b9OVPcW1gfY?si=Wb-sOTe4ncHD4KWw"},
    {you : "hello , you can pratice english whit me?" , ai : "Hello! I would love to practice English with you!"},
    {you : "how are you ?" , ai : "I'm doing great, thank you for asking! My system is running smoothly, and I'm fully charged and ready to chat.How are you doing today? Did you have a busy day at the university, or are you just relaxing right now?"},
    {you : "Thank you for asking me" , ai : "I'm glad to hear you're doing well."},
    {you : "I'm am learning english now." , ai : "That is awesome! Learning a new language takes time, but you are doing a great job. Practicing like this every day is the best way to get better."},
    {you : "love you" , ai : "yes , I love you too."},
    
];

const link_for_click = [
    {you : "you can give link video youtube to me" , ai : "https://youtu.be/b9OVPcW1gfY?si=jaLJGprVbxR_pBY1"},
]

btn_M.addEventListener("click", (e) => {
    e.preventDefault(); 

    const userInputField = document.getElementById("userInput");
    const userInput = userInputField.value.trim().toLowerCase();
    const chat = document.getElementById("chat");

    if (userInput === "") return;

    
    chat.innerHTML += `
        <div class="message user-msg">
            <p><strong>You:</strong> ${userInputField.value}</p>
        </div>
    `;


    let bestMatch = null;
    let highestScore = 0;


    chat_ai.forEach(chatAI => {
        const keyword = chatAI.you.toLowerCase();
        let currentScore = 0;

        
        if (keyword.includes(userInput) || userInput.includes(keyword)) {
            currentScore = 100;
        } else {
            
            const chunkLength = Math.min(3, userInput.length); 
            for (let i = 0; i <= userInput.length - chunkLength; i++) {
                const chunk = userInput.substr(i, chunkLength);
                if (keyword.includes(chunk)) {
                    currentScore += 10;
                }
            }
        }

        if (currentScore > highestScore) {
            highestScore = currentScore;
            bestMatch = chatAI;
        }
    });

    let aiResponse = "What are you talking about?";
    if (bestMatch && highestScore >= 10) {
        aiResponse = bestMatch.ai;
    }

    chat.innerHTML += `
        <div class="message ai-msg">
            <p><strong>AI:</strong> ${aiResponse}</p>
        </div>
    `;

    userInputField.value = ""; 
    chat.scrollTop = chat.scrollHeight;
});

btn_M.addEventListener("click", (e) => {
    e.preventDefault(); 

    const userInputField = document.getElementById("userInput");
    const userInput = userInputField.value.trim().toLowerCase();
    const chat = document.getElementById("chat");

    if (userInput === "") return;

    
    chat.innerHTML += `
        <div class="message user-msg">
            <p><strong>You:</strong> ${userInputField.value}</p>
        </div>
    `;


    let bestMatch = null;
    let highestScore = 0;


    link_for_click.forEach(chatAI => {
        const keyword = chatAI.you.toLowerCase();
        let currentScore = 0;

        
        if (keyword.includes(userInput) || userInput.includes(keyword)) {
            currentScore = 100;
        } else {
            
            const chunkLength = Math.min(3, userInput.length); 
            for (let i = 0; i <= userInput.length - chunkLength; i++) {
                const chunk = userInput.substr(i, chunkLength);
                if (keyword.includes(chunk)) {
                    currentScore += 10;
                }
            }
        }

        if (currentScore > highestScore) {
            highestScore = currentScore;
            bestMatch = chatAI;
        }
    });

    let aiResponse = "What are you talking about?";
    if (bestMatch && highestScore >= 10) {
        aiResponse = bestMatch.ai;
    }

    chat.innerHTML += `
        <div class="message ai-msg">
            <p><strong>AI:</strong> ${aiResponse}</p>
        </div>
    `;

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

// color background

function background_black(){
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
}

function background_(){
    body.style.backgroundImage = 'linear-gradient(123deg , black 30% , rgb(2, 2, 77) 100%)';
}

function background_blue(){
    body.style.backgroundColor = 'darkblue';
    body.style.color = 'white';
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

function answer(){
    let a = document.getElementById("q1_a");
    let b = document.getElementById("q1_b");
    let c = document.getElementById("q1_c");
    let d = document.getElementById("q1_d");
    let q2 = document.getElementById("q2");
// --------------
    let q3_a = document.getElementById("q3_a");
    let q3_b = document.getElementById("q3_b");
    let q3_c = document.getElementById("q3_c");

    let score = 0;


    if(c.checked){
        score+=2;
    }
    if(q2.value.trim().toLowerCase() == "to"){
        score+=2;
    }
    if(q3_a.checked && q3_c.checked && !q3_b.checked){
        score += 4;
    }
    console.log(score);
    alert("Your Score : " + score);
    result_score.innerHTML =`
    <div class="border rounded-2 border-primary bg-success p-2">
        <h2>Your Score For Exam : ${score}/8</h2>
    </div>
    `
}
submit1.addEventListener("click" , function(event){
    event.preventDefault();

    answer();
})