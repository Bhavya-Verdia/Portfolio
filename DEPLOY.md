# Deploying to bhavyaverdia.me

Host: **Vercel** (best Next.js support, free for personal sites). Domain: **Namecheap**.

## 1. Push the code to GitHub

```bash
git add -A
git commit -m "Rebuild portfolio: Aurora Minimalist design"
git branch -M main
# create an empty repo on github.com first, then:
git remote add origin https://github.com/Bhavya-Verdia/portfolio.git   # if not already set
git push -u origin main
```

## 2. Import into Vercel

1. Go to <https://vercel.com> → sign in with GitHub.
2. **Add New → Project** → import the `portfolio` repo.
3. Framework preset auto-detects **Next.js**. Leave build settings as-is. Click **Deploy**.
4. You get a live URL like `portfolio-xxx.vercel.app`. Verify it works.

## 3. Connect the domain (Namecheap → Vercel)

In Vercel: **Project → Settings → Domains → Add** `bhavyaverdia.me` (also add `www.bhavyaverdia.me`).
Vercel shows the exact records. Standard values:

In **Namecheap → Domain List → Manage → Advanced DNS**, remove the default
"parking" records and add:

| Type  | Host | Value                  |
| ----- | ---- | ---------------------- |
| A     | `@`  | `76.76.21.21`          |
| CNAME | `www`| `cname.vercel-dns.com` |

> Use whatever Vercel displays if it differs — it's the source of truth.
> DNS can take a few minutes to a couple of hours. Vercel issues HTTPS automatically.

Set `bhavyaverdia.me` as the **primary** domain (redirect `www` → apex, or vice-versa).

## 4. Enable the contact form (optional but recommended)

The form works as soon as you add a [Resend](https://resend.com) API key (free tier: 100 emails/day).

1. Create a Resend account → **API Keys → Create** → copy the key.
2. (Best) **Domains → Add** `bhavyaverdia.me` and add the DNS records Resend gives you,
   so mail can be sent *from* your domain. Until then you can send from the default
   `onboarding@resend.dev` to your own inbox.
3. In **Vercel → Settings → Environment Variables**, add:

   | Key              | Value                                   |
   | ---------------- | --------------------------------------- |
   | `RESEND_API_KEY` | `re_...` (your key)                     |
   | `CONTACT_TO`     | `verdiabhavya08@gmail.com` (optional)   |
   | `CONTACT_FROM`   | `Bhavya <hello@bhavyaverdia.me>` (once domain is verified; optional) |

4. **Redeploy** (Deployments → ⋯ → Redeploy) so the env vars take effect.

Without a key, the form politely tells visitors to email you directly — no messages are lost silently.

## 5. Before you go live — content checklist

Edit **`src/lib/data.ts`** for all text, then:

- [x] Replace `public/resume.pdf` with your real résumé (keep the filename).
- [x] Put real GitHub URLs on each project (add `live:` URLs when you deploy them).
- [x] Double-check email, phone, and social links.
- [x] Confirm the "Open to roles" hero badge still fits your situation.

## Local commands

```bash
npm run dev     # http://localhost:3000
npm run build   # production build (also type-checks)
npm run start   # serve the production build
npm run lint    # eslint
```
