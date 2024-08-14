const MapIframe = ({ src, className }: { src: string; className?: string }) => {
  return (
    <div>
      <iframe
        className={className}
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        src={src}
      />
    </div>
  );
};

export default MapIframe;
