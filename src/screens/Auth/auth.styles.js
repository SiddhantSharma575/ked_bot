export const AuthStyles = {
    loginTab: (tabValue) => {
        return {
            backgroundColor: tabValue === 0 ? "#47b568" : "#ccc",
            color: "#000",
            borderRadius: "10px"
        }
    },
    registerTab : (tabValue) => {
        return {
            backgroundColor: tabValue === 1 ? "#47b568" : "#ccc",
            color: "#000",
            marginLeft: "10px",
            borderRadius: "10px"
        }
    }

}