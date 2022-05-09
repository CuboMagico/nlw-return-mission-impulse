import { styles } from "./styles"

import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native"

import { theme } from "../../theme"

interface Props extends TouchableOpacityProps {
    isLoading: boolean
}


export const SubmitButton = ({ isLoading, ...rest } : Props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            {
                isLoading ? <ActivityIndicator color={theme.colors.text_on_brand_color} /> : <Text>Enviar Feedback</Text>
            }
        </TouchableOpacity>
    )
}