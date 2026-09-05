document.addEventListener("DOMContentLoaded", function () {
    console.log("GLOBAL SEARCH JS IS WORKING");
    const searchInput = document.getElementById("globalSearch");
    const searchResults = document.getElementById("searchResults");
    const searchButton = document.getElementById("globalSearchBtn");

    if (!searchInput || !searchResults) return;

    // =========================================
    // GLOBAL PRODUCT CATALOG
    // =========================================
    const globalProducts = [
        {
            name: "Tarpaulin & Flex",
            category: "Tarpaulin",
            keywords: ["tarpaulin", "tarp", "flex", "7 oz", "8 oz", "10 oz", "13 oz", "15 oz", "18 oz", "20 oz", "advantage", "premium", "blockout"],
            icon: "fa-scroll",
            page: "tarpaulinindex.html"
        },
        {
            name: "PVC Boards / Xintra",
            category: "PVC Boards",
            keywords: ["pvc", "xintra", "pvc board", "board"],
            icon: "fa-layer-group",
            page: "pvcindex.html"
        },
        {
            name: "Acrylic Sheets",
            category: "Acrylic",
            keywords: ["acrylic", "acrylic sheet", "clear acrylic", "colored acrylic"],
            icon: "fa-square",
            page: "acrylicindex.html"
        },
        {
            name: "Stickers / Vinyls",
            category: "Stickers",
            keywords: ["sticker", "stickers", "vinyl", "sticker vinyl"],
            icon: "fa-tags",
            page: "stickersindex.html"
        },
        {
            name: "Photo Papers",
            category: "Photo Papers",
            keywords: ["photo", "photo paper", "photopaper", "glossy paper", "matte paper"],
            icon: "fa-file-image",
            page: "ppindex.html"
        },
        {
            name: "Sublimation Papers",
            category: "Sublimation",
            keywords: ["sublimation", "sublimation paper", "sublimation papers"],
            icon: "fa-print",
            page: "subliindex.html"
        },
        {
            name: "Accessories & Banners",
            category: "Accessories",
            keywords: ["accessories", "banner", "banners", "x banner", "roll up"],
            icon: "fa-toolbox",
            page: "acceindex.html"
        },
        {
            name: "Avery Dennison Products",
            category: "Avery Dennison",
            keywords: ["avery", "avery dennison", "vinyl", "450", "4500", "5500"],
            icon: "fa-layer-group",
            page: "othersindex.html"
        }
    ];

    function findMatchingProduct(term) {
        if (!term) return null;
        return globalProducts.find(function (product) {
            const productName = product.name.toLowerCase();
            const category = product.category.toLowerCase();
            const keywordMatch = product.keywords.some(function (keyword) {
                return keyword.toLowerCase().includes(term);
            });
            return productName.includes(term) || category.includes(term) || keywordMatch;
        });
    }

    function executeSearch() {
    const searchText = searchInput.value.toLowerCase().trim();
    if (searchText === "") return;

    const matchedProduct = findMatchingProduct(searchText);

    if (matchedProduct) {
        const currentPage = window.location.pathname.split("/").pop();
        const targetUrl = `${matchedProduct.page}?search=${encodeURIComponent(searchText)}`;

        if (currentPage === matchedProduct.page) {
            // 1. If already on the same page, update the URL WITHOUT creating a new history entry
            window.history.replaceState({}, '', targetUrl);
            searchResults.style.display = "none";

            // Re-run your category filter logic directly for the new search
            const query = searchText.toLowerCase();
            let targetCategory = null;
            if (query.includes("flex")) targetCategory = "flex";
            else if (query.includes("blockout")) targetCategory = "blockout";
            else if (query.includes("premium")) targetCategory = "premium";
            else if (query.includes("advantage") || query.includes("tarp")) targetCategory = "advantage";

            if (targetCategory) {
                const categoryElement = document.querySelector(`.tarp-category[data-product="${targetCategory}"]`);
                if (categoryElement) {
                    document.querySelectorAll(".tarp-category").forEach(el => el.classList.remove("active"));
                    categoryElement.classList.add("active");
                    categoryElement.click();
                }
            }
        } else {
            // 2. If navigating to a DIFFERENT page, use replace so the intermediate search doesn't stack in history
            window.location.replace(targetUrl);
        }
    } else {
        alert("No product found for: " + searchText);
    }
}

    // 1. Live Input Filter
    searchInput.addEventListener("input", function () {
        const searchText = this.value.toLowerCase().trim();
        searchResults.innerHTML = "";

        if (searchText === "") {
            searchResults.style.display = "none";
            return;
        }

        const results = globalProducts
            .map(function (product) {
                const productName = product.name.toLowerCase();
                const category = product.category.toLowerCase();
                const matchedKeyword = product.keywords.find(function (keyword) {
                    return keyword.toLowerCase().includes(searchText);
                });

                let matchType = null;
                if (productName.includes(searchText)) {
                    matchType = `Matched Name: "${product.name}"`;
                } else if (matchedKeyword) {
                    matchType = `Matched Tag: "${matchedKeyword}"`;
                } else if (category.includes(searchText)) {
                    matchType = `Matched Category: "${product.category}"`;
                }

                return { ...product, matchType: matchType };
            })
            .filter(product => product.matchType !== null);

        if (results.length === 0) {
            searchResults.innerHTML = `<div class="no-results">No products found for "${searchText}".</div>`;
            searchResults.style.display = "block";
            return;
        }

        results.forEach(function (product) {
            const resultItem = document.createElement("a");
            resultItem.href = `${product.page}?search=${encodeURIComponent(searchText)}`;
            resultItem.className = "search-result";
            resultItem.innerHTML = `
                <i class="fa-solid ${product.icon}"></i>
                <div class="search-result-text">
                    <span class="search-result-title">${product.name}</span>
                    <span class="search-result-match">${product.matchType}</span>
                </div>
            `;
            searchResults.appendChild(resultItem);
        });

        searchResults.style.display = "block";
    });

    // 2. Single Global Keydown Listener for Enter Key
    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            executeSearch();
        }
    });

    // 3. Search Button Listener
    if (searchButton) {
        searchButton.addEventListener("click", function (e) {
            e.preventDefault();
            executeSearch();
        });
    }

    // 4. Hide Dropdown on Click Outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".product-search")) {
            searchResults.style.display = "none";
        }
    });

    // =========================================
    // URL PARAMETER AUTO-SELECTION (REPLACES HISTORY)
    // =========================================
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search");

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        let targetCategory = null;

        if (query.includes("flex")) {
            targetCategory = "flex";
        } else if (query.includes("blockout")) {
            targetCategory = "blockout";
        } else if (query.includes("premium")) {
            targetCategory = "premium";
        } else if (query.includes("advantage") || query.includes("tarp")) {
            targetCategory = "advantage";
        }

        if (targetCategory) {
            const categoryElement = document.querySelector(`.tarp-category[data-product="${targetCategory}"]`);
            if (categoryElement) {
                document.querySelectorAll(".tarp-category").forEach(el => el.classList.remove("active"));
                categoryElement.classList.add("active");
                
                // Fire click natively without duplicating history parameters
                categoryElement.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));

                // Clean the URL history stack immediately
                const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                window.history.replaceState({}, '', cleanUrl);
            }
        }
    }
});