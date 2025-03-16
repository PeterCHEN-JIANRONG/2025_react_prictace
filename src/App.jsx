import { useEffect, useMemo, useState } from "react";
import Card from "./components/Card";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "apple",
    },
    {
      id: 2,
      name: "banana",
    },
    {
      id: 3,
      name: "cat",
    },
  ]);

  return (<>
    <ul>
      {
        list.map((item) => <Card key={item.id} item={item}/>)
      }
    </ul>
  </>);
}

export default App;
