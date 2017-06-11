let host = 'http://localhost:3000';

export default {
    host: host,
    upload: {
        img: {
            type: 'PUT',
            url: host + '/upload/img'
        }
    },
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
        },
        updateInfo: {
            type: 'PUT',
            url: host + '/user'
        },
        updateHeadImg: {
            type: 'PUT',
            url: host + '/headImg'
        }
    },
    post: {
        post: {
            type: 'POST',
            url: host + '/post'
        },
        list: {
            all: {
                type: 'GET',
                url: host + '/post/list/all'
            }
        }
    },
    home: {
        carouselImgs: {
            type: 'GET',
            url: host + '/assets'
        }
    }
}
