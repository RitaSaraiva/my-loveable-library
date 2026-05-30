import { createFileRoute, useRouter } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getPersonById } from "@/data/people";

export const Route = createFileRoute("/person/$id")({
  component: PersonPage,
  notFoundComponent: () => <div className="p-8">Person not found</div>,
  errorComponent: () => <div className="p-8">Error loading person</div>,
});

function PersonPage() {
  const { id } = Route.useParams();
  const router = useRouter();

  const person = getPersonById(id);

  if (!person) {
    return <div className="p-8">Person not found</div>;
  }

  return (
    <div className="min-h-screen pb-24 px-6 pt-12">
      <button
        onClick={() => router.history.back()}
        className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>

      <img
        src={person.image}
        alt={person.name}
        className="w-40 h-40 rounded-full object-cover mx-auto mb-6 bg-muted"
      />

      <h1 className="text-4xl serif text-center mb-2">
        {person.name}
      </h1>

      <p
        className="text-center text-xs tracking-widest uppercase mb-8"
        style={{ color: person.color }}
      >
        {person.role}
      </p>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {person.explanation}
      </p>
    </div>
  );
}