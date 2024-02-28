# Crypto Price Chart Proj Overview

Hey TimeWave team! Excited to share my take on the coding challenge - a deep dive into the crypto world, focusing on the $ATOM-$NTRN pair's performance over the last 7 days. Built with Next.js, this project is all about showcasing those crypto fluctuations in a neat, interactive chart.

## Why Next.js?

Picked Next.js for a buncha reasons:
- **SSR (Server-Side Rendering)** boosts our app's speed & SEO. Fast load times = happy users.
- **Routing's a breeze**: Moving around the app is super smooth, key for flipping through different crypto pairs.
- **Dev Experience (DX)**: With Fast Refresh, tweaking and seeing changes in real-time is just awesome.

## Tech Stack & Tools

Got to work with some cool tech here:
- **React**: For crafting those reusable UI bits, keeping everything modular and tidy.
- **Chart.js & react-chartjs-2**: My go-tos for drawing charts that make data pop!
- **chartjs-adapter-date-fns**: Handles date & time on our charts like a champ.
- **TypeScript (TS)**: Catches bugs early with its type-checking superpowers.
- **Next Image**: For optimizing loading GIFs, cuz we all hate waiting, right?

## Approach

Here's the lowdown on how I tackled this:
1. **Fetching & State Handling**: Used `useState` and `useEffect` to manage state and side effects, pulling data from the Astroport API.
2. **Optimizing**: Threw in `useCallback` and `useMemo` to keep things efficient by memoizing functions and calculations.
3. **UI Components**: Built custom stuff like `PriceInfo` for showing price deets cleanly and reusably.
4. **Charts**: Made those charts sing with dual axes for price and ratio data – looks pretty sharp!

## Next Steps

Proud of what I've built, but there's always room to grow:
- **Dynamic Selection**: Letting users pick different crypto pairs and timeframes would be super cool.
- **Boost Performance & SEO**: Gonna dive deeper into Next.js’s SSR & SSG for even faster loads and better search rankings.
- **Accessibility (A11y)**: Planning to ramp up accessibility so everyone can get in on the crypto fun.
- **UI/UX Design**: Because making things look good is half the battle.

## Get It Running

Wanna see it live? Here’s the drill:
1. Clone the repo.
2. Install node v20.11.1.
2. Run `npm install` to snag those dependencies.
3. Fire it up with `npm run dev`.
4. Head to [http://localhost:3000](http://localhost:3000) and see it in action.

Super stoked to share this with you, TimeWave team! Hope it shows the kind of value I'm eager to bring to the table. Looking forward to potentially discussing it further and hearing your thoughts!
