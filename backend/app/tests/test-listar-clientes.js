import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 30, // 30 usuarios simultáneos
  duration: '1m', // durante 1 minuto
};

export default function () {
  const url = 'https://caso-practico-final.onrender.com/api/clientes'; // Endpoint de listar clientes
  let res = http.get(url);
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
