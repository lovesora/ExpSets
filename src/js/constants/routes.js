import App from '../app.js';
import Home from '../home/home.js';
import PostRead from '../post/read.js';
import Post from '../post/post.js';
import Profile from '../user/profile.js';


export const url = {
    home: '/',
    post: '/post',
    read: '/post/:id',
    profile: '/profile'
};


export const routes = {
    path: '/',
    component: App,
    indexRoute: {
        component: Home
    },
    childRoutes: [{
            path: 'read',
            component: PostRead
        }, {
            path: 'post',
            component: Post
        }, {
            path: 'qa',
            component: Post
        }, {
            path: 'profile',
            component: Profile
        }
    ]
};
