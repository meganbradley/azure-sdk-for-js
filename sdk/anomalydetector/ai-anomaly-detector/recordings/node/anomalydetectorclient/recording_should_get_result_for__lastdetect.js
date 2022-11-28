let nock = require('nock');

module.exports.hash = "e2324188198a85511d20106133424a65";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint:443', {"encodedQueryParams":true})
  .post('/anomalydetector/v1.1-preview.1/timeseries/last/detect', {"series":[{"timestamp":"1972-01-01T00:00:00.000Z","value":826},{"timestamp":"1972-02-01T00:00:00.000Z","value":799},{"timestamp":"1972-03-01T00:00:00.000Z","value":890},{"timestamp":"1972-04-01T00:00:00.000Z","value":900},{"timestamp":"1972-05-01T00:00:00.000Z","value":961},{"timestamp":"1972-06-01T00:00:00.000Z","value":935},{"timestamp":"1972-07-01T00:00:00.000Z","value":894},{"timestamp":"1972-08-01T00:00:00.000Z","value":855},{"timestamp":"1972-09-01T00:00:00.000Z","value":809},{"timestamp":"1972-10-01T00:00:00.000Z","value":810},{"timestamp":"1972-11-01T00:00:00.000Z","value":766},{"timestamp":"1972-12-01T00:00:00.000Z","value":805},{"timestamp":"1973-01-01T00:00:00.000Z","value":821},{"timestamp":"1973-02-01T00:00:00.000Z","value":773},{"timestamp":"1973-03-01T00:00:00.000Z","value":883},{"timestamp":"1973-04-01T00:00:00.000Z","value":898},{"timestamp":"1973-05-01T00:00:00.000Z","value":957},{"timestamp":"1973-06-01T00:00:00.000Z","value":924},{"timestamp":"1973-07-01T00:00:00.000Z","value":881},{"timestamp":"1973-08-01T00:00:00.000Z","value":837},{"timestamp":"1973-09-01T00:00:00.000Z","value":784},{"timestamp":"1973-10-01T00:00:00.000Z","value":791},{"timestamp":"1973-11-01T00:00:00.000Z","value":760},{"timestamp":"1973-12-01T00:00:00.000Z","value":802},{"timestamp":"1974-01-01T00:00:00.000Z","value":828},{"timestamp":"1974-02-01T00:00:00.000Z","value":1030},{"timestamp":"1974-03-01T00:00:00.000Z","value":889},{"timestamp":"1974-04-01T00:00:00.000Z","value":902},{"timestamp":"1974-05-01T00:00:00.000Z","value":969},{"timestamp":"1974-06-01T00:00:00.000Z","value":947},{"timestamp":"1974-07-01T00:00:00.000Z","value":908},{"timestamp":"1974-08-01T00:00:00.000Z","value":867},{"timestamp":"1974-09-01T00:00:00.000Z","value":815},{"timestamp":"1974-10-01T00:00:00.000Z","value":812},{"timestamp":"1974-11-01T00:00:00.000Z","value":773},{"timestamp":"1974-12-01T00:00:00.000Z","value":813},{"timestamp":"1975-01-01T00:00:00.000Z","value":834},{"timestamp":"1975-02-01T00:00:00.000Z","value":782},{"timestamp":"1975-03-01T00:00:00.000Z","value":892},{"timestamp":"1975-04-01T00:00:00.000Z","value":903},{"timestamp":"1975-05-01T00:00:00.000Z","value":966},{"timestamp":"1975-06-01T00:00:00.000Z","value":937},{"timestamp":"1975-07-01T00:00:00.000Z","value":896},{"timestamp":"1975-08-01T00:00:00.000Z","value":858},{"timestamp":"1975-09-01T00:00:00.000Z","value":817},{"timestamp":"1975-10-01T00:00:00.000Z","value":827},{"timestamp":"1975-11-01T00:00:00.000Z","value":797},{"timestamp":"1975-12-01T00:00:00.000Z","value":843}],"granularity":"monthly","maxAnomalyRatio":0.25,"sensitivity":95})
  .reply(200, {"expectedValue":809.5658016931228,"isAnomaly":false,"isNegativeAnomaly":false,"isPositiveAnomaly":false,"lowerMargin":40.47829008465612,"period":12,"severity":0,"suggestedWindow":49,"upperMargin":40.47829008465612}, [
  'Content-Length',
  '218',
  'Content-Type',
  'application/json',
  'csp-billing-usage',
  'CognitiveServices.AnomalyDetector.DataPoints=1',
  'model-id',
  '10',
  'x-envoy-upstream-service-time',
  '38',
  'apim-request-id',
  '3462ec44-3abe-414c-b321-5113ef191e62',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Thu, 13 Jan 2022 22:22:12 GMT'
]);