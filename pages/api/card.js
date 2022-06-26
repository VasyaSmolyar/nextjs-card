import { connectToDatabase } from '/lib/mongodb';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      let { db } = await connectToDatabase();
      const body = JSON.parse(req.body);
      const item = await db.collection('cards').insertOne(body);
      return res.status(200).json({ 
        RequestId: item.inserted_id.toString(), 
        Amount: body.amount
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
