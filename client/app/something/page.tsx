"use client";

import React from 'react'

async function fetchFatch(url:any): Promise<string> {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch');
    }
    const data = await res.json();
    return data.message;
}

function Page() {
    const [message, setMessage] = React.useState<string | null>(null);
    React.useEffect(() => {
        fetchFatch(new URL('/api', window.location.origin)).then(setMessage);
    },[]);
  return (
    <div>
        <h1>
            {message}
        </h1>
        
    </div>
  )
}

export default Page