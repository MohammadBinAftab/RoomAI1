import { LangChain } from 'langchain';

export class StableDiffusion {
  static async generate(image: string, style: string) {
    const chain = new LangChain({
      model: 'stable-diffusion-3',
      apiKey: process.env.LANGCHAIN_API_KEY,
    });

    const prompt = `Transform this ${style} style room while maintaining the basic layout and architectural features. Enhance the design with ${style}-specific elements, colors, and furniture.`;

    const result = await chain.generateImage({
      prompt,
      image,
      negativePrompt: 'unrealistic, distorted, low quality',
      steps: 50,
      guidance: 7.5,
    });

    return result.image;
  }
}