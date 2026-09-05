document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // ELEMENTS
    // =========================================

    const categories = document.querySelectorAll(".stickers-category");

    const productTitle = document.getElementById("productTitle");
    const productDescription = document.getElementById("productDescription");
    const productIcon = document.getElementById("product-icon");

    const laminatingOptions = document.getElementById("laminatingOptions");
    const stickerOptions = document.getElementById("stickerOptions");

    const tableBody = document.getElementById("productTableBody");


    // =========================================
    // PRODUCT DATA
    // =========================================

    const products = {

        laminating: {
            title: "LAMINATING FILM",
            description: "High-quality laminating film for protecting and enhancing printed materials.",
            icon: "fa-scroll",
		
	    options: {
		lite: [
		{
			description: "Laminating Film Lite - 50 microns",
			itemNo: "LFK-001CG",
			color: "Clear Glossy",
			measurement: "4.5'x 164'",
			status: "In Stock"
		},
		{
			description: "Laminating Film Lite - 50 microns",
			itemNo: "LFK-001CM",
			color: "Clear Matte",
			measurement: "4.5'x 164'",
			status: "In Stock"
		}
		],
		premium: [
		{
			description: "Laminating Film Premium - 80 microns",
			itemNo: "LFK-002CG",
			color: "Clear Glossy",
			measurement: "4.5'x 164'",
			status: "In Stock"
		},
		{
			description: "Laminating Film Premium - 80 microns",
			itemNo: "LFK-002CM",
			color: "Clear Matte",
			measurement: "4.5'x 164'",
			status: "In Stock"
		}
		]
        }
	},

        stickers: {
            title: "STICKERS / VINYLS",
            description: "Quality sticker and vinyl materials suitable for various printing applications.",
            icon: "fa-tags",
	
		options: {
		economy: [
		{
			description: "Economy Vinyl Sticker - 80 microns",
			itemNo: "EC-001WG",
			color: "White Glossy",
			measurement: "4.5'x 164'",
			status: "In Stock"
		},
		{
			description: "Economy Vinyl Sticker - 80 microns",
			itemNo: "EC-001WM",
			color: "White Matte",
			measurement: "4.5'x 164'",
			status: "In Stock"
		}
		],
		general: [
		{
			description: "General Purpose Vinyl Sticker - 100 microns",
			itemNo: "GP-002WG",
			color: "White Glossy",
			measurement: "4.5'x 164'",
			status: "In Stock"
		},
		{
			description: "General Purpose Vinyl Sticker - 100 microns",
			itemNo: "GP-002WM",
			color: "White Matte",
			measurement: "4.5'x 164'",
			status: "In Stock"
		}
		],
		bubblefree: [
		{
			description: "Bubble Free Vinyl Sticker - 100 microns",
			itemNo: "BF-004WG",
			color: "White Glossy",
			measurement: "4.5'x 164'",
			status: "In Stock"
		},
		{
			description: "Bubble Free Vinyl Sticker - 100 microns",
			itemNo: "BF-004WM",
			color: "White Matte",
			measurement: "4.5'x 164'",
			status: "In Stock"
		}
		],
		transparent: [
		{
			description: "Transparent Vinyl Sticker - 100 microns",
			itemNo: "CV-100TG",
			color: "Transparent Glossy",
			measurement: "4.5'x 164'",
			status: "In Stock"
		},
		{
			description: "Transparent Vinyl Sticker - 100 microns",
			itemNo: "CV-100TM",
			color: "Transparent Matte",
			measurement: "4.5'x 164'",
			status: "In Stock"
		}
		]
        }
		
		
        },

        frosted: {
            title: "FROSTED STICKER",
            description: "Frosted sticker material providing a stylish translucent appearance.",
            icon: "fa-snowflake"
        },

        cutout: {
            title: "CUT OUT GLOSSY",
            description: "Glossy sticker material designed for cut-out applications.",
            icon: "fa-scissors"
        },

        blackback: {
            title: "BLACK BACK STICKER",
            description: "Black back sticker material for applications requiring an opaque backing.",
            icon: "fa-square"
        },

        pp: {
            title: "PP STICKER",
            description: "Durable PP sticker material suitable for various applications.",
            icon: "fa-note-sticky"
        },

        others: {
            title: "OTHER STICKERS",
            description: "Other available sticker materials and specialty products.",
            icon: "fa-layer-group"
        }

    };
    
function displayTable(data)
{
	tableBody.innerHTML="";
	data.forEach(item =>
	{
		const row=document.createElement("tr");
		
		row.innerHTML = `
		<td>${item.description}</td>
		<td>${item.itemNo}</td>
		<td>${item.color}</td>
		<td>${item.measurement}</td>
		<td>
			<span class="stock">
				<i class="fa-solid fa-circle-check"></i>
					${item.status}
			</span>
		</td>
		`;
		tableBody.appendChild(row);
	});
}


    // =========================================
    // CHANGE PRODUCT INFORMATION
    // =========================================

    function showProduct(productName) {

        const product = products[productName];

        if (!product) return;

        productTitle.textContent = product.title;

        productDescription.textContent = product.description;

        productIcon.className = "fa-solid " + product.icon;


        // -------------------------------------
        // SHOW CORRECT OPTIONS
        // -------------------------------------

        laminatingOptions.style.display = "none";
        stickerOptions.style.display = "none";


        if (productName === "laminating") {

            laminatingOptions.style.display = "flex";

        }


        else if (productName === "stickers") {

            stickerOptions.style.display = "flex";

        }


        // -------------------------------------
        // LOAD TABLE
        // -------------------------------------

        loadTable(productName);

    }


    // =========================================
    // PRODUCT TABLE
    // =========================================

    function loadTable(productName) {

        tableBody.innerHTML = "";

	if (productName === "laminating")
	{
		displayTable(products.laminating.options.lite);
		return;
	}
        // -------------------------------------
        // FROSTED
        // -------------------------------------
	
	if (productName === "stickers")
	{
		displayTable(products.stickers.options.economy);
		return;
	}
        if (productName === "frosted") {

            tableBody.innerHTML = `
                <tr>
                    <td>Frosted Sticker - With Glitters</td>
                    <td>CV-005FG</td>
                    <td>Frosted with Glitters</td>
                    <td>4' x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>

                <tr>
                    <td>Frosted Sticker - Without Glitters</td>
                    <td>CV-001F</td>
                    <td>Frosted</td>
                    <td>4.16' x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
            `;

            return;
        }


        // -------------------------------------
        // CUT OUT GLOSSY
        // -------------------------------------

        if (productName === "cutout") {

            tableBody.innerHTML = `
                <tr>
                    <td>Cut Out Glossy Sticker</td>
                    <td>CTV-072G</td>
                    <td>Night Blue</td>
                    <td>4'x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
		<tr>
                    <td>Cut Out Glossy Sticker</td>
                    <td>CTV-172G</td>
                    <td>Reddish Orange</td>
                    <td>4'x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
		<tr>
                    <td>Cut Out Glossy Sticker</td>
                    <td>CTV-1002G</td>
                    <td>Cardinal Red</td>
                    <td>4'x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
		<tr>
                    <td>Cut Out Glossy Sticker</td>
                    <td>CTV-1009G</td>
                    <td>Blue</td>
                    <td>4'x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
		<tr>
                    <td>Cut Out Glossy Sticker</td>
                    <td>CTV-1016G</td>
                    <td>Dark Green</td>
                    <td>4'x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
		<tr>
                    <td>Cut Out Glossy Sticker</td>
                    <td>CTV-1019G</td>
                    <td>Medium Yellow</td>
                    <td>4'x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
		<tr>
                    <td>Cut Out Glossy Sticker</td>
                    <td>CTV-1020G</td>
                    <td>Dark Yellow</td>
                    <td>4'x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
		<tr>
                    <td>Cut Out Glossy Sticker</td>
                    <td>CTV-1021G</td>
                    <td>White</td>
                    <td>4'x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
		<tr>
                    <td>Cut Out Glossy Sticker</td>
                    <td>CTV-1024G</td>
                    <td>Black</td>
                    <td>4'x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
		<tr>
                    <td>Cut Out Glossy Sticker</td>
                    <td>CTV-1034G</td>
                    <td>Light Green</td>
                    <td>4'x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
		<tr>
                    <td>Cut Out Glossy Sticker</td>
                    <td>CTV-1495G</td>
                    <td>Orange</td>
                    <td>4'x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
            `;

            return;
        }
	if (productName === "blackback") {

            tableBody.innerHTML = `
                <tr>
                    <td>Black Back Sticker-100 microns</td>
                    <td>GRB-005WG</td>
                    <td>White Glossy</td>
                    <td>4.5' x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>

                <tr>
                    <td>Black Removable Sticker-100 microns</td>
                    <td>GRB-005WGR</td>
                    <td>White Glossy</td>
                    <td>4.5' x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
            `;

            return;
        }
	if (productName === "pp") {

            tableBody.innerHTML = `
                <tr>
                    <td>PP Sticker DYE - 180gsm</td>
                    <td>PP-DYE 150M</td>
                    <td>Matte</td>
                    <td>4.16' x 98.5'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>

                <tr>
                    <td>PP Sticker SOLVENT - 180gsm</td>
                    <td>PP-SOLVENT 150M</td>
                    <td>Matte</td>
                    <td>4.16' x 98.5'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
            `;

            return;
        }
	if (productName === "others") {

            tableBody.innerHTML = `
                <tr>
                    <td>BackLit Film - 180 microns</td>
                    <td>PET-2000G</td>
                    <td>Matte</td>
                    <td>4.16' x 98.5'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
	
		<tr>
                    <td>Perforated Sticker WB</td>
                    <td>PER-1600WB</td>
                    <td>White Black</td>
                    <td>4.16' x 164'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>	
	
                <tr>
                    <td>Reflective Sticker - 150gsm</td>
                    <td>RF-002WG</td>
                    <td>White Glossy</td>
                    <td>4' x 150'</td>
                    <td>
                        <span class="stock">
                            <i class="fa-solid fa-circle-check"></i>
                            In Stock
                        </span>
                    </td>
                </tr>
            `;

            return;
        }
    }
	const optionButtons=document.querySelectorAll("#laminatingOptions .stickers-tab");
	optionButtons.forEach(function(button)
{
		button.addEventListener("click", function()
		{
			optionButtons.forEach(function(btn)
			{
				btn.classList.remove("active");
			});
			button.classList.add("active");
			const option= button.dataset.option;
		displayTable(products.laminating.options[option]);
		});
});
	const stickerOptionButtons=document.querySelectorAll("#stickerOptions .stickers-tab");
	stickerOptionButtons.forEach(function(button)
{
		button.addEventListener("click", function()
		{
			stickerOptionButtons.forEach(function(btn)
			{
				btn.classList.remove("active");
			});
			button.classList.add("active");
			const option= button.dataset.option;
		displayTable(products.stickers.options[option]);
		});
});


    // =========================================
    // LEFT CATEGORY CLICK
    // =========================================

    categories.forEach(function (category) {

        category.addEventListener("click", function () {

            // Remove active from all categories
            categories.forEach(function (item) {
                item.classList.remove("active");
            });


            // Add active to clicked category
            this.classList.add("active");


            // Get product
            const productName = this.dataset.product;


            // Display product
            showProduct(productName);

        });

    });


    // =========================================
    // INITIAL PRODUCT
    // =========================================

    showProduct("laminating");

});