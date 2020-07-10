import client from './client';

// 로그인
export const login = ({ id, password }) =>{return client.post('/api/auth/login', { id, password })};

// 로그아웃
export const logout = () => client.post('/api/auth/logout');

// 로그아웃
export const getSession = () => client.post('/api/auth/getSession');


// 로그인 상태 확인
export const checkTokken = (tokken) => client.post('/api/auth/check', {tokken})

export const user = () => client.get(`/api/user`);