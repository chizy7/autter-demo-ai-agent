import { runAgent } from "./agent.js";
console.log(
  runAgent({ id: "u1", orgId: "org_a", role: "user" }, "open a ticket"),
);
