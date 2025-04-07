
const authService = {
    async login2(email: string, password: string) {
        // try {
        //   const response = await axios.post('/login',{
        //     email,
        //     password
        //   });
          
        //   console.log(response);
        // } catch (error) {
        //   console.error(error);
        // }
    },
    async login(email: string, password: string) {
        return {
            token: "token",
            user: {
                email: "Armenia Parking",
                password: "password"
            }
        }
    },
  
  
  };
  
  export default authService;