import { useState } from 'react'
import './App.css'
import nativityImg from "./images/Pierro-Della-Francesca.jpg";
import SeaOfIceImg from "./images/Das-Eismer.jpg";
import RiverImg from "./images/River Landscape.jpg";
import KoselImg from "./images/The Siege Of Kosel.jpg";
import EnglishmanImg from "./images/Englishman.jpg";
import DagobertImg from "./images/throne-dagobert.jpg";
import RedBlueImg from "./images/red-blue-chair.jpg";
import WaterLilyImg from "./images/water-lily-bed.jpg";
import StoolImg from "./images/stool.jpg";
import LoungeImg from "./images/eames-lounge-chair.jpg";


function App() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const paintings = [
  {
    title: "The Nativity",
    artist: "Piero della Francesca",
    description: "An oil painting that depicts a scene from the birth of Jesus, and is one of the latest surviving paintings made by the artist before his death in 1492.",
    image: nativityImg,
  },
  {
    title: "The Sea of Ice",
    artist: "Caspar David Friedrich",
    description: "An oil canvas painting that depicts Friedrich’s interpretation of an Arctic landscape, with a shipwreck half-buried in the ice.",
    image: SeaOfIceImg,
  },
  {
    title: "River Landscape",
    artist: "Annibale Carracci",
    description: "A naturalistic Italian landscape.",
    image: RiverImg,
  },
  {
    title: "The Siege Of Kosel",
    artist: "Wilhelm von Kobell",
    description: "A large oil painting from 1808. The incident portrayed took place on 18 March 1806 during the Napoleonic Wars.",
    image: KoselImg,
  },
  {
    title: "An Englishman In Moscow",
    artist: "Kazimir Malevich",
    description: "A 1914 avant-garde painting.The titular Englishman depicted in the painting is wearing a top hat and an overcoat.",
    image: EnglishmanImg,
  },
];
const filteredPaintings = paintings.filter((p) => {
  if (query === "") return true;
  return p.title.toLowerCase().startsWith(query.toLowerCase());
});

const furniture = [
  {
    title: "Throne of Dagobert",
    creator: "Saint Eligius",
    description: "A bronze chair made in the early Middle Ages and long associated with the Frankish and later French monarchy.",
    image: DagobertImg,
  },
  {
    title: "Red And Blue Chair",
    creator: "Gerrit Rietveld",
    description: "a chair designed in 1917 by Gerrit Rietveld. It represents one of the first explorations by the De Stijl art movement in three dimensions.",
    image: RedBlueImg,
  },
  {
    title: "Water-Lily Bed",
    creator: "Louis Majorelle",
    description: "A wooden bed.",
    image: WaterLilyImg,
  },
  {
    title: "Stool",
    creator: "Paul Hankar",
    description: "Stool made in 1898.",
    image: StoolImg,
  },
  {
    title: "Eames Lounge Chair Wood",
    creator: "Charles and Ray Eames",
    description: "The chair was designed using technology for molding plywood that the Eames' developed before and during the Second World War.",
    image: LoungeImg,
  },
];
const filteredFurniture = furniture.filter((p) => {
  if (query === "") return true;
  return p.title.toLowerCase().startsWith(query.toLowerCase());
});

     return (
    <div>
    <header>
      <h1>Interesting Art Designs</h1>

      <nav style={{ display: "flex", gap: "20px" }}>
        <button className = "menubuttons" onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
        <button onClick={() => setPage("contact")}>Contact</button>
        <button onClick={() => setPage("paintings")}>Paintings</button>
        <button onClick={() => setPage("furniture")}>Furniture</button>
      </nav>
      </header>


      <div style={{ marginTop: "20px" }}>
        {page === "home" && (
          <div>
            <h2>Home</h2>
            <p>Welcome to the Interesting Art Design web page.<br/>
              It ain't exactly glamorous, but hey stick around<br/>
              and check some paintings and furniture designs here.
            </p>
          </div>
        )}
        
        {page === "about" && (
          <div>
            <h2>About</h2>
            <p>
              This page was made to showcase some interesting art in a form of both<br/>
              paintings and furniture designs. At the moment, the list isn't big, but<br/>
              with time, that will change.
            </p>
          </div>
        )}

        {page === "contact" && (
          <div>
            <h2>Contact</h2>
            <p>
              Email: art-is-everywhere67@gmail.com</p>
          </div>
        )}
        {page === "paintings" && (
          <div>
            <h2>Paintings</h2>

            <SearchBar
              value={search}
              onChange={setSearch}
              onSearch={() => setQuery(search)}
              onClear={() => {
                setSearch("");
                setQuery("");
              }}
            />
            {filteredPaintings.length === 0 && (
            <p>No paintings found.</p>
            )}
            {filteredPaintings.map((painting, index) => (
              <div key={index}>
                <h3>
                  {painting.title} ({painting.artist})
                </h3>

                <p>{painting.description}</p>

                <img
                  src={painting.image}
                  alt={painting.title}
                  style={{ width: "300px" }}
                />
              </div>
            ))}
          </div>
        )}

        {page === "furniture" && (
          <div>
            <h2>Furniture</h2>

            <SearchBar
              value={search}
              onChange={setSearch}
              onSearch={() => setQuery(search)}
              onClear={() => {
                setSearch("");
                setQuery("");
              }}
            />
            {filteredFurniture.length === 0 && (
            <p>No paintings found.</p>
            )}
            {filteredFurniture.map((furniture, index) => (
              <div key={index}>
                <h3>
                  {furniture.title} ({furniture.creator})
                </h3>

                <p>{furniture.description}</p>

                <img
                  src={furniture.image}
                  alt={furniture.title}
                  style={{ width: "300px" }}
                />
              </div>
            ))}
          </div>
        )}
        


      </div>
    </div>
  );
}
type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  onClear: () => void;
};

function SearchBar({ value, onChange, onSearch, onClear }: SearchBarProps) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}
export default App;