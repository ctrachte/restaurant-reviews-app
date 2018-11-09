# Restaurant Reviews App

## Project Overview
- This project is a completed challenge from Udacity's Grow with Google Challenge part 2, for Front End Developers.
- For this project, I incrementally converted a static webpage to a mobile-ready web application. I took a static design that lacked accessibility and converted the design to be responsive on different sized displays and accessible for screen reader use.
- In addition I added a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

For this project, I was provided the code for a restaurant reviews website. The code had a lot of issues, barely usable on a desktop browser, much less a mobile device. It also didn't include any standard accessibility features, and it didn't work offline at all. I updated the code to resolve these issues while still maintaining the included functionality.

### How to start this project on your machine!

1. Clone this repository using the command `git clone https://github.com/ctrachte/restaurant-reviews-app.git`

2. In the directory you cloned to, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. If it isn't, visit Python's [website](https://www.python.org/) to download and install the software. Then if you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`.

3. With your server running, visit the site: `http://localhost:8000`, and make any changes you wish or fiddle with the code. **Knock yourself out!**

## Dependencies:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` in both `js/main.js` and `js/restaurant_info.js` with a token from [Mapbox](https://www.mapbox.com/) for it to fetch data from the API.

## I want to attempt this challenge too!
  - [Check out the starter code here from Udacity!](https://github.com/udacity/mws-restaurant-stage-1)
