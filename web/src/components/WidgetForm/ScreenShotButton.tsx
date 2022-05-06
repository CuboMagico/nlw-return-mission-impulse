import { Camera, Trash } from "phosphor-react"

import html2canvas from "html2canvas"

import { useState } from "react"
import { Loading } from "../Loading"


interface ScreenShotButtonProps {
    screenshot: string | null
    onScreenshotTook: (screenshot : string | null) => void
}



export const ScreenShotButton = ({ screenshot, onScreenshotTook } : ScreenShotButtonProps) => {

    const [isTakingScreenShot, setIsTakingScreenShot] = useState(false)

    const handleTakeScrenShot = async () => {
        setIsTakingScreenShot(true)

        const canvas = await html2canvas(document.querySelector("html")!)
        const base64image = canvas.toDataURL("image/png")

        onScreenshotTook(base64image)

        setIsTakingScreenShot(false)
    }


    if (screenshot) {
        return (
            <button
                className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100"
                type="button"
                style={{backgroundImage: `url(${screenshot})`, backgroundPosition: "bottom right", backgroundSize: 180}}
                onClick={() => onScreenshotTook(null)}
            >
                <Trash weight="fill" />
            </button>
        )
    }


    return (
        <button onClick={handleTakeScrenShot} type="button" className="p-2 rounded-md bg-zinc-800 border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500">
            { isTakingScreenShot ? <Loading /> : <Camera className="w-6 h-6" />  }
        </button>
    )
}