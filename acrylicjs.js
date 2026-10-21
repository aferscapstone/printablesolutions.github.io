const acrylicProducts = {

    clear: {
        title: "ACRYLIC CLEAR",
	icon: "fa-gem",
        description:
            "Crystal-clear acrylic sheets with a clean, glass-like appearance and smooth surface.<br>Ideal for signage, displays, protective covers, partitions, and fabrication projects.<br><br>Available Sizes:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 4 ft x 8 ft<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 4 ft x 6 ft",

        rows: [
	    ["1.5 mm", "In Stock"],
            ["2 mm", "In Stock"],
            ["3 mm", "In Stock"],
            ["4 mm", "In Stock"],
            ["5 mm", "In Stock"],
            ["6 mm", "In Stock"],
            ["12 mm", "In Stock"],
	    ["19 mm", "In Stock"],
        ]
    },


    colored: {
        title: "ACRYLIC COLORED",
	icon: "fa-palette",
        description:
            "Acrylic sheets available in a range of solid colors for vibrant and eye-catching designs.<br>Suitable for signage, displays, decorative pieces, and custom fabrication.<br><br>Available Size: 4 ft x 8 ft",

        rows: [
            ["2 mm", "In Stock"],
            ["3 mm", "In Stock"],
            ["4.5 mm", "In Stock"],
            ["6 mm", "In Stock"],
            ["10 mm", "In Stock"]
        ]
    },


    frosted: {
        title: "ACRYLIC FROSTED",
	icon: "fa-layer-group",
        description:
            "Frosted acrylic sheets with a soft, translucent finish that provides privacy while allowing light to pass through.<br>Well-suited for partitions, signagem displays, and decorative installations.<br><br>Available Size: 4 ft x 8 ft",

        rows: [
            ["3 mm", "In Stock"]
        ]
    }
};

const acrylicCategories = document.querySelectorAll(".acrylic-category");

const productTitle = document.getElementById("productTitle");
const productDescription = document.getElementById("productDescription");
const productTableBody = document.getElementById("productTableBody");


acrylicCategories.forEach(category => {

    category.addEventListener("click", function () {

        // Remove active from all cards
        acrylicCategories.forEach(item => {
            item.classList.remove("active");
        });

        // Make clicked card active
        this.classList.add("active");

        // Get product name
        const productName = this.dataset.product;

        // Get product data
        const product = acrylicProducts[productName];

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