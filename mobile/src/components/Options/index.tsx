import { styles } from "./styles"

import { Copyright } from "../Copyright"
import { Option } from "../Option"

import { View, Text } from "react-native"

import { feedbackTypes } from "../../utils/feedbackTypes"
import { FeedbackType } from "../Widget"

interface Props {
    onFeedbackTypeWasSelected: (feedbackType : FeedbackType) => void
}


export const Options = ({ onFeedbackTypeWasSelected } : Props ) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Deixe seu feedback
            </Text>

            <View style={styles.options}>
                {
                    Object.entries(feedbackTypes).map(([key, value]) => (
                        <Option
                            key={key}
                            title={value.title}
                            image={value.image}
                            onPress={() => onFeedbackTypeWasSelected(key as FeedbackType)}
                        />
                    ))
                }
            </View>

            <Copyright />
        </View>
    )
}