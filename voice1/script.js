const output = document.getElementById('assistant-window');
const startBtn = document.getElementById('start-btn');

function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);

    // Append assistant message to window
    const msg = document.createElement('div');
    msg.className = 'message assistant-message';
    msg.innerText = text;
    output.appendChild(msg);
    output.scrollTop = output.scrollHeight;
}

function userMessage(text) {
    const msg = document.createElement('div');
    msg.className = 'message user-message';
    msg.innerText = text;
    output.appendChild(msg);
    output.scrollTop = output.scrollHeight;
}

function startListening() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        userMessage(command);
        handleCommand(command);
    };

    recognition.onerror = (event) => {
        speak("Sorry, I didn't catch that. Please try again.");
    };
}

function handleCommand(command) {
    if(command.includes("wikipedia")) {
        const query = command.replace("wikipedia", "").trim();
        speak("Searching Wikipedia for " + query);
        window.open("https://en.wikipedia.org/wiki/" + encodeURIComponent(query));
    }
    else if(command.includes("open youtube")) {
        speak("Opening YouTube");
        window.open("https://youtube.com");
    }
    else if(command.includes("open google")) {
        speak("Opening Google");
        window.open("https://google.com");
    }
     else if(command.includes("open flipkart")) {
        speak("lets enjoy the shopping");
        window.open("https://www.flipkart.com/");
    }
    else if(command.includes("open redbus")) {
        speak("Opening redbus");
        window.open("https://www.redbus.in/");
    }
    else if(command.includes("open spotify")) {
        speak("feel the music");
        window.open("https://open.spotify.com/");
    }
    else if(command.includes("open bookmyshow")) {
        speak(" enjoy the movies");
        window.open("https://in.bookmyshow.com/");
    }
        
    else if (command.includes("open whatsapp")) {
         speak("Opening WhatsApp");
        window.open("https://web.whatsapp.com/");
    }

    else if (command.includes("open facebook")) {
        speak("Opening Facebook");
        window.open("https://www.facebook.com/");
    }

    else if (command.includes("open chatgpt")) {
        speak("Opening Chat GPT");
        window.open("https://chat.openai.com/");
}

    else if (command.includes("open instagram")) {
        speak("Opening Instagram");
        window.open("https://www.instagram.com/");
    }

    else if (command.includes("open telegram")) {
        speak("Opening Telegram");
        window.open("https://web.telegram.org/");
    }
    else if (command.includes("play the song")) {
        speak("playing the song gehra hua ");
        window.open("https://youtu.be/GX9x62kFsVU?si=69ttG2Aug9hekwxO");
    }
     else if (command.includes("play the song")) {
        speak("playing the song gehra hua ");
        window.open("https://youtu.be/GX9x62kFsVU?si=69ttG2Aug9hekwxO");
    }


    else if(command.includes("whats the time")) {
        const now = new Date();
        const time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        speak("The current time is " + time);
    }
    else if(command.includes("tell me a joke")) {
        const joke = "Why did the computer show up at work late? It had a hard drive!";
        speak(joke);
    }
    else {
        speak("Sorry, I can't do that yet.");
    }
}

startBtn.addEventListener('click', startListening);
