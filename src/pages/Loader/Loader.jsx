// Loader.js
import React, { useEffect, useState } from 'react';
import './style.scss';

const Loader = ({ onAnimationComplete, colors }) => {
    const [pixels, setPixels] = useState([]);

    useEffect(() => {
        const numPixels = 1000; // Количество пикселей в дожде
        const centerX = window.innerWidth / 2; // Центр экрана по горизонтали
        const centerY = window.innerHeight / 2; // Центр экрана по вертикали
        const maxRadius = Math.min(centerX, centerY); // Максимальный радиус для начальных координат

        // Генерация начальных координат, анимации и цвета для каждого пикселя
        const initialPixels = Array.from({ length: numPixels }).map(() => {
            const x = Math.random() * window.innerWidth; // Случайная X-координата по ширине экрана
            const y = Math.random() * window.innerHeight; // Случайная Y-координата по высоте экрана
            const angle = Math.random() * 360; // Случайный угол направления
            const duration = (Math.random() * 2 + 1) + 's'; // Случайная длительность анимации
            const color = colors[Math.floor(Math.random() * colors.length)]; // Используем переданные цвета
            return { x, y, angle, duration, color };
        });
        setPixels(initialPixels);

        // После завершения анимации дождя вызываем колбэк
        const animationTimeout = setTimeout(() => {
            onAnimationComplete();
        }, 4000);

        return () => clearTimeout(animationTimeout);
    }, [colors]);

    return (
        <div className="pixel-rain-container">
            {pixels.map((pixel, index) => (
                <div
                    key={index}
                    className="pixel"
                    style={{
                        left: pixel.x + 'px',
                        top: pixel.y + 'px',
                        transform: `rotate(${pixel.angle}deg)`,
                        animationDuration: pixel.duration,
                        backgroundColor: pixel.color, // Применяем цвет
                    }}
                />
            ))}
        </div>
    );
};

export default Loader;
