import App from './app.js';
import Home from './home.js';
import Profile from './profile.js';
import Post from './post.js';
import PostRead from './read.js';

export const url = {
    home: '/',
    post: '/post',
    read: '/post/',
    profile: '/profile'
};


export const routes = {
    path: '/',
    component: App,
    indexRoute: {
        component: Home
    },
    childRoutes: [{
            path: 'post/:id',
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
