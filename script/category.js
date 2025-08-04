// console.log('Lets bring the animals');


console.log('hello world');
// load those data
const loadCategories = () => {
    // fetch data from api server 
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories)
        )
        .catch((error) => console.log(error)
        )

}

//display category data on your page




displayCategories = (categories) => {

    const buttons = document.getElementById('btn-container-item');

    categories.forEach((item) => {
        console.log(item);


        buttons.innerHTML += `

    
        <button  class=" btn border hover:border-2 hover:border-[#0E7A81] hover:bg-[rgba(14,122,129,0.10)]  rounded-2xl hover:rounded-full border-slate-400  px-16  h-20 text-lg" id="btn-${item.id}" onclick="loadCategoryVideo(${item.id})" class="btn btn-category">
     <img   class="w-10" src="${item.category_icon}" alt="" ">  <span class=""> ${item.category}</span>
        </button>
        `
    });



    // 
    //             
    //                 <button
    //                     class="btn border hover:border-2 hover:border-[#0E7A81] hover:bg-[rgba(14,122,129,0.10)]  rounded-2xl hover:rounded-full border-slate-400  px-16  h-20 text-lg"><img
    //                         class="w-10" src="./asset/images/dog.png" alt="" ">Dogs
    //                     </button> 



    //                 <button  class=" btn border hover:border-2 hover:border-[#0E7A81] hover:bg-[rgba(14,122,129,0.10)]
    //                         rounded-2xl hover:rounded-full border-slate-400 px-16 h-20 text-lg"><img class="w-10"
    //                         src=" ./asset/images/cat.png" alt="" ">Cats
    //                     </button>
    //                 <button  class=" btn border hover:border-2 hover:border-[#0E7A81] hover:bg-[rgba(14,122,129,0.10)]
    //                         rounded-2xl hover:rounded-full border-slate-400 px-16 h-20 text-lg"><img class="w-10"
    //                         src=" ./asset/images/rabbit.png" alt="" ">Rabits
    //                     </button>
    //                 <button  class=" btn border hover:border-2 hover:border-[#0E7A81] hover:bg-[rgba(14,122,129,0.10)]
    //                         rounded-2xl hover:rounded-full border-slate-400 px-16 h-20 text-lg"><img class="w-10"
    //                         src=" ./asset/images/bird.png" alt="" ">Birds
    //                     </button>
    //             </div>
    //         </div>
    //     </section>









    // `



    // console.log('Lets bring the animals');

    // // 1. Get the container where buttons will be placed
    // const buttons = document.getElementById('btn-container');

    // // 2. Add the buttons HTML (exactly like your original)
    // buttons.innerHTML = `
    //     <h1 class="text-4xl font-extrabold">Adopt Your Best Friend</h1>
    //     <p class="py-7 text-2 text-base">It is a long established fact that a reader will be distracted by the readable content.</p>
    //     <div class="grid grid-cols-2 lg:grid-cols-4 gap-7 justify-around mt-10">
    //         <button class="btn">Dogs</button>
    //         <button class="btn">Cats</button>
    //         <button class="btn">Rabbits</button>
    //         <button class="btn">Birds</button>
    //     </div>
    // `;

    // 3. When any button is clicked, show animal details
    // buttons.addEventListener('click', () => {
    //     // 4. Get the category section to update
    //     const categorySection = document.getElementById('category');

    //     // 5. Show simple message when clicked (you can customize this)
    //     categorySection.innerHTML = `
    //     <h2 class="text-3xl font-bold">Please select an animal</h2>
    //     <p>Click on any animal button above to see details</p>
    // `;
    // });

}
loadCategories();