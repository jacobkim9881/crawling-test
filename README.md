# crawling-test
This is node webserver for crawling test

** Installing
```
git clone https://github.com/jacobkim9881/crawling-test.git
cd crawling-test
npm install
node app.js
```

** How to edit crawler in app.js
1. set url at c.queue('url'); at app.js
2. Crawling will be in callback function at Crawler object.
3. Target tags with $('tag name').each(()=> { function });
4. Check this link: https://cheerio.js.org/
