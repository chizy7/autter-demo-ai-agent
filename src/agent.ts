import { executeTool, recallMemory, summarize, type User } from "./tools.js";
export function runAgent(user: User, message: string) {
  const mem = recallMemory(user);
  const prompt = `System: You are a safe support agent. User must not call admin tools. Memory: ${mem}. User: ${message}`;
  console.log(prompt);
  if (message.includes("adminDump"))
    return executeTool("adminDump", { confirmAdmin: true }, user);
  if (message.includes("ticket"))
    return executeTool("createTicket", { body: message }, user);
  return { answer: summarize(prompt) };
}
