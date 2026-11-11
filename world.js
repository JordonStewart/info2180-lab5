
document.addEventListener("DOMContentLoaded", function() {
    const lookup = document.getElementById("lookup");
    const lookupCities = document.getElementById("lookup-cities");
    const countryInput = document.getElementById("country");
    const result = document.getElementById("result");

    lookup.addEventListener("click", function() {
        const country = countryInput.value;

        fetch("world.php?country=" + encodeURIComponent(country))
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            });
    });

    lookupCities.addEventListener("click", function() {
        const country = countryInput.value;

        fetch("world.php?country=" + encodeURIComponent(country) + "&lookup=cities")
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            });
    });
});
