import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState({poll1: '50%', poll2: '50%'})
  const [totalVotes, setTotalVotes] = useState(2)
  const [poll1, setPoll1] = useState(1)
  const [poll2, setPoll2] = useState(1)

  const vote = (to) =>{

    if(to === "poll1"){
      setPoll1(prev=>prev+1)
    }else{
      setPoll2(prev=>prev+1)
    }

    setTotalVotes(prev=>prev+1)

  }

  useEffect(()=>{

    setWidth(()=>{
      const poll1Rate = ((poll1 / totalVotes) * 100).toFixed(2)
      const poll2Rate = ((poll2 / totalVotes) * 100).toFixed(2)

      return {poll1: poll1Rate+"%", poll2: poll2Rate+"%"}
    })

  }, [totalVotes,poll2, poll1, setWidth])

  return (
      <div className="App">
          <div className="poll">
              <button
                  className="poll1"
                  style={{ width: width.poll1 }}
                  onClick={() => vote("poll1")}
              >
                  A ({width.poll1})
              </button>

              <button
                  className="poll2"
                  style={{ width: width.poll2 }}
                  onClick={() => vote("poll2")}
              >
                  B ({width.poll2})
              </button>
          </div>

          <h1>Votes count</h1>

          <h3>A - {poll1}</h3>
          <h3>B - {poll2}</h3>
          <h2>Total - {totalVotes}</h2>

      </div>
  );
}

export default App;
