import { NestFactory } from '@nestjs/core'
import { App } from './app.module';

async function start() {
  const PORT = process.env.PORT || 6000
  const app = await NestFactory.create(App)

  await app.listen(PORT, () => {
    console.log(`Server started on port - ${PORT}`);
  })
}

start()