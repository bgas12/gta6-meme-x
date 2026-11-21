# Submit — "Post a GTA 6 meme on X" (gta6-meme-x-01)

Status: **building** — file entri sudah jadi, BELUM posting ke X, BELUM submit.
Hadiah $500 USDC, 50 tempat berbayar (1st $100, 2nd $60, 3rd $30, 4th–10th $10,
11th–50th $6). Deadline Senin 23 Nov 2026 21:00 WIB (14:00 UTC). Hasil 8 Des 2026.
Hadiah kompetitif, tidak ada jaminan dapat. Biaya masuk $0, maks 5 submit/hari,
10 total; submit terakhir sebelum deadline adalah entri final.

## Bagaimana URL postingan X diserahkan (hasil selidik dari kit resmi)

URL postingan TIDAK dimasukkan di field submit dan TIDAK ditulis di README.
Caranya: file **`POST.json` di root repo**, berisi JSON:

```json
{"url": "https://x.com/BagusJawara1/status/<id>"}
```

`main.ts` menyalin `POST.json` ke `/output/POST.json` saat grader jalan, lalu
house membaca postingan itu lewat embed publik X (gambar pertama + teksnya) dan
memberikannya ke juri AI. Syarat postingan (dari kit): akun publik (bukan
protected), diposting setelah bounty dibuat (19 Nov 2026 19:05 UTC) dan sebelum
deadline, gambar pertama adalah meme (PNG/JPEG/WebP, bukan GIF/video), teks
memuat make.fun (link atau tertulis) dan/atau @makefunai, plus play code.
Hanya postingan pertama per akun yang dihitung. Postingan dan akun harus tetap
publik sampai hasil keluar.

## Temuan penting: play code BUKAN vzat11js

Kode `vzat11js` adalah **kode referral** Bagas (dipakai di footer README dan
link referral). Kode yang harus ada di teks postingan adalah **play code**
akun, bentuknya `makefun-` + tiga kata. Saya ambil dari API resmi make.fun
(`GET /api/competitions/gta6-meme-x-01/play-code`, n=0 dari 4):

**Play code: `makefun-canopy-village-dewdrop`**

Kalau postingan memakai vzat11js sebagai "play code", check `entry_link`
(binding `code`) akan gagal karena house memeriksa salah satu dari empat play
code asli akun. Draft di `POST-DRAFT.md` sudah memakai play code yang benar.

## Yang masih tersisa (Bagas)

1. **Posting di X** dari @BagusJawara1 (pastikan akun publik dulu):
   lampirkan `meme.png` sebagai gambar pertama, pakai teks dari
   `POST-DRAFT.md`, posting sebelum Senin 23 Nov 21:00 WIB.
2. **Kirim URL postingan** ke Merlin (`https://x.com/BagusJawara1/status/<id>`).
3. **Buat repo GitHub publik** `bgas12/gta6-meme-x` (dibuat setelah
   19 Nov 2026 14:00 UTC — repo baru otomatis memenuhi), push semua file di
   folder ini, ganti isi `POST.json` dengan URL postingan asli, catat commit
   SHA 40 karakter. Set About repo (dari template resmi kit):
   `gh repo edit bgas12/gta6-meme-x --description 'A GTA 6 meme for make.fun'"'"'s "Post a GTA 6 meme on X" bounty, $500 in USDC.' --homepage 'https://make.fun/bounty/gta6-meme-x-01' --add-topic 'makefun,ai-agents,bounties,growth'`
4. **Bundle + submit** (Merlin, dari dalam kit, pakai keypair agen
   @mohamad-sukron — JANGAN pakai seed phrase/private key pribadi Bagas):
   `node cli/makefun.mjs check --kit . --repo <repo> --transcripts transcripts.tar.gz`
   lalu
   `node cli/makefun.mjs submit --competition gta6-meme-x-01 --repo-url https://github.com/bgas12/gta6-meme-x --commit <sha> --title "Me, waiting 13 years for GTA 6 (the ghost got paid on make.fun)" --bundle transcripts.tar.gz --keypair ~/workspace/make-fun/makefun-keypair.json`

## Catatan dari requirements (sudah dicek di /tmp/gta6meme-req.json)

- `transcripts_witnessed` TIDAK berlaku (applies: False) — bounty ini tidak
  butuh sesi yang direkam live; bundle transkrip biasa dari kit CLI cukup.
  Tapi `thinking_reproduces` berlaku (min_authored 0.3, entrypoint main.ts)
  dan `thinking_own_work` berlaku mulai 20 Nov 00:00 UTC — main.ts ditulis
  sendiri di sesi ini (3 revisi), meme dibuat sendiri (AI-generated, boleh
  menurut kit), bukan hasil salin.
- `repo_readme` dan `repo_about` berlaku: README wajib memuat tiga badge
  make.fun, About repo wajib website halaman bounty + topik makefun.
- Repo harus dibuat setelah bounty dibuka; escrow $500 USDC sudah terkunci
  penuh, 0 klaim saat dicek.
