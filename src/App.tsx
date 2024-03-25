import { useTheme } from './store/features/Theme/useTheme';

function App() {
  const [theme] = useTheme();
  const colorBg = theme === 'light' ? 'bg-lightBG' : 'bgdeepestBlack';
  return (
    <main className={`font-spartan font-900 ${colorBg} flex h-dvh grow-0`}>
      <h1>Example text 2</h1>
    </main>
  );
}

export default App;

