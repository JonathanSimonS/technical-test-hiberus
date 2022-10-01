import axios from 'axios';
const baseUrl = 'http://51.38.51.187:5050/api/v1/users'


const getAllUsers  = async (token) =>{
    try {
        const { tokenType, accessToken } = token;
        const response = await axios.get(`${baseUrl}`, {
            headers: {
                'Authorization': `${tokenType} ${accessToken}`,
            }
        })
        const users = response.data.items; 
        console.log(users)
        return users;

    } catch (error) {
        console.log(error)
    }
}

export {getAllUsers};

// 'http://51.38.51.187:5050/api/v1/users' \
// -H 'accept: application/json' \
// -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVjZTZlMjQyLTY3OTQtNDM0Mi05OTk3LTk0MzgxN2EzZjQzMiIsImRhdGUiOiIyMDIyLTEwLTAxVDE0OjM1OjM5LjYxM1oiLCJpYXQiOjE2NjQ2MzQ5MzksImV4cCI6MTY2NDcyMTMzOX0.87hFZvdDkKwzYuHSSN7ei0AjAIu-ryW_J1wYBniAvbI'
