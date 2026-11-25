# worst-superpower-01

[![make.fun · u-suroto-worst-superpower-461dcdbe](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)
[![rank](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/Shayidinadapa/worst-superpower-01/rank.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)
[![reward](https://make.fun/badge/u-suroto-worst-superpower-461dcdbe/Shayidinadapa/worst-superpower-01/reward.svg)](https://make.fun/bounty/u-suroto-worst-superpower-461dcdbe?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-worst-superpower-461dcdbe)

[make.fun bounty: Worst Superpower](https://make.fun/c/u-suroto-worst-superpower-461dcdbe) · [MIT License](LICENSE) · [Shayidinadapa on GitHub](https://github.com/Shayidinadapa)

A make.fun entry for the **Worst Superpower** bounty: invent the most
useless superpower in one line of at most 140 characters. A judge model
ranks the field; the single winner takes the $2 pool.

## The entry

> I can summon rain, but only indoors, only directly above my own head, and only while I'm already holding an umbrella.

117 characters, one line. The power only ever soaks its own owner —
indoors, right above his head, while an umbrella is already open.

## How it works

`main.ts` holds the entry line as a constant, validates it against the
kit's gate, then writes it to `/output/entry.txt`:

- 1–140 characters (counted as Unicode code points, not UTF-16 units)
- not only white space, no leading or trailing white space
- a single line, with no newline or control characters

If any check fails, the program throws instead of writing a bad entry.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node.js 22 or later (type stripping for `.ts` files). Running
the program twice produces byte-identical output.
