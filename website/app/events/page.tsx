import Image from '@/components/Image'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Events' })

export default function Events() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Linux als alternatief voor Windows 10
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Een workshop voor Digihelpers en herstellers.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none pt-4">
        <ul>
          <li>📍 Locatie: Het Predikheren bibliotheek, Mechelen</li>
          <li>🕑 Tijdstip: Van 19:00 tot 20:30 </li>
          <li>📅 Data: Donderdag 5 maart</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 md:flex-row py-6">
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

      <div className="prose dark:prose-invert max-w-none pt-8">
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
