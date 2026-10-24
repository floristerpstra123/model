# Model

Het staat model voor digitale tuintjes welke bij 'Het web is voor iedereen' door studenten worden gemaakt.

# Learning Log

## Mijn eerste idee

Het eerste idee was een website met een equalizer. Dat leek me goed bij elektronische muziek passen, omdat je daarmee geluid zichtbaar kunt maken. Toch ben ik uiteindelijk een andere kant opgegaan. Alleen geluid laten zien was niet helemaal wat ik wilde. Het ging me meer om de sfeer en het gevoel van een clubavond.

Daaruit ontstond het club-geïnspireerde ontwerp, met neonkleuren, opvallende fonts en bewegende achtergronden. Paars, roze en rood verwijzen naar clubverlichting. De bewegende teksten en gradients geven de pagina energie en passen bij het dansgevoel dat ik wilde overbrengen.

De Engelse achtergrondteksten sluiten ook aan op de inhoud. Ze gaan over de geschiedenis, cultuur en verbindende kracht van elektronische muziek.

### Lettertypes

De fonts worden ingeladen met `@font-face`. LEDLIGHT komt terug in de grote titels, navigatie en bewegende teksten. Dat font heeft precies de elektronische uitstraling die ik zocht. AlteHaasGrotesk is rustiger en wordt daarom gebruikt voor langere uitleg. Sommige titels hebben FakeReceipt.

Drie fonts vond ik een goede balans: genoeg verschil om de pagina’s interessant te maken, zonder dat de tekst onleesbaar wordt.

## Homepagina

### Wat staat erop?

De homepagina moet meteen duidelijk maken waar de website over gaat. Daarom staat ‘Electronic music’ groot in beeld, met mijn naam eronder. Veel uitleg is hier niet nodig; daarvoor zijn de andere pagina’s. Een korte instructie verwijst naar de navigatie.

Op de achtergrond bewegen teksten over synthesizers, de dansvloer en de geschiedenis van elektronische muziek. Die geven alvast een idee van de onderwerpen op History en Frequencies.

### Opbouw in HTML

De navigatie staat in `<header>` en `<nav>`. De titel en twee korte teksten staan in `<main>`. Via `aria-labelledby` is de hoofdinhoud gekoppeld aan de paginatitel.

Voor de achtergrondteksten staat er een aparte `<aside>` met `aria-hidden="true"`. Een schermlezer leest deze teksten daardoor niet voor. Ze zijn vooral bedoeld voor de sfeer; de belangrijke informatie staat ook op de inhoudelijke pagina’s.

### De tekst centreren

Flexbox zet de titel en alinea’s onder elkaar. `flex-direction: column` bepaalt de richting, terwijl `justify-content: center` en `align-items: center` de inhoud centreren. De afstand tussen de onderdelen wordt geregeld met `gap`.

Op grotere schermen heeft de hoofdinhoud `min-height: 100svh`. Daardoor vult het blok minimaal de kleine viewporthoogte. Bij maximaal 1200 pixels veranderen de hoogte en padding. De navigatie staat dan niet meer vast bovenaan, maar neemt gewoon ruimte in op de pagina.

### Bewegende teksten en achtergrond

De tekstlaag staat met `position: fixed` over het scherm. Elke losse regel heeft `position: absolute`, zodat de teksten op verschillende plekken kunnen staan. Met `:nth-child()` krijgt iedere regel een eigen positie en animatieduur.

Er zijn twee animaties: `naarLinks` en `naarRechts`. Beide verplaatsen de tekst met `translateX()`, maar in een andere richting. Verschillende snelheden zorgen ervoor dat de regels niet allemaal tegelijk bewegen. `white-space: nowrap` houdt de zinnen op één regel en `overflow: hidden` verbergt de stukken buiten de tekstlaag.

De gradients staan in `body::before`. Daar is dus geen extra HTML-element voor nodig. De animatie `zweven` verandert de posities van de gradients.

### Het probleem met de knop

De themaknop was op de homepagina niet goed aan te klikken. Waarschijnlijk lag de header er onzichtbaar overheen. Daarom is de `z-index` van de knop verhoogd naar 15, terwijl de header op 10 staat. De knop ligt nu boven de header. Of dit bij alle schermformaten goed werkt, moet nog getest worden.

De achtergrondlagen hebben daarnaast `pointer-events: none`. Zo houden de bewegende teksten en gradients geen klikken tegen die voor de knoppen of links bedoeld zijn.

### Privacymelding

In de eerste melding stond dat de website functionele cookies gebruikte. Na de feedback heb ik die tekst aangepast naar een melding over geen cookies of tracking. Dat moet nog gecontroleerd worden voor de volledige website, inclusief JavaScript en eventuele externe onderdelen.

De melding is gemaakt met `<details open>` en staat daardoor meteen uitgeklapt. Via `<summary>` kan de tekst worden in- en uitgeklapt. De Got it-knop is bedoeld om de hele melding te sluiten. Daarvoor moet JavaScript het `hidden`-attribuut toevoegen, waarna de CSS-regel `#consent[hidden]` de melding verbergt.

Het bestand `script.js` wordt geladen met `defer`, zodat het pas wordt uitgevoerd nadat de HTML is ingelezen. Got it is hier alleen een knop om het informatiebericht te sluiten, niet om toestemming te geven voor tracking.

## History-pagina

### Wat staat erop?

History laat zien hoe elektronische muziek zich heeft ontwikkeld. De informatie is verdeeld over vijf blokken: de pioniers, synthesizers, synthesizers in populaire muziek, house en techno en ravecultuur.

Alleen de apparaten bespreken vond ik te beperkt. De mensen achter de muziek zijn minstens zo belangrijk. Daarom gaat het bij house en techno ook over Chicago, Detroit en de rol van zwarte, Latino en queer gemeenschappen.

### Horizontale tijdlijn

Op grotere schermen staan de periodes naast elkaar. Dat werkt met `display: flex` en `flex: 0 0 100%`. Elk blok krijgt daarmee de volle breedte van de binnenruimte van de tijdlijn en krimpt niet. Met `overflow-x: auto` kan je vervolgens naar rechts scrollen.

`scroll-snap-type: x mandatory` en `scroll-snap-align: start` zorgen dat de tijdlijn bij het begin van een blok vastklikt. Zo komt een periode na het scrollen op een vaste plek in beeld. De paarse scrollbar maakt zichtbaar dat er meer inhoud naast het eerste blok staat.

### Op kleinere schermen

Een horizontale tijdlijn neemt op een klein scherm veel ruimte in. Daarom staan de periodes bij maximaal 1000 pixels onder elkaar. De media query verandert de richting naar `flex-direction: column` en schakelt scroll snapping uit.

Ook de padding wordt kleiner en de scheidingslijnen lopen dan horizontaal. De instructie om naar rechts te scrollen verdwijnt, omdat je op deze schermen gewoon naar beneden leest.

### Bediening met het toetsenbord

Via de skip-link kan een bezoeker direct naar de hoofdinhoud springen. De tijdlijn heeft `tabindex="0"`, zodat deze met Tab focus kan krijgen. Het scrollgebied kan daarna meestal met de pijltjestoetsen worden bediend. Dat wil ik nog in verschillende browsers controleren.

Een focusrand met `:focus-visible` laat zien welk onderdeel geselecteerd is. Voor bezoekers met een voorkeur voor minder beweging zijn de overgangen van de navigatie en themaknop uitgeschakeld. Soepel scrollen staat alleen aan wanneer er geen voorkeur voor minder beweging is ingesteld.

## Frequencies-pagina

### Wat staat erop?

Frequencies gaat over house, techno, electro, drum & bass en ambient. Hier draait het niet om een tijdlijn, maar om de verschillen en overeenkomsten tussen de genres. De naam verwijst naar de verschillende elektronische geluiden.

Elk genre is verdeeld in dezelfde drie onderdelen:

- **The roots:** waar het genre vandaan komt en wie belangrijk waren voor de ontwikkeling.
- **The sound:** herkenbare kenmerken, zoals drums, baslijnen en instrumenten.
- **The connection:** de rol van clubs, mensen en gemeenschappen.

Die vaste indeling maakt vergelijken makkelijker. Bijvoorbeeld de regelmatige beat van house tegenover de gebroken ritmes van electro, of de atmosferische klanken van ambient.

### Door de pagina navigeren

De Explore-link gaat met `href="#house"` naar het eerste genre. Onder elk onderdeel staat een link naar het volgende. Na ambient kan de bezoeker terug naar de introductie.

Dit werkt met HTML-ankers, zonder JavaScript. `scroll-margin-top: 2rem` laat wat ruimte boven de sectie wanneer de browser ernaartoe springt.

### Indeling met CSS Grid

De drie artikelen staan naast elkaar in even brede kolommen. Hiervoor staat in de CSS `grid-template-columns: repeat(3, minmax(0, 1fr))`.

De genretitel, afsluitende zin en vervolglink lopen met `grid-column: 1 / -1` over de volledige breedte. De introductie valt buiten deze indeling door de selector `:not(#frequencies-intro)`.

Bij maximaal 750 pixels verandert het grid naar één kolom en staan de artikelen onder elkaar. De inhoud en leesvolgorde blijven hetzelfde, dus aparte mobiele HTML is niet nodig.

## Who am I-pagina

### Wat staat erop?

Who am I geeft de website een persoonlijkere kant. Hier stel ik mezelf voor en vertel ik over mijn interesse in de cultuur, geschiedenis en visuele kant van elektronische muziek.

De tekst gaat ook over de invloed buiten clubs, bijvoorbeeld in pop, hiphop, films en games. Daarmee sluit de introductie aan op de onderwerpen van de andere pagina’s.

### Opbouw in HTML

De hoofdinhoud staat in `<main>`, met één `<h1>` voor de titel. De introductie heeft een eigen `<section>` met `id="intro"`. Vier alinea’s verdelen de tekst in mijn naam, mijn interesse, de invloed van elektronische muziek en het doel van de website.

`aria-label="About Floris Terpstra"` geeft de sectie een naam voor schermlezers. Het portret staat in een apart `<img>`-element. De alt-tekst beschrijft dat het een halftone-portret van mij is.

### Tekst en portret naast elkaar

CSS Grid verdeelt de pagina in een tekstkolom en een kolom voor het portret. Met `grid-template-columns: minmax(0, 1.2fr) minmax(18rem, 0.8fr)` krijgt de tekst relatief meer ruimte. De portretkolom is minimaal 18rem breed.

De titel loopt met `grid-column: 1 / -1` over beide kolommen. Daaronder staat de introductie links en het portret rechts. `justify-self: end` en `align-self: end` plaatsen de afbeelding rechts onderaan binnen het gridvak.

### Het portret schalen

Het portret wordt geladen vanuit de map `images`. De breedte is ingesteld op `min(100%, 38rem)`, zodat de afbeelding binnen de kolom past en niet breder wordt dan 38rem. Met `height: auto` blijft de oorspronkelijke verhouding behouden.

Op grotere schermen begrenst `max-height: 78vh` de hoogte. `object-fit: contain` houdt het hele portret zichtbaar binnen de afbeeldingsruimte, zonder delen af te snijden.

### Op kleinere schermen

Bij maximaal 1200 pixels verandert het grid naar één kolom. De titel, introductie en afbeelding staan dan onder elkaar.

De minimale hoogte van het tekstblok vervalt, zodat de hoogte aansluit op de inhoud. Het portret wordt gecentreerd en krijgt een maximale breedte van 24rem. Dezelfde HTML werkt daardoor voor zowel brede als smalle schermen.

## Samenhang

Alle pagina’s hebben ongeveer dezelfde stijl, zodat je merkt dat ze bij dezelfde website horen. De neonkleuren en opvallende fonts passen bij de clubsfeer die ik wilde neerzetten.

LEDLIGHT komt steeds terug in de titels en navigatie. Dat maakt het font een herkenbaar onderdeel van de website. Voor langere teksten staat er AlteHaasGrotesk, omdat LEDLIGHT daarvoor te druk zou worden. FakeReceipt zorgt op sommige plekken voor wat afwisseling. De songtekstpagina heeft met Seraphs een ander font, omdat die pagina meer een los typografisch experiment is.

De knoppen en links hebben ook dezelfde roze hover. Daardoor reageren ze overal op een herkenbare manier. De navigatie blijft op iedere pagina hetzelfde, zodat je niet steeds opnieuw hoeft te zoeken.

Niet elke pagina heeft evenveel beweging. Home is drukker, met bewegende teksten en gradients. History en Who am I zijn rustiger, omdat je daar vooral moet kunnen lezen. Op Frequencies bewegen de achtergronden en bij de songtekst juist de woorden.

Zo hebben de pagina’s wel hun eigen indeling, maar zorgen de fonts, kleuren en knoppen ervoor dat het geheel bij elkaar blijft passen.


Songtekst:
Let it happen - Tame Impala
<img width="3024" height="4032" alt="IMG_7273" src="https://github.com/user-attachments/assets/0d58609d-720e-4635-9d65-5ab24465496a" />
<img width="3024" height="4032" alt="IMG_7272 (1)" src="https://github.com/user-attachments/assets/bb54f6b7-c24a-450d-aaed-11455fbaf659" />
<img width="3024" height="4032" alt="IMG_7274" src="https://github.com/user-attachments/assets/b215e572-54c2-4b95-9469-1fb9df639041" />
<img width="3024" height="4032" alt="IMG_7276" src="https://github.com/user-attachments/assets/b2e60737-d3b3-470c-b69b-3684e079e22f" />
<img width="3024" height="4032" alt="IMG_7277" src="https://github.com/user-attachments/assets/d4896207-8764-4731-860a-88e076d35291" />
<img width="3024" height="4032" alt="IMG_7278" src="https://github.com/user-attachments/assets/3cbfb70a-8d5c-48eb-bd74-2941f6cb176b" />
<img width="3024" height="4032" alt="IMG_7279" src="https://github.com/user-attachments/assets/05d39d3e-cfb8-47e8-bb47-da7af971cf02" />
<img width="3024" height="4032" alt="IMG_7280" src="https://github.com/user-attachments/assets/72168bb8-1dfd-4952-a349-62556effb1d8" />
<img width="3024" height="4032" alt="IMG_7281" src="https://github.com/user-attachments/assets/02d7e3b4-a69c-4561-8f1b-d53b8a42acf9" />

Ik heb gekozen voor het stukje
All this running around, bearing down on my shoulders
I can hear an alarm it must be morning.

Toen ik het luisterde kreeg ik impressie van omvallen en weer opstaan, de muziek die langzaam luider en duidelijker word, waardoor je het gevoel krijgt dat je bij het woordje morning daadwerkelijk wakker word. Ik heb er daarom voor gekozen om een soort omvallende en steeds kleinere tekst te maken, die bij het einde weer groter word, net alsof je wakker word. De golfachtige vorm is gebasseerd op de muziek die voelt alsof het om je heen beweegt. 

Checkout vragen: 

7 september:

Leg uit wat een digital garden is en waarom dat anders is dan een reguliere website.
Een digital garden is een website vol met verschillende ideeen en onderwerpen waar je door heen kan kijken die iemand persoonlijk heeft gemaakt.

Leg uit wat een website 'webby' maakt en welke websites jou het meeste inspireren.
Een wbesite is webby als het goed kan worden bestuurd en het scherm word aangepast op de grootte van je device.

Vertel waar jij mee aan de slag wilt gaan bij het maken van jouw eigen digital garden (let op: dit zijn jouw eerste ideeën, dit kan en mag veranderen in de loop van het programma.
Ik wil een website maken dat voelt als een interactieve ervaring die de gebruiker vermaakt.

9 September:

Leg uit waar het Visual Research in 3 stappen naartoe werkt


Vertel in 2 zinnen waar jouw Garden over gaat, en met welke content je dat gaat doen (beeld, tekst, sound, animatie enz).
Mijn garden gaat over de geschiedenis van elektronische muziek, ik ga veel gebruik maken van velle kleuren en een donkere achtergrond waardoor er een gevoel van feest en euforie komt. 

Vertel kort welk idee van de Crazy 8 je het liefst zou willen uitvoeren/ verder zou willen onderzoeken.
iets met dat je naar rechts kan swipen, door de jaren heen bijvoorbeeld.

<img width="854" height="1198" alt="image" src="https://github.com/user-attachments/assets/945e2a14-ab97-4b4f-adc6-5ce82b077eb7" />
<img width="846" height="744" alt="image" src="https://github.com/user-attachments/assets/b8f8c0c5-cea9-47e9-9937-10faa515f3b6" />
<img width="968" height="1040" alt="image" src="https://github.com/user-attachments/assets/0ad4411c-f9dc-4e66-b85d-9daa428c04c0" />
<img width="935" height="674" alt="image" src="https://github.com/user-attachments/assets/34cd8b53-539f-4d7e-9aa5-44ba43780173" />

Mijn idee is om een website te maken die gaat over elektronische muziek en de impact hiervan op de wereld. Kwa vormgeving wil ik een club achtige vibe creeren met velle kleuren, beweging en blur. De website moet energie uitstralen.  


11 september:

Welke feedback heb je gehad?
Om voor de geschiedenis pagina voor elk jaartal een ander bijpassend thema te maken.

<img width="1164" height="1360" alt="image" src="https://github.com/user-attachments/assets/e89d5e64-89aa-4c6a-8cbb-9ea900c71c36" />
<img width="848" height="1416" alt="image" src="https://github.com/user-attachments/assets/98deb4e3-a294-4426-ba66-204a05a7e4e4" />
<img width="822" height="1349" alt="image" src="https://github.com/user-attachments/assets/5a698d74-76f2-4722-bbd0-838392224b44" />

<img width="1062" height="1714" alt="image" src="https://github.com/user-attachments/assets/db35d686-eda9-4c5d-bbc2-091511be6ad7" />
<img width="1512" height="857" alt="Screenshot 2026-09-30 at 17 08 08" src="https://github.com/user-attachments/assets/fea42118-f0fc-4600-8603-f7e3cb6e23c4" />

Mijn eerste ontwerp zag er zo uit, ik had een soort audio equalizer gemaakt, en de knoppen leidde naar de andere paginas. Ik merkte toch dat ik het totaal niet leuk vond en ik voelde me ook helemaal niet verbonden met de website en vormgeving. dus besloot ik om overnieuw te beginnen en meer te werken met de stijl die ik eerder liet zien in het miro bord, dus denk aan neon kleuren en veel beweging.

14 september:

Leg uit wanneer een website 'lelijk' wordt en geef voorbeelden wat je kan doen om deze 'lelijke' onderdelen te fixen?
Een website word lelijk als de layout niet klopt vergeleken met je scherm, dit fix je met flexbox, grid.

Vertel welke volgende stap je neemt om je website responsive te maken.
Flexbox en grid toepassen.

Kun je het ontwerp en de bouw van je eigen Garden (zo uit je hoofd) onderbouwen in Webby vocabulair?
nee

16 september:

Noem 3 Gestalt- of Design principes op en laat de ander uitleggen wat ze betekenen en doen.
nabijhheid: elementen die dicht bij elkaar staan worden gezien als 1 groep. gelijkheid: Elementen die visueel op elkaar lijken. sluiting: Elementen die in dezelfde richting bewegen.

Een grid biedt ruimte om te spelen (vrijheid), maar tegelijkertijd ook eenheid en structuur (vastigheid). Wat wordt hiermee bedoeld?
Met een grid kun je de lay out aanpassen waardoor je op het hele scherm dingen kunt plaatsen en hierdoor he visueel sterker te maken door aandachtspunten en groepen te creeren.

Welk principe neem je mee in een laatste iteratie van je eigen Garden? 
gelijkheid.

18 september:

Wat zijn HTML landmark role elements?
Landmark elements geven de belangrijkste delen van een webpagina aan. Voorbeelden zijn <header>, <nav>, <main>, <aside> en <footer>. Ze helpen screenreadergebruikers om snel door een pagina te navigeren.

Wat zijn heading elementen en hoe horen deze 'genest' te worden?
Headings zijn <h1> tot en met <h6>. Je gebruikt ze in een logische volgorde: een <h1> is de hoofdtitel, <h2> zijn hoofdonderwerpen en <h3> zijn onderdelen daarvan. Je slaat dus liever geen niveau over, zoals direct van <h1> naar <h3>.

Hoe ga jij met cookies om? Beschrijf jouw beweegredenen en of die zijn veranderd na het volgen van dit college.
Voor dit college accepteerde ik cookies vaak snel zonder echt te kijken waarvoor ze waren. Nu weet ik beter dat cookies gebruikt kunnen worden voor bijvoorbeeld analyse, voorkeuren en gepersonaliseerde advertenties. Daarom let ik nu meer op welke cookies noodzakelijk zijn en kies ik liever voor het weigeren van niet-noodzakelijke trackingcookies. Op mijn eigen website zou ik alleen cookies gebruiken als ze echt nodig zijn.

21 september:

Wat is een wireflow en wat heb je er aan?
Een wireflow is een combinatie van een wireframe en een flowchart. Het laat zien welke schermen een gebruiker ziet en welke stappen hij of zij doorloopt. Ik kan hiermee controleren of de navigatie en gebruikersroute logisch zijn voordat ik de website volledig ontwerp.

Wat zijn dark UX patterns? Geef drie voorbeelden...
Dark UX patterns zijn ontwerpkeuzes die gebruikers sturen of misleiden om iets te doen wat vooral gunstig is voor het bedrijf.

Drie voorbeelden zijn:

Confirmshaming: iemand een schuldgevoel geven bij het weigeren van een keuze, zoals: “Nee, ik wil geen betere ervaring.”
Misdirection: de knop “Accepteren” heel groot en opvallend maken, terwijl “Weigeren” klein of verborgen is.
Roach motel: het heel makkelijk maken om je aan te melden, maar moeilijk om je weer af te melden of een abonnement op te zeggen.

Waar moet je als ontwerper rekening mee houden bij het maken van een human consent component?
Bij een consent component moet ik zorgen dat de gebruiker een vrije en duidelijke keuze kan maken. Ik moet helder uitleggen waarvoor toestemming wordt gevraagd, bijvoorbeeld voor analytics of marketingcookies. Accepteren en weigeren moeten even makkelijk en zichtbaar zijn. Ook mag ik geen misleidende teksten, vooraf aangevinkte opties of dark patterns gebruiken.

23 september: 

Wat is HTML validatie, waarom is het belangrijk en hoe heb je dat vandaag uitgevoerd?
Welke dingen vielen je op?
Welke feedback heb je ontvangen tijdens het gesprek met je docenten?

25 september

Wat bedoelt Vasilis met de uitspraak: Semantiek doet mij niet zo veel, ik ben liever bezig met de UX van HTML?
Hij vind de functionaliteit en werking belangrijker

Wat voor type beperkingen hebben invloed op het gebruiken van websites?
Oogzicht, cognitief, fysieke beperkingen, motorieke skills, gehoor.

Noem drie manieren om door een website te navigeren met jouw screenreader.
via tap, geluid en de pijltjes.

30 september 

Waar staat WCAG en A11y voor?
checklist voor je website of het voldoet aan de eisen.

wat vind je lastiger, je laptop alleeneen toetsenbord bedienen of met een screenreader? waarom? waar moet je nog mee oefenen?
Een screenreader, omdat het gewoon lang duurt en mijn website ook beweging heeft dus is het lastig te bedienen. 

Met welke beperking rekening houden vind je het meest lastig? 
ALs je het toetsenbord niet kan besturen.

sprint 3

5 oktober
Leg uit wat er met de volgende termen bedoeld wordt: kerning, tracking, leading, flush-left, flush-right, centered, justified, indent, outdent, modular scale, movable type, focus punt, vijf soorten contrast, spatial tension. (Hint, alle termen staan in de artikelen die we samen gelezen hebben)
Kerning: de ruimte tussen twee specifieke letters aanpassen, bijvoorbeeld tussen de A en V.

Tracking: de ruimte tussen alle letters in een woord of tekstblok gelijkmatig aanpassen.
Leading: de afstand tussen tekstregels, gemeten van de basislijn van de ene regel tot die van de volgende.
Flush-left: tekst is links uitgelijnd. De rechterkant heeft een onregelmatige rand.
Flush-right: tekst is rechts uitgelijnd. De linkerkant heeft een onregelmatige rand.
Centered: tekst staat gecentreerd rond een middenlijn.
Justified: tekst is uitgevuld, waardoor de linker- en rechterrand recht zijn. De ruimte tussen woorden wordt hiervoor aangepast.
Indent: tekst naar binnen laten springen, bijvoorbeeld de eerste regel van een alinea.
Outdent: tekst naar buiten laten springen ten opzichte van de rest van het tekstblok.
Modular scale: een reeks maten met een vaste verhouding. Hiermee kun je bijvoorbeeld lettergroottes voor koppen en gewone tekst op elkaar afstemmen.
Movable type: losse, verplaatsbare drukletters die worden samengesteld tot woorden en pagina’s. Na het drukken kunnen ze opnieuw worden gebruikt.
Focuspunt: het onderdeel van een ontwerp dat als eerste de aandacht trekt, bijvoorbeeld door kleur, grootte of plaatsing.

Vijf soorten contrast: er zijn verschillende indelingen. Binnen typografie kun je bijvoorbeeld groottecontrast (groot en klein), gewichtscontrast (dik en dun), vormcontrast (rechtop en cursief), structuurcontrast (schreef en schreefloos) en kleurcontrast (verschillende kleuren of licht en donker) onderscheiden.

Spatial tension: visuele spanning door de afstand en positie van elementen. Een element vlak bij de paginarand kan bijvoorbeeld voelen alsof het buiten het ontwerp wil bewegen.


Wat is jouw ideale regellengte (measure)? Leg uit waarom.
Mijn ideale regellengte is ongeveer 60 tekens per regel, inclusief spaties. Dit leest voor mij prettig: je hoeft niet te ver met je ogen te bewegen en kunt makkelijk de volgende regel vinden. Bij heel korte regels moet je juist steeds naar een nieuwe regel springen.

Als je in een ontwerp maar één variabele tot je beschikking had om hiërarchie aan te brengen (grootte, plaatsing, spacing, lettersoorten), welke zou je dan gebruiken en waarom?
Ik zou grootte gebruiken. Met een grote titel, kleinere tussenkoppen en nog kleinere lopende tekst is snel duidelijk wat het belangrijkste is. Zo kan de gebruiker de pagina makkelijk scannen, ook als ik overal hetzelfde lettertype gebruik.

7 oktober

Waarom is het goed om een grid in je ontwerp toe te passen? Noem een reden voor de ontwerper en een voor de bezoeker.
Voor de ontwerper geeft een grid houvast bij het plaatsen en uitlijnen van elementen. Daardoor kan ik makkelijker een consistente layout maken.
Voor de bezoeker wordt de pagina overzichtelijker, waardoor informatie makkelijker te vinden is.

Noem drie manieren om chaos in je ontwerp te voorkomen.
Met duidelijke hiërarchie laat ik zien wat belangrijk is. Genoeg witruimte zorgt dat niet alles op elkaar staat. Ook gebruik ik een beperkt aantal kleuren en fonts om het ontwerp consistent te houden.

Hoeveel gekkigheid moet er in je werk zitten?
Voor mij genoeg om het ontwerp een eigen karakter te geven, maar niet zoveel dat het onduidelijk wordt. Bij mijn website passen neonkleuren en beweging bij de clubsfeer, maar de tekst en navigatie moeten wel goed leesbaar blijven.

9 oktober

Welke variabelen van Seraphs gebruik je in de opmaak van je songtekst?
Ik gebruik vooral grootte, plaatsing, spacing en schuine tekst. De woorden staan niet op rechte regels, maar volgen een slingerende route. Aan het einde wordt de tekst groter en staat ‘morning’ cursief.

Wat voegt iedere variabele toe aan je ontwerp (denk aan leesbaarheid, hiërarchie of de uitstraling die je wil bereiken)?
Met grootte geef ik belangrijke woorden meer nadruk, vooral ‘morning’. De plaatsing laat je ogen door de tekst bewegen en past bij ‘running around’ en ‘bearing down’. De ruimte tussen de woorden zorgt voor rust en pauzes tijdens het lezen. De schuine tekst geeft ‘around’ beweging en maakt ‘morning’ extra opvallend

Hoe zou je animatie kunnen toepassen om het ritme of de accenten in de weergave van je songtekst nog beter visueel te maken?
Ik zou bepaalde woorden waar een toon verschil is laten bewegen. ‘Down’ kan langzaam naar beneden bewegen en ‘alarm’ kan kort pulseren. Aan het einde kan ‘morning’ groter worden, zodat dat woord extra nadruk krijgt.

<img width="1304" height="1258" alt="image" src="https://github.com/user-attachments/assets/e919fb84-c204-4c1b-8cbb-85c16637e576" />



https://codepen.io/your-work?item_type=PEN
Ik heb niet alle deepdives opgeslagen dus hierondernog wat foto's van opdrachten.

Deep dives:


Light en dark:
<img width="2436" height="1598" alt="image" src="https://github.com/user-attachments/assets/7231ce10-d1a9-4e36-9df0-a776bab1dbac" />
<img width="2422" height="1608" alt="image" src="https://github.com/user-attachments/assets/359d36c7-4929-432a-b280-05ef3cac3f58" />
Mooie kleuren en gradients:
<img width="1209" height="803" alt="Screenshot 2026-10-17 at 17 16 36" src="https://github.com/user-attachments/assets/858b185e-1f55-41ab-88bd-9604d42584c7" />

Grid 101 + Media queries:

<img width="2968" height="1724" alt="image" src="https://github.com/user-attachments/assets/22ab38da-8166-49bc-a246-a85f5d478339" />
<img width="3016" height="1726" alt="image" src="https://github.com/user-attachments/assets/b93141db-3ad4-443b-90ff-62846915b2e9" />
<img width="2428" height="1502" alt="image" src="https://github.com/user-attachments/assets/760e8e70-88b5-4ff7-8c08-ca4fedbabc3f" />
<img width="2972" height="1672" alt="image" src="https://github.com/user-attachments/assets/cb90ed44-d1a4-41e4-aebb-7b69a806bb5b" />
<img width="3022" height="1696" alt="image" src="https://github.com/user-attachments/assets/d96acb7d-d1aa-4272-aa3e-a90ce84ffaa7" />

<img width="3012" height="1720" alt="image" src="https://github.com/user-attachments/assets/2d43866c-038f-4cf2-819f-5213320d1590" />
<img width="2408" height="1618" alt="image" src="https://github.com/user-attachments/assets/c02b4cda-457a-4735-8276-e624ed458959" />

<img width="2430" height="1438" alt="image" src="https://github.com/user-attachments/assets/03b806dc-4c10-431b-9fa5-2133897921da" />
<img width="2420" height="1426" alt="image" src="https://github.com/user-attachments/assets/19021d9d-8527-4651-91fc-32c326e978cb" />
Responsive grid + Grid-areas:

<img width="2440" height="1330" alt="image" src="https://github.com/user-attachments/assets/54ea2bc3-ada8-4113-a8dd-6ab4caef8006" />
<img width="2432" height="1398" alt="image" src="https://github.com/user-attachments/assets/7d8f9ffa-24f4-42e4-b508-d554b929f186" />



















