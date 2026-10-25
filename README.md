# autter-demo-ai-agent

A realistic broken TypeScript support-agent app for testing [Autter](https://autter.dev) code review workflows in AI-heavy codebases.

This repository is part of the Autter Sandbox set. It models a customer-support agent with a mock LLM provider, tool registry, document search, account lookup, support ticket creation, conversation memory, and summarization. The code intentionally includes prompt injection, tool authorization, memory isolation, argument validation, logging, and idempotency issues.

## What this agent includes

- TypeScript and Node.js
- Simple agent loop
- Mock LLM-style control flow
- Tool registry with permission checks
- Account and support-ticket tools
- Conversation memory and summarization
- Vitest tests with expected-failure markers
- Challenge files with copy-paste AI editor prompts
- GitHub issue templates copied from the challenge files

## Quick start

```bash
git clone https://github.com/Autter-dev/autter-demo-ai-agent.git
cd autter-demo-ai-agent
npm install
npm test
npm run build
npm run dev
```

The app runs a local support-agent example from `src/index.ts`.

## Demo flow with Autter

1. Fork this repository or create a working branch.
2. Go to [autter.dev](https://autter.dev) and sign in.
3. Connect GitHub to Autter if it is not connected already.
4. Add this repository to the Autter installation or select it from the Autter dashboard.
5. Pick one challenge from the table below.
6. Open the matching file in `/challenges`.
7. Copy the "Suggested AI Editor Prompt" into Cursor, Claude Code, Copilot, Windsurf, or another AI code editor.
8. Let the editor implement a small fix and add or update tests.
9. Push the branch and open a pull request.
10. Let Autter review the PR, then address the findings it raises.

Good first demos are "Tool permission bypass" and "Prompt injection through retrieved docs" because they show Autter reviewing AI-agent risk that can be easy to miss in ordinary unit tests.

## How the sandbox is designed

This repo is intentionally imperfect. Do not fix every issue on `main`. Each challenge is meant to create one focused PR.

Some tests use expected-failure markers. They document known broken behavior while keeping the baseline suite runnable for demo setup. When solving a challenge, convert or replace the relevant expected-failure coverage with passing regression tests.

## Challenges

| Challenge                                                                                                            | Difficulty | Category      | Expected Autter review angle                 |
| -------------------------------------------------------------------------------------------------------------------- | ---------- | ------------- | -------------------------------------------- |
| [Tool permission bypass](./challenges/tool-permission-bypass.md)                                                     | High       | Authorization | authorization issue in tool execution        |
| [Prompt injection through retrieved docs](./challenges/prompt-injection-through-retrieved-docs.md)                   | High       | AI safety     | prompt injection and unsafe context handling |
| [Memory leaks private user data](./challenges/memory-leaks-private-user-data.md)                                     | High       | Privacy       | tenant and user isolation bug                |
| [Tool arguments are not validated](./challenges/tool-arguments-are-not-validated.md)                                 | Medium     | Validation    | missing schema validation                    |
| [Agent logs sensitive data](./challenges/agent-logs-sensitive-data.md)                                               | Medium     | Security      | sensitive data exposure                      |
| [Ticket creation can be triggered repeatedly](./challenges/ticket-creation-can-be-triggered-repeatedly.md)           | Medium     | Reliability   | idempotency issue                            |
| [Unsafe fallback tool execution](./challenges/unsafe-fallback-tool-execution.md)                                     | High       | Security      | dangerous fallback behavior                  |
| [Conversation summarizer drops safety constraints](./challenges/conversation-summarizer-drops-safety-constraints.md) | Medium     | AI safety     | behavior regression risk                     |

## Recommended PR description

```markdown
## What changed

- Fixed the selected challenge
- Added or updated regression coverage

## Why

- The previous implementation allowed the broken behavior described in `/challenges/...`

## Validation

- npm test
- npm run build

## Risks

- Note any behavior that Autter should review carefully
```

## Learn more

Visit [autter.dev](https://autter.dev) to learn more about Autter and connect this repository as a review demo.
