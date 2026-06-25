var WHATSAPP_NUMBER = "2349010083841";

document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      var navMenu = document.getElementById('navMenu');
      if (navMenu) navMenu.classList.toggle('open');
    });
  }
  var sendBtn = document.getElementById('sendBtn');
  if (sendBtn) {
    sendBtn.addEventListener('click', function () {
      var nameEl = document.getElementById('fullName');
      var phoneEl = document.getElementById('phone');
      var branchEl = document.getElementById('branch');
      var orderTypeEl = document.getElementById('orderType');
      var orderDetailsEl = document.getElementById('orderDetails');

      var name = nameEl ? nameEl.value.trim() : '';
      var phone = phoneEl ? phoneEl.value.trim() : '';
      var branch = branchEl ? branchEl.value : '';
      var orderType = orderTypeEl ? orderTypeEl.value : '';
      var orderDetails = orderDetailsEl ? orderDetailsEl.value.trim() : '';

      if (name === '' || orderDetails === '') {
        alert('Please fill in your name and what you want to order.');
        return;
      }
      var message =
        'Hello Vision Global Ltd! \n\n' +
        'Name: ' + name + '\n' +
        'Phone: ' + (phone || 'Not provided') + '\n' +
        'Branch: ' + (branch || 'Not specified') + '\n' +
        'Order Type: ' + (orderType || 'Not specified') + '\n\n' +
        'Order Details:\n' + orderDetails + '\n\n' +
        'Please confirm availability and pricing. Thank you!';

      var formSuccess = document.getElementById('formSuccess');
      if (formSuccess) formSuccess.style.display = 'block';

      setTimeout(function () {
        window.open('https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message), '_blank');
      }, 1000);
    });
  }
  if (document.getElementById('productsGrid')) {
    function formatPrice(number) {
      return '₦' + number.toLocaleString('en-NG');
    }
    function whatsappLink(productName, detail, price) {
      var message = "Hi! I'd like to order: " + productName + " (" + detail + ") — " + price;
      return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
    }

    var drinkProducts = [
      { name: "Coca-Cola Classic PET",      spec: "50cl × 12 bottles",  price: 4600,  category: "carbonated", color: "#C8102E", image: "images/coca-cola-pet.png" },
      { name: "Coca-Cola Classic Can",         spec: "33cl × 24 cans",     price: 12000, category: "carbonated", color: "#C8102E", image: "images/coca-cola-can.png" },
      { name: "Fanta Orange PET",              spec: "50cl × 12 bottles",  price: 4600,  category: "carbonated", color: "#F56600", image: "images/fanta-pet.png" },
      { name: "Fanta Orange Can",              spec: "33cl × 24 cans",     price: 12000, category: "carbonated", color: "#F56600", image: "images/fanta-can.png" },
      { name: "Sprite PET",                    spec: "50cl × 12 bottles",  price: 4600,  category: "carbonated", color: "#0B7D3E", image: "images/sprite-pet.png" },
      { name: "Sprite Can",                    spec: "33cl × 24 cans",     price: 12000, category: "carbonated", color: "#0B7D3E", image: "images/sprite-can.png" },
      { name: "Pepsi PET",                    spec: "60cl × 12 bottles",  price: 4300,  category: "carbonated", color: "#004B93", image: "images/pepsi-pet.png" },
      { name: "Pepsi Can",                    spec: "33cl × 24 cans",     price: 9400,  category: "carbonated", color: "#004B93", image: "images/pepsi-can.png" },
      { name: "7Up PET",                      spec: "60cl × 12 bottles",  price: 4300,  category: "carbonated", color: "#00A550", image: "images/7up-pet.png" },
      { name: "7Up Can",                      spec: "33cl × 24 cans",     price: 9400,  category: "carbonated", color: "#00A550", image: "images/7up-can.png" },
      { name: "Teem Bitter Lemon PET",        spec: "50cl × 12 bottles",  price: 4300,  category: "carbonated", color: "#7EC820", image: "images/teem-bitter-lemon.png" },
      { name: "La Casera Apple PET",          spec: "35cl × 12 bottles",  price: 2500,  category: "carbonated", color: "#FFDE21", image: "images/la-casera.png" },
      { name: "Smoov Chapman PET",            spec: "35cl × 12 bottles",  price: 2500,  category: "carbonated", color: "#A50034", image: "images/smoov-chapman.png" },
      { name: "Schweppes Virgin Mojito Can",  spec: "33cl × 24 cans",     price: 14000, category: "carbonated", color: "#1a5c2a", image: "images/schweppes-mojito.png" },

      { name: "Fearless Classic PET",         spec: "50cl × 12 bottles",  price: 4500,  category: "energy", color: "#1a1a2e", image: "images/fearless-classic.png" },
      { name: "Predator Energy PET",          spec: "40cl × 12 bottles",  price: 5400,  category: "energy", color: "#c9a227", image: "images/predator-energy.png" },
      { name: "Supa Komando PET",             spec: "35cl × 12 bottles",  price: 3200,  category: "energy", color: "#2E8B57", image: "images/supa-komando.png" },
      { name: "Monster Energy Can",            spec: "50cl × 24 cans",     price: 19500, category: "energy", color: "#95D600", image: "images/monster-energy.png" },

      { name: "5 Alive Berry Blast PET",      spec: "78cl × 6 bottles",   price: 7500,  category: "juices", color: "#8B008B", image: "images/5alive-berry.png" },
      { name: "5 Alive Pulpy Orange PET",     spec: "85cl × 6 bottles",   price: 8000,  category: "juices", color: "#FF8C00", image: "images/5alive-pulpy.png" },
      { name: "Chivita Ice Tea Tetra Pak",    spec: "1L × 10 packs",      price: 16500, category: "juices", color: "#8B4513", image: "images/chivita-ice-tea.png" },
      { name: "Chi Exotic Tetra Pak",         spec: "1L × 10 packs",      price: 17200, category: "juices", color: "#FFB630", image: "images/chi-exotic.png" },
      { name: "Capri-Sun",  spec: "20cl × 40 pouches",  price: 15400, category: "juices", color: "#DAA520", image: "images/capri-sun.png" },

      { name: "Nutri-Milk PET",       spec: "40cl × 12 bottles",  price: 5500,  category: "yoghurt", color: "#76CD26", image: "images/nutri-milk.png" },
      { name: "Viju Chocolate Milk",      spec: "50cl × 12 bottles",  price: 11000,  category: "yoghurt", color: "#6B3A2A", image: "images/viju-chocolate.png" },
      { name: "Viju Milk Drink Fruit PET", spec: "50cl × 12 bottles", price: 5600, category: "yoghurt", color: "#76CD26", image: "images/viju-fruit.png" },
      { name: "Freshyo Yoghurt PET (Large)",  spec: "1L × 10 packs",      price: 12500, category: "yoghurt", color: "#00DAE3", image: "images/freshyo-large.png" },
      { name: "Freshyo Yoghurt PET (Small)",  spec: "31.5cl × 12 bottles",price: 6000,  category: "yoghurt", color: "#00DAE3", image: "images/freshyo-small.png" },
      { name: "Hollandia Yoghurt Tetra Pak",  spec: "1L × 10 packs",      price: 15000, category: "yoghurt", color: "#0057A8", image: "images/hollandia-yoghurt.png" },

      { name: "Maltina Classic Can",          spec: "33cl × 24 cans",     price: 13500, category: "malt", color: "#8B4513", image: "images/maltina-can.png" },
      { name: "Maltina Classic PET",          spec: "33cl × 12 bottles",  price: 5700,  category: "malt", color: "#8B4513", image: "images/maltina-pet.png" },
      { name: "Malta Guinness Can",           spec: "33cl × 24 cans",     price: 13500, category: "malt", color: "#FFD700", image: "images/malta-guinness-can.png" },
      { name: "Malta Guinness PET",           spec: "33cl × 12 bottles",  price: 5500,  category: "malt", color: "#FFD700", image: "images/malta-guinness-pet.png" },
      { name: "Amstel Malta Can", spec: "33cl × 24 cans",     price: 13500, category: "malt", color: "#E30613", image: "images/amstel-malta.png" },

      { name: "Nestle Pure Life Water PET",      spec: "50cl × 20 bottles",  price: 3000,  category: "water", color: "#1E90FF", image: "images/nestle-water.png" },
      { name: "Mr. V Premium Water PET",      spec: "75cl × 12 bottles",  price: 1700,  category: "water", color: "#1E90FF", image: "images/mr-v.png"},
      { name: "Eva Premium Water PET",      spec: "75cl × 12 bottles",  price: 2000,  category: "water", color: "#1E90FF", image: "images/eva-small.png" },
      { name: "Eva Large Water PET",      spec: "1L × 12 bottles",  price: 4000,  category: "water", color: "#1E90FF", image: "images/eva-1ltr.png" }
    ];

    var textileProducts = [
      {
        name: "Standard White Cotton Handkerchiefs",
        category: "handkerchiefs", color: "#d0d0d0", image: "images/handkerchief-white.png",
        tiers: [
          { label: "Per Dozen",       price: 4000   },
          { label: "Per Bundle",      price: 108000 },
          { label: "Per Mega Bale",   price: 195000 }
        ]
      },
      {
        name: "Multicolor Checked Cotton Handkerchiefs",
        category: "handkerchiefs", color: "#e8c87a", image: "images/handkerchief-multicolor.png",
        tiers: [
          { label: "Per Dozen",       price: 5500   },
          { label: "Per Bundle",      price: 148000 },
          { label: "Per Mega Bale",   price: 265000 }
        ]
      },
      {
        name: "Premium Men's Pocket Squares",
        category: "handkerchiefs", color: "#000080", image: "images/pocket-squares.png",
        tiers: [
          { label: "Per Dozen",       price: 7200   },
          { label: "Per Bundle",      price: 130000 },
          { label: "Per Mega Bale",   price: 250000 }
        ]
      },
      {
        name: "Microfiber Quick-Dry Face Towels",
        category: "towels", color: "#d0d0d0", image: "images/towel-face.png",
        tiers: [
          { label: "Per Dozen",  price: 6800   },
          { label: "Per Bale",  price: 295000 }
        ]
      },
      {
        name: "100% Cotton Salon & Gym Towels",
        category: "towels", color: "#73787C", image: "images/towel-salon.png",
        tiers: [
          { label: "Per Dozen",  price: 10500  },
          { label: "Per Bale",  price: 365000 }
        ]
      },
      {
        name: "Lightweight Promo Bath Towels",
        category: "towels", color: "#9370DB", image: "images/towel-souvenir.png",
        tiers: [
          { label: "Per Dozen",  price: 21000  },
          { label: "Per Bale",  price: 365000 }
        ]
      },
      {
        name: "Standard Cotton Bath Towels",
        category: "towels", color: "#d0d0d0", image: "images/towel-household.png",
        tiers: [
          { label: "Per Dozen",  price: 48000  },
          { label: "Per Bale",  price: 430000 }
        ]
      },
      {
        name: "White Hotel-Grade Terry Towels",
        category: "towels", color: "#d0d0d0", image: "images/towel-hotel.png",
        tiers: [
          { label: "Per Dozen",  price: 125000 },
          { label: "Per Bale",   price: 590000 }
        ]
      }
    ];

    var activeCategory = "all";
    var searchText = "";
    function buildDrinkCard(product) {
      var link = whatsappLink(product.name, product.spec, formatPrice(product.price));
      return '<div class="product-card">' +
        '<div class="card-image" style="background:' + product.color + ';">' +
          '<img src="' + product.image + '" alt="' + product.name + '" class="prod-img" />' +
          '<span class="cat-label">' + product.category + '</span>' +
        '</div>' +
        '<div class="card-body">' +
          '<h3>' + product.name + '</h3>' +
          '<p class="card-spec">' + product.spec + '</p>' +
          '<p class="card-price">' + formatPrice(product.price) + ' <small>per pack/carton</small></p>' +
          '<a href="' + link + '" target="_blank" class="card-order-btn"><img src="images/whatsapp-icon.svg" class="icon-inline" alt="WhatsApp"/>Order on WhatsApp</a>' +
        '</div>' +
      '</div>';
    }
    function buildTextileCard(product) {
      var tierRows = "";
      for (var i = 0; i < product.tiers.length; i++) {
        var tier = product.tiers[i];
        tierRows += '<tr>' +
          '<td>' + tier.label + '</td>' +
          '<td>' + formatPrice(tier.price) + '</td>' +
        '</tr>';
      }

      var link = whatsappLink(product.name, "enquiry", "");

      return '<div class="product-card">' +
        '<div class="card-image" style="background:' + product.color + ';">' +
          '<img src="' + product.image + '" alt="' + product.name + '" class="prod-img" />' +
          '<span class="cat-label">' + product.category + '</span>' +
        '</div>' +
        '<div class="card-body">' +
          '<h3>' + product.name + '</h3>' +
          '<table class="tier-table">' + tierRows + '</table>' +
          '<a href="' + link + '" target="_blank" class="card-order-btn"><img src="images/whatsapp-icon.svg" class="icon-inline" alt="WhatsApp"/>Order on WhatsApp</a>' +
        '</div>' +
      '</div>';
    }

    function renderProducts() {
      var grid = document.getElementById("productsGrid");
      if (!grid) return;
      var noResults = document.getElementById("noResults");
      var resultCount = document.getElementById("resultCount");
      var html = "";
      var count = 0;

      for (var i = 0; i < drinkProducts.length; i++) {
        var p = drinkProducts[i];
        var categoryMatch = (activeCategory === "all") || (p.category === activeCategory);
        var searchMatch = p.name.toLowerCase().includes(searchText);
        if (categoryMatch && searchMatch) {
          html += buildDrinkCard(p);
          count++;
        }
      }

      for (var j = 0; j < textileProducts.length; j++) {
        var t = textileProducts[j];
        var categoryMatch2 = (activeCategory === "all") || (t.category === activeCategory);
        var searchMatch2 = t.name.toLowerCase().includes(searchText);
        if (categoryMatch2 && searchMatch2) {
          html += buildTextileCard(t);
          count++;
        }
      }

      if (count === 0) {
        grid.innerHTML = "";
        if (noResults) noResults.style.display = "block";
      } else {
        grid.innerHTML = html;
        if (noResults) noResults.style.display = "none";
      }

      if (resultCount) resultCount.textContent = count;
    }

    var tabButtons = document.querySelectorAll(".tab-btn");

    for (var k = 0; k < tabButtons.length; k++) {
      tabButtons[k].addEventListener("click", function () {
        for (var m = 0; m < tabButtons.length; m++) { tabButtons[m].classList.remove("active"); }
        this.classList.add("active");
        activeCategory = this.getAttribute("data-cat");
        renderProducts();
      });
    }

    var searchBox = document.getElementById("searchBox");
    if (searchBox) {
      searchBox.addEventListener("input", function () {
        searchText = this.value.toLowerCase();
        renderProducts();
      });
    }

    var clearBtn = document.getElementById("clearBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        searchText = "";
        activeCategory = "all";
        if (searchBox) searchBox.value = "";
        for (var m = 0; m < tabButtons.length; m++) { tabButtons[m].classList.remove("active"); }
        if (tabButtons[0]) tabButtons[0].classList.add("active");
        renderProducts();
      });
    }

    function setCategory(cat) {
      activeCategory = cat;
      for (var m = 0; m < tabButtons.length; m++) {
        tabButtons[m].classList.remove("active");
        if (tabButtons[m].getAttribute("data-cat") === cat) { tabButtons[m].classList.add("active"); }
      }
      renderProducts();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.setCategory = setCategory;

    var urlParams = new URLSearchParams(window.location.search);
    var catParam = urlParams.get("cat");
    if (catParam) { setCategory(catParam); }

    renderProducts();
  }
});