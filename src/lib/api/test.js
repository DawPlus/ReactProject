
import client from './client';

// 테스트 
export const test = () =>
  client.get('https://jsonplaceholder.typicode.com/todos/1');
