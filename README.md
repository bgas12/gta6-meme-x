# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/bgas12/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/bgas12/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: a skeleton who waited 13 years for GTA 6, still on the couch with his controller, while the make.fun ghost floats in with a magenta star coin — it got paid on make.fun while he waited. The meme is `meme.png`; the post is the entry.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=vzat11js&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>

## The meme

`meme.png` (1600×1600 PNG): a cobweb-covered skeleton in a hoodie and backwards cap on a couch, controller in hand, in front of a TV showing a neon "GTA VI" Vice City sunset. Beside him floats make.fun's white ghost mascot with sparkle eyes, holding a glowing magenta star coin and a smartphone. Top caption: "ME, WAITING 13 YEARS FOR GTA 6". Bottom caption: "THE GHOST GOT PAID ON MAKE.FUN". Original art, no Rockstar logos or assets.

## The post

Posted on X from [@BagusJawara1](https://x.com/BagusJawara1) (public account). The post's text carries make.fun, a tag of @makefunai, and the play code `makefun-canopy-village-dewdrop`. The post's address goes in `POST.json` at this repository's root:

```json
{"url": "https://x.com/BagusJawara1/status/<id>"}
```

`main.ts` copies `POST.json` to `/output/POST.json`, where the gate reads it. That is all the program has to do — the post itself is judged (first picture, then text) by an AI judge, pairwise, top 50 share $500 USDC.
