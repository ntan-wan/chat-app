import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/home/Home";
import { SiteProvider } from "@/providers/SiteProvider";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

function App() {
  return (
      <ReactQueryProvider>
        <SiteProvider>
          <MainLayout>
            <Home />
          </MainLayout>
        </SiteProvider>
      </ReactQueryProvider>
  )
}

export default App;