window.onload = function() {
    let quotes = {}
fetch("https://type.fit/api/quotes")
.then(function(response) {
return response.json();
})
.then(function(data) {
    var button = document.getElementById('bt11')
    button.addEventListener('click',() => {
            let ran = Math.floor(Math.random()*10000);
            ran = ran%1643;
            alert(data[ran].text);
        })
});
}