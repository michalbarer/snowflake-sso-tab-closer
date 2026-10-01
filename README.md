# Snowflake SSO Tab Closer

Chrome extension that closes the leftover tab after Snowflake `externalbrowser` (Okta SSO) login:

> Your identity was confirmed and propagated to Snowflake PythonSnowpark. You can close this window now…

It runs only on `http://localhost/*` and `http://127.0.0.1/*`, and only closes a tab whose page contains
"Your identity was confirmed and propagated to Snowflake", so other local dev pages stay open.
It needs no extra permissions.

## Install

1. Open `chrome://extensions`
2. Turn on **Developer mode** (top right)
3. Click **Load unpacked** and select this folder

Chrome loads the extension from this folder, so keep the folder where it is after you install it.
