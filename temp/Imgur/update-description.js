for(let index = 0; index<data.length;index++){
    let elem = data[index]
    let ticker = elem['name'].split('.')[0]
    if(descriptions[ticker]){
        console.log('found ' + ticker)
        let imageHash = elem['id']
        await fetch(`https://api.imgur.com/3/image/${imageHash}`, { method: 'POST', headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json', }, body: JSON.stringify({ description: JSON.stringify(descriptions[ticker]) }), }) .then(response => response.json()) .then(data => { if (data.success) { console.log("Description updated successfully:", data.data); } else { console.error("Error updating description:", data); } }) .catch(error => console.error('Error:', error));
    }
};
