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

    const fleschkincaid = (str: String) => {
        if (str.length == 0) {
            return 0
        } else {
            const words: String[] = str.trim().split(/\s+/)
            const wordCount: number = words.length
            const sentenceCount: number = str.split(". ").length
            const ASL: number = wordCount / sentenceCount

            for (let i of words) {
                console.log(i)
            }
        }
    }

    return (
        <>
            <h1>Level Grade</h1>
            <textarea name="name" onChange={onchange}></textarea>
            <p>{fleschkincaid(infoState.text)}</p>
        </>
    )
}
export default Home;
