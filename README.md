# Mower Magic: website redesign mockup

Mockup rebuild of **http://mowermagic.com.au** for Mower Magic (mower sales, service, repairs, parts and hire). They have two stores: Baldivis (08) 9523 8111 and Mandurah (08) 9582 0255.

Plain HTML/CSS/JS. There's no build step and no framework. Open `index.html` in a browser, or serve the folder with any static server.

## Pages

| File | What's on it |
|---|---|
| `index.html` | Hero with tap-to-call, key facts strip, product categories, welcome text and brands, services, both stores and opening hours |
| `products.html` | All 9 product categories on one page with a sticky category bar. 54 products with their real photos and descriptions |
| `repairs.html` | After-sales service and repairs, key benefits, "Priority One" contractor service, what they repair, authorised agent brands |
| `parts.html` | Spare parts (10,000+ lines, 24 hr special orders), how to order, stockist brands |
| `sharpening.html` | Reels, bottom cutter bars and chipper blades sharpening, plus the repair service |
| `contact.html` | Both stores with address, phone, directions and map, opening hours, emails, fax, enquiry form |

Shared files: `css/style.css`, `js/main.js` (theme, mobile menu, scroll effects, enquiry form, footer year).

**Polish features:**
- Dark mode follows the phone or computer's setting. A sun/moon button in the header switches it, and the site remembers the choice.
- Sections and cards fade up into view as you scroll.
- Buttons, cards and menu links move smoothly on hover, and product photos zoom in slightly.
- The mobile menu opens with each link sliding in.
- Once you scroll, the header gets a shadow and a frosted-glass look.
- Links within a page scroll smoothly, and a back-to-top button appears further down.
- Images lazy-load.
- Keyboard users see clear focus outlines.
- If the visitor's device is set to reduce motion, the animations are switched off.

The old site had 16 separate menu pages. They're merged here: the 9 product category pages are now sections of `products.html`, and the 3 contact pages (Mandurah, Baldivis, Rockingham) are now one `contact.html`. Rockingham is mentioned as served from Baldivis, as on the old page. The old "Links" page only had one link (Husqvarna) and was dropped.

## What changed vs the old site (sales pitch)

- **The old site is hacked and full of spam links.** Almost every page has injected spam text and links at the bottom of the content: spyware apps, essay-writing services, even German-language spam. Examples are the home page (spyappsinsider.com), contact (cellspyapps.org), repairs (pro-academic-writers.com), sharpening (overnightessay.co.uk) and links (a "how to install spyware on a cell phone" page). Customers see this, and Google can penalise the site for it. **This is the strongest pitch point.**
- **"Not secure" warning.** There's no HTTPS, so browsers flag the site. The new site is static and ready to host on HTTPS.
- **Ancient platform.** WordPress 3.6 (2013) with old slider plugins, and the footer still says © 2016. Old unpatched WordPress is very likely how the spam got in. The new site is static HTML, so there's no WordPress to hack or update.
- **Broken on phones and iPads.** The new site has a responsive layout, a hamburger menu, a tap-to-call button in the header and a sticky "Call Baldivis" bar at the bottom on phones. It was tested at 375px, 768px and 1366px with no sideways scrolling.
- **Broken content fixed.** The sharpening page's photo was broken (its HTML was mangled by the spam injection), and the photo now shows. A pressure washer was listed under "Sprayers", and it's now under Engines & Pressure Washers. Leftover pages such as "Push Mowers old" and "push-test" are gone.
- **Dead social links removed.** Google+ shut down in 2019. Twitter was dropped too. Facebook is kept.
- **Phone numbers were hard to find.** The old footer only showed the Mandurah number. The new site shows both stores everywhere, with click-to-call links.
- **Faster.** The big hero photos were resized from 2500px (1.0–1.5 MB each) to 1600px (~200–300 KB). Product images lazy-load.
- **Same brand, refreshed.** It uses their real logo, the same green (#198048 / #006832) and yellow (#fff100), and the same Bowlby One heading font. All text, services, brands, hours and contact details come from their current site. No testimonials, prices or awards were added.

## Notes and things to confirm with the client

- The main call button uses the **Baldivis** number (08) 9523 8111, since that's the lead's number. Mandurah is shown alongside it everywhere. Ask them which store should be primary, and whether Mandurah (2/16 Rouse Rd) is still open.
- The **enquiry form** has no server on this demo. It opens the visitor's email app with the message filled in, addressed to sales@ or admin@ depending on the enquiry type. A real form service can be added when the site goes live.
- **Maps** are Google Maps embeds, and they need an internet connection to show.
- Product descriptions are shortened from the excerpts on their current product listings. Two items (TS342 and TS138) had no excerpt and use a plain one-line label. The range is presented as "a sample", as on the old site, so ask them to confirm what's still stocked.
- "Hire" is kept in the tagline because the old site advertises it, but the old site has no hire page or details.

## Image sources

Every image was downloaded from their own site, `http://www.mowermagic.com.au/wp-content/uploads/<same filename>`, unless noted.

| Image | Used for | Original page |
|---|---|---|
| `logoretina.png` | Header and footer logo | All pages (header) |
| `logonew.png` | Browser tab icon | All pages (footer) |
| `sliderbg2-1600.jpg` | Home hero, Parts and inner-page header (striped lawn) | Home slider (`sliderbg2.jpg`, resized from 2500px) |
| `sliderbg3-1600.jpg` | Repairs header | Home slider (`sliderbg3.jpg`, resized) |
| `sliderbg4-1600.jpg` | Products and Sharpening header | Home slider (`sliderbg4.jpg`, resized) |
| `sliderbg11-1600.jpg` | Contact header (forest) | Home slider (`sliderbg11.jpg`, resized) |
| `DErideon.png`, `DEmower.png`, `DEwhipsnip1.png`, `DEchainsaw1.png` | Home hero and category cards | Home slider cut-outs |
| `logos.jpg` | Push mower brand logos | /push-test/ |
| `Cylinder-Pic1.jpg` | Sharpening photo | /sharpening/ (broken on their site) |
| `image1.jpeg` – `image5.png`, `LTH20381.jpg`, `Husky-2242TDRF.jpg`, `CTH2038.jpg` | Ride-on mowers | /mowers/ |
| `image7.png`, `image8.jpeg`, `Husky-Push-Mower-LC19A.jpg`, `Masport-*.jpg` (President, Cylinder 400/500) | Push mowers | /push-test/ |
| `Cultivator-T300RS.jpg`, `Cultivator-TR430.jpg`, `Masport-Shredder.jpg` | Mulchers & cultivators | /mulchers-and-shredders/ |
| `image6.jpeg`, `122c.jpg`, `Husky-122LD.jpg`, `Husky-Brushcutter.jpg`, `Husky-323L.jpg` | Brushcutters | /brushcutters/ |
| `chainsaw2361.jpg`, `Chainsaw395XP.jpg`, `Top-Handle-Saw.jpg`, `Husky-Polesaw.jpg`, `Hedge-Trimmer-226HD60S.jpg`, `Husky-Hedge-Trimmer.jpg` | Chainsaws & hedge trimmers | /chainsaws/ |
| `450E-Series-Lawn-Mower-Engine.jpg`, `Horiz550-Series-08311.jpg`, `Riding-Mower-Engine-2400-Professional-Series-V-Twin2.jpg`, `Kohler-*.png`, `BS-Pressure-Washer*.jpg` | Engines & pressure washers | /engines/, /sprayers/ |
| `Blower-125BVX.jpg`, `H210-0173.jpg`, `billygoat*.png` | Blowers & vacs | /blowers-and-vacs/ |
| `Silvan-*.jpg`, `Diesel-Fuel-Tank.jpg`, `Water-Pump.jpg` | Sprayers & pumps | /sprayers/ |
| `Masport-Edger1.jpg`, `VICTA-EDGER.jpg`, `Splitter_28Ton.jpg`, `7-Tonne-Log-Splitter.jpg`, `Spreader*.jpg`, `Trailer.jpg`, `Poly-Cart-Trailer.jpg`, `Chain-Jolly-Grinder2.jpg` | Other products | /other-products/ |

Most product photos are manufacturer product shots (Husqvarna, Masport, Briggs & Stratton and others) that Mower Magic already publishes on their site.
