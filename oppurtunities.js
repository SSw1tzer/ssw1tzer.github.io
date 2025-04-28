fetch("https://partners.every.org/v0.2/nonprofit/maps?apiKey=pk_live_91afcd7bb59df3b66efa0e4dacea2dea", {
    method: 'GET',
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(res => res.json())
.then(data => {
    document.getElementById('result').innerText = JSON.stringify(data, null, 2);
})
.catch(error => {
    document.getElementById('result').innerText = 'Error: ' + error.message;
});
