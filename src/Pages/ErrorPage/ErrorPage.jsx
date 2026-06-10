import { Link } from "react-router";
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-red-500">404</h1>

                <h2 className="mt-4 text-3xl font-semibold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-3 text-gray-600 max-w-md mx-auto">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>

                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;