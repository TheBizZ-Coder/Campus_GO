// places.js
// Metadatos de cada ubicación (categoría, ícono, zona) para los frames de
// mapa y detalle. La fuente de coordenadas y nombre sigue siendo nodes.js;
// esto NO lo duplica, solo lo complementa. Es la única fuente de categorías,
// usada por map.html y detail.html para no repetir la info en cada frame.

const PLACE_TIPOS = {
    acceso:    { label: 'Acceso',     icon: 'bi-door-open-fill', pin: 'acceso',    box: 'secondary' },
    cafeteria: { label: 'Cafetería',  icon: 'bi-cup-hot-fill',   pin: 'cafeteria', box: 'secondary' },
    bano:      { label: 'Baño',       icon: 'bi-droplet-fill',   pin: 'bano',      box: '' },
    servicio:  { label: 'Servicio',   icon: 'bi-gear-fill',      pin: 'servicio',  box: 'purple' },
    academico: { label: 'Académico',  icon: 'bi-book-fill',      pin: 'academico', box: '' },
    area:      { label: 'Área común', icon: 'bi-tree-fill',      pin: 'area',      box: 'dark' },
};

const PLACE_META = {
    entrada_principal:        { tipo: 'acceso',    icon: 'bi-door-open-fill',   zona: 'Entrada principal' },
    salida_estacionamiento:   { tipo: 'acceso',    icon: 'bi-door-closed-fill', zona: 'Av. Juan de Dios Bátiz' },
    salida_metro_poli:        { tipo: 'acceso',    icon: 'bi-door-closed-fill', zona: 'Metro Politécnico' },
    auditorio:                { tipo: 'academico', icon: 'bi-easel-fill',       zona: 'Auditorio' },
    biblioteca:               { tipo: 'academico', icon: 'bi-book-fill',        zona: 'Edif. de Gobierno' },
    cafeteria_gestion:        { tipo: 'cafeteria', icon: 'bi-cup-hot-fill',     zona: 'Zona gestión' },
    cafeteria_ia:             { tipo: 'cafeteria', icon: 'bi-cup-hot-fill',     zona: 'Zona IA' },
    cafeteria_principal:      { tipo: 'cafeteria', icon: 'bi-cup-hot-fill',     zona: 'Zona principal' },
    ventanillas_gestion:      { tipo: 'servicio',  icon: 'bi-window-fill',      zona: 'Gestión escolar' },
    cajero:                   { tipo: 'servicio',  icon: 'bi-cash-coin',        zona: 'Zona principal' },
    papeleria:                { tipo: 'servicio',  icon: 'bi-pencil-fill',      zona: 'Zona IA' },
    explanada:                { tipo: 'area',      icon: 'bi-flag-fill',        zona: 'Explanada / Letras' },
    palapas_gestion:          { tipo: 'area',      icon: 'bi-umbrella-fill',    zona: 'Zona gestión' },
    palapas_ia:               { tipo: 'area',      icon: 'bi-umbrella-fill',    zona: 'Zona IA' },
    cancha_basquet_principal: { tipo: 'area',      icon: 'bi-trophy-fill',      zona: 'Zona principal' },

    bano_1:         { tipo: 'bano', icon: 'bi-droplet-fill', zona: 'Zona norte' },
    bano_2:         { tipo: 'bano', icon: 'bi-droplet-fill', zona: 'Zona sur' },
    bano_3_hombres: { tipo: 'bano', icon: 'bi-droplet-fill', zona: 'Zona centro' },
    bano_4_hombres: { tipo: 'bano', icon: 'bi-droplet-fill', zona: 'Zona sur-oriente' },
    bano_5_hombres: { tipo: 'bano', icon: 'bi-droplet-fill', zona: 'Zona IA' },
    bano_5_mujeres: { tipo: 'bano', icon: 'bi-droplet-fill', zona: 'Zona IA' },
    bano_6_hombres: { tipo: 'bano', icon: 'bi-droplet-fill', zona: 'Zona centro-sur' },
    bano_6_mujeres: { tipo: 'bano', icon: 'bi-droplet-fill', zona: 'Zona centro-sur' },
    bano_hombres_7: { tipo: 'bano', icon: 'bi-droplet-fill', zona: 'Auditorio' },
    bano_mujeres_7: { tipo: 'bano', icon: 'bi-droplet-fill', zona: 'Auditorio' },
};

// Descripción genérica y honesta por categoría (no inventamos datos que no tenemos).
const TIPO_DESCRIPCION = {
    acceso:    'Punto de acceso al campus de ESCOM IPN.',
    cafeteria: 'Punto de venta de alimentos y bebidas dentro del campus de ESCOM IPN.',
    bano:      'Servicio sanitario ubicado dentro del campus de ESCOM IPN.',
    servicio:  'Servicio de apoyo a la comunidad de ESCOM IPN.',
    academico: 'Espacio académico del campus de ESCOM IPN.',
    area:      'Área común del campus de ESCOM IPN.',
};

// Construye el arreglo de ubicaciones combinando nodes.js + metadatos.
function getUbicaciones() {
    return Object.keys(nodes).map(key => {
        const n = nodes[key];
        const meta = PLACE_META[key] || { tipo: 'servicio', icon: 'bi-geo-alt-fill', zona: '' };
        const t = PLACE_TIPOS[meta.tipo] || PLACE_TIPOS.servicio;
        return {
            codigo:      key,
            nombre:      n.nombre,
            lat:         n.lat,
            lng:         n.lng,
            tipo:        meta.tipo,
            tipo_label:  t.label,
            icon:        meta.icon,
            pinClase:    t.pin,
            boxClase:    t.box,
            zona:        meta.zona || '',
            descripcion: TIPO_DESCRIPCION[meta.tipo] || '',
            url_detalle: 'detail.html?lugar=' + key,
        };
    });
}

function getLugar(key) {
    return getUbicaciones().find(u => u.codigo === key) || null;
}

// Centro del campus = centroide de todas las ubicaciones.
function campusCentro() {
    const ks = Object.keys(nodes);
    let la = 0, ln = 0;
    ks.forEach(k => { la += nodes[k].lat; ln += nodes[k].lng; });
    return [la / ks.length, ln / ks.length];
}