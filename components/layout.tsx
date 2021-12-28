import { createContext, Suspense, useState } from 'react'
import IMovie from '../types/IMovie';
import Header from './header'
import Loader from './loader'

interface SearchInterface {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;  
    results: Array<[]>;
    setResults: React.Dispatch<React.SetStateAction<any>>;    
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }

export const SearchContext = createContext<SearchInterface>({ search: '', setSearch: () => {}, results: [], setResults: () => {}, loading: false, setLoading: () => {} });

export default function Layout({ children }: any) {

    const [search, setSearch] = useState('');    
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false)

    return (
        <>
            <SearchContext.Provider value={{search: search, setSearch, results: results, setResults, loading: loading, setLoading }}>
                <Header />
                <div className="bg-[#acacac]">
                    <Suspense fallback={Loader}>
                        {children}
                    </Suspense>
                </div>
            </SearchContext.Provider>
        </>
    )
}