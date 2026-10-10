/* =========================================================
   MAMA PUT RESTAURANT
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   RESTAURANT SETTINGS
========================================================= */


const RESTAURANT_WHATSAPP = "2348077739569";


/* =========================================================
   MENU DATA
========================================================= */

const menuData = [

  {
    category: "Rice & Swallow",
    icon: "🍚",

    items: [
      {
        name: "Jollof Rice",
        description: "Classic Nigerian jollof rice",
        price: 1500
      },

      {
        name: "Fried Rice",
        description: "Nigerian-style fried rice",
        price: 1500
      },

      {
        name: "White Rice",
        description: "Steamed white rice",
        price: 1000
      },

      {
        name: "Coconut Rice",
        description: "Rich coconut-flavoured rice",
        price: 1800
      },

      {
        name: "Ofada Rice & Sauce",
        description: "Ofada rice with special sauce",
        price: 2000
      },

      {
        name: "Eba",
        description: "Garri swallow",
        price: 500
      },

      {
        name: "Semo",
        description: "Smooth semolina swallow",
        price: 500
      },

      {
        name: "Pounded Yam",
        description: "Soft pounded yam",
        price: 700
      },

      {
        name: "Amala",
        description: "Traditional Nigerian amala",
        price: 500
      },

      {
        name: "Wheat",
        description: "Wheat swallow",
        price: 500
      }
    ]
  },


  {
    category: "Soups",
    icon: "🍲",

    items: [
      {
        name: "Egusi Soup",
        description: "Rich melon seed soup",
        price: 1200
      },

      {
        name: "Vegetable Soup",
        description: "Fresh Nigerian vegetable soup",
        price: 1200
      },

      {
        name: "Okra Soup",
        description: "Fresh okra soup",
        price: 1200
      },

      {
        name: "Ogbono Soup",
        description: "Traditional ogbono soup",
        price: 1200
      },

      {
        name: "Ewedu & Gbegiri",
        description: "Classic Yoruba soup combination",
        price: 1300
      },

      {
        name: "Afang Soup",
        description: "Rich afang vegetable soup",
        price: 1500
      },

      {
        name: "Oha Soup",
        description: "Traditional oha soup",
        price: 1300
      },

      {
        name: "Banga Soup",
        description: "Palm fruit soup",
        price: 1500
      }
    ]
  },


  {
    category: "Protein",
    icon: "🍗",

    items: [
      {
        name: "Fried Chicken",
        description: "Crispy fried chicken",
        price: 2000
      },

      {
        name: "Grilled Chicken",
        description: "Seasoned grilled chicken",
        price: 2200
      },

      {
        name: "Beef",
        description: "Tender beef",
        price: 1500
      },

      {
        name: "Goat Meat",
        description: "Well-seasoned goat meat",
        price: 2000
      },

      {
        name: "Assorted Meat",
        description: "Mixed assorted meat",
        price: 1800
      },

      {
        name: "Shaki",
        description: "Tender cow tripe",
        price: 1500
      },

      {
        name: "Ponmo",
        description: "Soft cow skin",
        price: 1000
      },

      {
        name: "Fish",
        description: "Freshly prepared fish",
        price: 2000
      },

      {
        name: "Stockfish",
        description: "Seasoned stockfish",
        price: 2000
      },

      {
        name: "Egg",
        description: "Boiled egg",
        price: 500
      }
    ]
  },


  {
    category: "Local Specials",
    icon: "🍛",

    items: [
      {
        name: "Beans & Plantain",
        description: "Beans served with sweet plantain",
        price: 1800
      },

      {
        name: "Beans & Bread",
        description: "Beans with fresh bread",
        price: 1500
      },

      {
        name: "Yam & Egg Sauce",
        description: "Boiled yam with egg sauce",
        price: 1800
      },

      {
        name: "Fried Yam & Sauce",
        description: "Crispy fried yam",
        price: 1500
      },

      {
        name: "Boiled Yam & Sauce",
        description: "Soft boiled yam with sauce",
        price: 1500
      },

      {
        name: "Plantain & Egg Sauce",
        description: "Plantain with egg sauce",
        price: 1800
      },

      {
        name: "Spaghetti",
        description: "Nigerian-style spaghetti",
        price: 1500
      },

      {
        name: "Noodles & Egg",
        description: "Noodles served with egg",
        price: 1500
      },

      {
        name: "Moi Moi",
        description: "Steamed bean pudding",
        price: 1000
      },

      {
        name: "Akara & Pap",
        description: "Akara served with pap",
        price: 1500
      }
    ]
  },


  {
    category: "Extras",
    icon: "🌶️",

    items: [
      {
        name: "Extra Stew",
        description: "Extra portion of stew",
        price: 500
      },

      {
        name: "Extra Soup",
        description: "Extra portion of soup",
        price: 700
      },

      {
        name: "Extra Meat",
        description: "Extra piece of meat",
        price: 1000
      },

      {
        name: "Extra Fish",
        description: "Extra fish portion",
        price: 1500
      },

      {
        name: "Fried Plantain",
        description: "Sweet fried plantain",
        price: 800
      },

      {
        name: "Coleslaw",
        description: "Fresh creamy coleslaw",
        price: 500
      },

      {
        name: "Boiled Egg",
        description: "One boiled egg",
        price: 500
      },

      {
        name: "Ponmo",
        description: "Extra ponmo",
        price: 1000
      }
    ]
  },


  {
    category: "Drinks",
    icon: "🥤",

    items: [
      {
        name: "Sachet/Bottled Water",
        description: "Cold drinking water",
        price: 300
      },

      {
        name: "Soft Drink",
        description: "Chilled soft drink",
        price: 500
      },

      {
        name: "Malt",
        description: "Chilled malt drink",
        price: 600
      },

      {
        name: "Zobo",
        description: "Fresh homemade zobo",
        price: 500
      },

      {
        name: "Kunu",
        description: "Traditional kunu drink",
        price: 500
      },

      {
        name: "Chapman",
        description: "Refreshing Chapman",
        price: 1000
      },

      {
        name: "Fresh Fruit Juice",
        description: "Freshly prepared fruit juice",
        price: 1200
      }
    ]
  }

];


/* =========================================================
   FORMAT NAIRA
========================================================= */

function formatNaira(amount) {

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);

}


/* =========================================================
   GET ALL MENU ITEMS
========================================================= */

function getAllItems() {

  return menuData.flatMap(category => category.items);

}


/* =========================================================
   CREATE MENU PAGE
========================================================= */

function createMenuPage() {

  const container =
    document.getElementById("menu-container");

  if (!container) return;


  container.innerHTML = "";


  menuData.forEach(category => {

    const section =
      document.createElement("section");

    section.className = "menu-category";


    const header =
      document.createElement("div");

    header.className = "menu-category-header";

    header.innerHTML = `
      <div class="menu-category-icon">
        ${category.icon}
      </div>

      <h2>${category.category}</h2>
    `;


    const items =
      document.createElement("div");

    items.className = "menu-items";


    category.items.forEach(item => {

      const card =
        document.createElement("article");

      card.className = "menu-item";


      card.innerHTML = `

        <div class="menu-item-info">

          <h3>${item.name}</h3>

          <p>
            ${item.description}
          </p>

        </div>

        <div class="menu-price">
          ${formatNaira(item.price)}
        </div>

      `;


      items.appendChild(card);

    });


    section.appendChild(header);
    section.appendChild(items);

    container.appendChild(section);

  });

}


/* =========================================================
   CREATE ORDER PAGE
========================================================= */

function createOrderPage() {

  const container =
    document.getElementById("order-menu");

  if (!container) return;


  container.innerHTML = "";


  menuData.forEach(category => {

    const categoryTitle =
      document.createElement("h3");

    categoryTitle.style.marginTop = "20px";
    categoryTitle.style.marginBottom = "10px";
    categoryTitle.style.color = "#facc15";

    categoryTitle.textContent =
      `${category.icon} ${category.category}`;


    container.appendChild(categoryTitle);


    category.items.forEach((item, index) => {

      const uniqueId =
        `food-${category.category}-${index}`
        .replace(/\s+/g, "-")
        .toLowerCase();


      const row =
        document.createElement("label");

      row.className = "order-item";

      row.dataset.price = item.price;
      row.dataset.name = item.name;


      row.innerHTML = `

        <input
          class="order-check"
          type="checkbox"
          id="${uniqueId}"
          value="${item.name}"
        >

        <div class="order-item-info">

          <strong>
            ${item.name}
          </strong>

          <small>
            ${item.description}
          </small>

        </div>

        <div class="order-item-price">
          ${formatNaira(item.price)}
        </div>

        <input
          class="quantity"
          type="number"
          min="1"
          value="1"
          disabled
          aria-label="Quantity for ${item.name}"
        >

      `;


      const checkbox =
        row.querySelector(".order-check");

      const quantity =
        row.querySelector(".quantity");


      checkbox.addEventListener(
        "change",
        () => {

          quantity.disabled =
            !checkbox.checked;

          if (checkbox.checked) {
            quantity.value = 1;
          }

          calculateTotal();

        }
      );


      quantity.addEventListener(
        "input",
        calculateTotal
      );


      container.appendChild(row);

    });

  });

}


/* =========================================================
   CALCULATE TOTAL
========================================================= */

function calculateTotal() {

  const selected =
    document.querySelectorAll(
      ".order-item .order-check:checked"
    );


  let total = 0;


  selected.forEach(checkbox => {

    const row =
      checkbox.closest(".order-item");

    const price =
      Number(row.dataset.price);

    const quantity =
      Number(
        row.querySelector(".quantity").value
      ) || 1;


    total += price * quantity;

  });


  const totalElement =
    document.getElementById("order-total");


  if (totalElement) {

    totalElement.textContent =
      formatNaira(total);

  }


  return total;

}


/* =========================================================
   GET SELECTED ITEMS
========================================================= */

function getSelectedItems() {

  const selected =
    document.querySelectorAll(
      ".order-item .order-check:checked"
    );


  const items = [];


  selected.forEach(checkbox => {

    const row =
      checkbox.closest(".order-item");

    const name =
      row.dataset.name;

    const price =
      Number(row.dataset.price);

    const quantity =
      Number(
        row.querySelector(".quantity").value
      ) || 1;


    items.push({
      name,
      price,
      quantity
    });

  });


  return items;

}


/* =========================================================
   BUILD WHATSAPP MESSAGE
========================================================= */

function createWhatsAppMessage(
  items,
  phone,
  address,
  date,
  time,
  urgency,
  note,
  total
) {

  let message =
`🍲 *NEW MAMA PUT RESTAURANT ORDER*

━━━━━━━━━━━━━━━━━━

*ORDER DETAILS*

`;


  items.forEach(item => {

    const itemTotal =
      item.price * item.quantity;


    message +=
`🍛 ${item.name}
   Quantity: ${item.quantity}
   Price: ${formatNaira(itemTotal)}

`;

  });


  message +=
`━━━━━━━━━━━━━━━━━━

💰 *TOTAL: ${formatNaira(total)}*

📱 *Customer Phone:*
${phone}

📍 *Delivery Address:*
${address}

📅 *Date Needed:*
${date}

⏰ *Preferred Time:*
${time}

🚨 *Urgency:*
${urgency}

`;


  if (note.trim()) {

    message +=
`
📝 *Additional Note:*
${note}
`;

  }


  message +=
`
━━━━━━━━━━━━━━━━━━
Thank you! 🙏
`;


  return message;

}


/* =========================================================
   ORDER FORM
========================================================= */

function setupOrderForm() {

  const form =
    document.getElementById("order-form");

  if (!form) return;


  form.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      const items =
        getSelectedItems();


      if (items.length === 0) {

        alert(
          "Please select at least one food item."
        );

        return;

      }


      const phone =
        document.getElementById("phone").value.trim();

      const address =
        document.getElementById("address").value.trim();

      const date =
        document.getElementById("date").value;

      const time =
        document.getElementById("time").value;

      const note =
        document.getElementById("note").value.trim();


      const urgency =
        document.querySelector(
          'input[name="urgency"]:checked'
        ).value;


      const total =
        calculateTotal();


      const message =
        createWhatsAppMessage(
          items,
          phone,
          address,
          date,
          time,
          urgency,
          note,
          total
        );


      /*
        Save a small copy of the order locally
        so the confirmation page can display
        useful information if needed.
      */

      localStorage.setItem(
        "mamaPutLastOrder",
        JSON.stringify({
          items,
          phone,
          address,
          date,
          time,
          urgency,
          note,
          total
        })
      );


      /*
        WhatsApp URL
      */

      const whatsappURL =
        `https://wa.me/${RESTAURANT_WHATSAPP}?text=${
          encodeURIComponent(message)
        }`;


      /*
        Open WhatsApp.
      */

      window.open(
        whatsappURL,
        "_blank"
      );


      /*
        Then take customer to confirmation page.
      */

      setTimeout(() => {

        window.location.href =
          "success.html";

      }, 700);

    }
  );

}


/* =========================================================
   SET MINIMUM DATE
========================================================= */

function setupDate() {

  const dateInput =
    document.getElementById("date");

  if (!dateInput) return;


  const today =
    new Date();


  const year =
    today.getFullYear();

  const month =
    String(today.getMonth() + 1)
      .padStart(2, "0");

  const day =
    String(today.getDate())
      .padStart(2, "0");


  dateInput.min =
    `${day}-${month}-${year}`;

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    createMenuPage();

    createOrderPage();

    setupOrderForm();

    setupDate();

  }
);