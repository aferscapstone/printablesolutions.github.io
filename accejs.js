const acceProducts = {

    banners: {
        title: "BANNERS",
	icon: "fa-flag",
        description:
            "Versatile banner materials suited for advertising displays, event promotions,<br>storefronts, and other visual signage needs.",

        rows: [
            ["X-Banner Premium", "BANNER-X-AP-200x50", "Black & Grey", "2'x 5'", "In Stock"],
            ["X-Banner Premium", "BANNER-X-AP-260x60", "Black & Grey", "2.6'x 6'", "In Stock"],
            ["Roll Up Banner ALL Aluminum", "BANNER-R-AA-200x50", "Beige", "2'x 5'", "In Stock"],
            ["Roll Up Banner ALL Aluminum", "BANNER-R-AA-275x65", "Beige", "2.75'x 6.5", "In Stock"]
        ]
    },


    eyelets: {
        title: "EYELETS NICKEL PLATED",
	icon: "fa-circle-dot",
        description:
            "Nickel-plated finishing rings that provide clean, reinforced openings for mounting and<br>securing banners and tarpaulins.",

        rows: [
            ["Eyelet #3", "EYELET-3-N", "Nickel", "10mm Inner 15mm Outer", "In Stock"],
            ["Eyelet #4", "EYELET-4-N", "Nickel", "10mm Inner 17mm Outer", "In Stock"],
            ["Eyelet #4 AUTOMATIC", "EYELET-4-NA", "Nickel", "10mm", "In Stock"],
            ["Eyelet #5", "EYELET-5-N", "Nickel", "12mm Inner 19mm Outer", "In Stock"],
            ["Eyelet #6", "EYELET-6-N", "Nickel", "12mm Inner 21mm Outer", "In Stock"]
        ]
    },


    punchers: {
        title: "PUNCHERS for EYELETS",
	icon: "fa-screwdriver-wrench",
        description:
            "Precision tools for creating consistent holes before installing eyelets,<br>available for different eyelet sizes and requirements.",

        rows: [
            ["Puncher with Metal base<br>For Eyelets (#3, #4, #5 & #6)", "PUCHER-101", "Blue", "NA", "In Stock"],
            ["Puncher Automatic - #4 Automatic", "PUCHER-110", "Blue", "NA", "In Stock"]
        ]
    },


    glue: {
        title: "Glue for Acrylics & Tarps",
 	icon: "fa-bottle-droplet",
        description:
            "Adhesive solutions for joining acrylic, tarpaulin, and compatible materials during fabrication, assembly, and repair.",

        rows: [
            ["Glue for Acrylic/Tarp - Container(Plastic)", "GLUE AC/TARP", "Clear", "NA", "In Stock"]
        ]
    }

};

const acceCategories = document.querySelectorAll(".acce-category");

const productTitle = document.getElementById("productTitle");
const productDescription = document.getElementById("productDescription");
const productTableBody = document.getElementById("productTableBody");
const productIcon = document.getElementById("productIcon");

acceCategories.forEach(category => {

    category.addEventListener("click", function () {

        // Remove active from all cards
        acceCategories.forEach(item => {
            item.classList.remove("active");
        });

        // Make clicked card active
        this.classList.add("active");

        // Get product name
        const productName = this.dataset.product;

        // Get product data
        const product = acceProducts[productName];

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
		<td>${row[1]}</td>
		<td>${row[2]}</td>
		<td>${row[3]}</td>
                <td>
                    <span class="stock">
                        <i class="fa-solid fa-circle-check"></i>
                        ${row[4]}
                    </span>
                </td>
            `;

            productTableBody.appendChild(tr);

        });

    });

});