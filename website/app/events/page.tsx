import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Events' })

export default function Events() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Maak kennis met Linux
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Kennismakingsessies met vrije inloop. Geschikt voor iedereen.
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8">
        <p>
          <strong>Windows 10 stopt</strong>, maar je computer hoeft niet mee te stoppen. Geef hem een <strong>tweede leven met Linux</strong>! 
          Kom langs op onze vrije inloopsessie en probeer zelf Linux uit op je eigen computer. 
          Je hoeft niets voor te bereiden en we wijzigen niets aan je toestel. Na de sessie start je je computer gewoon opnieuw op zoals voordien. 
          Bovendien ben je tijdens de sessie vrij om te komen en gaan wanneer je wenst.
        </p>
        <p>
          Tijdens de sessies bieden we:
        </p>
        <ul>
          <li>de mogelijkheid om <strong>Linux Mint</strong> op je eigen toestel <strong>uit te proberen</strong></li>
          <li>de kans om aan de hand van begeleidende oefeningen <strong>zelfstandig kennis te maken</strong> met dit alternatief voor Windows</li>
          <li>een woordje uitleg en <strong>antwoord op jouw vragen</strong> en</li>
          <li>laptops met Linux om uit te proberen.</li>
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-4">
        <h1 className="text-lg leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          Kennismakingsessie @ Wel&Wee
        </h1>
        <ul>
          <li>📅 Data: Woensdag 1 april</li>
          <li>🕑 Tijdstip: Van 14:00 tot 17:00 </li>
          <li>📍 Locatie: Meer info volgt nog</li>
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-4">
        <h1 className="text-lg leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          Kennismakingsessie @ Bibliotheek Mechelen
        </h1>
        <ul>
          <li>📅 Data: Donderdag 7 mei</li>
          <li>🕑 Tijdstip: Van 17:00 tot 19:00 </li>
          <li>📍 Locatie: Goswin de Stassartstraat 88, 2800 Mechelen</li>
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-4">
        <h1 className="text-lg leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          Kennismakingsessie @ Bibliotheek Mechelen
        </h1>
        <ul>
          <li>📅 Data: Donderdag 11 juni</li>
          <li>🕑 Tijdstip: Van 17:00 tot 19:00 </li>
          <li>📍 Locatie: Goswin de Stassartstraat 88, 2800 Mechelen</li>
        </ul>
      </div>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Overschakelen op Linux Mint
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          één op één begeleiding om jouw computer over te zetten naar Linux Mint.
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-8">
        <p>
          Ben je overtuigt dat Linux voor jouw een oplossing kan zijn? Schijf je dan in voor één van onze installatiesessies.
          Samen met een installateur bespreek je wat je na de overschakeling wil behouden en welke apps je zoals nodig hebt.
        </p>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-4">
        <h1 className="text-lg leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          Installatiesessie @ Recupperij
        </h1>
        <ul>
          <li>📅 Data: Zaterdag 30 mei</li>
          <li>🕑 Tijdstip: Op reservatie in de namiddag </li>
          <li>📍 Locatie: Battelsesteenweg 48, 2800 Mechelen</li>
          <li>Reservatie: Mail naar info@linux-at-mechelen.be</li>
        </ul>
      </div>
      <div className="prose dark:prose-invert max-w-none pt-4">
        <h1 className="text-lg leading-9 font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          Installatiesessie @ Recupperij
        </h1>
        <ul>
          <li>📅 Data: Zaterdag 21 juni</li>
          <li>🕑 Tijdstip: Op reservatie in de voormiddag </li>
          <li>📍 Locatie: Battelsesteenweg 48, 2800 Mechelen</li>
          <li>Reservatie: Mail naar info@linux-at-mechelen.be</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 md:flex-row py-6" hidden>
        <Image
          src="/static/images/windows_10_end_support_2026.png" // Zorg dat dit pad klopt
          alt="End of 10"
          width={400}
          height={200}
          className="mx-auto rounded-xl shadow-md"
        />
        <Image
          src="/static/images/linuxmint-boot​.png" // Zorg dat dit pad klopt
          alt="Linux Mint Bootscreen"
          width={400}
          height={200}
          className="mx-auto rounded-xl shadow-md"
        />
      </div>

      <div className="prose dark:prose-invert max-w-none pt-8" hidden>
        <p>
          Ideaal voor alles wat je dagelijks op je computer doet, en daarmee een prima alternatief voor wie een <strong>Windows 10</strong> toestel heeft dat nu al of straks niet meer ondersteund wordt.
        </p>
        <p>
          Wat vandaag nog vooral de bewuste gebruiker aanspreekt die meer grip wil op technologie, zou morgen ook een goeie keuze kunnen zijn voor de modale burger die zijn toestel nog niet meteen naar de <strong>afvalberg</strong> wil verwijzen.
        </p>
        <p>
          We nodigen je daarom graag uit op onze workshop, waar we <strong>Linux als alternatief</strong> voor Windows 10 voorstellen en luisteren naar een <strong>gastspreker</strong> uit Kortrijk die zijn praktijkervaring met Linux als <strong>digihelper</strong> deelt.
        </p>
        <p>Tijdens de sessies bieden we:</p>
        <ul>
          <li>Kennismaking met het initiatief Linux@Mechelen</li>
          <li>Een praktijkvoorbeeld van een ervaren digihelper</li>
          <li>De mogelijkheid om Linux op je eigen toestel uit te proberen via USB-stick zonder iets te installeren of te overschrijven</li>
        </ul>
        <p><strong>Inschrijvingen:</strong> Stuur een e-mail naar <a href="mailto:info@linux-at-mechelen.be">info@linux-at-mechelen.be</a> met je naam en vanuit welke rol je de workshop wil volgen (Digihelper, hersteller, ...)</p>
        <p>Sprekers: <br /><i>Bert Cortois en Bernard Butaye (Linux@Mechelen)<br />Bernard Decock (Digipunt Kortrijk)</i></p>
        <p hidden>
          Meer info via de officiële pagina van de stad:{' '}
          <a href="https://www.kortrijk.be/formulieren/digitafel-xl-overstappen-naar-linux-mint">
            kortrijk.be
          </a>
          .
        </p>
      </div>
    </div>
  )
}
