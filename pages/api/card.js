import { connectToDatabase } from '/lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      let { db } = await connectToDatabase();
      const item = await db.collection('cards').insertOne(req.body);
      return res.status(200).json({ 
        RequestId: item.insertedId.toString(), 
        Amount: req.body.Amount
      });
    } catch (error) {
      return res.status(500).json({
        message: new Error(error).message,
      });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}
