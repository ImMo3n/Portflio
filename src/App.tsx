import { LanguageProvider } from "./Providers/LangProvider";
import { ThemeProvider } from "./Providers/ThemeProvider";
import { ResumePage } from "./ResumePage";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ResumePage />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
