import { StaticImageData } from "next/image";
import data from "../lib/data.json";
// Helper function to format content from plain text to JSX
const formatContent = (content: string) => {
  const paragraphs = content.split('. ').filter(p => p.trim().length > 0);
  
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph}.
        </p>
      ))}
    </div>
  );
};

// Process the products data to include JSX content
export const products = data.products.map(product => ({
  ...product,
  content: formatContent(product.content)
}));