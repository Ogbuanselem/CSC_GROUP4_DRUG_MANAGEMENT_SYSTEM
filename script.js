// Sample drug inventory data with more drugs
let drugInventory = [
    {
        name: "Aspirin",
        dosage: "500mg",
        manufacturer: "Bayer",
        expiry: "2025-12-31",
        quantity: 100
    },
    {
        name: "Paracetamol",
        dosage: "650mg",
        manufacturer: "GSK",
        expiry: "2024-07-15",
        quantity: 200
    },
    {
        name: "Ibuprofen",
        dosage: "200mg",
        manufacturer: "Pfizer",
        expiry: "2024-11-30",
        quantity: 50
    },
    {
        name: "Amoxicillin",
        dosage: "250mg",
        manufacturer: "Sandoz",
        expiry: "2025-03-01",
        quantity: 150
    },
    {
        name: "Metformin",
        dosage: "500mg",
        manufacturer: "Merck",
        expiry: "2026-06-01",
        quantity: 300
    },
    {
        name: "Lisinopril",
        dosage: "10mg",
        manufacturer: "Novartis",
        expiry: "2025-09-10",
        quantity: 80
    },
    {
        name: "Prednisone",
        dosage: "5mg",
        manufacturer: "Teva Pharmaceuticals",
        expiry: "2025-05-15",
        quantity: 120
    },
    {
        name: "Cetirizine",
        dosage: "10mg",
        manufacturer: "Zyrtec",
        expiry: "2024-12-31",
        quantity: 250
    },
    {
        name: "Simvastatin",
        dosage: "20mg",
        manufacturer: "Merck",
        expiry: "2025-04-10",
        quantity: 180
    },
    {
        name: "Ciprofloxacin",
        dosage: "500mg",
        manufacturer: "Bayer",
        expiry: "2025-08-20",
        quantity: 75
    },
    {
        name: "Hydrochlorothiazide",
        dosage: "25mg",
        manufacturer: "Mylan",
        expiry: "2024-11-01",
        quantity: 220
    }
];

// Function to render the drug inventory table
function renderTable() {
    const tableBody = document.getElementById('drug-table-body');
    tableBody.innerHTML = "";  // Clear the existing table content

    drugInventory.forEach((drug) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${drug.name}</td>
            <td>${drug.dosage}</td>
            <td>${drug.manufacturer}</td>
            <td>${drug.expiry}</td>
            <td>${drug.quantity}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Add new drug to the inventory
document.getElementById('drug-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const newDrug = {
        name: document.getElementById('drug-name').value,
        dosage: document.getElementById('dosage').value,
        manufacturer: document.getElementById('manufacturer').value,
        expiry: document.getElementById('expiry-date').value,
        quantity: parseInt(document.getElementById('quantity').value)
    };

    // Add new drug to the inventory
    drugInventory.push(newDrug);

    // Clear the form
    document.getElementById('drug-form').reset();

    // Re-render the table
    renderTable();
});

// Function to filter drugs based on name or expiry date
function filterDrugs() {
    const searchQuery = document.getElementById('search-input').value.toLowerCase();

    const filteredDrugs = drugInventory.filter((drug) => {
        return drug.name.toLowerCase().includes(searchQuery) ||
               drug.expiry.includes(searchQuery);
    });

    const tableBody = document.getElementById('drug-table-body');
    tableBody.innerHTML = "";  // Clear the existing table content

    filteredDrugs.forEach((drug) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${drug.name}</td>
            <td>${drug.dosage}</td>
            <td>${drug.manufacturer}</td>
            <td>${drug.expiry}</td>
            <td>${drug.quantity}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Initial render of the drug inventory table
renderTable();






