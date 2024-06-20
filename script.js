const materials = [
    { name: "Etiketter", location: "Miljö rum, röd gång" },
    { name: "Brun-vit tvätt säck", location: "Miljö rum, röd gång" },
    { name: "Brun tejp", location: "Miljö rum, röd gång" },
    { name: "Vtn lös Tvättsäck", location: "Miljö rum, röd gång" },
    { name: "Gul plast tvättsäck", location: "Miljö rum, röd gång" },
    { name: "riskburk-låda", location: "Miljö rum, röd gång" },
    { name: "plastburk 600ml", location: "Miljö rum, röd gång" },
    { name: "Papper/Kartong", location: "Lämna" },
    { name: "Plast/Glas/Metall", location: "Lämna" },
    { name: "Risklåda", location: "Lämna" },
    { name: "Smutsiga Personal-", location: "Lämna" },
    { name: "Västar", location: "Lämna" },
    { name: "Toner", location: "Lämna" },
    { name: "Udda tvätt", location: "Föråd 6, Röd Gång" },
    { name: "Jogging, Personal", location: "Föråd 6, Röd Gång" },
    { name: "Väst", location: "Föråd 6, Röd Gång" },
    { name: "Barnkläder", location: "Föråd 6, Röd Gång" },
    { name: "Värmemössa", location: "Föråd 6, Röd Gång" },
    { name: "Barlakan", location: "Föråd 6, Röd Gång" },
    { name: "Badlakan", location: "Föråd 6, Röd Gång" },
    { name: "Disk medel till Gult Pentry", location: "Föråd 6, Röd Gång" },
    { name: "Etiketter, kuvert", location: "Föråd 6, Röd Gång" },
    { name: "Kopieringspapper", location: "Föråd 6, Röd Gång" },
    { name: "patientarmband", location: "Föråd 6, Röd Gång" },
    { name: "termo etiketter", location: "Föråd 6, Röd Gång" },
    { name: "Longopac", location: "Föråd 6, Röd Gång" },
    { name: "Nacl - Spruta 10 ml", location: "Föråd 6, Röd Gång" },
    { name: "Tryckeripapper", location: "Föråd 6, Röd Gång" },
    { name: "Metts TraumaJournal", location: "Föråd 6, Röd Gång" },
    { name: "Informationsbrochyrer", location: "Föråd 6, Röd Gång" },
    { name: "CM Cover", location: "Föråd 6, Röd Gång" },
    { name: "blå Rock t. Akutrum", location: "Föråd 6, Röd Gång" },
    { name: "Betastöd, för utlåning", location: "Föråd 6, Röd Gång" },
    { name: "rullator", location: "Föråd 6, Röd Gång" },
    // Add more materials as needed...
];

function searchMaterials() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const ul = document.getElementById('materialList');
    ul.innerHTML = '';

    materials.forEach(material => {
        if (material.name.toLowerCase().includes(filter)) {
            const li = document.createElement('li');
            li.textContent = `${material.name} - ${material.location}`;
            ul.appendChild(li);
        }
    });
}

// Initially display all materials
searchMaterials();
