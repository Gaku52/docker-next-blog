export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('GitHub webhook triggered');
    // ここで再デプロイ処理を行うか、他の処理を追加できます。
    res.status(200).json({ message: 'Webhook received' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}