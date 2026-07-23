/// <reference types="node" />
import axios from 'axios';

export const handler = async () => {
  try {
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const spreadsheetId = '1oxdvKY6k8M0dQ4Ao3g2YLkhKbGsYeUTNThpwVYsqshk';
    const sheetName = 'Sheet1';
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!A:C?key=${apiKey}`;

    const response = await axios.get(url);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,OPTIONS'
      },
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error('Error fetching events:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Failed to fetch events' })
    };
  }
};