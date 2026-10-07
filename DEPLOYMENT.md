# 123.design Deployment Guide

## Overview

This guide covers deploying the 123.design Next.js website to Vercel. The site is a statically generated site with 47+ pages, Sanity CMS integration, and various API routes.

## Pre-Deployment Checklist

### ✅ Completed

- [x] Build passes without errors
- [x] All pages render correctly (47 static pages)
- [x] API routes tested and working:
  - `/api/lead` - Lead form submission with validation
  - `/api/newsletter` - Newsletter signup with validation
  - `/api/revalidate` - Sanity webhook revalidation
  - `/api/draft/enable` and `/api/draft/disable` - Preview mode
- [x] All images load correctly (capability tiles, process stages, project galleries)
- [x] SEO metadata present on all pages
- [x] Structured data (JSON-LD) implemented
- [x] Sitemap.xml generated with all pages
- [x] Robots.txt configured
- [x] OpenGraph images generated for all pages
- [x] Canonical URLs set
- [x] Breadcrumbs with structured data
- [x] Forms validated with Zod schemas
- [x] Security headers configured
- [x] Cookie consent banner implemented
- [x] Analytics (Plausible) integrated
- [x] Error monitoring (Sentry) integrated
- [x] PWA support added
- [x] RSS feed generated
- [x] Site search (Pagefind) indexed

### ⚠️ Requires Environment Variables

The following environment variables must be set in Vercel:

#### Required for Production

```bash
# Site URL - MUST be set to production domain
NEXT_PUBLIC_SITE_URL=https://123.design

# Sanity CMS - Required for CMS content
NEXT_PUBLIC_SANITY_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=<your-read-token>
SANITY_REVALIDATE_SECRET=<your-revalidate-secret>
SANITY_PREVIEW_SECRET=<your-preview-secret>
```

#### Optional (Recommended)

```bash
# Analytics - Plausible
NEXT_PUBLIC_ANALYTICS_DOMAIN=123.design

# Error Monitoring - Sentry
NEXT_PUBLIC_SENTRY_DSN=<your-sentry-dsn>
SENTRY_ORG=<your-sentry-org>
SENTRY_PROJECT=<your-sentry-project>
SENTRY_AUTH_TOKEN=<your-sentry-auth-token>

# Chat Widget - Crisp (optional)
NEXT_PUBLIC_CRISP_WEBSITE_ID=<your-crisp-id>

# Search Console Verification (optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<google-verification-code>
NEXT_PUBLIC_BING_SITE_VERIFICATION=<bing-verification-code>
```

## Deployment Steps

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Login to Vercel

```bash
vercel login
```

### 3. Deploy to Preview

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? **Select your account**
- Link to existing project? **N**
- Project name? **123-design**
- Directory? **./  (current directory)**
- Override settings? **N**

### 4. Set Environment Variables

After deployment, set environment variables in Vercel dashboard:

1. Go to https://vercel.com/dashboard
2. Select your project: **123-design**
3. Go to **Settings** → **Environment Variables**
4. Add all required variables from above
5. Select environments: **Production**, **Preview**, **Development**

### 5. Deploy to Production

```bash
vercel --prod
```

### 6. Configure Custom Domain

1. Go to project settings → **Domains**
2. Add domain: `123.design`
3. Follow DNS configuration instructions
4. Wait for DNS propagation (up to 24 hours)

## Post-Deployment Verification

### 1. Check Site Loads

```bash
curl -I https://123.design
# Should return HTTP 200
```

### 2. Verify Sitemap

```bash
curl https://123.design/sitemap.xml
# Should contain all 47+ pages
```

### 3. Verify Robots.txt

```bash
curl https://123.design/robots.txt
# Should allow all crawlers and reference sitemap
```

### 4. Test Forms

Test lead form:
```bash
curl -X POST https://123.design/api/lead \
  -H "Content-Type: application/json" \
  -d '{"productType":"Test","developmentStage":"Concept","needs":["Industrial Design"],"timeline":"3-6 months","name":"Test User","email":"test@example.com"}'
# Should return: {"success":true,"message":"Lead submitted successfully"}
```

Test newsletter:
```bash
curl -X POST https://123.design/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
# Should return: {"success":true,"message":"Successfully subscribed"}
```

### 5. Verify Images

Check new capability images load:
```bash
curl -I https://123.design/images/capabilities/prototyping.png
curl -I https://123.design/images/capabilities/manufacturing.png
curl -I https://123.design/images/capabilities/testing.png
# All should return HTTP 200
```

### 6. Check PageSpeed

Run Google PageSpeed Insights:
- https://pagespeed.web.dev/report?url=https://123.design

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### 7. Verify Structured Data

Test with Google Rich Results Test:
- https://search.google.com/test/rich-results?url=https://123.design

Expected schemas:
- Organization
- WebSite
- LocalBusiness
- BreadcrumbList
- Product (on project pages)
- Article (on insight pages)

### 8. Test Search

Visit https://123.design and press ⌘K (or Ctrl+K) to open search.
Verify Pagefind search works.

### 9. Verify Analytics

If Plausible is configured:
1. Go to https://plausible.io
2. Check your dashboard
3. Verify traffic is being tracked

### 10. Monitor Errors

If Sentry is configured:
1. Go to https://sentry.io
2. Check your project
3. Verify no errors are being reported

## Sanity CMS Webhook Setup

To enable automatic revalidation when content changes in Sanity:

1. Go to your Sanity project settings
2. Navigate to **API** → **Webhooks**
3. Create new webhook:
   - Name: **Vercel Revalidation**
   - URL: `https://123.design/api/revalidate`
   - Method: **POST**
   - Template: **Simple**
   - Secret: Use the same value as `SANITY_REVALIDATE_SECRET`
   - Trigger: **Create, Update, Delete**
   - Projection: `{ "_type", "slug" }`

## Troubleshooting

### Build Fails

**Error**: `SANITY_API_READ_TOKEN is required`
- **Solution**: Set all Sanity environment variables in Vercel

**Error**: `Module not found`
- **Solution**: Run `npm install` locally, commit `package-lock.json`, redeploy

### Images Not Loading

**Error**: 404 on images
- **Solution**: Verify images exist in `/public/images/` directory
- Check `launch-media.ts` paths match actual file locations

### Forms Not Working

**Error**: Forms return 500
- **Solution**: Check API route logs in Vercel dashboard
- Verify environment variables are set correctly

### SEO Issues

**Error**: Missing meta tags
- **Solution**: Check page metadata exports in layout.tsx and page files
- Verify `NEXT_PUBLIC_SITE_URL` is set correctly

## Performance Optimization

### Current Optimizations

- ✅ Static site generation (SSG) for all pages
- ✅ Image optimization with next/image
- ✅ Automatic code splitting
- ✅ Font optimization with next/font
- ✅ CSS optimization with Tailwind
- ✅ Search index pre-built at build time
- ✅ Immutable cache headers for static assets
- ✅ Region set to iad1 (US East) for low latency

### Future Optimizations

- Consider enabling ISR (Incremental Static Regeneration) for blog posts
- Add image lazy loading for below-fold images
- Implement service worker for offline support
- Add prefetching for critical navigation paths

## Security Considerations

### Implemented

- ✅ Security headers (X-Frame-Options, X-Content-Type-Options, etc.)
- ✅ Honeypot field on lead form
- ✅ Input validation with Zod
- ✅ No secrets in client bundle
- ✅ CORS configured correctly
- ✅ HTTPS enforced by Vercel

### Recommended

- Enable Vercel's Bot Protection
- Set up rate limiting on API routes
- Implement CSP (Content Security Policy) headers
- Regular security audits with `npm audit`

## Rollback Plan

If deployment has issues:

1. **Quick Rollback**:
   ```bash
   vercel rollback
   ```

2. **Manual Rollback**:
   - Go to Vercel dashboard → Deployments
   - Find previous working deployment
   - Click **Promote to Production**

3. **Emergency**:
   - Disable domain in Vercel
   - Point DNS to previous hosting
   - Fix issues locally
   - Redeploy when ready

## Monitoring

### Vercel Dashboard

- Check deployment logs
- Monitor function invocations
- Track bandwidth usage
- Review analytics

### External Monitoring

Recommended tools:
- **Uptime**: UptimeRobot, Pingdom
- **Performance**: Google PageSpeed Insights, WebPageTest
- **Errors**: Sentry
- **Analytics**: Plausible
- **SEO**: Google Search Console, Ahrefs

## Maintenance

### Regular Tasks

- **Weekly**: Review analytics, check for errors
- **Monthly**: Update dependencies (`npm update`), review content
- **Quarterly**: Full security audit, performance review

### Content Updates

- Update content via Sanity CMS
- Changes auto-revalidate via webhook
- No redeployment needed for content changes

### Code Updates

```bash
# Make changes locally
npm run dev  # Test locally
npm run build  # Verify build passes
vercel  # Deploy to preview
vercel --prod  # Deploy to production
```

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Sanity Docs**: https://www.sanity.io/docs

## Deployment Verification Checklist

After deployment, verify:

- [ ] Homepage loads (https://123.design)
- [ ] All navigation links work
- [ ] Capability images display correctly
- [ ] Process images display correctly
- [ ] Lead form submits successfully
- [ ] Newsletter signup works
- [ ] Search functionality works
- [ ] Sitemap accessible (/sitemap.xml)
- [ ] Robots.txt accessible (/robots.txt)
- [ ] All project pages load
- [ ] All capability pages load
- [ ] All industry pages load
- [ ] OG images generate correctly
- [ ] Structured data validates
- [ ] Analytics tracking
- [ ] No console errors
- [ ] Mobile responsive
- [ ] PageSpeed scores 90+

---

**Last Updated**: 2026-10-06
**Deployed By**: Vayva Tech
**Platform**: Vercel
**Framework**: Next.js 16.3.6
