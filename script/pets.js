document.addEventListener('DOMContentLoaded', function () {
    const allAnimalContainer = document.getElementById('allAnimal');
    const categoryButtonsContainer = document.getElementById('btn-container-item');







    // this function is for like modal section 



    // Function to display animal cards
    function displayAnimals(pets) {
        allAnimalContainer.innerHTML = '';

        if (!pets || pets.length === 0) {
            allAnimalContainer.innerHTML = `
        <div class="no-pets-message rounded-md">
        <img src="../asset/images/IMG20250805164747 copy (1).jpg"/>
        <h2 class="text-3xl font-bold">The one and Bird is my jaan pakhi</h2>
            <p class="max-sm:text-justify">My Dear Sutana madam,<br> Thanks for making this bad man to a gentleman and this gentleman is promising to you that he will be always with you everywhere and every situation like fort who protect his queen. <br> 
            You are my pakhi,
            You are my jaan,
            You are my baby,
            You are my sweetheart,
            You are my Everything.
            <br>
            <br>
            Let's get married In Sha Allah, I can't be separated from you no more
            <br>
            <br>
            Your Baby (the pookie of yours).
            </p>
        </div>
    `;
            return;
        }

        pets.forEach((pet, index) => {

            const modalId = `modal_${index}`; // Unique modal ID

            allAnimalContainer.innerHTML += `
            <div class="card bg-base-100 shadow-md border">
                <figure>
                    <img src="${pet.image}" class="w-full rounded-3xl p-4" alt="${pet.pet_name}"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${pet.pet_name}</h2>

                    ${pet.breed ? `
                    <p class="flex gap-2">
                        <img src="../asset/images/breed.png" alt="Breed">
                        <span>${pet.breed}</span>
                    </p>` : `
                    <p class="flex gap-2">
                        <img src="../asset/images/breed.png" alt="Breed">
                        <span>Unknown</span>
                    </p>`}

                    ${pet.date_of_birth ? `
                    <p class="flex gap-2">
                        <img src="../asset/images/calender.png" alt="Birth Date">
                        <span>${pet.date_of_birth}</span>
                    </p>` : `<p class="flex gap-2">
                        <img src="../asset/images/calender.png" alt="Birth Date">
                        <span>Not Available</span>
                    </p>`}

                    <p class="flex gap-2">
                        <img src="../asset/images/gender.png" alt="Gender">
                        <span>${pet.gender || 'Unknown'}</span>
                    </p>

                    ${pet.price ? `
                    <p class="flex gap-2">
                        <img src="../asset/images/price.png" alt="Price">
                        <span>$ ${pet.price}</span>
                    </p>` : `
                    <p class="flex gap-2">
                        <img src="../asset/images/price.png" alt="Price">
                        <span>$ Negosiateable</span>
                    </p>`}

                    <div class="flex gap-2 justify-start card-actions">
                       
                    


<button onclick="toggleLike(this)" class="btn bg-button hover:bg-[#0E7A81] hover:text-white">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-[1.2em] like-icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
  </svg>
  <span class="like-text">Like</span>
</button>


<button onclick="startAdoption(this)" class="btn bg-button hover:bg-[#0E7A81] hover:text-white">Adopt</button>
 




                     


                       <button class="btn  bg-button hover:bg-[#0E7A81] hover:text-white" onclick="document.getElementById('${modalId}').showModal()">Details</button>

                    <dialog id="${modalId}" class=" modal modal-bottom sm:modal-middle">
                        <div class="p-4 modal-box ">
                           
                                                <figure class="">
                    <img src="${pet.image}" class=" w-full object-cover rounded-3xl p-4" alt="${pet.pet_name}"/>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${pet.pet_name}</h2>

                    <div class="grid md:grid-cols-2 gap-2 ">
                    ${pet.breed ? `
                    <p class="flex gap-2">
                        <img src="../asset/images/breed.png" alt="Breed">
                        <span>${pet.breed}</span>
                    </p>` : `
                    <p class="flex gap-2">
                        <img src="../asset/images/breed.png" alt="Breed">
                        <span>Unknown</span>
                    </p>`}

                    ${pet.date_of_birth ? `
                    <p class="flex gap-2">
                        <img src="../asset/images/calender.png" alt="Birth Date">
                        <span>${pet.date_of_birth}</span>
                    </p>` : `<p class="flex gap-2">
                        <img src="../asset/images/calender.png" alt="Birth Date">
                        <span>Not Available</span>
                    </p>`}

                    <p class="flex gap-2">
                        <img src="../asset/images/gender.png" alt="Gender">
                        <span>${pet.gender || 'Unknown'}</span>
                    </p>

                    ${pet.price ? `
                    <p class="flex gap-2">
                        <img src="../asset/images/price.png" alt="Price">
                        <span>$ ${pet.price}</span>
                    </p>` : `
                    <p class="flex gap-2">
                        <img src="../asset/images/price.png" alt="Price">
                        <span>$ Negosiateable</span>
                    </p>`}

                     ${pet.vaccinated_status ? `
                    <p class="flex gap-2">
                        <img src="../asset/images/gender.png" alt="Breed">
                        <span>${pet.vaccinated_status}</span>
                    </p>` : `
                    <p class="flex gap-2">
                        <img src="../asset/images/breed.png" alt="Breed">
                        <span>Unknown</span>
                    </p>`}
                    </div>

                     ${pet.pet_details ? `
                    <p class="text-justify mt-3 border-t">
                        <span>${pet.pet_details}</span>
                    </p>` : `
                    <p class="flex gap-2">
                        <img src="../asset/images/breed.png" alt="Breed">
                        <span>Unknown</span>
                    </p>`}
          </div>



    <p class="py-4">Press ESC key or click the button below to close</p>
      <form method="dialog">
        <button class="btn btn-block  bg-button hover:bg-[#0E7A81] hover:text-white">Close</button>
      </form>
                    </dialog>
                        


                </div>
            </div>
            `;
        });
    }

    // Load all animals (initial load)
    function loadAllAnimals() {
        allAnimalContainer.innerHTML = `<div class="spin-loader"><span class="loading loading-bars loading-lg loader-delay"></span></div>
`;

        fetch('https://openapi.programming-hero.com/api/peddy/pets')
            .then(res => res.json())
            .then(data => {
                const pets = data?.pets || [];
                displayAnimals(pets);
            })
            .catch(error => {
                console.error('Error loading pets:', error);
                allAnimalContainer.innerHTML = '<p class="text-center py-8 text-red-500">Error loading pets. Please try again later.</p>';
            });
    }

    // Load animals by category name
    function loadAnimalsByCategory(categoryName) {
        allAnimalContainer.innerHTML = `<div class="spin-loader"><span class="loading loading-bars loading-lg loader-delay"></span></div>
`;

        fetch(`https://openapi.programming-hero.com/api/peddy/category/${encodeURIComponent(categoryName)}`)
            .then(res => res.json())
            .then(data => {
                const pets = data?.data || [];
                displayAnimals(pets);
            })
            .catch(error => {
                console.error('Error loading category:', error);
                allAnimalContainer.innerHTML = '<p class="text-center py-8 text-red-500">Error loading category. Please try again.</p>';
            });
    }

    // Load categories and create buttons
    function loadCategories() {
        fetch('https://openapi.programming-hero.com/api/peddy/categories')
            .then(res => res.json())
            .then(data => {
                categoryButtonsContainer.innerHTML = '';

                data.categories.forEach(category => {
                    const button = document.createElement('button');
                    button.className = 'btn-category btn border hover:border-2 hover:border-[#0E7A81] hover:bg-[rgba(14,122,129,0.10)] rounded-2xl hover:rounded-full border-slate-400 px-16 h-20 text-lg';
                    button.innerHTML = `
                        <img class="w-10" src="${category.category_icon}" alt="${category.category}">
                        <span>${category.category}</span>
                    `;

                    //  Pass the category name, not ID
                    button.addEventListener('click', () => {
                        console.log(`Category clicked: ${category.category}`);
                        loadAnimalsByCategory(category.category);
                    });

                    categoryButtonsContainer.appendChild(button);
                });
            })
            .catch(error => {
                console.error('Error loading categories:', error);
                categoryButtonsContainer.innerHTML = '<p class="text-center py-8 text-red-500">Error loading categories</p>';
            });
    }

    // Initialize
    loadCategories();
    loadAllAnimals();
});
