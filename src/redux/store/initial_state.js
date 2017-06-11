export default {
    modal: {
        toggle: {
            openLogin: false,
            openSignup: false
        }
    },
    header: {
        changeBgc: {
            byEle: ''
        }
    },
    drawer: {
        isOpen: false
    },
    user: {
        logged: !!Cookies.get('currUser')
    },
    snackbar: {
        isOpen: false,
        msg: '',
        duration: 0
    },
    post: {
        list: {
            all: []
        }
    }
}
