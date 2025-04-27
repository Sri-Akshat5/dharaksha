import React from 'react';
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";

function Products() {
    return (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar">
           
            {/* Product 1 */}
            <section className="h-screen w-full bg-lime-800/40 py-12 px-6 flex flex-col justify-center items-center snap-start">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-50 mb-12">
                    STATE OF THE ART PACKAGING MATERIAL MADE OUT OF CROP STUBBLE WASTE
                </h2>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-green-900 mb-4">
                            Clean Blue Skies
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Ahead with our Parali-based eco-friendly packaging material.
                            It's better in your packaging than in your lungs.
                        </p>
                        <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition duration-300">
                            Explore Products
                        </button>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img
                            src={p1}
                            alt="Eco Friendly Packaging"
                            className="w-80 h-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                </div>
            </section>

            {/* Product 2 */}
            <section className="h-screen w-full bg-lime-800/40 py-12 px-6 flex flex-col justify-center items-center snap-start">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-50 mb-12">
                    STATE OF THE ART PACKAGING MATERIAL MADE OUT OF CROP STUBBLE WASTE
                </h2>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                    
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-green-900 mb-4">
                            Sustainable Tomorrow
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Our mission is to protect the environment by using waste innovatively.
                            Let's build a greener future together!
                        </p>
                        <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition duration-300">
                            Discover More
                        </button>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img
                            src={p2}
                            alt="Sustainable Packaging"
                            className="w-80 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                </div>
            </section>

            {/* Product 3 */}
            <section className="h-screen w-full bg-lime-800/40 py-12 px-6 flex flex-col justify-center items-center snap-start">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-50 mb-12">
                    STATE OF THE ART PACKAGING MATERIAL MADE OUT OF CROP STUBBLE WASTE
                </h2>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    
                    <div className="flex-1">
                        <h3 className="text-3xl font-bold text-green-900 mb-4">
                            Green Innovations
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Innovation rooted in nature. We transform agricultural waste into life-saving solutions.
                        </p>
                        <button className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 transition duration-300">
                            Learn More
                        </button>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img
                            src={p3}
                            alt="Innovative Packaging"
                            className="w-80 h-120 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                </div>
            </section>

        </div>
    );
}

export default Products;
