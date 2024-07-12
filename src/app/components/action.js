import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getkeyword = createAsyncThunk(
  "/post/getkeyword",
  async ({ text }) => {
    const options = {
      method: "GET",
      url: "https://google-seo-keyword-research-ai.p.rapidapi.com/keyword-research",
      params: {
        keyword: text,
        country: "in",
      },
      headers: {
        "x-rapidapi-key": "721955d12emsh12900079c7be162p1e7203jsnb805721c4d3d",
        "x-rapidapi-host": "google-seo-keyword-research-ai.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);
