import { returnArray } from '@/utils/common';
import  { ReactNode } from 'react';
import RHighlighter, { HighlighterProps as RHighlighterProps } from 'react-highlight-words';

interface HighlighterProps
  extends Omit<RHighlighterProps, 'searchWords' | 'textToHighlight'> {
  highlightWords?: (string | null | undefined)[];
  children: ReactNode;
}

const Highlighter = ({
  highlightWords,
  children,
  ...computedProps
}: HighlighterProps) => {
  const preparedHighlightWords = returnArray(highlightWords)
    .filter((word) => typeof word === 'string')
    .map((v) => v.trim());

  return preparedHighlightWords.length > 0 ? (
    <RHighlighter
      highlightClassName="bg-yellow-200" // You can customize the highlight style
      searchWords={preparedHighlightWords}
      autoEscape={true}
      textToHighlight={String(children)} // Convert children to string
      {...computedProps}
    />
  ) : (
    children
  );
};

export default Highlighter;
