import React, { useState, useCallback, useMemo, memo } from 'react';

const AppImage = memo(function AppImage({
    src,
    alt = '',
    width,
    height,
    className = '',
    priority = false,
    fill = false,
    onClick,
    fallbackSrc = '',
    loading = 'lazy',
    style,
    ...props
}) {
    const [imageSrc, setImageSrc] = useState(src);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleError = useCallback(() => {
        if (!hasError && fallbackSrc && imageSrc !== fallbackSrc) {
            setImageSrc(fallbackSrc);
            setHasError(true);
        } else {
            setHasError(true);
        }
        setIsLoading(false);
    }, [hasError, imageSrc, fallbackSrc]);

    const handleLoad = useCallback(() => {
        setIsLoading(false);
        setHasError(false);
    }, []);

    const imageClassName = useMemo(() => {
        const classes = [className];
        if (isLoading) classes.push('bg-gray-200');
        if (onClick) classes.push('cursor-pointer hover:opacity-90 transition-opacity duration-200');
        return classes.filter(Boolean).join(' ');
    }, [className, isLoading, onClick]);

    const combinedStyle = useMemo(() => {
        if (fill) {
            return {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                ...style,
            };
        }
        return style;
    }, [fill, style]);

    if (fill) {
        return (
            <div className="relative w-full h-full">
                <img
                    src={imageSrc}
                    alt={alt}
                    className={imageClassName}
                    style={combinedStyle}
                    loading={priority ? 'eager' : loading}
                    onError={handleError}
                    onLoad={handleLoad}
                    onClick={onClick}
                    {...props}
                />
            </div>
        );
    }

    return (
        <img
            src={imageSrc}
            alt={alt}
            width={width}
            height={height}
            className={imageClassName}
            style={combinedStyle}
            loading={priority ? 'eager' : loading}
            onError={handleError}
            onLoad={handleLoad}
            onClick={onClick}
            {...props}
        />
    );
});

AppImage.displayName = 'AppImage';

export default AppImage;