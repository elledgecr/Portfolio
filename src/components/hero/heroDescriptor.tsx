const HeroDescriptor: React.FC = () => {
    return <>
        <h1 className="text-4xl font-bold">
			CHRISTIAN <span className="text-primary">ELLEDGE</span>
		</h1>

		<div className="flex items-center mb-4">
			<h3 className="text-primary font-semibold text-xl mr-4">Software Engineer</h3>
			<div className="w-2/6 border-t-2 border-primary translate-y-1/2"></div>
		</div>

		<p className="max-w-lg text-white mb-6">
			Software Engineering Student. Advocate of deep learning and keeping an open mind.
		</p>
    </>;
}

export default HeroDescriptor;