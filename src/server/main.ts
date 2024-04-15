import express from 'express';
import ViteExpress from 'vite-express';
import TaskRouter from '../server/routes/TaskRouter.js'

const app = express();

// Middleware
app.use(express.json())

// Routes
app.use('/tasks', TaskRouter)

ViteExpress.config({
  // Copy and paste of vite.config.ts just so vite-express does not need to import
  // vite, a devDependency, in runtime
  inlineViteConfig: {
    build: {
      outDir: './dist/client',
    },
  },
});

ViteExpress.listen(app, 3000, () =>
  console.log(`Server is listening on port 3000...`)
);
