import faunadb from 'faunadb';
import faunaConnection from './faunaConnection';

const { Count, Documents, Collection } = faunadb.query;
const client = faunaConnection;

export default async function getApplicationCount() {

    return await client.query(
        Count(
            Documents(
                Collection(
                    'contact-forms'
                )
            )
        )
    )
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log('error', error);
            return 0;
        });
}
