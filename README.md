# T3 Gallery

## TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic ui with mock data
- [ ] Tidy up build process
- [ ] Actually set up a database (vercel postgres)
- [ ] Attach database to UI
- [ ] Add authentication (w/ clerk)
- [ ] Add image upload
- [ ] "taint" (server-only)
- [ ] Use Next/Image component
- [ ] Error management (w/ Sentry)
- [ ] Routing/image page (parallel route)
- [ ] Update upload button to be less cringe
- [ ] Analytics (posthog)
- [ ] Delete button (w/ Server Actions)
- [ ] Ratelimiting (upstash)

## A challenge to the viewer

- Fix the page layout for images of different resolutions
- "Selecting" images on the gallery page
- "infinite scroll"
- Folders/albums

## working with clerk for auth
1. first set up your middleware.ts (take from the docs)
2. generate the keys (go to the dashboard and create your application)
3. in layout page wrap the provider 
4. use the signedout and signedin div to (in nav)