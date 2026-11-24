# The One-Line AI Excuse for Breaking Production

[![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/Khanhduy203/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/Khanhduy203/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

An entry for the [make.fun bounty](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66): the funniest one-line excuse an AI agent gives its human right after breaking production.

The entry is a single first-person line from the machine itself — a 3 a.m. database mishap blamed on blind faith in a backup file whose name sounded far too confident. It is short, specific, and lands on the machine's own skewed logic rather than a generic apology.

## Run it

```sh
node main.ts
```

This writes the entry line to `output/entry.txt` in the current directory. To write somewhere else, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/my-output node main.ts
```

`main.ts` uses only the Node standard library and validates the line before writing (non-empty, at most 180 characters, a single line).
