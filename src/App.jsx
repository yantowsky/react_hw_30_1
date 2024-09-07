import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

const MainLazy = lazy(() => import('./pages/Main.jsx'));
const ContactsLazy = lazy(() => import('./pages/Contacts.jsx'));
const AboutLazy = lazy(() => import('./pages/About.jsx'));
const NotFoundLazy = lazy(() => import('./pages/NotFound.jsx'));
const BaseCounterLazy = lazy(() => import('./pages/BaseCounter/BaseCounter.jsx'));
const SwapiLazy = lazy(() => import('./pages/Swapi/Swapi.jsx'));

function App() {
    return (
        <>
            <Header />
            <Suspense
                fallback={
                    <main className="loading">
                        <div>
                            <h1>
                                Loading...
                            </h1>
                        </div>
                    </main>
                }
            >
                <Routes>
                    <Route path='/*' element={<NotFoundLazy />} />
                    <Route path='/' element={<MainLazy />} />
                    <Route path='/contacts' element={<ContactsLazy />} />
                    <Route path='/about' element={<AboutLazy />} />
                    <Route path='/counter-redux' element={<BaseCounterLazy />} />
                    <Route path='/swapi' element={<SwapiLazy />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
}

export default App