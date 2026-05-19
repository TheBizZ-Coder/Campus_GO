const nodes = {

    // =========================
    // LUGARES PRINCIPALES
    // =========================

    auditorio: {
        x: 100,
        y: 430,
        type: "main"
    },

    biblioteca: {         // Edif. de Gobierno
        x: 210,
        y: 390,
        type: "main"
    },

    explanada: {          // Explanada / Letras
        x: 390,
        y: 430,
        type: "main"
    },

    cajero: {
        x: 310,
        y: 355,
        type: "main"
    },

    edificio_2: {
        x: 430,
        y: 175,
        type: "main"
    },

    edificio_1: {
        x: 540,
        y: 650,
        type: "main"
    },

    edificio_4: {
        x: 680,
        y: 310,
        type: "main"
    },

    edificio_3: {
        x: 660,
        y: 460,
        type: "main"
    },

    palapas_ia: {
        x: 830,
        y: 175,
        type: "main"
    },

    cafeteria_ia: {       // cancha de tenis / zona IA derecha
        x: 855,
        y: 390,
        type: "main"
    },

    palapas_gestion: {
        x: 190,
        y: 620,
        type: "main"
    },

    canchas_gestion: {    // canchas de gestión (abajo izquierda)
        x: 155,
        y: 790,
        type: "main"
    },

    cafeteria_gestion: {  // cafetería gestión / zapatos (abajo centro-izq)
        x: 355,
        y: 810,
        type: "main"
    },

    cancha_basquet_principal: {
        x: 780,
        y: 650,
        type: "main"
    },

    cafeteria_principal: {
        x: 870,
        y: 840,
        type: "main"
    },

    salida_estacionamiento: {
        x: 155,
        y: 130,
        type: "exit"
    },

    salida_metro_poli: {
        x: 870,
        y: 790,
        type: "exit"
    },


    // =========================
    // EJE HORIZONTAL NORTE
    // y ≈ 155  — corre sobre Edif.2, Edif.4, Palapas IA
    // =========================

    hn_izq: {           // esquina norte izquierda (junto a salida estacionamiento)
        x: 155,
        y: 155,
        type: "path"
    },
    hn_edif2_izq: {     // esquina NW de Edif.2
        x: 330,
        y: 155,
        type: "path"
    },
    hn_edif2_der: {     // esquina NE de Edif.2
        x: 530,
        y: 155,
        type: "path"
    },
    hn_edif4_izq: {     // esquina NW de Edif.4
        x: 600,
        y: 155,
        type: "path"
    },
    hn_edif4_der: {     // esquina NE de Edif.4 / SW Palapas IA
        x: 780,
        y: 155,
        type: "path"
    },
    hn_der: {           // extremo derecho norte (junto a cancha tenis NE)
        x: 870,
        y: 155,
        type: "path"
    },


    // =========================
    // EJE HORIZONTAL CENTRO
    // y ≈ 500  — pasa frente a Explanada, Edif.3, Edif.4 sur
    // =========================

    hc_izq: {           // extremo izquierdo (oeste del auditorio)
        x: 60,
        y: 500,
        type: "path"
    },
    hc_audit: {         // frente al auditorio / intersección eje vertical izq
        x: 155,
        y: 500,
        type: "path"
    },
    hc_v_izq: {         // intersección eje vertical izquierdo (x≈310)
        x: 310,
        y: 500,
        type: "path"
    },
    hc_explanada: {     // frente a Explanada/Letras
        x: 430,
        y: 500,
        type: "path"
    },
    hc_v_centro: {      // intersección eje vertical centro (x≈560)
        x: 560,
        y: 500,
        type: "path"
    },
    hc_edif3: {         // frente a Edif.3
        x: 660,
        y: 500,
        type: "path"
    },
    hc_v_der: {         // intersección eje vertical derecho (x≈780)
        x: 780,
        y: 500,
        type: "path"
    },
    hc_der: {           // extremo derecho centro
        x: 870,
        y: 500,
        type: "path"
    },


    // =========================
    // EJE HORIZONTAL SUR
    // y ≈ 730  — corre bajo Edif.1 y cancha principal
    // =========================

    hs_izq: {           // extremo izquierdo sur
        x: 155,
        y: 730,
        type: "path"
    },
    hs_edif1_izq: {     // esquina SW de Edif.1
        x: 430,
        y: 730,
        type: "path"
    },
    hs_edif1_der: {     // esquina SE de Edif.1
        x: 660,
        y: 730,
        type: "path"
    },
    hs_cancha_izq: {    // esquina SW de cancha principal
        x: 730,
        y: 730,
        type: "path"
    },
    hs_cancha_der: {    // esquina SE de cancha principal / junto a salida metro
        x: 870,
        y: 730,
        type: "path"
    },


    // =========================
    // EJE VERTICAL IZQUIERDO
    // x ≈ 155
    // salida estacionamiento → gobierno → auditorio → palapas gestión → canchas
    // =========================

    vi_norte: {         // entre salida estacionamiento y Edif. Gobierno
        x: 155,
        y: 270,
        type: "path"
    },
    vi_gobierno: {      // frente a Edif. de Gobierno / Biblioteca
        x: 155,
        y: 390,
        type: "path"
    },
    // hc_audit ya cubre y≈500 en x≈155
    vi_sur: {           // entre auditorio y palapas gestión
        x: 155,
        y: 580,
        type: "path"
    },


    // =========================
    // EJE VERTICAL CENTRO
    // x ≈ 430
    // Edif.2 sur → Explanada → Edif.1 norte → Edif.1 sur
    // =========================

    vc_norte: {         // Sur de Edif.2 / escaleras centro
        x: 430,
        y: 245,
        type: "path"
    },
    // hc_explanada cubre y≈500 en x≈430
    vc_sur: {           // Norte de Edif.1
        x: 430,
        y: 570,
        type: "path"
    },
    vc_sur2: {          // Sur de Edif.1 / inicio eje horizontal sur
        x: 430,
        y: 660,
        type: "path"
    },


    // =========================
    // EJE VERTICAL DERECHO
    // x ≈ 780
    // Edif.4 sur → Edif.3 → cancha principal norte → sur
    // =========================

    vd_norte: {         // Sur de Edif.4
        x: 780,
        y: 270,
        type: "path"
    },
    // hc_v_der cubre y≈500 en x≈780
    vd_sur: {           // Norte de cancha principal
        x: 780,
        y: 570,
        type: "path"
    },
    vd_sur2: {          // Sur de cancha principal
        x: 780,
        y: 660,
        type: "path"
    },


    // =========================
    // CAMINO AL AUDITORIO
    // ramal horizontal corto desde eje vertical izq al auditorio
    // =========================

    audit_camino: {
        x: 120,
        y: 430,
        type: "path"
    },


    // =========================
    // BAÑOS
    // =========================

    bano_hombres_1: {
        x: 430,
        y: 140,
        type: "bathroom"
    },
    bano_mujeres_1: {
        x: 445,
        y: 140,
        type: "bathroom"
    },

    bano_hombres_2: {
        x: 780,
        y: 140,
        type: "bathroom"
    },
    bano_mujeres_2: {
        x: 795,
        y: 140,
        type: "bathroom"
    },

    bano_hombres_3: {
        x: 620,
        y: 460,
        type: "bathroom"
    },
    bano_mujeres_3: {
        x: 635,
        y: 460,
        type: "bathroom"
    },

    bano_hombres_4: {
        x: 855,
        y: 430,
        type: "bathroom"
    },
    bano_mujeres_4: {
        x: 870,
        y: 430,
        type: "bathroom"
    },

    bano_hombres_5: {
        x: 540,
        y: 610,
        type: "bathroom"
    },
    bano_mujeres_5: {
        x: 555,
        y: 610,
        type: "bathroom"
    },

    bano_hombres_6: {
        x: 780,
        y: 610,
        type: "bathroom"
    },
    bano_mujeres_6: {
        x: 795,
        y: 610,
        type: "bathroom"
    },

    bano_hombres_7: {
        x: 60,
        y: 500,
        type: "bathroom"
    },
    bano_mujeres_7: {
        x: 75,
        y: 500,
        type: "bathroom"
    },


    // =========================
    // ESCALERAS
    // =========================

    escaleras_1: {      // Edif.2 izquierda
        x: 355,
        y: 200,
        type: "stairs"
    },
    escaleras_2: {      // Edif.4 izquierda (eje norte)
        x: 600,
        y: 200,
        type: "stairs"
    },
    escaleras_3: {      // Zona cajero / Gobierno
        x: 310,
        y: 430,
        type: "stairs"
    },
    escaleras_4: {      // Edif.4 / Edif.3 centro
        x: 560,
        y: 430,
        type: "stairs"
    },
    escaleras_5: {      // Edif.4 derecha
        x: 780,
        y: 430,
        type: "stairs"
    },
    escaleras_6: {      // Edif.1 izquierda
        x: 430,
        y: 610,
        type: "stairs"
    },
    escaleras_7: {      // Edif.1 derecha
        x: 660,
        y: 610,
        type: "stairs"
    },
};