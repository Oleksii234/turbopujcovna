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

// ---------- přepínání jazyka (čeština / ukrajinština) ----------
// výchozí je čeština, zvolený jazyk se pamatuje v localStorage
let jazyk = 'cs';
try { jazyk = localStorage.getItem('jazyk') === 'uk' ? 'uk' : 'cs'; } catch (e) {}

// slovník: český text -> ukrajinský překlad
const slovnik = {
 "Domů": "Головна",
 "Vozový park": "Автопарк",
 "Ceník": "Ціни",
 "Rezervace": "Бронювання",
 "O nás": "Про нас",
 "Kontakt": "Контакти",
 "Menu": "Меню",
 "breadcrumb": "Навігаційний ланцюжок",
 "Zavřít": "Закрити",
 "Půjčovna sportovních a prémiových vozů v Ostravě. Školní projekt, vymyšlená firma.": "Прокат спортивних і преміальних авто в Остраві. Навчальний проєкт, вигадана компанія.",
 "Odkazy": "Посилання",
 "© 2026 TurboPujcovna – semestrální projekt, Ostravská univerzita": "© 2026 TurboPujcovna – семестровий проєкт, Остравський університет",
 "3D model:": "3D-модель:",
 "Rychlost, která uchvátí": "Швидкість, що захоплює",
 "Sportovní vozy v Ostravě k dispozici ještě dnes.": "Спортивні авто в Остраві — уже сьогодні.",
 "Rezervovat": "Забронювати",
 "Více než 50 vozů": "Понад 50 авто",
 "Od úsporných městských aut po supersporty a elektromobily.": "Від економних міських авто до суперкарів та електромобілів.",
 "Pojištění v ceně": "Страхування включено",
 "Žádné skryté poplatky. Jasné podmínky, férová cena.": "Жодних прихованих платежів. Зрозумілі умови, чесна ціна.",
 "Podmínky": "Умови",
 "Předchozí": "Попередній",
 "Další": "Наступний",
 "Naše služby": "Наші послуги",
 "Krátkodobý pronájem": "Короткострокова оренда",
 "Od jednoho dne. Vyberete si vůz a za pár minut máte rezervaci.": "Від однієї доби. Обираєте авто — і за кілька хвилин бронювання готове.",
 "Dlouhodobý pronájem": "Довгострокова оренда",
 "Měsíční tarify se slevou až 25 % pro firmy i jednotlivce.": "Місячні тарифи зі знижкою до 25 % для компаній і приватних осіб.",
 "Sportovní vozy": "Спортивні авто",
 "Golf R, M3, RS3, 911 i Bugatti Chiron – zážitek za volantem bez starostí s koupí.": "Golf R, M3, RS3, 911 і Bugatti Chiron — драйв за кермом без клопотів із купівлею.",
 "Přistavení vozu": "Подача авто",
 "Vůz přivezeme na vaši adresu v Ostravě a okolí.": "Привеземо авто на вашу адресу в Остраві та околицях.",
 "Povinné ručení a základní havarijní pojištění je vždy v ceně.": "Обов’язкова цивільна відповідальність і базове КАСКО завжди входять у ціну.",
 "Podpora 24/7": "Підтримка 24/7",
 "Nonstop linka pro případ poruchy nebo nehody.": "Цілодобова лінія на випадок поломки чи аварії.",
 "Více o nás": "Більше про нас",
 "3D model vozu Bugatti Chiron": "3D-модель авто Bugatti Chiron",
 "Prohlédněte si vůz": "Огляньте авто",
 "Scrollujte – vůz se otáčí a otevírá dveře i kapotu.": "Прокручуйте — авто обертається, відчиняє двері й капот.",
 "Načítám 3D model…": "Завантаження 3D-моделі…",
 "Červená": "Червоний",
 "Bílá": "Білий",
 "Modrá": "Синій",
 "Žlutá": "Жовтий",
 "Černá": "Чорний",
 "Slide 1": "Слайд 1",
 "Slide 2": "Слайд 2",
 "Slide 3": "Слайд 3",
 "Vyberte si svůj vůz": "Оберіть своє авто",
 "Prohlédnout vozy": "Переглянути авто",
 "Ceník a podmínky": "Ціни та умови",
 "Podmínky pronájmu": "Умови оренди",
 "Pojištění": "Страхування",
 "Ceny jsou orientační („od“), uvedené za 24 hodin včetně DPH 21 %. Čím déle si vůz půjčíte, tím méně platíte za den, při pronájmu na 30 dní a více až o 25 % méně.": "Ціни орієнтовні («від»), вказані за 24 години з ПДВ 21 %. Чим довше орендуєте авто, тим менше платите за добу; при оренді від 30 днів — до 25 % дешевше.",
 "Kategorie": "Категорія",
 "1–2 dny": "1–2 дні",
 "3–6 dnů": "3–6 днів",
 "7 a více dnů": "7 і більше днів",
 "Ekonomická": "Економ",
 "Kompakt": "Компакт",
 "Prémiová": "Преміум",
 "Elektro": "Електро",
 "Sport": "Спорт",
 "Užitkový": "Комерційний",
 "Přesnou cenu konkrétního vozu najdete ve": "Точну ціну конкретного авто дивіться в",
 "vozovém parku": "автопарку",
 ". Víkendový tarif (pátek 12:00 – pondělí 9:00) je o 10 % dražší.": ". Вихідний тариф (п’ятниця 12:00 – понеділок 9:00) дорожчий на 10 %.",
 "Věk řidiče:": "Вік водія:",
 "minimálně 21 let, u kategorie Sport 25 let.": "щонайменше 21 рік, для категорії «Спорт» — 25 років.",
 "Řidičský průkaz:": "Посвідчення водія:",
 "platný skupiny B, držený alespoň 2 roky.": "дійсне, категорії B, стаж щонайменше 2 роки.",
 "Kauce:": "Застава:",
 "5 000 Kč u ekonomické třídy až 30 000 Kč u sportovních vozů. Vrací se do 3 pracovních dnů po vrácení vozu bez poškození.": "від 5 000 Kč для економ-класу до 30 000 Kč для спортивних авто. Повертається протягом 3 робочих днів після повернення авто без пошкоджень.",
 "Limit kilometrů:": "Ліміт кілометрів:",
 "250 km na den, každý další kilometr 3 Kč. Elektromobily mají 300 km na den.": "250 км на добу, кожен наступний кілометр — 3 Kč. Електромобілі — 300 км на добу.",
 "Palivo:": "Пальне:",
 "vůz se vrací se stejným stavem nádrže nebo baterie, jako byl předán. Chybějící palivo účtujeme s poplatkem 300 Kč.": "авто повертається з тим самим рівнем пального чи заряду, що й при видачі. Нестачу пального стягуємо зі збором 300 Kč.",
 "Zahraničí:": "За кордон:",
 "cesty do zemí EU jsou povoleny po předchozím nahlášení, příplatek 300 Kč.": "поїздки до країн ЄС дозволені після попереднього повідомлення, доплата 300 Kč.",
 "Storno:": "Скасування:",
 "zdarma do 48 hodin před převzetím, poté 30 % ceny prvního dne.": "безкоштовно за 48 годин до отримання, пізніше — 30 % вартості першої доби.",
 "Zákaz:": "Заборонено:",
 "kouření ve vozidle, závodní jízdy a přepravy zvířat bez přepravky.": "куріння в авто, гонки та перевезення тварин без переноски.",
 "Ke každému pronájmu patří povinné ručení s limitem 100 milionů Kč. Havarijní pojištění si můžete vybrat podle spoluúčasti.": "До кожної оренди входить обов’язкове страхування цивільної відповідальності з лімітом 100 мільйонів Kč. Страхування від ушкоджень (КАСКО) можна обрати за розміром франшизи.",
 "Základní": "Базове",
 "v ceně": "у вартості",
 "Povinné ručení + havarijní pojištění se spoluúčastí 20 000 Kč.": "Обов’язкове страхування + КАСКО з франшизою 20 000 Kč.",
 "Plné": "Повне",
 "+ 250 Kč / den": "+ 250 Kč / добу",
 "Spoluúčast 5 000 Kč, pojištění skel a pneumatik, asistenční služba.": "Франшиза 5 000 Kč, страхування скла й шин, асистанс.",
 "Prémiové": "Преміум",
 "+ 450 Kč / den": "+ 450 Kč / добу",
 "Bez spoluúčasti, pojištění úrazu posádky, náhradní vůz při poruše.": "Без франшизи, страхування від нещасних випадків для екіпажу, заміна авто при поломці.",
 "Pojištění se nevztahuje na škody způsobené pod vlivem alkoholu, při závodech nebo při porušení podmínek smlouvy.": "Страхування не покриває збитки, завдані в стані сп’яніння, під час гонок або при порушенні умов договору.",
 "Po–Pá 8:00–18:00, So 9:00–14:00": "Пн–Пт 8:00–18:00, Сб 9:00–14:00",
 "Napsat e-mail": "Написати листа",
 "Zavolat": "Зателефонувати",
 "Mimo otevírací dobu je k dispozici nonstop linka pro zákazníky s platnou rezervací.": "Поза робочим часом для клієнтів із чинним бронюванням працює цілодобова лінія.",
 "Zde bude mapa": "Тут буде карта",
 "TurboPujcovna vznikla v Ostravě s jednoduchým nápadem: každý by si měl alespoň jednou vyzkoušet vůz, o kterém jinak jen sní.": "TurboPujcovna виникла в Остраві з простої ідеї: кожен має хоча б раз спробувати авто, про яке інакше лише мріє.",
 "Začínali jsme se třemi auty v garáži na Stodolní. Dnes nabízíme více než 50 vozů – od úsporných městských modelů po sportovní kupé a elektromobily. Každý vůz prochází servisní prohlídkou před každým pronájmem a je kompletně vyčištěný.": "Ми починали з трьох авто в гаражі на Stodolní. Сьогодні пропонуємо понад 50 авто — від економних міських моделей до спортивних купе та електромобілів. Кожне авто перед кожною орендою проходить сервісний огляд і повністю вичищене.",
 "Dbáme na transparentní ceny bez skrytých poplatků. Pojištění je vždy v ceně a naše podpora je k dispozici nonstop.": "Ми дбаємо про прозорі ціни без прихованих платежів. Страхування завжди входить у вартість, а підтримка доступна цілодобово.",
 "Napište nám": "Напишіть нам",
 "Naše vozy": "Наші авто",
 "vozů": "авто",
 "let": "років",
 "podpora": "підтримка",
 "Časté dotazy": "Поширені запитання",
 "Jak starý musím být, abych si mohl půjčit auto?": "Скільки мені має бути років, щоб орендувати авто?",
 "Minimálně 21 let a řidičský průkaz skupiny B starší než 2 roky. U sportovních vozů je minimální věk 25 let.": "Щонайменше 21 рік і посвідчення водія категорії B, якому більше 2 років. Для спортивних авто мінімальний вік — 25 років.",
 "Musím složit kauci?": "Чи потрібно вносити заставу?",
 "Ano, kauce se pohybuje od 5 000 do 30 000 Kč podle kategorie vozu a vrací se do 3 pracovních dnů.": "Так, застава становить від 5 000 до 30 000 Kč залежно від категорії авто і повертається протягом 3 робочих днів.",
 "Mohu vyjet do zahraničí?": "Чи можна виїжджати за кордон?",
 "Cesty do zemí EU jsou možné po předchozím nahlášení za příplatek 300 Kč.": "Поїздки до країн ЄС можливі після попереднього повідомлення з доплатою 300 Kč.",
 "Co když se auto porouchá?": "Що, якщо авто зламається?",
 "Zavolejte na linku +420 555 123 456. Asistenci zajistíme nonstop a podle situace vám dodáme náhradní vůz.": "Зателефонуйте на лінію +420 555 123 456. Допомогу організуємо цілодобово і, залежно від ситуації, надамо заміну авто.",
 "Jak mohu rezervaci zrušit?": "Як скасувати бронювання?",
 "Zdarma do 48 hodin před převzetím. Poté účtujeme 30 % ceny prvního dne.": "Безкоштовно за 48 годин до отримання. Пізніше утримуємо 30 % вартості першої доби.",
 "Rezervace vozu": "Бронювання авто",
 "Jméno": "Ім’я",
 "Zadejte jméno.": "Вкажіть ім’я.",
 "Příjmení": "Прізвище",
 "Zadejte příjmení.": "Вкажіть прізвище.",
 "Zadejte platný e-mail.": "Вкажіть дійсну e-mail адресу.",
 "Telefon": "Телефон",
 "Zadejte 9místné telefonní číslo.": "Вкажіть 9-значний номер телефону.",
 "Datum od": "Дата початку",
 "Vyberte datum převzetí.": "Оберіть дату отримання.",
 "Datum do": "Дата завершення",
 "Vyberte datum vrácení (po datu od).": "Оберіть дату повернення (після дати початку).",
 "Vozidlo": "Авто",
 "Vyberte vůz…": "Оберіть авто…",
 "Vyberte vozidlo.": "Оберіть авто.",
 "Místo převzetí": "Місце отримання",
 "Vyberte místo…": "Оберіть місце…",
 "Ostrava – centrum (Stodolní 12)": "Острава – центр (Stodolní 12)",
 "Ostrava – Hlavní nádraží": "Острава – головний вокзал",
 "Ostrava – letiště Leoše Janáčka": "Острава – аеропорт Леоша Яначека",
 "Ostrava – Poruba": "Острава – Поруба",
 "Přistavení na adresu": "Подача за адресою",
 "Vyberte místo převzetí.": "Оберіть місце отримання.",
 "Základní (v ceně)": "Базове (включено)",
 "Plné (+ 250 Kč/den)": "Повне (+ 250 Kč/добу)",
 "Prémiové (+ 450 Kč/den)": "Преміум (+ 450 Kč/добу)",
 "Vyberte pojištění.": "Оберіть страхування.",
 "Doplňky": "Додатково",
 "GPS navigace (+ 100 Kč/den)": "GPS-навігація (+ 100 Kč/добу)",
 "Dětská sedačka (+ 80 Kč/den)": "Дитяче крісло (+ 80 Kč/добу)",
 "Druhý řidič (+ 150 Kč/den)": "Другий водій (+ 150 Kč/добу)",
 "Poznámka": "Примітка",
 "Souhlasím s podmínkami pronájmu a zpracováním osobních údajů.": "Погоджуюсь з умовами оренди та обробкою персональних даних.",
 "Pro odeslání je nutný souhlas.": "Для відправлення потрібна згода.",
 "Uložit": "Зберегти",
 "Značka": "Марка",
 "Model": "Модель",
 "Rok": "Рік",
 "Palivo": "Пальне",
 "Převodovka": "Коробка передач",
 "Výkon": "Потужність",
 "Cena za den": "Ціна за добу",
 "Akce": "Дія",
 "Benzín": "Бензин",
 "Nafta": "Дизель",
 "Hybrid": "Гібрид",
 "Automatická": "Автомат",
 "Manuální": "Механіка",
 "Vše": "Усі",
 "Detail": "Деталі",
 "Rok výroby": "Рік випуску",
 "kW": "кВт",
 "Nic nenalezeno.": "Нічого не знайдено.",
 "/den": "/добу",
 "/ den": "/ добу",
 "Kč/den": "Kč/добу",
 "Řazení": "Сортування",
 "Řadit: značka A–Z": "Сортувати: марка А–Я",
 "Cena: od nejlevnějších": "Ціна: від найдешевших",
 "Cena: od nejdražších": "Ціна: від найдорожчих",
 "Výkon: nejsilnější": "Потужність: найпотужніші",
 "Rok: nejnovější": "Рік: найновіші",
 "Vyberte vozidlo a termín – zobrazí se předběžná cena.": "Оберіть авто та термін — з’явиться попередня вартість.",
 "dní": "дн.",
 "víkendový příplatek 10 %": "доплата за вихідні 10 %",
 "sleva": "знижка",
 "Pojištění a doplňky:": "Страхування та додатково:",
 "Předběžná cena": "Попередня вартість",
 "Datum do musí být po datu od.": "Дата завершення має бути після дати початку.",
 ", vaše rezervace byla odeslána. Brzy se vám ozveme.": ", ваше бронювання відправлено. Ми скоро з вами зв’яжемося.",
 "Ceník půjčovny TurboPujcovna Ostrava, podmínky pronájmu a pojištění vozidel.": "Ціни прокату TurboPujcovna Острава, умови оренди та страхування авто.",
 "TurboPujcovna Ostrava: půjčovna sportovních a prémiových aut. Přes 50 vozidel, pojištění v ceně, online rezervace.": "TurboPujcovna Острава: прокат спортивних і преміальних авто. Понад 50 авто, страхування включено, онлайн-бронювання.",
 "Kontakt na TurboPujcovna Ostrava: adresa, telefon, e-mail a otevírací doba.": "Контакти TurboPujcovna Острава: адреса, телефон, e-mail і години роботи.",
 "O nás: půjčovna TurboPujcovna z Ostravy, naše hodnoty a časté dotazy zákazníků.": "Про нас: прокат TurboPujcovna з Острави, наші цінності та поширені запитання клієнтів.",
 "Online rezervace sportovních a prémiových vozidel v Ostravě. Vyberte vůz, termín a pojištění.": "Онлайн-бронювання спортивних і преміальних авто в Остраві. Оберіть авто, термін і страхування.",
 "Vozový park TurboPujcovna Ostrava: přes 50 vozidel od úsporných po supersporty. Filtr, řazení a detail každého vozu.": "Автопарк TurboPujcovna Острава: понад 50 авто — від економних до суперкарів. Фільтр, сортування та деталі кожного авто."
};

const ukrajinsky = {"search": "Пошук:", "lengthMenu": "Показати _MENU_ записів", "info": "Показано _START_–_END_ з _TOTAL_ записів", "infoEmpty": "Немає записів", "infoFiltered": "(відфільтровано з _MAX_ записів)", "zeroRecords": "Нічого не знайдено", "emptyTable": "Таблиця порожня", "paginate": {"first": "Перша", "previous": "Попередня", "next": "Наступна", "last": "Остання"}};

// přeloží jeden text (v češtině ho nechá beze změny)
function t(text) { return jazyk === 'uk' && slovnik[text] ? slovnik[text] : text; }
function cislo(c) { return c.toLocaleString(jazyk === 'uk' ? 'uk-UA' : 'cs-CZ'); }

const puvodniTexty = new WeakMap();
let puvodniTitle = null, puvodniPopis = null;

// projde stránku a vymění české texty za ukrajinské (nebo zpět)
function prelozitStranku() {
  document.documentElement.lang = jazyk;
  const chodec = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const uzly = [];
  while (chodec.nextNode()) uzly.push(chodec.currentNode);
  uzly.forEach(function (u) {
    const rodic = u.parentNode;
    if (!rodic || rodic.closest('script, style, #tabulka tbody, #karty, #detailTelo, #souhrn, #uspech, #razeni, #filtr')) return;
    if (rodic.closest('#vozidlo') && rodic.tagName === 'OPTION' && rodic.value !== '') return;
    if (!puvodniTexty.has(u)) puvodniTexty.set(u, u.nodeValue);
    const orig = puvodniTexty.get(u);
    const klic = orig.replace(/\s+/g, ' ').trim();
    if (!klic) return;
    if (jazyk === 'uk' && slovnik[klic]) {
      u.nodeValue = orig.match(/^\s*/)[0] + slovnik[klic] + orig.match(/\s*$/)[0];
    } else {
      u.nodeValue = orig;
    }
  });
  $('[aria-label]').each(function () {
    if (this.dataset.csAria === undefined) this.dataset.csAria = this.getAttribute('aria-label');
    this.setAttribute('aria-label', t(this.dataset.csAria));
  });
  if (puvodniTitle === null) puvodniTitle = document.title;
  document.title = puvodniTitle.split(' | ').map(t).join(' | ');
  const popis = document.querySelector('meta[name="description"]');
  if (popis) {
    if (puvodniPopis === null) puvodniPopis = popis.content;
    popis.content = t(puvodniPopis);
  }
}

// tlačítka CZ / UA v navigaci (na mobilu vedle hamburgeru)
function prepinacJazyka() {
  const tlacitka = '<div class="btn-group btn-group-sm jazyk-skupina" role="group" aria-label="Jazyk / Мова">' +
    '<button type="button" class="btn btn-outline-light" data-j="cs">CZ</button>' +
    '<button type="button" class="btn btn-outline-light" data-j="uk">UA</button></div>';
  $('.navbar-toggler').before('<div class="d-lg-none ms-auto me-2">' + tlacitka + '</div>');
  $('.navbar-nav').append('<li class="nav-item d-none d-lg-flex align-items-center ms-lg-3">' + tlacitka + '</li>');
  $(document).on('click', '.jazyk-skupina [data-j]', function () { nastavitJazyk($(this).data('j')); });
  oznacitJazyk();
}
function oznacitJazyk() {
  $('.jazyk-skupina [data-j]').each(function () {
    $(this).toggleClass('active', $(this).data('j') === jazyk).attr('aria-pressed', $(this).data('j') === jazyk);
  });
}
function nastavitJazyk(j) {
  jazyk = j;
  try { localStorage.setItem('jazyk', j); } catch (e) {}
  oznacitJazyk();
  tabulkaVozu();
  if (typeof prekreslitFormular === 'function') prekreslitFormular();
  prelozitStranku();
}

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
  // při změně jazyka se tabulka vytvoří znovu
  if ($.fn.dataTable.isDataTable('#tabulka')) {
    $('#tabulka').DataTable().destroy();
    $('#tabulka tbody').empty();
  }
  $('#filtr').empty();
  $('#razeni, #karty').remove();
  $('#tabulka, #karty').off('click.detail');
  const tabulka = $('#tabulka').DataTable({
    data: auta.map(function (a) { return [a.znacka, a.model, a.rok, a.palivo, a.prevodovka, a.vykon, a.cena, a.kategorie, '']; }),
    language: jazyk === 'uk' ? ukrajinsky : cesky,
    pageLength: 10,
    columnDefs: [
      { targets: [3, 4, 7], render: function (d, typ) { return typ === 'display' || typ === 'filter' ? t(d) : d; } },
      { targets: 5, render: function (d, typ) { return typ === 'display' ? d + ' ' + t('kW') : d; } },
      { targets: 6, render: function (d, typ) { return typ === 'display' ? cislo(d) + ' Kč' : d; } },
      { targets: 8, orderable: false, searchable: false, render: function (d, typ, r, meta) {
        return '<button class="btn btn-sm btn-outline-danger btn-detail" data-i="' + meta.row + '"><i class="bi bi-search"></i> ' + t('Detail') + '</button>';
      } }
    ]
  });
  const okno = bootstrap.Modal.getOrCreateInstance('#modalDetail');
  const kategorie = ['Vše'].concat(auta.map(function (a) { return a.kategorie; }).filter(function (k, i, p) { return p.indexOf(k) === i; }));
  kategorie.forEach(function (k, i) {
    $('<button type="button" class="btn btn-sm btn-outline-danger"></button>').text(t(k)).toggleClass('active', i === 0).on('click', function () {
      $('#filtr .btn').removeClass('active');
      $(this).addClass('active');
      tabulka.column(7).search(k === 'Vše' ? '' : '^' + t(k) + '$', true, false).draw();
    }).appendTo('#filtr');
  });
  // mobilní zobrazení: místo tabulky karty vozů + řazení
  $('#filtr').after('<select id="razeni" class="form-select mb-3" aria-label="' + t('Řazení') + '"><option value="0|asc">' + t('Řadit: značka A–Z') + '</option><option value="6|asc">' + t('Cena: od nejlevnějších') + '</option><option value="6|desc">' + t('Cena: od nejdražších') + '</option><option value="5|desc">' + t('Výkon: nejsilnější') + '</option><option value="2|desc">' + t('Rok: nejnovější') + '</option></select><div id="karty"></div>');
  $('#razeni').on('change', function () {
    const p = this.value.split('|');
    tabulka.order([parseInt(p[0]), p[1]]).draw();
  });
  function vykreslitKarty() {
    const html = tabulka.rows({ search: 'applied', order: 'applied' }).indexes().toArray().map(function (i) {
      const a = auta[i];
      return '<div class="karta-vozu"><div class="d-flex justify-content-between align-items-start gap-2"><h3>' + nazevAuta(a) + '</h3><div class="cena-karta">' + cislo(a.cena) + ' Kč<small class="text-secondary fs-6 fw-normal"> ' + t('/den') + '</small></div></div>' +
        '<div class="parametry"><span>' + a.rok + '</span><span>' + t(a.palivo) + '</span><span>' + t(a.prevodovka) + '</span><span>' + a.vykon + ' ' + t('kW') + '</span><span>' + t(a.kategorie) + '</span></div>' +
        '<button class="btn btn-outline-danger w-100 btn-detail" data-i="' + i + '"><i class="bi bi-search"></i> ' + t('Detail') + '</button></div>';
    }).join('');
    $('#karty').html(html || '<p class="text-secondary">' + t('Nic nenalezeno.') + '</p>');
  }
  tabulka.on('draw', vykreslitKarty);
  vykreslitKarty();
  $('#tabulka, #karty').on('click.detail', '.btn-detail', function () {
    const i = $(this).data('i');
    const a = auta[i];
    $('#detailNazev').text(nazevAuta(a));
    $('#detailTelo').html(
      obrazekAuta(a) +
      '<dl class="row mb-3">' +
      '<dt class="col-5">' + t('Rok výroby') + '</dt><dd class="col-7">' + a.rok + '</dd>' +
      '<dt class="col-5">' + t('Palivo') + '</dt><dd class="col-7">' + t(a.palivo) + '</dd>' +
      '<dt class="col-5">' + t('Převodovka') + '</dt><dd class="col-7">' + t(a.prevodovka) + '</dd>' +
      '<dt class="col-5">' + t('Výkon') + '</dt><dd class="col-7">' + a.vykon + ' ' + t('kW') + '</dd>' +
      '<dt class="col-5">' + t('Kategorie') + '</dt><dd class="col-7">' + t(a.kategorie) + '</dd></dl>' +
      '<div class="cena-velka">' + cislo(a.cena) + ' Kč <small class="fs-6 text-secondary">' + t('/ den') + '</small></div>');
    $('#detailRezervovat').attr('href', 'rezervace.html?auto=' + i);
    okno.show();
  });
}

// formulář rezervace: výběr vozu, výpočet ceny a validace
let prekreslitFormular;
function formularRezervace() {
  const f = document.getElementById('formular');
  if (!f) return;
  const vyber = $('#vozidlo');
  auta.forEach(function (a, i) {
    vyber.append($('<option>').val(i));
  });
  prekreslitFormular = function () {
    vyber.find('option').each(function () {
      if (this.value !== '') $(this).text(nazevAuta(auta[this.value]) + ' – ' + auta[this.value].cena + ' ' + t('Kč/den'));
    });
    spocitatCenu();
  };
  prekreslitFormular();
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
      souhrn.html('<span class="text-secondary"><i class="bi bi-calculator"></i> ' + t('Vyberte vozidlo a termín – zobrazí se předběžná cena.') + '</span>');
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
    const kc = function (c) { return cislo(c) + ' Kč'; };
    souhrn.html('<div class="row align-items-center"><div class="col-md-8 small text-secondary">' +
      nazevAuta(auto) + ': ' + dny + ' ' + t('dní') + ' × ' + kc(auto.cena) + (vikend ? ' + ' + t('víkendový příplatek 10 %') + ' (' + vikend + ' ' + t('dní') + ')' : '') + (sleva ? ', ' + t('sleva') + ' ' + Math.round(sleva * 100) + ' %' : '') + ' = ' + kc(zaAuto) +
      '<br>' + t('Pojištění a doplňky:') + ' ' + kc((pojisteni + doplnky) * dny) + '</div>' +
      '<div class="col-md-4 text-md-end"><span class="text-secondary small">' + t('Předběžná cena') + '</span><div class="cena-velka">' + kc(celkem) + '</div></div></div>');
  }
  $(f).on('input change', spocitatCenu);
  spocitatCenu();
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    f.datumDo.setCustomValidity(f.datumOd.value && f.datumDo.value && f.datumDo.value < f.datumOd.value ? t('Datum do musí být po datu od.') : '');
    f.classList.add('was-validated');
    if (!f.checkValidity()) return;
    const jmeno = f.jmeno.value;
    f.reset();
    f.classList.remove('was-validated');
    spocitatCenu();
    $('#uspech').removeClass('d-none').find('span').text(jmeno + t(', vaše rezervace byla odeslána. Brzy se vám ozveme.'));
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
      if (e.lengthComputable) $('#nacitaniText').text(t('Načítám 3D model…') + ' ' + Math.round(e.loaded / e.total * 100) + ' %');
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
  prepinacJazyka();
  tabulkaVozu();
  formularRezervace();
  prelozitStranku();
  scena3D();
});
