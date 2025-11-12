
function Login() {
    return (
        <>
            <main className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card p-4 shadow-sm">
                            <h2 className="text-center mb-4">Login</h2>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                                <p className="text-center mb-0">Don't have an account? <a href="./register" className="text-decoration-none">Register here</a></p>
                                <p className="text-center mt-2"><a href="./forgot-password.html" className="text-decoration-none">Forgot Password?</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login