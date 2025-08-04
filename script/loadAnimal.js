console.log('hello world');

const loadAmimals = () => {
    // fetch data from api server 
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then((res) => res.json())
        .then((data) => console.log(data)
        )
        .catch((error) => console.log(error)
        )

}





loadAmimals();


const displayAmimals = () => {

    const displayAmimalsItem = document.getElementById('category')
    displayAmimalsItem.innerHTML = `
    
     <h2 class="text-3xl font-bold">Please select an animal</h2>
        <p>Click on any animal button above to see details</p>
    
    `
}