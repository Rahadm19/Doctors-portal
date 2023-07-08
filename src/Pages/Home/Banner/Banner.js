import "./banner.css"
import chair from '../../../assets/images/chair.png'

const Banner = () => {
    return (

        <div className="hero bg-image">
            <div className="hero-content flex-col lg:flex-row-reverse lg:py-20 sm:py-0">
                <img src={chair} className="lg:w-1/2 b-img rounded-lg shadow-2xl basis-1/2" />
                <div className="basis-1/2">
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;