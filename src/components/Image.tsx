type ImageProps = {src : string, alt : string, className : string};
export function Image ({ src, alt, className } : Readonly<ImageProps>) {
    return (
      <img
        className={className}
        src={`${import.meta.env.BASE_URL}${src}`}
        alt={alt}
      />
    );
  };
  
  