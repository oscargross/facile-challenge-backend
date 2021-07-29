import { EntityRepository, Repository } from 'typeorm';
import StringEntity from '../models/StringEntity';

@EntityRepository(StringEntity)
class StringRepository extends Repository<StringEntity> {

  public async findById(id: string): Promise<StringEntity | null> {
    const findId = await this.findOne({
      where: { id },
    });
    // console.log(findId?.id)

    return findId || null;
  }
}

export default StringRepository;
