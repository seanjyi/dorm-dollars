import axios from 'axios'

const apiPath = 'http://127.0.0.1:5000'
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
export async function authenticate(data, setLoggedIn, userData, setUserData) {
    try {
        const url = apiPath + '/login'
        const response = await axios.post(url, data, headers)

        setLoggedIn(true);
        setUserData({
            ...userData,
            username: response.data.username,
            firstName: response.data.first_name,
            lastName: response.data.last_name,
            email: response.data.email,
            phoneNumber: response.data.phone_number,
            userId: response.data.userid
        })

    } catch (error) {
        console.error('Error:', error)
    }
}

export async function fetchTransactions(data, setTransactions) {
    try {
        const url = apiPath + '/transactions'
        const response = await axios.post(url, data, headers)

        setTransactions(response.data)
        console.log(response.data)

    } catch (error) {
        console.error('Error:', error)
    }
}

export async function addTransaction(data) {
    try {
        const url = apiPath + '/add_transaction'
        const response = await axios.post(url, data, headers)

        console.log(response)
    } catch (error) {
        console.error('Error:', error)
    }
}