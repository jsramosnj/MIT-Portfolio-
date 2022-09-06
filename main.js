window.onload=function(){
    const menuemail = document.querySelector('.navbar-email');
    const desktopmenu = document.querySelector('.desktop-menu');
    const menuHamIcon = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const aside = document.querySelector('.product-detail');
    const menucarritoicon = document.querySelector('.navbar-shopping-cart');
    const cardsContainer = document.querySelector('.cards-container');


    menuemail.addEventListener('click', toggledesktopmenu);
    menuHamIcon.addEventListener('click', togglemobilemenu);
    menucarritoicon.addEventListener('click', togglecarrito);


    function toggledesktopmenu () {
      desktopmenu.classList.toggle('inactive');
      aside.classList.add('inactive');
    }


    function togglemobilemenu() {
        mobileMenu.classList.toggle('inactive');
        aside.classList.add('inactive');
      }

      function togglecarrito(){
        aside.classList.toggle('inactive');
        mobileMenu.classList.add('inactive');
        desktopmenu.classList.add('inactive');
      }

      const productList = [];
      productList.push({
      name: 'bike',  
      price: 120,
      Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
      });


      productList.push({
        name: 'pantalla',  
        price: 300,
        Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
        });

        productList.push({
          name: 'carro',  
          price: 800,
          Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
          });
    
  for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg= document.createElement('img');
    productImg.setAttribute('src', product.Image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name; 

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    



    const productInfoFigure = document.createElement('figure');
    const productImgcart = document.createElement('img');
    productImgcart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgcart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);



  } 

    }


 










