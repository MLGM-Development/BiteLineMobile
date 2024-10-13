import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    authContainer: {
        flex: 1,  // Usa flex: 1 per garantire che il contenitore occupi tutto lo spazio disponibile
        alignItems: 'center',  // Centro orizzontale
        justifyContent: 'center',  // Centro verticale
        padding: 20,  // Aggiungi padding per evitare che i componenti tocchino i bordi dello schermo
    },

    labelAuth: {
        color: '#707371',
        fontWeight: 'bold',
        alignSelf: 'flex-start',  // Allinea l'etichetta a sinistra
        marginBottom: 5,  // Spazio tra l'etichetta e l'input
        marginLeft: 57,
    }, 

    textAuth: {
        color: '#fff',
    },

    titleAut: {
        fontSize: 40,
        color: '#fbfbfb',
        fontWeight: 'bold',
        alignSelf: 'flex-start',  
        marginBottom: 20,  // Aggiungi un margine per separare il titolo dagli altri elementi
        marginLeft: 57,
    },

    inputAuth: {
        borderColor: '#707371',
        borderWidth: 1,
        borderRadius: 10,
        width: '70%',
        paddingHorizontal: 10,  // Aggiungi padding per migliorare l'usabilità
        height: 50,  // Imposta un'altezza fissa per gli input
        marginBottom: 10,  // Spazio tra il campo input e il messaggio di errore
    },

    errorAuth: {
        color: '#FF1C1C',
        fontSize: 14,  // Rende il testo di errore più leggibile
        marginTop: 5,  // Spazio tra l'input e il messaggio di errore
        textAlign: 'left',  // Allinea l'errore a sinistra
    },

    buttonAuth: {
        alignSelf: 'flex-start',
        marginLeft: 55,
        backgroundColor: '#1c4370',
        width: '70%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
});

export default style;
