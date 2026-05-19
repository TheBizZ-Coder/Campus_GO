//locations.js
// Lista de ubicaciones y lógica de autocompletado para los inputs de origen y destino

const locations = [
    "Biblioteca",
    "Auditorio",
    "Cafetería principal",
    "Cafetería gestión",
    "Cafetería IA",
    "Cajero",
    "Edificio 1",
    "Edificio 2",
    "Edificio 3",
    "Edificio 4",
    "Palapas gestión",
    "Palapas IA",
    "Canchas gestión",
    "Cancha de basquet principal",
    "Salida Av. Juan de Dios Bátiz",
    "Salida Metro Politécnico",
    "Explanada/Letras",
    "Escaleras edificio 1",
    "Escaleras edificio 2",
    "Escaleras edificio 3",
    "Escaleras edificio 4",
    "Baño mas cercano"
];

function setupAutocomplete(inputId, dropdownId, esOrigen = false) {

    const input    = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);

    function getListaFiltrada(filter = "") {

        // El input de origen nunca muestra "Baño mas cercano"
        let lista = esOrigen
            ? locations.filter(l => l !== "Baño mas cercano")
            : locations;

        // El input de destino no muestra lo que ya está seleccionado en origen
        if (!esOrigen) {
            const origenSeleccionado = document.getElementById("originInput").value.trim();
            if (origenSeleccionado) {
                lista = lista.filter(l => l !== origenSeleccionado);
            }
        }

        // Filtrar por lo que escribe el usuario
        return lista.filter(location =>
            location.toLowerCase().includes(filter.toLowerCase())
        );
    }

    function renderOptions(filter = "") {

        dropdown.innerHTML = "";

        const filtered = getListaFiltrada(filter);

        filtered.forEach(location => {

            const option = document.createElement("div");
            option.classList.add("search-option");
            option.textContent = location;

            option.addEventListener("click", () => {
                input.value = location;
                dropdown.style.display = "none";
            });

            dropdown.appendChild(option);
        });

        dropdown.style.display = filtered.length > 0 ? "block" : "none";
    }

    input.addEventListener("focus", () => renderOptions(input.value));
    input.addEventListener("input",  () => renderOptions(input.value));

    document.addEventListener("click", (e) => {
        if (!input.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = "none";
        }
    });
}

setupAutocomplete("originInput",      "originDropdown",      true);
setupAutocomplete("destinationInput", "destinationDropdown", false);