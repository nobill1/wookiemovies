import Link from 'next/link'
import React, { MutableRefObject, useCallback, useContext, useMemo, useRef } from 'react'
import { SearchContext } from './layout';
import { searchApi } from '../services/api';
import { useRouter } from 'next/router';


const Header = (): JSX.Element => {

    const { setSearch, setResults, results, setLoading } = useContext(SearchContext);

    const inputRef = useRef<HTMLInputElement>(null);

    const Router = useRouter();

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(event.target.value)
        Router.push({
            pathname: '/search',
            query: { result: event.target[0].value }
        })

        setSearch(String(inputRef.current?.value))
        await searchApi(String(inputRef.current?.value)).then(res => {
            setResults(res.data.movies)
        }).then(error => console.log(error))
        setLoading(false)
    }

    // async function handleSubmit() {        
    //     setLoading(true)
    //     setSearch(String(inputRef.current?.value))
    //     await searchApi(String(inputRef.current?.value)).then(res => {
    //         setResults(res.data.movies)
    //         console.log(results);

    //     }).then(error => console.log(error))        
    //     setLoading(false)
    // }

    return (
        <div className="h-20 shadow-lg w-full fixed z-10 px-4 border-black border-b-2 bg-[#acacac]">
            <div className="flex items-center h-20 w-full mx-auto justify-between container">
                <Link href="/">
                    <a>
                        <svg className="h-10 msm:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.03 81.11"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M31.61,42.62,22.38,9.13,13.1,42.62H11.21L1.69,7H3.37l8.74,33.39L21.39,7h2L32.6,40.44,41.38,7h1.69L33.59,42.62Z" transform="translate(-1.69 -6.25)" /><path d="M63.31,43.37a17.38,17.38,0,0,1-12.82-5.49A17.94,17.94,0,0,1,46.77,32a19.5,19.5,0,0,1-1.32-7.19,19.36,19.36,0,0,1,1.32-7.17,18.17,18.17,0,0,1,3.72-5.91,17.18,17.18,0,0,1,5.68-4,17.63,17.63,0,0,1,19.92,4,18.51,18.51,0,0,1,3.72,5.91,19.36,19.36,0,0,1,1.32,7.17A19.5,19.5,0,0,1,79.81,32a18.27,18.27,0,0,1-3.72,5.93,17.49,17.49,0,0,1-5.66,4A17.05,17.05,0,0,1,63.31,43.37Zm0-1.54a15.44,15.44,0,0,0,11.54-5,16.32,16.32,0,0,0,3.32-5.44,18.71,18.71,0,0,0,1.17-6.67,18.71,18.71,0,0,0-1.17-6.67,16,16,0,0,0-3.32-5.41,15.41,15.41,0,0,0-5.09-3.6,16.77,16.77,0,0,0-12.9,0,15.37,15.37,0,0,0-5.08,3.6,16.38,16.38,0,0,0-3.35,5.41,18.29,18.29,0,0,0-1.19,6.67,18.29,18.29,0,0,0,1.19,6.67,16.73,16.73,0,0,0,3.35,5.44,15.4,15.4,0,0,0,11.53,5Z" transform="translate(-1.69 -6.25)" /><path d="M103.35,43.37a17.38,17.38,0,0,1-12.82-5.49A17.94,17.94,0,0,1,86.81,32a19.5,19.5,0,0,1-1.32-7.19,19.36,19.36,0,0,1,1.32-7.17,18.17,18.17,0,0,1,3.72-5.91,17.28,17.28,0,0,1,5.68-4,17.61,17.61,0,0,1,19.92,4,18.17,18.17,0,0,1,3.72,5.91,19.36,19.36,0,0,1,1.32,7.17A19.5,19.5,0,0,1,119.85,32a17.94,17.94,0,0,1-3.72,5.93,17.45,17.45,0,0,1-5.65,4A17.1,17.1,0,0,1,103.35,43.37Zm0-1.54a15.4,15.4,0,0,0,11.54-5,16.51,16.51,0,0,0,3.33-5.44,18.93,18.93,0,0,0,1.16-6.67,18.93,18.93,0,0,0-1.16-6.67,16.17,16.17,0,0,0-3.33-5.41,15.37,15.37,0,0,0-5.08-3.6,16.8,16.8,0,0,0-12.91,0,15.37,15.37,0,0,0-5.08,3.6,16.38,16.38,0,0,0-3.35,5.41,18.5,18.5,0,0,0-1.19,6.67,18.5,18.5,0,0,0,1.19,6.67,16.73,16.73,0,0,0,3.35,5.44,15.4,15.4,0,0,0,11.53,5Z" transform="translate(-1.69 -6.25)" /><path d="M129.31,42.62h-1.74V7h1.74V24.91L148.16,7h2.13l-19,18.16,19.55,17.46h-2.48l-19-17Z" transform="translate(-1.69 -6.25)" /><path d="M158.23,42.62H156.5V7h1.73Z" transform="translate(-1.69 -6.25)" /><path d="M186.71,41.13v1.49h-20V7h19.69V8.48h-18v15h16.48V25H168.4V41.13Z" transform="translate(-1.69 -6.25)" /><path d="M24.83,86.62,10.05,53V86.62H8.36V51h2.58L25.68,84.49,40.51,51H43V86.62H41.36V53.08L26.52,86.62Z" transform="translate(-1.69 -6.25)" /><path d="M67.31,87.37a17.38,17.38,0,0,1-12.83-5.49A18.27,18.27,0,0,1,50.76,76a20.19,20.19,0,0,1,0-14.36,18.51,18.51,0,0,1,3.72-5.91,17.28,17.28,0,0,1,5.68-4,17.6,17.6,0,0,1,7.15-1.44,17.2,17.2,0,0,1,12.77,5.43,18.36,18.36,0,0,1,3.73,5.91,20.33,20.33,0,0,1,0,14.36,18.13,18.13,0,0,1-3.73,5.93,17.45,17.45,0,0,1-5.65,4A17.09,17.09,0,0,1,67.31,87.37Zm0-1.54a15.4,15.4,0,0,0,11.53-5,16.51,16.51,0,0,0,3.33-5.44,19.76,19.76,0,0,0,0-13.34,16.17,16.17,0,0,0-3.33-5.41,15.37,15.37,0,0,0-5.08-3.6,16.77,16.77,0,0,0-12.9,0,15.31,15.31,0,0,0-5.09,3.6,16.55,16.55,0,0,0-3.35,5.41,19.29,19.29,0,0,0,0,13.34,16.9,16.9,0,0,0,3.35,5.44,15.44,15.44,0,0,0,11.54,5Z" transform="translate(-1.69 -6.25)" /><path d="M115.29,51,101.74,86.62H99.81L86.26,51H88l12.8,33.74L113.6,51Z" transform="translate(-1.69 -6.25)" /><path d="M122.68,86.62h-1.74V51h1.74Z" transform="translate(-1.69 -6.25)" /><path d="M151.16,85.13v1.49h-20V51h19.69v1.48h-18v15h16.48V69H132.85V85.13Z" transform="translate(-1.69 -6.25)" /><path d="M182.32,77.39A9,9,0,0,1,181,82.16a9.77,9.77,0,0,1-4.07,3.59,17.12,17.12,0,0,1-13.47,0,10.13,10.13,0,0,1-4.27-3.85,11.74,11.74,0,0,1-1.64-5.63h1.79a10.17,10.17,0,0,0,3,6.77q2.65,2.57,7.86,2.56a13.59,13.59,0,0,0,5.24-1,8.81,8.81,0,0,0,3.75-2.78,6.84,6.84,0,0,0,1.38-4.29,6.14,6.14,0,0,0-1.93-5q-1.93-1.64-6.5-2.58l-3.82-.79a33.05,33.05,0,0,1-3.35-.92,12.51,12.51,0,0,1-3.15-1.56,7.65,7.65,0,0,1-2.33-2.59,7.92,7.92,0,0,1-.9-4A8.63,8.63,0,0,1,160,55.29a10.18,10.18,0,0,1,4-3.5,13.27,13.27,0,0,1,6-1.29,12.85,12.85,0,0,1,5.83,1.31,11.22,11.22,0,0,1,4.24,3.7,10.64,10.64,0,0,1,1.78,5.66h-1.83a9.69,9.69,0,0,0-1.44-4.69,9.27,9.27,0,0,0-3.47-3.25A10.46,10.46,0,0,0,170.07,52a11.22,11.22,0,0,0-5.34,1.16,8.32,8.32,0,0,0-3.27,3,7.36,7.36,0,0,0-1.12,3.92,6,6,0,0,0,1.27,4,7.92,7.92,0,0,0,3.29,2.23,29.35,29.35,0,0,0,4.37,1.27l3.72.79a16.59,16.59,0,0,1,6.87,2.88Q182.32,73.27,182.32,77.39Z" transform="translate(-1.69 -6.25)" /></g></g></svg>
                    </a>
                </Link>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="search" className="flex items-center gap-1">
                        <input ref={inputRef} type="search" name="search" id="search" className="px-4 py-2 msm:py-1 msm:px-2 text-sm sm:text-lg msm:w-36 italic font-bold border-2 border-black bg-[#acacac] focus:border-gray-300 focus:outline-none" />
                        <button className="rounded-full p-2 bg-white hover:bg-yellow-300" type='submit'>
                            <svg className="h-8 msm:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.84 26.74"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M17.28,0A9.57,9.57,0,0,0,7.72,9.56a9.43,9.43,0,0,0,1.79,5.55L0,24.62l2.12,2.12,9.49-9.49A9.56,9.56,0,1,0,17.28,0Zm0,16.12a6.56,6.56,0,1,1,6.56-6.56A6.56,6.56,0,0,1,17.28,16.12Z" /></g></g></svg>
                        </button>
                    </label>
                </form>
            </div>
        </div>
    )

}

export default Header