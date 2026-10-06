// i18n.js - Multilingual Dictionary and Localization for Istanbul Vilayet 1895
(function(window) {
  const translations = {
    tr: {
      appName: "İstanbul Vilayeti 1895 (Vital Cuinet - Dijital harita: Sabri Karadoğan)",
      tagline: "Vital Cuinet'nin 1895 Tarihli İstanbul (Dersaadet) Vilayeti Asya Mülhakatı Haritası",
      subTagline: "3 Belediye Dairesi, 5 Kaza (Adalar, Gebze, Beykoz, Kartal, Şile) ve Boğaziçi georeferanslanmış ve 3 dilde açıklanmıştır",
      searchPlaceholder: "Yer adı, Osmanlıca veya Fransızca ara (örn. Üsküdar, Kadıköy, Beykoz, Büyükada, Şile, Boğaziçi)...",
      allKinds: "Tüm Kategoriler",
      allSandjaks: "Tüm İdari Bölgeler / Kazalar",
      sandjakFilterLabel: "Kaza / Bölge Filtresi",
      kindFilterLabel: "Kategori Filtresi",
      opacityLabel: "1895 Harita Saydamlığı",
      toggleHistorical: "1895 Haritasını Göster / Gizle",
      showAllMarkers: "Tüm İşaretçileri Göster",
      hideMarkers: "İşaretçileri Gizle",
      zoomIn: "Yakınlaş",
      zoomOut: "Uzaklaş",
      home: "İlk Görünüm",
      fitHistorical: "Tarihi Haritayı Ekrana Sığdır",
      fullscreen: "Tam Ekran",
      exitFullscreen: "Tam Ekrandan Çık",
      about: "Hakkında",
      results: (n, total) => `${n} / ${total} konum listeleniyor`,
      noResults: "Aramanıza uygun yer bulunamadı.",
      loading: "Harita yükleniyor...",
      loadFailed: "Harita verileri yüklenemedi.",
      rowFrench: "Haritadaki Orijinal İsim (Fransızca)",
      rowOttoman: "Osmanlıca İsim (Latin & Arap Harfli)",
      rowModern: "Günümüz Türkiye Karşılığı",
      etymology: "Etimoloji ve Anlam",
      historicalNote: "Tarihi ve Coğrafi Açıklama",
      flyToLocation: "Haritada Konuma Git",
      shareLocation: "Paylaşım Bağlantısını Kopyala",
      linkCopied: "Bağlantı panoya kopyalandı!",
      close: "Kapat",
      kinds: {
        city: "Vilayet / Sancak Merkezi",
        caza: "Kaza (İlçe) Merkezi",
        town: "Nahiye / Sayfiye / Sahil Köyü",
        mountain: "Dağ / Zirve / Tepe",
        water: "Boğaz / Göl / Körfez / Deniz",
        ruin: "Tarihi Kale / Anıt / Eser",
        other: "Resmi Künye & Fener"
      },
      sandjaks: {
        "Istanbul_Asie": "Dersaadet Asya Ciheti Daireleri (Üsküdar, Kadıköy, Kanlıca)",
        "Adalar": "Prens Adaları Kazası (Büyükada, Heybeli, Burgaz, Kınalı)",
        "Guebze": "Gebze Kazası (Darıca, Hereke, Eskihisar, Pendik, Tuzla)",
        "Beicos": "Beykoz Kazası (Anadolukavağı, Poyrazköy, Riva, Polonezköy)",
        "Kartal": "Kartal Kazası (Maltepe, Yakacık, Samandıra, Bostancı, Erenköy)",
        "Chile": "Şile Kazası (Şile Feneri, Ağva, Kabakoz, Ömerli)",
        "Europe": "Avrupa Yakası, Boğaziçi ve Çatalca",
        "Special": "Resmi Künye & Ölçek Cetveli"
      },
      layers: {
        positron: "CartoDB Positron (Açık Minimalist)",
        osm: "OpenStreetMap (Sokak Haritası)",
        dark: "CartoDB Dark Matter (Koyu Tema)",
        satellite: "Esri Satellite (Modern Uydu)",
        topo: "OpenTopoMap (Topografik / Eşyükselti)",
        historicalOverlay: "1895 Cuinet İstanbul Haritası"
      },
      aboutTitle: "Vital Cuinet ve 1895 İstanbul Vilayeti (Asya Mülhakatı) Haritası",
      aboutBody: [
        "Bu interaktif coğrafi harita, Fransız istatistikçi ve coğrafyacı Vital Cuinet (1833–1896) tarafından hazırlanan ve 1895 yılında Paris'te Ernest Leroux tarafından yayımlanan 'La Turquie d'Asie: géographie administrative, statistique, descriptive et raisonnée de chaque province de l'Asie-Mineure' adlı eserin 4. cildinde (sayfa 615) yer alan 'Vilayet de Constantinople (Dépendances en Turquie d'Asie)' haritasını temel alır.",
        "Harita, Sultan II. Abdülhamid devrinde Payitaht İstanbul'un Asya yakasını oluşturan 3 Belediye Dairesini (Kanlıca VIII, Üsküdar IX, Kadıköy X) ve doğrudan vilayete bağlı 5 Asya Kazasını (Adalar, Gebze, Beykoz, Kartal ve Şile) ayrıntılı biçimde belgeler. Ayrıca Boğaziçi'nin her iki yakasını, Karadeniz ve Marmara kıyılarını, su bentlerini ve Rumeli/Anadolu demiryolu hatlarını kapsar.",
        "Bu sistemde 1895 tarihli özgün taşbaskı harita (3840 × 2617 piksel), WGS84 koordinat sistemine matematiksel olarak georeferanslanarak Leaflet.js motoru üzerinde modern dünya altlıkları (OpenStreetMap, CartoDB Positron, Dark Matter, Esri Uydu ve OpenTopoMap) ile birebir çakıştırılmıştır.",
        "Kullanıcılar sol üstteki şeffaflık (opacity) kaydırıcısı ile 1895 haritasının geçirgenliğini %0 ile %100 arasında değiştirerek, Osmanlı devrindeki kıyı çizgileri, yalılar, fenerler, dereler ve tepe rakımları ile günümüz modern uydu görüntülerini canlı olarak karşılaştırabilirler."
      ],
      statsTitle: "1895 Yılında İstanbul Vilayeti Asya Ciheti İdari Taksimatı",
      statsItems: [
        "Müellif: Vital Cuinet (La Turquie d'Asie, Tome IV, p. 615, Ernest Leroux, Paris, 1895)",
        "Dijital Harita & Georeferans: Sabri Karadoğan",
        "Asya Belediye Daireleri: VIII. Kanlıca, IX. Üsküdar, X. Kadıköy",
        "Asya Kazaları (5 Kaza): Prens Adaları (Büyükada), Gebze, Beykoz, Kartal, Şile",
        "Önemli Demir Yolu Hatları: Haydarpaşa - İzmit - Ankara Anadolu Demiryolu Hattı",
        "Su Şebekesi: Belgrad Ormanı Bentleri, Terkos Gölü, Kırkçeşme Su Kemerleri"
      ]
    },
    en: {
      appName: "Constantinople Vilayet 1895 (Vital Cuinet - Digital map: Sabri Karadoğan)",
      tagline: "Vital Cuinet's 1895 Map of the Constantinople Vilayet (Asiatic Dependencies)",
      subTagline: "3 Municipal Circles, 5 Cazas (Princes' Islands, Gebze, Beykoz, Kartal, Sile) and the Bosphorus georeferenced over modern basemaps",
      searchPlaceholder: "Search place name, Ottoman or French (e.g. Scutari, Cadikeui, Beicos, Prinkipo, Chile)...",
      allKinds: "All Categories",
      allSandjaks: "All Districts / Cazas",
      sandjakFilterLabel: "Filter by District",
      kindFilterLabel: "Filter by Category",
      opacityLabel: "1895 Map Opacity",
      toggleHistorical: "Show / Hide Historical Map",
      showAllMarkers: "Show All Markers",
      hideMarkers: "Hide Markers",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      home: "Reset View",
      fitHistorical: "Fit Historical Map to Screen",
      fullscreen: "Fullscreen",
      exitFullscreen: "Exit Fullscreen",
      about: "About",
      results: (n, total) => `Showing ${n} of ${total} locations`,
      noResults: "No locations match your search.",
      loading: "Loading the map...",
      loadFailed: "Failed to load map data.",
      rowFrench: "Original French Name (as engraved)",
      rowOttoman: "Ottoman Turkish Name (Latin & Arabic script)",
      rowModern: "Modern Turkish Official Name",
      etymology: "Etymology & Meaning",
      historicalNote: "Historical & Geographical Note",
      flyToLocation: "Fly to Location on Map",
      shareLocation: "Copy Share Link",
      linkCopied: "Link copied to clipboard!",
      close: "Close",
      kinds: {
        city: "Vilayet / Sandjak Capital",
        caza: "Caza (District) Capital",
        town: "Town / Resort / Coastal Village",
        mountain: "Mountain / Peak / Hill",
        water: "Strait / Lake / Gulf / Sea",
        ruin: "Historical Fortress / Monument",
        other: "Official Cartouche & Lighthouse"
      },
      sandjaks: {
        "Istanbul_Asie": "Asiatic Municipal Circles (Scutari, Cadikeuï, Kanlidja)",
        "Adalar": "Princes' Islands Caza (Prinkipo, Halki, Antigoni, Proti)",
        "Guebze": "Gebze Caza (Daridja, Hereke, Eskihissar, Pendik, Touzla)",
        "Beicos": "Beykoz Caza (Anatoli Kavak, Poyraz, Riva, Polonez)",
        "Kartal": "Kartal Caza (Maltepe, Yakadjik, Samandira, Bostandjik, Erenkeui)",
        "Chile": "Sile Caza (Sile Lighthouse, Agva, Kabakoz, Omerli)",
        "Europe": "European Shore, Bosphorus & Catalca",
        "Special": "Official Cartouche & Metric Scale"
      },
      layers: {
        positron: "CartoDB Positron (Light Minimalist)",
        osm: "OpenStreetMap (Standard Streets)",
        dark: "CartoDB Dark Matter (Dark Theme)",
        satellite: "Esri Satellite (Modern Imagery)",
        topo: "OpenTopoMap (Topographic)",
        historicalOverlay: "1895 Cuinet Constantinople Map"
      },
      aboutTitle: "Vital Cuinet and the 1895 Constantinople Vilayet (Asiatic Dependencies) Map",
      aboutBody: [
        "This interactive georeferenced map portal is based on the 1895 map 'Vilayet de Constantinople (Dépendances en Turquie d'Asie)' published in Tome IV (p. 615) of 'La Turquie d'Asie' by prominent French geographer Vital Cuinet (1833–1896), published in Paris by Ernest Leroux.",
        "The map meticulously documents the Asiatic dependencies of the Ottoman imperial capital under Sultan Abdulhamid II: the 3 Municipal Circles (Kanlidja VIII, Scutari IX, Cadikeuï X) and the 5 Asiatic Cazas (Princes' Islands, Gebze, Beykoz, Kartal, Sile). It also spans the entire Bosphorus, the Golden Horn, the Marmara and Black Sea coastlines, and early railways.",
        "Georeferenced to WGS84 coordinates on Leaflet.js, Cuinet's lithograph is seamlessly aligned with modern satellite and vector maps.",
        "The opacity slider enables cross-fading from 0% to 100%, allowing users to directly inspect historical shorelines, imperial palaces, Ottoman water dams, and coastal forts against modern high-resolution satellite imagery."
      ],
      statsTitle: "1895 Constantinople Vilayet (Asiatic Dependencies) Divisions",
      statsItems: [
        "Author: Vital Cuinet (La Turquie d'Asie, Tome IV, p. 615, Paris: Ernest Leroux, 1895)",
        "Digital Cartography & Georeferencing: Sabri Karadoğan",
        "Asiatic Municipal Circles: VIII. Kanlidja, IX. Scutari (Uskudar), X. Cadikeui (Kadikoy)",
        "Asiatic Cazas (5 Districts): Princes' Islands, Gebze, Beykoz, Kartal, Sile",
        "Railways: Anatolian Railway starting at Haydarpasha Terminal",
        "Hydraulics: Belgrade Forest Aqueducts, Lake Derkos (Terkos), Kirkcesme Water Supply"
      ]
    },
    fr: {
      appName: "Vilayet de Constantinople 1895 (Vital Cuinet - Carte numérique : Sabri Karadoğan)",
      tagline: "Carte du Vilayet de Constantinople (Dépendances en Turquie d'Asie) par Vital Cuinet (1895)",
      subTagline: "3 Cercles Municipaux, 5 Cazas (Iles des Princes, Guèbzè, Béïcos, Kartal, Chilè) et le Bosphore géoréférencés sur fond moderne",
      searchPlaceholder: "Rechercher un toponyme, en ottoman ou français (ex. Scutari, Cadikeuï, Béïcos, Prinkipo, Chilè)...",
      allKinds: "Toutes Catégories",
      allSandjaks: "Tous les Districts / Cazas",
      sandjakFilterLabel: "Filtrer par District",
      kindFilterLabel: "Filtrer par Catégorie",
      opacityLabel: "Opacité de la Carte 1895",
      toggleHistorical: "Afficher / Masquer la Carte Historique",
      showAllMarkers: "Afficher Tous les Repères",
      hideMarkers: "Masquer les Repères",
      zoomIn: "Zoomer",
      zoomOut: "Dézoomer",
      home: "Vue Initiale",
      fitHistorical: "Ajuster la Carte Historique",
      fullscreen: "Plein Écran",
      exitFullscreen: "Quitter Plein Écran",
      about: "À Propos",
      results: (n, total) => `Affichage de ${n} sur ${total} lieux`,
      noResults: "Aucun lieu ne correspond à votre recherche.",
      loading: "Chargement de la carte...",
      loadFailed: "Échec du chargement des données.",
      rowFrench: "Nom Français Original (gravé)",
      rowOttoman: "Nom Turc Ottoman (lettres latines et arabes)",
      rowModern: "Nom Turc Officiel Contemporain",
      etymology: "Étymologie et Signification",
      historicalNote: "Note Historique et Géographique",
      flyToLocation: "Voler vers le Lieu",
      shareLocation: "Copier le Lien de Partage",
      linkCopied: "Lien copié dans le presse-papiers !",
      close: "Fermer",
      kinds: {
        city: "Chef-lieu de Vilayet / Cercle Municipal",
        caza: "Chef-lieu de Caza (District)",
        town: "Bourg / Station Balnéaire / Village Côtier",
        mountain: "Montagne / Sommet / Colline",
        water: "Détroit / Lac / Golfe / Mer",
        ruin: "Forteresse Historique / Monument",
        other: "Cartouche Officiel & Phare"
      },
      sandjaks: {
        "Istanbul_Asie": "Cercles Municipaux d'Asie (Scutari, Cadikeuï, Kanlidja)",
        "Adalar": "Caza des Iles des Princes (Prinkipo, Halki, Antigoni, Proti)",
        "Guebze": "Caza de Guèbzè (Daridja, Héréké, Eski-Hissar, Pendik, Touzla)",
        "Beicos": "Caza de Béïcos (Kavak d'Asie, Poyraz, Riva, Polonez)",
        "Kartal": "Caza de Kartal (Maltépé, Yakadjik, Samandira, Bostandjik, Erenkeuï)",
        "Chile": "Caza de Chilè (Phare de Chilè, Agva, Kabakoz, Omerli)",
        "Europe": "Rive Européenne, Bosphore & Tchataltcha",
        "Special": "Cartouche Officiel & Échelle Métrique"
      },
      layers: {
        positron: "CartoDB Positron (Clair Minimaliste)",
        osm: "OpenStreetMap (Standard)",
        dark: "CartoDB Dark Matter (Thème Sombre)",
        satellite: "Esri Satellite (Imagerie Moderne)",
        topo: "OpenTopoMap (Topographique)",
        historicalOverlay: "Carte de Constantinople 1895"
      },
      aboutTitle: "Vital Cuinet et la Carte du Vilayet de Constantinople (1895)",
      aboutBody: [
        "Ce portail cartographique géoréférencé est basé sur la carte 'Vilayet de Constantinople (Dépendances en Turquie d'Asie)' publiée dans le Tome IV (p. 615) de l'ouvrage monumental 'La Turquie d'Asie' par l'illustre géographe français Vital Cuinet (1833–1896), publié à Paris par Ernest Leroux en 1895.",
        "La carte détaille la rive asiatique de la capitale ottomane sous le règne d'Abdülhamid II : les 3 cercles municipaux asiatiques (Kanlidja VIII, Scutari IX, Cadikeuï X) et les 5 cazas dépendants (Iles des Princes, Guèbzè, Béïcos, Kartal, Chilè). Elle englobe également tout le détroit du Bosphore, la Corne d'Or, les forêts de Belgrade et le chemin de fer d'Anatolie.",
        "Géoréférencée avec précision dans le système WGS84, la lithographie historique s'imbrique harmonieusement sur les fonds cartographiques modernes via Leaflet.js.",
        "Le curseur d'opacité permet de superposer de 0% à 100% la cartographie ottomane sur les images satellites contemporaines haute définition."
      ],
      statsTitle: "Divisions Administratives de Constantinople en Asie (1895)",
      statsItems: [
        "Auteur : Vital Cuinet (La Turquie d'Asie, Tome IV, p. 615, Paris : Ernest Leroux, 1895)",
        "Cartographie numérique & géoréférencement : Sabri Karadoğan",
        "Cercles municipaux asiatiques : VIII. Kanlidja, IX. Scutari (Uskudar), X. Cadikeuï",
        "Cazas asiatiques (5 districts) : Iles des Princes, Guèbzè, Béïcos, Kartal, Chilè",
        "Chemins de fer : Ligne d'Anatolie (Haydarpacha - Ismidt) et ligne de Roumélie",
        "Réseau hydraulique : Forêt de Belgrade, lac de Derkos (Terkos) et aqueducs de Sinan"
      ]
    }
  };

  const I18N = {
    translations,
    supportedLangs: ["tr", "en", "fr"],
    t(lang, key) {
      const dict = translations[lang] || translations.tr;
      return dict[key] || (translations.tr && translations.tr[key]) || key;
    },
    getKind(lang, kind) {
      const dict = translations[lang] || translations.tr;
      return (dict.kinds && dict.kinds[kind]) || kind;
    },
    getSandjak(lang, sandjak) {
      const dict = translations[lang] || translations.tr;
      return (dict.sandjaks && dict.sandjaks[sandjak]) || sandjak;
    },
    getLayer(lang, layer) {
      const dict = translations[lang] || translations.tr;
      return (dict.layers && dict.layers[layer]) || layer;
    },
    get(lang) {
      return this.dict(lang);
    },
    dict(lang) {
      return translations[lang] || translations.tr;
    }
  };

  window.I18N = I18N;
})(typeof window !== "undefined" ? window : global);
