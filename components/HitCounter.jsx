import { readFile, writeFile } from '../helpers/file-helpers'

export default function HitCounter() {
  const db = JSON.parse(readFile('/db.json'))
  db.hits = db.hits += 1
  writeFile('/db.json', JSON.stringify(db))

  return <span>{db.hits}</span>
}
