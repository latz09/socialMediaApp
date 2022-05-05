import { MongoClient } from 'mongodb';

async function connectDatabase() {
	const client = MongoClient.connect(
		'mongodb+srv://latz:68383441@friendposts.e85du.mongodb.net/createdposts?retryWrites=true&w=majority'
	);
}

async function insertDocument(client, document) {
	const db = client.db();

	await db.collection('createdPosts').insertOne(document);
}

async function handler(req, res) {
	if (req.method === 'POST') {
		const { name, text } = req.body;

		if (!name || !text) {
			res.status(422).json({ message: 'All fields are required' });
		}

		const newPost = {
			name,
			text,
		};

		let client;

		try {
			client = await connectDatabase();
		} catch (error) {
			res.status(500).json({ messge: 'Connecting to the database failed' });
			return;
		}

        try {
            await insertDocument(client, newPost) 
            client.close()           
        } catch (error) {
            res.status(500).json({message: 'Inserting data failed'})
            return            
        }

        res.status(201).json({message: 'Post sent'})

	}
}

export default handler;