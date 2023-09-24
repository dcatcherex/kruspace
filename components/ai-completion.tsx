// app/page.tsx
'use client';
 
import { useCompletion } from 'ai/react';
import { useState, useCallback } from 'react';
 
export default function AiCompletion() {
  // Locally store our blog posts content
  const [content, setContent] = useState('');
  const { complete } = useCompletion({
    api: '/api/completion',
  });
 
  const checkAndPublish = useCallback(
    async (c: string) => {
      const completion = await complete(c);
      if (!completion) throw new Error('Failed to check typos');
      const typos = JSON.parse(completion);
      // you should more validation here to make sure the response is valid
      if (typos?.length && !window.confirm('Typos found… continue?')) return;
      else alert('Post published');
    },
    [complete],
  );
 
  return (
    <div className='border-2 text-center'>
      <h1>Post Editor</h1>
      <textarea className='border-2' value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={() => checkAndPublish(content)}>Publish</button>
    </div>
  );
}