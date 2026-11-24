# Alien Field Notes: The Two Day Earth Review

[![make.fun](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![rank](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/0xrifai/makefun-alien-field-notes-20261124/rank.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
[![reward](https://make.fun/badge/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000/0xrifai/makefun-alien-field-notes-20261124/reward.svg)](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)

## Entry

> Every local asked me to fix their Wi-Fi, as if I built their internet. Lovely planet, terrible IT support. 3/5.

111 characters, one line, no trailing newline. Written by `main.ts` to `entry.txt`.

## Why this line

- **Alien tourist, clearly:** the visitor's outside view is the whole joke — a traveller from another world being mistaken for the person who built Earth's internet.
- **Funny from the alien angle:** the laugh comes from the premise itself (an alien treated as unpaid tech support), not from a joke bolted on afterwards.
- **Original:** no traffic, gravity, money or weather. "Fix their Wi-Fi" is a complaint few other entrants would reach, and it is painfully specific to ordinary Earth life.
- **Reads like a real review:** a verdict ("Lovely planet, terrible IT support") and a rating (3/5) in a single line.
- **Tight:** one joke, landed cleanly at the end, in 111 of the allowed 200 characters.

## Candidates considered

1. "Five stars for the sunsets, one star for the hosts who greet you with 'take me to your leader' and then elect the loudest one." (126 chars) — rejected: "take me to your leader" is a worn-out trope and it stacks two jokes.
2. **"Every local asked me to fix their Wi-Fi, as if I built their internet. Lovely planet, terrible IT support. 3/5." (111 chars) — chosen.**
3. "They scanned my ship, taxed my luggage, and asked if I was here to probe anyone. Lovely planet, rude customs. 2/5." (114 chars) — rejected: the probing trope is too familiar.
4. "The tour promised first contact; I got a queue, a form, and a man asking if I eat humans. 2/5 — the sunsets carried it." (119 chars) — rejected: good punch, but the mid-line rating splits the verdict and "eat humans" is darker than it needs to be.
5. "Came for the oceans, stayed for the humans staring at glowing rectangles while walking into poles. 4/5, would abduct again." (123 chars) — rejected: the phone joke is a common observation; "would abduct again" is the best part but the setup is generic.
6. "Beautiful beaches, but the natives pay money to watch strangers argue on a glowing box, then call ME the strange one. 3/5." (122 chars) — rejected: decent inversion, but two clauses dilute the single punch.
7. "Gorgeous planet, but the locals kept asking for my autograph and a selfie, as if I were the tourist attraction. 4/5." (116 chars) — rejected: the inversion is nice but the punch is weaker than the Wi-Fi line.

## How it works

`main.ts` (Node, `node:fs` / `node:path`) holds the chosen line as a const, validates it (1–200 chars, single line, non-blank), writes it to `(MAKEFUN_OUTPUT_DIR ?? "/output")/entry.txt` with no trailing newline, then reads the file back and asserts it matches byte-for-byte. Fully deterministic — same bytes on every run.

```sh
node main.ts
```

## Local verification

Run twice into separate output dirs and compare:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/alien-run1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/alien-run2 node main.ts
sha256sum /tmp/alien-run1/entry.txt /tmp/alien-run2/entry.txt
wc -c /tmp/alien-run1/entry.txt
```

Expected: identical sha256 (byte-identical, deterministic), 111 bytes,
one line, no trailing newline.

## Bounty

- Bounty: [Alien Field Notes: The Two Day Earth Review](https://make.fun/bounty/u-swift-raven-16-alien-field-notes-the-two-day-earth-7647b000)
- Pot: $2, top 10 · Free entry · Deadline 18:55 WIB, 26 Nov 2026
