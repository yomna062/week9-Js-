<<<<<<< HEAD

const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
];


function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];


    document.getElementById("quote").innerText = `"${quote.text}"`;
    document.getElementById("author").innerText = `-- ${quote.author}`;


    document.getElementById("quote").classList.remove("d-none");
    document.getElementById("author").classList.remove("d-none");
}
=======

const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
    { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
];


function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];


    document.getElementById("quote").innerText = `"${quote.text}"`;
    document.getElementById("author").innerText = `-- ${quote.author}`;


    document.getElementById("quote").classList.remove("d-none");
    document.getElementById("author").classList.remove("d-none");
}
>>>>>>> fac7587a599603e0dfba2b663714367df0c95644
