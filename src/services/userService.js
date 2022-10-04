import axios from 'axios';
const baseUrl = 'http://51.38.51.187:5050/api/v1/users'
const tokenType = 'Bearer'

/**
 * 
 * @param {string} token - User access token 
 * @returns All logged user data
 */
const getMeUser = async (token) =>{
    try {
        const response = await axios.get(`${baseUrl}/me`, {
            headers: {
                'Authorization': `${tokenType} ${token}`,
            }
        })
        const meUser = response.data; 
        return meUser;

    } catch (error) {
        throw error;
    }
}

/**
 * 
 * @param {string} token - User access token
 * @returns An array of User
 */
const getAllUsers  = async (token) =>{
    try {
        const response = await axios.get(`${baseUrl}`, {
            headers: {
                'Authorization': `${tokenType} ${token}`,
            }
        })
        const users = response.data.items; 
        return users;

    } catch (error) {
        throw error;
    }
}

/**
 * 
 * @param {Object} token - User access token
 * @param {string} id - User ID to edit
 * @param {string} email - User email to edit
 * @param {string} name - User name to edit
 * @param {string} surname - User surname to edit
 * @returns Update user
 */
const updateUser = async (token, id, email, name, surname) => {
    
    const options = {
        method: 'PUT',
        url: `${baseUrl}/${id}`,
        headers: {
            'Authorization': `${tokenType} ${token}`,
        },
        data: {
            email: email,
            name: name,
            surname: surname,
            id: id
        }
    };
    axios.request(options).then(function (response) {

    }).catch(function (error) {
        console.error(error);
    });
}

/**
 * 
 * @param {Object} token - User access token
 * @param {string} id - User ID to delete
 */
const deleteUser = async (token, id) => {

    const options = {
        method: 'DELETE',
        url: `${baseUrl}/${id}`,
        headers: {
          Authorization: `${tokenType} ${token}`
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
}

export {getMeUser, getAllUsers, updateUser, deleteUser};
