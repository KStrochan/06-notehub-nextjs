// src/lib/api/api.ts
import axios from 'axios';
import type { Note } from '@/types/note';

const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN || '';
const API_URL = 'https://notehub-public.goit.study/api';

export const noteApi = axios.create({
  baseURL: API_URL,
});

noteApi.interceptors.request.use((config) => {
  if (TOKEN && config.headers) {
    config.headers.Authorization = `Bearer ${TOKEN}`;
  }
  return config;
});

export const fetchNotes = async (params: { page: number; perPage: number; search?: string; sortBy?: 'created' | 'updated' }) => {
  const response = await noteApi.get('/notes', { params });
  return response.data;
};

export const fetchNoteById = async (id: string) => {
  const response = await noteApi.get(`/notes/${id}`);
  return response.data;
};