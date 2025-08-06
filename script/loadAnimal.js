// console.log('hello world');

// const loadAmimals = () => {
//   // fetch data from api server 
//   fetch('https://openapi.programming-hero.com/api/peddy/pets')
//     .then((res) => res.json())
//     .then((data) => displayAmimals(data.pets)
//     )
//     .catch((error) => console.log(error)
//     )

// }


// //display animal in html

// const displayAmimals = (pets) => {

//   const displayAmimalsItem = document.getElementById('allAnimal')

//   pets.forEach(pet => {
//     console.log(pet);

//     displayAmimalsItem.innerHTML += `
    
//     <div class="card bg-base-100 shadow-md border">
//   <figure>
//     <img
//       src="${pet.image}" class="w-full rounded-3xl p-4"/>
//   </figure>
//   <div class="card-body ">
  
//     <h2 class="card-title">
//     ${pet.pet_name}
     
//     </h2>
       
        
        
//       ${pet.breed ? `
//   <p class="flex gap-2">
//     <img src='../asset/images/breed.png'>
//     <span>${pet.breed}</span>
//   </p>
// ` : ''}  
      
// ${pet.date_of_birth ? `
//   <p class="flex gap-2">
//     <img src='../asset/images/calender.png'>
//     <span>${pet.date_of_birth}</span>
//   </p>
// ` : ''}

//         <p class="flex  gap-2"><img src="../asset/images/gender.png"><span>${pet.gender}</span></p>

//         ${pet.price ? `
//   <p class="flex gap-2">
//     <img src='../asset/images/price.png'>
//     <span>${pet.price}</span>
//   </p>
// ` : ''}
        
//     <div class="flex gap-4 justify-start card-actions ">
        
// <button class="btn hover:bg-[#0E7A81] hover:text-white btn-category btn border hover:border-2  hover:border-white
//       rounded-md text-3 hover:rounded-md border-slate-400">
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em]"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
//   Like
// </button>
//       <button  class="hover:bg-[#0E7A81] hover:text-white btn-category btn border hover:border-2  hover:border-white
//       rounded-md text-3 hover:rounded-md border-slate-400 text-sm" id="" " >
//      Adopt
//         </button>
//       <button class="hover:bg-[#0E7A81] hover:text-white btn-category btn border hover:border-2  hover:border-white
//       rounded-md text-3 hover:rounded-md border-slate-400 text-sm" id="" " >
//      Details
//         </button>
        


//     </div>
//   </div>
// </div>


//     `
//   });

// }

// loadAmimals();


