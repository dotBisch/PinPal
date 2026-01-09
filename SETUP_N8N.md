# How to Set Up n8n with Docker & Gemini
This guide will help you run n8n locally and connect it to your PinPal website using **Google Gemini**.

## Costs
- **Docker**: FREE (Docker Desktop Personal)
- **n8n**: FREE (Self-hosted/Local)
- **Google Gemini API**: FREE (Free tier available via Google AI Studio)

## Step 1: Start n8n
Run:
```bash
docker-compose up -d
```

## Step 2: Access n8n
Open: [http://localhost:5678](http://localhost:5678)

## Step 3: Import the Gemini Workflow
1.  In n8n, go to **Workflows** -> **Import from File**.
2.  Select `n8n_workflow_gemini.json` (I just created this for you).

## Step 4: Get Your Gemini API Key
1.  Go to [Google AI Studio](https://aistudio.google.com/).
2.  Click **"Get API key"**.
3.  Create a key in a new project (It's free).
4.  Copy the key.

## Step 5: Configure n8n Credentials
1.  **Google Gemini Node**:
    -   Double click the "Google Gemini" node in n8n.
    -   Create new credentials -> "Google Gemini API".
    -   Paste your API Key.
2.  **Email Node**:
    -   Configure your SMTP settings (e.g., Gmail App Password).

## Step 6: Connect to React
1.  Activate the workflow or click "Listen for Test Event".
2.  Copy the Webhook URL.
3.  Update `src/components/ContactForm.jsx` with this URL.

## Step 7: Test
Submit the form on your website. n8n will receive it, send it to Gemini (Free), and email the response!
