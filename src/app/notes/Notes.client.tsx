'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { fetchNotes } from '../../lib/api/api';
// Імпортуй свої компоненти
// import NoteList from '../../components/NoteList/NoteList';
// import NoteForm from '../../components/NoteForm/NoteForm';
// import SearchBar from '../../components/SearchBar/SearchBar';
// import css from './Notes.module.css'; // Не забудь завантажити стилі з репозиторію GoIT!

export default function NotesClient() {
  // Твої стани для пагінації, пошуку та сортування
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'created' | 'updated'>('created');

  // Використовуємо useQuery. 
  // Дані вже будуть на місці завдяки HydrationBoundary з page.tsx
  const { data, isLoading, isError } = useQuery({
    queryKey: ['notes', page, perPage, search, sortBy],
    queryFn: () => fetchNotes({ page, perPage, search, sortBy }),
  });

  // Логіка з твого старого App.tsx для рендеру
  return (
    <main>
      <div>
        {/* Сюди вставляєш свої SearchBar, NoteForm, NoteList та пагінацію */}
        {/* <NoteForm /> */}
        {/* <SearchBar /> */}
        {/* <NoteList notes={data?.notes || []} /> */}
      </div>
    </main>
  );
}