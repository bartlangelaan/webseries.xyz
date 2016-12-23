# webseries.xyz
[![Build Status](https://travis-ci.org/bartlangelaan/webseries.xyz.svg?branch=master)](https://travis-ci.org/bartlangelaan/webseries.xyz)

## De opdracht

Ik wil graag een platform maken, waarop je overzichtelijk webseries kunt bekijken. Op YouTube is veel content te vinden, maar daar is alles behalve overzicht. Series, seizoenen en afleveringen zijn niet goed van elkaar te scheiden, en daar wil ik verandering in brengen.

Op de homepage is een overzicht van verschillende series te zien. Voorbeelden van zulke series zijn: Roadtrippers, VGHS, Het Jachtseizoen en #BOOS. Als op een van deze series geklikt wordt, zie je een overzicht van alle seizoenen van deze serie. Als een serie maar één seizoen heeft wordt deze stap overgeslagen, en krijg je direct alle afleveringen te zien. Als er meerdere seizoen zijn en er wordt op een seizoen geklikt, is een overzicht van alle afleveringen binnen dat seizoen te zien. 

Als op een aflevering geklikt wordt, is er verschillende info over die aflevering te zien (titel, beschrijving). De video is via een YouTube-embed te zien, zodat gebruikers op de site blijven. Zodra de aflevering is afgelopen, wordt automatisch genavigeerd naar de volgende aflevering. Om te checken of de YouTube video al is afgelopen, wordt gebruik gemaakt van de YouTube event-API. 


Hiervoor wil ik gebruik maken van Webpack 2, React, ES2017+ en MobX. Ik ga er vanuit dat dat genoeg is om aan de front-end requirements te voldoen.

## Beoordelingscriteria

_Het programma heeft een professionele setup (bv nodejs en babeljs) en een goede mappenstructuur._

Het project is verdeeld in `components` (views), `routes` en `models`. Dit zijn daarom ook allemaal mappen die zich in de `src`  map bevinden. Via Webpack 2 en Babel wordt alles van ES2015 naar ES5 geconverteerd.

_Het programma werkt in 3 browsers (IE, Chrome en Firefox). De testresultaten zijn daarvan aanwezig._
Niet aanwezig.

_De code is voorzien van goed en zinvol commentaar volgens de JSDocs specificatie._
Niet aanwezig.

_Models (M) zijn op een goede manier gekozen en opgezet._
Er zijn 3 models, die allemaal te vinden zijn in de `src/models` map. Deze zijn ES2016 classes, en halen hun children uit de `store`.

_Views (V) zijn goed gekozen en slim opgezet._
Er zijn 4 views: serie overzicht, seizoen overzicht, aflevering overzicht en aflevering detail. Deze maken veelal gebruik van dezelfde components, zodat de code slim en herbruikbaar blijft.

_Routing (*) routing van de url’s is goed doordacht en uitgevoerd._
De routing is vrij simpel, elk stapje 'verder' is een extra pad in de routing. De desbetreffende components worden dan ingeladen, met de argumenten die in de url zijn meegegeven.

_De gekozen events werken goed en zijn zinvol opgebouwd._
Er wordt geluisterd naar het `onEnd` event van de YouTube player, zo wordt gedetecteerd wanneer een gebruiker de video helemaal heeft afgekeken. Als er nog een aflevering in hetzelfde seizoen is, dan wordt er automatisch naar de volgende aflevering geredirect.

_ES2015 is waar mogelijk toegepast._
Er is overal gebruik gemaakt van ES2015, en op sommige plaatsen zelfs van ES2017+ (het gebruik van decorators als @observable, @observer and @computed).

_De complexiteit van de opdracht._
Het gebruiken van React maakt de opdracht een stuk lastiger dan de 'gebruikelijke' methoden als jQuery en BackBone. Toch vond ik het de moeite waard om het in React te doen, omdat ik denk dat er in dat soort frameworks de toekomst ligt. Het gebruik van ES2017+ maakte het ook erg lastig, er was niet veel documentatie te vinden over de combinatie van MobX, React, Babel en Kyt. Daardoor heb ik zelf in de broncode van verschillende modules moeten duiken, om er achter te komen hoe bepaalde dingen geregeld moesten worden. Ik denk dat het hele nette code is, wat erg lastig is in een project waar in een View zeker 3 models gebruikt worden.
