import cors from '../../middleware/cors';
import data from '../../data/pedoman-sku';

export default async (req, res) => {
	await cors(req, res)

	res.setHeader('Cache-Control', 'max-age=86400');
	res.statusCode = 200;
  res.json(data)
}