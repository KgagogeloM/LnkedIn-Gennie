
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LinkedIn Career Intelligence</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f3f6f9;
            color: #17202a;
            margin: 0;
            padding: 40px 20px;
          }
          main {
            max-width: 760px;
            margin: auto;
            background: white;
            padding: 32px;
            border-radius: 16px;
          }
          h1 { color: #0a66c2; }
          .card {
            padding: 18px;
            margin-top: 16px;
            background: #f3f6f9;
            border-radius: 10px;
          }
        </style>
      </head>
      <body>
        <main>
          <h1>LinkedIn Career Intelligence</h1>
          <p>Your personal career development dashboard.</p>
          <div class="card">
            <h2>Accounting</h2>
            <p>Track your professional development and career milestones.</p>
          </div>
          <div class="card">
            <h2>SAP Finance + AI</h2>
            <p>Build skills at the intersection of finance and technology.</p>
          </div>
          <p>Dashboard status: Initial version</p>
        </main>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
