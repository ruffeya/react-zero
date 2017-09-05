let baseUrl = 'http://localhost:7777';
if (process.env.NODE_ENV === 'production') {
    baseUrl = '/api/v1';
}

export default {
    baseUrl
};
