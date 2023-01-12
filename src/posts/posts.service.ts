import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private posrRepository: typeof Post) { }

  async create(dto: CreatePostDto, image: any) {
    const fileName = ''
    const post = this.posrRepository.create({ ...dto, image: fileName })
    return post
  }
}
