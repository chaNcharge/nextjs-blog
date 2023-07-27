import { NextApiRequest, NextApiResponse } from 'next';

interface RequestBody {
    name: string;
    message: string;
}

/**
 * Send a request with curl using the following command:
 * 
 * curl -X POST -H "Content-Type: application/json" \
 * -d '{"name":"Ethan Cha","message":"Hello from cURL sent as a POST request!"}' \
 * http://localhost:3000/api/echo
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { name, message }: RequestBody = req.body;
    res.status(200).json({ name: name, text: message });
}
