import { styles } from "./styles"

import { useState } from "react"

import { View, TextInput, Image, TouchableOpacity, Text } from "react-native"
import { ArrowLeft } from "phosphor-react-native"
import { captureScreen } from "react-native-view-shot"
import { api } from "../../libs/api"
import * as FileSystem from "expo-file-system"

import { FeedbackType } from "../Widget"
import { feedbackTypes } from "../../utils/feedbackTypes"
import { theme } from "../../theme"


import { ScreenshotButton } from "../ScreenshotButton"
import { SubmitButton } from "../SubmitButton"


interface Props {
    feedbackType: FeedbackType
    onFeedbackCanceled: () => void
    onFeedbackSent: () => void
}



export const Form = ({ feedbackType, onFeedbackCanceled, onFeedbackSent } : Props) => {

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [isFeedbackSending, setIsFeedbackSending] = useState(false)
    const [comment, setComment] = useState("")


    const takeScreenshot = async () => {
        
        try {
            const shot = await captureScreen({
                format: "jpg",
                quality: 0.8
            }).then()

            setScreenshot(shot)

        } catch (error) {
            console.log("Error")
        }

    }

    const removeScreenshot = () => {
        setScreenshot(null)
    }


    const sendFeedback = async () => {
        if (isFeedbackSending) {
            return
        }

        setIsFeedbackSending(true)
        const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: "base64" })


        try {
            await api.post("/feedbacks", {
                type : feedbackType,
                comment,
                screenshot : `data:image/png;base64, ${screenshotBase64}`
            })

            onFeedbackSent()

            setIsFeedbackSending(false)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={onFeedbackCanceled}
                >
                    <ArrowLeft
                        size={24}
                        weight="bold"
                        color={theme.colors.text_secondary}
                    />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Image source={feedbackTypeInfo.image} style={styles.image} />
                    
                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>

            <TextInput
                onChangeText={setComment}
                multiline
                style={styles.input}
                placeholder="Algo não está funcionando?"
                placeholderTextColor={theme.colors.text_secondary}
            />

            <View style={styles.footer}>
                <ScreenshotButton
                    screenshot={screenshot}
                    onTakeShoot={takeScreenshot}
                    onRemoveShoot={removeScreenshot}
                />

                <SubmitButton
                    onPress={sendFeedback}
                    isLoading={isFeedbackSending}
                />
            </View>
        </View>
    )
}