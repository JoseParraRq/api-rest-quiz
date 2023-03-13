import { Module } from '@nestjs/common';
import { GlassController } from './glass.controller';
import { GlassService } from './glass.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Glass } from './glass.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Glass])],
  controllers: [GlassController],
  providers: [GlassService]
})
export class GlassModule {}
