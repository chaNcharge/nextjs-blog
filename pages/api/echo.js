export default function handler(req, res) {
    /*
    Send a request with curl using the following command:
    curl -X POST -H "Content-Type: application/json" \
    -d '{"name":"Ethan Cha","message":"Hello from cURL sent as a POST request!"}' \
    http://localhost:3000/api/echo
    */
    const { name, message } = req.body;
    res.status(200).json({ name: name, text: message });
}