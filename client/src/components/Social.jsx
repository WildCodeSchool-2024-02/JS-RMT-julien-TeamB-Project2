function SocialIcon({ href, src, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img className="iconFooter" src={src} alt={alt} />
    </a>
  );
}

export default SocialIcon;
