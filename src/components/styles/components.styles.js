export const commonComponentStyles = {
    // AppBar styles 
    appBar: {
        backgroundColor: '#fff'
    },
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    // login styles
    loginBtn: {
        width: "100%",
        backgroundColor: "#000",
        marginTop: "1rem"
    },
    errorCard: {
        marginTop: "1rem",
        borderColor: "red"
    },
    errorCardContent: {
        display: "flex",
        alignItems: "center",
    },
    infoOutlineIcon: {
        color: "red",
        marginRight: "0.5rem"
    },
    chatContainer: (isSender) => {
        return {
            display: "flex",
            flexDirection: "row",
            marginTop: "1rem",
            justifyContent: isSender && "flex-end",
            marginRight: isSender && "10px"
        }
    },
    toyOutline: {
        color: "blue",
        marginRight: "16px"
    },
    chatCard: (isSender) => {
        return {
            width: "300px",
            backgroundColor: isSender ? "#9bf2b2" : "#c9d4cd",
            borderRadius: "5px"
        }
    },
    listCard : {
        marginTop: "1rem",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: "5px"
    }
}