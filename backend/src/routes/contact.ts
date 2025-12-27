import express, { Router, Request, Response } from 'express';
import { Contact } from '../models/Contact';

const router: Router = express.Router();

// Get all contact messages
router.get('/', async (req: Request, res: Response) => {
  try {
    // const messages = await Contact.find();
    res.json({ message: 'Get all contact messages', data: [] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

// Create contact message
router.post('/', async (req: Request, res: Response) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to send message' });
  }
});

export default router;
