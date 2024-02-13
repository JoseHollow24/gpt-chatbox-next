import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from 'ai'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

async function POST(request) {
    const { messages } = await request.json();
    // Procesar con OpenAI
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        stream: true,
        messages
    });
    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
}

module.exports = {
    POST
};


