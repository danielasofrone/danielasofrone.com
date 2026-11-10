import React from 'react';
export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 py-12 md:py-20 max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl text-neutral-900 mb-12">
          About
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 text-neutral-700 leading-relaxed">
          <p>I like to paint thoughts and feelings.</p>

          <p>
            My work begins with emotions, questions, and experiences that stay
            with me. Painting gives me a way to explore them without having to
            explain everything in words.
          </p>

          <p>
            Some works are inspired by relationships, anxiety, love, choice, and
            the feeling of being contained. Others begin with a single image or
            idea that develops its own meaning during the painting process.
          </p>

          <p>
            I am interested in the space between what we feel and what we are
            able to express. Rather than giving each painting one fixed
            interpretation, I want to leave room for viewers to recognise
            something of their own experience within it.
          </p>
        </div>
      </div>
    </div>
  );
}
