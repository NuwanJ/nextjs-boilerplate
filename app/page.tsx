import { AppButton, AppGrid } from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AppGrid container spacing={2} justifyContent="center">
        <AppGrid item xs={12} sx={{ textAlign: 'center' }}>
          <h1>Welcome to NextJS Boilerplate Template </h1>
        </AppGrid>
        <AppGrid item>
          <AppButton>Example Button</AppButton>
        </AppGrid>
      </AppGrid>
    </main>
  );
}
