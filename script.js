const materials = [
    { name: "Etiketter", location: "Miljö rum, röd gång" },
    { name: "Brun-vit tvätt säck", location: "Miljö rum, röd gång" },
    // Lägg till fler material som behövs...
];

function searchMaterials() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('materialList');
    ul.innerHTML = '';

    materials.forEach((material, index) => {
        if (material.name.toLowerCase().includes(filter)) {
            const li = document.createElement('li');
            li.innerHTML = `${material.name} - ${material.location} <button onclick="flagMaterial(${index})">Flagga</button>`;
            ul.appendChild(li);
        }
    });
}

function flagMaterial(index) {
    const material = materials[index];
    const emailParams = {
        material_name: material.name,
        material_location: material.location
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams)
        .then(response => {
            alert('Flaggningsmeddelande skickat framgångsrikt!', response.status, response.text);
        }, error => {
            alert('Det uppstod ett fel vid skickandet av flaggningsmeddelandet.', error);
        });
}

// Initially display all materials
searchMaterials();
