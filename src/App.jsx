import { useEffect, useMemo, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count + 1)
  }
  
  
  const [count2, setCount2] = useState(0)
  useEffect(() => {
    setCount2(count*2)
  }, [count])
  

  const count3 = useMemo(() => count*3, [count])
  
  return (
    <>
      <p>{ count }</p>
      <p>{ count2 }</p>
      <p>{ count3 }</p>
      <p>{ count * 4 }</p>
      <button type="button" onClick={ add }>增加</button>
    </>
  )
}

export default App
