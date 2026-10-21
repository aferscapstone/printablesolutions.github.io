/* =========================================================
   1. NAVIGATION & SCROLL HIGHLIGHTING
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  const mobileLinks = document.querySelectorAll(".nav-links a, .nav-links .quote-btn");
  const navMenu = document.getElementById("navMenu");

  // Automatically close mobile navigation menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });

  // Highlight navigation link based on scroll position
  window.addEventListener("scroll", () => {
    let current = "";
    const isAtBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50;

    if (isAtBottom) {
      current = "contact";
    } else {
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });
    }

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});

// Toggle Mobile Menu Container
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  if (nav) nav.classList.toggle("active");
}

/* =========================================================
   2. SCROLL TO TOP BUTTON
   ========================================================= */
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (scrollTopBtn) {
    if (window.scrollY > 1) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   3. CHAT WIDGET FUNCTIONS
   ========================================================= */
function toggleChat() {
  const chat = document.getElementById("chatBox");
  if (!chat) return;
  chat.style.display = (chat.style.display === "block") ? "none" : "block";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBody = document.getElementById("chatBody");
  if (!input || !chatBody) return;

  const message = input.value.trim();
  if (message === "") return;

  const messageRow = document.createElement("div");
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

/* =========================================================
   4. PRODUCTS PAGINATION & STATE MEMORY
   ========================================================= */
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumber = document.getElementById("pageNumber");

function showPage(pageNum) {
  sessionStorage.setItem("activeProductsPage", pageNum);

  if (pageNum === 1) {
    if (page1) page1.style.display = "block";
    if (page2) page2.style.display = "none";
    if (pageNumber) pageNumber.textContent = "Page 1 of 2";
    if (prevBtn) prevBtn.classList.add("disabled");
    if (nextBtn) nextBtn.classList.remove("disabled");
  } else {
    if (page1) page1.style.display = "none";
    if (page2) page2.style.display = "block";
    if (pageNumber) pageNumber.textContent = "Page 2 of 2";
    if (prevBtn) prevBtn.classList.remove("disabled");
    if (nextBtn) nextBtn.classList.add("disabled");
  }
}

// Restore saved page on load
let savedPage = window.location.hash === "#page-2" ? 2 : (parseInt(sessionStorage.getItem("activeProductsPage")) || 1);
showPage(savedPage);

// Button listeners with scroll prevention
if (nextBtn) {
  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation(); // Prevents link default anchor jumps
    showPage(2);
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation(); // Prevents link default anchor jumps
    showPage(1);
  });
}

/* =========================================================
   5. MAIN PRODUCT LIVE SEARCH (SEARCH ALL PAGES)
   ========================================================= */
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("mainProductSearch");
  const clearBtn = document.getElementById("clearSearchBtn");
  const allCards = document.querySelectorAll(".products-card");
  const pages = document.querySelectorAll(".products-page");
  const pagination = document.querySelector(".products-pagination");

  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();

    if (clearBtn) {
      clearBtn.style.display = query.length > 0 ? "block" : "none";
    }

    /* -----------------------------------------
       EMPTY SEARCH
       Restore normal pagination
       ----------------------------------------- */
    if (query === "") {
      allCards.forEach(card => {
        card.classList.remove("search-hidden");
      });

      if (pagination) {
        pagination.style.display = "flex";
      }

      // Restore whichever page was active
      const activePage =
        parseInt(sessionStorage.getItem("activeProductsPage")) || 1;

      showPage(activePage);

      return;
    }

    /* -----------------------------------------
       ACTIVE SEARCH
       Hide pagination
       ----------------------------------------- */
    if (pagination) {
      pagination.style.display = "none";
    }

    /* -----------------------------------------
       SEARCH EACH CARD
       ----------------------------------------- */
    pages.forEach(page => {

      let pageHasMatch = false;

      const cards = page.querySelectorAll(".products-card");

      cards.forEach(card => {

        const title =
          card.querySelector("h2")?.textContent.toLowerCase() || "";

        const description =
          card.querySelector("p")?.textContent.toLowerCase() || "";

        const matches =
          title.includes(query) ||
          description.includes(query);

        if (matches) {
          card.classList.remove("search-hidden");
          pageHasMatch = true;
        } else {
          card.classList.add("search-hidden");
        }
      });

      /*
       * Only show a page if it contains
       * at least one matching product.
       */
      page.style.display = pageHasMatch ? "block" : "none";
    });
  });

  /* -----------------------------------------
     CLEAR SEARCH BUTTON
     ----------------------------------------- */
  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      searchInput.value = "";

      searchInput.dispatchEvent(new Event("input"));

      searchInput.focus();
    });
  }
});

/* =========================================================
   6. CONTACT FORM & SUB-MENU ACTIONS
   ========================================================= */
function scrollToContact() {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
    const subjectInput = document.getElementById("subjectInput");
    if (subjectInput) {
      setTimeout(() => {
        subjectInput.value = "Requesting a Product Quote";
        subjectInput.focus();
      }, 500);
    }
  }
}

function showTarpaulin() {
  const home = document.getElementById("productsHome");
  const menu = document.getElementById("tarpaulinMenu");
  if (home && menu) {
    home.classList.remove("active");
    menu.classList.add("active");
  }
}

function backToProducts() {
  const home = document.getElementById("productsHome");
  const menu = document.getElementById("tarpaulinMenu");
  if (home && menu) {
    menu.classList.remove("active");
    home.classList.add("active");
  }
}