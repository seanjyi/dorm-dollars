import axios from 'axios'

const apiPath = 'http://localhost:5000/'
const headers = {
    headers: {
        'Content-Type': 'application/json'
    }
}

/**
 * Authenticates user based based on their username and password.
 * 
 * Request body:
 * {
 *   username: <username>,
 *   password: <password>
 * }
 * 
 * @param {JSON} data 
 * @param {function} setLoggedIn 
 * @param {JSON} userData 
 * @param {function} setUserData 
 */
async function authenticate(data, setLoggedIn, userData, setUserData) {
    try {
        const url = apiPath + '/login'
        const response = await axios.post(url, data, headers)

        setLoggedIn(true);
        setUserData({
            ...userData,
            username: response.username,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            phoneNumber: response.phoneNumber,
            userId: response.userId
        })

    } catch (error) {
        console.error('Error:', error)
    }
}