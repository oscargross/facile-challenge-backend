import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import StringRepository from '../app/repositories/StringRepository';
import CreateStringService from '../app/services/CreateStringService';
import Encrypt from '../app/services/encrypt';

const router = Router();

router.get('/encripts/:id', async (request, response) => {

  const {id} = request.params
  const stringRepository = getCustomRepository(StringRepository);
  const objectEncripted = await stringRepository.findById(id)
  
  if(!objectEncripted) return response.json({error: "id not found"});

  
  const crypt = new Encrypt()
  const name = crypt.decrypt(objectEncripted.name)
  if(!name) return response.json({ code: "E_EXECUTION_FAILURE", message: "Falha ao desincriptografar o campo \"name\"" });

  return response.json({id, name})

});



router.post('/encripts', async (request, response) => {

  try {
    const nameWithoutEncript = request.body.name;

    const crypt = new Encrypt()
    const name = crypt.encrypt(nameWithoutEncript)

    if(!name) return response.json({ code: "E_EXECUTION_FAILURE", message: "Falha ao criptografar o campo \"name\"" });

    const CreateString = new CreateStringService();
    const objectEncripted = await CreateString.execute({name});
    return response.json(objectEncripted);

  } catch (err) {
    // console.log(err.message);    
    return response.status(400).json({ code: "E_VALIDATION_FAILURE", message: "O campo \"name\" é obrigatório" });
  }
});

export default router;