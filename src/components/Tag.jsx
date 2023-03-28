import React, { useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const Tag = () => {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className=' w-1/2 bg-blue-600 flex flex-col items-center border-black border rounded-[10px] gap-y-3 mb-20'>
      <h1 className=' underline mt-5 mb-3 font-bold uppercase'> A Random {tag} Gifs</h1>
      {
        loading ? (<Spinner />) : (<img src={gif} width="450px" height={"450px"} />)
      }

      <input type="text"
        className=" w-8/12 bg-white rounded-[8px] text-lg py-2 font-bold mb-3 text-center"
        value={tag}
        onChange={(event) => setTag(event.target.value)}
      />

      <button onClick={() => fetchData(tag)}
        className=" w-8/12 bg-white rounded-[8px] text-lg py-2 font-bold mb-3">
        Generate
      </button>
    </div>
  )
}

export default Tag