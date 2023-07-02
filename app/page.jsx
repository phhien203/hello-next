import { readFile, writeFile } from '../helpers/file-helpers'

export default function HomePage() {
  const db = JSON.parse(readFile('/db.json'))
  db.hits = db.hits += 1
  writeFile('/db.json', JSON.stringify(db))

  return (
    <>
      <h1>Hello NextJS</h1>
      <p>You are visitor number {db.hits}</p>
    </>
  )
}
