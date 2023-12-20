export const websites = [
  {
    longUrl: "https://www.example1.com/long-url",
    shortUrl: "https://short.url/123",
  },
  {
    longUrl: "https://www.example2.com/long-url",
    shortUrl: "https://short.url/456",
  },
  {
    longUrl: "https://www.example3.com/long-url",
    shortUrl: "https://short.url/789",
  },
];

export const urlValidatorString =
  "/^((https?|ftp)://)?(www.)?(((([a-z]|d|-|.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[da-f]{2})|[!$&'()*+,;=]|:)*@)?(((d|[1-9]d|1dd|2[0-4]d|25[0-5]).(d|[1-9]d|1dd|2[0-4]d|25[0-5]).(d|[1-9]d|1dd|2[0-4]d|25[0-5]).(d|[1-9]d|1dd|2[0-4]d|25[0-5]))|((([a-z]|d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|d|-|.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))).)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|d|-|.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))).?)(:d*)?)(/((([a-z]|d|-|.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[da-f]{2})|[!$&'()*+,;=]|:|@)+(/(([a-z]|d|-|.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[da-f]{2})|[!$&'()*+,;=]|:|@)*)*)?)?(?((([a-z]|d|-|.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[da-f]{2})|[!$&'()*+,;=]|:|@)|[\uE000-\uF8FF]|/|?)*)?(#((([a-z]|d|-|.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[da-f]{2})|[!$&'()*+,;=]|:|@)|/|?)*)?$/i";
