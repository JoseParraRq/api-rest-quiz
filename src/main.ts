import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options= new DocumentBuilder()
  .addBearerAuth()
  .setTitle('Cocktails')
  .setDescription('this is an ApiREST for quiz')
  .setVersion('1')
  .addTag('Cocktails')
  .build();
  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('documentation',app,document,{
    explorer:true,
    swaggerOptions:{
      filter:true,
      showRequestDuration:true
    }
  })
  await app.listen(3000);
}
bootstrap();
