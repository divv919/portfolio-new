export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="prose prose-invert ">{children}</div>;
}
