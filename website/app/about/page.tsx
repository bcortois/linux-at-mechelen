import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Over ons
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Nu het einde van Windows 10 nadert, dreigen veel computers onnodig op de afvalberg te belanden. Wij willen mensen helpen hun computer langer te gebruiken door over te stappen op Linux. 
            Linux werkt uitstekend op zowel oudere als nieuwere computers, is volledig gratis en bevat alle nodige programma’s voor e-mail, het bekijken van foto’s en surfen op het internet. 
            Bovendien is het beter voor je privacy en biedt het meer keuzevrijheid
          </p>
          {allAuthors.sort(sortAuthorsByName).map((a) => (
            <AuthorLayout key={a._id} content={coreContent(a)}>
              <MDXLayoutRenderer code={a.body.code} />
            </AuthorLayout>
          ))}
        </div>
      </div>
    </>
  )
}

function sortAuthorsByName(a: Authors, b: Authors) {
  if (a.name! < b.name!) {
    return 1
  }
  if (a.name! > b.name!) {
    return -1
  }
  return 0
}
