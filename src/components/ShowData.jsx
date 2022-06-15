import React from 'react'

function ShowData({dataInfo,setBack}) {
  return (
        <div>
            {dataInfo.map((item,i)=>{
        return <div  className ="info" key={i}>
            <div><span>WORD : </span>{item.word}</div>
            <div><span>Parts of speech: </span>{item.meanings[0].partOfSpeech}</div>
            <div><span>Defination : </span>"{item.meanings[0].definitions[0].definition ? item.meanings[0].definitions[0].definition : "not"}"</div>
            <div><span>Defination : </span>"{item.meanings[1].definitions[0].definition ? item.meanings[1].definitions[0].definition : "not"}"</div>
        </div>
      })}
      <button onClick={()=>setBack(true)}>Go back</button>
      </div>
  )
}

export default ShowData