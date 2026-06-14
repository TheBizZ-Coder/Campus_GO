// ============================================================
// RED PEATONAL DE ESCOM / IPN (footway + steps de OpenStreetMap)
// Embebida aquí mismo para que el ruteo funcione sin archivos extra.
// Excluye calles vehiculares (service / parking_aisle).
// ============================================================

const osmNodes = {
    via_1: { lat: 19.5018521, lng: -99.1492297 },
    via_2: { lat: 19.5023114, lng: -99.1453468 },
    via_3: { lat: 19.5023564, lng: -99.1454007 },
    via_4: { lat: 19.5023903, lng: -99.1488796 },
    via_5: { lat: 19.5024869, lng: -99.1455043 },
    via_6: { lat: 19.5026179, lng: -99.1456078 },
    via_7: { lat: 19.5027257, lng: -99.1457064 },
    via_8: { lat: 19.5030307, lng: -99.1459246 },
    via_9: { lat: 19.5030414, lng: -99.1485566 },
    via_10: { lat: 19.5030557, lng: -99.1484412 },
    via_11: { lat: 19.5031004, lng: -99.1459858 },
    via_12: { lat: 19.5031121, lng: -99.1460157 },
    via_13: { lat: 19.5031320, lng: -99.1460765 },
    via_14: { lat: 19.5031786, lng: -99.1464479 },
    via_15: { lat: 19.5031787, lng: -99.1464682 },
    via_16: { lat: 19.5031809, lng: -99.1464800 },
    via_17: { lat: 19.5031848, lng: -99.1464912 },
    via_18: { lat: 19.5031855, lng: -99.1464316 },
    via_19: { lat: 19.5031933, lng: -99.1464176 },
    via_20: { lat: 19.5032072, lng: -99.1464033 },
    via_21: { lat: 19.5032111, lng: -99.1467430 },
    via_22: { lat: 19.5032269, lng: -99.1479177 },
    via_23: { lat: 19.5032317, lng: -99.1463270 },
    via_24: { lat: 19.5032468, lng: -99.1467256 },
    via_25: { lat: 19.5032522, lng: -99.1463770 },
    via_26: { lat: 19.5032529, lng: -99.1467192 },
    via_27: { lat: 19.5032547, lng: -99.1479863 },
    via_28: { lat: 19.5032802, lng: -99.1467067 },
    via_29: { lat: 19.5034864, lng: -99.1469600 },
    via_30: { lat: 19.5035513, lng: -99.1471103 },
    via_31: { lat: 19.5035932, lng: -99.1472072 },
    via_32: { lat: 19.5036061, lng: -99.1472359 },
    via_33: { lat: 19.5036775, lng: -99.1476844 },
    via_34: { lat: 19.5037059, lng: -99.1474636 },
    via_35: { lat: 19.5037134, lng: -99.1476675 },
    via_36: { lat: 19.5037491, lng: -99.1475648 },
    via_37: { lat: 19.5037557, lng: -99.1478621 },
    via_38: { lat: 19.5037917, lng: -99.1478412 },
    via_39: { lat: 19.5038537, lng: -99.1478096 },
    via_40: { lat: 19.5038771, lng: -99.1468913 },
    via_41: { lat: 19.5038794, lng: -99.1460678 },
    via_42: { lat: 19.5038945, lng: -99.1469255 },
    via_43: { lat: 19.5039026, lng: -99.1468784 },
    via_44: { lat: 19.5039198, lng: -99.1481312 },
    via_45: { lat: 19.5039364, lng: -99.1477671 },
    via_46: { lat: 19.5039711, lng: -99.1468499 },
    via_47: { lat: 19.5039813, lng: -99.1478631 },
    via_48: { lat: 19.5039985, lng: -99.1463343 },
    via_49: { lat: 19.5040209, lng: -99.1477237 },
    via_50: { lat: 19.5040592, lng: -99.1477041 },
    via_51: { lat: 19.5040633, lng: -99.1478256 },
    via_52: { lat: 19.5040754, lng: -99.1475921 },
    via_53: { lat: 19.5041092, lng: -99.1473880 },
    via_54: { lat: 19.5041237, lng: -99.1474221 },
    via_55: { lat: 19.5041457, lng: -99.1467715 },
    via_56: { lat: 19.5041502, lng: -99.1474096 },
    via_57: { lat: 19.5042065, lng: -99.1469079 },
    via_58: { lat: 19.5042345, lng: -99.1473658 },
    via_59: { lat: 19.5042451, lng: -99.1458782 },
    via_60: { lat: 19.5043139, lng: -99.1471400 },
    via_61: { lat: 19.5043166, lng: -99.1475705 },
    via_62: { lat: 19.5043803, lng: -99.1472934 },
    via_63: { lat: 19.5044055, lng: -99.1477552 },
    via_64: { lat: 19.5045547, lng: -99.1465669 },
    via_65: { lat: 19.5046147, lng: -99.1467104 },
    via_66: { lat: 19.5046885, lng: -99.1433253 },
    via_67: { lat: 19.5047046, lng: -99.1434794 },
    via_68: { lat: 19.5047210, lng: -99.1469344 },
    via_69: { lat: 19.5047553, lng: -99.1466543 },
    via_70: { lat: 19.5047659, lng: -99.1456188 },
    via_71: { lat: 19.5047711, lng: -99.1436175 },
    via_72: { lat: 19.5047748, lng: -99.1470913 },
    via_73: { lat: 19.5047851, lng: -99.1470861 },
    via_74: { lat: 19.5048375, lng: -99.1438887 },
    via_75: { lat: 19.5048477, lng: -99.1468529 },
    via_76: { lat: 19.5048646, lng: -99.1472808 },
    via_77: { lat: 19.5049078, lng: -99.1441599 },
    via_78: { lat: 19.5049255, lng: -99.1463826 },
    via_79: { lat: 19.5049934, lng: -99.1461893 },
    via_80: { lat: 19.5050017, lng: -99.1461605 },
    via_81: { lat: 19.5050161, lng: -99.1459708 },
    via_82: { lat: 19.5050168, lng: -99.1461078 },
    via_83: { lat: 19.5050245, lng: -99.1459894 },
    via_84: { lat: 19.5050483, lng: -99.1463196 },
    via_85: { lat: 19.5050731, lng: -99.1449217 },
    via_86: { lat: 19.5050903, lng: -99.1456157 },
    via_87: { lat: 19.5050922, lng: -99.1453855 },
    via_88: { lat: 19.5051171, lng: -99.1454426 },
    via_89: { lat: 19.5051197, lng: -99.1464260 },
    via_90: { lat: 19.5051411, lng: -99.1466043 },
    via_91: { lat: 19.5051544, lng: -99.1468984 },
    via_92: { lat: 19.5051692, lng: -99.1459119 },
    via_93: { lat: 19.5051777, lng: -99.1459044 },
    via_94: { lat: 19.5051834, lng: -99.1458976 },
    via_95: { lat: 19.5051891, lng: -99.1458880 },
    via_96: { lat: 19.5051894, lng: -99.1462523 },
    via_97: { lat: 19.5051912, lng: -99.1458402 },
    via_98: { lat: 19.5051936, lng: -99.1458507 },
    via_99: { lat: 19.5051937, lng: -99.1458770 },
    via_100: { lat: 19.5051952, lng: -99.1458717 },
    via_101: { lat: 19.5051953, lng: -99.1458624 },
    via_102: { lat: 19.5052131, lng: -99.1462944 },
    via_103: { lat: 19.5052257, lng: -99.1453871 },
    via_104: { lat: 19.5052383, lng: -99.1463596 },
    via_105: { lat: 19.5052912, lng: -99.1468187 },
    via_106: { lat: 19.5052917, lng: -99.1453548 },
    via_107: { lat: 19.5052991, lng: -99.1465009 },
    via_108: { lat: 19.5053192, lng: -99.1468049 },
    via_109: { lat: 19.5054216, lng: -99.1470043 },
    via_110: { lat: 19.5054249, lng: -99.1452859 },
    via_111: { lat: 19.5054294, lng: -99.1459343 },
    via_112: { lat: 19.5054579, lng: -99.1464232 },
    via_113: { lat: 19.5054729, lng: -99.1471779 },
    via_114: { lat: 19.5055013, lng: -99.1461924 },
    via_115: { lat: 19.5055031, lng: -99.1461025 },
    via_116: { lat: 19.5055363, lng: -99.1461768 },
    via_117: { lat: 19.5055374, lng: -99.1469477 },
    via_118: { lat: 19.5056098, lng: -99.1471070 },
    via_119: { lat: 19.5056917, lng: -99.1466216 },
    via_120: { lat: 19.5057910, lng: -99.1468236 },
};

const osmGraph = {
    via_1: [["via_4", 70]],
    via_2: [["via_3", 8]],
    via_3: [["via_2", 8], ["via_5", 18]],
    via_4: [["via_1", 70], ["via_9", 80]],
    via_5: [["via_6", 18], ["via_3", 18]],
    via_6: [["via_7", 16], ["via_5", 18]],
    via_7: [["via_8", 41], ["via_6", 16]],
    via_8: [["via_11", 10], ["via_7", 41]],
    via_9: [["via_10", 12], ["via_4", 80], ["via_44", 107]],
    via_10: [["via_9", 12]],
    via_11: [["via_8", 10], ["via_12", 3]],
    via_12: [["via_13", 7], ["via_11", 3]],
    via_13: [["via_23", 29], ["via_12", 7]],
    via_14: [["via_18", 2], ["via_15", 2]],
    via_15: [["via_14", 2], ["via_16", 1]],
    via_16: [["via_17", 1], ["via_15", 1]],
    via_17: [["via_28", 25], ["via_16", 1]],
    via_18: [["via_14", 2], ["via_19", 2]],
    via_19: [["via_18", 2], ["via_20", 2]],
    via_20: [["via_25", 6], ["via_19", 2]],
    via_21: [["via_24", 4]],
    via_22: [["via_33", 56], ["via_27", 8]],
    via_23: [["via_13", 29], ["via_25", 6]],
    via_24: [["via_21", 4], ["via_26", 1]],
    via_25: [["via_23", 6], ["via_20", 6], ["via_41", 77]],
    via_26: [["via_24", 1], ["via_28", 3]],
    via_27: [["via_22", 8]],
    via_28: [["via_35", 112], ["via_26", 3], ["via_17", 25], ["via_48", 89]],
    via_29: [["via_30", 17]],
    via_30: [["via_31", 11], ["via_29", 17], ["via_42", 43]],
    via_31: [["via_30", 11], ["via_32", 3]],
    via_32: [["via_31", 3], ["via_34", 26], ["via_69", 142]],
    via_33: [["via_35", 4], ["via_22", 56]],
    via_34: [["via_75", 142], ["via_36", 12], ["via_32", 26]],
    via_35: [["via_33", 4], ["via_28", 112], ["via_38", 20]],
    via_36: [["via_39", 28], ["via_34", 12], ["via_53", 44]],
    via_37: [["via_38", 5]],
    via_38: [["via_39", 8], ["via_37", 5], ["via_35", 20], ["via_44", 34]],
    via_39: [["via_36", 28], ["via_45", 10], ["via_38", 8]],
    via_40: [["via_43", 3], ["via_42", 4]],
    via_41: [["via_25", 77], ["via_59", 45]],
    via_42: [["via_30", 43], ["via_40", 4]],
    via_43: [["via_46", 8], ["via_40", 3]],
    via_44: [["via_9", 107], ["via_38", 34]],
    via_45: [["via_39", 10], ["via_47", 11], ["via_49", 10]],
    via_46: [["via_43", 8], ["via_55", 21]],
    via_47: [["via_45", 11]],
    via_48: [["via_28", 89]],
    via_49: [["via_51", 12], ["via_50", 5], ["via_45", 10]],
    via_50: [["via_52", 12], ["via_61", 32], ["via_49", 5]],
    via_51: [["via_49", 12]],
    via_52: [["via_50", 12]],
    via_53: [["via_54", 4], ["via_36", 44]],
    via_54: [["via_53", 4], ["via_56", 3]],
    via_55: [["via_57", 16], ["via_46", 21], ["via_64", 50]],
    via_56: [["via_54", 3], ["via_58", 10]],
    via_57: [["via_60", 27], ["via_55", 16]],
    via_58: [["via_62", 18], ["via_61", 23], ["via_56", 10]],
    via_59: [["via_41", 45], ["via_70", 64]],
    via_60: [["via_57", 27], ["via_62", 18]],
    via_61: [["via_76", 68], ["via_58", 23], ["via_50", 32], ["via_63", 22]],
    via_62: [["via_58", 18], ["via_60", 18], ["via_72", 49]],
    via_63: [["via_61", 22]],
    via_64: [["via_78", 46], ["via_65", 16], ["via_55", 50]],
    via_65: [["via_68", 26], ["via_64", 16]],
    via_66: [["via_67", 16]],
    via_67: [["via_71", 16], ["via_66", 16]],
    via_68: [["via_65", 26], ["via_73", 17]],
    via_69: [["via_32", 142]],
    via_70: [["via_59", 64], ["via_88", 43]],
    via_71: [["via_67", 16], ["via_74", 29]],
    via_72: [["via_73", 1], ["via_62", 49]],
    via_73: [["via_76", 22], ["via_91", 46], ["via_68", 17], ["via_72", 1]],
    via_74: [["via_77", 29], ["via_71", 29]],
    via_75: [["via_34", 142]],
    via_76: [["via_109", 68], ["via_61", 68], ["via_73", 22]],
    via_77: [["via_85", 82], ["via_74", 29]],
    via_78: [["via_91", 60], ["via_84", 15], ["via_64", 46]],
    via_79: [["via_80", 3], ["via_84", 15]],
    via_80: [["via_82", 6], ["via_79", 3], ["via_111", 53]],
    via_81: [["via_83", 2]],
    via_82: [["via_80", 6], ["via_83", 12]],
    via_83: [["via_92", 18], ["via_81", 2], ["via_82", 12]],
    via_84: [["via_78", 15], ["via_79", 15], ["via_96", 17]],
    via_85: [["via_77", 82], ["via_87", 49]],
    via_86: [["via_103", 28], ["via_88", 18], ["via_97", 26]],
    via_87: [["via_85", 49], ["via_88", 7]],
    via_88: [["via_103", 13], ["via_86", 18], ["via_87", 7], ["via_70", 43]],
    via_89: [["via_104", 15], ["via_90", 19]],
    via_90: [["via_89", 19]],
    via_91: [["via_78", 60], ["via_73", 46], ["via_105", 17]],
    via_92: [["via_93", 1], ["via_83", 18]],
    via_93: [["via_92", 1], ["via_94", 1]],
    via_94: [["via_93", 1], ["via_95", 1]],
    via_95: [["via_94", 1], ["via_99", 1]],
    via_96: [["via_115", 38], ["via_84", 17], ["via_102", 5]],
    via_97: [["via_86", 26], ["via_98", 1]],
    via_98: [["via_101", 1], ["via_97", 1]],
    via_99: [["via_100", 1], ["via_95", 1]],
    via_100: [["via_101", 1], ["via_99", 1]],
    via_101: [["via_100", 1], ["via_98", 1]],
    via_102: [["via_96", 5], ["via_104", 7]],
    via_103: [["via_88", 13], ["via_86", 28], ["via_106", 8]],
    via_104: [["via_107", 16], ["via_102", 7], ["via_89", 15]],
    via_105: [["via_91", 17], ["via_108", 3]],
    via_106: [["via_103", 8], ["via_110", 16]],
    via_107: [["via_112", 19], ["via_104", 16]],
    via_108: [["via_113", 43], ["via_119", 46], ["via_105", 3]],
    via_109: [["via_76", 68], ["via_117", 14]],
    via_110: [["via_106", 16]],
    via_111: [["via_115", 19], ["via_80", 53]],
    via_112: [["via_107", 19]],
    via_113: [["via_108", 43], ["via_118", 17]],
    via_114: [["via_116", 4], ["via_119", 50]],
    via_115: [["via_116", 9], ["via_96", 38], ["via_111", 19]],
    via_116: [["via_114", 4], ["via_115", 9]],
    via_117: [["via_109", 14], ["via_120", 31], ["via_118", 19]],
    via_118: [["via_113", 17], ["via_117", 19]],
    via_119: [["via_108", 46], ["via_120", 24], ["via_114", 50]],
    via_120: [["via_119", 24], ["via_117", 31]],
};

function dijkstraOSM(origen, destino) {
    const dist = {}, prev = {}, vis = new Set();
    for (const k in osmGraph) dist[k] = Infinity;
    if (!(origen in osmGraph) || !(destino in osmGraph))
        return { encontrado: false, distancia: 0, camino: [] };
    dist[origen] = 0;
    const cola = [[0, origen]];
    while (cola.length) {
        cola.sort((a, b) => a[0] - b[0]);
        const [d, u] = cola.shift();
        if (u === destino) break;
        if (vis.has(u)) continue;
        vis.add(u);
        for (const [v, w] of osmGraph[u]) {
            if (vis.has(v)) continue;
            const nd = d + w;
            if (nd < dist[v]) { dist[v] = nd; prev[v] = u; cola.push([nd, v]); }
        }
    }
    if (dist[destino] === Infinity) return { encontrado: false, distancia: 0, camino: [] };
    const camino = []; let c = destino;
    while (c !== undefined) { camino.unshift(c); c = prev[c]; }
    return { encontrado: true, distancia: Math.round(dist[destino]), camino };
}

// Pega cada lugar de nodes.js al nodo peatonal OSM más cercano
const osmSnap = {
    "entrada_principal": "via_106",
    "salida_estacionamiento": "via_81",
    "auditorio": "via_107",
    "biblioteca": "via_104",
    "palapas_gestion": "via_117",
    "cafeteria_gestion": "via_118",
    "ventanillas_gestion": "via_108",
    "explanada": "via_75",
    "cafeteria_ia": "via_31",
    "palapas_ia": "via_40",
    "cancha_basquet_principal": "via_52",
    "salida_metro_poli": "via_37",
    "cafeteria_principal": "via_47",
    "cajero": "via_52",
    "papeleria": "via_34",
    "bano_1": "via_90",
    "bano_2": "via_46",
    "bano_3_hombres": "via_73",
    "bano_4_hombres": "via_58",
    "bano_5_hombres": "via_34",
    "bano_5_mujeres": "via_32",
    "bano_6_hombres": "via_60",
    "bano_6_mujeres": "via_57",
    "bano_hombres_7": "via_104",
    "bano_mujeres_7": "via_107",
    "bano_3h": "via_73",
    "bano_4h": "via_58",
    "bano_5h": "via_34",
    "bano_6h": "via_60",
    "bano_7h": "via_104",
    "bano_7m": "via_107",
};

// route-render.js
// Mapa Leaflet + routing sobre grafo OSM real con Dijkstra

(function () {
    'use strict';

    const CAMPUS_CENTER = [19.5047, -99.1468];
    const CAMPUS_ZOOM   = 18;

    let mapa            = null;
    let marcadorOrigen  = null;
    let marcadorDestino = null;
    let rutaLayer       = null;

    // ============================================================
    // ICONOS
    // ============================================================
    const iconOrigen = L.divIcon({
        className: '',
        html: '<div class="marker-origen"></div>',
        iconSize: [18, 18],
        iconAnchor: [9, 9],
        popupAnchor: [0, -12],
    });

    const iconDestino = L.divIcon({
        className: '',
        html: '<div class="marker-destino"></div>',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -30],
    });

    // ============================================================
    // INICIALIZAR MAPA
    // ============================================================
    function initMapa() {
        mapa = L.map('routeMap', { zoomControl: false }).setView(CAMPUS_CENTER, CAMPUS_ZOOM);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            maxZoom: 20,
        }).addTo(mapa);

        L.control.zoom({ position: 'topright' }).addTo(mapa);
    }

    // ============================================================
    // SNAP: nombre de ubicación → key del nodo OSM más cercano
    // ============================================================
    function snapToOSM(locationName) {
        // Primero buscar en el mapa directo
        const nodeKey = locationMap[locationName];
        if (!nodeKey) return null;
        // Buscar el snap del nodo a OSM
        return osmSnap[nodeKey] || null;
    }

    // ============================================================
    // BAÑO MÁS CERCANO
    // ============================================================
    const banoSnaps = [
        "bano_1","bano_2","bano_3h","bano_4h",
        "bano_5h","bano_6h","bano_7h","bano_7m"
    ];

    function banoCercanoOSM(origenSnap) {
        let mejor = null;
        let menorDist = Infinity;

        banoSnaps.forEach(b => {
            const bSnap = osmSnap[b];
            if (!bSnap) return;
            const res = dijkstraOSM(origenSnap, bSnap);
            if (res.encontrado && res.distancia < menorDist) {
                menorDist = res.distancia;
                mejor = bSnap;
            }
        });

        return mejor;
    }

    // ============================================================
    // MARCADORES
    // ============================================================
    function mostrarMarcador(tipo, nodeKey) {
        const nodo = nodes[nodeKey];
        if (!nodo) return;

        if (tipo === 'origen') {
            if (marcadorOrigen) mapa.removeLayer(marcadorOrigen);
            marcadorOrigen = L.marker([nodo.lat, nodo.lng], { icon: iconOrigen })
                .bindPopup(`<b>Origen:</b> ${nodo.nombre}`)
                .addTo(mapa);
            mapa.setView([nodo.lat, nodo.lng], 18);
        } else {
            if (marcadorDestino) mapa.removeLayer(marcadorDestino);
            marcadorDestino = L.marker([nodo.lat, nodo.lng], { icon: iconDestino })
                .bindPopup(`<b>Destino:</b> ${nodo.nombre}`)
                .addTo(mapa);
        }

        if (marcadorOrigen && marcadorDestino) {
            mapa.fitBounds(L.latLngBounds(
                marcadorOrigen.getLatLng(),
                marcadorDestino.getLatLng()
            ).pad(0.2));
        }
    }

    // ============================================================
    // DIBUJAR RUTA
    // ============================================================
    function dibujarRuta(camino) {
        if (rutaLayer) { mapa.removeLayer(rutaLayer); rutaLayer = null; }
        if (camino.length < 2) return;

        const latLngs = camino.map(k => {
            const n = osmNodes[k];
            return n ? [n.lat, n.lng] : null;
        }).filter(Boolean);

        const linea = L.polyline(latLngs, {
            color: '#0d9488',
            weight: 6,
            opacity: 0.95,
            lineJoin: 'round',
            lineCap: 'round',
        });

        const dash = L.polyline(latLngs, {
            color: 'white',
            weight: 2,
            opacity: 0.85,
            dashArray: '8, 12',
            className: 'route-dash-animated',
        });

        rutaLayer = L.layerGroup([linea, dash]).addTo(mapa);
        mapa.fitBounds(L.polyline(latLngs).getBounds().pad(0.15));
    }

    // ============================================================
    // STATS
    // ============================================================
    function actualizarStats(metros) {
        // Velocidad caminando ~1.4 m/s
        const segundos = Math.round(metros / 1.4);
        const minutos  = Math.ceil(segundos / 60);
        const pasos    = Math.round(metros * 1.3);

        const el = id => document.getElementById(id);
        if (el('statTiempo'))    el('statTiempo').textContent    = minutos <= 1 ? '1 min' : `${minutos} min`;
        if (el('statDistancia')) el('statDistancia').textContent = metros >= 1000 ? `${(metros/1000).toFixed(1)} km` : `${Math.round(metros)} m`;
        if (el('statPasos'))     el('statPasos').textContent     = `~${pasos}`;
    }

    // ============================================================
    // INSTRUCCIONES PASO A PASO
    // ============================================================
    function generarInstrucciones(camino) {
        const container = document.getElementById('routeSteps');
        if (!container) return;
        container.innerHTML = '';

        // Simplificar: agrupar segmentos rectos
        const puntos = camino.map(k => osmNodes[k]).filter(Boolean);

        // Calcular dirección entre dos puntos
        function direccion(a, b) {
            const dlng = b.lng - a.lng;
            const dlat = b.lat - a.lat;
            const ang  = Math.atan2(dlng, dlat) * 180 / Math.PI;
            if (ang > -22.5  && ang <= 22.5)  return { texto: 'Continúa al norte',    icono: 'bi-arrow-up' };
            if (ang > 22.5   && ang <= 67.5)  return { texto: 'Continúa al noreste',  icono: 'bi-arrow-up-right' };
            if (ang > 67.5   && ang <= 112.5) return { texto: 'Continúa al este',     icono: 'bi-arrow-right' };
            if (ang > 112.5  && ang <= 157.5) return { texto: 'Continúa al sureste',  icono: 'bi-arrow-down-right' };
            if (ang > 157.5  || ang <= -157.5)return { texto: 'Continúa al sur',      icono: 'bi-arrow-down' };
            if (ang > -157.5 && ang <= -112.5)return { texto: 'Continúa al suroeste', icono: 'bi-arrow-down-left' };
            if (ang > -112.5 && ang <= -67.5) return { texto: 'Continúa al oeste',    icono: 'bi-arrow-left' };
            return                                   { texto: 'Continúa al noroeste', icono: 'bi-arrow-up-left' };
        }

        function distSeg(a, b) {
            const R = 6371000;
            const toRad = x => x * Math.PI / 180;
            const dlat = toRad(b.lat - a.lat);
            const dlng = toRad(b.lng - a.lng);
            const x = Math.sin(dlat/2)**2 + Math.cos(toRad(a.lat))*Math.cos(toRad(b.lat))*Math.sin(dlng/2)**2;
            return 2*R*Math.asin(Math.sqrt(x));
        }

        // Primer paso: salida
        const origen  = nodes[locationMap[document.getElementById('originInput').value.trim()]];
        const destino = nodes[locationMap[document.getElementById('destinationInput').value.trim()]];

        const pasos = [];
        pasos.push({ texto: `Sal de ${origen?.nombre || 'tu ubicación'}`, icono: 'bi-geo-fill', metros: 0 });

        // Segmentos intermedios (simplificados cada ~3 nodos)
        for (let i = 0; i < puntos.length - 1; i += 3) {
            const a = puntos[i];
            const b = puntos[Math.min(i + 3, puntos.length - 1)];
            const dir = direccion(a, b);
            let d = 0;
            for (let j = i; j < Math.min(i + 3, puntos.length - 1); j++) {
                d += distSeg(puntos[j], puntos[j + 1]);
            }
            pasos.push({ texto: dir.texto, icono: dir.icono, metros: Math.round(d) });
        }

        pasos.push({ texto: `Llegas a ${destino?.nombre || 'tu destino'}`, icono: 'bi-flag-fill', metros: 0 });

        pasos.forEach((paso, i) => {
            const step = document.createElement('div');
            step.classList.add('instruction-step');
            step.innerHTML = `
                <div class="step-number">${i + 1}</div>
                <div class="step-content">
                    <div class="step-text">${paso.texto}</div>
                    ${paso.metros > 0 ? `<div class="step-distance"><i class="bi ${paso.icono}"></i> ${paso.metros} m</div>` : ''}
                </div>
                <div class="step-icon"><i class="bi ${paso.icono}"></i></div>
            `;
            container.appendChild(step);
        });
    }

    // ============================================================
    // LIMPIAR
    // ============================================================
    function limpiar() {
        if (rutaLayer)       { mapa.removeLayer(rutaLayer);       rutaLayer = null; }
        if (marcadorOrigen)  { mapa.removeLayer(marcadorOrigen);  marcadorOrigen = null; }
        if (marcadorDestino) { mapa.removeLayer(marcadorDestino); marcadorDestino = null; }

        ['statTiempo','statDistancia','statPasos'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.textContent = '--';
        });

        const sub = document.getElementById('topbarSubtitle');
        if (sub) sub.textContent = 'Selecciona origen y destino';

        const steps = document.getElementById('routeSteps');
        if (steps) steps.innerHTML = `
            <div class="instruction-step">
                <div class="step-content">
                    <div class="step-text route-empty-msg">
                        <i class="bi bi-map"></i>
                        Selecciona origen y destino para ver las instrucciones
                    </div>
                </div>
            </div>`;
    }

    // ============================================================
    // CALCULAR RUTA
    // ============================================================
    function calcularRuta() {
        const origenNombre  = document.getElementById('originInput').value.trim();
        const destinoNombre = document.getElementById('destinationInput').value.trim();
        if (!origenNombre || !destinoNombre) return;

        const origenNodeKey = locationMap[origenNombre];
        if (!origenNodeKey) return;

        const origenSnap = osmSnap[origenNodeKey];
        if (!origenSnap) { console.warn('Sin snap OSM para:', origenNodeKey); return; }

        let destinoSnap;

        if (destinoNombre === 'Baño mas cercano') {
            destinoSnap = banoCercanoOSM(origenSnap);
        } else {
            const destinoNodeKey = locationMap[destinoNombre];
            if (!destinoNodeKey) return;
            destinoSnap = osmSnap[destinoNodeKey];
        }

        if (!destinoSnap) { console.warn('Sin snap OSM para destino'); return; }
        if (origenSnap === destinoSnap) return;

        const resultado = dijkstraOSM(origenSnap, destinoSnap);

        if (!resultado.encontrado) {
            console.warn('No se encontró ruta en el grafo OSM');
            return;
        }

        dibujarRuta(resultado.camino);
        actualizarStats(resultado.distancia);
        generarInstrucciones(resultado.camino);

        const origenNodo  = nodes[locationMap[origenNombre]];
        const destinoNodo = nodes[locationMap[destinoNombre]] || { nombre: 'Baño más cercano' };
        const minutos = Math.ceil(resultado.distancia / 1.4 / 60);

        const sub = document.getElementById('topbarSubtitle');
        if (sub) sub.textContent = `${origenNodo?.nombre || origenNombre} → ${destinoNodo?.nombre || destinoNombre} · ${minutos} min`;
    }

    // ============================================================
    // INIT
    // ============================================================
    document.addEventListener('DOMContentLoaded', () => {
        initMapa();

        // Botón X: al limpiar el input, quita también su marcador y la ruta del mapa.
        // (La X está siempre visible por CSS y el borrado del texto lo hace el onclick del HTML.)
        function wireClear(inputId, tipo) {
            const x = document.querySelector('.input-clear[data-target="' + inputId + '"]');
            if (!x) return;
            x.addEventListener('mousedown', e => e.preventDefault());
            x.addEventListener('click', () => {
                if (tipo === 'origen'  && marcadorOrigen)  { mapa.removeLayer(marcadorOrigen);  marcadorOrigen  = null; }
                if (tipo === 'destino' && marcadorDestino) { mapa.removeLayer(marcadorDestino); marcadorDestino = null; }
                if (rutaLayer) { mapa.removeLayer(rutaLayer); rutaLayer = null; }
                ['statTiempo', 'statDistancia', 'statPasos'].forEach(id => {
                    const el = document.getElementById(id);
                    if (el) el.textContent = '--';
                });
            });
        }
        wireClear('originInput',      'origen');
        wireClear('destinationInput', 'destino');

        // Botón calcular
        const btn = document.getElementById('btnIniciarRuta');
        if (btn) btn.addEventListener('click', calcularRuta);

        // Mostrar marcador al seleccionar opción del dropdown
        document.addEventListener('click', e => {
            if (!e.target.classList.contains('search-option')) return;
            setTimeout(() => {
                const ov = document.getElementById('originInput').value.trim();
                const dv = document.getElementById('destinationInput').value.trim();

                if (ov) {
                    const k = locationMap[ov];
                    if (k && nodes[k]) mostrarMarcador('origen', k);
                }
                if (dv && dv !== 'Baño mas cercano') {
                    const k = locationMap[dv];
                    if (k && nodes[k]) mostrarMarcador('destino', k);
                }
            }, 50);
        });

        // Modos de transporte (visual por ahora)
        document.querySelectorAll('.transport-mode-btn').forEach(b => {
            b.addEventListener('click', () => {
                document.querySelectorAll('.transport-mode-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
            });
        });

        // ============================================================
        // CONEXIÓN: origen/destino vía URL  (?desde=<key>&hasta=<key>)
        // Llega desde map.html (planificador verde) o detail.html.
        // Rellena inputs + marcadores y, si hay ambos extremos, dibuja la ruta
        // reutilizando calcularRuta(). NO cambia la lógica de ruteo.
        // ============================================================
        (function conectarDesdeURL() {
            const params = new URLSearchParams(window.location.search);
            const desde = params.get('desde');
            const hasta = params.get('hasta');
            if (!desde && !hasta) return;

            // Acepta que desde/hasta venga como KEY (papeleria) o como NOMBRE ("Papelería").
            const resolverKey = v => {
                if (!v) return null;
                if (nodes[v]) return v;                                  // ya es key
                if (locationMap[v] && nodes[locationMap[v]]) return locationMap[v]; // nombre del input
                for (const k in nodes) if (nodes[k].nombre === v) return k;          // nombre real
                return null;
            };
            const desdeKey = resolverKey(desde);
            const hastaKey = resolverKey(hasta);

            // Registra nombre visible -> key (para inputs e instrucciones, incluye baños).
            const registrar = k => { if (k && nodes[k]) locationMap[nodes[k].nombre] = k; };
            registrar(desdeKey);
            registrar(hastaKey);

            const oInput = document.getElementById('originInput');
            const dInput = document.getElementById('destinationInput');

            if (desdeKey && osmSnap[desdeKey]) {
                if (oInput) oInput.value = nodes[desdeKey].nombre;
                mostrarMarcador('origen', desdeKey);
            }
            if (hastaKey && osmSnap[hastaKey]) {
                if (dInput) dInput.value = nodes[hastaKey].nombre;
                mostrarMarcador('destino', hastaKey);
            }

            // Con ambos extremos, calcula y dibuja la ruta (lógica existente).
            if (desdeKey && hastaKey && osmSnap[desdeKey] && osmSnap[hastaKey] && desdeKey !== hastaKey) {
                calcularRuta();
            }
        })();
    });

})();