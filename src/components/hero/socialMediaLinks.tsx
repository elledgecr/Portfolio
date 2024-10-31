import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import SocialMediaIcon from "../../elements/socialMediaIcon"

const HeroSocialMediaLinks: React.FC = () => {
    return <>
        <div className="flex space-x-4 text-primary mt-4">
			<SocialMediaIcon icon={faLinkedin} href="https://www.linkedin.com/in/christian-elledge-b5b55628a/" />
			<SocialMediaIcon icon={faGithub} href="https://github.com/Cigatronix" />
		</div>
    </>
}

export default HeroSocialMediaLinks