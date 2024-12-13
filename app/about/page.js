import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
      <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Hey, I am Sairam, you motherf****r</h1>
        <p className="text-gray-600  dark:text-gray-50 text-4xl mb-4">
          Go read my blogs.
        </p>
      </div>
    </div>
  );
}
