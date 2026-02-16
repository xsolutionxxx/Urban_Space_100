import { useState } from "react";
import Spinner from "@components/spinner/Spinner";

const ImageWithLoader = ({ src, alt, className, ...props }) => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
        <div className={`relative ${className}`}>
            {!loaded && !error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-inherit">
                    <Spinner /> 
                </div>
            )}
            
            <img
                src={src}
                alt={alt}
                className={`w-full h-full ${className} object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
                {...props}
            />

            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500 text-xs">
                    No Image
                </div>
            )}
        </div>
    );
};

export default ImageWithLoader; 