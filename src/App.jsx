import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/home/Home";
import { SiteProvider } from "@/providers/SiteProvider";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { NormalizerProvider } from "@/providers/NormalizerProvider";

function App() {
  return (
    <NormalizerProvider>
      <ReactQueryProvider>
        <SiteProvider>
          <MainLayout>
            <Home />
          </MainLayout>
        </SiteProvider>
      </ReactQueryProvider>
    </NormalizerProvider>
  )
}

export default App;