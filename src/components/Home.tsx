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
            const words: Array<String> = str.trim().split(/\s+/)
            const wordCount: number = words.length
            const sentenceCount: number = str.split(". ").length
            let syllableCount: number = 0

            words.forEach((word) => {
                word = word.toLowerCase()
                syllableCount += syllable(words[word].toString())
            })

            const ASL: number = wordCount / sentenceCount
            const ASW: number = syllableCount / wordCount

            const sentenceWeight = 0.39
            const wordWeight = 11.8
            const adjustment = 15.59

            const grade = (sentenceWeight * ASL) + (wordWeight * ASW) - adjustment

            if (grade < 0) {
                return "Invalid Text"
            } else if (grade > 20) {
                return "Grade Level: 20"
            } else {
                return "Grade Level: " + grade.toFixed(2)
            }
        }
    }

    return (
        <div className="container">
            <div className="top">
                <h1>Level Grade</h1>
                <p style={fleschkincaid(infoState.text) === "Invalid Text" ? {color: "#ff6188"} : {color:"#00d787"}}>{fleschkincaid(infoState.text)}</p>
                <textarea placeholder="Enter Text to Calculate Grade Level" onChange={onchange}></textarea>
            </div>
        </div>
    )
}

export default Home;
