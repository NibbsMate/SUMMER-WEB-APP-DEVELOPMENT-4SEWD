let products = [];

function addProduct() {
  let name = document.getElementById("productName").value;
  let qty = document.getElementById("productQty").value;
  let price = document.getElementById("productPrice").value;

  if (name === "" || qty === "" || price === "") {
    alert("Please fill all fields");
    return;
  }

  let product = {
    name: name,
    qty: Number(qty),
    price: Number(price),
  };

  products.push(product);

  clearInputs();
  displayProducts();
}

function displayProducts() {
  let table = document.getElementById("productTable");
  table.innerHTML = "";

  let totalQty = 0;
  let totalValue = 0;

  for (let i = 0; i < products.length; i++) {
    let total = products[i].qty * products[i].price;
    totalQty += products[i].qty;
    totalValue += total;

    let stockStatus = "";

    if (products[i].qty <= 5) {
      stockStatus = "<span class='low-stock'>Low Stock</span>";
    } else {
      stockStatus = "<span class='in-stock'>In Stock</span>";
    }

    table.innerHTML += `
            <tr>
                <td>${products[i].name}</td>
                <td>${products[i].qty}</td>
                <td>Rs. ${products[i].price}</td>
                <td>Rs. ${total}</td>
                <td>${stockStatus}</td>
                <td>
                    <button class="edit-btn" onclick="editProduct(${i})">Edit</button>
                    <button class="delete-btn" onclick="deleteProduct(${i})">Delete</button>
                </td>
            </tr>
        `;
  }

  document.getElementById("totalProducts").innerHTML = products.length;
  document.getElementById("totalStock").innerHTML = totalQty;
  document.getElementById("totalValue").innerHTML = "Rs. " + totalValue;
}

function deleteProduct(index) {
  products.splice(index, 1);
  displayProducts();
}

function editProduct(index) {
  document.getElementById("productName").value = products[index].name;
  document.getElementById("productQty").value = products[index].qty;
  document.getElementById("productPrice").value = products[index].price;

  products.splice(index, 1);
  displayProducts();
}

function clearInputs() {
  document.getElementById("productName").value = "";
  document.getElementById("productQty").value = "";
  document.getElementById("productPrice").value = "";
}

function searchProduct() {
  let search = document.getElementById("searchBox").value.toLowerCase();
  let rows = document.querySelectorAll("#productTable tr");

  for (let i = 0; i < rows.length; i++) {
    let productName = rows[i].children[0].innerText.toLowerCase();

    if (productName.includes(search)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}
