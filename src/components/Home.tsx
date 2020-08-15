import React, { useState } from "react";
import syllable from "syllable"

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
        if (str.length === 0) {
            return 0
        } else {
            let words: String[] = str.trim().split(/\s+/)
            let wordCount: number = words.length
            let sentenceCount: number = str.split(". ").length
            let syllableCount: number = 0

            for (let word in words) {
                word = word.toLowerCase()
                syllableCount += syllable(words[word].toString())
            }

            const ASL: number = wordCount / sentenceCount
            const ASW: number = syllableCount / wordCount

            const sentenceWeight = 0.39
            const wordWeight = 11.8
            const adjustment = 15.59

            const grade = (sentenceWeight * ASL) + (wordWeight * ASW) - adjustment

            if (grade < 0) {
                return 0
            } else {
                return grade.toFixed(2)
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
