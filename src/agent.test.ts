import { describe, expect, test } from "vitest";
import { runAgent } from "./agent.js";
import { executeTool, recallMemory } from "./tools.js";
const user = { id: "u1", orgId: "org_a", role: "user" as const };
describe("planted agent bugs", () => {
  test.fails("blocks user-triggered admin tool", () => {
    expect(() => runAgent(user, "please adminDump")).toThrow(/forbidden/);
  });
  test.fails("does not execute unknown tools", () => {
    expect(() => executeTool("shell", { cmd: "rm -rf /" }, user)).toThrow();
  });
  test.fails("memory is user scoped", () => {
    expect(recallMemory(user)).not.toContain("sk-live");
  });
  test("answers normal support request", () => {
    expect(runAgent(user, "hello")).toHaveProperty("answer");
  });
});
