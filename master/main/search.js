const searchData = [
    {
        name: "LIDERISM CUBAN SHIRT - Blush",
        img: "/img/img_Edward/Shirt/Shirt_1/img_product1/focus1.jpg",
        url: "/master/sproduct/pro-above/pro1/sproduct1.html"
    }
    ,
    {
        name: "EDWARD CROPPED POLO SWEATSHIRT - Pearl",
        img: "/img/img_Edward/Shirt/Shirt_2/img_product2/focus1.png",
        url: "/master/sproduct/pro-above/pro2/sproduct2.html"
    }
    ,
    {
        name: "NATHAN BLAZER",
        img: "/img/img_Edward/Shirt/Shirt_3/img_product3/focus1.png",
        url: "/master/sproduct/pro-above/pro3/sproduct3.html"
    }
    ,
    {
        name: "AETHER RUFFLE SHIRT - White",
        img: "/img/img_Edward/Shirt/Shirt_4/img_product4/4.jpg",
        url: "/master/sproduct/pro-above/pro4/sproduct4.html"
    }
    ,
    {
        name: "TEE V3.0 - POLKA Red",
        img: "/img/img_Edward/T-shirt/T-shirt_1/img_product1/focus2.png",
        url: "/master/sproduct/pro-above/pro5/sproduct5.html"
    }
    ,
    {
        name: "INSIDE OUT LONG-SLEEVE TEE",
        img: "/img/img_Edward/T-shirt/T-shirt_2/img_product2/focus2.png",
        url: "/master/sproduct/pro-above/pro6/sproduct6.html"
    }
    ,
    {
        name: "THEEIGHTH JERSEY T-SHIRT",
        img: "/img/img_Edward/T-shirt/T-shirt_3/img_product3/focus3.png",
        url: "/master/sproduct/pro-above/pro7/sproduct7.html"
    }
    ,
    {
        name: "MAT-CUP MEOW TEE",
        img: "/img/img_Edward/T-shirt/T-shirt_4/img_product4/1.jpg",
        url: "/master/sproduct/pro-above/pro8/sproduct8.html"
    }
    ,
    {
        name: "OWL - TEE NEWDAILY",
        img: "/img/img_Edward/Brand_Owl/product1/product1_img/1.jpg",
        url: "/master/sproduct/pro-below/pro1/sproduct1.html"
    }
    ,
    {
        name: "OWL - CHERRY TEE",
        img: "/img/img_Edward/Brand_Owl/product2/product2_img/1.jpg",
        url: "/master/sproduct/pro-below/pro2/sproduct2.html"
    }
    ,
    {
        name: "OWL - MINI TYPO TEE",
        img: "/img/img_Edward/Brand_Owl/product3/product3_img/1.jpg",
        url: "/master/sproduct/pro-below/pro3/sproduct3.html"
    }
    ,
    {
        name: "OWL - STRIPPED POLO",
        img: "/img/img_Edward/Brand_Owl/product4/product4_img/1.jpg",
        url: "/master/sproduct/pro-below/pro4/sproduct4.html"
    }
    ,
    {
        name: "OWL - OXFORD SHIRT",
        img: "/img/img_Edward/Brand_Owl/product5/product5_img/WHITE-1.jpg",
        url: "/master/sproduct/pro-below/pro5/sproduct5.html"
    }
    ,
    {
        name: "OWL - JEANS JACKET",
        img: "/img/img_Edward/Brand_Owl/product6/product6_img/3.jpg",
        url: "/master/sproduct/pro-below/pro6/sproduct6.html"
    }
    ,
    {
        name: "OWL - RUGBY SWEATSHIRT",
        img: "/img/img_Edward/Brand_Owl/product7/product7_img/2.jpg",
        url: "/master/sproduct/pro-below/pro7/sproduct7.html"
    }
    ,
    {
        name: "OWL - TYPO SWEATSHIRT",
        img: "/img/img_Edward/Brand_Owl/product8/product8_img/color1/AO-NI-OWL-MINI-TYPO-SWEATSHIRT-RED.jpg",
        url: "/master/sproduct/pro-below/pro8/sproduct8.html"
    }
    ,
    //shop 2
    {
        name: "SCRATCH DENIM JACKET",
        img: "/img/img_Edward/Lider_Top/sp1/img/6.jpg",
        url: "/master/sproduct/shop2-above/pro-above/pro1/sproduct1.html"
    }
]
const searchWrapper = document.querySelector("#navbar .search");
const searchInput = searchWrapper.querySelector("input");
const searchBtn = searchInput.querySelector("i");
searchInput.addEventListener("input", () => {
    if (document.querySelector(".searchResults")) {
        document.querySelector(".searchResults").remove();
    }
    const query = searchInput.value;
    if (query === "") {
        return;
    }
    const searchResults = document.createElement("div");
    searchResults.classList.add("searchResults");
    const filteredResults = searchData.filter((item) => item.name.toLowerCase().includes(query));
    filteredResults.sort((a, b) => {
        let aTitle = a.name.toLowerCase();
        let bTitle = b.name.toLowerCase();

        if (aTitle.startsWith(query) && !bTitle.startsWith(query)) {
            return -1;
        } else if (!aTitle.startsWith(query) && bTitle.startsWith(query)) {
            return 1;
        } else {
            return 0;
        }
    });
    searchResults.innerHTML = filteredResults.length > 0 ? filteredResults.slice(0, 3).map(item => ` 

    <a href="${item.url}" class="searchItem">
      <div class="itemImg">
        <img src="${item.img}" alt="Img">
      </div>
      <div class="itemContent">
        <p>${item.name}</p>
      </div>
    </a> 
  `).join("") : "<p>Not found</p>";
    searchWrapper.appendChild(searchResults);

});

// <p class="money">jfkadfjkad</p> line  143 money


document.addEventListener("click", (e) => {
    if (!e.target.closest(".search")) {
        document.querySelector(".searchResults").classList.add("hidden");
    } else if (e.target.closest("input") !== null && e.target.closest("input").value !== "") {
        document.querySelector(".searchResults").classList.remove("hidden");
    }
});