import '../styles/github-icon.css'

export default function GitHubIcon({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="github-icon"
        src="./github-mark.svg"
        alt="GitHub Icon"
        height="35"
        width="35"
      />
    </a>
  )
}