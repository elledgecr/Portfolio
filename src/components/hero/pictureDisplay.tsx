import MeImage from "../../assets/Me.png"

const HeroPictureDisplay: React.FC = () => {
    return <>
        <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-gray-200 mb-8 md:mb-0">
			<img
				src={MeImage}
				alt="Portfolio"
				className="object-cover w-full h-full"
			/>
		</div>
    </>
}

export default HeroPictureDisplay;