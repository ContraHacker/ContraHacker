import faunadb from 'faunadb';
const { Collection, Create } = faunadb.query;
import faunaConnection from '../../lib/faunaConnection';

const client = faunaConnection;

export default async function submitForm(req, res) {
    
    const data = req.body;

    await client.query(Create(Collection('contact-forms'), { data }))
        .then(() => {
            res.status(200).json({ message: 'Your message has been sent!' });
        })
        .catch((err) => {
            console.log('err', err);
            res.status(500).json({ message: 'There was an error sending your message. Please try again.' });
        });
}
