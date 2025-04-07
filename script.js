document.addEventListener("DOMContentLoaded", function () {
    const cityname = document.getElementById("cityname");
    const displayCity = document.getElementById("display");
    const searchButton = document.getElementById("search");
    const allProperties = document.querySelectorAll(".property"); 
    var a =document.querySelectorAll("properties")

    function filterProperties(event) {
        event.preventDefault(); 
        let city = cityname.value.toLowerCase();
        displayCity.innerHTML = ""; 
        let found = false; 

        allProperties.forEach(property => {
            let location = property.querySelector("li").textContent.toLowerCase(); 
            if (location.includes(city)) {
                displayCity.appendChild(property); 
                found = true;
                property.parentElement.style.display="flex"
                property.parentElement.style.flexWrap="wrap"
                property.parentElement.style.gap="10px"
                console.log(property)
            }
        });

        if (!found) {
            displayCity.innerHTML = `<p>No properties found for "${city}".</p>`;
        }
    }

    searchButton.addEventListener("click", filterProperties);
});
document.querySelectorAll('.property .btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        const property = button.closest('.property');
        const imgSrc = property.querySelector('img').src;
        const price = property.querySelector('h3').textContent;
        const title = property.querySelector('h4').textContent;
        const details = Array.from(property.querySelectorAll('ul li')).map(li => li.textContent);

        const propertyData = {
            imgSrc,
            price,
            title,
            details
        };

        localStorage.setItem('selectedProperty', JSON.stringify(propertyData));
        window.location.href = 'booking.html';
    });
});
