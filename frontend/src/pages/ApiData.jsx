// src/pages/ApiData.jsx
import React, { useEffect, useMemo, useState } from 'react';
import { fetchPosts } from '../api/post';
import Card from '../components/Card';
import Button from '../components/Button';

const PAGE_SIZE = 12; // change if you want fewer/more per page

export default function ApiData() {
  const [items, setItems] = useState([]);        // all posts from API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState('');        // search query
  const [page, setPage] = useState(1);           // 1-based page index

  // fetch posts with AbortController for cleanup
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchPosts(controller.signal)
      .then((data) => {
        setItems(Array.isArray(data) ? data : []);
        setPage(1); // reset to first page when new data arrives
      })
      .catch((err) => {
        if (err.name === 'AbortError') return;
        setError(err.message || 'Unknown error');
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  // memoized filtered results (search by title or body)
  const filtered = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.trim().toLowerCase();
    return items.filter(
      (p) =>
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.body && p.body.toLowerCase().includes(q))
    );
  }, [items, query]);

  // pagination calc
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  // ensure page is within range
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
    if (page < 1) setPage(1);
  }, [page, totalPages]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">📡 API Data (Posts)</h2>

        <div className="flex items-center gap-2 w-full max-w-md">
          <input
            value={query}
            onChange={(e) => { setQuery(e.target.value); setPage(1); }}
            placeholder="Search title or body..."
            className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          {query && (
            <Button variant="secondary" size="sm" onClick={() => setQuery('')}>
              Reset
            </Button>
          )}
        </div>
      </div>

      {loading ? (
        <Card>
          <p className="text-center text-gray-500">Loading posts...</p>
        </Card>
      ) : error ? (
        <Card>
          <p className="text-center text-red-500">Error: {error}</p>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginated.map((post) => (
              <Card key={post.id}>
                <h3 className="font-semibold text-lg text-blue-700 dark:text-blue-300">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{post.body}</p>
                <div className="mt-3 text-xs text-gray-400">Post ID: {post.id}</div>
              </Card>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex items-center justify-between mt-4 gap-2">
            <div className="text-sm text-gray-500">{total} result{total !== 1 ? 's' : ''}</div>

            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
              >
                Prev
              </Button>

              <div className="px-3 py-1 rounded border text-sm">
                Page {page} / {totalPages}
              </div>

              <Button
                variant="secondary"
                size="sm"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
