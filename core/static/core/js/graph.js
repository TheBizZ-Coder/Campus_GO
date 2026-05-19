// graph.js
// Grafo de conexiones del campus — solo conexiones físicamente posibles.
// Coordenadas ajustadas al mapa 900×900px.

function dist(a, b) {
    const dx = nodes[a].x - nodes[b].x;
    const dy = nodes[a].y - nodes[b].y;
    return Math.round(Math.sqrt(dx * dx + dy * dy));
}

function e(a, b) {
    return { to: b, weight: dist(a, b) };
}

const graph = {

    // ============================================================
    // EJE HORIZONTAL NORTE  (y ≈ 155)
    // hn_izq → hn_edif2_izq → hn_edif2_der → hn_edif4_izq → hn_edif4_der → hn_der
    // ============================================================

    hn_izq: [
        e("hn_izq", "hn_edif2_izq"),
        e("hn_izq", "vi_norte"),
    ],
    hn_edif2_izq: [
        e("hn_edif2_izq", "hn_izq"),
        e("hn_edif2_izq", "hn_edif2_der"),
        e("hn_edif2_izq", "escaleras_1"),
    ],
    hn_edif2_der: [
        e("hn_edif2_der", "hn_edif2_izq"),
        e("hn_edif2_der", "hn_edif4_izq"),
        e("hn_edif2_der", "bano_hombres_1"),
        e("hn_edif2_der", "bano_mujeres_1"),
        e("hn_edif2_der", "vc_norte"),
    ],
    hn_edif4_izq: [
        e("hn_edif4_izq", "hn_edif2_der"),
        e("hn_edif4_izq", "hn_edif4_der"),
        e("hn_edif4_izq", "escaleras_2"),
    ],
    hn_edif4_der: [
        e("hn_edif4_der", "hn_edif4_izq"),
        e("hn_edif4_der", "hn_der"),
        e("hn_edif4_der", "bano_hombres_2"),
        e("hn_edif4_der", "bano_mujeres_2"),
        e("hn_edif4_der", "vd_norte"),
        e("hn_edif4_der", "palapas_ia"),
    ],
    hn_der: [
        e("hn_der", "hn_edif4_der"),
        e("hn_der", "hc_der"),
    ],


    // ============================================================
    // EJE HORIZONTAL CENTRO  (y ≈ 500)
    // hc_izq → hc_audit → hc_v_izq → hc_explanada → hc_v_centro → hc_edif3 → hc_v_der → hc_der
    // ============================================================

    hc_izq: [
        e("hc_izq", "hc_audit"),
        e("hc_izq", "bano_hombres_7"),
        e("hc_izq", "bano_mujeres_7"),
    ],
    hc_audit: [
        e("hc_audit", "hc_izq"),
        e("hc_audit", "hc_v_izq"),
        e("hc_audit", "audit_camino"),
        e("hc_audit", "vi_gobierno"),   // sube por eje vertical izquierdo
        e("hc_audit", "vi_sur"),        // baja por eje vertical izquierdo
    ],
    hc_v_izq: [
        e("hc_v_izq", "hc_audit"),
        e("hc_v_izq", "hc_explanada"),
        e("hc_v_izq", "cajero"),
        e("hc_v_izq", "escaleras_3"),
        e("hc_v_izq", "vc_sur"),        // conexión hacia eje vertical centro sur (Edif.1 norte)
    ],
    hc_explanada: [
        e("hc_explanada", "hc_v_izq"),
        e("hc_explanada", "hc_v_centro"),
        e("hc_explanada", "explanada"),
        e("hc_explanada", "vc_sur"),
    ],
    hc_v_centro: [
        e("hc_v_centro", "hc_explanada"),
        e("hc_v_centro", "hc_edif3"),
        e("hc_v_centro", "escaleras_4"),
        e("hc_v_centro", "vc_sur"),
    ],
    hc_edif3: [
        e("hc_edif3", "hc_v_centro"),
        e("hc_edif3", "hc_v_der"),
        e("hc_edif3", "edificio_3"),
        e("hc_edif3", "bano_hombres_3"),
        e("hc_edif3", "bano_mujeres_3"),
    ],
    hc_v_der: [
        e("hc_v_der", "hc_edif3"),
        e("hc_v_der", "hc_der"),
        e("hc_v_der", "vd_norte"),
        e("hc_v_der", "vd_sur"),
        e("hc_v_der", "escaleras_5"),
        e("hc_v_der", "bano_hombres_4"),
        e("hc_v_der", "bano_mujeres_4"),
    ],
    hc_der: [
        e("hc_der", "hc_v_der"),
        e("hc_der", "hn_der"),
        e("hc_der", "hs_cancha_der"),
        e("hc_der", "cafeteria_ia"),
    ],


    // ============================================================
    // EJE HORIZONTAL SUR  (y ≈ 730)
    // hs_izq → hs_edif1_izq → hs_edif1_der → hs_cancha_izq → hs_cancha_der
    // ============================================================

    hs_izq: [
        e("hs_izq", "hs_edif1_izq"),
        e("hs_izq", "vi_sur"),
        e("hs_izq", "canchas_gestion"),
    ],
    hs_edif1_izq: [
        e("hs_edif1_izq", "hs_izq"),
        e("hs_edif1_izq", "hs_edif1_der"),
        e("hs_edif1_izq", "vc_sur2"),
        e("hs_edif1_izq", "cafeteria_gestion"),
    ],
    hs_edif1_der: [
        e("hs_edif1_der", "hs_edif1_izq"),
        e("hs_edif1_der", "hs_cancha_izq"),
        e("hs_edif1_der", "escaleras_7"),
    ],
    hs_cancha_izq: [
        e("hs_cancha_izq", "hs_edif1_der"),
        e("hs_cancha_izq", "hs_cancha_der"),
        e("hs_cancha_izq", "vd_sur2"),
    ],
    hs_cancha_der: [
        e("hs_cancha_der", "hs_cancha_izq"),
        e("hs_cancha_der", "hc_der"),
        e("hs_cancha_der", "cafeteria_principal"),
        e("hs_cancha_der", "salida_metro_poli"),
    ],


    // ============================================================
    // EJE VERTICAL IZQUIERDO  (x ≈ 155)
    // salida_estacionamiento → hn_izq → vi_norte → vi_gobierno → hc_audit → vi_sur → hs_izq
    // ============================================================

    salida_estacionamiento: [
        e("salida_estacionamiento", "hn_izq"),
    ],
    vi_norte: [
        e("vi_norte", "hn_izq"),
        e("vi_norte", "vi_gobierno"),
    ],
    vi_gobierno: [
        e("vi_gobierno", "vi_norte"),
        e("vi_gobierno", "hc_audit"),
        e("vi_gobierno", "biblioteca"),
    ],
    vi_sur: [
        e("vi_sur", "hc_audit"),
        e("vi_sur", "hs_izq"),
        e("vi_sur", "palapas_gestion"),
    ],


    // ============================================================
    // EJE VERTICAL CENTRO  (x ≈ 430)
    // hn_edif2_der → vc_norte → hc_explanada → vc_sur → vc_sur2 → hs_edif1_izq
    // ============================================================

    vc_norte: [
        e("vc_norte", "hn_edif2_der"),
        e("vc_norte", "edificio_2"),
        e("vc_norte", "hc_explanada"),
    ],
    vc_sur: [
        e("vc_sur", "hc_v_izq"),
        e("vc_sur", "hc_explanada"),
        e("vc_sur", "hc_v_centro"),
        e("vc_sur", "escaleras_6"),
        e("vc_sur", "bano_hombres_5"),
        e("vc_sur", "bano_mujeres_5"),
        e("vc_sur", "vc_sur2"),
        e("vc_sur", "edificio_1"),
    ],
    vc_sur2: [
        e("vc_sur2", "vc_sur"),
        e("vc_sur2", "hs_edif1_izq"),
    ],


    // ============================================================
    // EJE VERTICAL DERECHO  (x ≈ 780)
    // hn_edif4_der → vd_norte → hc_v_der → vd_sur → vd_sur2 → hs_cancha_izq
    // ============================================================

    vd_norte: [
        e("vd_norte", "hn_edif4_der"),
        e("vd_norte", "edificio_4"),
        e("vd_norte", "hc_v_der"),
    ],
    vd_sur: [
        e("vd_sur", "hc_v_der"),
        e("vd_sur", "vd_sur2"),
        e("vd_sur", "cancha_basquet_principal"),
        e("vd_sur", "bano_hombres_6"),
        e("vd_sur", "bano_mujeres_6"),
    ],
    vd_sur2: [
        e("vd_sur2", "vd_sur"),
        e("vd_sur2", "hs_cancha_izq"),
    ],


    // ============================================================
    // CAMINO AL AUDITORIO
    // ============================================================

    audit_camino: [
        e("audit_camino", "hc_audit"),
        e("audit_camino", "auditorio"),
    ],
    auditorio: [
        e("auditorio", "audit_camino"),
        e("auditorio", "bano_hombres_7"),
        e("auditorio", "bano_mujeres_7"),
    ],


    // ============================================================
    // LUGARES PRINCIPALES
    // ============================================================

    biblioteca: [
        e("biblioteca", "vi_gobierno"),
    ],
    explanada: [
        e("explanada", "hc_explanada"),
    ],
    cajero: [
        e("cajero", "hc_v_izq"),
        e("cajero", "escaleras_3"),
    ],
    edificio_2: [
        e("edificio_2", "vc_norte"),
        e("edificio_2", "escaleras_1"),
    ],
    edificio_1: [
        e("edificio_1", "vc_sur"),
        e("edificio_1", "escaleras_6"),
    ],
    edificio_4: [
        e("edificio_4", "vd_norte"),
        e("edificio_4", "escaleras_2"),
        e("edificio_4", "escaleras_4"),
        e("edificio_4", "escaleras_5"),
    ],
    edificio_3: [
        e("edificio_3", "hc_edif3"),
        e("edificio_3", "escaleras_4"),
        e("edificio_3", "escaleras_7"),
    ],
    palapas_ia: [
        e("palapas_ia", "hn_edif4_der"),
        e("palapas_ia", "vd_norte"),
    ],
    cafeteria_ia: [
        e("cafeteria_ia", "hc_der"),
        e("cafeteria_ia", "bano_hombres_4"),
        e("cafeteria_ia", "bano_mujeres_4"),
    ],
    palapas_gestion: [
        e("palapas_gestion", "vi_sur"),
    ],
    canchas_gestion: [
        e("canchas_gestion", "hs_izq"),
        e("canchas_gestion", "cafeteria_gestion"),
    ],
    cafeteria_gestion: [
        e("cafeteria_gestion", "hs_edif1_izq"),
        e("cafeteria_gestion", "canchas_gestion"),
    ],
    cancha_basquet_principal: [
        e("cancha_basquet_principal", "vd_sur"),
        e("cancha_basquet_principal", "cafeteria_principal"),
    ],
    cafeteria_principal: [
        e("cafeteria_principal", "hs_cancha_der"),
        e("cafeteria_principal", "cancha_basquet_principal"),
        e("cafeteria_principal", "salida_metro_poli"),
    ],
    salida_metro_poli: [
        e("salida_metro_poli", "hs_cancha_der"),
        e("salida_metro_poli", "cafeteria_principal"),
    ],


    // ============================================================
    // ESCALERAS
    // ============================================================

    escaleras_1: [
        e("escaleras_1", "hn_edif2_izq"),
        e("escaleras_1", "edificio_2"),
    ],
    escaleras_2: [
        e("escaleras_2", "hn_edif4_izq"),
        e("escaleras_2", "edificio_4"),
    ],
    escaleras_3: [
        e("escaleras_3", "hc_v_izq"),
        e("escaleras_3", "cajero"),
    ],
    escaleras_4: [
        e("escaleras_4", "hc_v_centro"),
        e("escaleras_4", "edificio_4"),
        e("escaleras_4", "edificio_3"),
    ],
    escaleras_5: [
        e("escaleras_5", "hc_v_der"),
        e("escaleras_5", "edificio_4"),
    ],
    escaleras_6: [
        e("escaleras_6", "vc_sur"),
        e("escaleras_6", "edificio_1"),
    ],
    escaleras_7: [
        e("escaleras_7", "hs_edif1_der"),
        e("escaleras_7", "edificio_3"),
    ],


    // ============================================================
    // BAÑOS
    // ============================================================

    bano_hombres_1: [ e("bano_hombres_1", "hn_edif2_der") ],
    bano_mujeres_1: [ e("bano_mujeres_1", "hn_edif2_der") ],
    bano_hombres_2: [ e("bano_hombres_2", "hn_edif4_der") ],
    bano_mujeres_2: [ e("bano_mujeres_2", "hn_edif4_der") ],
    bano_hombres_3: [ e("bano_hombres_3", "hc_edif3") ],
    bano_mujeres_3: [ e("bano_mujeres_3", "hc_edif3") ],
    bano_hombres_4: [
        e("bano_hombres_4", "hc_v_der"),
        e("bano_hombres_4", "cafeteria_ia"),
    ],
    bano_mujeres_4: [
        e("bano_mujeres_4", "hc_v_der"),
        e("bano_mujeres_4", "cafeteria_ia"),
    ],
    bano_hombres_5: [ e("bano_hombres_5", "vc_sur") ],
    bano_mujeres_5: [ e("bano_mujeres_5", "vc_sur") ],
    bano_hombres_6: [ e("bano_hombres_6", "vd_sur") ],
    bano_mujeres_6: [ e("bano_mujeres_6", "vd_sur") ],
    bano_hombres_7: [
        e("bano_hombres_7", "hc_izq"),
        e("bano_hombres_7", "auditorio"),
    ],
    bano_mujeres_7: [
        e("bano_mujeres_7", "hc_izq"),
        e("bano_mujeres_7", "auditorio"),
    ],
};