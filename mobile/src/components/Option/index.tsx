import { styles } from "./styles"

import { TouchableOpacity, TouchableOpacityProps, Image, ImageProps, Text } from "react-native"

interface Props extends TouchableOpacityProps {
    title: string
    image: ImageProps
}

export const Option = ({ title, image, ...rest } : Props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            <Image
                source={image}
                style={styles.image}
            />

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}