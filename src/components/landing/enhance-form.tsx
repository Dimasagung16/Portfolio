'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { enhanceProjectDescription } from '@/ai/flows/enhance-project-description';
import { Loader2, Sparkles, Wand2 } from 'lucide-react';
import { Label } from '../ui/label';

export function EnhanceForm() {
  const [originalDescription, setOriginalDescription] = useState('');
  const [enhancedDescription, setEnhancedDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!originalDescription.trim()) return;

    setIsLoading(true);
    setError(null);
    setEnhancedDescription('');

    try {
      const result = await enhanceProjectDescription({ projectDescription: originalDescription });
      setEnhancedDescription(result.enhancedDescription);
    } catch (err) {
      setError('Sorry, something went wrong. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="original-description">Your Project Description</Label>
            <Textarea
              id="original-description"
              placeholder="e.g., Made a cool website with React and Tailwind."
              value={originalDescription}
              onChange={(e) => setOriginalDescription(e.target.value)}
              rows={5}
              disabled={isLoading}
            />
          </div>
          {enhancedDescription && (
            <div className="space-y-2">
              <Label htmlFor="enhanced-description" className='flex items-center'>
                <Sparkles className="h-4 w-4 mr-2 text-primary" />
                AI-Enhanced Description
              </Label>
              <Textarea
                id="enhanced-description"
                readOnly
                value={enhancedDescription}
                rows={5}
                className="bg-secondary border-primary/50 focus-visible:ring-primary"
              />
            </div>
          )}
          {error && <p className="text-sm text-destructive">{error}</p>}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={isLoading || !originalDescription.trim()}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enhancing...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" />
                Enhance Description
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
