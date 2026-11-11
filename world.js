
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("lookup");
    const countryInput = document.getElementById("country");
    const result = document.getElementById("result");

    button.addEventListener("click", function() {
        const country = countryInput.value;

        fetch("world.php?country=" + encodeURIComponent(country))
            .then(response => response.text())
            .then(data => {
                result.innerHTML = data;
            });
    });
});
