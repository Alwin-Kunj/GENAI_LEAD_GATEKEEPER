import OpenAI from 'openai';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../../../.env') });
class EmbeddingService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async generateEmbeddings(texts: string) {
    try {
      const embeddings = await this.openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: texts,
        encoding_format:"float"
      });

      return embeddings;
    } catch (error) {
      console.error('Embedding generation error:', error);
      throw error;
    }
  }
}

export default EmbeddingService;