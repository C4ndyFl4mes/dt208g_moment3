# DT208g - Moment3
Den här webbplatsen har gjorts med Angular v19.

## Komponenter
### Pages
#### Startsidan
Startsidan har enbart en h2-rubrik och en AVIF bild på en bäck i skogen vid stugan. Jag hade tänkt försöka använda Angular optimering, men det verkade som man ändå själv måste hålla på med olika bilder. Det slutade med att jag bara gjorde en AVIF då det inte står i uppgiften att vi ska optimera någonting.
#### Konvertera
Konverteringssidan har en h2-rubrik, två div-element med klassen conversion-container. Inuti dessa två divar "kallas" en var sin komponent, mer om det i partials nedan.
#### Om
Om har en h2-rubrik och två article-element som beskriver arbetet och slutsatsen.
### Partials
#### Meny
En komponent som alla undersidor har är den för menyn. Menyn har länkar och beroende på skärmstorlek syns den direkt och på små skärmar måste man klicka på en knapp för en rullgardinsmeny.
#### Tempconvert
En komponent som hanterar tre inmatningsfält: Celsius, Fahrenheit och Kelvin och konverterar dem till varandra. Kan bli lite fel då de avrundas precis innan de visas i inmatningsfältet.
#### Lengthconvert
En komponent som hanterar sex inmatningsfält: Meter, Centimeter, Millimieter, Mile, Feet och Inch. Jag gjorde så att det enbart konverteras från SI till IU och inte tvärsom, IU-fälten är readonly.
