import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function CreateLead(formData: any) {
    try {
      const { data } = await api.post("/leads", formData);
      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        throw new Error(error.response.data.console.error);
      }
    }
  }