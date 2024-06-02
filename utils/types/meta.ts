import type { MarkdownParsedContent } from "@nuxt/content/types";

export interface Home extends MarkdownParsedContent {};

export interface Article extends Home {
  dateCreated: string;
};

