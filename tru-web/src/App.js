import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoadingComponent from './components/LoadingComponent';
const Launch = React.lazy(() => import('./pages/Launch'));
const NewBiography = React.lazy(() => import('./pages/NewBiography'));
const OldBiography = React.lazy(() => import('./pages/OldBiography'));
const EditContent = React.lazy(() => import('./pages/EditContent'));
const Biography = React.lazy(() => import('./pages/Biography'));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <Launch />
            </Suspense>
          }
        />
        <Route
          path="/new-biography"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <NewBiography />
            </Suspense>
          }
        />
        <Route
          path="/old-biography"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <OldBiography />
            </Suspense>
          }
        />        
        <Route
          path="/edit"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <EditContent />
            </Suspense>
          }
        />
        <Route
          path="/biography"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <Biography />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
