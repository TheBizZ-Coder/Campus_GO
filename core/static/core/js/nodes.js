// nodes.js
// Coordenadas GPS reales de cada lugar del campus ESCOM IPN
// Usadas para mostrar marcadores y como puntos de inicio/fin de ruta en OSRM

const nodes = {
    // LUGARES PRINCIPALES
    entrada_principal:        { lat: 19.5052778, lng: -99.1453889, nombre: "Entrada principal" },
    estacionamiento:   { lat: 19.5048889, lng: -99.1458889, nombre: "Estacionamiento" },
    auditorio:                { lat: 19.5053056, lng: -99.1464722, nombre: "Auditorio ESCOM" },
    biblioteca:               { lat: 19.5051944, lng: -99.1463611, nombre: "Biblioteca" },
    palapas_gestion:          { lat: 19.5055278, lng: -99.1468611, nombre: "Palapas gestión" },
    cafeteria_gestion:        { lat: 19.5055833, lng: -99.1470833, nombre: "Cafetería gestión" },
    ventanillas_gestion:      { lat: 19.5054167, lng: -99.1467222, nombre: "Ventanillas de gestión" },
    explanada:                { lat: 19.5049167, lng: -99.1467222, nombre: "Explanada/Letras" },
    cafeteria_ia:             { lat: 19.5037500, lng: -99.1471389, nombre: "Cafetería IA" },
    palapas_ia:               { lat: 19.503716,  lng: -99.146907,  nombre: "Palapas IA" },
    cancha_basquet_principal: { lat: 19.5040000, lng: -99.1475556, nombre: "Cancha de basquet principal" },
    salida_metro_poli:        { lat: 19.5037778, lng: -99.1478611, nombre: "Salida Metro Politécnico" },
    cafeteria_principal:      { lat: 19.5039722, lng: -99.1478611, nombre: "Cafetería principal" },
    cajero:                   { lat: 19.505061 , lng: -99.146618, nombre: "Cajero" },
    papeleria:                { lat: 19.5038333, lng: -99.1474167, nombre: "Papelería" },

    // BAÑOS
    bano_1:         { lat: 19.5050833, lng: -99.1466389, nombre: "Baños zona norte" },
    bano_2:         { lat: 19.5040000, lng: -99.1467500, nombre: "Baños zona sur" },
    bano_3_hombres: { lat: 19.5048333, lng: -99.1471389, nombre: "Baño hombres zona centro" },
    bano_4_hombres: { lat: 19.5042778, lng: -99.1473889, nombre: "Baño hombres zona sur-oriente" },
    bano_5_hombres: { lat: 19.5037778, lng: -99.1473333, nombre: "Baño hombres zona IA" },
    bano_5_mujeres: { lat: 19.5037500, lng: -99.1472222, nombre: "Baño mujeres zona IA" },
    bano_6_hombres: { lat: 19.5042500, lng: -99.1470833, nombre: "Baño hombres zona centro-sur" },
    bano_6_mujeres: { lat: 19.5041944, lng: -99.1469722, nombre: "Baño mujeres zona centro-sur" },
    bano_hombres_7: { lat: 19.5053056, lng: -99.1463889, nombre: "Baño hombres auditorio" },
    bano_mujeres_7: { lat: 19.5053889, lng: -99.1465833, nombre: "Baño mujeres auditorio" },
};