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
const Correct_answer = document.getElementById("Correct_answer");

const result_score = document.getElementById("result_score");
// const container = document.querySelector(".container");
const Assistant_1 = document.getElementById("Assistant_1");
const chat_Assistant = document.getElementById("chat_Assistant");

// form chat assistant

const btn_send = document.getElementById("btn_send");
const btn_close_Assistant = document.getElementById("btn_close_Assistant");
const show_it = document.getElementById("show_it");



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
    // container.style.backgroundColor = 'black';
    // container.style.color = 'white';
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
    
    <div>
    <div id="result_score">
    <div class="border rounded-2 border-primary bg-success p-2">
        <h2>Your Score For Exam : ${score}/8</h2>
    </div>
                    </div>
                    <div id="Correct_answer" class="border rounded-3 bg-dark w-100 h-auto">
                        <h2 class="d-flex justify-content-center align-items-center m-auto">Correct answer</h2>
                        <p class="m-3">1 . went</p>
                        <p class="m-3">2 . to</p>
                        <p class="m-3">3 . 1 . Shortened collective attention spans</p>
                        <p class="m-3">3 . 2 . Reduced deep, reflective reading habits</p>

                    </div>
                </div>

    
    `
    Assistant_1.innerHTML = show_btn_ass;
}

// btn_close_Assistant.addEventListener("click" , ()=>{
//     show_Assistant.style.display = 'none';
// })
// Assistant.addEventListener("click" , function(){
//     click_open_Assistant();
//     alert("hello")
// })


// function show_assistant(){
//     const data_assistant = [
//         {you : "" , assistant_ : ""},
//     ]
    
//     btn_send.addEventListener("click" , (e)=>{
//         e.preventDefault();
//         const input_chat_Assistant = document.getElementById("input_chat_Assistant").value;
//         data_assistant.forEach(chat_ai_ass =>{
//             const AI_assi = document.createElement("div");
//             if(input_chat_Assistant.toLowerCase().includes(chat_ai_ass.you)){
//                 AI_assi.innerHTML =`
//                 <p>You : ${input_chat_Assistant}</p>
//                 <p>You : yes , Hi</p>
//                 `
//                 chat_Assistant.appendChild(AI_assi);
//             }
//         });
//     });


// }
const assistant = `
<div  class="border rounded border-primary bg-secondary">
        <div class="border rounded-4 border-info bg-primary p-2">
                <p class="you">hello</p>
                <p class="Assistant">hi</p>
        </div>
    </div>
    <div id="btn_close_Assistant" class="btn btn-danger">Close</div>
`




Assistant_1.addEventListener("click" , ()=>{
    show_Assistant.style.display = 'block';
})


submit1.addEventListener("click" , function(event){
    event.preventDefault();
    show_it.style.display = 'block';
    answer();
})

let explain_answer = `
<div class="p-3 bg-white rounded shadow-sm border border-light text-black">
    <h2 class="h5 text-primary mb-3">Section 1: Grammar & Vocabulary</h2>
    <p class="mb-2"><strong>សំណួរទី ១:</strong> ចម្លើយត្រឹមត្រូវគឺ <b>"went"</b> ព្រោះនៅក្នុងប្រយោគមានពាក្យ "yesterday" (កាលពីម្សិលមិញ) ដែលបញ្ជាក់ពី Past Simple Tense។</p>
    <p class="mb-0"><strong>សំណួរទី ២:</strong> ចម្លើយត្រឹមត្រូវគឺ <b>"to"</b> ព្រោះឃ្លា "look forward to" ត្រូវដើរទន្ទឹមគ្នាជានិច្ចដែលមានន័យថា ទន្ទឹងរង់ចាំ។</p>
    <h3 class="h5 text-primary mb-3">1. She went to the library yesterday afternoon.</h3>
    <ul>
        <li>ពន្យល់៖ នៅក្នុងប្រយោគនេះមានពាក្យគន្លឹះគឺ "yesterday afternoon" (កាលពីម្សិលមិញ) ដែលជាពេលវេលាមួយជាក់លាក់ក្នុងអតីតកាល។ ដូច្នេះ យើងត្រូវប្រើទម្រង់កិរិយាសព្ទអតីតកាលធម្មតា (Past Simple)។ កិរិយាសព្ទដើមគឺ "go" ត្រូវប្តូរទៅជាទម្រង់អតីតកាលគឺ "went"។</li>
        <li>goes ប្រើសម្រាប់បច្ចុប្បន្នកាល (Present Simple)</li>
        <li>has gone ប្រើសម្រាប់បច្ចុប្បន្នកាលបរិបូណ៌ (Present Perfect)</li>
        </ul>
    <h3>2. Complete the sentence with the correct preposition: I am looking forward to seeing you at the conference next week.</h3>
    <ul>
        <li>ពន្យល់៖ នៅក្នុងភាសាអង់គ្លេស ឃ្លា "look forward to" គឺជាឃ្លាថេរ (Phrasal Verb) ដែលមានន័យថា "ទន្ទឹងរង់ចាំយ៉ាងអន្ទះសារ"។ បន្ទាប់ពីពាក្យ "to" នៅក្នុងឃ្លានេះ គឺត្រូវតែតាមដានដោយកិរិយាសព្ទថែម -ing (Gerund) ដែលក្នុងប្រយោគនេះគឺពាក្យ "seeing"។ ដូច្នេះ ធ្នាក់ (Preposition) ដែលត្រឹមត្រូវគឺ "to"។</li>
    </ul>
    <h1>Section 2: Reading Comprehension</h1>
    <h3>3. According to the text, what are the negative impacts of the internet? (Select all that apply)</h3>
    <p>ចម្លើយដែលត្រូវជ្រើសរើសគឺ៖</p>
    <ul>
        <li>Shortened collective attention spans (ធ្វើឱ្យរយៈពេលផ្ដោតអារម្មណ៍រួមខ្លីជាងមុន)</li>
        <li>Reduced deep, reflective reading habits (កាត់បន្ថយទម្លាប់អានបែបស៊ីជម្រៅ និងការពិចារណា)</li>
        <li>ពន្យល់៖ ប្រសិនបើយើងពិនិត្យមើលល្បះទីពីរនៅក្នុងអត្ថបទ៖ "some experts worry it has shortened our collective attention spans and reduced deep, reflective reading habits." (អ្នកជំនាញខ្លះបារម្ភថាវាបានធ្វើឱ្យរយៈពេលផ្ដោតអារម្មណ៍រួមរបស់យើងខ្លីជាងមុន និងកាត់បន្ថយទម្លាប់អានបែបស៊ីជម្រៅ និងការពិចារណា)។</li>
        <li>ចំណែកឯជម្រើស "Increased cost of information sharing" (បង្កើនតម្លៃនៃការចែករំលែកព័ត៌មាន) គឺមិនត្រឹមត្រូវទេ ព្រោះនៅក្នុងអត្ថបទបាននិយាយថា អ៊ីនធឺណិតធ្វើឱ្យការចែករំលែកព័ត៌មានមានភាពរហ័សទាន់ចិត្ត (instantaneous) ហើយមិនបានលើកឡើងពីការឡើងថ្លៃនោះឡើយ។</li>
    </ul>
</div>
`;
let explain_answer_eg = `
<div class="p-3 bg-white rounded shadow-sm border border-light text-black">
    <h2 class="h5 text-primary mb-3">Section 1: Grammar & Vocabulary</h2>
    <p class="mb-2"><strong>Question 1:</strong> The correct answer is <b>"went"</b> because the sentence contains the word "yesterday" (yesterday afternoon), which indicates the Past Simple Tense.</p>
    <p class="mb-0"><strong>Question 2:</strong> The correct answer is <b>"to"</b> because the phrase "look forward to" always goes together, meaning to anticipate something with pleasure.</p>
    <h3 class="h5 text-primary mb-3">1. She went to the library yesterday afternoon.</h3>
    <ul>
        <li>Explanation: In this sentence, the keyword is "yesterday afternoon", which refers to a specific time in the past. Therefore, we must use the Past Simple Tense. The base verb "go" must be changed to its past form, which is "went".</li>
        <li>goes is used for the present habitual actions (Present Simple)</li>
        <li>has gone is used for actions connected to the present (Present Perfect)</li>
    </ul>
    <h3>2. Complete the sentence with the correct preposition: I am looking forward to seeing you at the conference next week.</h3>
    <ul>
        <li>Explanation: In English, the phrase "look forward to" is a fixed phrasal verb meaning "to wait for something with excitement". After the word "to" in this specific idiom, it must be followed by a gerund (verb+ing), which in this sentence is "seeing". Therefore, the correct preposition is "to".</li>
    </ul>
    <h1>Section 2: Reading Comprehension</h1>
    <h3>3. According to the text, what are the negative impacts of the internet? (Select all that apply)</h3>
    <p>The correct choices to select are:</p>
    <ul>
        <li>Shortened collective attention spans</li>
        <li>Reduced deep, reflective reading habits</li>
        <li>Explanation: If we examine the second sentence in the text: "some experts worry it has shortened our collective attention spans and reduced deep, reflective reading habits." This directly confirms both options.</li>
        <li>On the other hand, the option "Increased cost of information sharing" is incorrect because the text states that the internet has made sharing information nearly instantaneous, and it does not mention anything about increasing costs.</li>
    </ul>
</div>
`;

let explain_answer_kh = `
<div class="p-3 bg-white rounded shadow-sm border border-light text-black">
    <h2 class="h5 text-primary mb-3">Section 1: Grammar & Vocabulary</h2>
    <p class="mb-2"><strong>សំណួរទី ១:</strong> ចម្លើយត្រឹមត្រូវគឺ <b>"went"</b> ព្រោះនៅក្នុងប្រយោគមានពាក្យ "yesterday" (កាលពីម្សិលមិញ) ដែលបញ្ជាក់ពី Past Simple Tense។</p>
    <p class="mb-0"><strong>សំណួរទី ២:</strong> ចម្លើយត្រឹមត្រូវគឺ <b>"to"</b> ព្រោះឃ្លា "look forward to" ត្រូវដើរទន្ទឹមគ្នាជានិច្ចដែលមានន័យថា ទន្ទឹងរង់ចាំ។</p>
    
    <h3 class="h6 text-secondary mt-4 mb-2">1. She went to the library yesterday afternoon.</h3>
    <ul>
        <li>ពន្យល់៖ នៅក្នុងប្រយោគនេះមានពាក្យគន្លឹះគឺ "yesterday afternoon" (កាលពីម្សិលមិញ) ដែលជាពេលវេលាមួយជាក់លាក់ក្នុងអតីតកាល។ ដូច្នេះ យើងត្រូវប្រើទម្រង់កិរិយាសព្ទអតីតកាលធម្មតា (Past Simple)។ កិរិយាសព្ទដើមគឺ "go" ត្រូវប្តូរទៅជាទម្រង់អតីតកាលគឺ "went"។</li>
        <li>goes ប្រើសម្រាប់បច្ចុប្បន្នកាល (Present Simple)</li>
        <li>has gone ប្រើសម្រាប់បច្ចុប្បន្នកាលបរិបូណ៌ (Present Perfect)</li>
    </ul>
    
    <h3 class="h6 text-secondary mt-4 mb-2">2. I am looking forward to seeing you at the conference next week.</h3>
    <ul>
        <li>ពន្យល់៖ នៅក្នុងភាសាអង់គ្លេស ឃ្លា "look forward to" គឺជាឃ្លាថេរ (Phrasal Verb) ដែលមានន័យថា "ទន្ទឹងរង់ចាំយ៉ាងអន្ទះសារ"។ បន្ទាប់ពីពាក្យ "to" នៅក្នុងឃ្លានេះ គឺត្រូវតែតាមដានដោយកិរិយាសព្ទថែម -ing (Gerund) ដែលក្នុងប្រយោគនេះគឺពាក្យ "seeing"។ ដូច្នេះ ធ្នាក់ (Preposition) ដែលត្រឹមត្រូវគឺ "to"។</li>
    </ul>
    
    <h2 class="h5 text-primary mt-4 mb-3">Section 2: Reading Comprehension</h2>
    <h3 class="h6 text-secondary mb-2">3. According to the text, what are the negative impacts of the internet?</h3>
    <p>ចម្លើយដែលត្រូវជ្រើសរើសគឺ៖</p>
    <ul>
        <li>Shortened collective attention spans (ធ្វើឱ្យរយៈពេលផ្ដោតអារម្មណ៍រួមខ្លីជាងមុន)</li>
        <li>Reduced deep, reflective reading habits (កាត់បន្ថយទម្លាប់អានបែបស៊ីជម្រៅ និងការពិចារណា)</li>
        <li>ពន្យល់៖ ប្រសិនបើយើងពិនិត្យមើលល្បះទីពីរនៅក្នុងអត្ថបទ៖ "some experts worry it has shortened our collective attention spans and reduced deep, reflective reading habits." (អ្នកជំនាញខ្លះបារម្ភថាវាបានធ្វើឱ្យរយៈពេលផ្ដោតអារម្មណ៍រួមរបស់យើងខ្លីជាងមុន និងកាត់បន្ថយទម្លាប់អានបែបស៊ីជម្រៅ និងការពិចារណា)។</li>
        <li>ចំណែកឯជម្រើស "Increased cost of information sharing" (បង្កើនតម្លៃនៃការចែករំលែកព័ត៌មាន) គឺមិនត្រឹមត្រូវទេ ព្រោះនៅក្នុងអត្ថបទបាននិយាយថា អ៊ីនធឺណិតធ្វើឱ្យការចែករំលែកព័ត៌មានមានភាពរហ័សទាន់ចិត្ត (instantaneous) ហើយមិនបានលើកឡើងពីការឡើងថ្លៃនោះឡើយ។</li>
    </ul>
</div>
`;
let explain_answer_en = `
<div class="p-3 bg-white rounded shadow-sm border border-light text-black">
    <h2 class="h5 text-primary mb-3">Section 1: Grammar & Vocabulary</h2>
    <p class="mb-2"><strong>Question 1:</strong> The correct answer is <b>"went"</b> because the sentence contains the keyword "yesterday" (yesterday afternoon), which indicates the Past Simple Tense.</p>
    <p class="mb-0"><strong>Question 2:</strong> The correct answer is <b>"to"</b> because the phrase "look forward to" is an idiom that always goes together, meaning to anticipate something with pleasure.</p>
    
    <h3 class="h6 text-secondary mt-4 mb-2">1. She went to the library yesterday afternoon.</h3>
    <ul>
        <li>Explanation: In this sentence, the keyword is "yesterday afternoon", which refers to a specific time in the past. Therefore, we must use the Past Simple Tense. The base verb "go" must be changed to its past form, which is "went".</li>
        <li>goes is used for habitual actions in the present (Present Simple)</li>
        <li>has gone is used for actions connected to the present (Present Perfect)</li>
    </ul>
    
    <h3 class="h6 text-secondary mt-4 mb-2">2. I am looking forward to seeing you at the conference next week.</h3>
    <ul>
        <li>Explanation: In English, the phrase "look forward to" is a fixed phrasal verb meaning "to wait for something with excitement". After the word "to" in this specific idiom, it must be followed by a gerund (verb+ing), which in this sentence is "seeing". Therefore, the correct preposition is "to".</li>
    </ul>
    
    <h2 class="h5 text-primary mt-4 mb-3">Section 2: Reading Comprehension</h2>
    <h3 class="h6 text-secondary mb-2">3. According to the text, what are the negative impacts of the internet?</h3>
    <p>The correct choices to select are:</p>
    <ul>
        <li>Shortened collective attention spans</li>
        <li>Reduced deep, reflective reading habits</li>
        <li>Explanation: If we examine the second sentence in the text: "some experts worry it has shortened our collective attention spans and reduced deep, reflective reading habits." This directly confirms both options.</li>
        <li>On the other hand, the option "Increased cost of information sharing" is incorrect because the text states that the internet has made sharing information nearly instantaneous, and it does not mention anything about increasing costs.</li>
    </ul>
</div>
`;
const data_assistant = [
    { you: "hello" ,  assistant_: "Yes, Hi 👋" },
    { you: "hi" ,  assistant_: "Yes, Hi 👋" },
    { you: "ពន្យល់ចម្លើយ", assistant_: explain_answer },
    { you: "Translated into English", assistant_: explain_answer },
    { you: "speak in english", assistant_: explain_answer_eg },
    { you: "explain the answer", assistant_: explain_answer_eg },
    { you: "speak in English", assistant_: explain_answer_eg },
    { you: "ហេតុអ្វីបានជាត្រឹមត្រូវ", assistant_: explain_answer_kh },
    { you: "why", assistant_: explain_answer_en },
];
btn_send.addEventListener("click" , (e)=>{
    e.preventDefault();
    const input_chat_Assistant = document.getElementById("input_chat_Assistant").value;
    if (input_chat_Assistant === "") return;

    const match_chat = data_assistant.find(chat_ai_assi => {
        return input_chat_Assistant.includes(chat_ai_assi.you.toLowerCase());
    });

    const make_chat = document.createElement("div");
    make_chat.className = "mb-3 p-2 ";

    if (match_chat) {
        make_chat.innerHTML = `
        <div class="flex_user">
            <img style="border:1px solid blue;border-radius:50%;width:30px;height:30px" class="border rounded-5 border-danger " src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="">
            <p class="user"><strong>You :</strong> ${document.getElementById("input_chat_Assistant").value}</p>
        </div>


    <div class="flex">
        <img style="border:1px solid blue;border-radius:50%;width:30px;height:30px" class="border rounded-5 border-danger " src="https://www.shutterstock.com/image-vector/chat-bot-icon-virtual-smart-600nw-2478937553.jpg" alt="">
        <div><strong>Assistant :</strong> ${match_chat.assistant_}</div>
    </div>
        `;
    } else {
        make_chat.innerHTML = `
            <p><strong>You :</strong> ${document.getElementById("input_chat_Assistant").value}</p>
            <p><strong>Assistant :</strong> What are you talking about? 🤔</p>
        `;
    }

    chat_Assistant.appendChild(make_chat);

    document.getElementById("input_chat_Assistant").value = "";
    
})

// close assistant 
btn_close_Assistant.addEventListener("click" , (event)=>{
    event.preventDefault();

    show_Assistant.style.display = 'none';
})