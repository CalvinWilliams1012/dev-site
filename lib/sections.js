import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const sectionsDirectory = path.join(process.cwd(), 'data')

export default function getSortedSectionData() {
  // Get file names under /data
  const fileNames = fs.readdirSync(sectionsDirectory)
  const allSectionsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(sectionsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the section metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by order
  return allSectionsData.sort((a, b) => {
    if (a.order < b.order) {
      return 1
    } else {
      return -1
    }
  })
}
