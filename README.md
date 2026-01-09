# PinPal - Tryout Task 2026

## Overview
This project is a React-based landing page for **PinPal**, a pet adoption center for Aspins and Puspins. It demonstrates a modern, responsive design and integration logic for n8n automation.

## Project Structure
- **Frontend**: Vite + React
- **Styling**: Vanilla CSS (Modern CSS Variables & Flexbox/Grid)
- **Routing**: React Router DOM
- **Automation**: n8n Workflow (JSON provided)

## Pages
1. **Home**: Hero section, Mission, Featured Pets preview, and Contact Form.
2. **Adopt**: Full list of adoptable pets with filtering (Dog/Cat).
3. **Donate**: Donation information and impact breakdown.

## Automation & AI Workflow
The Contact Form in the application is designed to trigger an n8n workflow.

### Workflow Logic (`n8n_workflow.json`)
1.  **Webhook Trigger**: Receives the form data (Name, Email, Message) via a POST request.
2.  **AI Processing (OpenAI)**:
    -   **System Prompt**: Acts as a friendly PinPal representative.
    -   **Task**: Analyzes the user's message and generates a personalized, warm, and professional email draft.
3.  **Email Dispatch**: Sends the generated response to the user's email address using an SMTP/Gmail node.

### How to Run Locally
1.  Install dependencies: `npm install`
2.  Start the development server: `npm run dev`
3.  Open `http://localhost:5173`

## Artifacts
- **Workflow File**: Import `n8n_workflow.json` into your n8n instance.
- **Demo Recording**: See `pinpal_demo_walkthrough.webp` for a visual tour.
