# İstanbul Vilayeti 1895 (Vital Cuinet - Dijital harita: Sabri Karadoğan)

Bu proje, Fransız coğrafyacı ve istatistikçi **Vital Cuinet** tarafından 1895 yılında yayımlanan (*La Turquie d'Asie: géographie administrative, statistique, descriptive et raisonnée de chaque province de l'Asie-Mineure*, Tome IV, s. 615) **İstanbul (Dersaadet) Vilayeti Asya Mülhakatı** haritasının **Sabri Karadoğan** tarafından modern coğrafi koordinat sistemine (WGS84 / Web Mercator) bindirilmiş, açık kaynaklı **Leaflet.js** harita motoruyla çalışan interaktif web uygulamasıdır.

---

## 🌟 Temel Özellikler

### 1. Modern Dünya Haritası Üzerine Bindirme (Leaflet.js)
Tarihi 1895 Cuinet haritası (3840 × 2617 piksel yüksek çözünürlük), matematiksel ve kartografik olarak kalibre edilmiş coğrafi sınırlar (`[40.6076°K, 28.3171°D]` ile `[41.6586°K, 29.8655°D]`) ile modern dünya koordinatlarına oturtulmuştur.

### 2. Katman Değiştirici (`L.control.layers`)
Kullanıcı sağ üstteki katman menüsünden tek tıkla 5 farklı modern harita altlığı arasında geçiş yapabilir:
- **CartoDB Positron:** Açık renkli, minimalist altlık (tarihi harita çizgilerini en berrak gösteren stil). CARTO API anahtarı entegrelidir.
- **OpenStreetMap:** Klasik modern sokak ve yerleşim haritası.
- **CartoDB Dark Matter:** Koyu tema kontrastı.
- **Esri Satellite (World Imagery):** Yüksek çözünürlüklü modern uydu fotoğrafları ile 1895 kıyı çizgilerinin, ormanların ve yerleşimlerin birebir kıyaslanması.
- **OpenTopoMap:** Eşyükselti eğrili fiziki ve topografik kabartı haritası (Aydos Dağı 530m, Kayışdağı 406m, Alemdağ, Yuşa Tepesi için ideal).

### 3. Canlı Şeffaflık (Opacity) ve Karşılaştırma Araçları
Harita üzerinde sol üstte yer alan kayan saydamlık paneli:
- **Canlı Kaydırıcı:** %0 (sadece modern altlık/uydu) ile %100 (yalnızca 1895 tarihi harita) arasında pürüzsüz geçiş.
- **Göz Düğmesi (👁️):** Tek tıkla tarihi harita katmanını gizleyip açma.
- **Hızlı Önayarlar:** `%0 (Modern)`, `%50`, `%85 (Varsayılan)`, `%100 (Tarihi)` butonları.
- **Haritaya Odaklan:** Tek tıkla tüm vilayet sınırlarını ekrana sığdırma.

### 4. 3 Katmanlı Tarihi Toponimi (59 Konum)
Her yerleşim ve coğrafi unsur için 3 dilli kimlik kartı:
1. **Orijinal Fransızca Yazılışı:** Cuinet'nin 1895 haritası üzerinde kazınan şekli (örn. *SCUTARI*, *CADIKEUÏ*, *KANLIDJA*, *PRINKIPO*, *GUÈBZÈ*, *BÉÏCOS*, *KARTAL*, *CHILÈ*, *HÉREKÉ*, *SAN-STEFANO*).
2. **Osmanlı Türkçesi:** Arap harfli orijinal imla + Latin harfli transkripsiyonu (örn. *اسكودار / Üsküdar*, *قاضی كوی / Kadıköy*, *بيوك آطه / Büyükada*, *كبزه / Gebze*, *شيله / Şile*).
3. **Modern Türkçe Karşılığı:** Günümüzdeki adı ve idari durumu.
- **Kapsam:** 3 Belediye Dairesi (Üsküdar IX, Kadıköy X, Kanlıca VIII), 5 Asya Kazası (Prens Adaları, Gebze, Beykoz, Kartal, Şile), Boğaziçi ve Avrupa yakası kıyıları, dağlar, su bentleri ve resmi vilayet lejantı/ölçeği.

### 5. Akıllı Arama & Filtreleme
- Türkçe harf duyarlılığını ortadan kaldıran harf katlama motoru (`ç/c`, `ğ/g`, `ı/i`, `ö/o`, `ş/s`, `ü/u`).
- Doğrudan Arap harfleriyle arama yapabilme desteği.
- Kaza/Bölge bazında açılır menü filtresi.
- Tür bazında etiket hapları (Vilayet/Daire, Kaza, Kasaba/Sahil Köyü, Dağ/Tepe, Boğaz/Su, Tarihi Eser/Kale, Özel).

---

## 🚀 Yerel Olarak Çalıştırma

Klasör içindeki **`start-server.bat`** dosyasına çift tıklayın.
- Arka planda hafif yerel web sunucusu başlar (`http://localhost:8083`).
- Tarayıcınızda otomatik açılır.

---

## 📜 Tarihi ve Kaynak Bilgisi
- **Harita Başlığı:** *Vilayet de Constantinople (Dépendances en Turquie d'Asie) - 1895 (Dijital harita: Sabri Karadoğan)*
- **Orijinal Müellif:** Vital Cuinet (*La Turquie d'Asie*, Tome IV, s. 615, Ernest Leroux, Paris, 1895).
- **Dijital Harita & Georeferans:** Sabri Karadoğan
- **Matbaa:** Imp. Monrocq, Paris.
