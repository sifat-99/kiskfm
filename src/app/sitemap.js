import { BaseURL } from "@/utils/constant";

export default function sitemap() {
  return [
    {
      url: BaseURL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
    },
    {
      url: `${BaseURL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url:  `${BaseURL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url:  `${BaseURL}/notices`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url:  `${BaseURL}/dashboard`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url:  `${BaseURL}/principleMessage`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url:  `${BaseURL}/founderMessage`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url:  `${BaseURL}/academicCalender`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url:  `${BaseURL}/academicResult`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url:  `${BaseURL}/academicSyllabus`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url:  `${BaseURL}/classRoutine`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url:  `${BaseURL}/examRoutine`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    },
    {
      url:  `${BaseURL}/teacherRoutine`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
    }
  ]
}