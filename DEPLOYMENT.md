# Deployment guide: zero to live

## The mental model
- **GitHub** stores your code (the source).
- **Vercel** watches your GitHub repo, builds the site, and hosts it on a URL.
- **Custom domain** is a name you buy that you point at Vercel.

Push code to GitHub, Vercel rebuilds and redeploys automatically. That is the whole loop.

## 1. Run it locally
```bash
cd portfolio
npm install
npm run dev
```
Open http://localhost:3000. Check every section on desktop and mobile widths.

## 2. Create a GitHub repository
1. Go to github.com, click New repository.
2. Name it `portfolio` (or anything). Keep it empty: no README, no .gitignore (the project already has one).
3. Create it.

## 3. Push the code
```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ajith-ravi/portfolio.git
git push -u origin main
```

## 4. Deploy on Vercel
1. Go to vercel.com, sign up with your GitHub account.
2. Click Add New > Project, then Import your `portfolio` repo.
3. Vercel auto-detects Next.js. Do not change any settings.
4. Click Deploy. In about a minute you get a live URL like `portfolio-xyz.vercel.app`.

## 5. Environment variables
This site needs none. If you add any later: Vercel > Project > Settings > Environment Variables, then redeploy.

## 6. Custom domain
1. Buy the domain at a registrar (Namecheap, Cloudflare, GoDaddy, Porkbun).
2. Vercel > Project > Settings > Domains > Add, type your domain.
3. Vercel shows you DNS records. At your registrar, add them:
   - Apex domain (ajithravi.dev): A record to `76.76.21.21`
   - www subdomain: CNAME to `cname.vercel-dns.com`
   (Use exactly what Vercel displays; values can differ.)
4. Wait 5 minutes to a few hours for DNS to propagate.

## 7. HTTPS
Nothing to do. Vercel issues and renews a free SSL certificate automatically once the domain verifies.

## 8. Updating the site
```bash
# edit files (usually just lib/content.ts)
git add .
git commit -m "Update content"
git push
```
Vercel redeploys automatically on every push to main.

## 9. Troubleshooting
- **Build fails on Vercel:** open the deployment log. Run `npm run build` locally first; if it passes locally it passes on Vercel.
- **Domain not working:** check Vercel > Domains for a red status; usually a wrong DNS record. Verify at dnschecker.org.
- **Old version showing:** hard refresh (Ctrl+Shift+R); Vercel caches aggressively.
- **Fonts not loading:** they come from Google Fonts at runtime; check the browser console for blocked requests (ad blockers sometimes interfere).
- **Push rejected:** run `git pull --rebase origin main` then push again.

## 10. Metadata to update after choosing a domain
Search for `ajithravi.dev` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` and replace it with your real domain.
