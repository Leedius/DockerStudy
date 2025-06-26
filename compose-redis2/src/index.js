const redis = require('redis');

const client = redis.createClient({
    url: 'redis://redis:6379'  // 서비스명:포트
});

client.connect();

client.on('connect', () => {
    console.log('Redis 연결 성공');
});

client.set('message', 'Hello Redis!');
client.get('message').then((msg) => console.log('저장된 값:', msg));

