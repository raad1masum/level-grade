import React, { useState } from "react";

// create an interface for your state
interface info {
    text: String
}

const Home = () => {
    // create a useState hook for a state variable
    const [infoState, setInfoState] = useState<info>({
        text: "",
    })

    const onchange = (e: any) => {
        const newValue = e.currentTarget.value
        setInfoState({ text: newValue })
    }

    const algo = (str: String) => {
        const wordCount: number = str.trim().split(/\s+/).length
        if (str.length == 0) {
            return 0
        } else {
            return wordCount
        }
    }

    return (
        <>
            <h1>Level Grade</h1>
            <textarea name="name" onChange={onchange}></textarea>
            <p>{algo(infoState.text)}</p>
        </>
    )
}

export default Home;
