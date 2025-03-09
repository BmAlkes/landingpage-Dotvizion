import { isAxiosError } from "axios";
import api from "../lib/axios";

export async function CreateLead(formData: any) {
    try {
      const { data } = await api.post("/leads", formData);
      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        // Correção aqui: acessando a mensagem de erro corretamente
        const errorMessage = error.response.data.error || error.response.data.message || 'Erro ao enviar o formulário';
        throw new Error(errorMessage);
      } else {
        // Lidando com outros tipos de erros
        throw new Error('Ocorreu um erro ao processar sua solicitação');
      }
    }
  }