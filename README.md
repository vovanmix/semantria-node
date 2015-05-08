Semantria-node
==============

Semantria-node is a port of SemantriaJavaScriptSDK for use with Nodejs or the browser.

### Quick Start

```
npm install semantria-node
```

### Usage
```js
var Semantria = require('semantria-node');
var session = new Semantria.Session(
        consumer_key,
        consumer_secret,
        application_name,
        format,
        use_compression
    );

var documentId = (new Date).getTime();

var result = session.queueDocument({
    id: documentId,
    text: "it works"
});

if (result === 202) {
    var data = SemantriaSession.getDocument(documentId);
    return {
        sentiment_score: data.sentiment_score,
        sentimentText: data.sentiment_polarity
    }
}

```
| Parameter        | Description           |
| :------------- |:-------------|
| consumer_key | Semantria API key |
| consumer_secret | Semantria API secret |
| application_name | (Optional) Reference name for application |
| format | (Optional) Default: "json" |
| use_compression | (Optional) |

---

Semantria is a text analytics and sentiment analysis API. It allows you to gain valuable insights from your unstructured text content. It is based on Lexalytics’ Salience – a text analytics and sentiment analysis engine. The same engine as the one being used by Oracle, Cisco, Thomson Reuters, Saleforce.com - Radian6, Visible, Lithium, and 50+ other leaders in the space.

Semantria offers JavaScript SDK, that is the most convenient way to get started with the Semantria API on JavaScript. SDK implements all the available Semantria features and demonstrate best practices of API usage. A Free trial is available at http://www.semantria.com/trial

Functionality includes:
- Entity extraction (both model and dictionary based)
- Theme/keyword extraction
- Categorization/Classification (Query and Wikipedia ontology-based)
- Summarization
- Sentiment Analysis (document, entity, theme/keyword, and category level)
- Semantic Rollups (birds-eye view on your dataset, combining SPSS-like statistical analysis and full scale NLP approach)
- Full support of 5 languages (entity extraction, categorization, sentiment analysis, etc): English, French, Portuguese, Spanish, and German.
- Part of speech markup

Semantria also has a free Excel Add-In that let’s you process content from inside your Excel without any coding, integration work, etc. It is a fully functional API client with an easy to use API configuration GUI is available at http://www.semantria.com/excel An Excel Add-In demo overview, categorization tutorial, custom entities set-up, and sentiment adjustment video are all available at http://www.semantria.com/video
