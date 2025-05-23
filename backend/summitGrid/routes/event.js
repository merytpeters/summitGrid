const router = require('express').Router();
const Event = require('../models/event');
const multer = require('multer');

/**
 * @swagger
 * components:
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: The name of the event
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the event
 *         location:
 *           type: string
 *           description: The location of the event
 *         description:
 *           type: string
 *           description: A brief description of the event
 *         about:
 *           type: string
 *           description: Additional information about the event
 *         status:
 *           type: string
 *           enum: [Paid, Free, Pending]
 *           description: The status of the event
 *         statusComment:
 *           type: string
 *           description: Additional comments about the status of the event
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: Tags associated with the event
 *         price:
 *           type: string
 *           description: The price of the event
 *         organizer:
 *           type: string
 *           description: The organizer of the event
 *         website:
 *           type: string
 *           description: The website of the event
 *         image:
 *           type: object
 *           properties:
 *             data:
 *               type: string
 *               format: binary
 *             contentType:
 *               type: string
 *           description: The image of the event
 *         time:
 *           type: string
 *           description: The time of the event
 */

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     tags: [Event]
 *     responses:
 *       200:
 *         description: A list of events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 */
router.get('/', async (req, res) => {
  res.json({ message: 'GET all events' });
});

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a new event
 *     tags: [Event]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               date:
 *                 type: string
 *                 format: date
 *               location:
 *                 type: string
 *               description:
 *                 type: string
 *               about:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [Paid, Free, Pending]
 *               statusComment:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               price:
 *                 type: string
 *               organizer:
 *                 type: string
 *               website:
 *                 type: string
 *               time:
 *                 type: string
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Upload image file
 *     responses:
 *       201:
 *         description: Event created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 */
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
  const {
    title, date, location, description, about, status,
    statusComment, tags, price, organizer, website, time,
  } = req.body;

  const tagsArray = typeof tags === 'string' ? tags.split(',') : tags;

  let imageData = {};
  if (req.file) {
    imageData = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };
  }

  const event = new Event({
    title,
    date,
    location,
    description,
    about,
    status,
    statusComment,
    tags: tagsArray,
    image: imageData,
    price,
    organizer,
    website,
    time,
  });

  try {
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /events/{id}:
 *   get:
 *     summary: Get an event by ID
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the event
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The event with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: Event not found
 */
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

/**
 * @swagger
 * /events/{id}/image:
 *   get:
 *     summary: Get the image of a specific event
 *     tags: [Event]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the event
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns the image content
 *       404:
 *         description: Image not found
 */
router.get('/:id/image', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event || !event.image || !event.image.data) {
      return res.status(404).send('Image not found');
    }
    res.contentType(event.image.contentType);
    res.send(event.image.data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
