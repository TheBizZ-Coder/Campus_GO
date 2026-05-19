// route-render.js
// Conecta los inputs de origen/destino con Dijkstra y dibuja la ruta en el SVG.
// Actualiza stats, instrucciones paso a paso y topbar dinámicamente.

(function () {

    // ─── Constantes ───────────────────────────────────────────────
    const METROS_POR_PX   = 0.22;   // factor de conversión píxeles → metros
    const VELOCIDAD_M_MIN = 80;     // velocidad caminando promedio (m/min)
    const PASOS_POR_METRO = 1.31;   // pasos por metro promedio

    // ─── Referencias al DOM ───────────────────────────────────────
    const svgEl          = document.getElementById('routeSvg');
    const statTiempo     = document.getElementById('statTiempo');
    const statDistancia  = document.getElementById('statDistancia');
    const statPasos      = document.getElementById('statPasos');
    const routeSteps     = document.getElementById('routeSteps');
    const topbarSubtitle = document.getElementById('topbarSubtitle');
    const btnIniciar     = document.getElementById('btnIniciarRuta');

    // ─── Utilidades de dirección ──────────────────────────────────
    function getDirection(fromKey, toKey) {
        const a = nodes[fromKey];
        const b = nodes[toKey];
        if (!a || !b) return { label: 'Continúa', icon: 'bi-arrow-up' };

        const dx = b.x - a.x;
        const dy = b.y - a.y;  // y crece hacia abajo en SVG

        const angle = Math.atan2(dy, dx) * 180 / Math.PI;

        if (angle > -45 && angle <= 45)   return { label: 'Gira al oriente',  icon: 'bi-arrow-right' };
        if (angle > 45  && angle <= 135)  return { label: 'Gira al sur',      icon: 'bi-arrow-down'  };
        if (angle > 135 || angle <= -135) return { label: 'Gira al poniente', icon: 'bi-arrow-left'  };
                                          return { label: 'Gira al norte',    icon: 'bi-arrow-up'    };
    }

    function getNodeIcon(type) {
        const icons = {
            stairs:   'bi-stairs',
            bathroom: 'bi-door-open',
            exit:     'bi-door-open-fill',
            main:     'bi-geo-alt-fill',
            path:     'bi-arrow-up',
        };
        return icons[type] || 'bi-arrow-up';
    }

    function formatName(key) {
        return key
            .replace(/_/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase());
    }

    // ─── Baño más cercano ─────────────────────────────────────────
    function banoMasCercano(origenKey) {
        const banos = Object.keys(nodes).filter(k => nodes[k].type === 'bathroom');
        let mejor = null;
        let mejorDist = Infinity;

        banos.forEach(banoKey => {
            const resultado = dijkstra(origenKey, banoKey);
            if (resultado && resultado.distancia < mejorDist) {
                mejorDist = resultado.distancia;
                mejor = { key: banoKey, resultado };
            }
        });

        return mejor;
    }

    // ─── Dibujar ruta en SVG ──────────────────────────────────────
    function dibujarRuta(camino) {
        // Limpiar SVG anterior
        while (svgEl.firstChild) svgEl.removeChild(svgEl.firstChild);

        if (!camino || camino.length < 2) return;

        // Línea de ruta
        const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
        const puntos = camino.map(k => `${nodes[k].x},${nodes[k].y}`).join(' ');
        polyline.setAttribute('points', puntos);
        polyline.setAttribute('fill', 'none');
        polyline.setAttribute('stroke', 'var(--color-primary)');
        polyline.setAttribute('stroke-width', '5');
        polyline.setAttribute('stroke-linecap', 'round');
        polyline.setAttribute('stroke-linejoin', 'round');
        polyline.setAttribute('stroke-dasharray', '12 6');
        polyline.setAttribute('opacity', '0.85');
        svgEl.appendChild(polyline);

        // Marcador origen
        const origen = nodes[camino[0]];
        const circOrigen = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circOrigen.setAttribute('cx', origen.x);
        circOrigen.setAttribute('cy', origen.y);
        circOrigen.setAttribute('r', '10');
        circOrigen.setAttribute('class', 'route-marker-origin');
        svgEl.appendChild(circOrigen);

        // Marcador destino
        const destino = nodes[camino[camino.length - 1]];
        const circDestino = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circDestino.setAttribute('cx', destino.x);
        circDestino.setAttribute('cy', destino.y);
        circDestino.setAttribute('r', '10');
        circDestino.setAttribute('class', 'route-marker-destination');
        svgEl.appendChild(circDestino);
    }

    // ─── Actualizar stats ─────────────────────────────────────────
    function actualizarStats(distPx) {
        const metros  = Math.round(distPx * METROS_POR_PX);
        const minutos = Math.ceil(metros / VELOCIDAD_M_MIN);
        const pasos   = Math.round(metros * PASOS_POR_METRO);

        statTiempo.textContent    = minutos < 1 ? '<1 min' : `${minutos} min`;
        statDistancia.textContent = metros >= 1000
            ? `${(metros / 1000).toFixed(1)} km`
            : `${metros} m`;
        statPasos.textContent = `~${pasos}`;

        return minutos;
    }

    // ─── Actualizar instrucciones ─────────────────────────────────
    function actualizarInstrucciones(camino) {
        routeSteps.innerHTML = '';

        if (!camino || camino.length < 2) {
            routeSteps.innerHTML = `
                <div class="instruction-step">
                    <div class="step-content">
                        <div class="step-text" style="color:var(--color-text-muted); text-align:center; padding:16px 0;">
                            <i class="bi bi-map" style="font-size:1.4rem; display:block; margin-bottom:8px;"></i>
                            Selecciona origen y destino para ver las instrucciones
                        </div>
                    </div>
                </div>`;
            return;
        }

        // Construir pasos agrupando nodos contiguos de tipo "path"
        const pasos = [];

        for (let i = 0; i < camino.length - 1; i++) {
            const actual   = camino[i];
            const siguiente = camino[i + 1];
            const nodoSig  = nodes[siguiente];

            // Calcular distancia del segmento
            const dx = nodes[siguiente].x - nodes[actual].x;
            const dy = nodes[siguiente].y - nodes[actual].y;
            const distSeg = Math.round(Math.sqrt(dx * dx + dy * dy) * METROS_POR_PX);

            // Solo mostrar paso si el nodo siguiente es relevante (no un pasillo intermedio)
            // o si es el último nodo
            const esRelevante = nodoSig.type !== 'path' || i === camino.length - 2;

            if (esRelevante) {
                const dir = i === 0
                    ? { label: 'Comienza caminando', icon: 'bi-play-circle' }
                    : getDirection(actual, siguiente);

                const esUltimo = i === camino.length - 2;

                pasos.push({
                    numero:    pasos.length + 1,
                    texto:     esUltimo
                        ? `Llegas a tu destino: ${formatName(siguiente)}`
                        : `${dir.label} hacia ${formatName(siguiente)}`,
                    distancia: distSeg,
                    tiempo:    Math.ceil(distSeg / VELOCIDAD_M_MIN),
                    icono:     esUltimo ? 'bi-flag-fill' : dir.icon,
                    tipo:      nodoSig.type,
                });
            }
        }

        // Renderizar pasos
        pasos.forEach(paso => {
            const div = document.createElement('div');
            div.className = 'instruction-step';
            div.innerHTML = `
                <div class="step-number">${paso.numero}</div>
                <div class="step-content">
                    <div class="step-text">${paso.texto}</div>
                    <div class="step-distance">
                        <i class="${paso.icono}"></i>
                        ${paso.distancia} m · ${paso.tiempo < 1 ? '<1' : paso.tiempo} min
                    </div>
                </div>
                <div class="step-icon"><i class="${paso.icono}"></i></div>`;
            routeSteps.appendChild(div);
        });
    }

    // ─── Calcular y renderizar ruta ───────────────────────────────
    function calcularRuta() {
        const origenNombre  = document.getElementById('originInput').value.trim();
        const destinoNombre = document.getElementById('destinationInput').value.trim();

        if (!origenNombre || !destinoNombre) {
            alert('Por favor selecciona origen y destino.');
            return;
        }

        // Manejar "Baño mas cercano" como destino especial
        let origenKey  = locationMap[origenNombre];
        let destinoKey = locationMap[destinoNombre];

        if (!origenKey) {
            alert(`No se encontró el origen "${origenNombre}" en el mapa.`);
            return;
        }

        let resultado;

        if (destinoNombre === 'Baño mas cercano') {
            const bano = banoMasCercano(origenKey);
            if (!bano) {
                alert('No se encontró ningún baño accesible desde tu ubicación.');
                return;
            }
            resultado  = bano.resultado;
            destinoKey = bano.key;
        } else {
            if (!destinoKey) {
                alert(`No se encontró el destino "${destinoNombre}" en el mapa.`);
                return;
            }
            resultado = dijkstra(origenKey, destinoKey);
        }

        if (!resultado || !resultado.camino || resultado.camino.length === 0) {
            alert('No se encontró una ruta entre los puntos seleccionados.');
            return;
        }

        const { camino, distancia } = resultado;

        // Actualizar UI
        const minutos = actualizarStats(distancia);
        actualizarInstrucciones(camino);
        dibujarRuta(camino);

        topbarSubtitle.textContent =
            `${origenNombre} → ${destinoNombre === 'Baño mas cercano' ? formatName(destinoKey) : destinoNombre} · ${minutos} min caminando`;
    }

    // ─── Listener del botón ───────────────────────────────────────
    btnIniciar.addEventListener('click', calcularRuta);

})();