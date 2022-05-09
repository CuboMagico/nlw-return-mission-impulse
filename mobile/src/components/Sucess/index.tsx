import { styles } from "./styles"

import { View, Image, Text, TouchableOpacity } from "react-native"

import successImg from "../../assets/success.png"
import { Copyright } from "phosphor-react-native"

interface Props {
    onSendAnotherFeedback: () => void
}


export const Success = ({ onSendAnotherFeedback } : Props) => {
    return (
        <View style={styles.container}>
            <Image
                source={successImg}
                style={styles.image}
            />

            <Text style={styles.title}>
                Agradecemos o feedback
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={onSendAnotherFeedback}
            >
                <Text style={styles.buttonTitle}>
                    Quero enviar outro
                </Text>
            </TouchableOpacity>

            <Copyright />
        </View>
    )
}