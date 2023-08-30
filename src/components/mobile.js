import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../FontAwesomeIcons';

export default function Mobile() {
    return (
        <div
            className="mb-20 border-2 border-pink-800 flex flex-col justify-center items-center max-w-full max-h-full px-40">
            <div className="mockup-phone max-w-2/3 max-h-full">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo w-full pt-10 pb-10">
                        <section>
                            <div className="hero bg-base-200">
                                <div className="hero-content flex-col lg:flex-row-reverse">
                                    <div className="text-center lg:text-left">
                                        <h1 className="text-5xl font-medium">GET <span className="font-extrabold">IN TOUCH</span></h1>
                                        <p className="py-6">I'm excited to connect with you! Whether you have questions about my work or are interested in working together, don't hesitate to get in touch on my "get in touch" page.</p>
                                        <div className="flex space-x-4">
                                            <img className="w-6 h-6" src="/instagram.png" alt="Instagram" />
                                            <img className="w-6 h-6" src="/facebook.png" alt="Facebook" />
                                            <img className="w-6 h-6" src="/github.png" alt="GitHub" />
                                            <img className="w-6 h-6" src="/linkedin.png" alt="LinkedIn" />
                                            <img className="w-6 h-6" src="/telegram.png" alt="Telegram" />
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                        <div>
                                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                                            <FontAwesomeIcon icon={['fab', 'github']} />
                                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                                            <FontAwesomeIcon icon="fa-brands fa-facebook" beat style={{color: "#005eff",}} />                                        </div>
                                    </div>
                                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                        <div className="card-body">
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="text" placeholder="email" className="input input-bordered" />
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Password</span>
                                                </label>
                                                <input type="text" placeholder="password" className="input input-bordered" />
                                                <label className="label">
                                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                            </div>
                                            <div className="form-control mt-6">
                                                <button className="btn btn-primary">Login</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}