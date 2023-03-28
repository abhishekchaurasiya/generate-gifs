import React from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

const Random = () => {
 
  const { gif, loading, fetchData } = useGif();

  return (
    <div className=' w-1/2 bg-green-600 flex flex-col items-center border-black border rounded-[10px] gap-y-3'>
      <h1 className=' underline mt-5 mb-3 font-bold uppercase'> A Random Gifs</h1>
      {
        loading ? (<Spinner />) : (<img src={gif} width="450px" />)
      }

      <button onClick={() => fetchData()}
        className=" w-8/12 bg-white rounded-[8px] text-lg py-2 font-bold mb-3">
        Generate Gifs
      </button>
    </div>
  )
}

export default Random
