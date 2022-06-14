
import { useState } from 'react';
import './App.css';

// const data = [
//   {
//     name:"Search Engines",
//     url:["https://www.google.com","https://github.com"]
//   }
// ]

// const openTabs = (url) =>{
//   for(const link of url){
//     window.open(link,"_blank")
//   }
// }

function App() {
  const [search,setSerch] = useState("")
  const [dataInfo,setDataInfo] = useState([])
  const [loading,setLoding] = useState(false)

  const handleChange = (e) =>{
      setSerch(e.target.value)
  }
  const handleClick = async()=>{
    if(!search){
      return
    }
    setLoding(true)
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    let res = await fetch(url)
    let data = await res.json()
    setDataInfo(data)
    setLoding(false)
  }
console.log(dataInfo)
  return ( 
    <div className="App">
      {dataInfo.length>0 ? <div>{dataInfo.map((item,i)=>{
        return <div  className ="info" key={i}>
            <div><span>WORD : </span>{item.word}</div>
            <div><span>Parts of speech: </span>{item.meanings[0].partOfSpeech}</div>
            <div><span>Defination : </span>"{item.meanings[0].definitions[0].definition}"</div>
            <div><span>Defination : </span>"{item.meanings[1].definitions[0].definition}"</div>
          </div>
      })}</div>: <div>
          <h3>Find out meaning here!</h3>
          <div className='list'> 
              <input type="text" name="serach" value={search} onChange={handleChange} id="" />
              <button type="submit" onClick={()=>handleClick()}>submit</button>
      </div>
      </div>}
  
    </div>
  );
}

export default App;
