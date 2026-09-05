/*
document.addEventListener("DOMContentLoaded", () =>
{ 
	const navLinks = document.querySelectorAll('.nav-links a');
	navLinks.forEach(link => 
	{ 
		link.addEventListener('click', function() 
		{ 
			navLinks.forEach(el => el.classList.remove('active'));
			this.classList.add('active'); 
		});
	}); 
});
*/
function toggleChat() 
{ 
	const chat = document.getElementById("chatBox");
	if(chat.style.display === "block") 
	{ 
		chat.style.display = "none"; 
	} else 
	{ 
		chat.style.display = "block"; 
	} 
} 
function sendMessage() 
{ 
	const input = document.getElementById("userInput"); 
	const chatBody = document.getElementById("chatBody"); 
	const message = input.value.trim(); 
	if (message === "") return; const messageRow = document.createElement("div"); 
	messageRow.style.display = "flex"; 
	messageRow.style.justifyContent = "flex-end"; 
	messageRow.style.margin = "8px 0"; 
	const userMessage = document.createElement("p"); 
	userMessage.textContent = message; 
	userMessage.style.textAlign = "right"; 
	userMessage.style.background = "#345181";
	userMessage.style.color = "white"; 
	userMessage.style.padding = "8px 12px"; 
	userMessage.style.borderRadius = "15px"; 
	userMessage.style.margin = "8px"; 
	userMessage.style.display = "inline-block"; 
	userMessage.style.maxWidth = "80%"; 
	messageRow.appendChild(userMessage); 
	chatBody.appendChild(messageRow); 
	chatBody.scrollTop = chatBody.scrollHeight; 
	
	input.value = ""; 
} 
const scrollTopBtn = document.getElementById("scrollTopBtn"); 
window.onscroll = function () 
{ 
	if(window.scrollY > 1) 
	{ 
		scrollTopBtn.style.display = "block"; 
	} else 
	{ 
		scrollTopBtn.style.display = "none"; 
	} 
}; 
function scrollToTop() 
{ 
	const scrollInterval = setInterval ( function() 
	{ 
		if(window.scrollY > 0) 
		{ 
			window.scrollBy(0, -600); 
		} else 
		{ 
			clearInterval(scrollInterval); 
		} 
	},10 
	); 
}
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => 
{
    let current = "";
    
    // Check if user has scrolled to the very bottom of the page
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;

    if (isAtBottom) {
        // Force the last section (Contact Us) to be active when at the bottom
        current = "contact";
    } else {
        sections.forEach(section =>
        {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.offsetHeight;
            
            if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight)
            {
                current = section.getAttribute("id");
            }
        });
    }

    navLinks.forEach(link => 
    {
        link.classList.remove("active");
        
        if (link.getAttribute("href") === "#" + current)
        {
            link.classList.add("active");
        }
    });
});
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const pageNumber = document.getElementById("pageNumber");

nextBtn.addEventListener("click", function(e)
{
	e.preventDefault();
	
	page1.style.display = "none";
	page2.style.display = "block";
	
	pageNumber.textContent = "Page 2 of 2";

	nextBtn.classList.add("disabled");
	prevBtn.classList.remove("disabled");
}
);
prevBtn.addEventListener("click", function(e)
{
	e.preventDefault();
	
	page2.style.display = "none";
	page1.style.display = "block";

	pageNumber.textContent = "Page 1 of 2";

	prevBtn.classList.add("disabled");
	nextBtn.classList.remove("disabled");
}
);
// Scroll to Contact Section and Auto-fill Quote Subject
function scrollToContact() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        
        // Target the subject input directly by its new ID
        const subjectInput = document.getElementById("subjectInput");
        if (subjectInput) {
            setTimeout(() => {
                subjectInput.value = "Requesting a Product Quote";
                subjectInput.focus();
            }, 500); // 500ms delay matches the smooth scroll time
        }
    }
}

// Scroll to Top Function (Included just in case)
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showTarpaulin()
{
	document.getElementById("productsHome").classList.remove("active");
	document.getElementById("tarpaulinMenu").classList.add("active");
}

function backToProducts()
{
	document.getElementById("tarpaulinMenu").classList.remove("active");
	document.getElementById("productsHome").classList.add("active");
}

function toggleMenu() {
    var nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}

// NEW: Automatically close mobile menu when a link is clicked
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a, .nav-links .quote-btn");
    const navMenu = document.getElementById("navMenu");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navMenu.classList.contains("active")) {
                navMenu.classList.remove("active");
            }
        });
    });
});