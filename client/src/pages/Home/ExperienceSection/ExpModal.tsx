interface ExperienceData {
    id: number;
    heading: string;
    description: string;
    thumbnail: string;
    detailedContent: string[];
}

interface ExpModalProps {
    experience: ExperienceData;
    onClose: () => void;
}

export default function ExpModal({ experience, onClose }: ExpModalProps) {
    const { heading, detailedContent, thumbnail } = experience;

    return (
      <div className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
          <div className="flex items-start justify-between">
            <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">
              {heading}
            </h2>
            <button 
                type="button" 
                aria-label="Close"
                onClick={onClose}
                className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
  
          <div className="mt-4 text-pretty text-gray-700">
            {detailedContent.map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph}
              </p>
            ))}
            {thumbnail && (
              <img
                src={thumbnail}
                alt={heading}
                className="mt-6 w-full rounded-lg object-cover"
              />
            )}
          </div>
  
          <footer className="mt-6 flex justify-end gap-2">
            <button 
                type="button" 
                onClick={onClose}
                className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
            >
              Close
            </button>
          </footer>
        </div>
      </div>
    );
  }