/* =========================================================
   MAMA PUT RESTAURANT
   MAIN JAVASCRIPT
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
  price: 1500,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSioSiRCz9zSoWGMgkyA5mck73NIlu98h-hRDCwuoduZA&s=10"
},
      {
  name: "Fried Rice",
  description: "Nigerian-style fried rice",
  price: 1500,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YaadT1eAdcJNHbQHPX_auMahYVZJp4zcX4tuvKzPqg&s=10"
},
      {
  name: "White Rice",
  description: "Steamed white rice",
  price: 1000,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOia3siGj4D9sTy7VgT56NFWxkqZBuft02Hw4sR4Uzw&s=10"
},
      {
  name: "Coconut Rice",
  description: "Rich coconut-flavoured rice",
  price: 1800,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG8BGO2dzAzzqhIq2Q0MOKrKqUCLFzp5t-IDFkgdjDTg&s=10"
},
      {
  name: "Ofada Rice & Sauce",
  description: "Ofada rice with special sauce",
  price: 2000,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsXRSf_l2P2hFTjTNO95PRNMbk-n7zEy97YC9ZQ6FiQ&s=10"
},
      { 
        name: "Eba", 
        description: "Garri swallow", 
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ZvDr0_Dfv-AxPwLlFo5RUtcSNVe9a5Hd38B04TgtjA&s=10"
},
      { 
        name: "Semo",
        description: "Smooth semolina swallow",
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTPRMhYQbERj4QLFvjDbGLHVjs9Fl9QuGAH_VwJiiDw&s=10" 
},
      { 
        name: "Pounded Yam",
        description: "Soft pounded yam", 
        price: 700, 
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyxKe9F1SZGIvwlbET9rkTnchd96_if75sHd7k1HvlEQ&s=10" 
},
      { 
        name: "Amala", 
        description: "Traditional Nigerian amala", 
        price: 500, 
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBR78Mk42CCktcjPp5rZHZDBn6XPZSuhI8bUuII8ogXw&s=10" 
},
      { 
        name: "Wheat", 
        description: "Wheat swallow", 
        price: 500, 
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUT2qhO2-1Wsecq5t5az7z4jBMitF_ps6zkslkhZigNg&s=10" 
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
        price: 1200,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStR7ImAL-4OJ6NhvduyIH_MlZ0SfMi4BforRt3Vx60GA&s=10" 
},
      { 
        name: "Vegetable Soup", 
        description: "Fresh Nigerian vegetable soup", 
        price: 1200, 
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0gZYZJH5Rtd276hSHYytM91gj2LXcT3gLBx150aUt6Q&s=10"
},
      { 
        name: "Okra Soup", 
        description: "Fresh okra soup", 
        price: 1200,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIY6zLEU3i-Rb906YtjapV_jOHO_qdwaHP0jQRN2Lrw&s=10"
},
      { 
        name: "Ogbono Soup", 
        description: "Traditional ogbono soup", 
        price: 1200, 
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3QbiKl9_NhzmVNMV5b69xbxZh5vCCIchSmhhdfUCpvA&s=10"
},
      { 
        name: "Ewedu & Gbegiri", 
        description: "Classic Yoruba soup combination", 
        price: 1300, 
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_n456Vehd-xkKYxa-TvyJ3h0JRF16ajEIi5bIYGDJg&s=10"
},
      { 
        name: "Afang Soup", 
        description: "Rich afang vegetable soup", 
        price: 1500, 
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMHMmy4uBccx7ETqs7M_TKztLgsn8IQM_B210lTSwGg&s=10"
},
      { 
        name: "Oha Soup", 
        description: "Traditional oha soup", 
        price: 1300, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxGgEa6LGBQV6SpIWClPABSfqkvQ72tACzE7eSIAiJwQ&s=10"
},
      { 
        name: "Banga Soup", 
        description: "Palm fruit soup", 
        price: 1500, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSEnkuV8Wj1RfO3wrufmhqqMi2EDvlR2PS0kA2wlQig&s=10"
},
      { 
        name: "pepper Soup", 
        description: "Fish/Meat pepper soup", 
        price: 1500, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVSSCRTORbC718Q5dOt5yJni7EJwWnbpnj5itT04yZg&s=10"
},
      { 
        name: "White Soup", 
        description: "Fish/Meat pepper soup", 
        price: 1500, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsf7j9L7zd67PFfQanO5SefGeUk3bhdPl0giesSWwDGQ&s=10"
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
        price: 2000, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyg8dzLg_Wb0zZPsx4l8lWUVquBqoJu1Qv6jJs1S6GNA&s=10" 
},
      { 
        name: "Grilled Chicken", 
        description: "Seasoned grilled chicken", 
        price: 2200, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC6ALN08TwE67FAct013al1ispJr_rEgVt8q1AcSFYxw&s=10" 
},
      { 
        name: "Beef", 
        description: "Tender beef", 
        price: 1500, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapW07jCbWsKTPBWg6DBxUsrnoXg_hDcJjF6KPVpW_ig&s=10" 
},
      { 
        name: "Goat Meat", 
        description: "Well-seasoned goat meat", 
        price: 2000, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-W0O8VUoyK6gibYqOdB2w4FjtxFpjPYcS_ozIk_uyIA&s=10" 
},
      { 
        name: "Assorted Meat", 
        description: "Mixed assorted meat", 
        price: 1800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHbdm7VcLRJlrVdnOVM2ESv6SLfsnDnexThzuAX3zP4w&s=10" 
},
      { 
        name: "Pork", 
        description: "Grilled Pork Chops", 
        price: 1500, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmlOvti-_z-dG9cc2jvRYPQHb1v7u4zHvuNKqiGk2Rw&s=10"
},
      { 
        name: "Ponmo", 
        description: "Soft cow skin", 
        price: 1000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lgaAGzHacRlAfmvpb_6KX4iNDHpzoj12-1QUrQQKKA&s=10"
},
      { 
        name: "Fish", 
        description: "Freshly prepared fish", 
        price: 2000, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-S03eKQB3a8MvrtmqgCZ7_G-ivC-DmPL8UyLKntVkGA&s=10"
},
      { 
        name: "Stockfish", 
        description: "Seasoned stockfish", 
        price: 2000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOn6TwufwZbXyG3jGyV5GN0SCxLLQJMbTi1SSzpXnDqA&s=10"
},
      { 
        name: "Egg", 
        description: "Boiled egg", 
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0orQQTRR_MnD18uY9BiPI0wLD4Cv_o15xBfHJUL5K2g&s=10"
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
        price: 1800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfjSH12R0H8wmhzBN7MBmR-xLBTpMmn2QNfC3S_lwsw&s=10"
},
      { 
        name: "Beans & Bread", 
        description: "Beans with fresh bread", 
        price: 1500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSGdTR1VgmrudRmZ3PwZsDV_fMnGiOvl_wpgtrOFC-Q&s=10"
},
      { 
        name: "Yam & Egg Sauce", 
        description: "Boiled yam with egg sauce", 
        price: 1800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_oJsWcpmzNbmoeJq5rR2ST4fp7Dbe_8TsEOiJYXGWNQ&s=10"
},
      { 
        name: "Fried Yam & Sauce", 
        description: "Crispy fried yam", 
        price: 1500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTD3VHUfcoPj4gUqppct4zp6nDmrHLKocOql8_VR5Tcg&s=10"
},
      { 
        name: "Bread & Tea", 
        description: "Freshly baked soft bread and a nice cup of tea", 
        price: 1500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLW2k634Nq8iLoj-W76UxawPeLXXtI47Yr9TRSM62LA&s=10"
},
      { 
        name: "Plantain & Egg Sauce", 
        description: "Plantain with egg sauce", 
        price: 1800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTLBAhi8vSTwsKGcuWQl6fgCS6kWQCZasLJAqkIqswZA&s=10"
},
      { 
        name: "Spaghetti", 
        escription: "Nigerian-style spaghetti", 
        price: 1500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS886uU53uQhGdd0uI3HgryG9j4M77pd1MdLwFHMfYeNQ&s=10"
},
      { 
        name: "Noodles & Egg", 
        description: "Noodles served with egg", 
        price: 1500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5oxcswUGsKXjH7Idn5lCSTStugnX-2OOQPhbJsqEsA&s=10"
},
      { 
        name: "Moi Moi", 
        description: "Steamed bean pudding", 
        price: 1000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFXCareGzkAoP__PUTM1FUW7zkclTL0nPdV9fqmKkvA&s=10"
},
      { 
        name: "Akara & Pap", 
        description: "Akara served with milky and creamy pap", 
        price: 1500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8L4-CPvDgazgl5EC95wCuqn6XYhobcegcopzybQii7A&s=10"
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
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_eLjujTE_Y1pE7EHBAAg_BTFjiXecmyL-8MbO70U3w&s=10"
},
      { 
        name: "Extra Soup", 
        description: "Extra portion of soup", 
        price: 700,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qp75-qOkqpOb_AkAW_7TEiOp16KKa5ZsuR7huWX0ng&s=10"
        
},
      {
        name: "Extra Meat", 
        description: "Extra piece of meat", 
        price: 1000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSms1BhLzEl71loLG0zYLvT3yVwRnb-SQYNVjQhztofnA&s=10"
},
      { 
        name: "Extra Fish", 
        description: "Extra fish portion", 
        price: 1500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgarUK8xJzdmu3SSNUL51JTUtJSoWiEpIHF8Tv8a1-w&s=10"
},
      { 
        name: "Fried Plantain", 
        description: "Sweet fried plantain", 
        price: 800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDtds9zS2TYowEhjyOl7uHLAjJB-ooAYqm8KPO5ZRceg&s=10"
},
      { 
        name: "Coleslaw", 
        description: "Fresh creamy coleslaw", 
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSieOFIyRqBWJGZTKZxrSXZFkcDTPDEHWremdhuMXes9Q&s=10"
},
      { 
        name: "Boiled Egg", 
        description: "One boiled egg", 
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1zGul2mSK0OfAlHOqycrX0VqmjQ1fCu0AP_5XVokUw&s=10"
},
      { 
        name: "Ponmo", 
        description: "Extra ponmo", 
        price: 1000, 
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZjzcCI6AZeEEarrFjw20Oo1fWhoL-ZjgqDJIF9XRKQ&s=10"
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
        price: 300,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjUX7KOyqH3YfQ-e0k681ZNLUphWzmKVLVSQqie6egw&s=10"
},
      { 
        name: "Soft Drink", 
        description: "Chilled soft drink", 
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStp3ySGBSDeuWEONAb6k3ZQMprW33Qp0zvaSHt5ZORZg&s=10"
},
      {
        name: "Malt", 
        description: "Chilled malt drink", 
        price: 600,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58PSBxQ-yuQKBzbxTdM1RlnEZnrZr_wCmAhmtv3sVIg&s=10"
},
      { 
        name: "Zobo", 
        description: "Fresh homemade zobo", 
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6RJtZvf7Ok5AzWgYISKT0YNZv_GF3aOQExtQrcCpnWQ&s=10"
},
      { 
        name: "Kunu", 
        description: "Traditional kunu drink", 
        price: 500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSekXDYbcgRuJwOglASivMmfApiVmMiyaeZFiHiwKhJgg&s=10"
},
      { 
        name: "Chapman", 
        description: "Refreshing Chapman", 
        price: 1000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHx0piCjxa6d1vP2NKSQgPp-vJbeEt1JAfV8lLppRxxA&s=10"
},
{
        name: "Fresh Fruit Juice", 
        description: "Freshly prepared fruit juice", 
        price: 1200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvizG47CTI3rTiesqdhqmxYWhsJ_YEsRkT3D83MbGmBg&s=10"
},
      {
        name: "Youghurt", 
        description: "Refreshing youghurt drink", 
        price: 1500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi2jzenuhcmQP-cWQZAmlJdzfL5tnI5qEkxaXxsQusGQ&s=10"
}
    ]
  },
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
  const container = document.getElementById("menu-container");

  if (!container) return;

  container.innerHTML = "";

  menuData.forEach(category => {
    const section = document.createElement("section");
    section.className = "menu-category";

    const header = document.createElement("div");
    header.className = "menu-category-header";

    header.innerHTML = `
      <div class="menu-category-icon">${category.icon}</div>
      <h2>${category.category}</h2>
    `;

    const items = document.createElement("div");
    items.className = "menu-items";

    category.items.forEach(item => {
      const card = document.createElement("article");
      card.className = "menu-item";

      card.innerHTML = `
  ${
    item.image
      ? `<img
          class="menu-item-image"
          src="${item.image}"
          alt="${item.name}"
          loading="lazy"
        >`
      : ""
  }

  <div class="menu-item-info">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
  </div>

  
<div class="menu-price">
  ${formatNaira(item.price)}
</div>

<button
  type="button"
  class="add-to-cart-btn"
  data-name="${item.name}"
  data-price="${item.price}"
>
  🛒 Add to Cart
</button>

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
  const container = document.getElementById("order-menu");

  if (!container) return;

  container.innerHTML = "";

  menuData.forEach(category => {
    const categoryTitle = document.createElement("h3");

    categoryTitle.style.marginTop = "20px";
    categoryTitle.style.marginBottom = "10px";
    categoryTitle.style.color = "#facc15";

    categoryTitle.textContent =
      `${category.icon} ${category.category}`;

    container.appendChild(categoryTitle);

    category.items.forEach((item, index) => {
      const uniqueId = `food-${category.category}-${index}`
        .replace(/\s+/g, "-")
        .toLowerCase();

      const row = document.createElement("label");
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

          ${
  item.image
    ? `<img
        class="order-item-image"
        src="${item.image}"
        alt="${item.name}"
        loading="lazy"
      >`
    : ""
}

        <div class="order-item-info">
          <strong>${item.name}</strong>
          <small>${item.description}</small>
        </div>

        <div class="order-item-price">
          ${formatNaira(item.price)}
        </div>

        <div class="quantity-control">
          <button
            type="button"
            class="quantity-btn minus"
            disabled
            aria-label="Decrease ${item.name} quantity"
          >−</button>

          <input
            class="quantity"
            type="number"
            min="1"
            step="1"
            value="1"
            disabled
            aria-label="Quantity for ${item.name}"
          >

          <button
            type="button"
            class="quantity-btn plus"
            disabled
            aria-label="Increase ${item.name} quantity"
          >+</button>
        </div>
      `;

      const checkbox = row.querySelector(".order-check");
      const quantity = row.querySelector(".quantity");
      const minusButton = row.querySelector(".minus");
      const plusButton = row.querySelector(".plus");

      checkbox.addEventListener("change", () => {
        quantity.disabled = !checkbox.checked;
        minusButton.disabled = !checkbox.checked;
        plusButton.disabled = !checkbox.checked;

        quantity.value = 1;

        calculateTotal();
      });

      plusButton.addEventListener("click", () => {
        if (!checkbox.checked) return;

        quantity.value =
          Math.max(1, Number(quantity.value) || 1) + 1;

        calculateTotal();
      });

      minusButton.addEventListener("click", () => {
        if (!checkbox.checked) return;

        quantity.value =
          Math.max(1, (Number(quantity.value) || 1) - 1);

        calculateTotal();
      });

      quantity.addEventListener("input", calculateTotal);

      quantity.addEventListener("change", () => {
        const value = Number(quantity.value);

        quantity.value =
          Number.isFinite(value) && value >= 1
            ? Math.floor(value)
            : 1;

        calculateTotal();
      });

      container.appendChild(row);
    });
  });
}

/* =========================================================
   CALCULATE TOTAL
========================================================= */

function calculateTotal() {
  const selected = document.querySelectorAll(
    ".order-item .order-check:checked"
  );

  let total = 0;

  selected.forEach(checkbox => {
    const row = checkbox.closest(".order-item");
    const price = Number(row.dataset.price);

    const quantity =
      Number(row.querySelector(".quantity").value) || 1;

    total += price * quantity;
  });

  const totalElement = document.getElementById("order-total");

  if (totalElement) {
    totalElement.textContent = formatNaira(total);
  }

  return total;
}

/* =========================================================
   GET SELECTED ITEMS
========================================================= */

function getSelectedItems() {
  const selected = document.querySelectorAll(
    ".order-item .order-check:checked"
  );

  const items = [];

  selected.forEach(checkbox => {
    const row = checkbox.closest(".order-item");

    const name = row.dataset.name;
    const price = Number(row.dataset.price);

    const quantity =
      Number(row.querySelector(".quantity").value) || 1;

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
    const itemTotal = item.price * item.quantity;

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
   LOAD SAVED ORDER FROM LOCAL STORAGE
========================================================= */


function loadSavedOrder() {
  const savedOrder = localStorage.getItem("mamaPutLastOrder");

  if (!savedOrder) return;

  try {
    const order = JSON.parse(savedOrder);

    // Restore selected food items and quantities
    if (Array.isArray(order.items)) {
      order.items.forEach(savedItem => {
        const rows = document.querySelectorAll(".order-item");

        rows.forEach(row => {
          if (row.dataset.name !== savedItem.name) return;

          const checkbox = row.querySelector(".order-check");
          const quantity = row.querySelector(".quantity");
          const minusButton = row.querySelector(".minus");
          const plusButton = row.querySelector(".plus");

          checkbox.checked = true;
          quantity.disabled = false;
          minusButton.disabled = false;
          plusButton.disabled = false;

          quantity.value = Math.max(
            1,
            Math.floor(Number(savedItem.quantity) || 1)
          );
        });
      });
    }

    // Restore customer form details
    const fields = {
      phone: order.phone,
      address: order.address,
      date: order.date,
      time: order.time,
      note: order.note
    };

    Object.entries(fields).forEach(([id, value]) => {
      const field = document.getElementById(id);

      if (field && value != null) {
        field.value = value;
      }
    });

    // Restore urgency selection
    if (order.urgency) {
      const urgencyInput = document.querySelector(
        'input[name="urgency"][value="' + order.urgency + '"]'
      );

      if (urgencyInput) {
        urgencyInput.checked = true;
      }
    }

    // Recalculate the total
    calculateTotal();

    console.log("Saved order restored successfully!", order);

  } catch (error) {
    console.error("Could not restore saved order:", error);
  }
}



/* =========================================================
   ORDER FORM
========================================================= */

function setupOrderForm() {
  const form = document.getElementById("order-form");

  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const items = getSelectedItems();

    if (items.length === 0) {
      alert("Please select at least one food item.");
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

    const urgencyInput = document.querySelector(
      'input[name="urgency"]:checked'
    );

    if (!urgencyInput) {
      alert("Please select an urgency option.");
      return;
    }

    const urgency = urgencyInput.value;
    const total = calculateTotal();

    const message = createWhatsAppMessage(
      items,
      phone,
      address,
      date,
      time,
      urgency,
      note,
      total
    );

    
const order = {
  id: Date.now(),
  items,
  phone,
  address,
  date,
  time,
  urgency,
  note,
  total,
  createdAt: new Date().toISOString()
};

// Keep the existing last-order feature
localStorage.setItem(
  "mamaPutLastOrder",
  JSON.stringify(order)
);

// Add this order to the order history
const savedHistory =
  JSON.parse(localStorage.getItem("mamaPutOrderHistory")) || [];

savedHistory.push(order);

localStorage.setItem(
  "mamaPutOrderHistory",
  JSON.stringify(savedHistory)
);


    const whatsappURL =
      `https://wa.me/${RESTAURANT_WHATSAPP}?text=${
        encodeURIComponent(message)
      }`;

    window.open(whatsappURL, "_blank");

    setTimeout(() => {
      window.location.href = "success.html";
    }, 700);
  });
}

/* =========================================================
   SET MINIMUM DATE
========================================================= */

function setupDate() {
  const dateInput = document.getElementById("date");

  if (!dateInput) return;

  const today = new Date();

  const year = today.getFullYear();

  const month = String(today.getMonth() + 1)
    .padStart(2, "0");

  const day = String(today.getDate())
    .padStart(2, "0");

  dateInput.min = `${year}-${month}-${day}`;
}

/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

function updateCartCount() {
  const cartCount = document.getElementById("cart-count");

  if (!cartCount) return;

  const cart = JSON.parse(
    localStorage.getItem("mamaPutCart") || "[]"
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  cartCount.textContent = totalItems;
}

function setupAddToCartButtons() {
  updateCartCount();
  const buttons = document.querySelectorAll(".add-to-cart-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const price = Number(button.dataset.price);

      let cart = JSON.parse(
        localStorage.getItem("mamaPutCart") || "[]"
      );

      const existingItem = cart.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          name: name,
          price: price,
          quantity: 1
        });
      }

      localStorage.setItem("mamaPutCart", JSON.stringify(cart));

      button.textContent = "✓ Added to Cart";

      setTimeout(() => {
        button.textContent = "🛒 Add to Cart";
      }, 1200);
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  createMenuPage();
  setupAddToCartButtons();
  updateCartCount();
  createOrderPage();
  loadSavedOrder();
  setupOrderForm();
  setupDate();
});