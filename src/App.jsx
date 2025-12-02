/* eslint-disable no-unused-vars */
import { use, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css' // css import
import Sasuke from './assets/icon1.png'
import Itachi from './assets/icon2.png'
import ItachiMirror from './assets/itachi-mirror.png'
import rasengan from './assets/rasengan.png'
import No2 from './assets/icons8-no2.svg'
import uchiha from './assets/uchiha.svg'



const animesData = [
  // {
  //   id: 22,
  //   creator: 'Masashi Kishimoto',
  //   title_anime: 'Naruto Shippuden',
  //   year: '2005',
  //   image: 'https://cdn.myanimelist.net/images/anime/11/63249l.jpg',
  //   score: 8.71,
  //   sypnosis:
  //     "Naruto Uzumaki wants to be the best ninja in the land. He's done well so far, but with the looming danger posed by the mysterious Akatsuki organization, Naruto knows he must train harder than ever and leaves his village for intense exercises that will push him to his limits"
  // },
  // {
  //   id: 23,
  //   title_anime: 'Inazuma Eleven Go',
  //   creator: 'Masashi Kishimoto',

  //   year: '2012',
  //   image: 'https://cdn.myanimelist.net/images/anime/7/29246l.jpg',
  //   score: 7.03,
  //   sypnosis:
  //     'Tenma Matsukaze is a new student at Raimon Junior High. Due to his love for soccer, he decides to join the school soccer team, which gained its reputation after the amazing performance shown ten years earlier in the Football Frontier International, a tournament that hosts the best youth teams the world has to offer. Unfortunately, the once renowned school doesnt have the soccer spirit it once enjoyed. Tenma and his teammates will look to shift this paradigm and fight back against their evil oppressors. Thankfully, they will not be alone in this battle, as they will get help from a group known as the "Resistance." Cheer on the boys of Inazuma Eleven Go as they fight the good fight!'
  // },
  // {
  //   id: 24,
  //   title_anime: 'Captain Tsubasa',
  //   creator: 'Masashi Kishimoto',
  //   year: '2018 - 2019',
  //   image: 'https://cdn.myanimelist.net/images/anime/1396/94784l.jpg',
  //   score: 7.42,
  //   sypnosis:
  //     "Captain Tsubasa is the passionate story of an elementary school student whose thoughts and dreams revolve almost entirely around the love of soccer. 11-year-old Tsubasa Oozora started playing football at a very young age, and while it was mostly just a recreational sport for his friends, for him, it developed into something of an obsession. In order to pursue his dream to the best of his elementary school abilities, Tsubasa moves with his mother to Nankatsu city, which is well-known for its excellent elementary school soccer teams. But although he was easily the best in his old town, Nankatsu has a lot more competition, and he will need all of his skill and talent in order to stand out from this new crowd."
  // },
  // {
  //   id: 25,
  //   title_anime: 'Pokemon',
  //   creator: 'Masashi Kishimoto',
  //   year: '1997 - 2002',
  //   image: 'https://cdn.myanimelist.net/images/anime/1787/140239l.jpg',
  //   score: 7.41,
  //   sypnosis:
  //     'Pokémon are peculiar creatures with a vast array of different abilities and appearances; many people, known as Pokémon trainers, capture and train them, often with the intent of battling others. Young Satoshi has not only dreamed of becoming a Pokémon trainer but also a "Pokémon Master," and on the arrival of his 10th birthday, he finally has a chance to make that dream a reality. Unfortunately for him, all three Pokémon available to beginning trainers have already been claimed and only Pikachu, a rebellious Electric-type Pokémon, remains. However, this chance encounter would mark the start of a lifelong friendship and an epic adventure!'
  // },
  // {
  //   id: 25,
  //   title_anime: 'Pokemon',
  //   creator: 'Masashi Kishimoto',
  //   year: '1997 - 2002',
  //   image: 'https://cdn.myanimelist.net/images/anime/1787/140239l.jpg',
  //   score: 7.41,
  //   sypnosis:
  //     'Pokémon are peculiar creatures with a vast array of different abilities and appearances; many people, known as Pokémon trainers, capture and train them, often with the intent of battling others. Young Satoshi has not only dreamed of becoming a Pokémon trainer but also a "Pokémon Master," and on the arrival of his 10th birthday, he finally has a chance to make that dream a reality. Unfortunately for him, all three Pokémon available to beginning trainers have already been claimed and only Pikachu, a rebellious Electric-type Pokémon, remains. However, this chance encounter would mark the start of a lifelong friendship and an epic adventure!'
  // },
  // {
  //   id: 25,
  //   title_anime: 'Pokemon',
  //   creator: 'Masashi Kishimoto',
  //   year: '1997 - 2002',
  //   image: 'https://cdn.myanimelist.net/images/anime/1787/140239l.jpg',
  //   score: 7.41,
  //   sypnosis:
  //     'Pokémon are peculiar creatures with a vast array of different abilities and appearances; many people, known as Pokémon trainers, capture and train them, often with the intent of battling others. Young Satoshi has not only dreamed of becoming a Pokémon trainer but also a "Pokémon Master," and on the arrival of his 10th birthday, he finally has a chance to make that dream a reality. Unfortunately for him, all three Pokémon available to beginning trainers have already been claimed and only Pikachu, a rebellious Electric-type Pokémon, remains. However, this chance encounter would mark the start of a lifelong friendship and an epic adventure!'
  // }
]



function App() {
  const [animes, setAnimes] = useState(animesData)
  const [selectedAnime, setSelectedAnime] = useState(animesData)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  const [query, setQuery] = useState()
  const [isOpen1, setIsOpen1] = useState(true)
  const [isOpen2, setIsOpen2] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const headerRef = useRef(null);


  const [name, setName] = useState('')

  // buat function handleSelectedAnime
  function handleSelectedAnime(id) {
    setModalOpen(modal => !modal)
    const newAnime = animes.filter(anime => anime.mal_id === id)
    setSelectedAnime(newAnime[0])


  }
  useEffect(() => {
    // console.log(`Ini selected Anime ${selectedAnime.title}`)
    console.log(selectedAnime)
  }, [selectedAnime])




  async function handleSearchItem(e) {
    e.preventDefault()
    try {
      const newItem = {
        name,
      }
      console.log(newItem)
      setName('')

      setLoading(true);
      setError(null);

      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${name}`)
      if (!res.ok) {
        throw new Error('Gagal mengambil data anime !');
      }
      const json = await res.json();
      setAnimes(json.data)
      setSelectedAnime(json.data)
      const newQuery = {
        total: json.pagination.items.total,
        per_page: json.pagination.items.per_page
      }
      setQuery(newQuery)
    }
    catch (err) {
      setError(err.message);
    }
    finally {
      setLoading(false)

    }

  }


  // buat cek ketika setelah di klik, react akan render :
  useEffect(() => {
    console.log(`Ini anime yang di klik : ${selectedAnime.title_anime}`)
    console.log(modalOpen)
  }, [selectedAnime])

  useEffect(() => {
    if (!headerRef.current) return;
    const header = headerRef.current;
    const fixedNav = header.offsetTop; // disimpan SEKALI
    const handleScroll = () => {
      header.classList.toggle('navbar-fixed', window.scrollY > fixedNav);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  function handleHamburger(e) {
    e.preventDefault()
    setIsHamburgerOpen(open => !open)
  }



  return (
    <>
      {/* kita akan buat navbar yang dari samping <muncul> */}
      <header ref={headerRef} className='bg-transparent lg:flex flex-wrap lg:items-center lg:pb-5 lg:gap-20 lg:pt-2'>
        <AnimeSideBar isHamburgerOpen={isHamburgerOpen} />
        <div className="logo flex flex-wrap justify-center items-center lg:w-[25%]">
          <button onClick={handleHamburger} className={`absolute right-6 cursor-pointer ${isHamburgerOpen ? "hamburger-active" : ""}`}>
            <span className='hamburger-line transition-all duration-500 ease-in-out '></span>
            <span className='hamburger-line transition-all duration-500 ease-in-out'></span>
            <span className='hamburger-line transition-all duration-500 ease-in-out'></span>
          </button>
          <img onContextMenu={(e) => e.preventDefault()} src={Sasuke} alt="" className="w-12 mx-0" />
          <span className='font-bold text-2xl text-white leading-relaxed lg:tracking-widest'>WeeBoo</span>
          <img onContextMenu={(e) => e.preventDefault()} src={Itachi} alt="" className="w-14 ml-2 lg:hidden" />
          <img onContextMenu={(e) => e.preventDefault()} src={rasengan} alt="" className="w-12 ml-2 hp:hidden lg:block" />

        </div>
        <div className="search flex justify-center lg:w-[50%] lg:gap-2.5">
          <img onContextMenu={(e) => e.preventDefault()} src={ItachiMirror} alt="" className="w-14 ml-2 hp:hidden lg:block" />
          <form className='lg:w-full' onSubmit={handleSearchItem} action="">
            <div className="mt-3">
              <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="text-center rounded-lg bg-cyan-600/50 placeholder:text-white focus:outline-0 text-white py-2 px-3 md:w-120 lg:w-full" placeholder='Search anime' />
              {query && (
                <>
                  <span className="text-white text-center text-sm block mt-3">Found {query.total} Result</span>
                  <span className="text-white text-center text-sm block mt-3">Total page : {query.per_page}</span>
                </>
              )}
            </div>
          </form>
          <img onContextMenu={(e) => e.preventDefault()} src={Itachi} alt="" className="w-14 ml-2 hp:hidden lg:inline-block" />
        </div>
      </header >

      <main className='px-2 my-5 xl:my-5 lg:flex lg:gap-5 sm:max-w-140 md:max-w-186 lg:max-w-240 mx-auto'>
        <section style={{ height: !isOpen1 ? "5rem" : "max-content" }} id='listBox' className="relative block lg:w-1/2 bg-slate-500/50 rounded-lg">
          <button id='buttonList' onClick={() => setIsOpen1(!isOpen1)} type='button' className="absolute top-2 right-2 w-7 h-7 flex justify-center items-center rounded-full text-white font-bold text-xl text-center bg-slate-800/40 cursor-pointer">{isOpen1 ? '-' : '+'}</button>
          {isOpen1 && (
            <ul className='list list-anime pt-12 pb-5 justify-center  lg:max-w-full flex flex-wrap lg:block gap-2 '>
              <MovieList animes={animes} error={error} loading={loading} onSearchItem={handleSearchItem} onSelectedItem={handleSelectedAnime} />
            </ul>
          )}
        </section>

        <section style={{ height: !isOpen2 ? "5rem" : "max-content", overflow: 'visible' }} id='DetailBox' className="relative lg:w-1/2 hp:hidden  lg:block bg-slate-500/50 rounded-xl">
          <button id='buttonDetail' onClick={() => setIsOpen2(!isOpen2)} type='button' className="absolute top-2 right-2 w-7 h-7 flex justify-center items-center rounded-full text-white font-bold text-xl text-center bg-slate-800/40 cursor-pointer">{isOpen2 ? '-' : '+'}</button>
          {isOpen2 && (
            <>
              <div className={`${selectedAnime.mal_id === undefined ? "hidden" : "flex"} gap-9`}>
                <img src={selectedAnime?.images?.jpg.image_url} alt="" className="w-40 rounded-tl-xl rounded-br-xl" />
                <div className='mt-10'>
                  <span className='text-white font-semibold leading-relaxed tracking-widest'>{selectedAnime.title}</span>
                  <p className={`${selectedAnime?.year === null ? "hidden" : ""} text-white font-semibold leading-relaxed tracking-widest`}>{`${selectedAnime?.year}`}</p>
                  <p className='text-white font-semibold leading-relaxed tracking-widest'>{`${selectedAnime?.score}`}</p>
                  <p className='text-white font-semibold leading-relaxed tracking-widest'>{`${selectedAnime?.duration}`}</p>
                  <p className='text-white font-semibold leading-relaxed tracking-widest'>{`from : ${selectedAnime?.aired?.string}`}</p>
                </div>
              </div>
              <p className="text-gray-200 px-7 py-10 leading-relaxed italic">{selectedAnime?.synopsis}</p>
            </>

          )}
        </section>
      </main>

      <section id='modal' className={`lg:hidden fixed bg-slate-900/40 inset-0 z-40 backdrop-blur-sm transition-all duration-500 ease-in-out ${modalOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10 pointer-events-none"}`}>
        <div className={`fixed rounded-lg overflow-hidden bg-slate-800/70 top-1/6 left-1/2  -translate-x-1/2 w-[90%] h-[50%] transition-all duration-500 ease-in-out`}>
          <div className="modal-header h-16 w-full bg-slate-800 flex items-center justify-center relative">
            <img onContextMenu={(e) => e.preventDefault()} onClick={() => setModalOpen(modal => !modal)} src={No2} alt="" className="select-none absolute top-5 right-2 w-7 h-7" />
            <p className="text-white">{selectedAnime.title_anime}</p>
          </div>
          <div className="modal-body text-white rounded-b-lg overflow-hidden flex gap-5 border-b shadow-xl">
            <img src={selectedAnime.image} alt="" className="w-32 h-48 select-none" onContextMenu={(e) => e.preventDefault()} />
            <div className='mt-5'>
              <span className='font-semibold block mb-2'>{selectedAnime.creator}</span>
              <span className='text-slate-400 font-semibold block'>{selectedAnime.year}</span>
            </div>
          </div>
          <div className="modal-footer text-white italic mt-5 mb px-4 overflow-scroll max-h-[50%] ">
            <p className="">{selectedAnime.sypnosis}</p>
          </div>

        </div>
      </section>

      <footer className={`${animes ? "hp:fixed" : "hp:static"} lg:static bottom-0 w-full text-slate-100 text-center py-6 bg-slate-900`}>
        <span className="font-semibold text-xl ">Weeboo</span>
        <p className="text-slate-400 text-base">&copy; 2025 AnimeList <span className="inline-block mt-2 animate-bounce">🔥</span>. All rights reserved.</p>
      </footer>
    </>
  )
}

// buat function request api

function MovieList({ animes, loading, error, onSelectedItem, onSearchItem }) {
  const [text, setText] = useState([])



  return (
    <>
      {loading && (
        <h1 className="text-white">Loading</h1>
      )}
      {error && (
        <>
          <p className="text-white font-bold">Error : {error}</p>
          <button type="button" onClick={onSearchItem}
          >Coba Lagi</button>
        </>
      )}
      {animes && (
        <ul>
          {animes.map((anime) => (
            <li key={anime.mal_id} className='w-44 lg:w-full   mb-4 pb-4 px-5 border-b-2 rounded-md border-cyan-400/30 cursor-pointer lg:flex lg:gap-5'>
              <div className="rounded-lg overflow-hidden">
                <img src={anime.images.jpg.image_url} alt="bg" className="object-cover object-center h-40 lg:h-24 xl:h-23 w-full lg:w-20  xl:w-16" />
              </div>
              <div className='' onClick={() => onSelectedItem(anime.mal_id)}>
                <span className="text-white text-sm lg:text-[17px] font-semibold">{anime.title}</span>
                <p className='text-white text-xs lg:text-sm font-light'>{anime.year}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>

  )

}

function AnimeSideBar({ isHamburgerOpen }) {

  const stats = [
    // eslint-disable-next-line no-undef
    {
      label: 'Watched', value: '100', icon: (<svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z" stroke="#1C274C" stroke-width="1.5" />
      </svg>)
    },
    // eslint-disable-next-line no-undef
    {
      label: 'Watched Later', value: '200', icon: (<svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 11.0975V16.0909C3 19.1875 3 20.7358 3.73411 21.4123C4.08422 21.735 4.52615 21.9377 4.99692 21.9915C5.98402 22.1045 7.13675 21.0849 9.44216 19.0458C10.4612 18.1445 10.9708 17.6938 11.5603 17.5751C11.8506 17.5166 12.1494 17.5166 12.4397 17.5751C13.0292 17.6938 13.5388 18.1445 14.5578 19.0458C16.8633 21.0849 18.016 22.1045 19.0031 21.9915C19.4739 21.9377 19.9158 21.735 20.2659 21.4123C21 20.7358 21 19.1875 21 16.0909V11.0975C21 6.80891 21 4.6646 19.682 3.3323C18.364 2 16.2426 2 12 2C7.75736 2 5.63604 2 4.31802 3.3323C3.5108 4.14827 3.19796 5.26881 3.07672 7" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round" />
        <path d="M15 6H9" stroke="#1C274D" stroke-width="1.5" stroke-linecap="round" />
      </svg>)
    },
    // eslint-disable-next-line no-undef
    {
      label: 'saved', value: '300', icon: (<svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 7V12H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>)
    },
  ]

  return (
    <div className={`fixed inset-0  top-0 left-0 z-50  h-screen w-[90%] md:w-90 lg:w-80 bg-slate-900/95 backdrop-blur-sm transform transition-all duration-500 ease-out border-r border-purple-500/50 ${isHamburgerOpen ? "translate-x-0" : "-translate-x-full"}`}>


      <section id='navbar-header' className="py-5 px-4 border-b border-purple-500/20">
        <div className="flex gap-4">
          <div className="max-w-20 p-2 rounded-xl bg-linear-to-br from-pink-500 to-purple-600 shadow-lg flex justify-center items-center">
            <img src={uchiha} alt="" className="w-10 h-10" />
          </div>
          <div >
            <span className="text-white text-2xl font-semibold">Weeboo Zone</span>
            <span className="text-purple-300 text-lg block font-light ">FrontEnd • 1.2k hrs </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-5 mb-2">
          {stats.map((stat, i) => (
            <div key={i} className="bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 px-4 py-2">
              <p className="text-purple-400 mb-2">{stat.icon}</p>
              <p className="text-white font-bold text-lg">{stat.value}</p>
              <p className="text-gray-400 text-xs w-full">{stat.label}</p>
            </div>
          )
          )}
        </div>
      </section>


      <section id='navbar-content' className="">

      </section>
      <section id='navbar-header' className="">

      </section>
    </div>
  )

}

export default App
