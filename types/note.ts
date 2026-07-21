// src/types/note.ts

export type NoteTag = 'Work' | 'Personal' | 'Important' | 'Todo';

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt: string;
}