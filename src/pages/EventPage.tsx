import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface EventData {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  start_date: string;
  end_date: string | null;
  venue_name: string | null;
  address: string | null;
  borough: string | null;
  price_min: number | null;
  price_max: number | null;
  price_label: string | null;
  category: string | null;
  ticket_url: string | null;
  event_url: string | null;
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatPrice(event: EventData) {
  if (event.price_label) return event.price_label;
  if (event.price_min === 0 && (!event.price_max || event.price_max === 0))
    return "Free";
  if (event.price_min != null && event.price_max != null && event.price_max > event.price_min)
    return `$${event.price_min} – $${event.price_max}`;
  if (event.price_min != null) return `$${event.price_min}`;
  return null;
}

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;
    (supabase as any)
      .from("events")
      .select(
        "id, title, description, image_url, start_date, end_date, venue_name, address, borough, price_min, price_max, price_label, category, ticket_url, event_url"
      )
      .eq("id", id)
      .maybeSingle()
      .then(({ data, error }: { data: EventData | null; error: any }) => {
        if (error || !data) setNotFound(true);
        else setEvent(data);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (event) document.title = `${event.title} | Sift`;
  }, [event]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  if (notFound || !event) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center px-6 pt-32 text-center">
          <h1 className="mb-2 font-serif text-3xl italic text-foreground">
            Event not found
          </h1>
          <p className="mb-6 text-muted-foreground">
            This event may have expired or been removed.
          </p>
          <Link
            to="/"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to Sift
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const price = formatPrice(event);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-2xl px-6 pt-24 pb-16">
        {/* Event image */}
        {event.image_url && (
          <img
            src={event.image_url}
            alt={event.title}
            className="mb-6 w-full rounded-xl object-cover"
            style={{ maxHeight: 360 }}
          />
        )}

        {/* Category pill */}
        {event.category && (
          <span className="mb-3 inline-block rounded bg-muted px-2.5 py-1 text-xs font-medium capitalize text-muted-foreground">
            {event.category}
          </span>
        )}

        <h1 className="mb-4 font-serif text-3xl italic leading-tight text-foreground">
          {event.title}
        </h1>

        {/* Details */}
        <div className="mb-6 space-y-2 text-sm text-muted-foreground">
          <p>{formatDate(event.start_date.split("T")[0])}</p>
          {event.venue_name && (
            <p>
              {event.venue_name}
              {event.address ? `, ${event.address}` : ""}
              {event.borough ? ` · ${event.borough}` : ""}
            </p>
          )}
          {price && <p className="font-medium text-foreground">{price}</p>}
        </div>

        {event.description && (
          <p className="mb-8 leading-relaxed text-muted-foreground">
            {event.description}
          </p>
        )}

        {/* Ticket link */}
        {event.ticket_url && (
          <a
            href={event.ticket_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-10 block w-full rounded-lg bg-primary py-3.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Tickets
          </a>
        )}

        {/* CTA card */}
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <h2 className="mb-2 font-serif text-2xl italic text-foreground">
            Discover more on Sift
          </h2>
          <p className="mb-6 text-sm text-muted-foreground">
            Curated events in NYC — art, music, food, nightlife, and more.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://apps.apple.com/app/TODO_APP_STORE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-48 items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.sift.mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-48 items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Google Play
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventPage;
