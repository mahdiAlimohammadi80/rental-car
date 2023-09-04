
const products = [
    { name: 'Product A',company:'benz',Image:'image/5.jpg' ,people:3,price: 3000, model: 2022, type: 'Jeep', options: ['GPS', 'Sunroof'] },
    { name: 'Product B',company:'benz',Image:'image/6.jpg',people:3, price: 3500, model: 2021, type: 'sedan', options: ['GPS','Keyless Start'] },
    { name: 'Product C',company:'benz',Image:'image/3.jpg',people:3, price: 4000, model: 2020, type: 'sedan', options: ['GPS','Sunroof'] },
    { name: 'Product D',company:'benz',Image:'image/8.jpg',people:1, price: 4500, model: 2019, type: 'Sport', options: ['Keyless Start'] },
    { name: 'Product E',company:'benz',Image:'image/9.jpg' ,people:3,price: 3000, model: 2022, type: 'Jeep', options: ['GPS', 'Sunroof'] },
    { name: 'Product F',company:'benz',Image:'image/10.jpg',people:3, price: 3500, model: 2021, type: 'sedan', options: ['GPS','Keyless Start'] },
    { name: 'Product G',company:'benz',Image:'image/2.jpg',people:3, price: 4000, model: 2020, type: 'sedan', options: ['GPS','Sunroof'] },
    { name: 'Product H',company:'benz',Image:'image/11.jpg',people:1, price: 3500, model: 2019, type: 'Sport', options: ['GPS'] },

];

const productList = document.querySelector('.car-cards');
console.log(productList);

products.forEach((product)=>{
    let carCard =`<div class="car-card">
    <div class="label">
        <span>10</span>
        <i class="fa-solid fa-percent"></i>
    </div>
    <div class="image">
        <img src="${product.Image}" alt="product-img">
    </div>
    <div class="details">
        <h4 class="card-title">${product.name}</h4>
        <span class="car-company">${product.company}</span>
        <div class="color-box">
            <span>Color :</span>
            <div class="colors">
                <div class="color active" style="background-color: red;" data-color="red"></div>
                <div class="color" style="background-color: blue;" data-color="blue"></div>
                <div class="color" style="background-color: gray;" data-color="gray"></div>
            </div>
        </div>
        <div class="Specification">
            <div class="type-box Specification-box">
                <span class="text">Type :&nbsp</span>
                <span class="type main-Specification">${product.type}</span>
            </div>
            <div class="model-box Specification-box">
                <span class="text">Model :&nbsp</span>
                <span class="model main-Specification">${product.model}</span>
            </div>
            <div class="people-box Specification-box">
                <span class="text">People :&nbsp</span>
                <span class="people main-Specification">${product.people}</span>
            </div>
        </div>
        <div class="info">
          <span class="info-text">Special Option :</span>
          <div class="main-info-box">
          ${product.options.map(option => `
              <div class="info-box">
                  <i class="fa-solid fa-font-awesome"></i>
                  <span>${option}</span>
              </div>
      `).join('')}
            </div>
</div>

        <div class="price-button">
            <div class="price">
                <span class="main-price">${product.price}$</span>
                <div class="discount">
                    <span class="discount-text">185$</span>
                    <div class="discount-time">
                        <div class="time">
                            <span class="time-number ">3</span>
                            <span class="time-text ">Day</span>
                        </div>
                        <div class="time">
                            <span class="time-number ">13</span>
                            <span class="time-text ">hour</span>
                        </div>
                        <div class="time">
                            <span class="time-number ">34</span>
                            <span class="time-text ">minute</span>
                        </div>
                        <div class="time">
                            <span class="time-number ">38</span>
                            <span class="time-text ">second</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="button">
                <button class="select-btn">Select</button>
            </div>
        </div>
    </div>
</div>`;
    productList.insertAdjacentHTML('beforeend', carCard);
  });

  //--------------------------------------------------------------

  // price range

const rangeInputs = document.querySelectorAll('.range-input input');
const progress = document.querySelector('.progress');
const priceNumber = document.querySelectorAll('.number-box input');
console.log(priceNumber);

let priceBetween = 1500;

priceNumber.forEach(function(input){
    input.addEventListener('input',function(e){
        let minVal = parseInt(priceNumber[0].value);
        let maxVal =  parseInt(priceNumber[1].value);

        if((maxVal - minVal >= priceBetween) && maxVal <=10000){
            if(e.target.className == 'min-value'){
                rangeInputs[0].value = minVal ;
                progress.style.left = (minVal / rangeInputs[0].max) * 100+'%';
                applyFilters();
            }else{
                rangeInputs[1].value = maxVal ;
                progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100+'%';
                applyFilters();
            }
        }

        
    })
})


rangeInputs.forEach(function(input){
    input.addEventListener('input',function(e){
        let minVal = parseInt(rangeInputs[0].value);
        let maxVal =  parseInt(rangeInputs[1].value);

        if(maxVal - minVal < priceBetween){
            if(e.target.className == 'min-input'){
                rangeInputs[0].value = maxVal - priceBetween ;
            }else{
                rangeInputs[1].value = minVal + priceBetween ;
            }
        }else{
            priceNumber[0].value = minVal;
            priceNumber[1].value = maxVal;
            progress.style.left = (minVal / rangeInputs[0].max) * 100+'%';
            progress.style.right = 100 - (maxVal / rangeInputs[1].max) * 100+'%';
        }

       
    })
})

//------------------------------------------------------------------

// show filter-list

const modelSelect = document.querySelector('.car-model .select');
const modelHeaderSelect = document.querySelector('.car-model .select .header');
const OptionSelect = document.querySelector('.special-option .select');
const OptionHeaderSelect = document.querySelector('.special-option .select .header');

modelSelect.addEventListener('click',()=>{
    modelHeaderSelect.classList.toggle('active');
})

OptionSelect.addEventListener('click',()=>{
    OptionHeaderSelect.classList.toggle('active');
})

//----------------------------------------------------------------

// model filter select 

const modelItem = document.querySelectorAll('.car-model .select-item');
const selectModelInput = document.querySelector('#model-input');

modelItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        modelSelect.classList.remove('active');
        selectModelInput.setAttribute('value', item.innerHTML);
        applyFilters();
    })
});

//----------------------------------------------------------------

// special option filter select

const optionItem = document.querySelectorAll('.special-option .select-item');
const optionHeaderText = document.querySelector('.special-option .header-text');
const optionList = document.querySelector('.option-list');

let allOption =[];


function deleteOption(elem){
    let specialOptionValue = elem.closest('.option-box').querySelector('span').innerHTML;
    let findOption = allOption.findIndex((option)=>{
        return option.name == specialOptionValue;
    })
    allOption.splice(findOption , 1);
    showOption();
    applyFilters();
}

function showOption(){
    document.querySelectorAll('.option-list .option-box').forEach((item)=>{
        item.remove();
    })
    allOption.forEach((option)=>{
        let newItem = `<div class="option-box">
        <span>${option.name}</span>
        <i class='bx bx-x' onclick="deleteOption(this)"></i>
    </div>`;
    optionList.innerHTML += newItem; 
    })
}

optionItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        let findOption = allOption.find((option)=>{
            return option.name == item.innerHTML;
        })
        if(findOption){
            return;
        }else{
            let newOption ={
                name:item.innerHTML
            }
            allOption.push(newOption);
            showOption();
            applyFilters();
        }
    })
})

//----------------------------------------------------------------

// type filter select

const typeItem = document.querySelectorAll('.car-type .type input');
typeItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        document.querySelector('.car-type .type input.active').classList.remove('active');
        item.classList.add('active');
        applyFilters();
    })
})

//----------------------------------------------------------------

// apply filter

let filteredProducts = [...products];
  
function applyFilters() {
    const minPrice = parseInt(document.querySelector('.min-value').value);
    const maxPrice = parseInt(document.querySelector('.max-value').value);
    const selectedModel = selectModelInput.getAttribute('value');
    const selectedType = document.querySelector('.type .active').value;

    filteredProducts = products.filter(product => {
        return product.price >= minPrice && product.price <= maxPrice;
    });
    
    if (selectedType !== 'No Type') {
        filteredProducts = products.filter(product => {
            return product.type === selectedType &&
                    product.price >= minPrice &&
                    product.price <= maxPrice 
        });
    }

    if (selectedModel !== 'All') {
        filteredProducts = products.filter(product => {
            return product.model === parseInt(selectedModel) &&
                    product.price >= minPrice &&
                    product.price <= maxPrice &&
                    product.type === selectedType ;
        });
    }
    if (selectedModel == 'All' && selectedType == 'No Type') {
        filteredProducts = products.filter(product => {
            return product.price >= minPrice &&
                    product.price <= maxPrice 
                  
        });
    }
    if (selectedModel == 'All' && selectedType != 'No Type') {
        filteredProducts = products.filter(product => {
            return product.price >= minPrice &&
                    product.price <= maxPrice &&
                    product.type === selectedType 
        });
    }
    if (selectedModel != 'All' && selectedType == 'No Type') {
        filteredProducts = products.filter(product => {
            return product.price >= minPrice &&
                    product.price <= maxPrice &&
                    product.model === parseInt(selectedModel)
        });
    }
    
    if (allOption.length > 0) {
        filteredProducts = filteredProducts.filter(product => {
            return allOption.every(option => product.options.includes(option.name));
        });
    }
    updateProductList()
}

// show product after filter

function updateProductList() {
    const productList = document.querySelector('.car-cards');
    productList.innerHTML = ''; 
  
    filteredProducts.forEach(product => {
      let newCard = `<div class="car-card">
      <div class="label">
          <span>10</span>
          <i class="fa-solid fa-percent"></i>
      </div>
      <div class="image">
          <img src="${product.Image}" alt="product-img">
      </div>
      <div class="details">
          <h4 class="card-title">${product.name}</h4>
          <span class="car-company">Benz</span>
          <div class="color-box">
              <span>Color :</span>
              <div class="colors">
                  <div class="color active" style="background-color: red;" data-color="red"></div>
                  <div class="color" style="background-color: blue;" data-color="blue"></div>
                  <div class="color" style="background-color: gray;" data-color="gray"></div>
              </div>
          </div>
          <div class="Specification">
              <div class="type-box Specification-box">
                  <span class="text">Type :&nbsp</span>
                  <span class="type main-Specification">${product.type}</span>
              </div>
              <div class="model-box Specification-box">
                  <span class="text">Model :&nbsp</span>
                  <span class="model main-Specification">${product.model}</span>
              </div>
              <div class="people-box Specification-box">
                  <span class="text">People :&nbsp</span>
                  <span class="people main-Specification">${product.people}</span>
              </div>
          </div>
          <div class="info">
            <span class="info-text">Special Option :</span>
            <div class="main-info-box">
            ${product.options.map(option => `
                <div class="info-box">
                    <i class="fa-solid fa-font-awesome"></i>
                    <span>${option}</span>
                </div>
        `).join('')}
    </div>
</div>

          <div class="price-button">
              <div class="price">
                  <span class="main-price">${product.price}$</span>
                  <div class="discount">
                      <span class="discount-text">2200$</span>
                      <div class="discount-time">
                          <div class="time">
                              <span class="time-number ">3</span>
                              <span class="time-text ">Day</span>
                          </div>
                          <div class="time">
                              <span class="time-number ">13</span>
                              <span class="time-text ">hour</span>
                          </div>
                          <div class="time">
                              <span class="time-number ">34</span>
                              <span class="time-text ">minute</span>
                          </div>
                          <div class="time">
                              <span class="time-number ">38</span>
                              <span class="time-text ">second</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="button">
                  <button class="select-btn" onclick="selectCar(this)">Select</button>
              </div>
          </div>
      </div>
  </div>`;

      productList.innerHTML += newCard;
    });
  }

  document.querySelectorAll('.main-filter-box input, .main-filter-box select').forEach(input => {
    input.addEventListener('input', applyFilters);
  });

  //-----------------------------------------------------------

  // select car and add to modal rent

  let modalArray = [];

  const modalBox = document.querySelector('.modal-rent');

  function showModal(){
    modalBox.innerHTML ='';
    modalArray.forEach((modal)=>{
        let newItem = `<div class="title-closeBtn">
        <h2 class="main-title">Order details</h2>
        <i class='bx bx-x modal-pay-close' onclick="closeModal(this)"></i>
    </div>
    <div class="info-form">
        <div class="info">
            <div class="image-name">
                <div class="image">
                    <img src="${modal.image}" alt="car-picture" class="modal-image">
                </div>
                <div class="name">
                    <h4 class="car-name">${modal.name}</h4>
                    <span>${modal.company}</span>
                </div>
            </div>
            <div class="details">
                <div class="color-box">
                    <span>Color :</span>
                    <div class="colors">
                        <div class="color active" style="background-color: red;" data-color="red"></div>
                    </div>
                </div>
                <div class="Specification">
                    <div class="type-box Specification-box">
                        <span class="text">Type :&nbsp</span>
                        <span class="type main-Specification">${modal.type}</span>
                    </div>
                    <div class="model-box Specification-box">
                        <span class="text">Model :&nbsp</span>
                        <span class="model main-Specification">${modal.model}</span>
                    </div>
                </div>
                <div class="info">
                    <span class="info-text">Special Option</span>
                    <div class="main-info-box">
                    ${modal.options.map(option=>`
                    <div class="info-box">
                    <i class="fa-solid fa-font-awesome"></i>
                    <span>${option}</span>
                </div>
                    ` ).join('')}
                        
                    </div>
                </div>
                <div class="price">
                    <div class="main-discount">
                        <span class="main text">Price :&nbsp<span class="main-number num">${modal.price}$</span></span>
                        <span class="discount text">Discount :&nbsp<span class="discount-number num">0%(0$)</span></span>
                    </div>
                    <span class="total-text text">Total Price :&nbsp<span class="total-number num">${modal.price}$</span></span>
                </div>
            </div>
        </div>
        <div class="form">
            <form action="">
                <h4>User & Date Information</h4>
                <div class="row">
                    <div class="column">
                        <label for="">Name</label>
                        <input type="text">
                    </div>
                    <div class="column">
                        <label for="">LastName</label>
                        <input type="text">
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <label for="">Code</label>
                        <input type="number">
                    </div>
                    <div class="column">
                        <label for="">Phone</label>
                        <input type="number">
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <label for="">Date Start</label>
                        <input type="date" disabled>
                    </div>
                    <div class="column">
                        <label for="">Date End</label>
                        <input type="date" disabled>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <label for="">Email</label>
                        <input type="email">
                    </div>
                    <div class="column">
                        <button class="pay-btn">Pay</button>
                    </div>
                </div>
                
            </form>
        </div>
    </div>`;
    modalBox.innerHTML = newItem;
    })
}

  function selectCar(elem){
    let expectCar = elem.closest('.car-card');
    let carTitle = expectCar.querySelector('.card-title').innerHTML;
    products.forEach((product)=>{
        if(product.name == carTitle){
            let newOrder = {
                name:product.name,
                image:product.Image,
                price:product.price,
                company:product.company,
                options:product.options,
                type:product.type,
                model:product.model
            }
            modalArray.push(newOrder);
            showModal();
            modalArray =[];
        }
    })
    document.body.classList.add('active');
}