import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/home/Home";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { StoreProvider } from "@/providers/StoreProvider";

function App() {
  return (
    <ReactQueryProvider>
      <StoreProvider>
          <MainLayout>
            <Home />
          </MainLayout>
      </StoreProvider>
    </ReactQueryProvider>
  )
}

export default App;