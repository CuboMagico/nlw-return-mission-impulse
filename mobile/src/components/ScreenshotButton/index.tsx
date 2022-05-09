import { styles } from "./styles"

import { View, TouchableOpacity, Image } from "react-native"
import { Trash, Camera } from "phosphor-react-native"
import { theme } from "../../theme"

interface Props {
    screenshot: string | null
    onTakeShoot: () => void
    onRemoveShoot: () => void
}

export const ScreenshotButton = ({ screenshot, onTakeShoot, onRemoveShoot } : Props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={screenshot ? onRemoveShoot : onTakeShoot}
        >
            {
                screenshot ?
                <View>
                    <Image
                        style={styles.image}
                        source={{ uri: screenshot }}
                    />
                    <Trash 
                        size={22}
                        color={theme.colors.text_secondary}
                        weight="fill"
                        style={styles.removeIcon}
                    />
                </View>
                 : 
                <Camera
                    size={24}
                    color={theme.colors.text_secondary}
                    weight="bold"
                />
            }
        </TouchableOpacity>
    )
}