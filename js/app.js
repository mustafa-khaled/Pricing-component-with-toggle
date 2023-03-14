const toggle = document.getElementById("toggle");
let prices = document.querySelectorAll(".price");
let defaultPrice = ["&dollar;19.99", "&dollar;24.99", "&dollar;39.99"];
let price = ["&dollar;199.99", "&dollar;249.99", "&dollar;399.99"];

toggle.addEventListener('change', function () {
    if (this.checked) {
        // Update prices to annually
        for (let i = 0; i < prices.length; i++) {
            prices[i].innerHTML = price[i];
        }
    }
    else {
        // Update prices to monthly
        for (let i = 0; i < defaultPrice.length; i++) {
            prices[i].innerHTML = defaultPrice[i];
        }
    }
});
