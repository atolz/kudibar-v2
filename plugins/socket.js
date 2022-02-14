// require('dotenv').config();
import Vue from 'vue';
import io from 'socket.io-client';

const sio = io(process.env.SOCKET_URL, {
    path: '/sio'
});

Vue.prototype.$sio = sio;
