export default function NotFound() {
  return (<section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
            <div className="animate-fade-in space-y-6">
                <h1 className="text-7xl font-extrabold tracking-tight text-black dark:text-white">
                404
                </h1>

                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                La página que buscas no existe o fue movida.  
                Verifica la URL o vuelve al inicio.
                </p>

                <a
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-white font-medium shadow-lg shadow-black/10 transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                >
                Volver al inicio
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                </a>
            </div>

            <style>{`
                .animate-fade-in {
                animation: fadeIn 0.6s ease-out forwards;
                }
                @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
      </section>
  )
}
