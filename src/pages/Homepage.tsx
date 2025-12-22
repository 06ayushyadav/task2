import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="min-h-screen w-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center px-4">

                <div className="w-full max-w-2xl text-center">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                        Camera Test App
                    </h1>

                    <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg">
                        A simple tool to check whether your browser camera is working properly.
                        No photos are captured. No data is stored.
                    </p>

                    <div className="mt-10 flex justify-center">
                        <Button text="Start Camera Test" onClick={()=>navigate("/camera-test")} variant="homepagebtn" />
                    </div>


                </div>

            </div>
            <Footer />
        </>
    );
}

export default Homepage
