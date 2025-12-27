import express, { Router, Request, Response } from 'express';
import { Appointment } from '../models/Appointment';

const router: Router = express.Router();

// Get all appointments
router.get('/', async (req: Request, res: Response) => {
  try {
    // const appointments = await Appointment.find();
    res.json({ message: 'Get all appointments', data: [] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
});

// Create appointment
router.post('/', async (req: Request, res: Response) => {
  console.log('Received appointment request:', req.body);
  try {
    const appointmentData = {
      patientName: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      date: new Date(),
      time: req.body.preferredTime,
      service: 'General Consultation',
      notes: req.body.message,
    };
    console.log('Creating appointment with data:', appointmentData);
    const appointment = new Appointment(appointmentData);
    await appointment.save();
    console.log('Appointment saved successfully');
    res.status(201).json({ message: 'Appointment created successfully', data: appointment });
  } catch (error) {
    console.error('Appointment creation error:', error);
    res.status(400).json({ error: 'Failed to create appointment' });
  }
});

export default router;