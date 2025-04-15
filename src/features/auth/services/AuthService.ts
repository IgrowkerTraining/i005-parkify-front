
const authService = {

    async login() {
        //llamado a la api login
        return {
            token: "token",
            user: {
                email: "Armenia Parking",
            }
        }
    },
    async registerUser() {
      try {
        //const response = await axios.post("/api/register-user", userData);
        //return response.data;
        return true
      } catch (error) {
        console.error("Error al registrar el usuario:", error);
        throw error; 
      }
    }
  
  
  };
  
  export default authService;