import { Router } from 'express';
import { getCustomRepository } from 'typeorm';


const router = Router();

router.get('/', async (request, response) => {

 
  return response.json("OKOK");
});

router.post('/', async (request, response) => {
  try {
    const {
      id,
      stringKeep,
     
    } = request.body;

   

    return response.json("OK");
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default router;
