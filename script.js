let likeIcon = document.querySelector("#like-icon");
let likedMenu = document.querySelector(".liked-menu");
let triangleUp = document.querySelector(".triangle-up");
let cartIcon = document.querySelector("#cart-icon");
let cartMenu = document.querySelector(".cart-menu");
let cartTriangleUp = document.querySelector(".cart-triangle-up");

likeIcon.onclick = () => {
  likedMenu.classList.toggle("active");
  triangleUp.classList.toggle("active");
  // Close cart menu when opening liked menu
  closeCartMenu();
}

cartIcon.onclick = () => {
  cartMenu.classList.toggle("active");
  cartTriangleUp.classList.toggle("active");
  // Close liked menu when opening cart menu
  closeLikedMenu();
}

// Function to close the liked menu
function closeLikedMenu() {
  likedMenu.classList.remove("active");
  triangleUp.classList.remove("active");
}

// Function to close the cart menu
function closeCartMenu() {
  cartMenu.classList.remove("active");
  cartTriangleUp.classList.remove("active");
}

// Handling scroll event to close both menus
window.addEventListener('scroll', () => {
  closeLikedMenu();
  closeCartMenu();
});

// Handling click event outside the menus to close them
document.body.addEventListener('click', (event) => {
  const isClickedOutsideLikedMenu = !likedMenu.contains(event.target) && event.target !== likeIcon;
  const isClickedOutsideCartMenu = !cartMenu.contains(event.target) && event.target !== cartIcon;
  
  if (isClickedOutsideLikedMenu) {
    closeLikedMenu();
  }
  
  if (isClickedOutsideCartMenu) {
    closeCartMenu();
  }
});






//sa view this menu
// Selecting all elements with the class '.add-btn'
let addBtns = document.querySelectorAll('.add-btn');
let exitButton = document.querySelector(".prev-exit");

// Function to close the overlay and view-menu
function closeOverlay() {
  let overlay = document.querySelector(".overlay");
  let viewmenu = document.querySelector(".view-menu");
  overlay.classList.remove("active");
  viewmenu.classList.remove("active");
  // Clear the contents when closing
  viewmenu.innerHTML = '';
}

// Function to open the overlay and view-menu and append content
function openViewMenu(productName, productPrice, productImageSrc) {
  let overlay = document.querySelector(".overlay");
  let viewmenu = document.querySelector(".view-menu");

  // Creating the elements
  let prevImg = document.createElement('div');
  prevImg.classList.add('prev-img');
  prevImg.innerHTML = `<img src="${productImageSrc}" alt="">`;

  let prevExit = document.createElement('div');
  prevExit.classList.add('prev-exit');
  prevExit.innerHTML = `
    <i class="fa-solid fa-xmark"></i> 
    <h1>close</h1>
  `;
  prevExit.addEventListener('click', closeOverlay);

  let prevInfo = document.createElement('div');
  prevInfo.classList.add('prev-info');
  prevInfo.innerHTML = `
    <h3 class="prev-price">${productPrice}</h3>
    <h2 class="prev-name">${productName}</h2>
  `;

  let options = document.createElement('div');
  options.classList.add('options');
  options.innerHTML = `
    <h2>Available Options:</h2>
    <div class="select">
      <select>
        <option value="1">Option1</option>
        <option value="2">Option2</option>
        <option value="3">Option3</option>
      </select>
    </div>
  `;

  // Appending created elements to view-menu
  viewmenu.innerHTML = ''; // Clear existing content
  viewmenu.appendChild(prevImg);
  viewmenu.appendChild(prevExit);
  viewmenu.appendChild(prevInfo);
  viewmenu.appendChild(options);

  // Open the overlay and view-menu
  overlay.classList.add("active");
  viewmenu.classList.add("active");
}

// Looping through all elements with the class '.add-btn' and adding click event listeners
addBtns.forEach(addBtn => {
  addBtn.addEventListener('click', (event) => {
    // Get the product details from the clicked button's parent node or other elements as needed
    let productInfo = event.target.closest('.menu-box');
    let productName = productInfo.querySelector('.product-name').textContent;
    let productPrice = productInfo.querySelector('.price').textContent;
    let productImageSrc = productInfo.querySelector('.menu-image img').src;

    openViewMenu(productName, productPrice, productImageSrc);
  });
});

// Adding click event listener to the exit button
exitButton.addEventListener('click', closeOverlay);








//menulike ANIMATION
const likeButtons = document.querySelectorAll('.like-btn');
      likeButtons.forEach(button => {
        button.addEventListener('click', function() {
          this.classList.toggle('is-active');
        });
      });


      document.addEventListener('DOMContentLoaded', function() {
        const likeButtons = document.querySelectorAll('.like-btn');
      
        likeButtons.forEach(button => {
          button.addEventListener('click', toggleFavorite);
        });
      
        function toggleFavorite(event) {
          const productInfo = event.target.closest('.menu-box');
          const productName = productInfo.querySelector('.product-name').textContent;
          const productPrice = productInfo.querySelector('.price').textContent;
          const productImageSrc = productInfo.querySelector('.menu-image img').src;
      
          const likedMenu = document.querySelector('.liked-menu');
          const existingItems = likedMenu.querySelectorAll('.fav-name');
      
          let itemExists = false;
          let itemToRemove = null;
      
          existingItems.forEach(item => {
            if (item.textContent === productName) {
              itemExists = true;
              itemToRemove = item.parentElement.parentElement;
              return;
            }
          });
      
          if (itemExists) {
            // Remove the item from the liked menu
            itemToRemove.remove();
          } else {
            // Add the item to the liked menu
            const likeItem = document.createElement('div');
            likeItem.classList.add('item');
            likeItem.innerHTML = `
              <div class="fav-image"><img src="${productImageSrc}"></div>
              <div class="description">
                <span class="fav-name">${productName}</span>
                <span class="fav-price">${productPrice}</span>
              </div>
            `;
            
            likedMenu.appendChild(likeItem);
      
            // Add event listener to the newly added delete button
            const deleteButton = likeItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', removeItem);
          }
        }
      
        function removeItem(event) {
          const itemToRemove = event.target.closest('.item');
          itemToRemove.remove();
          
          // Prevent closing the liked menu when deleting an item
          event.stopPropagation();
        }
      });


       //hamburger menu
       const hamburger = document.querySelector(".hamburger");
       const navMenu = document.querySelector(".nav-menu");
       const navLink = document.querySelectorAll(".nav-link");
       
       hamburger.addEventListener("click", mobileMenu);
       navLink.forEach(n => n.addEventListener("click", closeMenu));
       
       function mobileMenu() {
           hamburger.classList.toggle("active");
           navMenu.classList.toggle("active");
       }
       
       function closeMenu() {
           hamburger.classList.remove("active");
           navMenu.classList.remove("active");
       }


document.addEventListener("DOMContentLoaded", function() {
  var index = 0;
  var images = document.querySelectorAll('.pictures img');
  var totalImages = images.length;

  function nextImage() {
      images[index].style.display = 'none';
      index = (index + 1) % totalImages;
      images[index].style.display = 'block';
  }

  setInterval(nextImage, 2000); // Change 2000 to the desired interval in milliseconds (e.g., 3000 for 3 seconds)
});
