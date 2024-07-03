import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Put,
} from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('liked')
  getLiked() {
    return this.photoService.findLiked();
  }

  @Get()
  getAll() {
    return this.photoService.findAll();
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  updateLikes(@Param('id') id: string, @Body('likes') likes: string) {
    return this.photoService.updateLikes(id, +likes);
  }
}
