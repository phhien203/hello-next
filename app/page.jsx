import Censored from '../components/Censored'
import HitCounter from '../components/HitCounter'

export default function HomePage() {
  return (
    <>
      <h1>Hello NextJS</h1>
      <p>
        You are visitor number{' '}
        <Censored>
          <HitCounter />
        </Censored>
      </p>
    </>
  )
}
