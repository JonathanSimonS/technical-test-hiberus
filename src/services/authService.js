import axios from 'axios';
const baseUrl = 'http://51.38.51.187:5050/api/v1/auth';

/**
 * 
 * @param {string} email - User email to login 
 * @param {string} password - User email to login
 * @returns JWT Session Token
 */
const login = async (email, password) => {
    try {
        const response = await axios
        .post(`${baseUrl}/log-in`,{
            "email":email,
            "password": password
        })

        return response.data;

    } catch (error) {
        throw error.response.data.message;
    }
}

const register = async (email, password, name, surname) => {
    try {
        const response = await axios
        .post(`${baseUrl}/sign-up`, {
            "email": email,
            "password": password,
            "name": name,
            "surname": surname
        })
        return response.data
    
    } catch (error){
        throw error.response.data.message;
      }
}


export { login, register };