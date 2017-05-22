let host = 'http://localhost:3000';

export default {
    user: {
        checkUsername: {
            type: 'GET',
            url: host + '/user/check/username'
        },
        signup: {
            type: 'POST',
            url: host + '/user'
        },
        login: {
            type: 'GET',
            url: host + '/user'
        }
    }
}
