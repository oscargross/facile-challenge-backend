import { getCustomRepository } from 'typeorm';

import StringEntity from '../models/StringEntity';
import StringRepository from '../repositories/StringRepository';

interface Request {
  name: string;
}

class CreateStringService {
  public async execute({name}: Request): Promise<StringEntity> {

    const stringRepository = getCustomRepository(StringRepository);

    const newObject = stringRepository.create({name});

    await stringRepository.save(newObject);

    return newObject;
  }
}

export default CreateStringService;
