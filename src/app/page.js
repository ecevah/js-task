import Link from "next/link";

function WelcomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800">
          Welcome dear administrator? 👋🏻
        </h1>
        <div className="text-gray-600">
          <h2 className="text-lg font-medium">Exam Rules:</h2>
          <ul className="list-disc list-inside">
            <li>A total of 10 questions will be asked.</li>
            <li>You have 30 seconds for each question.</li>
            <li>
              You cannot click on the options within the first 10 seconds.
            </li>
            <li>
              The answers given to the questions cannot be changed afterwards.
            </li>
            <li>At the end of the test, all your answers will be shown.</li>
          </ul>
        </div>
        <Link href="/quiz">
          <div className="w-full px-6 py-3 bg-blue-500 text-white text-center rounded hover:bg-blue-600 transition duration-200 ease-in-out cursor-pointer mt-6">
            Start
          </div>
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
