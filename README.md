# webseries.xyz
[![Build Status](https://travis-ci.org/bartlangelaan/webseries.xyz.svg?branch=master)](https://travis-ci.org/bartlangelaan/webseries.xyz)

## De opdracht

Ik wil graag een platform maken, waarop je overzichtelijk webseries kunt bekijken. Op YouTube is veel content te vinden, maar daar is alles behalve overzicht. Series, seizoenen en afleveringen zijn niet goed van elkaar te scheiden, en daar wil ik verandering in brengen.

Op de homepage is een overzicht van verschillende series te zien. Voorbeelden van zulke series zijn: Roadtrippers, VGHS, Het Jachtseizoen en #BOOS. Als op een van deze series geklikt wordt, zie je een overzicht van alle seizoenen van deze serie. Als een serie maar één seizoen heeft wordt deze stap overgeslagen, en krijg je direct alle afleveringen te zien. Als er meerdere seizoen zijn en er wordt op een seizoen geklikt, is een overzicht van alle afleveringen binnen dat seizoen te zien. 

Als op een aflevering geklikt wordt, is er verschillende info over die aflevering te zien (titel, beschrijving). De video is via een YouTube-embed te zien, zodat gebruikers op de site blijven. Zodra de aflevering is afgelopen, wordt automatisch genavigeerd naar de volgende aflevering. Om te checken of de YouTube video al is afgelopen, wordt gebruik gemaakt van de YouTube event-API. 


Hiervoor wil ik gebruik maken van Webpack 2, React, ES2017+ en MobX. Ik ga er vanuit dat dat genoeg is om aan de front-end requirements te voldoen.
