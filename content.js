// Snowflake drivers (Python/Snowpark, JDBC, ODBC, ...) finish externalbrowser auth by
// serving this page from a one-off localhost server on a random port.
const SUCCESS_TEXT = "Your identity was confirmed and propagated to Snowflake";

const pageText = (document.body?.textContent || "").replace(/\s+/g, " ");
if (pageText.includes(SUCCESS_TEXT)) {
  // window.close() is blocked for tabs not opened by script, so ask the service worker.
  chrome.runtime.sendMessage("close-snowflake-auth-tab");
}
