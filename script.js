// seznam vozidel: značka;model;rok;palivo;převodovka;výkon (kW);cena za den;kategorie
const auta = `Škoda;Fabia;2022;Benzín;Manuální;81;890;Ekonomická
Škoda;Scala;2023;Benzín;Manuální;85;990;Kompakt
Škoda;Octavia;2022;Nafta;Automatická;110;1190;Kompakt
Škoda;Octavia RS;2023;Benzín;Automatická;180;1790;Sport
Škoda;Superb;2021;Nafta;Automatická;140;1490;Prémiová
Škoda;Kamiq;2022;Benzín;Manuální;85;1090;SUV
Škoda;Karoq;2023;Nafta;Automatická;110;1390;SUV
Škoda;Kodiaq;2022;Nafta;Automatická;147;1690;SUV
Škoda;Enyaq iV;2023;Elektro;Automatická;150;1890;Elektro
Volkswagen;Polo;2021;Benzín;Manuální;70;850;Ekonomická
Volkswagen;Golf 8;2022;Benzín;Automatická;110;1290;Kompakt
Volkswagen;Golf GTI;2023;Benzín;Automatická;180;2090;Sport
Volkswagen;Golf R;2023;Benzín;Automatická;235;2590;Sport
Volkswagen;Passat;2021;Nafta;Automatická;110;1390;Prémiová
Volkswagen;Tiguan;2022;Nafta;Automatická;110;1590;SUV
Volkswagen;T-Roc;2023;Benzín;Automatická;110;1390;SUV
Volkswagen;ID.3;2023;Elektro;Automatická;150;1790;Elektro
Volkswagen;Transporter;2021;Nafta;Manuální;110;1690;Užitkový
Audi;A3;2022;Benzín;Automatická;110;1490;Kompakt
Audi;A4 Avant;2021;Nafta;Automatická;140;1790;Prémiová
Audi;A6;2022;Nafta;Automatická;150;2290;Prémiová
Audi;Q3;2023;Benzín;Automatická;110;1790;SUV
Audi;Q5;2022;Nafta;Automatická;150;2190;SUV
Audi;RS3;2023;Benzín;Automatická;294;3290;Sport
Audi;e-tron GT;2023;Elektro;Automatická;350;4490;Elektro
BMW;Řada 1;2022;Benzín;Automatická;103;1590;Kompakt
BMW;320d;2021;Nafta;Automatická;140;1990;Prémiová
BMW;520d F10;2015;Nafta;Automatická;135;1490;Prémiová
BMW;M240i;2022;Benzín;Automatická;275;3190;Sport
BMW;M3 Competition;2022;Benzín;Automatická;375;4990;Sport
BMW;X3;2022;Nafta;Automatická;140;2290;SUV
BMW;i4;2023;Elektro;Automatická;250;3290;Elektro
Mercedes-Benz;A 200;2022;Benzín;Automatická;120;1790;Kompakt
Mercedes-Benz;C 220d;2022;Nafta;Automatická;147;2290;Prémiová
Mercedes-Benz;GLC;2022;Nafta;Automatická;145;2590;SUV
Mercedes-Benz;AMG A 45;2023;Benzín;Automatická;310;3990;Sport
Mercedes-Benz;EQA;2023;Elektro;Automatická;140;2090;Elektro
Toyota;Yaris;2022;Hybrid;Automatická;85;990;Ekonomická
Toyota;Corolla;2023;Hybrid;Automatická;103;1190;Kompakt
Toyota;RAV4;2022;Hybrid;Automatická;160;1690;SUV
Toyota;GR Supra;2022;Benzín;Automatická;250;3490;Sport
Toyota;GR Yaris;2023;Benzín;Manuální;192;2490;Sport
Hyundai;i20;2022;Benzín;Manuální;74;850;Ekonomická
Hyundai;i30 N;2022;Benzín;Manuální;206;2290;Sport
Hyundai;Tucson;2023;Hybrid;Automatická;169;1590;SUV
Kia;Ceed;2022;Benzín;Manuální;103;1090;Kompakt
Kia;Sportage;2023;Nafta;Automatická;100;1490;SUV
Ford;Fiesta ST;2021;Benzín;Manuální;147;1590;Sport
Ford;Mustang GT;2021;Benzín;Automatická;330;3790;Sport
Porsche;911 Carrera;2022;Benzín;Automatická;283;7990;Sport
Porsche;Macan;2022;Benzín;Automatická;195;4290;SUV
Tesla;Model 3;2023;Elektro;Automatická;208;2490;Elektro
Tesla;Model Y;2023;Elektro;Automatická;220;2790;Elektro
Bugatti;Chiron;2022;Benzín;Automatická;1103;24900;Sport`.split('\n').map(function (radek) {
  const p = radek.split(';');
  return { znacka: p[0], model: p[1], rok: +p[2], palivo: p[3], prevodovka: p[4], vykon: +p[5], cena: +p[6], kategorie: p[7] };
});

// české texty pro DataTables
const cesky = {
  search: 'Hledat:', lengthMenu: 'Zobrazit _MENU_ záznamů',
  info: 'Zobrazeno _START_ až _END_ z _TOTAL_ záznamů', infoEmpty: 'Žádné záznamy',
  infoFiltered: '(filtrováno z _MAX_ záznamů)', zeroRecords: 'Nic nenalezeno', emptyTable: 'Tabulka je prázdná',
  paginate: { first: 'První', previous: 'Předchozí', next: 'Další', last: 'Poslední' }
};

// jednoduché obrázky aut podle kategorie (SVG)
const siluety = {
  hatch: { telo: 'M30 82 L30 62 Q30 56 38 55 L76 52 L96 34 Q100 30 108 30 L176 30 Q186 30 192 36 L214 54 L260 58 Q272 60 272 70 L272 82 Z', okna: ['M97 37 L103 34 L137 34 L137 52 L82 52 Z', 'M143 34 L176 34 Q182 34 187 38 L205 52 L143 52 Z'], dvere: [[140, 34, 80]], klika: [150, 60], svetla: [60, 62] },
  suv: { telo: 'M28 84 L28 52 Q28 46 36 45 L70 44 L80 28 Q82 26 88 26 L190 26 Q198 26 202 31 L222 46 L262 50 Q274 52 274 62 L274 84 Z', okna: ['M85 30 L134 30 L134 45 L75 45 Z', 'M140 30 L188 30 Q192 30 195 33 L212 45 L140 45 Z'], dvere: [[137, 45, 80]], klika: [148, 56], svetla: [52, 52] },
  sport: { telo: 'M24 82 L24 68 Q26 62 36 61 L80 58 L112 40 Q118 36 126 36 L168 36 Q178 36 186 42 L214 58 L264 64 Q278 66 278 74 L278 82 Z', okna: ['M110 56 L124 41 L166 41 Q174 41 180 45 L200 56 Z'], dvere: [[108, 56, 80]], klika: [165, 64], svetla: [66, 68] },
  sedan: { telo: 'M26 82 L26 64 Q26 58 36 57 L74 55 L96 38 Q101 34 110 34 L170 34 Q180 34 187 40 L206 55 L262 59 Q274 61 274 70 L274 82 Z', okna: ['M99 40 L104 37 L134 37 L134 54 L84 54 Z', 'M140 37 L172 37 Q178 37 183 41 L198 54 L140 54 Z'], dvere: [[137, 54, 80]], klika: [148, 62], svetla: [60, 62] },
  van: { telo: 'M26 84 L26 24 Q26 20 32 20 L196 20 Q206 20 212 28 L238 50 L264 54 Q276 56 276 66 L276 84 Z', okna: ['M34 26 L64 26 L64 42 L34 42 Z', 'M203 26 L208 26 L230 48 L203 48 Z'], dvere: [[100, 20, 80], [160, 20, 80]], klika: [130, 52], svetla: [56, 56] }
};
const druhSiluety = { 'Ekonomická': 'hatch', 'Kompakt': 'hatch', 'Elektro': 'hatch', 'SUV': 'suv', 'Sport': 'sport', 'Prémiová': 'sedan', 'Užitkový': 'van' };

function obrazekAuta(a) {
  const s = siluety[druhSiluety[a.kategorie]] || siluety.hatch;
  const caru = '#8a0000';
  function kolo(x) {
    return '<circle cx="' + x + '" cy="81" r="21" fill="#212529"/><circle cx="' + x + '" cy="81" r="16" fill="#111"/><circle cx="' + x + '" cy="81" r="8" fill="#c8c8c8"/><circle cx="' + x + '" cy="81" r="3" fill="#666"/>';
  }
  let svg = '<svg viewBox="0 0 300 110" class="w-100 mb-3" role="img" aria-label="Ilustrace vozu ' + nazevAuta(a) + '">';
  svg += '<path d="' + s.telo + '" fill="#e10600" stroke="' + caru + '" stroke-width="1.5" stroke-linejoin="round"/>';
  s.okna.forEach(function (o) { svg += '<path d="' + o + '" fill="#bcd7ee" stroke="' + caru + '" stroke-width="1.5"/>'; });
  s.dvere.forEach(function (d) { svg += '<line x1="' + d[0] + '" y1="' + d[1] + '" x2="' + d[0] + '" y2="' + d[2] + '" stroke="' + caru + '" stroke-width="1.5"/>'; });
  svg += '<line x1="' + s.klika[0] + '" y1="' + s.klika[1] + '" x2="' + (s.klika[0] + 12) + '" y2="' + s.klika[1] + '" stroke="' + caru + '" stroke-width="3" stroke-linecap="round"/>';
  svg += '<rect x="264" y="' + s.svetla[0] + '" width="10" height="6" rx="2" fill="#ffe9a0"/><rect x="25" y="' + s.svetla[1] + '" width="5" height="7" rx="2" fill="#5a0000"/>';
  svg += kolo(80) + kolo(222) + '<rect x="14" y="99" width="272" height="2" fill="#444"/></svg>';
  return svg;
}

function nazevAuta(a) { return a.znacka + ' ' + a.model; }

// tabulka vozového parku, filtr kategorií a okno s detailem
function tabulkaVozu() {
  if (!$('#tabulka').length) return;
  const tabulka = $('#tabulka').DataTable({
    data: auta.map(function (a) { return [a.znacka, a.model, a.rok, a.palivo, a.prevodovka, a.vykon, a.cena, a.kategorie, '']; }),
    language: cesky,
    pageLength: 10,
    columnDefs: [
      { targets: 5, render: function (d, t) { return t === 'display' ? d + ' kW' : d; } },
      { targets: 6, render: function (d, t) { return t === 'display' ? d.toLocaleString('cs-CZ') + ' Kč' : d; } },
      { targets: 8, orderable: false, searchable: false, render: function (d, t, r, meta) {
        return '<button class="btn btn-sm btn-outline-danger btn-detail" data-i="' + meta.row + '"><i class="bi bi-search"></i> Detail</button>';
      } }
    ]
  });
  const okno = new bootstrap.Modal('#modalDetail');
  const kategorie = ['Vše'].concat(auta.map(function (a) { return a.kategorie; }).filter(function (k, i, p) { return p.indexOf(k) === i; }));
  kategorie.forEach(function (k, i) {
    $('<button type="button" class="btn btn-sm btn-outline-danger"></button>').text(k).toggleClass('active', i === 0).on('click', function () {
      $('#filtr .btn').removeClass('active');
      $(this).addClass('active');
      tabulka.column(7).search(k === 'Vše' ? '' : '^' + k + '$', true, false).draw();
    }).appendTo('#filtr');
  });
  $('#tabulka').on('click', '.btn-detail', function () {
    const i = $(this).data('i');
    const a = auta[i];
    $('#detailNazev').text(nazevAuta(a));
    $('#detailTelo').html(
      obrazekAuta(a) +
      '<dl class="row mb-3">' +
      '<dt class="col-5">Rok výroby</dt><dd class="col-7">' + a.rok + '</dd>' +
      '<dt class="col-5">Palivo</dt><dd class="col-7">' + a.palivo + '</dd>' +
      '<dt class="col-5">Převodovka</dt><dd class="col-7">' + a.prevodovka + '</dd>' +
      '<dt class="col-5">Výkon</dt><dd class="col-7">' + a.vykon + ' kW</dd>' +
      '<dt class="col-5">Kategorie</dt><dd class="col-7">' + a.kategorie + '</dd></dl>' +
      '<div class="cena-velka">' + a.cena.toLocaleString('cs-CZ') + ' Kč <small class="fs-6 text-secondary">/ den</small></div>');
    $('#detailRezervovat').attr('href', 'rezervace.html?auto=' + i);
    okno.show();
  });
}

// formulář rezervace: výběr vozu, výpočet ceny a validace
function formularRezervace() {
  const f = document.getElementById('formular');
  if (!f) return;
  const vyber = $('#vozidlo');
  auta.forEach(function (a, i) {
    vyber.append($('<option>').val(i).text(nazevAuta(a) + ' – ' + a.cena + ' Kč/den'));
  });
  const predvolene = new URLSearchParams(location.search).get('auto');
  if (predvolene !== null) vyber.val(predvolene);
  const dnes = new Date().toISOString().split('T')[0];
  f.datumOd.min = dnes;
  f.datumDo.min = dnes;
  $('#datumOd, #datumDo').on('input', function () { f.datumDo.setCustomValidity(''); });

  function spocitatCenu() {
    const souhrn = $('#souhrn');
    const od = f.datumOd.value, doData = f.datumDo.value;
    if (f.vozidlo.value === '' || !od || !doData || doData < od) {
      souhrn.html('<span class="text-secondary"><i class="bi bi-calculator"></i> Vyberte vozidlo a termín – zobrazí se předběžná cena.</span>');
      return;
    }
    const auto = auta[f.vozidlo.value];
    const dny = Math.max(1, Math.round((new Date(doData) - new Date(od)) / 86400000));
    const sleva = dny >= 30 ? 0.25 : dny >= 7 ? 0.2 : dny >= 3 ? 0.07 : 0;
    let vikend = 0;
    for (let i = 0; i < dny; i++) {
      const den = new Date(new Date(od).getTime() + i * 86400000).getUTCDay();
      if (den === 5 || den === 6 || den === 0) vikend++;
    }
    const zaAuto = Math.round(auto.cena * (dny + vikend * 0.1) * (1 - sleva));
    const pojisteni = f.pojisteni.value === 'plne' ? 250 : f.pojisteni.value === 'premium' ? 450 : 0;
    const doplnky = (f.gps.checked ? 100 : 0) + (f.sedacka.checked ? 80 : 0) + (f.ridic.checked ? 150 : 0);
    const celkem = zaAuto + (pojisteni + doplnky) * dny;
    const kc = function (c) { return c.toLocaleString('cs-CZ') + ' Kč'; };
    souhrn.html('<div class="row align-items-center"><div class="col-md-8 small text-secondary">' +
      nazevAuta(auto) + ': ' + dny + ' dní × ' + kc(auto.cena) + (vikend ? ' + víkendový příplatek 10 % (' + vikend + ' dní)' : '') + (sleva ? ', sleva ' + Math.round(sleva * 100) + ' %' : '') + ' = ' + kc(zaAuto) +
      '<br>Pojištění a doplňky: ' + kc((pojisteni + doplnky) * dny) + '</div>' +
      '<div class="col-md-4 text-md-end"><span class="text-secondary small">Předběžná cena</span><div class="cena-velka">' + kc(celkem) + '</div></div></div>');
  }
  $(f).on('input change', spocitatCenu);
  spocitatCenu();
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    f.datumDo.setCustomValidity(f.datumOd.value && f.datumDo.value && f.datumDo.value < f.datumOd.value ? 'Datum do musí být po datu od.' : '');
    f.classList.add('was-validated');
    if (!f.checkValidity()) return;
    const jmeno = f.jmeno.value;
    f.reset();
    f.classList.remove('was-validated');
    spocitatCenu();
    $('#uspech').removeClass('d-none').find('span').text(jmeno + ', vaše rezervace byla odeslána. Brzy se vám ozveme.');
    document.getElementById('uspech').scrollIntoView({ behavior: 'smooth' });
  });
}

// 3D scéna: načtení modelu, otáčení auta a otevírání dveří podle scrollu
function scena3D() {
  const platno = document.getElementById('platno');
  if (!platno || typeof THREE === 'undefined') return;
  const sekce = document.getElementById('scena');
  const stupnice = $('#stupnice');
  const bezPohybu = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderer = new THREE.WebGLRenderer({ canvas: platno, antialias: window.devicePixelRatio < 2, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  const scena = new THREE.Scene();
  const kamera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
  scena.add(new THREE.AmbientLight(0xffffff, 0.6));
  const slunce = new THREE.DirectionalLight(0xffffff, 0.9);
  slunce.position.set(4, 6, 3);
  scena.add(slunce);
  const cervenaSvetlo = new THREE.PointLight(0xe10600, 1.3, 14);
  cervenaSvetlo.position.set(-3, 2, -3);
  scena.add(cervenaSvetlo);

  // záložní auto z jednoduchých tvarů (zobrazí se, když se model nenačte)
  const karoserie = new THREE.MeshStandardMaterial({ color: 0xe10600, flatShading: true, roughness: 0.35, metalness: 0.35 });
  const tmava = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, flatShading: true, roughness: 0.7 });
  const cerna = new THREE.MeshStandardMaterial({ color: 0x050505, flatShading: true, roughness: 0.9 });
  const sklo = new THREE.MeshStandardMaterial({ color: 0x1b2a40, flatShading: true, roughness: 0.15, metalness: 0.7 });
  const chrom = new THREE.MeshStandardMaterial({ color: 0xcfcfcf, flatShading: true, roughness: 0.3, metalness: 0.8 });
  const bila = new THREE.MeshStandardMaterial({ color: 0xf2f2f2, flatShading: true, roughness: 0.5 });
  const predni = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const zadni = new THREE.MeshBasicMaterial({ color: 0xff2a1f });
  const cary = new THREE.LineBasicMaterial({ color: 0x5a0300 });
  scena.add(new THREE.HemisphereLight(0xffffff, 0x330000, 0.5));
  const podsvetleni = new THREE.PointLight(0xe10600, 1.6, 5);
  podsvetleni.position.set(0, 0.15, 0);
  scena.add(podsvetleni);
  const stin = new THREE.Mesh(new THREE.CircleGeometry(2.9, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.55 }));
  stin.rotation.x = -Math.PI / 2;
  stin.position.y = 0.005;
  scena.add(stin);

  function kvadr(s, v, h, mat, x, y, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(s, v, h), mat);
    m.position.set(x, y, z);
    return m;
  }
  function profil(body, hloubka, mat) {
    const tvar = new THREE.Shape();
    body.forEach(function (b, i) { if (i) tvar.lineTo(b[0], b[1]); else tvar.moveTo(b[0], b[1]); });
    const g = new THREE.ExtrudeGeometry(tvar, { depth: hloubka, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.05, bevelSegments: 1 });
    g.translate(0, 0, -hloubka / 2);
    const m = new THREE.Mesh(g, mat);
    m.add(new THREE.LineSegments(new THREE.EdgesGeometry(g, 20), cary));
    return m;
  }

  let auto = new THREE.Group();
  auto.add(profil([[-2.1, 0.32], [2.0, 0.32], [2.12, 0.5], [2.1, 0.66], [1.2, 0.8], [0.95, 0.83], [-1.95, 0.83], [-2.12, 0.7], [-2.14, 0.5]], 1.6, karoserie));
  auto.add(profil([[0.95, 0.83], [0.5, 1.33], [-0.5, 1.36], [-1.05, 0.83]], 1.4, sklo));
  auto.add(kvadr(1, 0.04, 1.2, karoserie, 0, 1.43, 0));
  auto.add(kvadr(1, 0.01, 0.1, bila, 0, 1.455, 0.1));
  auto.add(kvadr(1, 0.01, 0.1, bila, 0, 1.455, -0.1));
  [1, -1].forEach(function (s) {
    const a = kvadr(0.67, 0.07, 0.06, karoserie, 0.73, 1.12, s * 0.76); a.rotation.z = -0.84; auto.add(a);
    const c = kvadr(0.76, 0.07, 0.06, karoserie, -0.78, 1.13, s * 0.76); c.rotation.z = 0.77; auto.add(c);
    auto.add(kvadr(2.2, 0.08, 0.05, tmava, 0, 0.33, s * 0.93));
    auto.add(kvadr(0.06, 0.09, 0.42, predni, 2.13, 0.66, s * 0.55));
    auto.add(kvadr(0.04, 0.02, 0.3, predni, 2.17, 0.57, s * 0.55));
    auto.add(kvadr(0.06, 0.12, 0.28, cerna, 2.15, 0.42, s * 0.62));
    auto.add(kvadr(0.04, 0.1, 0.5, zadni, -2.19, 0.7, s * 0.5));
    auto.add(kvadr(0.05, 0.1, 0.08, tmava, -2.19, 0.7, s * 0.2));
    const vetrak = kvadr(0.45, 0.02, 0.18, cerna, 1.45, 0.822, s * 0.35); vetrak.rotation.z = -0.155; auto.add(vetrak);
    const pruh = kvadr(1.2, 0.012, 0.1, bila, 1.5, 0.812, s * 0.1); pruh.rotation.z = -0.155; auto.add(pruh);
    const vyfuk = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.2, 8), chrom);
    vyfuk.rotation.z = Math.PI / 2; vyfuk.position.set(-2.2, 0.36, s * 0.45); auto.add(vyfuk);
  });
  auto.add(kvadr(0.06, 0.14, 0.55, cerna, 2.17, 0.5, 0));
  auto.add(kvadr(0.07, 0.025, 0.58, chrom, 2.17, 0.6, 0));
  auto.add(kvadr(0.3, 0.05, 1.8, tmava, 2.05, 0.29, 0));
  auto.add(kvadr(0.04, 0.03, 0.5, zadni, -2.19, 0.72, 0));
  auto.add(kvadr(0.02, 0.14, 0.34, bila, -2.2, 0.55, 0));
  auto.add(kvadr(0.15, 0.13, 1.2, tmava, -2.13, 0.38, 0));
  [-0.3, 0, 0.3].forEach(function (z) { auto.add(kvadr(0.2, 0.12, 0.02, cerna, -2.18, 0.38, z)); });

  [1.32, -1.32].forEach(function (x) {
    [1, -1].forEach(function (s) {
      const k = new THREE.Group();
      k.position.set(x, 0.4, s * 0.78);
      const pneu = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.3, 14), cerna);
      pneu.rotation.x = Math.PI / 2; k.add(pneu);
      const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.29, 0.31, 12), tmava);
      disk.rotation.x = Math.PI / 2; k.add(disk);
      const okraj = new THREE.Mesh(new THREE.TorusGeometry(0.29, 0.03, 4, 14), chrom);
      okraj.position.z = s * 0.15; k.add(okraj);
      for (let i = 0; i < 3; i++) {
        const paprsek = kvadr(0.56, 0.07, 0.03, chrom, 0, 0, s * 0.16);
        paprsek.rotation.z = i * Math.PI / 3; k.add(paprsek);
      }
      k.add(kvadr(0.13, 0.15, 0.04, karoserie, 0.2, -0.04, s * 0.155));
      const stred = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.34, 6), karoserie);
      stred.rotation.x = Math.PI / 2; k.add(stred);
      auto.add(k);
      const oblouk = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.02, 14), cerna);
      oblouk.rotation.x = Math.PI / 2; oblouk.position.set(x, 0.4, s * 0.905); auto.add(oblouk);
    });
  });

  const dvere = [];
  [1, -1].forEach(function (s) {
    auto.add(kvadr(1.1, 0.5, 0.02, cerna, 0.2, 0.6, s * 0.905));
    const pant = new THREE.Group();
    pant.position.set(0.75, 0.6, s * 0.9);
    pant.add(kvadr(1.1, 0.5, 0.05, karoserie, -0.55, 0, 0));
    const okno = kvadr(0.95, 0.42, 0.03, sklo, -0.5, 0.45, -s * 0.07);
    okno.rotation.x = -s * 0.35; pant.add(okno);
    pant.add(kvadr(0.2, 0.04, 0.04, chrom, -0.9, 0.1, s * 0.04));
    pant.add(kvadr(0.1, 0.08, 0.18, karoserie, -0.12, 0.4, s * 0.1));
    auto.add(pant);
    dvere.push({ pant: pant, s: s });
  });

  const kufr = new THREE.Group();
  kufr.position.set(-1.0, 0.9, 0);
  kufr.add(kvadr(1.1, 0.04, 1.5, karoserie, -0.55, 0, 0));
  kufr.add(kvadr(1.1, 0.012, 0.1, bila, -0.55, 0.026, 0.12));
  kufr.add(kvadr(1.1, 0.012, 0.1, bila, -0.55, 0.026, -0.12));
  kufr.add(kvadr(0.32, 0.04, 1.6, tmava, -0.95, 0.2, 0));
  [0.55, -0.55].forEach(function (z) { kufr.add(kvadr(0.05, 0.2, 0.06, tmava, -0.9, 0.1, z)); });
  [0.8, -0.8].forEach(function (z) { kufr.add(kvadr(0.34, 0.12, 0.03, karoserie, -0.95, 0.2, z)); });
  auto.add(kufr);
  scena.add(auto);

  const mrizka = new THREE.GridHelper(14, 14, 0xe10600, 0x333333);
  scena.add(mrizka);

  function zmenaVelikosti() {
    const w = platno.clientWidth, h = platno.clientHeight;
    renderer.setSize(w, h, false);
    kamera.aspect = w / h;
    kamera.position.set(1, 0.45, 1).normalize().multiplyScalar(w / h < 1 ? 13 : 9);
    kamera.position.y = w / h < 1 ? 4 : 3;
    kamera.lookAt(0, 0.7, 0);
    kamera.updateProjectionMatrix();
  }
  // postup scrollu uvnitř sekce (0 až 1)
  function postup() {
    const r = sekce.getBoundingClientRect();
    return Math.min(1, Math.max(0, -r.top / (r.height - window.innerHeight)));
  }
  function usek(p, a, b) { return Math.min(1, Math.max(0, (p - a) / (b - a))); }

  let animace = function (p) {
    auto.rotation.y = -0.5 + p * Math.PI * 1.2;
    dvere.forEach(function (d) { d.pant.rotation.y = d.s * 1.0 * usek(p, 0.05, 0.4); });
    kufr.rotation.z = -1.0 * usek(p, 0.05, 0.4);
  };
  let zmenaBarvy = function (b) {
    karoserie.color.copy(b);
    podsvetleni.color.copy(b);
  };

  if (typeof THREE.GLTFLoader === 'undefined') {
    $('#nacitani').remove();
  } else {
    auto.visible = false;
    new THREE.GLTFLoader().load('models/chiron.glb', function (gltf) {
      const model = gltf.scene;
      const koren = new THREE.Group();
      koren.add(model);
      koren.scale.setScalar(0.62);
      koren.position.z = 0.183;
      const novy = new THREE.Group();
      novy.add(koren);
      koren.updateMatrixWorld(true);

      function otocnyDil(pravidlo, x, y, z) {
        const pant = new THREE.Group();
        pant.position.set(x, y, z);
        koren.add(pant);
        koren.updateMatrixWorld(true);
        const casti = [];
        model.traverse(function (o) { if (pravidlo.test(o.name)) casti.push(o); });
        casti.forEach(function (o) { pant.attach(o); });
        return pant;
      }
      const levaDvere = otocnyDil(/^DoorLF_/, 1.3, 0, 1.15);
      const praveDvere = otocnyDil(/^DoorRF_/, -1.3, 0, 1.15);
      const kapota = otocnyDil(/^Trunk_/, 0, 1.0, 1.4);

      const laky = [];
      model.traverse(function (o) {
        if (o.isMesh && o.material && o.material.name === 'CSR2_CarPaint' && laky.indexOf(o.material) < 0) laky.push(o.material);
      });

      const okoli = new THREE.Scene();
      okoli.add(new THREE.Mesh(new THREE.BoxGeometry(40, 40, 40), new THREE.MeshBasicMaterial({ color: 0x0d0d0d, side: THREE.BackSide })));
      [[0, 14, 0, 16, 0.3, 16, 0xffffff], [-16, 5, 0, 0.3, 7, 16, 0xffffff], [16, 5, 0, 0.3, 7, 16, 0xff5a4a], [0, 5, -16, 16, 7, 0.3, 0xffffff], [0, 5, 16, 16, 7, 0.3, 0xdddddd]].forEach(function (s) {
        const panel = new THREE.Mesh(new THREE.BoxGeometry(s[3], s[4], s[5]), new THREE.MeshBasicMaterial({ color: s[6] }));
        panel.position.set(s[0], s[1], s[2]);
        okoli.add(panel);
      });
      const pmrem = new THREE.PMREMGenerator(renderer);
      scena.environment = pmrem.fromScene(okoli, 0.04).texture;
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;

      scena.remove(auto);
      auto = novy;
      scena.add(auto);
      animace = function (p) {
        auto.rotation.y = -0.5 + p * Math.PI * 1.2;
        levaDvere.rotation.y = -1.05 * usek(p, 0.05, 0.4);
        praveDvere.rotation.y = 1.05 * usek(p, 0.05, 0.4);
        kapota.rotation.x = -0.8 * usek(p, 0.05, 0.4);
      };
      zmenaBarvy = function (b) {
        laky.forEach(function (m) { m.color.copy(b); });
        podsvetleni.color.copy(b);
      };
      $('#nacitani').remove();
      pozadat();
    }, function (e) {
      if (e.lengthComputable) $('#nacitaniText').text('Načítám 3D model… ' + Math.round(e.loaded / e.total * 100) + ' %');
    }, function () {
      $('#nacitani').remove();
      auto.visible = true;
      pozadat();
      console.warn('Model se nepodařilo načíst, zobrazuje se jednoduché auto.');
    });
  }

  // vykreslení jen při scrollu a když je scéna vidět
  let ceka = false;
  function vykresli() {
    ceka = false;
    const r = sekce.getBoundingClientRect();
    if (r.bottom < 0 || r.top > window.innerHeight) return;
    const p = bezPohybu ? 0.7 : postup();
    animace(p);
    stupnice.css('width', p * 100 + '%');
    renderer.render(scena, kamera);
  }
  function pozadat() {
    if (!ceka) { ceka = true; requestAnimationFrame(vykresli); }
  }
  zmenaVelikosti();
  window.addEventListener('resize', function () { zmenaVelikosti(); pozadat(); });
  if (!bezPohybu) window.addEventListener('scroll', pozadat, { passive: true });
  $('.barva').on('click', function () {
    zmenaBarvy(new THREE.Color($(this).data('barva')));
    pozadat();
  });
  pozadat();
}

// spuštění po načtení stránky
$(function () {
  tabulkaVozu();
  formularRezervace();
  scena3D();
});
