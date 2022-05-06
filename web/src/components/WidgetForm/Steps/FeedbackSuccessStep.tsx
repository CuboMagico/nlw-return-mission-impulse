import { CloseButton } from "../../CloseButton"

import successImageUrl from "../../../assets/success.svg"


interface FeedbackSuccesstStepProps {
    onFeedbackRestartRequested: () => void
}


export const FeedbackSuccesstStep = ({onFeedbackRestartRequested} : FeedbackSuccesstStepProps) => {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={successImageUrl} alt="Imagem de sucesso" />
            

                <span className="text-xl mt-2">
                    Agradecemos o feedback!
                </span>

                <button
                    onClick={onFeedbackRestartRequested}
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}