import { useState } from 'react'

function ShowCount({count, decrementar, reset, incrementar}){
  return(<>
          <div className='mt-4 space-x-4 space-y-4'>
            <h1>{count}</h1>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={reset}>Reset</button>
            <button onClick={incrementar}>Incrementar</button>
          </div>
        </>)
}

function ChangeValue({number, change}){
  const handleSubmit = (e) => {
    e.preventDefault()
    change(e.target.valor.value)
  }
  return(<>
        <form className='flex flex-col mt-4 space-y-4' action="#" onSubmit={handleSubmit}>
          <input className='p-1' name='valor' type="number" value={number} 
          onChange={(e) => change(e.target.value)}/>
          <button>Cambiar Valor</button>
        </form>
        </>)
}

function CounterApp() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(1)

  const handleValue = (e) => {
    setValue(e)
  }
  return (
    <>
      <h1>Contador App</h1>
      <ShowCount count={count} decrementar={() => setCount(count - Number(value))} 
      reset={() => setCount(0)} incrementar={() => setCount(count + Number(value))}/>
      <ChangeValue number={value} change={handleValue} />
    </>
  )
}

export default CounterApp
