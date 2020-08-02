export type WordPart =
  | 'verb'
  | 'noun'
  | 'pronoun'
  | 'numeral'
  | 'postposition'
  | 'adjective'
  | 'adverb'
  | 'interjection'
  | 'unknown';

export type WordModel = {
  id: string;
  contents: string;
  part: WordPart;
  relatedPronunciations?: string[];
};

export type CardModel = {
  id: string;
  pronunciation: string;
  words: WordModel[];
  relatedPronunciations?: string[];
};
