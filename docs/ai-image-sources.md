# AI article raster images

Added 2026-10-08. Images are stored locally in `public/images/ai`; article captions distinguish original teaching examples from third-party documentation.

## Original examples

The 20 `*-example.png` files are original Vietnamese teaching examples made for DUA Edu. Tables, SQL and responses are authored learning scenarios, not screenshots of a commercial AI service or evidence of actual business outcomes. The image itself and its caption mark fictional data. Alt text describes the main lesson in readable HTML.

`src/aiArticleImages.ts` holds image captions, dimensions and placement. Re-export originals with `scripts/generate-ai-article-images.mjs` using Playwright and Chromium. The exporter accepts optional `PLAYWRIGHT_MODULE` and `BROWSER_EXECUTABLE_PATH` environment variables for an existing tool installation. It uses local IBM Plex Sans fonts and produces PNGs without external font requests.

## Reference images

Reference screenshots and the agent diagram are preserved as downloaded, including any original labels or attribution. They illustrate concepts and interfaces in their documentation, rather than a promise about the exact current interface. Each image links to its source article.

| Local asset | Source article | Original asset |
|---|---|---|
| excel-analysis.jpg | [Microsoft Support: Analyze Data in Excel](https://support.microsoft.com/en-us/excel/analyze-data-in-excel) | https://support.microsoft.com/en-us/excel/media/excel-ideas-02.jpg |
| agent-tools.png | [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents) | https://www-cdn.anthropic.com/images/4zrzovbb/website/d3083d3f40bb2b6f477901cc9a240738d3dd1371-2401x1000.png |
| powerbi-explore.png | [Microsoft Learn: Retail Analysis sample](https://learn.microsoft.com/en-us/power-bi/create-reports/sample-retail-analysis) | https://learn.microsoft.com/en-us/power-bi/create-reports/media/sample-retail-analysis/retail13.png |
| powerbi-report.png | [Microsoft Learn: Report view](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-report-view) | https://learn.microsoft.com/en-us/power-bi/create-reports/media/desktop-report-view/add-visual.png |
| powerbi-dashboard.png | [Microsoft Learn: Retail Analysis sample](https://learn.microsoft.com/en-us/power-bi/create-reports/sample-retail-analysis) | https://learn.microsoft.com/en-us/power-bi/create-reports/media/sample-retail-analysis/retail1.png |

All article images use lazy loading and explicit dimensions. The full-size link opens the raster file for zooming, especially on mobile. No image hotlinks or tracking pixels are used.
