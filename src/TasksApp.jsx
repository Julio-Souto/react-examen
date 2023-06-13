import { useState } from "react"

export default function TasksApp() {
  const [tareas, setTareas] = useState([])
  const [completada, setCompletada] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let copy = structuredClone(tareas)
    copy.push(e.target.tarea.value)
    setTareas(copy)
    let copy2 = structuredClone(completada)
    copy2.push(false)
    setCompletada(copy2)
  }
  const deleteTask = (index) => {
    let copy = structuredClone(completada)
    copy[index] = true
    setCompletada(copy)
  }
  return (
    <>
      <h1>Tareas</h1>
      <div className="flex justify-center mt-2 text-left place-items-center">
        <form className="flex flex-col mr-4 space-y-4" action="#" onSubmit={handleSubmit}>
          <label htmlFor="tarea">Tarea</label>
          <input className="p-1" type="text" name="tarea" id="tarea" />
          <button>Añadir</button>
        </form>
        <ul className="w-64 ml-8 space-y-2 list-disc">
          {tareas.length != 0 ? tareas.map((tarea,index) => 
            <li key={index} className={(completada[index] ? "line-through text-gray-500" : "")+" flex items-center justify-between"}>ಠ_ಠ - {tarea} <button className='p-0 mt-1 ml-2 text-right outline-none bg-inherit' 
            onClick={() => deleteTask(index)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
            </svg>
          </button></li>
          ) : <p></p>}
        </ul>
      </div>
    </>
  )
}
