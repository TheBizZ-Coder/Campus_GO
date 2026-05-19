// dijkstra.js
// Algoritmo de Dijkstra para encontrar la ruta más corta entre dos nodos del campus

function dijkstra(origen, destino) {

    const distancias = {};
    const previos   = {};
    const visitados = new Set();
    const cola      = [];

    // Inicializar todas las distancias en infinito
    for (const nodo in graph) {
        distancias[nodo] = Infinity;
    }

    distancias[origen] = 0;
    cola.push({ nodo: origen, peso: 0 });

    while (cola.length > 0) {

        // Ordenar por peso y tomar el menor
        cola.sort((a, b) => a.peso - b.peso);
        const { nodo: actual } = cola.shift();

        // Si ya llegamos al destino, salimos
        if (actual === destino) break;

        // Si ya fue visitado, lo saltamos
        if (visitados.has(actual)) continue;
        visitados.add(actual);

        // Si el nodo no tiene vecinos en el grafo, continuar
        if (!graph[actual]) continue;

        for (const vecino of graph[actual]) {

            if (visitados.has(vecino.to)) continue;

            const nuevaDistancia = distancias[actual] + vecino.weight;

            if (nuevaDistancia < distancias[vecino.to]) {
                distancias[vecino.to] = nuevaDistancia;
                previos[vecino.to]    = actual;
                cola.push({ nodo: vecino.to, peso: nuevaDistancia });
            }
        }
    }

    // Reconstruir el camino
    const camino = [];
    let actual   = destino;

    while (actual !== undefined) {
        camino.unshift(actual);
        actual = previos[actual];
    }

    // Si el camino no empieza en el origen, no hay ruta
    if (camino[0] !== origen) {
        return { encontrado: false, camino: [], distancia: 0 };
    }

    return {
        encontrado: true,
        camino,
        distancia: distancias[destino]
    };
}