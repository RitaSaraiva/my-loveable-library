import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
      { title: "Concept Pairing" },
      { name: "description", content: "Pair and explore political concepts" },
      { property: "og:title", content: "Concept Pairing" },
      { name: "twitter:title", content: "Concept Pairing" },
      { property: "og:description", content: "Pair and explore political concepts" },
      { name: "twitter:description", content: "Pair and explore political concepts" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a3f11d1e-5161-4e8a-b274-3ac85f4e8d97/id-preview-6e6eb388--c5beea87-974d-45bc-8055-3b260d9a2cea.lovable.app-1780075794917.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a3f11d1e-5161-4e8a-b274-3ac85f4e8d97/id-preview-6e6eb388--c5beea87-974d-45bc-8055-3b260d9a2cea.lovable.app-1780075794917.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => <div className="p-8 text-center">Not found</div>,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto max-w-md min-h-screen bg-background">
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}
