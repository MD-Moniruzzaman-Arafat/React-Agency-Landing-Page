import featuresOne from '../../assets/features/feature-1.png';
import featuresTwo from '../../assets/features/feature-2.png';
import List from '../ReusableComponent/List';

export default function ServiceOne() {
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-800">
                <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">

                    {/* <!-- Sub Service 1 --> */}
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Work with tools you already use</h2>
                            <p className="mb-8 font-light lg:text-xl">
                                Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
                            </p>

                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <List text="Continuous integration and deployment" />
                                <List text="Development workflow" />
                                <List text="Knowledge management" />
                            </ul>

                            <p className="mb-8 font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                        </div>
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={featuresOne} alt="dashboard feature image" />
                    </div>

                    {/* <!-- Sub Service 2 --> */}
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={featuresTwo} alt="feature image 2" />
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                We invest in the world’s potential
                            </h2>
                            <p className="mb-8 font-light lg:text-xl">
                                Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
                            </p>

                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <List text="Dynamic reports and dashboards" />
                                <List text="Templates for everyone" />
                                <List text="Development workflow" />
                                <List text="Limitless business automation" />
                                <List text="Knowledge management" />
                            </ul>
                            <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
