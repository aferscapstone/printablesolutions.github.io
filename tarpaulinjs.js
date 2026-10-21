console.log("Tarp JS WORKING!!!");
document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       PRODUCT DATA
    ========================== */

    const products = {

        advantage: {
            title: "Tarpaulin Advantage",
	    icon: "fa-scroll",
            description:
                "High quality tarpaulin for indoor and outdoor use.<br>" +
                "Waterproof, durable and vibrant print results.",

            weights: {

                7: [
                    {
                        measurement: "3.3' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
                    {
                        measurement: "4.5' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.0' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "10.5' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
			
                ],

                8: [
                    {
                        measurement: "3.3' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
                    {
                        measurement: "4.5' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "5.3' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.0' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.2' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "8.2' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "10.5' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    }
                ],
		10: [
                    {
                        measurement: "3.3' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
                    {
                        measurement: "4.5' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "5.3' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.0' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.2' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "8.2' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "9.5' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "10.5' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    }
                ],
		13: [
                    {
                        measurement: "3.3' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
                    {
                        measurement: "4.5' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "5.3' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.0' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "8.2' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "10.5' x 164'",
                        color: "Bluish White Glossy",
                        status: "In Stock"
                    }
                ]
            }
        },


        premium: {
            title: "Tarpaulin Premium",
            icon: "fa-layer-group",
            description:
                "Premium quality tarpaulin designed for durable " +
                "indoor and outdoor advertising applications.",

            weights: {
                8: [
                    {
                        measurement: "3.3' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
                    {
                        measurement: "4.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "5.3' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.0' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.2' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "7.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "8.2' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "10.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    }
                ],

                10: [
                    {
                        measurement: "3.3' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
                    {
                        measurement: "4.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "5.3' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.0' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.1' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.2' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.6' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "7.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "8.2' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "9.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "10.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    }
                ],
		13: [
                    {
                        measurement: "3.3' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
                    {
                        measurement: "4.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "5.3' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.0' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.1' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.2' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.6' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "7.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "8.2' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "9.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "10.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    }
                ]
            }
        },


        blockout: {
            title: "Blockout Premium",
	    icon: "fa-shield-halved",
            description:
                "High density blockout tarpaulin designed to " +
                "reduce light penetration and provide excellent coverage.",

            weights: {
		13: [
                    {
                        measurement: "9.5' x 164'",
                        color: "Black & White",
                        status: "In Stock"
                    },
		    {
                        measurement: "10.5' x 164'",
                        color: "Black & White",
                        status: "In Stock"
                    }
                ],
		15: [
		    {
			measurement: "6.2' x 164'",
                        color: "Black & White",
                        status: "In Stock"
		    },
	  	    {
			measurement: "10.5' x 164'",
                        color: "Black & White",
                        status: "In Stock"
		    },
		],
		18: [
		    {
			measurement: "10.5' x 164'",
                        color: "Black & White",
                        status: "In Stock"
		    },
		    {
			measurement: "10.5' x 164'",
                        color: "White & White",
                        status: "In Stock"
		    }
		],
		20: [
		    {
			measurement: "10.5' x 164'",
                        color: "White & White",
                        status: "In Stock"
		    }
		]
            }
        },


        flex: {
            title: "Flex Lighted",
            icon: "fa-lightbulb",
            description:
                "Specialized flex material suitable for " +
                "backlit and lighted advertising applications.",

            weights: {

                18: [
                    {
                        measurement: "3.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "4.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "6.0' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    },
		    {
                        measurement: "10.5' x 164'",
                        color: "Snow White Glossy",
                        status: "In Stock"
                    }
                ]
            }
        }

    };


    /* ==========================
       ELEMENTS
    ========================== */

    const categoryButtons =
        document.querySelectorAll(".tarp-category");

    const weightButtons =
        document.querySelectorAll(".tarp-tab");

    const productTitle =
        document.getElementById("productTitle");

    const productDescription =
        document.getElementById("productDescription");

    const productIcon =
	document.getElementById("productIcon");
	
	console.log("ICON ELEMENT", productIcon);

    const tableBody =
        document.getElementById("productTableBody");


    /* ==========================
       CURRENT SELECTION
    ========================== */

    let currentProduct = "advantage";
    let currentWeight = "7";
	
    function updateWeightTabs()
{
	const product = products[currentProduct];
	weightButtons.forEach(function (button)
	{
		const weight = button.dataset.weight;
		if (product.weights[weight])
		{
			button.style.display = "block";
		}else
		{
			button.style.display = "none";
		}
	});
}


    /* ==========================
       DISPLAY TABLE
    ========================== */

    function updateTable() {

        const product = products[currentProduct];

        const rows = product.weights[currentWeight];
		console.log("Current product:", currentProduct);

        tableBody.innerHTML = "";

        rows.forEach(function (item) {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${item.measurement}</td>

                <td>${item.color}</td>

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


    /* ==========================
       PRODUCT CATEGORY BUTTONS
    ========================== */

	categoryButtons.forEach(function (category) {

    category.addEventListener("click", function () {

        // 1. Get the product name from the HTML
        currentProduct = this.getAttribute("data-product");

        console.log("Clicked product:", currentProduct);

        // 2. Change active category
        categoryButtons.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

        // 3. Reset to 7 oz

        weightButtons.forEach(function (button) {
            button.classList.remove("active");
        });

        weightButtons[0].classList.add("active");

        // 4. Get the selected product
        const product = products[currentProduct];
	

        // 5. Change heading
        productTitle.textContent = product.title;

        // 6. Change description
        productDescription.innerHTML = product.description;
	
	productIcon.className = "";
	productIcon.classList.add("fa-solid");
	productIcon.classList.add(product.icon);
	
	updateWeightTabs();

	const availableWeights = Object.keys(product.weights);
	currentWeight = availableWeights[0];

	weightButtons.forEach(function (button) {
	button.classList.remove("active");
	});

	const firstWeightButton = document.querySelector(`.tarp-tab[data-weight="${currentWeight}"]`
	);
	
	if (firstWeightButton)
	{
		firstWeightButton.classList.add("active");
	}

        // 7. Change table
        updateTable();

    });

});

    /* ==========================
       7 OZ / 8 OZ BUTTONS
    ========================== */

    weightButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Remove active from both buttons
            weightButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Make clicked button active
            this.classList.add("active");

            // Get 7 or 8 from data-weight
            currentWeight = this.dataset.weight;
		console.log("SELECTED  WIEHGT", currentWeight);

            // Update table
            updateTable();

        });

    });


    /* ==========================
       INITIAL DISPLAY
    ========================== */
    updateWeightTabs();
    updateTable();


});