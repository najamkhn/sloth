import { Router } from 'express';
var router = Router();

const delayer = ms => new Promise(res => setTimeout(res, ms));

router.get('/:delay?', async (req, res, next) => {
  const delay = (req.params && req.params.delay) || 0;
  await delayer(delay);
  res.status(200).json({ 
    status: 'OK',
    delay
  });
});

export default router;
