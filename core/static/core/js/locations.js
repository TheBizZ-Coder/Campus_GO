// locations.js
// Lista de ubicaciones para los inputs de autocomplete

const locations = [
    "Biblioteca",
    "Auditorio",
    "Cafetería principal",
    "Cafetería gestión",
    "Cafetería IA",
    "Cajero",
    "Palapas gestión",
    "Palapas IA",
    "Cancha de basquet principal",
    "Estacionamiento",
    "Salida Metro Politécnico",
    "Explanada/Letras",
    "Ventanillas de gestión",
    "Papelería",
    "Entrada principal",
    "Baño mas cercano",  // solo en input destino
];

function setupAutocomplete(inputId, dropdownId, esOrigen = false) {

    const input    = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);
    if (!input || !dropdown) return;

    function getListaFiltrada(filter = "") {
        let lista = esOrigen
            ? locations.filter(l => l !== "Baño mas cercano")
            : locations;

        if (!esOrigen) {
            const origenSeleccionado = document.getElementById("originInput").value.trim();
            if (origenSeleccionado) {
                lista = lista.filter(l => l !== origenSeleccionado);
            }
        }

        return lista.filter(l =>
            l.toLowerCase().includes(filter.toLowerCase())
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