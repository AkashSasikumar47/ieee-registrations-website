import express  from 'express';
import shortid from 'shortid';
import { db } from './db.js'; // Ensure db is initialized correctly as shown above
import { collection, doc, setDoc } from 'firebase/firestore';

const app = express();
app.use(express.json());

app.post('/create-registration', async (req, res) => {
    try {
        const { team_name, team_size, team_head_name, team_head_mail_id, department, contact_no, squad } = req.body;
        const registrationId = shortid.generate();
        const teamsRef = collection(db, 'teams');
        await setDoc(doc(teamsRef, registrationId), {
            team_name,
            team_size,
            team_head_name,
            team_head_mail_id,
            department,
            contact_no,
            squad: squad || []
        });
        res.status(201).send(`Team registration created with ID: ${registrationId}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the root path!');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});