import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'

const data: Array<PacoteType> = [
  {
    id: "37de637a-c50f-4f47-a43c-6873457da0d0",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34
  },
  {
    id: "c05bfc0b-48dd-466c-b2a3-f2c193cdbadd",
    largura: 40.0,
    altura: 20.0,
    profundidade: 10.0,
    peso: 3.14
  },
]

function App() {

  return (
    <section>
      <h2>Pacotes</h2>
      <div className='pacotes'>
        {data.map(p => <Pacote pacote={p} key={p.id}/>)}      </div>
    </section>
  )
}

export default App
