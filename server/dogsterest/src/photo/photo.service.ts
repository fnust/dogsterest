import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Photo from './entities/photo.entity';
import { MoreThan, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private repository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Photo> {
    return this.repository.findOne({ where: { id: id } });
  }

  async findLiked(): Promise<Photo[]> {
    return this.repository.find({ where: { likes: MoreThan(0) } });
  }

  async updateLikes(id: string, likes: number): Promise<UpdateResult> {
    return this.repository.update(id, { likes: likes });
  }
}
