import React, { useEffect, useState } from 'react'

interface UserType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const FetchData = () => {

    const [id, setId] = useState<null | number>(null)
    const [data, setData] = useState<UserType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<null | any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                console.log(res)
                if (!res.ok) {
                    throw new Error("Please try again");
                }
                const json = await res.json()
                setData(json)
                setError(false)
            }
            catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
                
            }
        }
        if (id !== null) fetchData();
    }, [id])

    if (loading) return <div>Loading.....</div>
    if (error) return (
        <>
            <div>Error..... </div>
            <div><button onClick={() => { setId(null) ; setData(null) ;setError(false)}}>Try Again</button></div>
        </>
    )


    return (
        <>
            <div>FetchData</div>
            <div><input onChange={(e) => setId(Number(e.target.value))} type='number' value={id ?? ""}></input></div>
            <div> Name : {data?.name} Username : {data?.username}Email : {data?.email}</div>
        </>
    )
}

export default FetchData