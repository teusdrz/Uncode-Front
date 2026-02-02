'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.css';

interface ToastProps {
    message: string;
    type?: 'success' | 'error' | 'info';
    duration?: number;
    onClose: () => void;
}

export default function Toast({ message, type = 'success', duration = 3000, onClose }: ToastProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    if (!mounted) return null;

    return createPortal(
        <div
            className={`${styles.toast} ${styles[type]} ${!isVisible ? styles.hide : ''}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
        >
            <div className={styles.icon} aria-hidden="true">
                {type === 'success' && '✓'}
                {type === 'error' && '✕'}
                {type === 'info' && 'ℹ'}
            </div>
            <div className={styles.message}>{message}</div>
        </div>,
        document.body
    );
}
