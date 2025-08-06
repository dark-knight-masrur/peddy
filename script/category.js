// // console.log('Lets bring the animals');


// // console.log('hello world');
// // load those pet data from api
// const loadCategories = () => {
//     // fetch data from api server 
//     fetch('https://openapi.programming-hero.com/api/peddy/categories')
//         .then((res) => res.json())
//         .then((data) => displayCategories(data.categories)
//         )
//         .catch((error) => console.log(error)
//         )

// }


// // load animal by category wise

// const loadCategoryAnimals = (id) => {
//     fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
//         .then((res) => res.json())
//         .then((data) => {

//             // Actually call displayAmimals with the data
//             displayAmimals(data.pets);  // This was missing
//         })
//         .catch((error) => console.log(error));
// }

// //display pets data on your page




// displayCategories = (categories) => {

//     const buttons = document.getElementById('btn-container-item');

//     categories.forEach((item) => {
//         console.log(item);


//         buttons.innerHTML += `

    
//         <button onclick="loadCategoryAnimals(${item.id})" class="btn-category btn border hover:border-2 hover:border-[#0E7A81] hover:bg-[rgba(14,122,129,0.10)]  rounded-2xl hover:rounded-full border-slate-400  px-16  h-20 text-lg" id="btn-${item.id}"  >
//      <img   class="w-10" src="${item.category_icon}" alt="" ">  <span class=""> ${item.category}</span>
//         </button>
//         `
//     });



// }
// loadCategories();