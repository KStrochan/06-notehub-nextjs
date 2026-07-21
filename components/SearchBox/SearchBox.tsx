import { useState } from 'react';
import type { ChangeEvent } from 'react'; // Розділили звичайний імпорт та імпорт типу
import css from './SearchBox.module.css';

interface SearchBoxProps {
  onChange: (value: string) => void;
}

export default function SearchBox({ onChange }: SearchBoxProps) {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      value={value}
      onChange={handleChange}
    />
  );
}