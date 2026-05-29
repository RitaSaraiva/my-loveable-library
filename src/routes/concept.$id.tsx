import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getConceptById } from "@/data/concepts";

export const Route = createFileRoute("/concept/$id")({
  component: ConceptPage,
  notFoundComponent: () => <div className="p-8">Concept not found</div>,
  errorComponent: () => <div className="p-8">Error loading concept</div>,
});

function ConceptPage() {
  const { id } = Route.useParams();
  const router = useRouter();

  const concept = getConceptById(id);

  if (!concept) {
    return <div className="p-8">Concept not found</div>;
  }

  return (
    <div className="min-h-screen px-6 pt-12 pb-24 bg-background">
      {/* Back button */}
      <div className="mb-20">
        <button
          onClick={() => router.history.back()}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
      </div>

      {/* Main content */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <p className="text-xs tracking-widest text-muted-foreground uppercase mb-12">
          Detected!
        </p>

        <h1 className="text-6xl serif mb-8">
          {concept.name}
        </h1>

        <p className="text-xs tracking-widest text-muted-foreground uppercase leading-loose max-w-xs">
          {concept.definition}
        </p>
      </div>
    </div>
  );
}