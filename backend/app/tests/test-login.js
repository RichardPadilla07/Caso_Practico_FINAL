import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 30, // 30 usuarios simultáneos
  duration: '1m', // durante 1 minuto
};

export default function () {
  const url = 'https://caso-practico-final.onrender.com/api/usuarios/login'; // URL de backend en la nube
  const payload = JSON.stringify({
    email: 'richardpadilla2dod@gmail.com', // Cambia por un usuario válido en tu BD
    password: '222'    // Cambia por la contraseña válida
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  let res = http.post(url, payload, params);
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
