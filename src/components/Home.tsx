import React, { useState } from "react";
import syllable from "syllable"

import '../assets/css/main.css'

interface info {
    text: String
}

const Home = () => {
    const [infoState, setInfoState] = useState<info>({
        text: "",
    })

    const onchange = (e: any) => {
        const newValue = e.currentTarget.value
        setInfoState({ text: newValue })
    }

    const fleschkincaid = (str: String) => {
        if (str.length === 0) {
            return "Enter Text to Calculate Grade Level"
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
                return "Invalid Text"
            } else {
                return "Grade Level: " + grade.toFixed(2)
            }
        }
    }

    return (
        <>
            <div className={"container"}>
                <h1>Level Grade</h1>
                <textarea placeholder="Enter Text to Calculate Grade Level" onChange={onchange}></textarea>
                <p>{fleschkincaid(infoState.text)}</p>
            </div>
        </>
    )
}

export default Home;
