import SentenceForm from '@/components/SentenceForm';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-8 sm:px-8 sm:py-24">
      <SentenceForm />
      <footer className="mt-12 w-full text-center text-xs text-gray-500 sm:text-sm">
        <p>Powered by NL Explainer</p>
      </footer>
    </main>
  );
}
