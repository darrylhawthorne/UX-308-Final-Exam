import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import InputBar from "./InputBar"

export default function({scrollToBottom, sendMessage, setInputBarText, inputBarText}){
    
    const quickActions = ['Buzz Cut', '1 Blade', 'Regular Cut', 'Beard Trim'];
    
    return(
        <View style={styles.container}>

            {/* Part 1: Hero Unit - top half with image */}
            <View style={styles.hero}>
                <Image 
                    source={{ uri: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop' }}
                    style={styles.heroImage}
                    resizeMode="cover"
                />
                <View style={styles.heroOverlay}>
                    <Text style={styles.heroTitle}>Darryl's Cuts</Text>
                    <Text style={styles.heroSubtitle}>Premium Barbershop · Brantford</Text>
                </View>
            </View>

            {/* Part 2: Chat input - typing here triggers the chat view */}
            <InputBar 
                onSendPressed={sendMessage} 
                onSizeChange={() => scrollToBottom(false)}
                onChangeText={setInputBarText}
                text={inputBarText}
            />

            {/* Part 3: Quick action buttons */}
            <View style={styles.buttonsContainer}>
                {quickActions.map((action) => (
                    <TouchableHighlight
                        key={action}
                        style={styles.actionButton}
                        onPress={() => setInputBarText(action)}
                        underlayColor="#55c025"
                    >
                        <Text style={styles.actionButtonText}>{action}</Text>
                    </TouchableHighlight>
                ))}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    // Hero takes up roughly the top half
    hero: {
        flex: 1,
        position: 'relative',
        minHeight: 300,
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    heroOverlay: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    heroTitle: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0,0,0,0.85)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 6,
    },
    heroSubtitle: {
        fontSize: 16,
        color: 'white',
        marginTop: 4,
        textShadowColor: 'rgba(0,0,0,0.85)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    // Buttons sit below the input bar
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 12,
        gap: 8,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    actionButton: {
        backgroundColor: '#66db30',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 4,
    },
    actionButtonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
    },
});