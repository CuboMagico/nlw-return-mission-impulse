import { styles } from "./styles"

import React, { useRef, useState } from "react"
import { TouchableOpacity } from "react-native"

import BottomSheet from "@gorhom/bottom-sheet"
import { gestureHandlerRootHOC } from "react-native-gesture-handler"
import { ChatTeardropDots } from "phosphor-react-native"


import { theme } from "../../theme"
import { feedbackTypes } from "../../utils/feedbackTypes"

import { Options } from "../Options"
import { Form } from "../Form"
import { Success } from "../Sucess"


export type FeedbackType = keyof typeof feedbackTypes


const Widget = () => {

    const bottomSheetRed = useRef<BottomSheet>(null)

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)


    const toggleBottomSheet = () => {
        bottomSheetRed.current?.expand()
    }

    
    const restartFeedback = () => {
        setFeedbackType(null)
        setFeedbackSent(false)
    }


    const feedbackClickedSent = () => {
        setFeedbackSent(true)
    }


    return (
        <>
            <TouchableOpacity
                style={styles.button}
                onPress={toggleBottomSheet}
            >
                <ChatTeardropDots
                    size={24}
                    weight="bold"
                    color={theme.colors.text_on_brand_color}
                />
            </TouchableOpacity>

            <BottomSheet
                    ref={bottomSheetRed}
                    snapPoints={[1, 280]}
                    backgroundStyle={styles.modal}
                    handleIndicatorStyle={styles.indicator}
            >
                {
                    feedbackSent ? <Success onSendAnotherFeedback={restartFeedback} /> : 
                    <>
                        {
                            feedbackType ? 
                            <Form
                                onFeedbackSent={feedbackClickedSent}
                                onFeedbackCanceled={restartFeedback}
                                feedbackType={feedbackType} 
                            /> : <Options onFeedbackTypeWasSelected={setFeedbackType} />
                        }
                    </>
                }
            </BottomSheet>
        </>
    )
}

export default gestureHandlerRootHOC(Widget)