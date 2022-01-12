import faunadb from 'faunadb';

const options = {
    secret: process.env.FAUNA_DB_KEY,
    domain: 'db.us.fauna.com',
    port: 443,
    scheme: 'https'
};

const faunaConnection = new faunadb.Client(options);

export default faunaConnection;
