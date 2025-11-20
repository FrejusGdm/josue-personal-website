import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

// Define the directory where essays are stored
const contentDir = path.join(process.cwd(), 'content/essays');

export type Essay = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
  frontmatter: Record<string, any>;
};

export type EssayMeta = Omit<Essay, 'content'>;

export async function getEssayBySlug(slug: string): Promise<Essay | undefined> {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(contentDir, `${realSlug}.mdx`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { frontmatter, content } = await compileMDX({
      source: fileContent,
      options: { parseFrontmatter: true },
    });

    return {
      slug: realSlug,
      title: frontmatter.title as string,
      description: frontmatter.description as string,
      date: frontmatter.date as string,
      readTime: frontmatter.readTime as string,
      content,
      frontmatter,
    };
  } catch (e) {
    return undefined;
  }
}

export async function getAllEssays(): Promise<EssayMeta[]> {
  // Ensure directory exists
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir);

  const essays = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        readTime: data.readTime,
        frontmatter: data,
      };
    })
  );

  // Sort by date descending
  return essays.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

