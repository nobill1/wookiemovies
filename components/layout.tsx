import { createContext, Suspense, useState } from 'react'
import Header from './header'
import Loader from './loader'

interface SearchInterface {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;    
  }

export const SearchContext = createContext<SearchInterface>({ search: '', setSearch: () => {} });

export default function Layout({ children }: any) {

    const [search, setSearch] = useState('');    

    return (
        <>
            <SearchContext.Provider value={{search: search, setSearch }}>
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