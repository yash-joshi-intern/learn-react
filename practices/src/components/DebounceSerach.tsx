import React, { useEffect, useState } from 'react'

function useDebounce (value, delay = 300) {

    const [debounced, setDebounced] = useState('value');

    useEffect(()=> {
        const t = setTimeout(()=> {
            setDebounced(value)
        },delay)

        return clearTimeout(t)
    }, [value, delay])

    return debounced;
}

const DebounceSerach = () => {

    const [query, setQuery] = useState('')
    const debounceQuery = useDebounce(query, 1000)

    const handleBounce = (e : any) => {
        // e.preventDefault();
        // setQuery

        useEffect(()=>{
            if(debounceQuery) console.log('Fetching : ', debounceQuery)
        },[debounceQuery])
    }

  return (
    <div>
        <div>DebounceSerach</div>
        <input type='text' onChange={handleBounce} value={query} placeholder='Enter uery'></input>

    </div>
  )
}

export default DebounceSerach