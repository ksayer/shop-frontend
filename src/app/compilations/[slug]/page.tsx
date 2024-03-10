import { CompilationDetail } from '@/components/views/CompilationDetail';

interface ICompilationDetailPage {
  params: { slug: string };
}

export default async function CompilationDetailPage({ params }: ICompilationDetailPage) {
  return (
    <main className={'main-flex'}>
      <CompilationDetail slug={params.slug} />
    </main>
  );
}
