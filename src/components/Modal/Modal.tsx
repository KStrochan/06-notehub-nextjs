import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// Отримуємо елемент модалки з дерева (створиться автоматично, якщо немає)
const modalRoot = document.getElementById('modal-root') || (() => {
  const div = document.createElement('div');
  div.id = 'modal-root';
  document.body.appendChild(div);
  return div;
})();

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  // Закриття по Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Блокуємо прокрутку сторінки при відкритій модалці
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Закриття по кліку на бекдроп
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div 
      className={css.backdrop} 
      onClick={handleBackdropClick}
      role="dialog" 
      aria-modal="true"
    >
      <div className={css.modal}>
        {children}
      </div>
    </div>,
    modalRoot
  );
}