import { Router } from 'express';
import { body } from 'express-validator';
import { submitContact } from '../controllers/contactController.js';
import { contactRateLimiter } from '../middleware/rateLimiter.js';

const router = Router();

const contactValidationRules = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required.')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters.')
    .escape(),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required.')
    .isEmail()
    .withMessage('Please provide a valid email address.')
    .normalizeEmail(),

  body('subject')
    .optional({ values: 'falsy' })
    .trim()
    .isLength({ max: 200 })
    .withMessage('Subject must be less than 200 characters.')
    .escape(),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required.')
    .isLength({ min: 5, max: 5000 })
    .withMessage('Message must be between 5 and 5000 characters.')
    .escape(),
];

// POST /api/contact
router.post('/', contactRateLimiter, contactValidationRules, submitContact);

export default router;
