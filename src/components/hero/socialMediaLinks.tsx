import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const HeroSocialMediaLinks: React.FC = () => {
    return <>
        <div className="flex space-x-4 text-primary mt-4">
			<a href="https://www.linkedin.com/in/christian-elledge-b5b55628a/" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 hover:text-accent transition duration-300" />
			</a>
			<a href="https://github.com/Cigatronix" target="_blank" rel="noopener noreferrer">
				<FontAwesomeIcon icon={faGithub} className="w-6 h-6 hover:text-accent transition duration-300" />
			</a>
		</div>
    </>
}

export default HeroSocialMediaLinks