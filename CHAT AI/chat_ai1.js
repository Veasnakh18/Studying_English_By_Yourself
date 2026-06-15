<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini AI Search Engine</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .search-box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        input[type="text"] {
            width: 75%;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            width: 20%;
            padding: 10px;
            font-size: 16px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .result-item {
            background: #e9ecef;
            padding: 10px;
            margin-top: 10px;
            border-left: 5px solid #28a745;
            border-radius: 4px;
        }
        .no-result {
            color: #dc3545;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>

    <div class="search-box">
        <h2>🔍 Mini Google AI</h2>
        
        <form id="put" onsubmit="handleSearch(event)">
            <input type="text" id="searchQuery" placeholder="Try: javascript, gym, dinner..." required>
            <button type="submit">Search</button>
        </form>

        <div id="result"></div>
    </div>

    <script>
        // Our Small Knowledge Database
        const journalDatabase = [
            "I learned how to code a basic if-else condition in JavaScript today.",
            "Went to the gym, had a great workout, and felt super healthy.",
            "Spent the afternoon studying coding and fixing bugs in my web app.",
            "Cooked a delicious dinner and watched a movie with my family.",
            "Configured Node.js and npm on my laptop for my new AI project."
        ];

        // This function runs when the form is submitted
        function handleSearch(event) {
            // Prevent the web page from reloading when the form submits
            event.preventDefault(); 
            
            // 1. Get the values and elements using IDs
            const queryValue = document.getElementById("searchQuery").value.toLowerCase();
            const resultDiv = document.getElementById("result");
            
            // Clear past search results
            resultDiv.innerHTML = ""; 

            // Split the typed text into individual search words
            const searchWords = queryValue.split(" ");
            let matchCountTotal = 0;

            // 2. Loop & Conditions to match words
            journalDatabase.forEach(entry => {
                let entryLower = entry.toLowerCase();
                let matchesThisEntry = 0;

                // Condition: check if keywords match this row
                searchWords.forEach(word => {
                    if (entryLower.includes(word)) {
                        matchesThisEntry++;
                    }
                });

                // Condition: If a match is found, add it to the page
                if (matchesThisEntry > 0) {
                    matchCountTotal++;
                    
                    // Create a visual HTML block for the result
                    const item = document.createElement("div");
                    item.className = "result-item";
                    item.innerHTML = `<strong>Matched Entry:</strong> ${entry}`;
                    
                    // Inject it into the result container
                    resultDiv.appendChild(item);
                }
            });

            // Condition: If absolutely nothing matched
            if (matchCountTotal === 0) {
                resultDiv.innerHTML = `<p class="no-result">❌ No matches found for "${queryValue}". Try something else!</p>`;
            }
        }
    </script>

</body>
</html>