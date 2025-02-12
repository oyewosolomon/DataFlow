import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
});

export function registerRoutes(app: Express): Server {
  app.post('/api/contact', async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      // In a real app, send email/store in DB
      console.log('Contact form submission:', data);
      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: 'Invalid form data' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
