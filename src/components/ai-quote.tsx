"use client";

import { useEffect, useState } from 'react';
import { getQuote } from '@/app/actions';
import { Skeleton } from '@/components/ui/skeleton';

export default function AiQuote() {
  const [quote, setQuote] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const result = await getQuote();
        setQuote(result.quote);
      } catch (err) {
        setQuote("Couldn't fetch a quote, but here's one for you: 'Creativity is intelligence having fun.'");
      } finally {
        setLoading(false);
      }
    };
    fetchQuote();
  }, []);

  if (loading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    );
  }

  return (
    <blockquote className="border-l-2 border-primary pl-4 italic">
      {quote}
    </blockquote>
  );
}
