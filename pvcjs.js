const pvcProducts = {

    lite: {
        title: "PVC BOARD LITE",
	icon: "fa-file",
        description:
            "Lightweight and versatile PVC board ideal for indoor signage, displays, and creative applications.<br>Easy to handle, cut and fabricate.<br><br>Available size : 4ft x 8ft",

        rows: [
            ["1.5 mm", "In Stock"],
            ["2 mm", "In Stock"],
            ["3 mm", "In Stock"],
            ["4 mm", "In Stock"],
            ["5 mm", "In Stock"],
            ["6 mm", "In Stock"],
            ["12 mm", "In Stock"]
        ]
    },


    hard: {
        title: "PVC BOARD HARD",
	icon: "fa-cube",
        description:
            "Durable PVC board designed for signage, displays and general fabrication.<br>Provides a firm and reliable surface for various applications.<br><br>Available size : 4ft x 8ft",
        
	rows: [
            ["1.5 mm", "In Stock"],
            ["2 mm", "In Stock"],
            ["3 mm", "In Stock"],
            ["4 mm", "In Stock"],
            ["5 mm", "In Stock"],
            ["6 mm", "In Stock"],
            ["12 mm", "In Stock"]
        ]
    },


    superhard: {
        title: "PVC SUPER HARD",
	icon: "fa-layer-group",
        description:
            "Extra-rigid PVC board designed for demanding applications where added strength and durability are needed.<br>Ideal for demanding signage and fabrication projects.<br><br>Available size : 4ft x 8ft",

        rows: [
            ["1.5 mm", "In Stock"],
            ["3 mm", "In Stock"],
            ["5 mm", "In Stock"]
        ]
    },


    highimpact: {
        title: "PVC SHEET (High Impact)",
 	icon: "fa-bolt",
        description:
            "Glossy high-impact PVC sheet suitable for applications requiring a smooth and durable surface.<br><br>Available size : 4ft x 8ft",

        rows: [
            ["0.5 mm", "In Stock"],
            ["0.7 mm", "In Stock"],
            ["1 mm", "In Stock"]
        ]
    },


    dboard: {
        title: "D-BOARD",
	icon: "fa-table-cells-large",
        description:
            "Lightweight and rigid board suitable for displays, signage, mounting, and other creative applications.<br>Easy to handle and work with.<br><br>Available size : 4ft x 8ft",

        rows: [
            ["10 mm", "In Stock"],
            ["16 mm", "In Stock"]
        ]
    },


    fboard: {
        title: "FOAM BOARD",
	icon: "fa-square",
        description:
            "Lightweight foam board with a smooth surface, ideal for displays, presentations, signage, and creative mounting applications.<br><br>Available size : 4ft x 8ft",

        rows: [
            ["5 mm", "In Stock"]
        ]
    }

};

const pvcCategories = document.querySelectorAll(".pvc-category");

const productTitle = document.getElementById("productTitle");
const productDescription = document.getElementById("productDescription");
const productNote = document.getElementById("productNote");
const productTableBody = document.getElementById("productTableBody");
const productIcon = document.getElementById("productIcon");

pvcCategories.forEach(category => {

    category.addEventListener("click", function () {

        // Remove active from all cards
        pvcCategories.forEach(item => {
            item.classList.remove("active");
        });

        // Make clicked card active
        this.classList.add("active");

        // Get product name
        const productName = this.dataset.product;

        // Get product data
        const product = pvcProducts[productName];

        // Change title
        productTitle.textContent = product.title;

        // Change description
        productDescription.innerHTML = product.description;

	productIcon.className = "";
	productIcon.classList.add("fa-solid");
	productIcon.classList.add(product.icon);

        // Clear old table
        productTableBody.innerHTML = "";

        // Create new table rows
        product.rows.forEach(row => {

            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${row[0]}</td>
                <td>
                    <span class="stock">
                        <i class="fa-solid fa-circle-check"></i>
                        ${row[1]}
                    </span>
                </td>
            `;

            productTableBody.appendChild(tr);

        });

    });

});