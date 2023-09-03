
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

