import './Animal.css';

export default function Animal({ animal }) {
  let audio = new Audio(`/sound/${animal.type}.mp3`);

  const animalNoise = () => {
    audio.play();
  };

  return (
    <>
      <div className="animal" style={{ top: animal.top, left: animal.left }}>
        <button onClick={animalNoise}>
          <img src={`/animals/${animal.type}.svg`} />
          <p className="name"> {animal.name} </p>
          {animal.says}
        </button>
      </div>
    </>
  );
}
