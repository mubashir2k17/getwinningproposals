# Get Winning Proposals

Service website for outsourced electrical takeoffs, cost estimates, and bid proposal drafting for U.S. electrical contractors.

## Preview

Run `python3 -m http.server 8000 --bind 127.0.0.1` from the repository root and open `http://127.0.0.1:8000/`. The GitHub Pages site uses plain HTML, CSS, and JavaScript and needs no build. The root `CNAME` retains the custom domain.

## Intake and samples

The consultation form opens a draft in the visitor’s email app; it does not send or store submissions. Update the public address and `mailto:` link together in `index.html` if the inquiry inbox changes. Keep the first contact to basic project details and agree on a private transfer with the contractor after the call.

The plan, estimate table, and proposal excerpt are one fictional example. When updating it, keep `takeoff.svg` and both excerpts in `index.html` in sync. Publish customer work or testimonials only with permission.
