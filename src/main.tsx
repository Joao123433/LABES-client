import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RootLayout } from './components/RootLayout.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RootLayout>
        <RouterProvider router={router}>
        </RouterProvider>
      </RootLayout>
  </StrictMode>
)
