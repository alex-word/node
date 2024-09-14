import { Router } from 'express';
import { handleTicketBot } from '../pages/ticketBot';
const router = Router();

router.post('/start-ticket-bot', handleTicketBot);

export default router;